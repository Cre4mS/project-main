function checkNumber(){
	if (event.keyCode < 48 || event.keyCode > 57){
		event.returnValue = false;
	}
}
function isBlank(myObj) {
		if(myObj.value=='') { return true; }
		return false;
}
function isEmail(str) {
	//alert(str);
  var supported = 0;
  if (window.RegExp) {
    var tempStr = "a";
    var tempReg = new RegExp(tempStr);
    if (tempReg.test(tempStr)) supported = 1;
  }
 //alert(str + '1');
  if (!supported) 
  return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
  var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
  var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
  return (!r1.test(str) && r2.test(str));
}
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
/*function donwperson(input,priceadult,pricechild) {
	if(input=="input_adult"){
		if(document.myForm.input_adult.value!=1){
			var adult=parseInt(document.myForm.input_adult.value);
			var child=parseInt(document.myForm.input_child.value);
			adult=parseInt(adult-1);
			var priceadult=parseInt(priceadult);
			var pricechild=parseInt(pricechild);
			var total=(adult*priceadult)+(child*pricechild);
			document.myForm.input_price.value=addCommas(total);
		}
	}else{
		if(document.myForm.input_child.value>0){
			var adult=parseInt(document.myForm.input_adult.value);
			var child=parseInt(document.myForm.input_child.value);
			child=parseInt(child-1);
			var priceadult=parseInt(priceadult);
			var pricechild=parseInt(pricechild);
			var total=(adult*priceadult)+(child*pricechild);
			document.myForm.input_price.value=addCommas(total);
		}
	}
}
function upperson(input) {
	if(input=="input_adult"){
		var adult=parseInt(document.myForm.input_adult.value);
		adult=parseInt(adult+1);
		document.myForm.input_adult.value=adult;
		Loadprice();
		//alert("priceadult="+adult*priceadult+" pricechild="+child*pricechild);
	}else{
		var child=parseInt(document.myForm.input_child.value);
		child=parseInt(child+1);
		document.myForm.input_child.value=child;
		Loadprice();
	}
}*/
function Loadprice() {

	jQuery("#preloader").show();
	var TYPE="POST";
	var URL="libs/loadbooking.php";
	jQuery('#myaction').val('loadprice');
	var dataSet= jQuery("#tourBookingForm").serialize();
		
	jQuery.ajax({type:TYPE,url:URL,data:dataSet,
		success:function(html){
			
			jQuery("#tickets").show();
			jQuery("#tickets").html(html);
			//Showprice();
			jQuery("#preloader").hide();
		}
	}); 	
}
function Showprice() {
	
	jQuery("#preloader").show();
	var TYPE="POST";
	var URL="libs/loadbooking.php";
	jQuery('#myaction').val('showprice');
	var dataSet= jQuery("#tourBookingForm").serialize();
		
	jQuery.ajax({type:TYPE,url:URL,data:dataSet,
		success:function(html){
			
			//jQuery("#loadprice").show();
			jQuery("#showprice").html(html);
			jQuery("#preloader").hide();
		}
	}); 	
}


function SubmitContact(){
	with(document.myForm) {
		
			if(isBlank(input_name)) { 
				jQuery("#input_name").css({'border-color' : '#FF0000'});
				jQuery('#input_name').focus();return false;
			}else{
				jQuery("#input_name").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_email)) { 
				jQuery("#input_email").css({'border-color' : '#FF0000'});
				jQuery('#input_email').focus();return false;
			}else{
				if(!isEmail(jQuery("#input_email").val())){
					alert("Invalid email format.");
					jQuery("#input_email").css({'border-color' : '#FF0000'});
					jQuery('#input_email').focus();return false;
				}else{
					jQuery("#input_email").css({'border-color' : '#E8E8E8'});
				}
			}
			if(isBlank(input_phone)) { 
				jQuery("#input_phone").css({'border-color' : '#FF0000'});
				jQuery('#input_phone').focus();return false;
			}else{
				jQuery("#input_phone").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_subject)) { 
				jQuery("#input_subject").css({'border-color' : '#FF0000'});
				jQuery('#input_subject').focus();return false;
			}else{
				jQuery("#input_subject").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_message)) { 
				jQuery("#input_message").css({'border-color' : '#FF0000'});
				jQuery('#input_message').focus();return false;
			}else{
				jQuery("#input_message").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(inputkeyCode)) { 
				jQuery("#inputkeyCode").css({'border-color' : '#FF0000'});
				jQuery('#inputkeyCode').focus();return false;
			}else{
				jQuery("#inputkeyCode").css({'border-color' : '#E8E8E8'});
			}
	}
	jQuery("#preloader").show();

	var TYPE="POST";
	var URL="insertcontact.php";
	var dataSet= jQuery("#myForm").serialize();

	jQuery.ajax({type:TYPE,url:URL,data:dataSet,
		success:function(html){			
			
			jQuery("#alert-msg").show();
			jQuery("#alert-msg").html(html)
			jQuery("#preloader").hide();
			
		}
	});
 
}
function selectpayment(id) {
	if(id==1){
		jQuery("#payment").hide();
	}else{
		jQuery("#payment").show();
	}
}
function CancelBooking() {
	
	jQuery("#preloader").show();
	jQuery("#Step1").show();
	jQuery("#Step2").hide();
	jQuery("#preloader").hide();
}
function LoadReview(myid,show,div) {

	jQuery("#preloader").show();

	var TYPE="POST";
	var URL="libs/loadbooking.php";
	var dataSet={
	myid: myid,
	show: show,
	div : div ,
	myaction : "loadreview"
	};

	jQuery.ajax({type:TYPE,url:URL,data:dataSet,
		success:function(html){
			jQuery("#"+div+"").show();
			jQuery("#"+div+"").html(html)
			jQuery("#preloader").hide();
		}
	});
}
function SubmitBooking() {
	with(document.myForm) {
			if(isBlank(input_date)) { 
				jQuery("#input_date").css({'border-color' : '#FF0000'});
				jQuery('#input_date').focus();return false;
			}else{
				jQuery("#input_date").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_pickup)) { 
				jQuery("#input_pickup").css({'border-color' : '#FF0000'});
				jQuery('#input_pickup').focus();return false;
			}else{
				jQuery("#input_pickup").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_pickupdetail)) { 
				jQuery("#input_pickupdetail").css({'border-color' : '#FF0000'});
				jQuery('#input_pickupdetail').focus();return false;
			}else{
				jQuery("#input_pickupdetail").css({'border-color' : '#E8E8E8'});
			}
			if(document.myForm.input_prefix.value=="") { 
				jQuery("#input_prefix").css({'border-color' : '#FF0000'});
				jQuery('#input_prefix').focus();return false;
			}else{
				jQuery("#input_prefix").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_fname)) { 
				jQuery("#input_fname").css({'border-color' : '#FF0000'});
				jQuery('#input_fname').focus();return false;
			}else{
				jQuery("#input_fname").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_lname)) { 
				jQuery("#input_lname").css({'border-color' : '#FF0000'});
				jQuery('#input_lname').focus();return false;
			}else{
				jQuery("#input_lname").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_email)) { 
				jQuery("#input_email").css({'border-color' : '#FF0000'});
				jQuery('#input_email').focus();return false;
			}else{
				if(!isEmail(jQuery("#input_email").val())){
					alert("Invalid email format.");
					jQuery("#input_email").css({'border-color' : '#FF0000'});
					jQuery('#input_email').focus();return false;
				}else{
					jQuery("#input_email").css({'border-color' : '#E8E8E8'});
				}
			}
			if(isBlank(input_phone)) { 
				jQuery("#input_phone").css({'border-color' : '#FF0000'});
				jQuery('#input_phone').focus();return false;
			}else{
				jQuery("#input_phone").css({'border-color' : '#E8E8E8'});
			}
	}
	
	document.getElementById("myForm").submit();
}
function PaymentBooking() {
	with(document.myForm) {
			if(isBlank(input_pickupdetail)) { 
				jQuery("#input_pickupdetail").css({'border-color' : '#FF0000'});
				jQuery('#input_pickupdetail').focus();return false;
			}else{
				jQuery("#input_pickupdetail").css({'border-color' : '#E8E8E8'});
			}
			if(document.myForm.input_prefix.value=="") { 
				jQuery("#input_prefix").css({'border-color' : '#FF0000'});
				jQuery('#input_prefix').focus();return false;
			}else{
				jQuery("#input_prefix").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_fname)) { 
				jQuery("#input_fname").css({'border-color' : '#FF0000'});
				jQuery('#input_fname').focus();return false;
			}else{
				jQuery("#input_fname").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_lname)) { 
				jQuery("#input_lname").css({'border-color' : '#FF0000'});
				jQuery('#input_lname').focus();return false;
			}else{
				jQuery("#input_lname").css({'border-color' : '#E8E8E8'});
			}
			if(isBlank(input_email)) { 
				jQuery("#input_email").css({'border-color' : '#FF0000'});
				jQuery('#input_email').focus();return false;
			}else{
				if(!isEmail(jQuery("#input_email").val())){
					alert("Invalid email format.");
					jQuery("#input_email").css({'border-color' : '#FF0000'});
					jQuery('#input_email').focus();return false;
				}else{
					jQuery("#input_email").css({'border-color' : '#E8E8E8'});
				}
			}
			if(isBlank(input_phone)) { 
				jQuery("#input_phone").css({'border-color' : '#FF0000'});
				jQuery('#input_phone').focus();return false;
			}else{
				jQuery("#input_phone").css({'border-color' : '#E8E8E8'});
			}
			
			if(document.getElementById("input_payment0").checked==true){
				if(isBlank(number)) { 
					jQuery("#number").css({'border-color' : '#FF0000'});
					jQuery('#number').focus();return false;
				}else{
					jQuery("#number").css({'border-color' : '#dedede'});
				}
				if(isBlank(holder_name)) { 
					jQuery("#holder_name").css({'border-color' : '#FF0000'});
					jQuery('#holder_name').focus();return false;
				}else{
					jQuery("#holder_name").css({'border-color' : '#dedede'});
				}
				if(isBlank(expiration_month)) { 
					jQuery("#expiration_month").css({'border-color' : '#FF0000'});
					jQuery('#expiration_month').focus();return false;
				}else{
					jQuery("#expiration_month").css({'border-color' : '#dedede'});
				}
				if(isBlank(expiration_year)) { 
					jQuery("#expiration_year").css({'border-color' : '#FF0000'});
					jQuery('#expiration_year').focus();return false;
				}else{
					jQuery("#expiration_year").css({'border-color' : '#dedede'});
				}
				if(isBlank(security_code)) { 
					jQuery("#security_code").css({'border-color' : '#FF0000'});
					jQuery('#security_code').focus();return false;
				}else{
					jQuery("#security_code").css({'border-color' : '#dedede'});
				}
			}
			
			if(document.getElementById("input_accept").checked!=true) { 
				jQuery(".checkbox").css({'color' : '#FF0000'});
				jQuery('#input_accept').focus();return false;
			}else{
				jQuery(".checkbox").css({'color' : '#555'});
			}
			
	}
	if(confirm('คุณต้องการทำรายการจองหรือไม่? การยืนยันการชำระเงิน')){
		if(document.getElementById("input_payment0").checked==true){
		  Omise.setPublicKey('pkey_5imfic3n7giojkgvnd8');
		
		  var myForm = document.getElementById('myForm')
		
		  var cardInformation = {
			name:             myForm.holder_name.value,
			number:           myForm.number.value,
			expiration_month: myForm.expiration_month.value,
			expiration_year:  myForm.expiration_year.value,
			security_code:    myForm.security_code.value
			
		  };
		
		  Omise.createToken('card', cardInformation, function(statusCode, response) {

			if (statusCode === 200) {
			  // Success: send back the TOKEN_ID to your server. The TOKEN_ID can be
			  // found in `response.id`.
			  myForm.omise_token.value = response.id;
			  //myForm.submit();
			  //alert(response.id);
			  //alert(response.code);
			  	var TYPE="POST";
				var URL="insertbooking.php";
				var dataSet= jQuery("#myForm").serialize();
			
				jQuery.ajax({type:TYPE,url:URL,data:dataSet,
					success:function(html){			
					//alert("insert");	
						jQuery("#completed").show();
						jQuery("#completed").html(html);
						//jQuery("#preloader").hide();
					}
				});
		  }else {
				jQuery("#token_errors").show();
				jQuery("#token_errors").html(response.message);
				jQuery("#preloader").hide();
			  // Error: display an error message. Note that `response.message` contains
			  // a preformatted error message. Also note that `response.code` will be
			  // "invalid_card" in case of validation error on the card.
			}
		  });
		}else if(document.getElementById("input_payment1").checked==true){
			jQuery("#preloader").show();
			var TYPE="POST";
			var URL="insertbooking.php";
			var dataSet= jQuery("#myForm").serialize();
				
			jQuery.ajax({type:TYPE,url:URL,data:dataSet,
				success:function(html){
					
					jQuery("#completed").show();
					jQuery("#completed").html(html);
					document.getElementById("myFormPaypal").submit();
					//jQuery("#preloader").hide();
				}
			}); 
		}else if(document.getElementById("input_payment2").checked==true){
			jQuery("#preloader").show();
			var TYPE="POST";
			var URL="insertbookingpaypaldeposit.php";
			var dataSet= jQuery("#myForm").serialize();
				
			jQuery.ajax({type:TYPE,url:URL,data:dataSet,
				success:function(html){
					
					jQuery("#completed").show();
					jQuery("#completed").html(html);
					document.getElementById("myFormPaypal").submit();
					//jQuery("#preloader").hide();
				}
			}); 
		}else if(document.getElementById("input_payment3").checked==true){
			jQuery("#preloader").show();
			var TYPE="POST";
			var URL="insertbooking.php";
			var dataSet= jQuery("#myForm").serialize();
				
			jQuery.ajax({type:TYPE,url:URL,data:dataSet,
				success:function(html){
					
					jQuery("#completed").show();
					jQuery("#completed").html(html);

					//jQuery("#preloader").hide();
				}
			}); 
		}
	}
}
function insertcontact() {
	
	var TYPE="POST";
	var URL="insertcontact.php";
	var dataSet= jQuery("#myformcontact").serialize();
		
	jQuery.ajax({type:TYPE,url:URL,data:dataSet,
		success:function(html){
			jQuery("#alert-msg").show();
			jQuery("#alert-msg").html(html);
		}
	}); 
}

jQuery(document).ready(function() {

    // Booking datepicker
   jQuery(".input-daterange").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        startDate: new Date()
    });
	
	
	 /*jQuery("#box_style_1 .date-pick, #myForm .date-pick, .booking-title-box form.booking-form .date-pick").datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        startDate: new Date()
    });*/

    // Booking tab Date Picker
    /*jQuery("#booking-tab-contents .booking-dates").datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        startDate: new Date(),
        inputs: jQuery('.booking-date-fields-container')
    });*/

    // Chosen Select box
    //jQuery("select").chosen();

   
});

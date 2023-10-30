<?php
        require 'conn.php';

        $Username=$_POST['Username'];
        $Firstname=$_POST['Firstname'];
        $Lastname=$_POST['Lastname'];
        $Email=$_POST['Email'];
        $Password=$_POST['Password'];
        $Address=$_POST['Address'];
        $Zipcode=$_POST['Zipcode'];
        $Tel=$_POST['Tel'];
        
        $Password=hash('sha512','&Password');

        $sql_update="INSERT INTO tb_regis(Username,Firstname,Lastname,Email,Password,Address,Zipcode,Tel) 
        VALUES ('$Username','$Firstname','$Lastname','$Email','$Password','$Address','$Zipcode','$Tel')";
        
        $result= $conn->query($sql_update);
        
        if($result) {
            echo "<script> alert('สมัครสมาชิกสำเร็จจจจจ'); </script>";
            echo "<script> window.location='loginuser.php'; </script>";
            
        } else {
            echo "Error God Damn it : ".$sql_update. mysqli_error($conn);
            echo "<script> alert('สมัครสมาชิกไม่สำเร็จ'); </script>";
        }
        ?>
       




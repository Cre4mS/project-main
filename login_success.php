<?php
        include 'conn.php';
        session_start();

        $Username=$_POST['Username'];
        $Password=$_POST['Password'];

        $Password=hash('sha512',$Password);

        $sql="SELECT * FROM tb_regis WHERE Username ='$Username' and Password ='$Password'";
        $result= mysqli_query($conn,$sql);
        $row =mysqli_fetch_array($result);

        if($row > 0){
            $_SESSION["Username"]=$row['Username'];
            $_SESSION["Password"]=$row['Password'];
            $_SESSION["Firstname"]=$row['Firstname'];
            $_SESSION["Lastname"]=$row['Lastname'];
            $show=header("location:index.php");
        }else{
            $_SESSION["Error"] = "<p> Your username or password is invaild </p>";
            $show=header("location:loginuser.php");
        }
        echo $show;
        ?>

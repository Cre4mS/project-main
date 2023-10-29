<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="loginuser.php">
    <?php
        require 'conn.php';

        $sql_update="INSERT INTO tb_regis(Username,Firstname,Lastname,Email,Password,Address,Zipcode,Tel) 
        VALUES ('$_POST[Username]','$_POST[Firstname]','$_POST[Lastname]','$_POST[Email]','$_POST[Password]','$_POST[Address]','$_POST[Zipcode]','$_POST[Tel]')";
        
        $result= $conn->query($sql_update);
        
        if(!$result) {
            die("Error God Damn it : ". $conn->error);
        } else {
        echo "Register Success <br>";
        header("refresh: 1; url=http://localhost/project/loginuser.php");
        }
        ?>
        </form>
</body>
</html>




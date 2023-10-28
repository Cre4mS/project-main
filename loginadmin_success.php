<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require 'conn.php';
        $sql_update="INSERT INTO tb_loginadmin(Username_admin,Password_admin) VALUES ('$_POST[Username_admin]','$_POST[Password_admin]')";
        $result= $conn->query($sql_update);
        if(!$result) {
        die("Error God Damn it : ". $conn->error);
        } else {
        echo "Success <br>";
        header("refresh: 1; url=http://localhost/project/databooking.php");
        }
    ?>
</body>
</html>
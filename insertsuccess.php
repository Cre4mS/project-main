<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="datapackage.php">
    <?php
        require 'conn.php';
        $sql_update="INSERT INTO tb_package (Name_pck,Price_pck,image,Detail_pck) 
        VALUES ('$_POST[Name_pck]','$_POST[Price_pck]','$_POST[image]','$_POST[Detail_pck]')";

        $result= $conn->query($sql_update);

        if(!$result) {
        die("Error God Damn it : ". $conn->error);
        } else {

        echo "Insert Success <br>";
        header("refresh: 1; url=http://localhost/project/datapackage.php");
        }

    ?>
    </form >
</body>
</html>
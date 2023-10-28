<?php
    require 'conn.php';
    $sql = "SELECT * FROM tb_package";
    $result = $conn->query($sql);
    if(!$result){
        die("Error : ". $conn->$conn_error);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <title>ข้อมูลแพ็คเกจ</title>
</head>
<body>
    <div class="container">
        <h1>ข้อมูลแพ็คเกจ</h1><br>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">รหัส</th>
                    <th scope="col-4">ชื่อแพ็คเกจ</th>
                    <th scope="col-4">ราคา</th>
                    <th scope="col-4">รายละเอียด</th>
                    <th scope="col-4">Edit</th>
                    <th scope="col-4">Delete</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<tr> <td>".$row["Id_pck"]."</td>"."<td>".$row["Name_pck"]."</td>"."<td>".$row["Price_pck"]."</td>"."<td>".$row["Detail_pck"]."</td>"."<td>"."<a class='btn btn-warning' href='editpackage.php? Id_pck=".$row["Id_pck"]."'>Edit</a>"."</td>"."<td>"."<a class='btn btn-warning' href='deletepackage.php? Id_pck=".$row["Id_pck"]."'>Delete</a>"."</td>";
                            echo "</tr>";    
                        }
                    }else {
                        echo "0 results";
                    }
                    $conn->close();
                ?>
            </tbody>
        </table>
        <a class="btn btn-success" href='insertpackage.php'>เพิ่มข้อมูลแพ็คเกจ</a>
    </div>
</body>

</html>
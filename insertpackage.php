<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>เพิ่มข้อมูลแพ็คเกจ</title>
</head>
<body class="container">
    <form id="form1" name="form1" method="post" action="insertsuccess.php">
        <p>
            <label for="name">ชื่อแพ็คเกจ</label><br>
            <input type="text" name="Name_pck" id="Name_pck">
        </p>
        <p>
            <label for="address">รูป</label><br>
            <input type="file" name="image" id="image">
        </p>
        <p>
            <label for="telephone">ราคา</label><br>
            <input type="text" name="Price_pck" id="Price_pck">
        </p>
        <p>
            <label for="telephone">รายละเอียด</label><br>
            <textarea type="text" name="Detail_pck" id="Detail_pck"></textarea>
        </p>
        <input type="submit" class="btn btn-success" value="บันทึก">
        <a class="btn btn-success" href='datapackage.php'>กลับ</a>
    </form>
</body>
</html>
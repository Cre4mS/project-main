<?php
require('conn.php');

$Id_pck = $_GET["Id_pck"];

$sql = "DELETE FROM tb_package WHERE Id_pck=$Id_pck";
$result = $conn->query($sql);

if ($result) {
  header("location:datapackage.php");
  exit(0);
} else {
  echo "ไม่สามารถลบได้ หรือ มีข้อผิดพลาดเกิดขึ้น";
}
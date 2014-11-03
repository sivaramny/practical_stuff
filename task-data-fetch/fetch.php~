<?php
//database settings
$connect = mysqli_connect("localhost", "root", "root", "test_db");
 
$result = mysqli_query($connect, "select * from test");
 
$data = array();
 
while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);
?>

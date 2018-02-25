<?php
include "connection.php";

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$name = $data->Name;
$deposit = $data->Deposit;
$card = $data->cCard;

$sql = "UPDATE accounts SET Name='$name', Deposit='$deposit', cCard='$card' WHERE id='$id'";

$query = mysqli_query($db, $sql);

if ($query) {
  echo "200";
}else {
  echo "500";
}

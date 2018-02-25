<?php

include 'connection.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$sql = "DELETE FROM accounts WHERE id = '$id' LIMIT 1";

$query = mysqli_query($db, $sql);

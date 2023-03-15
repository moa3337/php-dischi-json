<?php
$data = file_get_contents(__DIR__ . "/../data/cd_list.json");

header('Content-Type: application/json');

echo $data;


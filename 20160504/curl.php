<?php

// echo "hi";
// return;

// 建立CURL連線
$ch = curl_init();

$url=$_REQUEST["url"];
//type=ta&perd=d&mkt=10&sym=2501

$type = $_REQUEST["type"];
$perd = $_REQUEST["perd"];
$mkt = $_REQUEST["mkt"];
$sym = $_REQUEST["sym"];

$url = $url . "?" . "type=" . $type . "&perd=" . $perd . "&mkt=" . $mkt . "&sym=" . $sym;

// 設定擷取的URL網址
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, false);
//將curl_exec()獲取的訊息以文件流的形式返回，而不是直接輸出。
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);

// 執行
$temp=curl_exec($ch);

// 關閉CURL連線
curl_close($ch);

header("Content-Type:text/html; charset=utf-8");
echo $temp;

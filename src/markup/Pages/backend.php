<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
     
    $DIR = "/src/images";

    $httpPost = file_get_contents("php://input");
    $req = json_decode($httpPost);
       
    $file_chunks = explode(";base64,", $req->image);
       
    $fileType = explode("image/", $file_chunks[0]);
    $image_type = $fileType[1];
    $base64Img = base64_decode($file_chunks[1]);
    
    $file = $DIR . uniqid() . '.png';
    file_put_contents($file, $base64Img); 
?>
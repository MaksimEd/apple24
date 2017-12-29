<?php 

if (!empty($_POST['phone']) || !empty($_POST['email'])){


    $mailto = 'ed.mask@yandex.by, 6012206mts@gmail.com, Gsmmagazin7@gmail.com';

    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));
    $model = htmlspecialchars(trim($_POST['model']));
    $color = htmlspecialchars(trim($_POST['color']));
    $size = htmlspecialchars(trim($_POST['size']));
    $url = htmlspecialchars(trim($_POST['url']));



    $gift = '';
    if (!empty($_POST['gift']) && is_array($_POST['gift']) )
    {
        $gift = implode(", ", $_POST["gift"]);
    }


    $valToSend = htmlspecialchars(trim($_POST['valToSend']));

    $eol = "\n";
    $subject = '=?utf-8?B?'. base64_encode('Письмо от клиента с сайта apple24.by') .'?=';
    $headers= "MIME-Version: 1.0\r";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers  .= 'From: info@apple24.by'.$eol;

    $msg.=  "Из формы: $valToSend \r\n\n";

    if($name) {
      $msg.=  "Имя: $name \r\n\n";
    }

    if($phone){
       $msg.=  "Телефон: $phone \r\n\n";
    }

    if($model){
       $msg.=  "Модель телефона: $model \r\n\n";
    }

    if($color){
       $msg.=  "Цвет телефона: $color \r\n\n";
    }

    if($size){
       $msg.=  "Память телефона: $size \r\n\n";
    }

    if($gift){
       $msg.=  "Подарки: $gift \r\n\n";
    }

    if($url){
       $msg.=  "Ссылка VK: $url \r\n\n";
    }

    if($message){
       $msg.=  "Сообщение: $message \r\n\n";
    }


  if (mail($mailto, $subject, $msg, $headers)){


   echo "1";

  } else {
    echo "3";
  }

} else {
  echo "2";
}

?>
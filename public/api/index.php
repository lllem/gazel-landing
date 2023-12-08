<?php

$to = 'melor@inbox.ru';
// $to = '10001october@gmail.com';

if (isset($_POST)) {

    $_POST = json_decode(file_get_contents('php://input'), true);

    $subject = 'Обратный звонок';

    $message = '';
    $fileContent = fopen('./email/template.html','r');
    while ($line = fgets($fileContent)) {
        $message .= $line;
    }
    fclose($fileContent);

    $phone = $_POST['phone'];
    $city = $_POST['city'];
    $furgon = $_POST['furgon'];
    $distance = $_POST['distance'];
    $movers = $_POST['movers'];
    $total = $_POST['total'];

    $message = str_replace("%phone%", $phone, $message);
    $message = str_replace("%city%", $city, $message);
    $message = str_replace("%furgon%", $furgon, $message);
    $message = str_replace("%distance%", $distance, $message);
    $message = str_replace("%movers%", $movers, $message);
    $message = str_replace("%total%", $total, $message);

    // echo($message);
}

// send email
if ($message and $message != '') {
    $subject = "=?utf-8?B?".base64_encode($subject)."?=";

    $headers = "From: Вывоз мусора ГАЗелью <admin@musor4.ru>" . "\r\n";
    $headers .= "Reply-To: admin@musor4.ru" . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo '{"status": "success", "message": "'.$phone.'" }';
    }
    else {
        echo '{"status": "error", "message": "Ошибка, сообщение не отправлено! Возможно, проблемы на сервере" }';
    }
}

?>

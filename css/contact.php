<?php 

$robotest = $_POST['robotest']; //just testin' for robots

$recipient = "info@collinscollective.com.au"; //recipient 
$email = ($_POST['email']); //senders e-mail adress 

if((filter_var($email, FILTER_VALIDATE_EMAIL)) && ($robotest == "")) { 

$Name = ($_POST['name']); //senders name 

$mail_body .= "{$_POST['comments']}; \r\n \r\n";


$subject = "Inquiry"; //subject 
$header = "From: ". $Name . " <" . $email . ">\r\n"; //optional headerfields 

mail($recipient, $subject, $mail_body, $header); //mail command :) 

} else {
  header("HTTP/1.1 500 Internal error");
  print "You've entered an invalid email address!";
 }
?>
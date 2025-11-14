<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "mulingacharles@gmail.com";
    $subject = "New Contact Message from Foodify Simples Visitor";
    
    $body = "You have received a new message from your website:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if(mail($to, $subject, $body, $headers)) {
        echo "Thank you, your message has been sent successfully!";
    } else {
        echo "Sorry, something went wrong. Message not sent.";
    }
}
?>

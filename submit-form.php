<?php
// submit-form.php

header('Content-Type: application/json');

function sendJsonResponse($success, $message) {
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = trim($_POST["message"]);

    // Check that all required fields are filled out
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        sendJsonResponse(false, "Proszę wypełnij wszystkie pola i spróbuj jeszcze raz.");
    }

    // Validate message length (at least 100 characters)
    if (strlen($message) < 100) {
        sendJsonResponse(false, "Twoja wiadomość musi zawierać przynajmniej 100 znaków.");
    }

    // Validate phone number format (Polish format)
    if (!preg_match("/^(\+48[0-9]{9}|0[0-9]{9}|[0-9]{9})$/", $phone)) {
        sendJsonResponse(false, "Proszę podaj poprawny numer telefonu.");
    }

    // Set the recipient email address
    $recipient = "pwalus@o2.pl"; // Change this to your production email address

    // Set the email subject
    $subject = "Nowy email od $name";

    // Build the email content
    $email_content = "Imie: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefon: $phone\n\n";
    $email_content .= "Wiadomość:\n$message\n";

    // Build the email headers
    $email_headers = "From: Pabloautokary wiadomość od : $name <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        sendJsonResponse(true, "Dziękuje! Twoja wiadomość została przesłana. Postaramy się odpowiedzieć jak najszybciej :), życzymy miłego dnia Pablo autokary!!!.");
    } else {
        sendJsonResponse(false, "Oops! Coś poszło nie tak, spróbuj jeszcze raz później.");
    }
} else {
    sendJsonResponse(false, "Method Not Allowed");
}
?>
<?php
// submit-form.php

// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = trim($_POST["message"]);

    // Check that all required fields are filled out
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        http_response_code(400);
        echo "Proszę wypełnij wszystkie pola i spróbuj jeszcze raz.";
        exit;
    }

    // Validate message length (at least 100 characters)
    if (strlen($message) < 100) {
        http_response_code(400);
        echo "Twoja wiadomość musi zawierać przynajmniej 100 znaków.";
        exit;
    }

    // Validate phone number format (Polish format)
    if (!preg_match("/^(\+48[0-9]{9}|0[0-9]{9}|[0-9]{9})$/", $phone)) {
        http_response_code(400);
        echo "Proszę podaj poprawny numer telefonu.";
        exit;
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
        http_response_code(200);
        echo "Dziękuje! Twoja wiadomość została przesłana. Postaramy się odpowiedzieć jak najszybciej :), życzymy miłego dnia Pablo autokary!!!.";
    } else {
        http_response_code(500);
        echo "Oops! Coś poszło nie tak, spróbuj jeszcze raz później.";
    }
} else {
    // Not a POST request, set a 405 (Method Not Allowed) response code
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
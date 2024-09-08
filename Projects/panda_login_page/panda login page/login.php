<?php
// login.php

// Start the session if you need to maintain user sessions
// session_start();

// Get the submitted username and password
$username = $_POST['username'];
$password = $_POST['password'];

// Define the credentials array
$credentials = array(
    "user1" => "pass1",
    "user2" => "pass2",
    "user3" => "pass3",
    "user4" => "pass4",
    "user5" => "pass5",
    "user6" => "pass6",
    "user7" => "pass7",
    "user8" => "pass8",
    "user9" => "pass9",
    "user10" => "pass10",
    "user11" => "pass11",
    "user12" => "pass12",
    "user13" => "pass13",
    "user14" => "pass14",
    "user15" => "pass15",
    "user16" => "pass16",
    "user17" => "pass17",
    "user18" => "pass18",
    "user19" => "pass19",
    "user20" => "pass20"
);

// Check if username exists and password matches
if (isset($credentials[$username]) && $credentials[$username] == $password) {
    // Login successful
    echo "Login successful! Welcome, " . htmlspecialchars($username) . "!";
    // Redirect to a protected page or dashboard if needed
    // header("Location: dashboard.php");
} else {
    // Login failed
    echo "Login failed. Invalid username or password.";
    // Optionally, redirect back to the login page
    // header("Location: index.html");
}
?>

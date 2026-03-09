<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

  $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
  if ($conn->query($sql)) {
    echo "<script>alert('Signup successful! Please login.'); window.location='login.php';</script>";
  } else {
    echo "Error: " . $conn->error;
  }
}
?>

<!DOCTYPE html>
<html>
<head><title>Signup</title><link rel="stylesheet" href="style.css">

</head>
<body>
<form method="post">
  <h2>Signup</h2>
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="email" placeholder="Email" required>
  <input type="password" name="password" placeholder="Password" required>
  <button type="submit">Register</button>
  <p>Already have an account? <center><a href="login.php">Login</a></center></p>
</form>
</body>
</html>

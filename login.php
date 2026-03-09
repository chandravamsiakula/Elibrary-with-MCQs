<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['name'];      // store user name
            $_SESSION['email'] = $user['email'];    // store email for admin check
            header("Location: books.php");          // redirect to books page
            exit;
        } else {
            echo "<script>alert('Incorrect password');</script>";
        }
    } else {
        echo "<script>alert('User not found');</script>";
    }
}
?>


<!DOCTYPE html>
<html>
<head><title>Login</title><link rel="stylesheet" href="style.css"></head>
<style>
     body {
      min-height: 100vh;
      background: linear-gradient(270deg, #4b6cb7, #182848, #ff9966, #ff5e62);
      background-size: 800% 800%;
      animation: gradientMove 15s ease infinite;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    </style>
<body>
<form method="post">
  <h2>Login</h2>
  <input type="email" name="email" placeholder="Email" required></br></br>
  <input type="password" name="password" placeholder="Password" required></br></br>
  <button type="submit">Login</button>
  <p>Don't have an account? <center><a href="signup.php">Signup</a></center></p>
</form>
</body>
</html>

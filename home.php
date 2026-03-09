<?php
session_start();
if (!isset($_SESSION['user'])) {
  header("Location: login.php");
  exit;
}
?>

<!DOCTYPE html>
<html>
<head><title>Home</title><link rel="stylesheet" href="style.css"></head>
<body>
  <header>
    <h2>Welcome, <?php echo $_SESSION['user']; ?> 👋</h2>
    <nav>
      <a href="books.php">View Books</a>
      <a href="add_book.php">Add Book</a>
      <a href="logout.php">Logout</a>
    </nav>
  </header>
</body>
</html>

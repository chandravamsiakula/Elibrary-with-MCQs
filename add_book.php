<?php
session_start();
include 'db.php';

// Only allow these two admins
$admin_emails = ['ravitej7133@gmail.com', 'loukickreddy097@gmail.com'];

if(!isset($_SESSION['email']) || !in_array($_SESSION['email'], $admin_emails)){
    echo "<script>alert('Access denied! Admins only'); window.location='books.php';</script>";
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $title = trim($_POST['title']);
  $author = trim($_POST['author']);
  $year = (int)$_POST['year'];

  if (isset($_FILES['book_file']) && $_FILES['book_file']['error'] == 0) {
    $upload_dir = __DIR__ . "/uploads/";
    $db_path_prefix = "uploads/";

    if (!is_dir($upload_dir)) {
      mkdir($upload_dir, 0777, true);
    }

    $file_name = time() . "_" . basename($_FILES["book_file"]["name"]);
    $target_file = $upload_dir . $file_name;
    $file_path_in_db = $db_path_prefix . $file_name;

    $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if ($file_type != "pdf") {
      echo "<script>alert('Only PDF files are allowed!');</script>";
    } else {
      if (move_uploaded_file($_FILES["book_file"]["tmp_name"], $target_file)) {
        $stmt = $conn->prepare("INSERT INTO books (title, author, year, file_path) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssis", $title, $author, $year, $file_path_in_db);
        $stmt->execute();
        echo "<script>alert('Book uploaded successfully!'); window.location='books.php';</script>";
        exit;
      } else {
        echo "<script>alert('Error uploading file.');</script>";
      }
    }
  } else {
    echo "<script>alert('Please select a PDF file to upload.');</script>";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Book (PDF)</title>
<link rel="stylesheet" href="style.css">

</head>
<body>

<header>
  <h2>📘 Admin Dashboard</h2>
  <nav>
    <a href="add_book.php">Add Book</a>
    <a href="books.php">View Books</a>
  </nav>
</header>

<form method="POST" enctype="multipart/form-data">
  <h2>Add New Book</h2>
  <input type="text" name="title" placeholder="Book Title" required>
  <input type="text" name="author" placeholder="Author" required>
  <input type="number" name="year" placeholder="Year" required>
  <input type="file" name="book_file" accept="application/pdf" required>
  <button type="submit">Upload Book</button>
</form>

<footer>
  <p>© 2025 My Library | All rights reserved</p>
</footer>

</body>
</html>

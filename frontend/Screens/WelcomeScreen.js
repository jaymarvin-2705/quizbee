<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz Bee</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #000;
      color: #fff;
      font-family: 'Poppins', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      position: relative;
    }

    /* Buttons Container */
    .top-buttons {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      gap: 10px;
    }

    button {
      border: none;
      padding: 8px 20px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      color: #fff;
    }

    .login-btn {
      background-color: #bfa51d; /* yellowish */
    }

    .signup-btn {
      background-color: #b32525; /* red */
    }

    /* Logo Section */
    .logo {
      text-align: center;
    }

    .logo img {
      width: 180px;
      height: auto;
    }

    .title {
      font-size: 28px;
      font-weight: 700;
      color: #f1c40f;
      margin-top: 15px;
      letter-spacing: 1px;
    }

    .subtitle {
      font-size: 12px;
      color: #ccc;
      letter-spacing: 1px;
      margin-top: 8px;
    }
  </style>
</head>
<body>

  <!-- Top Right Buttons -->
  <div class="top-buttons">
    <button class="login-btn">Login</button>
    <button class="signup-btn">Sign Up</button>
  </div>


    <div class="title">QUIZ BEE</div>
    <div class="subtitle">LEARN PROGRAMMING WITH QUIZ BEE APP</div>
  </div>

</body>
</html>
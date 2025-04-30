<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TomaBank Dashboard</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="card">
    <h2>Welcome to TomaBank</h2>
    
    <form id="account-form">
      <label>
        Account Holder:
        <input type="text" id="name-input" required />
      </label><br><br>
      <label>
        Balance:
        <input type="number" id="balance-input" step="0.01" required />
      </label><br><br>
      <button type="submit">Submit</button>
    </form>

    <hr>

    <p><strong>Account Holder:</strong> <span id="account-name">Loading...</span></p>
    <p><strong>Balance:</strong> <span id="account-balance">Loading...</span></p>
  </div>

  <script src="js/dashboard.js" type="module"></script>
</body>
</html>
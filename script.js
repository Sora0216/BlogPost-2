document.getElementById("login").addEventListener("click", function () {
  document.getElementById("article").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

document.getElementById("home").addEventListener("click", function () {
  document.getElementById("article").style.display = "block";
  document.getElementById("login-form").style.display = "none";
});

document.getElementById("dashboard").addEventListener("click", function () {
  alert("Dashboard functionality is not implemented yet.");
});

document.getElementById("logout").addEventListener("click", function () {
  document.getElementById("login").style.display = "inline";
  document.getElementById("logout").style.display = "none";
  alert("You have been logged out.");
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
    alert("Login successful!");
    document.getElementById("login-form").style.display = "none";
    document.getElementById("article").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "inline";
  } else {
    alert("Login failed. Please check your username and password.");
  }
}

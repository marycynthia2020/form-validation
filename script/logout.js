let logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", logout);

function logout() {
  window.location.href = "login.html";
}

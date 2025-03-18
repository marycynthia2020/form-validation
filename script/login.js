const loginBtn = document.getElementById("login");
const bodyContent = document.getElementsByTagName("body")[0];

loginBtn.addEventListener("click", login);
// console.log(localStorage.getItem(`user influnanceteam@gmail.com`));
// console.log(`user influnanceteam@gmail.com`);

function login(e) {
  let user;
  e.preventDefault();

  const Fname = document.getElementById("Fname").value;
  const Lname = document.getElementById("Lname").value;
  const email = document.getElementById("email").value;

  if (Fname !== "" && Lname !== "" && email !== "") {
    let userData = {
      firstName: Fname,
      lastName: Lname,
      email: email,
      isLoggedIn: true,
    };

    user = JSON.parse(localStorage.getItem(`user ${userData.email}`));

    if (
      user &&
      user.firstName == Fname &&
      user.lastName == Lname &&
      user.email == email
    ) {
      localStorage.setItem(`user ${userData.email}`, JSON.stringify(userData));
      window.location.href = "chatapp.html";
      // console.log("login sucees");
    } else {
      document.getElementById("error").textContent = "invalid login details";
    }
  } else {
    document.getElementById("error").textContent = "All details required";
  }

  if (Fname == "") {
    document.getElementById("Fname-error").textContent = "required";
  }

  if (Lname == "") {
    document.getElementById("Lname-error").textContent = "required";
  }

  if (email == "") {
    document.getElementById("email-error").textContent = "required";
  }

  // console.log(localStorage.getItem();
}
function clearField(selector) {
  document.getElementById(selector).textContent = "";
}

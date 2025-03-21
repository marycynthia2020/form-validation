const registerBtn = document.getElementById("submit");
const bodyContent = document.getElementsByTagName("body")[0];

registerBtn.addEventListener("click", register);

function register(e) {
  let user;
  e.preventDefault();

  const Fname = document.getElementById("Fname").value;
  const Lname = document.getElementById("Lname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const phoneNumber = document.getElementById("number").value;
  let gender;

  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }

  console.log(gender);

  if (
    Fname == "" ||
    Lname == "" ||
    email == "" ||
    address == "" ||
    phoneNumber == "" ||
    gender === undefined
  ) {
    document.getElementById("error").textContent = "All fields are required";
  } else {
    let userData = {
      firstName: Fname,
      lastName: Lname,
      email: email,
      // id: Math.random(),
    };

    localStorage.setItem(`user ${userData.email}`, JSON.stringify(userData));

    user = JSON.parse(localStorage.getItem(`user ${userData.email}`));
    console.log(user);
    document.getElementById("heading").textContent =
      "Your Registration is Successfull";
    document.getElementById("error").textContent = "";
    window.location.href = "login.html";

    let item = document.getElementsByTagName("input");
    for (let i = 0; i < item.length; i++) {
      item[i].value = "";
    }
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

  if (address == "") {
    document.getElementById("address-error").textContent = "required";
  }

  if (phoneNumber == "") {
    document.getElementById("phone-error").textContent = "required";
  }

  if (gender == undefined) {
    document.getElementById("gender-error").textContent = "required";
  }
}

console.log(localStorage.getItem(`user ${email}`));

function clearField(selector) {
  document.getElementById(selector).textContent = "";
}
// console.log(localStorage.getItem(`user ${userData.email}`));

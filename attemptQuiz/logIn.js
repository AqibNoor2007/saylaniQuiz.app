var emailElement = document.getElementById("email");
var rollNoElement = document.getElementById("rollNo");
var nameElement = document.getElementById("full_name");

const CheckValidation = (id, styleClass, msg) => {
  var errorId = document.getElementById(id);
  errorId.innerText = msg;
  errorId.classList.add(styleClass);
};

const HandleEmailError = () => {
  var emailValue = emailElement.value;
  if (!emailValue.includes("@")) {
    CheckValidation("errorEmail", "hidden", "Email is included @");
  } else if (emailValue.includes(" ")) {
    CheckValidation("errorEmail", "hidden", "Email not contians spaces");
  } else {
    document.getElementById("errorEmail").classList.remove("hidden");
  }
};

const HandleRollNoError = () => {
  var rollNoValue = rollNoElement.value;
  if (!rollNoValue) {
    CheckValidation("errorRollNo", "hidden", "Password is required");
  } else {
    document.getElementById("errorRollNo").classList.remove("hidden");
  }
};

const HandleNameError = () => {
  var name = nameElement.value;
  if (!name) {
    CheckValidation("errorName", "hidden", "Name is required");
  } else if (name.length < 3) {
    CheckValidation("errorName", "hidden", "Name atlest 3 letters");
  } else {
    document.getElementById("errorName").classList.remove("hidden");
  }
};

const logIn = (e) => {
  e.preventDefault();
  const email = emailElement.value;
  const rollNo = rollNoElement.value;
  const name = nameElement.value;

  if (!(email || rollNo || name)) {
    var error = document.getElementsByClassName("error");
    for (var i = 0; i < error.length; i++) {
      error[i].classList.add("hidden");
    }
  } else if (!name) {
    CheckValidation("errorName", "hidden", "Name is required");
  } else if (name.length < 3) {
    CheckValidation("errorName", "hidden", "Name atlest 3 letters");
  } else if (!email) {
    CheckValidation("errorEmail", "hidden", "Email is required");
  } else if (!rollNo) {
    CheckValidation("errorRollNo", "hidden", "Password is required");
  } else {
    localStorage.setItem("user", JSON.stringify({ email, rollNo, name }));
    window.location.href = "/selectQuiz";
  }
};

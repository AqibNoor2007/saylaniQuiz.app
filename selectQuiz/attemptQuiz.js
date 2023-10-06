var userNameElement = document.getElementById("userName");
var userData = JSON.parse(localStorage.getItem("user"));
userNameElement.innerText = `Welcome ${userData.name} `;

const Logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/attemptQuiz";
};

const GetQuiz = (type) => {
  window.location.href = `/attemptQuiz/${type}`;
};

function ShowModal(modalId) {
  var modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

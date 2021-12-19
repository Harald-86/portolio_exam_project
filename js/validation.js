const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameCheck = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailCheck = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectCheck = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageCheck = document.querySelector("#messageError");
const msg = "Thank you, i`ll get back to you as soon as possible";

function validateContactForm() {
  event.preventDefault();

  if (errorCheck(name.value, 2) === true) {
    nameCheck.style.display = "none";
  } else {
    nameCheck.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailCheck.style.display = "none";
  } else {
    emailCheck.style.display = "block";
  }
  if (errorCheck(subject.value, 7) === true) {
    subjectCheck.style.display = "none";
  } else {
    subjectCheck.style.display = "block";
  }
  if (errorCheck(message.value, 25) === true) {
    messageCheck.style.display = "none";
    document.getElementById("succsess").textContent = `${msg}`;
  } else {
    messageCheck.style.display = "block";
  }
}

form.addEventListener("submit", validateContactForm);

function errorCheck(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

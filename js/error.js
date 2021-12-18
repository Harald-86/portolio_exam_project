function displayError(
  message = "Ooops. something went wrong, we will look into it as soon as possible"
) {
  if (!message) {
    message = "Unknown error";
  }
  return `<div class="error">${message}</div>`;
}

const emailInput = document.getElementById("email_input");
const warningMessage = document.querySelector("span.warning");
const confirmButton = document.querySelector("#user_input button");
const dismissButton = document.querySelector("dialog button");
const dialog = document.querySelector("dialog");

let inputValid = true;
let inputValue = "";

// Handle email input verification
emailInput.addEventListener("change", (event) => {
  inputValid = emailInput.checkValidity();
  if (inputValid) {
    warningMessage.classList.add("hidden");
    inputValue = event.target.value;
  } else {
    warningMessage.classList.remove("hidden");
    inputValue = "";
  }
});

// Handle confirm button interaction
confirmButton.addEventListener("click", () => {
  if (inputValue && inputValue.length > 0) {
    let confirmText = document.querySelector("dialog p strong");
    confirmText.innerHTML = inputValue;
    dialog.showModal();
  } else {
    warningMessage.classList.remove("hidden");
    setTimeout(() => {
      warningMessage.classList.add("hidden");
    }, 1000);
  }
});

dismissButton.addEventListener("click", () => {
  dialog.close();
});

let chatbox = document.querySelector(".chatbox");
//let icon = document.querySelector(".icon");
let icon = document.getElementById("icon");

let text = document.querySelector(".chatArea");

function chat() {
  chatbox.classList.toggle("visible");
  // icon.querySelector.
  icon.style.display = "none";
}

function inputChat() {
  if (inputText.value !== "") {
    let newChat = document.createElement("p");

    text.appendChild(newChat);
    newChat.innerHTML = inputText.value;
    inputText.value = "";
  }
}

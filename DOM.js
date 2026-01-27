const username = "";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'guest' : username;

console.dir(document);
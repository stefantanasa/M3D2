let checkbox = document.getElementById("night-mode");

let getBg = document.getElementsByTagName("body");

let getPlayerBg = document.querySelector(".row.text-muted");

let getJumbo = document.querySelector("div.jumbotron.p-0");

let getDescription = document.querySelectorAll("div > .card");

let getH = document.querySelector("div > h3");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    console.log("Checkbox is checked..");
    document.body.style.backgroundColor = "rgb(173, 2, 2) ";
    getPlayerBg.style.backgroundColor = "rgb(179, 25, 25)";

    getJumbo.style.backgroundImage =
      "linear-gradient(to bottom ,   rgba(179,25,25,1), rgba(75,1,1,1))";

    for (let i = 0; i < getDescription.length; i++) {
      getDescription[i].style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }
  } else {
    for (let i = 0; i < getDescription.length; i++) {
      getDescription[i].style.backgroundColor = null;
    }
    console.log("Checkbox is not checked..");
    getPlayerBg.style.backgroundColor = null;
    document.body.style.backgroundColor = null;
    getJumbo.style.backgroundImage = null;
  }
});

function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}

let rules;
let playerCount;
let players = [];
let xhr = new XMLHttpRequest();
xhr.addEventListener("loadend", () => {
  rules = JSON.parse(xhr.responseText);
  // start with asking how many players
  getPlayerCount();
  });
xhr.open("GET", "https://raw.githubusercontent.com/tr3st0r/comono/master/rules.json");
xhr.send()
/*
 * Creates a popup window.
 * title The title displayed in the window.
 * html Other html elements which should be displayed in the window.
 */
function createPopup(title, html) {
  let popup = document.createElement("div");
  let titlePara = document.createElement("p");
  titlePara.textContent = title;
  popup.className = "popup";
  popup.appendChild(titlePara);
  popup.appendChild(html);
  document.body.appendChild(popup);
}

/*
 * This creates a query popup to ask the amount of players.
 */
function getPlayerCount() {
  // drop down menu
  let select = document.createElement("select");
  select.name = "player-count";
  // add as many posible player numbers as allowed by the rules
  for (let i = 0; i < rules.maxPlayers; i++) {
    let optn = document.createElement("option");
    optn.value = i + 1;
    optn.textContent = i + 1;
    // when an option is selected, the value will be saved and the popup
    // will be closed
    optn.addEventListener("click", (e) => {
      playerCount = parseInt(e.target.value);
      e.target.parentNode.parentNode.style.display = "none";
      // second create these players
      createPlayers();
      });
    select.appendChild(optn);
  }
  createPopup("Enter number of players:", select);
}
/*
 * This creates a query popup to ask for a player name.
 */
function askForName() {
  // drop down menu
  let input = document.createElement("input");
  input.type = "text";
  // when the input field is unselected the popup will be closed
  input.addEventListener("blur", (e) => {
    players.push(new Player(e.target.value));
    e.target.parentNode.style.display = "none";
    });
  createPopup("Enter Name:", input);
}

/*
 * Here we create as many player objects as specified by playerCount.
 */
function createPlayers(){
  for (let i = 0; i < playerCount; i++) {
    askForName();
  }
}

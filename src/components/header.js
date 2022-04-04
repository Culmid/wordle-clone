import Menu from "../assets/images/menu.svg";
import Help from "../assets/images/help.svg";
import Logo from "../assets/images/logo.png";
import Leaderboard from "../assets/images/leaderboard.svg";
import Settings from "../assets/images/settings.svg";

function header() {
  const header = document.createElement("header");

  // LHS
  const menuHelpDiv = document.createElement("div");
  menuHelpDiv.className = "menu-help";
  header.appendChild(menuHelpDiv);

  menuHelpDiv.appendChild(menuButton());
  menuHelpDiv.appendChild(helpButton());

  // Logo
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  header.appendChild(logoDiv);

  const logo = new Image();
  logo.src = Logo;
  logoDiv.appendChild(logo);

  // RHS
  const settingsLeaderDiv = document.createElement("div");
  settingsLeaderDiv.className = "settings-leaderboard";
  header.appendChild(settingsLeaderDiv);

  settingsLeaderDiv.appendChild(leaderButton());
  settingsLeaderDiv.appendChild(settingsButton());

  return header;
}

function menuButton() {
  return imageButton(Menu);
}

function helpButton() {
  return imageButton(Help);
}

function leaderButton() {
  return imageButton(Leaderboard);
}

function settingsButton() {
  return imageButton(Settings);
}

function imageButton(source) {
  const button = document.createElement("button");
  const img = new Image();
  img.src = source;
  button.appendChild(img);

  return button;
}

export default header;

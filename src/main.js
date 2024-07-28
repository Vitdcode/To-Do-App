import "./style.css";
import { createListButton } from "./element-creation-functions.js";
import { prompt } from "./element-creation-functions.js";
import { deletePrompt } from "./element-creation-functions.js";

createListButton();

const createListBtn = document.querySelector(".create-new-list-button");
const body = document.querySelector("body");
createListBtn.addEventListener("click", () => {
  prompt();
  body.style.backdropFilter = "brightness(10%)";
  const closePromptButton = document.querySelector(".close-prompt-icon");

  closePromptButton.addEventListener("click", () => {
    deletePrompt();
    body.style.backdropFilter = "none";
  });
});

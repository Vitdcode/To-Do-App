import "./style.css";
import { createListButton } from "./element-creation-functions.js";
import { prompt } from "./element-creation-functions.js";
import { deletePrompt } from "./element-creation-functions.js";

createListButton();

const createListBtn = document.querySelector(".create-new-list-button");
const body = document.querySelector("body");
createListBtn.addEventListener("click", () => {
  prompt();
  const backdrop = document.querySelector(".backdrop");
  backdrop.style.backdropFilter = "blur(3px)";
  const closePromptButton = document.querySelector(".close-prompt-icon");

  closePromptButton.addEventListener("click", () => {
    deletePrompt();
    backdrop.style.backdropFilter = "none";
  });
});

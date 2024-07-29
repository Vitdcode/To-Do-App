import closeicon from "../src/images/remove.png";
const mainContentWrapper = document.querySelector(".main-content");

export function createListButton() {
  const leftSideWrapper = document.querySelector(".left-side");
  const createListButton = document.createElement("button");
  createListButton.textContent = "Create new List";
  createListButton.classList.add("create-new-list-button");
  leftSideWrapper.appendChild(createListButton);
}

export function prompt() {
  const promptHeaderText = document.createElement("p");
  promptHeaderText.textContent = "Create new List";

  const promptWindow = document.createElement("div");
  promptWindow.classList.add("prompt-window");

  const inputField = document.createElement("input");
  inputField.classList.add("new-list-input-field");
  inputField.id = "Create new List Input";

  const createListButton = document.createElement("button");
  createListButton.classList.add("prompt-create-list-button");
  createListButton.textContent = "Create List";

  const closePromptIcon = document.createElement("img");
  closePromptIcon.classList.add("close-prompt-icon");
  closePromptIcon.src = closeicon;

  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  promptWindow.appendChild(promptHeaderText);
  promptWindow.appendChild(closePromptIcon);
  promptWindow.appendChild(inputField);
  promptWindow.appendChild(createListButton);
  mainContentWrapper.appendChild(promptWindow);
  document.body.appendChild(backdrop);
}

export function deletePrompt() {
  mainContentWrapper.removeChild(document.querySelector(".prompt-window"));
  document.body.removeChild(document.querySelector(".backdrop"));
}

export function createNewList() {}

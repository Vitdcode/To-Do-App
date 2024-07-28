export function createListButton() {
  const leftSideWrapper = document.querySelector(".left-side");
  const createListButton = document.createElement("button");
  createListButton.textContent = "Create new List";
  createListButton.classList.add("create-new-list-button");
  leftSideWrapper.appendChild(createListButton);
}

export function prompt() {
  const mainContentWrapper = document.querySelector(".main-content");

  const promptHeaderText = document.createElement("p");
  promptHeaderText.textContent = "Create new List";

  const promptWindow = document.createElement("div");
  promptWindow.classList.add("prompt-window");

  const inputField = document.createElement("input");

  const createListButton = document.createElement("button");
  createListButton.classList.add("prompt-create-list-button");
  createListButton.textContent = "Create List";

  promptWindow.appendChild(promptHeaderText);
  promptWindow.appendChild(inputField);
  promptWindow.appendChild(createListButton);
  mainContentWrapper.appendChild(promptWindow);
}

export function createNewList() {}

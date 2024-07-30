import closeicon from "../src/images/remove.png";
import { getList } from "./listhandling.js";

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
  document.querySelector(".main-content").appendChild(promptWindow);
  document.body.appendChild(backdrop);
}

/* document.querySelector(".left-side").removeChild(".listWrapper"); */
/*  document.querySelectorAll(".listWrapper").forEach((e) => e.remove()); */
/*   listWrapper.classList.add("listWrapper"); */

export function createListInDom() {
  const listWrapper = document.querySelector(".listWrapper");

  getList().forEach((list, index) => {
    const existingListItem = listWrapper.querySelector(`#list-${index}`);
    console.log(existingListItem);
    if (!existingListItem) {
      const listName = document.createElement("p");
      listName.id = `list-${index}`;
      listName.textContent = `${list.name}`;

      listWrapper.appendChild(listName);
      document.querySelector(".left-side").appendChild(listWrapper);
    }
  });
}

/* export function createListInDom() {
  const listWrapper = document.querySelector(".listWrapper");

  getList().forEach((list, index) => {
    const existingListItem = listWrapper.querySelector(`#list-${index}`);

    if (!existingListItem) {
      const listName = document.createElement("p");
      listName.id = `list-${index}`;
      listName.textContent = `${list.name}`;

      listWrapper.appendChild(listName);
    }
  });

  document.querySelector(".left-side").appendChild(listWrapper);
} */

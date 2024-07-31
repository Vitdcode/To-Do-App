import closeicon from "../src/images/remove.png";
import { lists } from "./listhandling.js";

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

export function createListInDom() {
  const listWrapper = document.querySelector(".listWrapper");

  lists.forEach((list, index) => {
    const existingListItem = listWrapper.querySelector(`#list-${index}`);
    if (!existingListItem) {
      const listName = document.createElement("p");
      listName.id = `list-${index}`;
      listName.classList.add("all-lists");
      listName.textContent = list.name;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox-${index}`;
      checkbox.checked = list.checked;
      checkbox.classList.add("list-checkbox");

      listName.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
        list.checked = checkbox.checked;
        localStorage.setItem("lists", JSON.stringify(lists));
      });

      checkbox.addEventListener("click", (event) => {
        event.stopPropagation();
        list.checked = checkbox.checked;
        localStorage.setItem("lists", JSON.stringify(lists));
      });
      listWrapper.appendChild(listName);
      listName.appendChild(checkbox);
      document.querySelector(".left-side").appendChild(listWrapper);
    }
  });
}

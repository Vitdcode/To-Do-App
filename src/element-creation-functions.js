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
  promptHeaderText.classList.add("prompt-header");
  promptHeaderText.textContent = "Create new List";

  //prompt window
  const promptWindow = document.createElement("div");
  promptWindow.classList.add("prompt-window");
  // prompt input field
  const inputField = document.createElement("input");
  inputField.classList.add("new-list-input-field");
  inputField.id = "Create new List Input";
  //create new list button inside prompt
  const createListButton = document.createElement("button");
  createListButton.classList.add("prompt-create-list-button");
  createListButton.textContent = "Create List";

  // close prompt button
  const closePromptIcon = document.createElement("img");
  closePromptIcon.classList.add("close-prompt-icon");
  closePromptIcon.src = closeicon;
  // backdrop element for later use to blur the background
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  //color picker
  const initialColorForColorPicker = document.createElement("div");
  initialColorForColorPicker.classList.add("prompt-color-picker-initial");
  initialColorForColorPicker.style.backgroundColor = `rgb(121, 232, 195)`;

  promptWindow.appendChild(promptHeaderText);
  promptWindow.appendChild(closePromptIcon);
  promptWindow.appendChild(inputField);
  promptWindow.appendChild(createListButton);
  promptWindow.appendChild(initialColorForColorPicker);
  document.querySelector(".main-content").appendChild(promptWindow);
  document.body.appendChild(backdrop);
  listColorSelectorWindow();
}

export let currentListColor = `rgb(121, 232, 195)`;

function listColorSelectorWindow() {
  const createListButton = document.querySelector(".prompt-create-list-button");
  const promptHeaderText = document.querySelector(".prompt-header");
  const colorPickerInitial = document.querySelector(
    ".prompt-color-picker-initial"
  );
  const initialColorForColorPicker = document.querySelector(".prompt-color-picker-initial"); //prettier-ignore
  const promptWindow = document.querySelector(".prompt-window");
  let colorPickerWindowIsOpen = false;

  initialColorForColorPicker.addEventListener("click", () => {
    if (colorPickerWindowIsOpen === false) {
      const colorPickerWindow = document.createElement("div");
      colorPickerWindow.classList.add("color-picker-window");

      const colorRed = document.createElement("div");
      colorRed.style.backgroundColor = `rgba(238, 97, 97, 0.658)`;
      colorRed.addEventListener("click", () => {
        currentListColor = `rgba(238, 97, 97, 0.658)`;
        createListButton.style.backgroundColor = `rgba(238, 97, 97, 0.658)`;
        promptHeaderText.style.backgroundColor = `rgba(238, 97, 97, 0.658)`;
        colorPickerInitial.style.backgroundColor = `rgba(238, 97, 97, 0.658)`;
      });

      const colorBlue = document.createElement("div");
      colorBlue.style.backgroundColor = `rgba(61, 153, 240, 0.658)`;
      colorBlue.addEventListener("click", () => {
        currentListColor = `rgba(61, 153, 240, 0.658)`;
        createListButton.style.backgroundColor = `rgba(61, 153, 240, 0.658)`;
        promptHeaderText.style.backgroundColor = `rgba(61, 153, 240, 0.658)`;
        colorPickerInitial.style.backgroundColor = `rgba(61, 153, 240, 0.658)`;
      });

      const colorMagenta = document.createElement("div");
      colorMagenta.style.backgroundColor = `rgba(183, 67, 236, 0.658)`;
      colorMagenta.addEventListener("click", () => {
        currentListColor = `rgba(183, 67, 236, 0.658)`;
        createListButton.style.backgroundColor = `rgba(183, 67, 236, 0.658)`;
        promptHeaderText.style.backgroundColor = `rgba(183, 67, 236, 0.658)`;
        colorPickerInitial.style.backgroundColor = `rgba(183, 67, 236, 0.658)`;
      });

      const colorGreen = document.createElement("div");
      colorGreen.style.backgroundColor = `rgba(62, 231, 175, 0.658)`;
      colorGreen.addEventListener("click", () => {
        currentListColor = `rgba(62, 231, 175, 0.658)`;
        createListButton.style.backgroundColor = `rgba(62, 231, 175, 0.658)`;
        promptHeaderText.style.backgroundColor = `rgba(62, 231, 175, 0.658)`;
        colorPickerInitial.style.backgroundColor = `rgba(62, 231, 175, 0.658)`;
      });

      colorPickerWindow.appendChild(colorRed);
      colorPickerWindow.appendChild(colorBlue);
      colorPickerWindow.appendChild(colorMagenta);
      colorPickerWindow.appendChild(colorGreen);

      promptWindow.appendChild(colorPickerWindow);

      colorPickerWindowIsOpen = true;
    } else if (colorPickerWindowIsOpen === true) {
      document
        .querySelector(".prompt-window")
        .removeChild(document.querySelector(".color-picker-window"));
      colorPickerWindowIsOpen = false;
    }
  });
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
      listName.style.backgroundColor = list.color;

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

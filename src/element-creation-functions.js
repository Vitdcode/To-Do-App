import closeicon from "../src/images/remove.png";
import { lists } from "./listhandling.js";
import { pushListToListsArray } from "./listhandling.js";
import { addToDoCollapsible } from "./ui-functions.js";

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
  initialColorForColorPicker.style.backgroundColor = `rgba(212, 212, 212, 0.9)`;

  promptWindow.appendChild(promptHeaderText);
  promptWindow.appendChild(closePromptIcon);
  promptWindow.appendChild(inputField);
  promptWindow.appendChild(createListButton);
  promptWindow.appendChild(initialColorForColorPicker);
  document.querySelector(".main-content").appendChild(promptWindow);
  document.body.appendChild(backdrop);
  listColorSelectorWindow();
}

export let currentListColor = `rgba(212, 212, 212, 0.9)`;

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

      const colorGrey = document.createElement("div");
      colorGrey.style.backgroundColor = `rgba(212, 212, 212, 0.9)`;
      colorGrey.addEventListener("click", () => {
        currentListColor = `rgba(212, 212, 212, 0.9)`;
        createListButton.style.backgroundColor = `rgba(212, 212, 212, 0.9)`;
        promptHeaderText.style.backgroundColor = `rgba(212, 212, 212, 0.9)`;
        colorPickerInitial.style.backgroundColor = `rgba(212, 212, 212, 0.9)`;
      });

      colorPickerWindow.appendChild(colorRed);
      colorPickerWindow.appendChild(colorBlue);
      colorPickerWindow.appendChild(colorMagenta);
      colorPickerWindow.appendChild(colorGreen);
      colorPickerWindow.appendChild(colorGrey);

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

export function createListInDomLeftSide() {
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
        createListInDomRightSide(list, listName.id);
        localStorage.setItem("lists", JSON.stringify(lists));
      });

      checkbox.addEventListener("click", (event) => {
        event.stopPropagation();
        list.checked = checkbox.checked;
        createListInDomRightSide(list, listName.id);
        localStorage.setItem("lists", JSON.stringify(lists));
      });

      listWrapper.appendChild(listName);
      listName.appendChild(checkbox);
      document.querySelector(".left-side").appendChild(listWrapper);
      createListInDomRightSide(list, listName.id);
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  });
}

function createListInDomRightSide(list, index) {
  const rightSideWrapper = document.querySelector(".right-side");

  const listWrapperRight = document.createElement("div");
  listWrapperRight.id = `list-right-${index.split("-")[1]}`;
  listWrapperRight.classList.add("listWrapper-right");
  const existingList = rightSideWrapper.querySelector(
    `#${listWrapperRight.id}`
  );

  const listName = document.createElement("p");
  listName.textContent = list.name;
  listName.classList.add("list-name-header-right-side");

  if (list.checked) {
    listWrapperRight.appendChild(listName);

    rightSideWrapper.appendChild(listWrapperRight);
    listWrapperRight.style.backgroundColor = list.color;
    addToDoElements(list, listWrapperRight);
  } else if (list.checked === false && existingList) {
    rightSideWrapper.removeChild(existingList);
    localStorage.setItem("lists", JSON.stringify(lists));
  }
}

export function addToDoElements(list, listWrapperRight) {
  const toDoCard = document.querySelector(`#${listWrapperRight.id}`);
  const addtoListButton = document.createElement("button");
  addtoListButton.id = `add-to-list-button-${
    listWrapperRight.id.split("-")[2]
  }`;
  addtoListButton.textContent = "Add to List";
  addtoListButton.classList.add("add-to-list-button");
  const addToDoHeadline = document.createElement("button");
  addToDoHeadline.classList.add("add-a-to-do");
  addToDoHeadline.id = `add-to-headline-button-${listWrapperRight.id.split("-")[2]}` //prettier-ignore
  addToDoHeadline.textContent = "Add a to do";

  const toDoInputfield = document.createElement("input");
  toDoInputfield.id = `to-do-inputfield-${listWrapperRight.id.split("-")[2]}`;
  toDoInputfield.classList.add("to-do-inputfield");

  const inputAddToListButtonWrapper = document.createElement("div");
  inputAddToListButtonWrapper.classList.add(
    "input-and-add-to-list-button-wrapper"
  );
  inputAddToListButtonWrapper.appendChild(toDoInputfield);
  inputAddToListButtonWrapper.appendChild(addtoListButton);

  toDoCard.appendChild(addToDoHeadline);
  toDoCard.appendChild(inputAddToListButtonWrapper);
  addToDoCollapsible(addToDoHeadline.id);
  addToDoItem(list, listWrapperRight, toDoInputfield.id, addtoListButton.id);
}

function addToDoItem(list, listWrapperRight, inputID, buttonID) {
  document.querySelector(`#${buttonID}`).addEventListener("click", () => {
    const toDoCheckboxAndTextWrapper = document.createElement("div");

    toDoCheckboxAndTextWrapper.classList.add("to-do-checkbox-and-text-wrapper");
    const input = document.querySelector(`#${inputID}`);

    const newToDoItem = document.createElement("div");
    newToDoItem.textContent = input.value;
    const newToDoItemCheckbox = document.createElement("input");
    newToDoItemCheckbox.type = "checkbox";
    newToDoItemCheckbox.id = `checkbox-${list.name}-todo-${list.checkboxCounterToDo()}`; //prettier-ignore
    toDoCheckboxAndTextWrapper.appendChild(newToDoItem);
    toDoCheckboxAndTextWrapper.appendChild(newToDoItemCheckbox);

    listWrapperRight.appendChild(toDoCheckboxAndTextWrapper);
    list.toDo.push(newToDoItem.textContent);

    localStorage.setItem("lists", JSON.stringify(lists));
  });
  addToDoItemsFromStorage(list, listWrapperRight);
}

export function addToDoItemsFromStorage(list, listWrapperRight) {
  if (list.toDo != "") {
    list.toDo.forEach((todo) => {
      const toDoCheckboxAndTextWrapper = document.createElement("div");

      toDoCheckboxAndTextWrapper.classList.add(
        "to-do-checkbox-and-text-wrapper"
      );

      const newToDoItem = document.createElement("div");
      newToDoItem.textContent = todo;
      const newToDoItemCheckbox = document.createElement("input");
      newToDoItemCheckbox.type = "checkbox";
      newToDoItemCheckbox.id = `checkbox-${list.name}-todo-${list.checkboxCounterToDo()}`; //prettier-ignore
      toDoCheckboxAndTextWrapper.appendChild(newToDoItem);
      toDoCheckboxAndTextWrapper.appendChild(newToDoItemCheckbox);
      listWrapperRight.appendChild(toDoCheckboxAndTextWrapper);
    });
  }
}

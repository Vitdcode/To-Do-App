import { v4 as uuidv4 } from "uuid";
import closeicon from "../src/images/remove.png";
import deleteicon from "../src/images/delete-icon.png";
import { lists, listNameRemoveWhiteSpaces } from "./listhandling.js";
import { addToDoCollapsible } from "./ui-functions.js";
import {
  deleteToDoItem,
  addtoDoItemCollapsible,
  linkingTextAreaToDoItem,
  deleteListCard,
} from "./ui-functions.js";

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
        createListInDomRightSide(list, listName.id, listWrapper);
        localStorage.setItem("lists", JSON.stringify(lists));
      });

      checkbox.addEventListener("click", (event) => {
        event.stopPropagation();
        list.checked = checkbox.checked;
        createListInDomRightSide(list, listName.id, listWrapper);
        localStorage.setItem("lists", JSON.stringify(lists));
      });

      listWrapper.appendChild(listName);
      listName.appendChild(checkbox);
      document.querySelector(".left-side").appendChild(listWrapper);
      createListInDomRightSide(list, listName.id, listWrapper);
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  });
}

function createListInDomRightSide(list, index, listWrapperLeft) {
  const rightSideWrapper = document.querySelector(".right-side");

  const listWrapperRight = document.createElement("div");
  listWrapperRight.id = `list-right-${index.split("-")[1]}`;
  listWrapperRight.classList.add("listWrapper-right");

  const timeStampList = document.createElement("span");
  timeStampList.classList.add("time-stamp");
  timeStampList.textContent = list.timeStamp;

  const listName = document.createElement("p");
  listName.textContent = list.name;
  listName.classList.add("list-name-header-right-side");

  const deleteListIcon = document.createElement("img");
  deleteListIcon.src = deleteicon;
  deleteListIcon.id = `delete-list-icon-${index.split("-")[1]}`;
  deleteListIcon.classList.add("delete-list-icon");

  const existingList = document.querySelector(`#${listWrapperRight.id}`);

  if (list.checked) {
    listWrapperRight.appendChild(listName);
    listWrapperRight.appendChild(deleteListIcon);
    listWrapperRight.appendChild(timeStampList);
    rightSideWrapper.appendChild(listWrapperRight);
    listWrapperRight.style.backgroundColor = list.color;
    addToDoElements(list, listWrapperRight);
    deleteListCard(
      list,
      rightSideWrapper,
      deleteListIcon,
      listWrapperRight,
      index,
      listWrapperLeft
    );
  } else if (!list.checked && existingList) {
    rightSideWrapper.removeChild(existingList);
  }
}

export function addToDoElements(list, listWrapperRight) {
  const toDoCard = document.querySelector(`#${listWrapperRight.id}`);

  const addToDoHeadline = document.createElement("button");
  addToDoHeadline.classList.add("add-a-to-do");
  addToDoHeadline.id = `add-to-headline-button-${listWrapperRight.id.split("-")[2]}` //prettier-ignore
  addToDoHeadline.textContent = "Add a to do";

  const toDoInputfield = document.createElement("input");
  toDoInputfield.id = `to-do-inputfield-${listWrapperRight.id.split("-")[2]}`;
  toDoInputfield.classList.add("to-do-inputfield");

  const addtoListButton = document.createElement("button");
  addtoListButton.id = `add-to-list-button-${
    listWrapperRight.id.split("-")[2]
  }`;
  addtoListButton.textContent = "Add to List";
  addtoListButton.classList.add("add-to-list-button");

  const toDoLowPriority = document.createElement("button");
  toDoLowPriority.classList.add("priority-buttons");
  toDoLowPriority.id = "toDoLowPriority";
  toDoLowPriority.textContent = "Low";

  const toDoMediumPriority = document.createElement("button");
  toDoMediumPriority.classList.add("priority-buttons");
  toDoMediumPriority.id = "toDoMediumPriority";
  toDoMediumPriority.textContent = "Medium";

  const toDoHighPriority = document.createElement("button");
  toDoHighPriority.classList.add("priority-buttons");
  toDoHighPriority.id = "toDoHighPriority";
  toDoHighPriority.textContent = "High";

  const priorityHeadline = document.createElement("p");
  priorityHeadline.classList.add("priority-headline");
  priorityHeadline.textContent = "Priority";

  const priorityButtonsWrapper = document.createElement("div");
  priorityButtonsWrapper.classList.add("priority-buttons-wrapper");

  priorityButtonsWrapper.appendChild(toDoLowPriority);
  priorityButtonsWrapper.appendChild(toDoMediumPriority);
  priorityButtonsWrapper.appendChild(toDoHighPriority);

  const inputAddToListButtonWrapper = document.createElement("div");
  inputAddToListButtonWrapper.classList.add(
    "input-and-add-to-list-button-wrapper"
  );
  inputAddToListButtonWrapper.appendChild(toDoInputfield);
  inputAddToListButtonWrapper.appendChild(priorityHeadline);
  inputAddToListButtonWrapper.appendChild(priorityButtonsWrapper);
  inputAddToListButtonWrapper.appendChild(addtoListButton);

  toDoCard.appendChild(addToDoHeadline);
  toDoCard.appendChild(inputAddToListButtonWrapper);
  prioritySetter(list, inputAddToListButtonWrapper, priorityButtonsWrapper);
  addToDoCollapsible(addToDoHeadline.id);
  addToDoItem(list, listWrapperRight, toDoInputfield.id, addtoListButton.id);
}

function prioritySetter(
  list,
  inputAddToListButtonWrapper,
  priorityButtonsWrapper
) {
  const priorityToDoMarkerWrapper = document.createElement("div");
  priorityToDoMarkerWrapper.classList.add("priority-todo-marker-wrapper");

  const priorityToDoMarker = document.createElement("span");
  priorityToDoMarker.classList.add("priority-todo-marker-wrapper");

  priorityToDoMarker.textContent = list.priority;
  priorityToDoMarkerWrapper.appendChild(priorityToDoMarker);
  inputAddToListButtonWrapper.appendChild(priorityToDoMarkerWrapper);

  priorityButtonsWrapper.addEventListener("click", (event) => {
    const clickedButton = event.target;

    if (clickedButton.id === "toDoLowPriority") {
      priorityToDoMarker.textContent = "Low";
      list.priority = "Low";
      priorityToDoMarkerWrapper.appendChild(priorityToDoMarker);
      inputAddToListButtonWrapper.appendChild(priorityToDoMarkerWrapper);
    } else if (clickedButton.id === "toDoMediumPriority") {
      priorityToDoMarker.textContent = "Medium";
      list.priority = "Medium";
      priorityToDoMarkerWrapper.appendChild(priorityToDoMarker);
      inputAddToListButtonWrapper.appendChild(priorityToDoMarkerWrapper);
    } else if (clickedButton.id === "toDoHighPriority") {
      priorityToDoMarker.textContent = "High";
      list.priority = "High";
      priorityToDoMarkerWrapper.appendChild(priorityToDoMarker);
      inputAddToListButtonWrapper.appendChild(priorityToDoMarkerWrapper);
    }
  });
}

function addToDoItem(list, listWrapperRight, inputID, buttonID) {
  document.querySelector(`#${buttonID}`).addEventListener("click", () => {
    const toDoCheckboxAndTextWrapper = document.createElement("div");
    listNameRemoveWhiteSpaces(list.name);
    toDoCheckboxAndTextWrapper.id = `list-${listNameRemoveWhiteSpaces(
      list.name
    )}-todo-item-${list.incrementToDoItemCounter()}`;

    toDoCheckboxAndTextWrapper.classList.add("to-do-checkbox-and-text-wrapper");

    const input = document.querySelector(`#${inputID}`);

    const newToDoItem = document.createElement("div");

    newToDoItem.textContent = input.value;
    const newToDoItemCheckbox = document.createElement("input");
    newToDoItemCheckbox.type = "checkbox";
    newToDoItemCheckbox.id = `checkbox-${list.name}-todo-${list.checkboxCounterToDo()}`; //prettier-ignore
    newToDoItemCheckbox.checked = list.toDoChecked;

    const priorityTodoItem = document.createElement("span");
    priorityTodoItem.classList.add("priority-todo-item");
    priorityTodoItem.textContent = list.priority;

    toDoCheckboxAndTextWrapper.appendChild(newToDoItem);
    toDoCheckboxAndTextWrapper.appendChild(newToDoItemCheckbox);
    toDoCheckboxAndTextWrapper.appendChild(priorityTodoItem);

    let uniqueID = uuidv4();

    list.toDoTextArea.push({
      textAreaValue: "",
      textAreaID: uniqueID,
    });

    listWrapperRight.appendChild(toDoCheckboxAndTextWrapper);
    list.toDo.push({
      toDoName: newToDoItem.textContent,
      toDoPriority: list.priority,
      toDoID: uniqueID,
      toDoTimeStamp: list.createTimeStamp(),
    });

    addNotesToDoItem(
      toDoCheckboxAndTextWrapper.id,
      list,
      listWrapperRight,
      newToDoItemCheckbox,
      newToDoItem.textContent,
      uniqueID
    );
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
      toDoCheckboxAndTextWrapper.id = `list-${listNameRemoveWhiteSpaces(
        list.name
      )}-todo-item-${list.incrementToDoItemCounter()}`;

      const newToDoItem = document.createElement("div");
      newToDoItem.textContent = todo.toDoName;
      let uniqueID = todo.toDoID;

      const priorityTodoItem = document.createElement("span");
      priorityTodoItem.classList.add("priority-todo-item");
      priorityTodoItem.textContent = todo.toDoPriority;

      const newToDoItemCheckbox = document.createElement("input");
      newToDoItemCheckbox.type = "checkbox";

      newToDoItemCheckbox.id = todo.toDoID;
      toDoCheckboxAndTextWrapper.appendChild(newToDoItem);
      toDoCheckboxAndTextWrapper.appendChild(newToDoItemCheckbox);
      toDoCheckboxAndTextWrapper.appendChild(priorityTodoItem);
      listWrapperRight.appendChild(toDoCheckboxAndTextWrapper);
      addNotesToDoItem(
        toDoCheckboxAndTextWrapper.id,
        list,
        listWrapperRight,
        newToDoItemCheckbox,
        newToDoItem.textContent,
        uniqueID
      );
    });
  }
}

function addNotesToDoItem(
  toDoCheckboxAndTextWrapperID,
  list,
  listWrapperRight,
  newToDoItemCheckbox,
  newToDoItem,
  uniqueID,
  listTextAreaID
) {
  const addNotesText = document.createElement("p");
  addNotesText.textContent = `Add Notes for ${newToDoItem}`;

  const notesTextArea = document.createElement("textarea");
  notesTextArea.id = newToDoItemCheckbox.id;

  const notesTextAndAreaWrapper = document.createElement("div");
  notesTextAndAreaWrapper.classList.add("notes-text-and-area-wrapper");
  notesTextAndAreaWrapper.appendChild(addNotesText);
  notesTextAndAreaWrapper.appendChild(notesTextArea);

  const currentToDo = list.toDo.find((item) => item.toDoID === uniqueID);

  if (currentToDo) {
    const toDoTimeStamp = document.createElement("span");
    toDoTimeStamp.classList.add("time-stamp-todo-item");
    toDoTimeStamp.textContent = currentToDo.toDoTimeStamp; // Use the correct timestamp
    notesTextAndAreaWrapper.appendChild(toDoTimeStamp);
  }

  listWrapperRight.appendChild(notesTextAndAreaWrapper);

  addtoDoItemCollapsible(toDoCheckboxAndTextWrapperID);
  linkingTextAreaToDoItem(
    notesTextArea,
    list,
    toDoCheckboxAndTextWrapperID,
    notesTextArea.id,
    newToDoItemCheckbox,
    uniqueID,
    listTextAreaID
  );
}

import {
  createListInDomLeftSide,
  prompt,
} from "./element-creation-functions.js";
import { pushListToListsArray, lists } from "./listhandling.js";
import { currentListColor } from "./element-creation-functions.js";

let promptIsopen = false;

export function summonPrompt() {
  const createListBtn = document.querySelector(".create-new-list-button");
  createListBtn.addEventListener("click", () => {
    prompt();
    promptIsopen = true;
    document.querySelector(".backdrop").style.backdropFilter = "blur(3px)";
    closePromptButton();
    createListItem();
  });
}

function deletePrompt() {
  document.querySelector(".main-content").removeChild(document.querySelector(".prompt-window")); //prettier-ignore
  document.body.removeChild(document.querySelector(".backdrop"));
}

export function closePromptButton() {
  if (promptIsopen) {
    const closePromptButton = document.querySelector(".close-prompt-icon");
    closePromptButton.addEventListener("click", () => {
      document.querySelector(".backdrop").style.backdropFilter = "none";
      deletePrompt();
      promptIsopen = false;
    });
  }
}

export function createListItem() {
  const promptInputField = document.querySelector(".new-list-input-field");
  if (promptIsopen) {
    const createListBtnInPrompt = document.querySelector(".prompt-create-list-button"); //prettier-ignore
    createListBtnInPrompt.addEventListener("click", () => {
      pushListToListsArray(promptInputField.value, true, currentListColor);
      createListInDomLeftSide();
    });
  }
}

export function addToDoCollapsible(addToDoHeadlineButtonID) {
  const coll = document.querySelector(`#${addToDoHeadlineButtonID}`);

  coll.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = 0 + "px";
    } else {
      content.style.maxHeight = 130 + "px";
      content.style.padding = 20 + "px";
    }
  });
}

export function addtoDoItemCollapsible(toDoCheckboxAndTextWrapperID) {
  const coll = document.querySelector(`#${toDoCheckboxAndTextWrapperID}`);

  coll.addEventListener("click", function () {
    this.classList.toggle("active-add-notes");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 400 + "px";
    }
  });
}

export function deleteToDoItem(newToDoItemCheckbox, toDoCheckboxAndTextWrapperID, list) { 

  newToDoItemCheckbox.addEventListener("change", () => {
    const todoID = `${(toDoCheckboxAndTextWrapperID.split('-')[4])}`
    if (newToDoItemCheckbox.checked) {
      const toDoCheckboxAndTextWrapper = document.querySelector(`#${toDoCheckboxAndTextWrapperID}`);
      toDoCheckboxAndTextWrapper.nextElementSibling.remove();
      toDoCheckboxAndTextWrapper.remove();
      list.toDo.splice(`${todoID-1}`, 1);
      console.log([`${todoID-1}`]);
      list.toDoTextArea.splice([`${todoID-1}`], 1);
      if(list.toDoTextArea[`${todoID-1}`]) {
      list.toDoTextArea[`${todoID-1}`].textAreaID = `${todoID}`;
    }
      list.checkBoxToDoCounter-=1;
      list.toDoItemCounter-=1;
      console.log(list);
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  });
} //prettier-ignore

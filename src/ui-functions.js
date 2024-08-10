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

export function deleteListCard(
  list,
  rightSideWrapper,
  deleteListIcon,
  listWrapperRight,
  listNameIDLeft,
  listWrapperLeft
) {
  deleteListIcon.addEventListener("click", () => {
    lists.forEach((list, index) => {
      list.id = index;
    });
    console.log(list.id);
    lists.splice(list.id, 1);

    listWrapperLeft.removeChild(document.querySelector(`#${listNameIDLeft}`));
    rightSideWrapper.removeChild(
      document.querySelector(`#${listWrapperRight.id}`)
    );

    localStorage.setItem("lists", JSON.stringify(lists));
  });
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
    if (content.style.height) {
      content.style.height = null;
      content.style.padding = 0 + "px";
    } else {
      content.style.height = 180 + "px";
      content.style.padding = 40 + "px";
    }
  });
}

export function addtoDoItemCollapsible(toDoCheckboxAndTextWrapperID) {
  const coll = document.querySelector(`#${toDoCheckboxAndTextWrapperID}`);

  coll.addEventListener("click", function () {
    this.classList.toggle("active-add-notes");
    const content = this.nextElementSibling;
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = 300 + "px";
    }
  });
}

export function deleteToDoItem(
  newToDoItemCheckbox,
  toDoCheckboxAndTextWrapperID,
  list,
  uniqueID,
  listTextAreaID
) {
  newToDoItemCheckbox.addEventListener("change", () => {
    console.log(uniqueID);
    const toDoIndex = list.toDo.findIndex((item) => item.toDoID === uniqueID);

    if (toDoIndex !== -1) {
      list.toDo.splice(toDoIndex, 1);
      list.toDoTextArea.splice(toDoIndex, 1);

      const toDoCheckboxAndTextWrapper = document.querySelector(
        `#${toDoCheckboxAndTextWrapperID}`
      );

      if (toDoCheckboxAndTextWrapper) {
        toDoCheckboxAndTextWrapper.nextElementSibling?.remove();
        toDoCheckboxAndTextWrapper.remove();
      }

      localStorage.setItem("lists", JSON.stringify(lists));
    } else {
      console.error("Item not found in the list");
    }

    console.log(lists);
  });
}

export function linkingTextAreaToDoItem(
  textArea,
  list,
  toDoCheckboxAndTextWrapperID,
  textAreaID,
  newToDoItemCheckbox,
  uniqueID,
  listTextAreaID
) {
  console.log(lists);

  const textAreaIndex = list.toDoTextArea.findIndex(
    (item) => item.textAreaID === uniqueID
  );
  console.log(textAreaIndex);

  if (textAreaIndex !== -1) {
    textArea.value = list.toDoTextArea[textAreaIndex].textAreaValue;
  }

  textArea.addEventListener("change", () => {
    if (textAreaIndex !== -1) {
      list.toDoTextArea[textAreaIndex].textAreaValue = textArea.value;
      console.log(lists);
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  });

  deleteToDoItem(
    newToDoItemCheckbox,
    toDoCheckboxAndTextWrapperID,
    list,
    uniqueID,
    listTextAreaID
  );
}

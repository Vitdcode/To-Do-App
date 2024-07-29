import { prompt } from "./element-creation-functions.js";
import { deletePrompt } from "./element-creation-functions.js";

let lists = [];

export function summonPromptAndAddListToLibrabry() {
  const createListBtn = document.querySelector(".create-new-list-button");
  createListBtn.addEventListener("click", () => {
    prompt();
    const backdrop = document.querySelector(".backdrop");
    backdrop.style.backdropFilter = "blur(3px)";

    const closePromptButton = document.querySelector(".close-prompt-icon");
    closePromptButton.addEventListener("click", () => {
      deletePrompt();
      backdrop.style.backdropFilter = "none";
    });

    const createListBtnInPrompt = document.querySelector(".prompt-create-list-button"); //prettier-ignore
    createListBtnInPrompt.addEventListener("click", () => {
      pushListToListsArray();
      console.log(lists);
    });
  });
}

class List {
  constructor(name) {
    this.name = name;
  }
}

function pushListToListsArray() {
  const promptInputField = document.querySelector(".new-list-input-field");

  const list = new List(promptInputField.value);
  lists.push(list);
}

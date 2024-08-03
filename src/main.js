import "./style.css";
import {
  createListButton,
  createListInDomLeftSide,
} from "./element-creation-functions.js";
import { summonPrompt } from "./ui-functions.js";
import { createListItem } from "./ui-functions.js";
import { lists, pushListToListsArray } from "./listhandling.js";

createListButton();
summonPrompt();

document.addEventListener("DOMContentLoaded", () => {
  const localStorageLists = localStorage.getItem("lists");

  if (localStorageLists) {
    const parsedLists = JSON.parse(localStorageLists);
    console.log(parsedLists);
    parsedLists.forEach((list) => {
      pushListToListsArray(
        list.name,
        list.checked,
        list.color,
        list.toDo,
        list.toDoChecked
      );
      createListInDomLeftSide();
    });
  }
  createListItem();
});

document.querySelector(".clear-storage").addEventListener("click", () => {
  localStorage.clear();
});

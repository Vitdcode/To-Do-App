import "./style.css";
import { createListButton } from "./element-creation-functions.js";
import { summonPrompt } from "./ui-functions.js";
import { createListItem } from "./ui-functions.js";
import { createListInDom } from "./element-creation-functions.js";
import { lists, pushListToListsArray } from "./listhandling.js";

createListButton();
summonPrompt();

document.addEventListener("DOMContentLoaded", () => {
  const localStorageLists = localStorage.getItem("lists");

  if (localStorageLists) {
    const parsedLists = JSON.parse(localStorageLists);
    console.log(parsedLists);
    parsedLists.forEach((list) => {
      pushListToListsArray(list.name, list.checked, list.color);
      createListInDom();
    });
  }
  createListItem();
});

document.querySelector(".clear-storage").addEventListener("click", () => {
  localStorage.clear();
});

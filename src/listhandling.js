export let lists = [];

class List {
  constructor(name, checked = true) {
    this.name = name;
    this.checked = checked;
  }

  /*   get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get checked() {
    return this._checked;
  }

  set checked(newChecked) {
    this._checked = newChecked;
  } */
}

function pushToListFromInputField() {
  const promptInputField = document.querySelector(".new-list-input-field");
  pushListToListsArray(promptInputField.value);
}

export function pushListToListsArray(name, checked) {
  const list = new List(name, checked);
  lists.push(list);
  localStorage.setItem("lists", JSON.stringify(lists));
}

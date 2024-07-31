export let lists = [];

class List {
  constructor(name, checked = true, color = `rgb(121, 232, 195)`) {
    this.name = name;
    this.checked = checked;
    this.color = color;
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

export function pushListToListsArray(name, checked, color) {
  const list = new List(name, checked, color);
  lists.push(list);
  localStorage.setItem("lists", JSON.stringify(lists));
}

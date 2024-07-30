let lists = [];
export function getList() {
  return lists;
}

class List {
  constructor(name) {
    this.name = name;
  }
}

export function pushListToListsArray() {
  const promptInputField = document.querySelector(".new-list-input-field");

  const list = new List(promptInputField.value);
  lists.push(list);
  console.table(lists);
}

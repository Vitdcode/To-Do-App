export let lists = [];

class List {
  constructor(
    name,
    checked = true,
    color = `rgba(180, 180, 180, 0.658)`,
    toDo = [],
    toDoChecked = false
  ) {
    this.name = name;
    this.checked = checked;
    this.color = color;
    this.toDo = toDo;
    this.toDoChecked = toDoChecked;
    this.checkBoxToDoCounter = 0;
    this.toDoItemCounter = 0;
  }
  checkboxCounterToDo() {
    this.checkBoxToDoCounter += 1;
    return this.checkBoxToDoCounter;
  }

  incrementToDoItemCounter() {
    this.toDoItemCounter += 1;
    return this.toDoItemCounter;
  }

  toDoCheckedSwitch() {
    this.toDoChecked = !this.toDoChecked;
  }
}

export default List;

export function pushListToListsArray(name, checked, color, toDo, toDoChecked) {
  const list = new List(name, checked, color, toDo, toDoChecked);
  lists.push(list);
}

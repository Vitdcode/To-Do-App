import { format } from "date-fns";
export let lists = [];

class List {
  constructor(
    name,
    checked = true,
    color = `rgba(180, 180, 180, 0.658)`,
    toDo = [],
    toDoTextArea = [],
    toDoChecked = false,
    priority = "Medium",

    timeStamp
  ) {
    this.name = name;
    this.checked = checked;
    this.color = color;
    this.toDo = toDo;
    this.toDoTextArea = toDoTextArea;
    this.toDoChecked = toDoChecked;
    this.priority = priority;

    this.timeStamp = timeStamp || this.createTimeStamp();
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

  createTimeStamp() {
    return `Created on: ${format(new Date(), "dd.MM.yyyy HH:mm")}`;
  }

  printTimeStamp() {
    return this.timeStamp;
  }
}

export default List;

export function pushListToListsArray(
  name,
  checked,
  color,
  toDo,
  toDoTextArea,
  toDoChecked,

  priority,
  timeStamp
) {
  const list = new List(
    name,
    checked,
    color,
    toDo,
    toDoTextArea,
    toDoChecked,

    priority,
    timeStamp
  );
  lists.push(list);
}

export function listNameRemoveWhiteSpaces(listName) {
  const result = listName.replace(/\s+/g, "-");
  return result;
}

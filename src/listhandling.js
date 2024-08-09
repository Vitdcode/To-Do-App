export let lists = [];
let listIdCounter = 0;
/* if (!localStorage.getItem('globalToDoCounter')) {
    localStorage.setItem('globalToDoCounter', '0');
  }
 */
class List {
  constructor(
    name,
    checked = true,
    color = `rgba(180, 180, 180, 0.658)`,
    toDo = [],
    toDoTextArea = [],
    toDoChecked = false,
    id = 0,
    priority = "Medium"
  ) {
    this.name = name;
    this.checked = checked;
    this.color = color;
    this.toDo = toDo;
    this.toDoTextArea = toDoTextArea;
    this.toDoChecked = toDoChecked;
    this.priority = priority;
    this.id = id;
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

  /*   globalCounter() {
    let globalCounter = parseInt(localStorage.getItem('globalToDoCounter'), )
  } */
}

export default List;

export function pushListToListsArray(
  name,
  checked,
  color,
  toDo,
  toDoTextArea,
  toDoChecked,
  priority
) {
  const list = new List(
    name,
    checked,
    color,
    toDo,
    toDoTextArea,
    toDoChecked,
    priority
  );
  lists.push(list);
}

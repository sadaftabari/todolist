const myList = document.addEventListener("submit", (ev) => {
  let addToDo = document.querySelector("#addTodo").value;

  const toDoList = document.querySelector(".todolist");

  const newListItem = document.createElement("li");

  newListItem.textContent = addToDo;

  toDoList.appendChild(newListItem);
  const icones = document.createElement("div");
  icones.className = "icones";
  newListItem.appendChild(icones);

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete❌";

  icones.appendChild(deleteButton);

  const saveButton = document.createElement("button");
  saveButton.className = "savebutton";
  saveButton.textContent = "save✅";

  const cancleButton = document.createElement("button");
  cancleButton.className = "canclebutton";
  cancleButton.textContent = "cancle❌";

  deleteButton.addEventListener("click", () => {
    toDoList.removeChild(newListItem);
  });
  const editButton = document.createElement("button");
  editButton.textContent = "edit✅ ";
  icones.appendChild(editButton);
  const editInput = document.createElement("input");
  editInput.className = "editinput";
  editButton.addEventListener("click", () => {
    editInput.value = "";

    newListItem.textContent = "";

    newListItem.appendChild(editInput);
    newListItem.appendChild(saveButton);
    newListItem.appendChild(cancleButton);
    newListItem.replaceChild(saveButton, deleteButton);

    newListItem.replaceChild(cancleButton, editButton);
  });

  saveButton.addEventListener("click", () => {
    newListItem.textContent = editInput.value;
    newListItem.appendChild(icones);
    newListItem.removeChild(editInput);
    newListItem.textContent = editInput.value;
    orginalvalue = editInput.value;

    console.log(orginalvalue);
  });
  cancleButton.addEventListener("click", () => {
    newListItem.appendChild(icones);
    newListItem.removeChild(editInput);
    newListItem.textContent = orginalvalue;
  });

  ev.preventDefault();

  if (addToDo === "") {
    alert("OOPS..!you forgot to put a todo");
    toDoList.removeChild(newListItem);
    newListItem.textContent = "";
    newListItem.removeChild(icones);
  }

  ev.target.querySelector("#addTodo").value = "";
});

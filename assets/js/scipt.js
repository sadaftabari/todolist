// $(document).submit((ev) => {
//   let inputValue = $("#addTodo").val();
//   const addButton = $(".submit");

//   // ایجاد یک عنصر لیست جدید
//   const newItem = $("<li class='items'></li>");
//   const checkbox = $("<input type='checkbox' class='checkbox'>");
//   const newItemtext = $("<span class='newitemtext'>" + inputValue + "</span>");
//   const buttons = $("<div class='buttons'></div>");
//   const editButtons = $("<button class='editbutton'>Edit</button>");
//   const deleteButtons = $("<button class='deletebutton'>delete</button>");
//   const editinput = $("<input class='editinput'></input>");
//   const cancelButton = $("<button class='canclebutton'>cancle</button>");
//   const saveButton = $("<button class='savebutton'>save</button>");
//   const textBox=$("<div class='text-box'></div>")
//   // تنظیم متن عنصر لیست به مقدار ورودی

//   // اضافه کردن عنصر لیست جدید به لیست کارها
//   $(".todolist").append(newItem);

//   newItem.append(textBox).append(buttons);
//  textBox.append(checkbox).append(newItemtext);
//   buttons.append(editButtons).append(deleteButtons);

//   buttons.append(cancelButton).append(saveButton);
//   newItem.append(editinput).append(buttons);
//   textBox.show();
//   editinput.hide();
//   cancelButton.hide();
//   saveButton.hide();
//   editButtons.on("click", () => {
//     // Remove buttons and add edit input while preserving clarity and correctness
//     editButtons.hide();
//     deleteButtons.hide();
//     saveButton.show();
//     cancelButton.show();
//     textBox.hide();
//     editinput.show();
//   });

//   $("#addTodo").val("");

//   saveButton.on('click', ()=>{

//     editinput.hide();
//     textBox.show();
//     newItemtext.text(editinput.val());
//     saveButton.hide();
//     cancelButton.hide();
//     editButtons.show();
//     deleteButtons.show();

//   })
//   deleteButtons.on('click',()=>{
//    newItem.remove();

//   })

//   cancelButton.on('click',()=>{
//     editinput.hide();
//     textBox.show();
//     saveButton.hide();
//     cancelButton.hide();
//     editButtons.show();
//     deleteButtons.show();

//   })

//   if(inputValue===""){
//     alert('please write something')
//     newItem.remove()
//   }
//   // جلوگیری از رفتار پیش‌فرض ارسال فرم
//   ev.preventDefault();
// });
const todos = [];
const todoInput = $("#todo-input");
const todoForm = $(".todo-form");
const todosContainer = $(".todos-list");

todoForm.submit((e) => {
  e.preventDefault();
  const todo = {};
  todo.id = Date.now();
  todo.title = todoInput.val();
  todo.isComplete = false;
  todo.createdAt = new Date();
  console.log(todo);
  if (todoInput.val() !== "") {
    todos.push(todo);
    //   console.log(todos);
    todoInput.val("");
    generateList(todos);
  }
});

function generateList(todosItem) {
  console.log(todos);
  if (todos.length === 0) {
    const emptyError = $("<li>یک کار اضافه کن</li>");
    todosContainer.append(emptyError);
  } else {
    todosItem.map((item, index) => {
      const todoItem =
        $(`<li id="${item.id}"><span class="todoitemtext">${item.title}</span>
          <div class="">
            <button onclick="editTodo(${item.id});" class="editbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">✅</button>
            <button onclick="removeTodo(${item.id});" class="deletebtn">🗑</button>
          </div></li>`);
      // console.log(item, "item");
      // console.log(index, "index");
      if (index === todosItem.length - 1) {
        todosContainer.append(todoItem);
      }
    });
  }
}

function removeTodo(id) {
  $(`#${id}`).remove();
}
function editTodo(id) {
  const oldValue = $(`#${id} span`).text();
  let updateValue = "";
  $(".edit-input").val(oldValue);

  $(".edit-input").change(() => {
    updateValue = $(".edit-input").val();
  });
  $(".savebutton").on("click", () => {
    todos.find((item) => {
      if (item.id === id) {
        return (item.title = updateValue);
      }
    });
    $(`#${id} span`).text(updateValue);
  });
}

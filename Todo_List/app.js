// let parent = document.getElementById('parent')
// let child2 = document.getElementById('child2')

// console.log('parent==>',parent.children)
// // console.log('parent with junk artifects==>',parent.childNodes)

// console.log('child2==>',child2)
// console.log('child2==>',child2.parentElement)
// console.log('child2 previousSibling==>',child2.previousSibling)
// console.log('child2 previousSibling==>',child2.previousElementSibling)
// console.log('child2 nextElementSibling==>',child2.nextElementSibling)
// // console.log('child2==>',child2.parentElement.parentElement.parentElement)

let todo_input = document.getElementById("todo_input");
let add_todo_btn = document.getElementById("add_todo_btn");
let delete_all_todo_btn = document.getElementById("delete_all_todo_btn");
let todo_list = document.getElementById("todo_list");

add_todo_btn.addEventListener("click", function () {
  if (!todo_input.value) return alert("Todo Ma Kuch Nahi ha");

  var list_items = `<li><span>${todo_input.value}</span>
  <button class='btnEdit' onclick="edit(this)">edit</button>
  <button class='btnDelete' onclick="deletefun(this)">del</button>
  </li>
        `;
  todo_list.innerHTML += list_items;

  todo_input.value = "";
});  

function deletefun(element) {
  //   console.log("delete=>", element);
  element.parentElement.remove();
}

function edit(element) {
  var previousValue = element.previousElementSibling.innerText;
  var updatedValue = prompt("Edit Value", previousValue);
  element.previousElementSibling.innerText = updatedValue;
}

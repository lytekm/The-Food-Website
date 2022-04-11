//add ingredient to list
function add() {
  var input = document.getElementById("input").value;
  var parent = document.getElementById("list");
  if (input === "") {
    alert("You must write something");
  } else {
    var div = document.createElement("div");
    var ingredient = document.createElement("p");
    var button = document.createElement("button");

    ingredient.innerHTML = input;

    div.setAttribute("class", "item");

    parent.appendChild(div);

    div.appendChild(ingredient);
    div.appendChild(button);

    button.innerHTML = "Delete";
    button.className = "delete";

    document.getElementById("input").value = " ";

    //for removing elements
    var buttons = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
        this.parentElement.remove();
      };
    }
  }
}

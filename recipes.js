fetch("recipes.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  var container = document.getElementById("container");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    var link = document.createElement("a");
    var title = document.createElement("h2");
    var img = document.createElement("img");

    img.src = data[i].pic;

    title.innerHTML = data[i].meal;

    link.href = data[i].src;
    link.innerHTML = "Recipe";

    div.setAttribute("class", "recipe");
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(link);

    container.appendChild(div);
  }
}

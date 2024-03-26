function multiplyImages() {
  amount = 10;
  for (var i = 1; i < amount; i++) {
    let img_els = document.createElement("img");
    img_els.src =
      "https://vignette.wikia.nocookie.net/dragonball/images/1/1c/SnakeWayEp06.png/revision/latest?cb=20120531174715";
    document.body.appendChild(img_els);
  }
}

var newButton = document.createElement("button");
newButton.textContent = "cooltrick!";
document.body.appendChild(newButton);

var img = document.createElement("img");
img.src =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcf0aff8-3a0c-4f97-97c6-3879137d6c1e/da6juqa-4e6908c7-db39-4136-825d-fbe9e4fe8e92.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mY2YwYWZmOC0zYTBjLTRmOTctOTdjNi0zODc5MTM3ZDZjMWUvZGE2anVxYS00ZTY5MDhjNy1kYjM5LTQxMzYtODI1ZC1mYmU5ZTRmZThlOTIuanBnIn1dXX0.i2kbApv6U4jlmQmy1Y3qSDFc-eOTaQ9_pyOXZQNoKzw";
document.body.appendChild(img);

img.style.height = "500px";
img.style.width = "500px";

multiplyImages();

function changeImage() {
  var imgtwo = document.getElementById("buttontwo");
  imgtwo.src =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fcf0aff8-3a0c-4f97-97c6-3879137d6c1e/da6juqa-4e6908c7-db39-4136-825d-fbe9e4fe8e92.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mY2YwYWZmOC0zYTBjLTRmOTctOTdjNi0zODc5MTM3ZDZjMWUvZGE2anVxYS00ZTY5MDhjNy1kYjM5LTQxMzYtODI1ZC1mYmU5ZTRmZThlOTIuanBnIn1dXX0.i2kbApv6U4jlmQmy1Y3qSDFc-eOTaQ9_pyOXZQNoKzw";
}

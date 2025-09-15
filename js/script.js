const kidApp = (e) => {
  e.preventDefault();
  const input = document.getElementById("letter");
  const letter = input.value.toLowerCase();
  const title = document.getElementById("title");
  const picture = document.getElementById("picture");

  if (letter == "a") {
    title.innerHTML = "Apple";
    picture.src = "images/images.jpg";
  } else {
    title.innerHTML = "option is not found";
    picture.src = "images/no-image-icon-10.png";
  }
};
function clearInput() {
  document.getElementById("letter").value = "";
}
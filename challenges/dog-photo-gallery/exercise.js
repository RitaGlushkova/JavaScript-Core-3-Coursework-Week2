let btnEl = document.getElementById("refreshBtn");
let imageBox = document.getElementById("imgList");
let listEl = document.createElement("li");
let imgEl = document.createElement("img");

btnEl.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      imgEl.src = data.message;
    })
    .catch((err) => console.log(err));
});
listEl.appendChild(imgEl);
imageBox.appendChild(listEl);

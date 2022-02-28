let imgBoxEl = document.getElementById("imgBox");
let imgEl = document.createElement("img");
imgBoxEl.classList.add("imgBox");
fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    imgEl.src = data.img;
  })
  .catch((err) => console.log(err));
imgBoxEl.appendChild(imgEl);

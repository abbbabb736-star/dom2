const carElement = document.querySelector(".car");
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowLeft") {
    carElement.classList.remove("car--right");
  } else if (e.key === "ArrowRight") {
    carElement.classList.add("car--right");
  }
});

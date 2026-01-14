const roundElement = document.querySelector(".doira");

let scalePoint = 1.0;

document.addEventListener("keydown", (e) => {
  console.log("Bosilgan tugma:", e.key);

  if (e.key === "+") {
    scalePoint += 0.1;
    roundElement.style.transform = `scale(${scalePoint})`;
  } else if (e.key === "-") {
    scalePoint -= 0.1;
    roundElement.style.transform = `scale(${scalePoint})`;
  } else if (e.key === "s" || e.key === "S") {
    roundElement.style.background = "yellow";
  } else if (e.key === "r" || e.key === "R") {
    roundElement.style.background = "blue";
  }
});

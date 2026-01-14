const car = document.querySelector(".car");
let position = 0;
let moving = false;

document.addEventListener("keydown", (e) => {
  if ((e.key === "r" || e.key === "R") && !moving) {
    moving = true;

    const drive = setInterval(() => {
      position += 8;
      car.style.left = position + "px";

      const finishLine = window.innerWidth - car.offsetWidth;

      if (position >= finishLine) {
        clearInterval(drive);
        document.body.style.backgroundColor = "green";
      }
    }, 30);
  }
});

const menuBtn = document.querySelectorAll(".dropbtn");
const dropItem = document.querySelectorAll(".drop-box");

let isMouseOnDropMenu = false;
let isDropMenuOpen = false;

menuBtn.forEach((btn, id) => {
  btn.addEventListener("mouseenter", () => {
    if (!isDropMenuOpen) {
      dropItem[id].classList.add("show");
      isDropMenuOpen = true;
    }

    dropItem[id].addEventListener("mouseenter", () => {
      isMouseOnDropMenu = true;
    });

    dropItem[id].addEventListener("mouseleave", () => {
      if (isMouseOnDropMenu) {
        dropItem[id].classList.remove("show");
        isDropMenuOpen = false;
      }
    });
  });

  btn.addEventListener("mouseleave", (evt) => {
    let btnPos = dropItem[id].getBoundingClientRect();
    let currentSide = closestSide(
      evt.pageX - btnPos.left,
      evt.pageY - btnPos.top - window.pageYOffset,
      dropItem[id].offsetWidth,
      dropItem[id].offsetHeight
    );

    switch (currentSide) {
      case "bottom":
        console.log("Bottom");
        break;
      case "top":
        console.log("Top");
        dropItem[id].classList.remove("show");
        isDropMenuOpen = false;
        break;
      case "left":
        console.log("Left");
        dropItem[id].classList.remove("show");
        isDropMenuOpen = false;
        break;
      case "right":
        console.log("Right");
        dropItem[id].classList.remove("show");
        isDropMenuOpen = false;
        break;
      default:
        break;
    }
  });
});

function closestSide(x, y, w, h) {
  let topSideDist = distMetric(x, y, w / 2, 0);
  let bottomSideDist = distMetric(x, y, w / 2, h);
  let leftSideDist = distMetric(x, y, 0, h / 2);
  let rightSideDist = distMetric(x, y, w, h / 2);

  let min = Math.min(topSideDist, bottomSideDist, leftSideDist, rightSideDist);
  switch (min) {
    case leftSideDist:
      return "left";
    case rightSideDist:
      return "right";
    case topSideDist:
      return "top";
    case bottomSideDist:
      return "bottom";
  }
}

function distMetric(x, y, x2, y2) {
  let xDiff = x - x2;
  let yDiff = y - y2;
  return xDiff * xDiff + yDiff * yDiff;
}

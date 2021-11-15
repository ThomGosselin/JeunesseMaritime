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
    let btnCenterX = (btnPos.left + btnPos.right) / 2;
    let btnCenterY = (btnPos.top + btnPos.bottom) / 2;
    console.log(btnCenterX, btnCenterY);
    console.log(evt);
    /*if (!isDropMenuOpen) {
      dropItem[id].classList.remove("show");
      isDropMenuOpen = false;
    }*/
  });
});

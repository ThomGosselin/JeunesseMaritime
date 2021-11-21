const menuBtn = document.querySelectorAll(".dropbtn");
const dropItems = document.querySelectorAll(".drop-box");
const menu = document.querySelector(".menu");

const logoMenu = document.querySelector(".logo-menu");

////////////////////////////////
// Code pour le menu

let showIndex = 0;

menuBtn.forEach((btn, id) => {
  btn.addEventListener("mouseenter", () => {
    showIndex++;
    updateDropDownMenu(dropItems[id]);
  });

  dropItems[id].addEventListener("mouseenter", () => {
    showIndex++;
  });

  dropItems[id].addEventListener("mouseleave", () => {
    showIndex--;
    updateDropDownMenu(dropItems[id]);
  });

  btn.addEventListener("mouseleave", (evt) => {
    showIndex--;
    updateDropDownMenu(dropItems[id]);
  });
});

function updateDropDownMenu(dropItem) {
  setTimeout(() => {
    dropItems.forEach((item) => {
      item.classList.remove("show");
    });
    if (showIndex > 0) {
      dropItem.classList.add("show");
    }
  }, 1);
}

////////////////////////////////
// Code pour rendre le logo du site cliquable

logoMenu.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

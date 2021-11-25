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
    btn.classList.add("green");
    updateDropDownMenu(dropItems[id]);
  });

  dropItems[id].addEventListener("mouseenter", () => {
    showIndex++;
    setTimeout(() => {
      btn.classList.add("green");
    }, 1);
  });

  dropItems[id].addEventListener("mouseleave", () => {
    showIndex--;
    updateDropDownMenu(dropItems[id], btn);
  });

  btn.addEventListener("mouseleave", () => {
    showIndex--;
    updateDropDownMenu(dropItems[id], btn);
  });
});

function updateDropDownMenu(dropItem, button) {
  setTimeout(() => {
    dropItems.forEach((item) => {
      item.classList.remove("show");
      if (button) {
        button.classList.remove("green");
      }
    });
    if (showIndex > 0) {
      dropItem.classList.add("show");
    }
  }, 1);
}

function changeBtnColor(id) {}

const nav = document.querySelector(".main-menu");

window.onscroll = () => {
  if (window.pageYOffset > 100) {
    nav.style.backgroundColor = "#001538ea";
    nav.style.borderBottom = "2px solid #21c4fd";
  } else {
    nav.style.background = "none";
    nav.style.borderBottom = "0px solid #21c4fd";
  }
};

////////////////////////////////
// Code pour rendre le logo du site cliquable

logoMenu.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

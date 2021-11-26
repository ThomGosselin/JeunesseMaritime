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

const nav = document.querySelector(".main-menu");

window.onscroll = () => {
  if (window.pageYOffset > 200) {
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

////////////////////////////////
// Poissons au hazard

const leftPoisson = document.querySelectorAll(".poisson-left");
const rightPoisson = document.querySelectorAll(".poisson-right");

leftPoisson.forEach((poisson) => {
  poisson.style.animation =
    "left-right " + getRndNumber(10, 60) + "s linear infinite";

  poisson.addEventListener("animationiteration", () => {
    poisson.src = "img/poisson_" + getRndNumber(1, 6) + ".png";
  });
});

rightPoisson.forEach((poisson) => {
  poisson.style.animation =
    "right-left " + getRndNumber(10, 60) + "s linear infinite";

  poisson.addEventListener("animationiteration", () => {
    poisson.src = "img/poisson_" + getRndNumber(1, 6) + ".png";
  });
});

function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

////////////////////////////////
// Hover En savoir plus

const moreBtn = document.querySelectorAll(".btn");
const fleche = document.querySelectorAll(".img-btn");

moreBtn.forEach((btn, id) => {
  btn.addEventListener("mouseover", () => {
    fleche[id].style.transform = "translate(10px)";
  });

  btn.addEventListener("mouseleave", () => {
    fleche[id].style.transform = "translate(0px)";
  });
});

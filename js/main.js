const menuBtn = document.querySelectorAll(".dropbtn");
const dropItems = document.querySelectorAll(".drop-box");
const menu = document.querySelector(".menu");


let showIndex = 0;

menuBtn.forEach((btn, id) => {

  btn.addEventListener("mouseenter", () => {
    showIndex++
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
    dropItems.forEach(item => {
      item.classList.remove("show");
    });
    if (showIndex > 0) {
      dropItem.classList.add("show");
    }
  }, 1);
}

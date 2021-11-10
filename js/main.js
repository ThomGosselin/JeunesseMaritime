const menuBtn = document.querySelectorAll(".dropbtn");
const dropItem = document.querySelectorAll(".drop-box");

menuBtn.forEach((btn, id) => {
    btn.addEventListener("click", () => {
        console.log(id);
        dropItem[id].classList.add("show");
    })
});
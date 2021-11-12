const menuBtn = document.querySelectorAll(".dropbtn");
const dropItem = document.querySelectorAll(".drop-box");

let isBtnActive = false;
let oldID = null;

let isBtnOut = false;
let isDropOut = false;

menuBtn.forEach((btn, id) => {
    btn.addEventListener("click", () => {

        if(id != oldID && oldID != null) {
            dropItem[oldID].classList.remove("show");
            isBtnActive = false;
        }

        dropItem[id].classList.add("show");

        if(isBtnActive) {
        dropItem[id].classList.remove("show");
        isBtnActive = false;
        return;
        };

        isBtnActive = true;
        oldID = id;
    })
});

menuBtn.forEach((btn, id) => {
    btn.addEventListener("mouseover", () => {

        if(id != oldID && oldID != null) {
            dropItem[oldID].classList.remove("show");
            isBtnActive = false;
        }

        dropItem[id].classList.add("show");

        if(isBtnActive) {
        dropItem[id].classList.remove("show");
        isBtnActive = false;
        return;
        };

        isBtnActive = true;
        oldID = id;

        btn.addEventListener("mouseout", () => {
            isBtnOut = true;
            removeDropDownMenu(id);
        })

        dropItem[id].addEventListener("mouseout", () => {
            isDropOut = true;
            removeDropDownMenu(id);
        })
    })
});

function removeDropDownMenu(id) { 
    console.log(isDropOut, isBtnOut);
    if(isDropOut && isBtnOut){
        dropItem[id].classList.remove("show");
        isBtnActive = false;
    };

    isBtnOut = false;
    isDropOut = false;
}
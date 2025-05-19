// Made by Bhuvan Bhattarai

let boxContainer = document.querySelector(".boxContainer")
let box = document.querySelector(".box");
let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let boxes = document.querySelectorAll(".box");
let numberDisplay = document.querySelector(".number");
let navItems = document.querySelectorAll("li");
let container = document.querySelector(".container");
let locationMain = document.querySelector("h4");
let headMain = document.querySelector(".boldHead");
let menuIcon = document.querySelector(".menu-icon")
let menuList = document.querySelector(".menuList")

let count = 1;



document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector(".menu-icon");
    let menuList = document.querySelector(".menuList");
    let back = document.createElement("div");
    menuIcon.addEventListener("click", () => {
        console.log("clicked");
        if (menuList.style.right === "-50vw" || menuList.style.right === "") 
            
            {
            menuList.style.right = "0px"
            menuIcon.style.display = "none"

            let ul = document.querySelector("ul")
            back.innerText = "Go back";
            back.classList.add("back-div");
            ul.prepend(back);

            back.addEventListener("click", () => {
                back.remove()
                menuList.style.right = "-50vw"
                menuIcon.style.display = "block";
            })
        }
    });
});

let bgImage = window.getComputedStyle(boxes[count - 1]).getPropertyValue("background-image");
boxes[0].classList.add("activeBox");
function updateBackground() {

    if (count < 1) count = boxes.length; // Ensuring count stays within range 
    if (count > boxes.length) count = 1;
    let targetBox = boxes[count - 1];
    let bgImage = window.getComputedStyle(boxes[count - 1]).getPropertyValue("background-image");

    container.style.backgroundImage = bgImage;
    numberDisplay.textContent = count <= 9 ? "0" + count : count;

    //Update info
    let locationMin = targetBox.querySelector("p").textContent;
    let headMin = targetBox.querySelector("h3").textContent;
    locationMain.textContent = locationMin;
    headMain.textContent = headMin;

    boxes.forEach(box => box.classList.remove("activeBox"));
    targetBox.classList.add("activeBox");
}


navItems[0].classList.add("afterHover");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        // Remove the 'afterHover' class from all items
        navItems.forEach(nav => nav.classList.remove("afterHover"));

        // Add 'afterHover' to the clicked item
        item.classList.add("afterHover");
    });
});

rightArrow.addEventListener("click", () => {
    count++;
    if (count > boxes.length) {
        count = 1;
    }
    numberDisplay.textContent = count <= 9 ? "0" + count : count;
    updateBackground();

})

leftArrow.addEventListener("click", () => {
    count--;
    if (count <= 0) {

        count = boxes.length;
    }
    numberDisplay.textContent = count <= 9 ? "0" + count : count;
    updateBackground();

})

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        count = index + 1;
        if (count <= 9) {
            numberDisplay.textContent = "0" + count;
        }
        else {
            numberDisplay.textContent = count;
        }

        updateBackground();


    });
});



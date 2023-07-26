const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
}

closeBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    closeBtn.classList.add("hide");
}

window.onscroll = () => {
    this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
}
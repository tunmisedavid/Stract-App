const allContainer = document.querySelector(".body-none");

const navScroll = document.querySelector(".head-sect");

const contactBtn = document.querySelector(".nav-contact-us-btn");
const contactForm = document.querySelector(".contact-us-form");
const closeContact = document.querySelector(".close");

const harmBurger = document.querySelector(".harmburger");
const sideBar = document.querySelector(".sidemenu-container");
const navLineTop = document.querySelector(".nav-top-line");
const navLineMiddl = document.querySelector(".nav-middle-line");
const navLinebttm = document.querySelector(".nav-bottom-line");
const sideOverlay = document.querySelector(".sidebar-overlay");

const getStartedBtn = document.getElementById("get-started-js-btn");
const closeSignIn = document.querySelector(".get-started-close");
const getStartedCnt = document.querySelector(".get-started-wrap");
const signInForm = document.querySelector(".get-startd-form");
const loginLink = document.querySelector(".get-login-link");
const registerLink = document.querySelector(".get-register-link");

const navUpTabs = document.querySelectorAll(".nav-up-tabs");
const navUpTabsMddlCnt = document.querySelector(".nav-up2");

const navLfetTabs = document.querySelectorAll(".nav-left-icon-cnts");
const navLeftCnt = document.querySelector(".card-nav-left-inner");

let preState = window.scrollY;

window.addEventListener("scroll", () => {
  let currentState = window.scrollY;
  if (preState > currentState) {
    navScroll.style.top = "0";
  } else {
    navScroll.style.top = "-120px";
  }
  preState = currentState;
});

contactBtn.addEventListener("click", () => {
  contactForm.classList.add("show");
  document.body.style.overflow = "hidden";
});
closeContact.addEventListener("click", () => {
  contactForm.classList.remove("show");
  document.body.style.overflow = "visible";
});
harmBurger.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-close");

  navLinebttm.classList.toggle("nav-x-bttom");
  navLineTop.classList.toggle("nav-x-top");
  navLineMiddl.classList.toggle("nav-x-middle");

  sideOverlay.classList.toggle("side-overlay-show");
  allContainer.classList.toggle("stract-all-container-over");
});

sideOverlay.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-close");

  navLinebttm.classList.toggle("nav-x-bttom");
  navLineTop.classList.toggle("nav-x-top");
  navLineMiddl.classList.toggle("nav-x-middle");

  sideOverlay.classList.remove("side-overlay-show");

  allContainer.classList.toggle("stract-all-container-over");
});

getStartedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getStartedCnt.classList.add("active-popup");
});
closeSignIn.addEventListener("click", (e) => {
  getStartedCnt.classList.remove("active-popup");
});
registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  getStartedCnt.classList.add("acitve-get-strt");
});
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  getStartedCnt.classList.remove("acitve-get-strt");
});

navUpTabsMddlCnt.addEventListener("click", (e) => {
  e.preventDefault();
  const newTab = e.target.closest("p");
  if (!newTab) return;

  navUpTabs.forEach((tab) => {
    if (tab === newTab) {
      tab.classList.add("selected-nav-up");
    } else {
      tab.classList.remove("selected-nav-up");
    }
  });

  const newTabWidth = newTab.offsetWidth / navUpTabsMddlCnt.offsetWidth;

  navUpTabsMddlCnt.style.setProperty("--_left", newTab.offsetLeft + "px");
  navUpTabsMddlCnt.style.setProperty("--_width", newTabWidth);
});

navLeftCnt.addEventListener("click", (e) => {
  e.preventDefault();
  const newLeft = e.target.closest(".nav-left-icon-cnts");
  if (!newLeft) return;

  navLfetTabs.forEach((tab) => {
    if (tab === newLeft) {
      tab.classList.add("selcted-nav-left");
    } else {
      tab.classList.remove("selcted-nav-left");
    }
  });
});

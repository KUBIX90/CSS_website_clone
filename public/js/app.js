////////// TOGGLE MOBILE MENU //////////

var hamburgerMenu = document.querySelector("#hamburger-menu");
var nav = document.querySelector(".nav-menu nav");

hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("menu-visible");
});


////////// TOGGLE BACKGROUND ON SCROLL //////////

var nav = document.querySelector(".nav-menu");
var header = document.querySelector(".header-info");

window.addEventListener("scroll", function () {

    if (window.pageYOffset > header.clientHeight - 50) {
        nav.classList.add("bg-grey");
    } else {
        nav.classList.remove("bg-grey");
    }
});


////////// MOVING THE CAROUSEL EVERY INTERVAL //////////

var slideIndex = 1;
var profiles = document.querySelectorAll(".profiles article");
var indicators = document.querySelectorAll(".indicators div");
var timeOut = setInterval(carousel, 4000);

function carousel() {

    for (i = 0; i < profiles.length; i++) {
        indicators[i].classList.remove("active");
        profiles[i].classList.remove("profile-active");
    }

    profiles[slideIndex].classList.add("profile-active");
    indicators[slideIndex].classList.add("active");

    slideIndex = (slideIndex += 1) % profiles.length

}

function changeInfo(n) {
    slideIndex = n;
    carousel();
};

////////// FILTER IMAGES WHEN CLICKING GALLERY BUTTON //////////

var images = document.querySelectorAll(".imgs section");
var buttons = document.querySelectorAll(".gallery--btns button");
var all = document.querySelector(".btn-all");
var lorem = document.querySelector(".btn-lorem");
var dolar = document.querySelector(".btn-dolar");
var ipsum = document.querySelector(".btn-ipsum");

function filterImages(btn, class1, class2) {
    for (i = 0; i < images.length; i++) {
        btn.classList.add("btn-active");
        images[i].classList.remove("display-none");
        if (images[i].classList.contains(class1) || images[i].classList.contains(class2)) {
            images[i].classList.add("display-none");
        }
    }
}

function removeActiveBtn() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("btn-active");
    };
}

all.addEventListener("click", function () {
    removeActiveBtn();
    for (i = 0; i < images.length; i++) {
        all.classList.add("btn-active");
        if (images[i].classList.contains("display-none")) {
            images[i].classList.remove("display-none")
        }
    }
});

lorem.addEventListener("click", function () {
    removeActiveBtn();
    filterImages(lorem, "dolar", "ipsum");
});

dolar.addEventListener("click", function () {
    removeActiveBtn();
    filterImages(dolar, "ipsum", "lorem");
});

ipsum.addEventListener("click", function () {
    removeActiveBtn();
    filterImages(ipsum, "dolar", "lorem");
});

////// TOGGLE IMAGE GALLERY MODAL ON CLICK //////

var imgOverlays = document.querySelectorAll(".imgs section div");
var mainImg = document.querySelector(".img-main");
var allModalImgs = document.querySelectorAll(".modal-gallery img");
var modal = document.querySelector(".modal-background");
var closeBtn = document.querySelector(".close-btn");
var opacity = 0.4;

function resetOpacity() {
    for (i = 0; i < allModalImgs.length; i++) {
        allModalImgs[i].style.opacity = 1;
    }
}

document.querySelector("#gallery .imgs").addEventListener("click", function (e) {
    for (i = 0; i < imgOverlays.length; i++) {
        if (e.target == imgOverlays[i]) {
            modal.style.display = "block";
            mainImg.src = e.target.previousElementSibling.src;
        }
    }
});

for (i = 0; i < allModalImgs.length; i++) {
    allModalImgs[i].addEventListener("click", function (e) {
        resetOpacity();
        mainImg.src = e.target.src;
        e.target.style.opacity = opacity;
    });
};

closeBtn.addEventListener("click", function () {
    resetOpacity();
    modal.style.display = "none";
});

////// CLICK THROUGH GALLERY WITH RESPONSIVE BUTTONS //////

prevBtn = document.querySelector(".prev-btn");
nextBtn = document.querySelector(".next-btn");

var currentImg = 1;

nextBtn.addEventListener("click", function () {
    mainImg.src = allModalImgs[currentImg].src;

    currentImg = (currentImg += 1) % allModalImgs.length
});
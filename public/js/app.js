////////// TOGGLE MOBILE MENU //////////

var hamburgerMenu = document.querySelector("#hamburger-menu");
var nav = document.querySelector(".nav-menu nav");

hamburgerMenu.addEventListener("click", function () {
    nav.classList.toggle("menu-visible");
});

/*
///////////////////////////////////////////////////////////////////////

var nav = document.querySelector("#nav-menu");

window.addEventListener("scroll", function () {

    if (window.pageYOffset > 600) {
        nav.classList.add("bg-blck");
    } else {
        nav.classList.remove("bg-blck");
    }
});

///////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////

var imgOverlays = document.querySelectorAll(".imgs section div");
var images = document.querySelectorAll("#gallery .imgs section");
var buttons = document.querySelectorAll("#gallery .btns button");
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

document.querySelector("#gallery .imgs").addEventListener("click", function (e) {
    for (i = 0; i < imgOverlays.length; i++) {
        if (e.target == imgOverlays[i]) {
            modal.style.display = "flex";
            mainImg.src = e.target.previousElementSibling.src;
        }
    }
});

///////////////////////////////////////////////////////////////////////

var mainImg = document.querySelector("#modal .modal-content .img-main");
var allModalImgs = document.querySelectorAll("#modal .modal-content img");
var modal = document.querySelector("#modal .modal-background");
var opacity = 0.4;

function resetOpacity() {
    for (i = 0; i < allModalImgs.length; i++) {
        allModalImgs[i].style.opacity = 1;
    }
}

for (i = 0; i < allModalImgs.length; i++) {
    allModalImgs[i].addEventListener("click", function (e) {
        resetOpacity();
        mainImg.src = e.target.src;
        e.target.style.opacity = opacity;
    });
};

document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
});

////////////////////////////////////////////////////////////////////////

var imgIndex = 1;

document.querySelector(".next").addEventListener("click", function () {
    mainImg.src = allModalImgs[imgIndex].src;

    imgIndex = (imgIndex += 1) % allModalImgs.length
});
*/
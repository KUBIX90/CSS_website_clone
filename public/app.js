document.querySelector("#menu-icon").addEventListener("click", function(){
    document.querySelector("#nav-menu nav ul").classList.toggle("menu-visible");
});

///////////////////////////////////////////////////////////////////////

var nav = document.querySelector("#nav-menu");

window.addEventListener("scroll", function(){

    if(window.pageYOffset > 600){
        nav.classList.add("bg-blck");
    } else {
        nav.classList.remove("bg-blck");
    }
});

///////////////////////////////////////////////////////////////////////

var slideIndex = 1;
var x = document.querySelectorAll(".profiles article");
var y = document.querySelectorAll(".indicators div");
var timeOut = setInterval(carousel, 4000);

function carousel() {

  for (i = 0; i < x.length; i++) {
    y[i].classList.remove("active");
    x[i].classList.remove("profile-active");
  }

  x[slideIndex].classList.add("profile-active");
  y[slideIndex].classList.add("active");

  slideIndex = (slideIndex += 1) % x.length

}

function changeInfo(n){ 
    slideIndex = n;
    carousel();
};
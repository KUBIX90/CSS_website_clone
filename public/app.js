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

var slideIndex = 0;
carousel();

function carousel(i) {
    
    var x = document.querySelectorAll(".profiles article");
    var y = document.querySelectorAll(".indicators div");

    
    for (i = 0; i < x.length; i++) {
      y[i].classList.remove("active");
      x[i].classList.remove("profile-active"); 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].classList.add("profile-active");
    y[slideIndex-1].classList.add("active");
    setTimeout(carousel, 4000);

}
document.querySelector("#menu-icon").addEventListener("click", function(){
    document.querySelector("#nav-menu nav ul").classList.toggle("menu-visible");
});

var nav = document.querySelector("#nav-menu");

window.addEventListener("scroll", function(){

    if(window.pageYOffset > 600){
        nav.classList.add("bg-blck");
    } else {
        nav.classList.remove("bg-blck");
    }

});
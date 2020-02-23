const left = $(".left");
const right = $(".right");
const nav = $(".top");
const welcome = $(".welcome");
const projects = $(".projects");




loadHeaderToPages();
$(document).ready(function () {
    
    runPageIntro();
    addClickListenerToGif();
    setTimeout(() => {
    const navbarToggler = $(".navbar-toggler");


    $( "a[href*='/index.html#']").on("click", (e) => {

        $(".navbar-collapse").toggleClass("show");
        $(navbarToggler).toggleClass("collapsed");
    });

    $(window).on("scroll", (e) => {
            $(".navbar-collapse").removeClass("show");
            $(navbarToggler).addClass("collapsed");
    })
    
    
    // Home made toggler

        const spans = document.querySelectorAll("#nav-toggler span");
        const menuTogglerContainer = document.querySelector("#nav-toggler");
        //Toggle the menu on click
        //console.log(menuTogglerContainer);
        menuTogglerContainer.addEventListener("click", event => {
        toggleMenu(spans, menuTogglerContainer);
    });
    }, 100)


});



function loadHeaderToPages(){
    $("header .container #nav-wrap").load("/partials/header.html");
}

function addClickListenerToGif(){
    $("#renter-gif").on("click", (e) => {
        if(e.target.dataset.ison ==="true"){
            e.target.dataset.ison = "false";
            $(e.target).attr("src", "/images/renter_alt.png");
            $(e.target).removeClass("pt-lg-5");
            $(e.target).removeClass("pt-md-4");
        }
        else{
            e.target.dataset.ison = "true";
            $(e.target).attr("src", "/images/renter.gif");
            $(e.target).addClass("pt-lg-5");
            $(e.target).addClass("pt-md-4");
            
        }
    });
}

function runPageIntro() {     
    $(left).toggleClass("visible");
    $(right).toggleClass("visible");
    $(nav).toggleClass("visible");
    $(welcome).toggleClass("visible");
    $(projects).toggleClass("visible"); 
}



//Home made toggler behavior

//Toggle the close class on the spans for the hamburger menu.
function toggleMenu(spans, menuTogglerContainer) {
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("close");
        
    }
    menuTogglerContainer.classList.toggle("close")
}



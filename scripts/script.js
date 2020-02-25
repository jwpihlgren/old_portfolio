const left = $(".left");
const right = $(".right");
const nav = $(".top");
const welcome = $(".welcome");
const projects = $(".projects");





$(document).ready(() => {

    loadHeaderToPages( () => {
        runPageIntro()
        addClickListenerToGif();
    
        // Home made toggler
    
            const spans = document.querySelectorAll("#nav-toggler span");
            const menuTogglerContainer = document.querySelector("#nav-toggler");
    
            console.log(spans);
            console.log(menuTogglerContainer);
    
            //Toggle the menu on click link
            $( "a[href*='/index.html#']").on("click", (e) => {
                $(".navbar-collapse").removeClass("show");
                closeMenu(spans, menuTogglerContainer);
            });
            
            //Close on scroll
            $(window).on("scroll", (e) => {
                    $(".navbar-collapse").removeClass("show");
                    closeMenu(spans, menuTogglerContainer);
            })
            
            //On click, 
            menuTogglerContainer.addEventListener("click", event => {
            toggleMenu(spans, menuTogglerContainer);
        });

    });
    //Wait to headers to load

 




});



function loadHeaderToPages(_callback){
    $("header .container #nav-wrap").load("/partials/header.html");
    setTimeout(() => {
        _callback();
    }, 100)
 
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

//Close the menu if it's open
function closeMenu(spans, menuTogglerContainer) {
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.remove("close");
        
    }
    menuTogglerContainer.classList.remove("close")
}



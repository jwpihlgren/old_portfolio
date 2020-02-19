const left = $(".left");
const right = $(".right");
const nav = $(".top");
const welcome = $(".welcome");
const projects = $(".projects");
console.log(projects);


$(document).ready(function () {
    loadHeaderToPages();
    runPageIntro();
    addClickListenerToGif();

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

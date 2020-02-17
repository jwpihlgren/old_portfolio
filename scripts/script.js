$("header .container #nav-wrap").load("/partials/header.html");

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
$("header .container #nav-wrap").load("/partials/header.html");

$("#renter-gif").on("click", (e) => {
    if(e.target.dataset.ison ==="true"){
        e.target.dataset.ison = "false";
        $(e.target).attr("src", "/images/renter_alt.png");
    }
    else{
        e.target.dataset.ison = "true";
        $(e.target).attr("src", "/images/renter.gif");
    }
});
$(function(){

    // slider
    let slider = $("#slickSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


    // about -> more info after click

    $("#aboutMeButton").click(function(){
        $(".about-me__text").removeClass("hidden");
    });

    // button -> hidden
    $("#aboutMeButton").click(function(){
        $("#aboutMeButton").addClass("hidden");
    });

    
    // skills

    $("#btnSoft").click(function(){
        $(".soft--skills").removeClass("hidden");
        $(".hard--skills").addClass("hidden");
        $("#btnSoft").addClass("active");
        $("#btnHard").removeClass("active");
    });

    $("#btnHard").click(function(){
        $(".hard--skills").removeClass("hidden");
        $(".soft--skills").addClass("hidden");
        $("#btnHard").addClass("active");
        $("#btnSoft").removeClass("active");
    });

    // portfolio -> more items after click

    $("#portfolioButton").click(function(){
        $(".portfolio__item").removeClass("hidden");
    });

    // button -> hidden
    $("#portfolioButton").click(function(){
        $("#portfolioButton").addClass("hidden");
    });


    // smooth scroll

    $("[data-scroll]").on("click",function(event) {
    event.preventDefault();

    let elementID = $(this).data("scroll");
    let elementsOffset = $(elementID).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
        scrollTop: elementsOffset - 50
        }, 700);

    });

    // nav toggle

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });





});
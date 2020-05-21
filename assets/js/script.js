$(document).ready( () => {
    // $(".menu-toggler").on("click", () => {
    //     $(this).toggleClass("open")
    //     $('nav').toggleClass("open")
    // })
    // $(".nav .nav-link").on("click", () => {
    //     $(".menu-toggler").removeClass("open")
    //     $(".top-nav").removeClass("open")
    // })
    //  back to top function
    $("#up").on("click", () => {
        $('html, body') .animate({
            scrollTop: 0
        }, 2000)
    })
    // smooth scroll 
    // $('a[href^-="#"]').forEach(anchor => {
    //     anchor.addEventListiener('click', (e) => {
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior:'smooth'
    //         })
    //     })
    // })
}); 


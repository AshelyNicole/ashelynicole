$(document).ready( () => {
    $(".menu-toggler").on("click", () => {
        $(this).toggleClass("open")
        $(".top-nav").toggleClass("open")
    })

    $(".top-nav .nav-link").on("click", () => {
        $(".menu-toggler").removeClass("open")
        $(".top-nav").removeClass("open")
    })
    
    $("#up").on("click", () => {
        $('html, body') .animate({
            scrollTop: 0
        }, 2000)
    })
}); 


$(document).ready( () => {

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


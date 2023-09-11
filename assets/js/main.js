// FAQ Section
const items = document.querySelectorAll('.faq-accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

// Password Toggle
// $(".toggle-password").click(function () {
//     $(this).toggleClass("bi-eye-fill bi-eye-slash-fill");
//     var input = $($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }
// });

/*

    I need to work on Password Toggle Eye To Hide and Visible

*/



// Dark & Light Mood Switcher
let checkboxDark = document.getElementById('checkbox-dark');
let darkText = document.getElementById('dark-text');
let lightText = document.getElementById('light-text');
checkboxDark.onclick = function(){
    document.body.classList.toggle('dark-active');
    lightText.classList.toggle('d-none');
    darkText.classList.toggle('d-none');
}

$(document).ready(function(){
    $(window).on('scroll', function(){
        $('.navbar').toggleClass('active', $(this).scrollTop() > 20);
        
    });
    // Mobile Sidebar
    $('.navbar-toggler').on('click', function(){
        $('.sidebar').addClass('show');
        $('.sidebar--overlay').addClass('show');
        $('body').addClass('overflow-hidden');
    });
    $('.sidebar-close').on('click', function(){
        $('.sidebar').removeClass('show');
        $('.sidebar--overlay').removeClass('show');
        $('body').removeClass('overflow-hidden');
    });
});
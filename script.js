// SideNav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 400,
    transition: 600,
    interval: 3000,
});

// Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Material Box
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// Scrollspry
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
    scrollOffset: 50,
    throttle: 200,
});

// Jquery
$(window).on('load', function() {
    $('.animate').each(function(i) {
        setTimeout(function() {
            $('.animate').eq(i).addClass('show');
        }, 200 * i)
    })
});



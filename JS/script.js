$(document).ready(function(){
    
    // Owl Carousel
    
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            1000: {
                items: 3,
            },
            1900: {
                items: 3,
            }
        }
    });
    
    // WOW
    
    new WOW(). init();
    
});
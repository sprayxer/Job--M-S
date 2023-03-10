$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-burger-box,.button-door').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.goods-action').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:2,
        slidesToScroll:1,
        speed:500,
        easing:'ease',
        infinite:false,
        responsive:[
            {
                breakpoint: 373,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
});


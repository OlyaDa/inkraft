//mobile menu (header)

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.main-nav').toggleClass('open');
        $('.header').toggleClass('bg');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$(document).ready(function() {
    $(document).ready(function() {
        $('.nav-link-new').click(function () {
            $('.main-nav').removeClass('open');
            $('.toggle-menu').removeClass('menu-on');
        });

    });
});

//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//scroll

$('.nav-link-new').mPageScroll2id();

//slider for "banner"

$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-ar-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-ar-right"></span> </button>',
    dots: false,
    autoplay: false,

    responsive: [
        {
            breakpoint: 759,
            settings: {
                arrows: false,
            }
        },
    ]
});

//slider for "doing"

$('.doing-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-ar-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-ar-right"></span> </button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
    ]
});

//slider for "work"

$('.work-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-ar-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-ar-right"></span> </button>',
    responsive: [
        {
            breakpoint: 500,
            settings: {
                arrows: false,
            }
        },
    ]
});

//slider for "production"

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-ar-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-ar-right"></span> </button>',
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
    ]
});

$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
});

//video popup

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


// setNameScroll

const nameScroll = document.getElementById('input_order');
const inMail = document.getElementById('inMail');

function setNameScroll(namescroll, mail) {

    nameScroll.value = namescroll;

    if (mail == 'true') {
        inMail.classList.remove('d-none');
        inMail.setAttribute('required', 'required');
    }
    else {
        inMail.classList.add('d-none');
        inMail.removeAttribute('required', 'required');
    }
};

//tele-order

$(document).ready(function(){
    $('.order-main').submit(function(e){
        e.preventDefault();
        $.magnificPopup.close();
        $(".disbutt").prop("disabled", true);
        $.ajax({
            type:'POST',
            url:'/wp-content/themes/baugroup/tele_order.php',
            data: $(this).serialize()
        }).done(function(){
            $.magnificPopup.close();
            setTimeout(function(){
                window.location = 'done';
            },1);
        });
    });
});

//

// $(".nav-item").click(function(e) {
//     $(".work-slider").slick('refresh');
//     $(".work-slider").slick('slickPrev');
//     console.log('refresh');
// });

// const refresh = function(){
//     $(".work-slider").slick('refresh');
// };
//
//
// $(".nav-item").click(function(e) {
//
//     setTimeout(refresh, 400);
//
//     console.log('refresh');
// });

$(window).load(function() {
    $('.work-slider').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });
})

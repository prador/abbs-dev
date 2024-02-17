$("#training-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:1,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:2,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:3
        }
    }   
        
    });

$("#certif-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 4, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            center: true,
             singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        480:{
            items:1,
            center: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        568:{
            items:1,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:4
        }
    }   
        
    });

$("#ticker-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 4, //Set Testimonial items
        loop: false,
        margin: 20,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        568:{
            items:1,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:4
        }
    }   
        
    });


$("#bene-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 4, //Set Testimonial items
        loop: false,
        margin: 20,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        568:{
            items:1,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:4
        }
    }   
        
    });

$("#offered-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: false,
        touchDrag: false,
        mouseDrag: false,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            singleItem: true,
            touchDrag: true,
            mouseDrag: true,
            pagination: true,
        },
        480:{
            items:1,
            singleItem: true,
            touchDrag: true,
            mouseDrag: true,
            pagination: true,
        },
        568:{
            items:1,
            singleItem: true,
            touchDrag: true,
            mouseDrag: true,
            pagination: true,
        },
        600:{
            items:2,
        },
        667:{
            items:2,
        },
        1000:{
            items:3
        }
    }   
        
    });

 
/**
     * ======================================
     * 37. title animation
     * ======================================
     */
    if ($(".title-anim").length > 0) {
      let char_come = gsap.utils.toArray(".title-anim");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });
    }

/* -------------------------------  
         WOW ANIMATED JS START
/* ----------------------------- */

// Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }


/* -------------------------------	
		INPUT PLACEHOLDER
/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	
		back-top
/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}


var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) { 

    $('#header').addClass('sticky');

} else {

    $('#header').removeClass('sticky'); 

}

};

stickyNav();

 

$(window).scroll(function() {

    stickyNav();

});

$('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('#sideNavi').fadeIn();
    } else {
        $('#sideNavi').fadeOut();
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.bouncebtn').fadeIn();
    } else {
        $('.bouncebtn').fadeOut();
    }
});
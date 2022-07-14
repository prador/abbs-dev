

  //alumni-slider
$("#students-slider").owlCarousel({
    //autoPlay: 5000, //Set AutoPlay to 5 seconds
    autoplay: true,
    //smartSpeed: 2000, // Default is 250
    items: 3, //Set Testimonial items
    loop: false,
    margin: 0,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: true,
    dots: true,
    navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:1,
        },
        568:{
            items:2,
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

//recruiters-slider
$("#international-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 5, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav: false,
            },
            480:{
                items:2,
                nav: false,
            },
            568:{
                items:2,
                nav: false,
            },
            600:{
                items:2,
            },
            667:{
                items:2,
            },
            1000:{
                items:5
            }
        }   
        
    });

//recruiters-slider
$("#international-slider1").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            480:{
                items:1,
                nav: false,
            },
            568:{
                items:2,
                nav: false,
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

//recruiters-slider
$("#collaborations-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            autoplay: true,
        },
        480:{
            items:2,
            autoplay: true,
        },
        568:{
            items:2,
            autoplay: true,
        },
        600:{
            items:3,
           
        },
        667:{
            items:3,
           
        },
        1000:{
            items:3
        }
    }   
        
    });

//recruiters-slider
$("#highlight-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            autoplay: true,
        },
        480:{
            items:1,
            autoplay: true,
        },
        568:{
            items:2,
            autoplay: true,
        },
        600:{
            items:3,
           
        },
        667:{
            items:3,
           
        },
        1000:{
            items:3
        }
    }   
        
    });

//recruiters-slider
$("#discover-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 20,
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
            autoplay: true,
        },
        480:{
            items:1,
            autoplay: true,
        },
        568:{
            items:2,
            autoplay: true,
        },
        600:{
            items:3,
           
        },
        667:{
            items:3,
           
        },
        1000:{
            items:3
        }
    }   
        
    });

 

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
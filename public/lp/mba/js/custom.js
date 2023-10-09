/* -------------------------------	
	LOADER JS START
/* ----------------------------- */

$(window).on('load', function () {
  $(".loader").fadeOut(200);
});



// heroo-slider
$("#heroo").owlCarousel({
  // autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay:true,
  // autoplayTimeout:5000,
  // smartSpeed:2000, // Default is 250
  items:1, //Set Testimonial items
  loop:true,
  margin:10,
  singleItem:true,
  touchDrag:true,
  mouseDrag:true,
  pagination:false,
  nav:false,
  dots:true,
  navText:["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
  responsiveClass:true,
});

//Client Carousel
$("#client-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay:false,
  // autoplayHoverPause:true,
  // animateOut:'slideOutUp',
  // animateIn:'slideInUp',
  //smartSpeed:2000, // Default is 250
  items:2, //Set Testimonial items
  loop:true,
  margin:15,
  singleItem:true,
  touchDrag:true,
  mouseDrag:true,
  pagination:false,
  nav:true,
  dots:false,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText:["<i class='fas fa-caret-left'></i>", "<i class='fas fa-caret-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      dots:false,
      autoplay:true,
    },
    480:{
      items:1,
      dots:false,
      autoplay:true,
    },
    568:{
      items:2,
      dots:false,
    },
    600:{
      items:2,
      dots:false,
    },
    768:{
      items:2,
      dots:false,
    },
    1000:{
      items:2,
    }
  }
});


//Client Carousel
$("#collaborations-slider").owlCarousel({
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
        dots: false,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav: false,
            dots: true,
        },
        480:{
            items:2,
            nav: false,
            dots: true,
        },
        568:{
            items:3,
            nav: false,
            dots: true,
        },
        600:{
            items:3,
            nav: false,
            dots: true,
        },
        667:{
            items:3,
            nav: false,
            dots: true,
        },
        1000:{
            items:5,
        }
    }   
        
    }); 
//mentor-Carousel
$("#partners-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay:true,
  //smartSpeed:2000, // Default is 250
  items:3, //Set Testimonial items
  loop:true,
  margin:10,
  singleItem:true,
  touchDrag:true,
  mouseDrag:true,
  pagination:false,
  nav:true,
  dots:false,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
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
      items:1,
    },
    768:{
      items:4,
    },
    1000:{
      items:3,
    }
  }
});



//testi Carousel
$("#testi-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay:true,
  //smartSpeed:2000, // Default is 250
  items:2, //Set Testimonial items
  loop:true,
  margin:15,
  singleItem:true,
  touchDrag:true,
  mouseDrag:true,
  pagination:false,
  nav:true,
  dots:false,
  //navText:["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
  navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      dots:false,
    },
    480:{
      items:1,
      dots:false,
    },
    568:{
      items:2,
    },
    600:{
      items:2,
    },
    768:{
      items:2,
    },
    1000:{
      items:2,
    }
  }
});

//edge-Carousel
$("#edge-slider").owlCarousel({
  //autoPlay:2500, //Set AutoPlay to 5 seconds
  autoplay:false,
  // autoplayTimeout:2000,  
  // center:true,
  //smartSpeed:250, // Default is 250
  items:5, //Set Testimonial items
  loop:true,
  margin:15,
  singleItem:true,
  touchDrag:true,
  mouseDrag:true,
  pagination:false,
  nav:false,
  dots:false,
  //   navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
      autoplay:true,
      dots:false,
    },
    480:{
      items:3,
      autoplay:true,
      dots:false,
    },
    568:{
      items:3,
      autoplay:true,
      dots:false,
    },
    600:{
      items:4,
      autoplay:true,
      dots:false,
    },
    768:{
      items:4,
      autoplay:true,
    },
    1000:{
      items:5,
    }
  }
});


$("#edge-slider-two").owlCarousel({
  //autoPlay:2500, //Set AutoPlay to 5 seconds
  autoplay:false,
  // autoplayTimeout:2000,  
  // center:true,
  //smartSpeed:250, // Default is 250
  items:4, //Set Testimonial items
  loop:true,
  margin:0,
  singleItem:true,
  touchDrag:true,
  mouseDrag:true,
  pagination:false,
  nav:true,
  dots:false,
  //   navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText:["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
      autoplay:true,
      nav:false,
      dots:true,
    },
    480:{
      items:2,
      autoplay:true,
       nav:false,
      dots:true,
    },
    568:{
      items:2,
      autoplay:true,
      nav:false,
      dots:true,
    },
    600:{
      items:4,
      autoplay:true,
       nav:false,
      dots:true,
    },
    768:{
      items:4,
      autoplay:true,
    },
    1000:{
      items:4,
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

$('input,textarea').focus(function () {

  $(this).data('placeholder', $(this).attr('placeholder'))

    .attr('placeholder', '');

}).blur(function () {

  $(this).attr('placeholder', $(this).data('placeholder'));

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
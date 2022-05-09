/* -------------------------------	
	LOADER JS START
/* ----------------------------- */

$(window).on('load', function () {
  $(".loader").fadeOut(200);
});

// ######################### fancybox START #########################
$(document).ready(function () {
  // fancybox_image
  $('.campusfancybox').fancybox({
    // Options will go here
  });

  // fancybox_ video
  $('.playvideofancybox').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });

  //3-vertical-text-slider
  // $('.demo1').verticalLoop({
  //   delay: 3500,
  //   order:'asc'
  // });

  // setTimeout(function () {
  //   //$('.demo1').verticalLoop('autoPause');
  // }, 10*2000);

  // var verticalLoop = new VerticalLoop('.demo2',{
  //   delay: 2000,
  //   order:'desc',
  //   oninitend:function (res) {
  //     console.log(res);
  //   }
  // });

});

// ######################### fancybox CLOSE #########################
// ######################### Conditions START #########################

if ($(window).width() <= 767) {
  // alert('mobile enter');

} else {
  // alert('Desktop enter');
}

// ######################### Conditions CLOSE #########################

/* -------------------------------  
    SILDER UPDATES
/* ----------------------------- */

// $("#heroo").owlCarousel({
//   items:1,
//   nav:false,
//   dots:true,
//   autoplay:true,
//   loop:true,
//   //dots:true,
//   navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
//   mouseDrag:false,
//   touchDrag:false
// });
// // This js codes are for repeating slider text animations
// var heroSection = $(".hero-section");
// var heroSectionText = $(".hero-section-slide h2, .hero-section-slide p");
// var heroSectionButton = $(".hero-section-slide a"); 
// heroSection.on("translate.owl.carousel", function(){
//   heroSectionText.removeClass("animated fadeInUp").css("opacity", "0");
//   heroSectionButton.removeClass("animated fadeInDown").css("opacity", "0");
// });
// heroSection.on("translated.owl.carousel", function(){
//   heroSectionText.addClass("animated fadeInUp").css("opacity", "1");
//   heroSectionButton.addClass("animated fadeInDown").css("opacity", "1");
// });

// heroo-slider
$("#heroo").owlCarousel({
  // autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  // autoplayTimeout:5000,
  // smartSpeed:2000, // Default is 250
  items: 1, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: false,
  dots: true,
  navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
  responsiveClass: true,
});

//Client Carousel
$("#client-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
  //smartSpeed:2000, // Default is 250
  items: 1, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: false,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText: ["<i class='fas fa-sort-up'></i>", "<i class='fas fa-sort-down'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    480: {
      items: 1,
      dots: false,
    },
    568: {
      items: 1,
      dots: false,
    },
    600: {
      items: 1,
      dots: false,
    },
    768: {
      items: 1,
      dots: false,
    },
    1000: {
      items: 1,
    }
  }
});

//ent-Carousel
$("#ent-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed:2000, // Default is 250
  items: 1, //Set Testimonial items
  loop: true,
  margin: 0,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: true,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    568: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
});

//coll-Carousel
$("#coll-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: false,
  //smartSpeed:2000, // Default is 250
  items: 4, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: true,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
    },
    480: {
      items: 2,
      autoplay: true,
    },
    568: {
      items: 2,
      autoplay: true,
    },
    600: {
      items: 2,
      autoplay: true,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    }
  }
});

//mentor-Carousel
$("#mentor-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed:2000, // Default is 250
  items: 4, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: true,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    568: {
      items: 2,
    },
    600: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    }
  }
});

//placement Carousel
$("#place-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed:2000, // Default is 250
  items: 1, //Set Testimonial items
  loop: true,
  margin: 10,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    480: {
      items: 1,
      dots: false,
    },
    568: {
      items: 1,
      nav: true,
      dots: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
    }
  }
});

//testi Carousel
$("#testi-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed:2000, // Default is 250
  items: 2, //Set Testimonial items
  loop: true,
  margin: 15,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: false,
  //navText:["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    480: {
      items: 1,
      dots: false,
    },
    568: {
      items: 2,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    }
  }
});

//edge-Carousel
$("#edge-slider").owlCarousel({
  //autoPlay:2500, //Set AutoPlay to 5 seconds
  autoplay: true,
  autoplayTimeout:2000,  
  // center: true,
  //smartSpeed:250, // Default is 250
  items: 5, //Set Testimonial items
  loop: true,
  margin: 15,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: false,
  dots: false,
  //   navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      // autoplay: true,
      dots: false,
    },
    480: {
      items: 3,
      // autoplay: true,
      dots: false,
    },
    568: {
      items: 3,
      // autoplay: true,
      dots: false,
    },
    600: {
      items: 4,
      // autoplay: true,
      dots: false,
    },
    768: {
      items: 4,
      // autoplay: true,
    },
    1000: {
      items: 5,
    }
  }
});

//alumni-Carousel
$("#alumni-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed:2000, // Default is 250
  items: 2, //Set Testimonial items
  loop: true,
  margin: 20,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: false,
  nav: true,
  dots: true,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      dots: false,
    },
    480: {
      items: 1,
      autoplay: true,
      dots: false,
    },
    568: {
      items: 2,
      autoplay: true,
      dots: false,
    },
    600: {
      items: 2,
      autoplay: true,
      dots: false,
      margin: 10,
    },
    768: {
      items: 2,
      autoplay: true,
      margin: 10,
    },
    1000: {
      items: 2,
    }
  }
});

/* =======================================
        Testimonial Section 
======================================= */
$("#gallery-memeber").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay: true,
  //smartSpeed:2000, // Default is 250
  items: 5, //Set Testimonial items
  loop: true,
  margin: 5,
  singleItem: true,
  touchDrag: true,
  mouseDrag: true,
  pagination: true,
  nav: true,
  dots: false,
  // navText:["<i class='fal fa-arrow-left'></i>","<i class='fal fa-arrow-right'></i>"],
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    415: {
      items: 2,
      margin: 1,
    },
    568: {
      items: 2,
    },
    600: {
      items: 2,
    },
    667: {
      items: 3,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1199: {
      items: 5,
    }
  }
});


//  jQuery(function ($) {
//   $.scrollIt({
//       upKey:38,             // key code to navigate to the next section
//       downKey:40,           // key code to navigate to the previous section
//       easing:'linear',      // the easing function for animation
//       scrollTime:600,       // how long (in ms) the animation takes
//       activeClass:'is-active-top-nav__1level', // class given to the active nav element
//       onPageChange:null,    // function(pageIndex) that is called when page is changed
//       topOffset:-63           // offset (in px) for fixed top navigation
//   });

// });

/* -------------------------------	

	 WOW ANIMATED JS START

/* ----------------------------- */

// Elements Animation
if ($('.wow').length) {
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
  });
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

/* ---------------------    

      new-STICKY NAV

/* --------------------- */

// $(document).ready(function () {
//   var stickyNavTop = ($('#nav').offset() || { "stickyNavTop": NaN }).top;
//   if (isNaN(stickyNavTop)) {
//     // alert("something is wrong, no top, id, class not found");
//   } 
//   else {
//     // alert(top);
//     var stickyNavTop = $('#nav').offset().top;
//     var stickyNav = function(){
//     var scrollTop = $(window).scrollTop();
//       if (scrollTop > stickyNavTop) { 
//         $('#nav').addClass('sticky');
//       } else {
//         $('#nav').removeClass('sticky'); 
//       }
//     };
//     stickyNav();
//     $(window).scroll(function() {
//       stickyNav();
//     });
//   }
// });

$('a[href^="#applyBox"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});

// sideNavi
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 80) {
    $('#sideNavi').fadeIn();
  } else {
    $('#sideNavi').fadeOut();
  }
});

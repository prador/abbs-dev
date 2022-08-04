//awards-slider
$("#highlights-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 5, //Set Testimonial items
		margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav: true,
        },
        480:{
            items:2,
            nav: true,
        },
        568:{
            items:2,
             nav: true,
        },
        600:{
            items:2,
            nav: true,
        },
        667:{
            items:2,
            nav: true,
        },
        1000:{
            items:5
        }
    }   
        
    }); 



//awards-slider
$("#partners-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: true,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: false,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:2,
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
$("#highlight-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 5, //Set Testimonial items
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


//recruiters-slider2
$("#recruiters-slider2").owlCarousel({
//autoPlay: 5000, //Set AutoPlay to 5 seconds
autoplay: true,
//smartSpeed: 2000, // Default is 250
items: 4, //Set Testimonial items
loop: true,
margin: 10,
singleItem: true,
touchDrag: true,
mouseDrag: true,
pagination: false,
nav: true,
dots: true,
navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
0:{
items:2,
},
480:{
items:2,
},
568:{
items:3,
},
600:{
items:3,
},
667:{
items:4,
},
1000:{
items:4
}
}

});	
	
//collab Carousel
$("#collabs-slider").owlCarousel({
  //autoPlay:5000, //Set AutoPlay to 5 seconds
  autoplay:true,
  //smartSpeed:2000, // Default is 250
  items:4, //Set Testimonial items
  loop:true,
  margin:15,
  singleItem:true,
  touchDrag:true,
  mouseDrag:true,
  pagination:false,
  nav:true,
  dots:true,
  navText:["<i class='far fa-arrow-alt-circle-left fa-fw'></i>", "<i class='far fa-arrow-alt-circle-right fa-fw'></i>"],
  responsiveClass:true,
  responsive:{
    0:{
        items:2,
        autoplay:true,
    },
    480:{
        items:3,
        autoplay:true,
    },
    568:{
        items:3,
        autoplay:true,
    },
    600:{
        items:3,
        autoplay:true,
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



//Ranks Carousel
$("#ranks-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: false,
        //smartSpeed: 2000, // Default is 250
        items: 3, //Set Testimonial items
        loop: false,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-arrow-circle-left'></i>", "<i class='fal fa-arrow-circle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        480:{
            items:2,
        },
        568:{
            items:2,
        },
        600:{
            items:3,
        },
        667:{
            items:3,
        },
        1000:{
            items:3,
        }
    }   
        
    });
	
//Client Carousel

$("#student-speak").owlCarousel({

        //autoPlay: 5000, //Set AutoPlay to 5 seconds

        autoplay: true,

        //smartSpeed: 2000, // Default is 250

        items: 2, //Set Testimonial items

        loop: false,

        margin: 10,

        singleItem: true,

        touchDrag: true,

        mouseDrag: true,

        pagination: false,

        nav: false,

        dots: true,

        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],

    responsiveClass:true,

    responsive:{

        0:{

            items:1,

        },

        600:{

            items:1,

        },

        667:{

            items:1,

        },

        768:{

            items:2,

        },

        1000:{

            items:2,

        }

    }   

        

    });

/* Rounded Dark */

  $("#scrollbar-1, #scrollbar-2, #scrollbar-3, #scrollbar-4").mCustomScrollbar({

    theme: "rounded-dark"

  });	
	
//alumni-slider
$("#alumni-slider").owlCarousel({
        //autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        //smartSpeed: 2000, // Default is 250
        items: 2, //Set Testimonial items
        loop: true,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: true,
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
            items:1,
        },
        667:{
            items:2,
        },
        1000:{
            items:2
        }
    }   
        
    }); 	


//Alumni-slider

$("#hiring-slider").owlCarousel({

      //autoPlay: 5000, //Set AutoPlay to 5 seconds

      autoplay: false,

      //smartSpeed: 2000, // Default is 250

      items: 5, //Set Testimonial items

      loop: false,

      margin: 0,

      singleItem: true,

      touchDrag: true,

      mouseDrag: true,

      pagination: false,

      nav: true,

      dots: true,

      navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],

  responsiveClass:true,

  responsive:{

      0:{

          items:2,

      },

      480:{

          items:2,

      },

      568:{

          items:2,

      },

      600:{

          items:3,

      },

      667:{

          items:3,

      },

      1000:{

          items:5

      }

  }   

      

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


/* -------------------------------	

		 WOW ANIMATED JS START

/* ----------------------------- */

new WOW().init();


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

		STICKY NAV

/* --------------------- */

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
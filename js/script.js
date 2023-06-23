$(function(){
    'use strict'

    // Bannner slider

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });


      // About video
      new VenoBox({
        selector: '.my-video-links',
    });



    // gallery venobox
    new VenoBox({
      selector: '.my-image-links',
      numeration: true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
  });

      // testimonial slider

      $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 992.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });



      // Counter up start

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



        // Logo slider

        $('.logo_slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
          dots: false,
          nextArrow: '<i class="fas fa-chevron-right nxt_arrow nxt_arr"></i>',
          prevArrow: '<i class="fas fa-chevron-left pre_arrow pre_arr"></i>',
          responsive: [
            {
              breakpoint: 992.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            }
            
          ]
        });
  
// color switcher 
var colorSheets = [
  {
      color: "#ff8400",
      title: "Switch to Default",
      href: "./css/color-default.css"
  },
  {
      color: "#ff463a",
      title: "Switch to Red",
      href: "./css/color-red.css"
  },
  {
      color: "#4bda28",
      title: "Switch to Green",
      href: "./css/color-green.css"
  },
  {
      color: "#4650dc",
      title: "Switch to Blue",
      href: "./css/color-blue.css"
  },
  {
      color: "#f41c54",
      title: "Switch to Magenta",
      href: "./css/color-magenta.css"
  }
];

ColorSwitcher.init(colorSheets);

});
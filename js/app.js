//preloader js start
$(window).on('load' , function() {
   $('.preloader').fadeOut(1000);
})
//preloader js end
//banner slider js start
$('.banner_slider').slick({
    prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
    autoplaySpeed:500,
    dots:false,
  });
//banner slider js end
//About animation js start
$('.about_slider').slick({
    prevArrow:false,
    nextArrow:false,
    autoplay:true,
    autoplaySpeed:900,
    dotsClass:'about_slider_dot',
    dots:true,
});
//About animation js end
//counter up section start
$('.counter').counterUp({
    delay: 10,
    time: 1000
 });
 //counter up section end
 //menu animate section start
 $(window).on('scroll' , function(){
  var scrollSize = $(window).scrollTop()

  if(scrollSize > 190){
     $('#nav').addClass('active_menu')
  }
  else {
     $('#nav').removeClass('active_menu') 
  }
})
 //menu animate section end
//back to top js arrow start
$(function () {

  $(window).on('scroll', function () {

     var scrollSize = $(window).scrollTop()

     if (scrollSize > 600) {
        $('#backToTop').css({
           bottom: '40px',
           opacity:1
        });
     } else {
        $('#backToTop').css({
           bottom: '500px',
           opacity:0
        });
     }
  })

  $('#backToTop').on('click', function () {
      $('html, body').animate({
         scrollTop:0,
      },1000)
   })
})
//back to top js arrow end

//slider section start
$('.courseSlider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: false,
   prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
   nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
   dots:false,
   centerMode:true,
   centerPadding:"0",
 });
//slider section end

//Test slider start
$('.test_slider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow:'<span class="priv_arrow"><i class="fa-solid fa-angle-left"></i></span>',
   nextArrow:'<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',
});
//test slider end
// Calender js Start
$(function () {
   $("#pb-calendar").pb_calendar({
      'next_month_button':'<i class="fa-solid fa-chevron-up"></i>',
      'prev_month_button':'<i class="fa-solid fa-chevron-down"></i>'
   });
})
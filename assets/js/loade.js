$(document).ready(function(){
     'use strict';
     var windoh = $(window).height();
     $('body').height(windoh);
   
    $(".component-stert  .component--intro ").fadeOut(2000,function()
      {
          $(this).parent().fadeOut(1000,function(){
          $("body").css("overflow","auto");
          $(this).remove();
          $('body').height("100%");
      });
      
    }
    
     );
     $(".component-team-new").owlCarousel(
      {
        navClass:['owl-prev','owl-next'],
        rtl: true,
      
        autoplay:true,
        autoplayhoverpause: true,
        autoplaytimeout:100,
        items:2,
        nav:true,
        responsive:{
          0:{
            items:1,
            dots:false
          },
          485:{
            items:3,
            dots:false
          },
          728:{
            items:4,
            dots:false
          },
          960:{
            items:5,
            dots:false
          },
          1200:{
            items:6,
            dots:true
          },
        }
      }
    );
   });
   //activ-link-nav//
const currentlocation = location.href; 
const menuitem = document.querySelectorAll('.navber-index .nav-item .nav-link');
 const menulength = menuitem.length
for (let i = 0; i<menulength; i++){
 if(menuitem[i].href === currentlocation) {
   menuitem[i].className = "active" 
    }
}
// ******************VIDEO*****************************

var myVideo = document.getElementById('myVideo');

$(".video-date").on('click',function () {
    // debugger;
        if (myVideo.paused){
        $("#myBtn").hide();
        myVideo.play();
       
        } 
        else {
        myVideo.pause();
        $("#myBtn").show();
        }
    });
/**** */
$(window).scroll(function(){
  $(' .navber-index').toggleClass('scrolled', $(this).scrollTop() > 50);
  });

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
    
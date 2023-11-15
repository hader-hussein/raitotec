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


    
window.onscroll = function(){
  menuToSwitch();
};
// $('js')
menuToSwitch()
 function menuToSwitch() {
   wScroll = window.pageYOffset;
   secIndex = -1;
 
   $('.sect').each(function(){
     secOff = $(this).offset().top;
     secH =  $(this).height();
     z = false
       if($(this).index() == 2){
           //  console.log(wScroll >= secOff)
           // console.log(wScroll <= secOff + secH);
           // console.log('ffff');
       }
      
     if(wScroll >= secOff && wScroll <= secOff + secH ) {
        secIndex = $(this).index();
        z = true;
     }
     
     if(z) {
       percentScrollF = 100 - (wScroll - secOff) /(secH / 100);
       percentScrollS = (wScroll - secOff) /(secH /100);
       $('.numbers').eq(secIndex).find('.hd').css({width: 86 / 100 * percentScrollF + 'px'});
       $('.numbers').eq(+secIndex + 1).find('.hd').css({width: 86 / 100 * percentScrollS + 'px'});
     }else {
//       console.log(secIndex + 1)
       if(secIndex != -1 && $(this).index() != (+secIndex + 1)){
          $('.numbers').eq($(this).index()).find('.hd').css({width: 0 + 'px'});
       }else if (secIndex == -1){
//         console.log($(this).index())
          $('.numbers').eq($(this).index()).find('.hd').css({width: 0 + 'px'});
       }
     }
     
     
   })
   
   
 }
var ttt = document;

ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

function init() {
    if (ns4) {ttt.captureEvents(Event.MOUSEMOVE);}
        ttt.onmousemove=mousemove;
}
function mousemove(event) {
    var mouse_x = y = 0;
    
    if (document.attachEvent != null) {
        mouse_x = ttt.event.clientX;
        mouse_y = ttt.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
  
   var p_h = jQuery(window).height();
   var p_w = jQuery(window).width();

  
  if(mouse_y > p_h / 2){

     mouse_y = -((mouse_y/1000)-(p_h / 2)/1000)
     if (mouse_x <  p_w / 2){
      mouse_x = -((mouse_x/1000)- (p_w / 2)/1000)
      
     jQuery('#bordersCanvas,#video').css({'transform':'matrix3d(1,0,'+mouse_x * 1.5+',0,0,1,'+mouse_y * 1.5+',0,0,0,1,0,0,0,0,1)'/*,'-moz-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-ms-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-webkit-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)'*/});
       

      jQuery('#video-butt').css({'transform':'matrix3d(1,0,'+mouse_x * 5+',0,0,1,'+mouse_y * 3+',0,0,0,1,0,'+mouse_x+','+mouse_y+',0,1)'/*,'-moz-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-webkit-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-ms-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)'*/})
    }else  if (mouse_x >  p_w / 2){
      mouse_x = -((mouse_x/1000)- (p_w / 2)/1000)
     jQuery('#bordersCanvas,#video').css({'transform':'matrix3d(1,0,'+mouse_x * 1.5+',0,0,1,'+mouse_y * 1.5+',0,0,0,1,0,0,0,0,1)'/*,'-moz-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-ms-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-webkit-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)'*/});

      jQuery('#video-butt').css({'transform':'matrix3d(1,0,'+mouse_x * 5+',0,0,1,'+mouse_y * 3+',0,0,0,1,0,'+mouse_x+','+mouse_y+',0,1)'/*,'-moz-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-webkit-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-ms-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)'*/})
    }
    
  }
 else if(mouse_y < p_h / 2){//left upps

    mouse_y = -((mouse_y/1000)-(p_h / 2)/1000);
    if (mouse_x <  p_w / 2){
      mouse_x = -((mouse_x/1000)- (p_w / 2)/1000);
      
     jQuery('#bordersCanvas,#video').css({'transform':'matrix3d(1,0,'+mouse_x * 1.5+',0,0,1,'+mouse_y * 1.5+',0,0,0,1,0,0,0,0,1)'/*,'-moz-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-ms-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-webkit-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)'*/});

      jQuery('#video-butt').css({'transform':'matrix3d(1,0,'+mouse_x * 5+',0,0,1,'+mouse_y * 3+',0,0,0,1,0,'+mouse_x+','+mouse_y+',0,1)'/*,'-moz-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-webkit-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-ms-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)'*/})
    }else  if (mouse_x >  p_w / 2){//right upps
      mouse_x = -((mouse_x/1000)- (p_w / 2)/1000);
     jQuery('#bordersCanvas,#video').css({'transform':'matrix3d(1,0,'+mouse_x * 1.5+',0,0,1,'+mouse_y * 1.5+',0,0,0,1,0,0,0,0,1)'/*,'-moz-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-ms-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)','-webkit-transform':'matrix3d(1,0,'+mouse_x * 7+',0,0,1,'+mouse_y / 99+',0,0,0,1,0,0,0,0,1)'*/});

      jQuery('#video-butt').css({'transform':'matrix3d(1,0,'+mouse_x * 5+',0,0,1,'+mouse_y * 3+',0,0,0,1,0,'+mouse_x+','+mouse_y+',0,1)'/*,'-moz-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-webkit-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)','-ms-transform':'translate('+mouse_x+'px) translateY('+mouse_y+'px)'*/})
    }

  }
 
}
 jQuery('#video').mouseleave(function() {
            jQuery(this).css({'transform':'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)','-moz-transform':'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)','-webkit-transform':'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)','-o-transform':'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'}) 
            // jQuery('#video-button').css({'transform':'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,200,1)'}) 
 })
  init()


$('.menu').click(function(){
    $('.menus').addClass('openn');setInterval(function(){ $('.close').addClass('doww'); },500); 
});

$('.close').click(function(){
   $('#ascrail2000').removeClass('markk markk5 markk9');$('.menus').addClass('closy');setTimeout(function() {$('.menus').removeClass('openn');$('.menus').removeClass('closy');},1099);$('.left-menus').removeClass('menu-opas');$('.under-movie').removeClass('movie-runn');$('.under-movie').removeClass('open-right open-right5 open-right9');$('.home').removeClass('active');$('.close').removeClass('doww');$('.movie').removeClass('movv');$('.movie5').removeClass('movv');$('.movie9').removeClass('movv');
});




setInterval(function() {setTimeout(function() {$('.line1').addClass('moov');},3999);  },299)
setInterval(function(){$('.line1').removeClass('moov');}, 5999);

setInterval(function() {setTimeout(function() {$('.line2').addClass('moov0');},5900);  },299)
setInterval(function(){$('.line2').removeClass('moov0');}, 10999);

setInterval(function() {setTimeout(function() {$('.line3').addClass('moov4');},7900);  },299)
setInterval(function(){$('.line3').removeClass('moov4');}, 14000);


setInterval(function() {setTimeout(function() {$('.line4').addClass('moov7');},9999);  },299)
setInterval(function(){$('.line4').removeClass('moov7');}, 10000);

setInterval(function() {setTimeout(function() {$('.line4').addClass('moov5');},4400);  },299)
setInterval(function(){$('.line4').removeClass('moov5');}, 9100);

/*$('.home').click(function(){

    
       $('.home').removeClass('active');
       $(this).addClass('active');
       setTimeout(function() {$('.under-movie').addClass('open-right');$('#ascrail2000').addClass('markk');},299)
});*/
  $(document).ready(function() {var nicesx = $("#boxscroll").niceScroll({touchbehavior:false,cursorcolor:"#fff",cursoropacitymax:0.1,cursorwidth:1,autohidemode:false,zindex:-1});});

setInterval(function() {$('#ascrail2000').addClass('nemm');},9)


/*$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  
  itemsDesktop: false,
  itemsDesktopSmall : [7777,1],
  itemsTablet: [777,1],
  
    
    
    
    
    
    
    
    
    
  itemsMobile: [479,1],
  responsive: true,
  autoPlay:true,
  autoplaySpeed: 1700,
  navigation: true,
  navigationText:'',

})*/




$('.back').click(function(){
   
        $('.under-movie').removeClass('movie-runn');$('.left-menus').removeClass('menu-opas');$('#ascrail2000').removeClass('markk');
});









        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.lang-mark').addClass('dont');$('.head-line').addClass('wach');
            } else {
                $('.lang-mark').removeClass('dont');$('.head-line').removeClass('wach');
            }
        });






function linesAddActivity (mousePoint){
      contW = $('.wrap-container').width();
      
      contOff = $('.wrap-container').offset().left;
      lineW = contW / 100;
    
      perc = mousePoint/lineW
    
        act = 0;
    
    if(perc < 16.6 ){
         act = 0;   
    }else if(perc > 16.6 && perc < 33.3 ){
         act = 1
    }else if(perc > 33.3 && perc < 50 ){
         act = 2
    }else if(perc > 50 && perc < 66.7 ){
         act = 3
    }else if(perc > 66.7 && perc < 83.4 ){
         act = 4
    }else if(perc > 83.4){
         act = 5
    }
    
     $('.line').removeClass('active');
     $('.line'+act).addClass('active');
//
//    if(mousePoint <= contOff + lineW ) {
//        if($('.line1').hasClass('active')){return true};
//        $('.line').removeClass('active');
//        $('.line1').addClass('active');
//    }else if(mousePoint <= contOff + lineW*2 && mousePoint >= contOff + lineW ) {
//       if($('.line2').hasClass('active')){return true};
//        
//        $('.line').removeClass('active');
//        $('.line2').addClass('active');
//    }else if(mousePoint <= contOff + lineW*3 && mousePoint >= contOff + lineW*2 ) {
//        if($('.line3').hasClass('active')){return true};
//        $('.line').removeClass('active');
//        $('.line3').addClass('active');
//    }else if(mousePoint <= contOff + lineW*4 && mousePoint >= contOff + lineW*3 ) {
//       if($('.line4').hasClass('active')){return true};
//        $('.line').removeClass('active');
//        
//        $('.line4').addClass('active');
//    }
//    else if(mousePoint = contOff) {
//       if($('.line9').hasClass('active')){return true};
//        $('.line').removeClass('active');
//        $('.line9').addClass('active');
//    }
//   else if(mousePoint = contOff - contW) {
//       if($('.line5').hasClass('active')){return true};
//        
//        $('.line').removeClass('active');
//        $('.line5').addClass('active');
//    }
};
window.onmousemove =function(e){
   linesAddActivity(e.pageX)
}
$('.inner').hover(
function(){
  
    $(this).addClass('actiive');$('.inner').addClass('opacc');
},
function(){$(this).removeClass('actiive');$('.inner').removeClass('opacc');});










$('.whom').hover(
function(){
  
    $(this).addClass('runny');
},function(){
    $(this).removeClass('runny');
});



  (function( $ ) {
  $.fn.selectyboxi = function() {

  var selectDefaultHeight = $('#selectyBoxi').height();
  var rotateDefault = "rotate(0deg)";
  $('#selectyBoxi > p.valueTags').click(function() {

  var currentHeight = $('#selectyBoxi').addClass('zind').height();$('.fonn-arti').addClass('fonn-see');$('.heady').addClass('actii');$('.wrap-lines').addClass('nonne');

  if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
  $('#selectyBoxi').height("250px");
  }

  if (currentHeight >= 250) {
  $('#selectyBoxi').height(selectDefaultHeight);$('#selectyBoxi').removeClass('zind');$('.fonn-arti').removeClass('fonn-see');$('.heady').removeClass('actii');$('.wrap-lines').removeClass('nonne');
  

  }
  });

  $('li.options').click(function() {
  $('#selectyBoxi').height(selectDefaultHeight);
      
  $('p.valueTags').text($(this).text());$('#selectyBoxi').removeClass('zind');$('.fonn-arti').removeClass('fonn-see');$('.heady').removeClass('actii');$('.wrap-lines').removeClass('nonne');
  });
  };
})( jQuery );

$('selector').selectyboxi();





$('.closs').click(function(){
       $('#selectyBoxi').css({'height':'20px'});$('#selectyBoxi').removeClass('zind');$('.fonn-arti').removeClass('fonn-see');$('.heady').removeClass('actii');$('.wrap-lines').removeClass('nonne');
});


$('.home4').click(function(){
    
    
    
       $('.home').removeClass('active');
       $(this).addClass('active');
       setTimeout(function() {$('.under-movie').addClass('open-right');$('#ascrail2000').addClass('markk');},299) 
});


$('.home4').hover(
function(){
    
    $('.home').removeClass('active');$('.links').removeClass('active');
    $(this).addClass('active');setTimeout(function() {$('.under-movie').removeClass('open-right');$('.under-movie').addClass('open-right');$('#ascrail2000').addClass('markk');},399);
}); 


setInterval(function() {if($(window).height() < 1199) {
    $('.right-menus').css({'align-items':'flex-start'});
}else {$('.right-menus').css({'align-items':'center'});}
},59);


$('.links').hover(
function(){$('.links').removeClass('active');
  $(this).addClass('active');$('.home').removeClass('active');$('.under-movie').removeClass('open-right open-right5 open-right9');$('#ascrail2000').removeClass('markk markk5 markk9');
});
setInterval(function() {if($('.links').hasClass('active')){
    $('.under-movie').removeClass('open-right open-right5 open-right9');$('#ascrail2000').removeClass('markk markk5 markk9');
};
},1);



$('.home5').hover(
function(){
  
    $('.home').removeClass('active');$('.links').removeClass('active');
    $(this).addClass('active');setTimeout(function() {$('.under-movie').removeClass('open-right open-right9');$('.under-movie').addClass('open-right5');$('#ascrail2000').addClass('markk5');},399);
});










$('.home9').hover(
function(){
    $('.home').removeClass('active');$('.links').removeClass('active');
    $(this).addClass('active');setTimeout(function() {$('.under-movie').removeClass('open-right open-right');$('.under-movie').addClass('open-right9');$('#ascrail2000').addClass('markk9');},399);
});


setInterval(function() {if($('.home5').hasClass('active')){
    $('.under-movie').removeClass('open-right open-right9');$('#ascrail2000').removeClass('markk markk9');
};
},1);
setInterval(function() {if($('.home4').hasClass('active')){
    $('.under-movie').removeClass('open-right5 open-right9');$('#ascrail2000').removeClass('markk5 markk9');
};
},1);


setInterval(function() {if($('.home9').hasClass('active')){
    $('.under-movie').removeClass('open-right5 open-right');$('#ascrail2000').removeClass('markk5 markk');
};
},1);

//$('.pages').click(function(){
//   
//    
//    
//    $(this).addClass('active');setTimeout(function() {$('.under-movie').addClass('movie-runn');$('.left-menus').addClass('menu-opas');$('.pages').removeClass('active');},449);setTimeout(function(){$('#ascrail2000').addClass('markk');},749);
//});

$('.pages4').click(function(){
     $(this).addClass('active');$('.movie').addClass('movv');setTimeout(function() {$('.under-movie').addClass('movie-runn');$('.left-menus').addClass('menu-opas');$('.pages').removeClass('active');$('.movie0').css({'display':'none'});},449);setTimeout(function(){$('#ascrail2000').addClass('markk');},749);
});
$('.pages5').click(function(){
     $(this).addClass('active');$('.movie5').addClass('movv');setTimeout(function() {$('.under-movie').addClass('movie-runn');$('.left-menus').addClass('menu-opas');$('.pages').removeClass('active');$('.movie0').css({'display':'none'});},449);setTimeout(function(){$('#ascrail2000').addClass('markk');},749);
});
$('.pages9').click(function(){
     $(this).addClass('active');$('.movie9').addClass('movv');setTimeout(function() {$('.under-movie').addClass('movie-runn');$('.left-menus').addClass('menu-opas');$('.pages').removeClass('active');$('.movie0').css({'display':'none'});},449);setTimeout(function(){$('#ascrail2000').addClass('markk');},749);
});

setInterval(function() {if($(window).height() < 899) {
    $('.sect07').addClass('marrk');
}else {$('.sect07').removeClass('marrk');}
},59);
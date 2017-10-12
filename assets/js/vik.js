$('.cross-menu').click(function(event) {
	event.preventDefault(event);
	$('.cross-menu').each(function() {
		$(this).toggleClass('active');
	});
});

// image preload

// canvas
window.onload = function() {
	
	var c = document.getElementById("bordersCanvas");
	var ctx = c.getContext("2d");
	var w = c.offsetWidth;
	var h = c.offsetHeight;
	var wDifference = ($('#bordersCanvas').outerWidth() - $('#video').outerWidth())/2;
	var hDifference = ($('#bordersCanvas').outerHeight() - $('#video').outerHeight())/2;

	ctx.canvas.width  = w;
	ctx.canvas.height = h;

	// var imgSrc = 'http://www.technics.com/global/50th-anniversary/assets/images/1965_Technics1/main.png';
	var imgSrc = $('#bordersCanvas').data('image');
	var img = new Image();
		img.src = imgSrc;
		img.xpos = wDifference;
  		img.ypos = hDifference;
  		img.w = w-wDifference*2;
  		img.h = h-hDifference*2;
  		img.hover = 0;
  		img.globalAlpha = 0;

	ctx.globalAlpha = 0.3;

	var bordersCount = 4;
	var wCoef = wDifference/bordersCount;
	var hCoef = hDifference/bordersCount;

	var firstLine;

	img.onload = function() {
		for (var i = 0; i < bordersCount*2; i++) {
			ctx.drawImage(img, img.xpos-wDifference*img.hover+wCoef*i*img.hover, img.ypos-hDifference*img.hover+hCoef*i*img.hover, img.w+wDifference*2*img.hover-(wCoef*i)*2*img.hover, img.h+hDifference*2*img.hover-(hCoef*i)*2*img.hover);
		}
		
	}

	$('#video').mouseenter(function(event) {
		canvasHover();
	});
	$('#video').mouseleave(function(event) {
		canvasUnhover()
	});

	function canvasHover(){
		TweenLite.to(img, 0.5 ,{
		    xpos:wDifference,
		    ypos:hDifference,
			globalAlpha: 1,
			hover: 1,
			onComplete: canvasDone
		});
		TweenLite.ticker.addEventListener("tick",loop);
	}
	
	function canvasUnhover(){
		TweenLite.to(img, 0.5 ,{
		    xpos:wDifference, 
		    ypos:hDifference,
			globalAlpha: 1,
		 	hover: 0,
			onComplete: canvasDone
		});
		TweenLite.ticker.addEventListener("tick",loop);
	}

	function canvasDone(){
		TweenLite.ticker.removeEventListener("tick",loop);
	}


	

	function loop(){
		ctx.clearRect(0,0,w,h);
		for (var i = 0; i < bordersCount*2; i++) {
			// if (i >= bordersCount){}
			// ctx.drawImage(img, img.xpos-wCoef*i*img.hover, img.ypos-hCoef*i*img.hover, img.w+(wCoef*i)*2*img.hover, img.h+(hCoef*i)*2*img.hover);
			ctx.drawImage(img, img.xpos-wDifference*img.hover+wCoef*i*img.hover, img.ypos-hDifference*img.hover+hCoef*i*img.hover, img.w+wDifference*2*img.hover-(wCoef*i)*2*img.hover, img.h+hDifference*2*img.hover-(hCoef*i)*2*img.hover);
		}
	}
}



// var elem,elemPos,horLineW,movieParentPos,fromTopToMovie,line,horLine,hoverOutTime,outTime,outTime2,outTime3,outTime4,outTime5,out;

// function menuPorfolioLines() {
// 	elem = $('.left-menus .home.active');
// 	if (elem != undefined){
// 		elemPos = elem.position().top + +elem.css('padding-top').slice(0,-2);
// 		horLineW = $('.right-menus').width();
// 		movieParentPos = $('.under-movie').css('margin-top').slice(0,-2) - elemPos;
// 		fromTopToMovie = movieParentPos;
// 		line = elem.find('span');
// 		horLine = line.find('i')
// 		horLine.css('width', horLineW);
// 		out = false;
// 	}
// }

// $('.under-movie .item-movie').hover(function() {
// 	var that = $(this);
// 	if (elem != undefined){
// 		var outPoints = that.position().top + that.height() > $('.right-menus').height();
// 		if (outPoints || that.position().top < 0){
// 			out = true;
// 		} else {
// 			out = false;
// 		}
// 		if (!out){
// 			fromTopToMovie = movieParentPos + that.position().top + that.height();
// 			clearTimeout(hoverOutTime);
// 			clearTimeout(outTime4);
// 			clearTimeout(outTime5);
// 			if(fromTopToMovie <=0){
// 				if (line.hasClass('bottom')){
// 					horLine.addClass('static');
// 					console.log('stat1');
// 					clearTimeout(outTime2);
// 					clearTimeout(outTime3);
// 					outTime2 = setTimeout(function() {
// 						line.addClass('toZero');
// 						clearTimeout(outTime);
// 						outTime = setTimeout(function() {
// 							line.removeClass('top bottom');
// 							line.removeClass('toZero');
// 							line.addClass('top');
// 							line.css('height', Math.abs(fromTopToMovie));
// 							setTimeout(function() {
// 								horLine.removeClass('static');
// 							}, 150);
// 						}, 150);
// 					}, 150);
// 				} else if (line.hasClass('top')){
// 					horLine.addClass('static');
// 					console.log('stat me');
// 					clearTimeout(outTime2)
// 					outTime2 = setTimeout(function() {
// 						line.css('height', Math.abs(fromTopToMovie));
// 						clearTimeout(outTime);
// 						outTime = setTimeout(function() {
// 							line.removeClass('top bottom');
// 							line.removeClass('toZero');
// 							line.addClass('top');
// 							setTimeout(function() {
// 								horLine.removeClass('static');
// 							}, 150);
// 						}, 150);
// 					}, 150);
// 				} else {
// 					line.addClass('top');
// 					line.removeClass('toZero');
// 					line.css('height', Math.abs(fromTopToMovie));
// 					outTime3 = setTimeout(function() {
// 						horLine.removeClass('static');
// 					}, 150);
// 				}
// 			} else {
// 				if (line.hasClass('top')){
// 					horLine.addClass('static');
// 					console.log('stat2');
// 					clearTimeout(outTime2);
// 					clearTimeout(outTime3);
// 					outTime2 = setTimeout(function() {
// 						line.addClass('toZero');
// 						clearTimeout(outTime);
// 						outTime = setTimeout(function() {
// 							line.removeClass('top bottom');
// 							line.removeClass('toZero');
// 							line.addClass('bottom');
// 							line.css('height', Math.abs(fromTopToMovie));
// 							setTimeout(function() {
// 								horLine.removeClass('static');
// 							}, 150);
// 						}, 150);
// 					}, 150);
// 				} else if (line.hasClass('bottom')){
// 					horLine.addClass('static');
// 					console.log('stat3');
// 					clearTimeout(outTime2);
// 					outTime2 = setTimeout(function() {
// 						line.css('height', Math.abs(fromTopToMovie));
// 						clearTimeout(outTime);
// 						outTime = setTimeout(function() {
// 							line.removeClass('top bottom');
// 							line.removeClass('toZero');
// 							line.addClass('bottom');
// 							setTimeout(function() {
// 								horLine.removeClass('static');
// 							}, 150);
// 						}, 150);
// 					}, 150);
// 				} else {
// 					line.addClass('bottom');
// 					line.removeClass('toZero');
// 					line.css('height', Math.abs(fromTopToMovie));
// 					outTime3 = setTimeout(function() {
// 						horLine.removeClass('static');
// 					}, 150);
// 				}
// 			}
// 		}
// 	}
// }, function() {
// 	var that = $(this);
// 	if (elem != undefined){
// 		var outPoints = that.position().top + that.height() > $('.right-menus').height();
// 		if (outPoints || that.position().top < 0){
// 			out = true;
// 		} else {
// 			out = false;
// 		}
// 		clearTimeout(outTime);
// 		clearTimeout(outTime2);
// 		clearTimeout(outTime3);
// 		if (!out){
// 			hoverOutTime = setTimeout(function() {
// 			horLine.addClass('static');
// 			console.log('stat4');
// 				outTime4 = setTimeout(function() {
// 					line.css('height', '0px');
// 					outTime5 = setTimeout(function() {
// 						line.removeClass('top bottom');
// 					}, 150);
// 				}, 150);
// 			}, 300);
// 		}
// 	}
// });
// $('.right-menus').on('scroll', function() {
// 	clearTimeout(outTime);
// 	clearTimeout(outTime2);
// 	clearTimeout(outTime3);
// 	horLine.addClass('static');
// 	console.log('stat scroll');
// 	hoverOutTime = setTimeout(function() {
// 		outTime4 = setTimeout(function() {
// 			line.css('height', '0px');
// 			outTime5 = setTimeout(function() {
// 				line.removeClass('top bottom');
// 			}, 150);
// 		}, 150);
// 	}, 100);
// });



// $('.left-menus .home').hover(function() {
// 	setTimeout(function() {
// 		menuPorfolioLines();
// 	}, 500);
// });

$('.logo').each(function() {
	var iLogoSrc = $(this).find('img').attr('src').slice(0, -4) + '-i.png';
	$(this).find('a').append('<img class="inverted-logo" src="'+ iLogoSrc +'">');
});

// var scrolCount = 0;
// $('.right-menus').on('scroll', function() {
// 	scrolCount++;
// 	setTimeout(function() {
// 		var actScrollCount = scrolCount;
// 		if (actScrollCount == scrolCount){
// 			$('.nemm > div').removeClass('active');
// 		}
// 	}, 1000);
// 	$('.nemm > div').addClass('active');
// });

$('.left-menus .home').hover(function() {
	if(!$(this).hasClass('active')){
		setTimeout(function() {

			$('.right-menus').mCustomScrollbar("scrollTo",0,{scrollInertia:0});
		}, 230);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 400);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 450);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 500);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 550);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 600);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 650);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 700);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 800);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 850);
		// setTimeout(function() {
		// 	$('.right-menus').mCustomScrollbar("update");
		// }, 900);
	}
});


$('.right-menus').mCustomScrollbar({
	theme:"rounded",
	callbacks:{
        onScrollStart:function(){
            $('.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar').addClass('active');
        },
        onScroll:function(){
            $('.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar').removeClass('active');
        }
    }
});

$('.under-movie .upss-aroww').click(function(event) {
	event.preventDefault(event);
	console.log('top');
	$('.right-menus').mCustomScrollbar("scrollTo","+=200",{scrollInertia:600, scrollEasing:"linear"});
});
$('.under-movie .down-aroww').click(function(event) {
	event.preventDefault(event);
	console.log('bottom');
	$('.right-menus').mCustomScrollbar("scrollTo","-=200",{scrollInertia:600, scrollEasing:"linear"});
});

$(function(){
	let subSwiper=new Swiper(".mainSwiper", {
		loop: true,
		autoplay: 
        {delay: 3000},
		slidesPerView: 1.5,
		spaceBetween: 20,
		centeredSlides: true,
		pagination: {
			el: ".mainSwiper .swiper-pagination",
			clickable: true
		},
		breakpoints: {
		450: {
            slidesPerView: 1.5,
            centeredSlides: true
		},
		700: {
            slidesPerView: 2,
            centeredSlides: true
		},
        860: {
            slidesPerView: 3
        }
		}
	});

	$("#section3 .prev").click(function(e){ 
		e.preventDefault();
		subSwiper.slidePrev();
	});
	$("#section3 .next").click(function(e){
		e.preventDefault();
		subSwiper.slideNext();
	});

	$("#gnb > ul > li").mouseenter(function(){
		if(isMobile) return;
		$("header").addClass("active");
	});

	$("header").mouseleave(function(){
		if(isMobile) return;
		$("header").removeClass("active");
	});

	let wint=0;

	$(window).scroll(function(){
		wint=$(window).scrollTop();

		if(wint > 50){
			if($("header").hasClass("fixed") === false){
				$("header").addClass("fixed");
			}
			
		}
		else{
			if($("header").hasClass("fixed") === true){
				$("header").removeClass("fixed");
			}
		}
	});

	let winw, isMobile;

	$(window).resize(function(){
		winw=$(window).width();

		if(winw > 1020){
			if($("#tab").hasClass("close") === true){
				$("body").removeClass("fixed");
				$("header").removeClass("active");
				$("#mobile").hide();
				$("#tab").removeClass("close");
			}
			isMobile=false;
		}
		else{
			isMobile=true;
		}
	});

	$(window).trigger("resize");

	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("on") === true){
			$(this).removeClass("on");
			$(this).find("ul").slideUp(300);
		}

		else{
			$("#mobile > ul > li").removeClass("on");
			$(this).addClass("on");
			$("#mobile ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
	});

	$("#tab").click(function(e){
		e.preventDefault();

		if($("#tab").hasClass("close") === false){
			$("body").addClass("fixed");
			$("header").addClass("active");
			$("#mobile").slideDown(300);
			$(this).addClass("close");
		}
		else{
			$("body").removeClass("fixed");
			$("header").removeClass("active");
			$("#mobile").slideUp(300);
			$(this).removeClass("close");
		}
	});

	
	let video=document.getElementById("main_video");


	video.addEventListener("loadeddata", function(){
		video.muted=true;
		video.play();
	});

	video.addEventListener("ended", function(){
		video.play();
	});
});
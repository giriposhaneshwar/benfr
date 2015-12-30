$(function(e) {
    // body...
    'use strict';


    $('.bxSlider').bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 410,
        slideMargin: 10,
        // auto: true,
        hideControlOnEnd: false,
        infiniteLoop: true,
        responsive: true,
        touchEnabled: true
    });

    // scroll window header fix
    var headerC = $('.headerSection');

    

    $(document).ready(function(){
    	
    });

    $(document).scroll(function(e) {
    	// if(e.originalEvent.wheelDelta / 120 > 0){
    	// 	console.log("1", e);
    	// }else{
    	// 	console.log("0");
    	// }
    	// var $this = $(this);
     //    if (headerC.scrollTop > 147) {
     //    	console.log("reached");
     //        headerC.addClass("navbar-fixed-top");
     //    } else {
     //        headerC.removeClass("navbar-fixed-top");
     //    }
     if($(document).scrollTop() > 50){
    		headerC.addClass("navbar-fixed-top");
    		$('.topMiniNav').hide();
    	}else{
    		headerC.removeClass("navbar-fixed-top");
    		$('.topMiniNav').show();
    	}
    });

    // Hover Image Change to Model
    var ornlImg;
    $('.imgHolder').hover(function() {
        // Hover
        var $this = $(this);
        var getImg = $this.find('img');
        var imgSrc = getImg.attr('src').split('/');
        ornlImg = imgSrc.join('/');

        imgSrc[2] = getImg.attr('data-hvr') + '.jpg';
        var newImg = imgSrc.join('/');

        // console.log("src", newImg);
        getImg.attr('src', newImg);
    }, function() {
        // out
        var $this = $(this);
        var getImg = $this.find('img');
        var imgSrc = getImg.attr('src').split('/');

        imgSrc[2] = getImg.attr('data-hvr') + '.jpg';
        var newImg = imgSrc.join('/');

        // console.log("src", ornlImg);
        getImg.attr('src', ornlImg);
    });

    // on Click Icon change the link color
    var iconHolder = $('.iconHolder');
    iconHolder.find('a>i').on('click', function(e) {
        $(this).toggleClass('wished');
    });

    // navigation sub menu 
    var navMenu = $('.navHolder').find('li');
    var subMenu = $('.sub-nav-container');
    var docWid = $(document);
    // desktop version
    navMenu.hover(function() {
        if (docWid.width() > 768) {
            var dw = $(document).width();
            subMenu.css('width', dw).show(800);
        } else {
            // handle mobile version
        }
    });

    // Product Filter
    var pFilter = $('.filterHolder');
    pFilter.find('ul>li>a').on('click', function(e){
    	var $this = $(this);
    	var showEle = $('.filterOptions');
    	var getFilter = $this.attr('data-filter');
    	var getSiblings = $this.parent().siblings().find('a').removeClass('expand');
    	showEle.find('.option-'+getFilter).slideToggle(500).siblings().slideUp(100);
    	$this.toggleClass('expand');
    	
    })
});

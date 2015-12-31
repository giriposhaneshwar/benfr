$(function(e) {
    // body...
    'use strict';

    // BX Slider Scrolling
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

    // Slider
    var sliderDrive = $('.sliderDrive');
    sliderDrive.find('li:nth-child(1)').addClass('active');

    var imgSlider = $('.sliderHolder');
    imgSlider.find('img:gt(0)').hide();


    $(window).on('load ready resize', function() {
        imgSlider.find('img').width($(document).width());
        imgSlider.css('overflow', 'hidden');
        imgSlider.height(imgSlider.find('img').height());
    });

    sliderDrive.find('li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var imgSrc = $(this).find('a').attr('data-ref');
        imgSlider.find('img[src="' + imgSrc + '"]').fadeIn(1000).siblings().fadeOut();
    });

    setInterval(function() {
        var $active = $('.sliderDrive li.active');
        var $next = $active.next();
        var $listCount = $('.sliderDrive li').length;
        var $listIndex = $('.sliderDrive li.active').index();
        // console.log("checking", $listCount, $listIndex);
        $next.addClass('active');
        $active.removeClass('active');

        if ($listIndex == ($listCount - 1)) {
            $('.sliderDrive li:first-child').addClass('active');
        }



        sliderDrive.find('li').each(function(i, n) {
            // console.log(i, n);
            if ($(n).hasClass('active')) {
                var imgSrc = $(n).find('a').attr('data-ref');
                // console.log(imgSrc);
                imgSlider.find('img[src="' + imgSrc + '"]').fadeIn(1000).siblings().fadeOut();
            }
        });
    }, 5000);





    // scroll window header fix
    var headerC = $('.headerSection');

    $(document).scroll(function(e) {
        if ($(document).scrollTop() > 50) {
            headerC.addClass("navbar-fixed-top");
            $('.topMiniNav').hide();
        } else {
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
    pFilter.find('ul>li>a').on('click', function(e) {
        var $this = $(this);
        var showEle = $('.filterOptions');
        var getFilter = $this.attr('data-filter');
        var getSiblings = $this.parent().siblings().find('a').removeClass('expand');
        showEle.find('.option-' + getFilter).slideToggle(500).siblings().slideUp(100);
        $this.toggleClass('expand');

    })
});

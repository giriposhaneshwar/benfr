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
        infiniteLoop: false,
        responsive: true,
        touchEnabled: true
    });

    // Slider
    var sliderDrive = $('.sliderDrive');
    sliderDrive.find('li:nth-child(1)').addClass('active');

    var imgSlider = $('.sliderHolder');
    imgSlider.find('img:gt(0)').hide();


    $(window).on('load ready resize', function() {
        var docWid = $(document).width();
        imgSlider.find('img').width(docWid);
        imgSlider.css('overflow', 'hidden');
        imgSlider.height(imgSlider.find('img').height());

        // grid image size is resetted
        var gridImg = $('.gridBanner');
        gridImg.width(docWid);
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
        var thisEle = e.currentTarget.attributes.class.value;
        var findThis = 'icon-search';

        if (thisEle.indexOf(findThis) <= -1) {
            $(this).toggleClass('wished');
        }

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

    });

    // Mobile navigaiton
    var wd = $(window).width();

        var navBtn = $('.navbar-toggle'),
            navContainer = $('.navHolder'),
            navHolder = $('#navbar_navHolder'),
            vochure = $('.mobileVochure'),
            mobNavTrig = $('.mobNavToggle span'),

            miniNav = $('.miniNav'),
            navMenu = $('.navbar-nav'),
            vochureDetails = $('.vochureDetails');

    if (wd < 768) {
        navBtn.on('click', function() {
            $('body').addClass('popin');
            navContainer.addClass('nav_warper');
            // vochure.show();
        });

        $(document).ready(function(){
            $('.collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
                e.preventDefault();
            }); 
            $('[data-toggle="collapse"]').on('click', function(e) {
                e.preventDefault();
                $($(this).data('target')).toggleClass('in');
            });
        });

        function toggleNavTabs(e) {

            if (e[0].innerText == "Shop") {
                miniNav.hide();
                navMenu.show();
                vochureDetails.show();
            } else {
                miniNav.show();
                navMenu.hide();
                vochureDetails.hide();
            }
        }

        mobNavTrig.on('click', function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            // Mobile navigaiton Tabs
            toggleNavTabs($this);
        });



        var navItem = navHolder.find('.navbar-nav>li>a');

        navItem.on('click', function() {
            navHolder.removeClass('in');
            navHolder.attr('aria-expanded', false);
            navContainer.removeClass('nav_warper');
            $('body').removeClass('popin');
        });

        /*$(".navHolder").on('click', function(e){
            // console.log("triggered navbar_navHolder", $(this));
            if(e.target.attributes.id.value != 'navbar_navHolder'){

            }else{
                navHolder.removeClass('in');
                $('body').removeClass('popin');
                navHolder.attr('aria-expanded', false);
                navContainer.removeClass('nav_warper');
                // vochure.hide();
            }
        });*/

       /* $(document).on('click', function(e) {
            // console.log($(e.target));
            if (!$(e.target).hasClass('navbar-collapse') && !$(e.target).hasClass('navbar-toggle')) {
                navHolder.removeClass('in');
                $('body').removeClass('popin');
                navHolder.attr('aria-expanded', false);
                navContainer.removeClass('nav_warper');
                // vochure.hide();
            }
        });*/
    }else{
      navMenu.show();  
    }

    // wish list count
    var wishListTrig = $('.iconHolder .icon-wishlist');
    var cartListTrig = $('.iconHolder .icon-cart');

    function wishList(sel) {
        var ct = 0;
        wishListTrig.each(function(i, n) {
            if ($(n).hasClass('wished')) {
                ct++;
            }
        });
        sel.text(ct);
    }

    function cartList(sel) {
        var ct = 0;
        cartListTrig.each(function(i, n) {
            if ($(n).hasClass('wished')) {
                ct++;
            }
        });
        sel.text(ct);
    }

    wishListTrig.on('click', function() {
        // console.log($(this).hasClass('wished'));
        var wishDis = $('.mainWishList.icon-wishlist .wishCount');

        if (wishDis.length != 0 || wishDis.text() != 0) {
            wishDis.show();
        } else {
            wishDis.hide();
        }
        wishList(wishDis);
    });

    cartListTrig.on('click', function() {
        var cartDis = $('.addToCart.icon-cart .cartCount');
        if (cartDis.length != 0 || cartDis.text() != 0) {
            cartDis.show();
        } else {
            cartDis.hide();
        }
        cartList(cartDis);
    })

});

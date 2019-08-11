/**
 * Created by Noisky on 17/05/13.
 * Revised by Noisky on 19/08/11.
 */
$(document).ready(function() {

    $('a.blog-button').click(function() {
        if (location.hash && location.hash == "#blog") return;
        if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
        $('.main-post-list').removeClass('hidden');
        currentWidth = $('.panel-cover').width();
        if (currentWidth < 960) {
            $('.panel-cover').addClass('panel-cover--collapsed');
        } else {
            $('.panel-cover').css('max-width', currentWidth);
            $('.panel-cover').animate({ 'max-width': '700px', 'width': '30%' }, 400, swing = 'swing', function() {});
        }
    });

    if (window.location.hash && window.location.hash == "#blog") {
        $('.panel-cover').addClass('panel-cover--collapsed');
        $('.main-post-list').removeClass('hidden');
    }

    if (window.location.pathname.substring(0, 5) == "/tag/") {
        $('.panel-cover').addClass('panel-cover--collapsed');
    }

    $('.btn-mobile-menu').click(function() {
        if ($('.navigation-wrapper').css('display') == "block") {
            $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
                $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            });
            $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
        } else {
            $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });

    // 判断是否为移动端
    var isMobile = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;

    // 点击下拉菜单以外的其他标签区域收起菜单生效
    $(document).on('click', ':not(.mobile,.navigation-wrapper,.btn-mobile-menu,.btn-mobile-menu__icon,panel-main__content)', function(e) {
        if ($('.navigation-wrapper').css('display') == "block" && isMobile) {
            $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
                $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            });
            $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
            $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
    });

    // 点击下拉菜单以外的空白区域收起菜单生效
    $(".panel-cover").on('click', ':not(.navigation-wrapper)', function(e) {
        if ($('.navigation-wrapper').css('display') == "block" && isMobile) {
            $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
                $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            });
            $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
            $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
    });
    // 阻止冒泡事件执行
    $(".navigation-wrapper").click(function(event) {
        event.stopPropagation();
    });

    $('.navigation-wrapper .blog-button').click(function() {
        if ($('.navigation-wrapper').css('display') == "block") {
            $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
                $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            });

            $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
        }

        $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
    $('.year').html(new Date().getFullYear());
});
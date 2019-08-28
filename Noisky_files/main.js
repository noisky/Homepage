/**
 * Created by Noisky on 17/05/13.
 * Revised by Noisky on 19/08/28.
 */
$(document).ready(function() {
    var nw = $('.navigation-wrapper');
    // 移动端下拉菜单栏
    function bounceOutUp() {

        nw.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            nw.toggleClass('visible animated bounceOutUp');
            nw.off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        });
        nw.toggleClass('animated bounceInDown animated bounceOutUp');
    }

    $('.btn-mobile-menu').click(function() {
        if (nw.hasClass("bounceInDown")) {
            bounceOutUp();
        } else {
            nw.toggleClass('visible animated bounceInDown');
        }
        $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });

    // 点击下拉菜单以外的其他标签区域收起菜单生效
    $(".panel-main").on('click', ':not(.mobile,.btn-mobile-menu,.navigation-wrapper)', function() {
        if (nw.hasClass("bounceInDown")) {
            bounceOutUp();
            $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
    });
    // 阻止冒泡事件执行
    nw.click(function(event) {
        event.stopPropagation();
    });

    // 底部年份动态化
    $('.year').html(new Date().getFullYear());
});

// 一言异步加载代码
function getHitokoto() {
    $.ajax({
        url: "https://api.imjad.cn/hitokoto/?encode=jsc&charset=utf-8&length=50",
        dataType: "jsonp",
        async: true,
        jsonp: "callback",
        jsonpCallback: "hitokoto",
        success: function(result) {
            $('#hitokoto').html("<p>" + result.hitokoto + "</p>")
        },
        error: function() {
            $('#hitokoto').html("<p>读取数据失败了的说……_(:з」∠)_</p>")
        }
    });
}
getHitokoto();
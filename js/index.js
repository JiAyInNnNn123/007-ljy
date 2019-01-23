// 悬浮窗收缩效果
$('.show-btn').click(function(){
    $(this).parent().animate({
    right:-224
    });
    $(this).prev().css('display','block').animate({
        opacity:1,       
        });
})
$('.hide-btn').click(function(){
    $(this).parent().animate({
    right:0
    });
    $(this).animate({
        opacity:0,   
    },function(){
        $(this).css('display','none');
    })
})
// 导航鼠标移动动画~改它css属性
$('.nav a').mouseover(function(){
    $(this).find('.afte').stop().animate({
        opacity: 1
    }, 500,'linear');
})
$('.nav a').mouseout(function(){
    $(this).find('.afte').stop().animate({
        opacity: 0
    }, 500,'linear');
})
// 技能介绍动画
$('.cont p a').click(function(){
    var index = $(this).index();
    $(this).addClass('cut').siblings().removeClass('cut')
    $('.cont-intr').eq(index).addClass('actv').siblings().removeClass('actv');
})
// 页面所有图标鼠标移入注释
$('.left-2 .sty02').mouseover(function(){
    $(this).children().next().css('display','block').stop().animate({
        opacity:1,
       
    });
})
$('.left-2 .sty02').mouseout(function(){
    $(this).children().next().css('display','none').stop().animate({
        opacity:0
    });
})

$('.sty01').mouseover(function(){
    $(this).find('.description').css('display','block').stop().animate({
        opacity:1,
       
    });
})
$('.sty01').mouseout(function(){
    $(this).find('.description').css('display','none').stop().animate({
        opacity:0
    });
})


//出装推荐切换
$('.right-3-h3').on('click', 'a',function (){
   var index = $(this).index();
   console.log(index)
   $(this).addClass('cur').siblings().removeClass('cur');
   
   $('.taa .tab1').eq(index)
   .addClass('active')
   .siblings().removeClass('active');
});



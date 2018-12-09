
// 设置定时器
var timer = setInterval(function(){
    $('.lrc_left_arrow').click();
},2000);

// 左侧按钮事件
$('.lrc_left_arrow').click(function () {
    // 点击先清除定时器
    clearInterval(timer);
    $('.lrc_cs_group li').eq(0).stop().animate({marginLeft:-350},500, function () {
        var first =  $('.lrc_cs_group li').eq(0);
        first.css('marginLeft',26);
        $('.lrc_cs_group>ul')[0].removeChild(first[0]);
        $('.lrc_cs_group>ul')[0].appendChild(first[0]);
    });
    timer = setInterval(function(){
        $('.lrc_left_arrow').click();
    },2000);

});
// 右侧按钮事件
$('.lrc_right_arrow').click(function () {
    // 点击先清除定时器
    clearInterval(timer);
    $('.lrc_cs_group li').eq(0).stop().animate({marginLeft:350},300, function () {
        var last =  $('.lrc_cs_group li').eq(7);
        var first =  $('.lrc_cs_group li').eq(0);
        first.css('marginLeft',26);
        $('.lrc_cs_group>ul')[0].removeChild(last[0]);
        $('.lrc_cs_group>ul')[0].prepend(last[0]);
    });
    timer = setInterval(function(){
        $('.lrc_left_arrow').click();
    },2000);

});


//鼠标进入事件，停止定时器
$('.lrc_cs_group').mouseenter(function(){
    clearInterval(timer);
});
//鼠标离开事件
$('.lrc_cs_group').mouseleave(function(){
    timer = setInterval(function(){
        $('.lrc_left_arrow').click();
    },2000);
});








    

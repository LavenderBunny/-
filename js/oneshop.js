var t;
// 存放banner 图片（数组）
var bans  = new Array();
bans[0] = "images/ban1.jpg";
bans[1] = "images/baner7.jpg";
bans[2] = "images/baner8.jpg";
// 标识我当前显示的图片是第几张
var i=0;
// 定时器执行的内容（方法）
function banner(){
	
	if(i==3){
		i=0;
	}
	// 把显示的图片，换成我们下标是i的图片
	$("#baner-img").attr('src',bans[i]);
	//将所有的数字，移除红色的样式
	$(".num").removeClass("red");
	//将所有的数字，添加灰色的样式
	$(".num").addClass("gray");
	//将当前这个数字，添加红色的样式
	$(".num:eq("+i+")").addClass("red");
	//将当前这个数组，移除灰色的样式
	$(".num:eq("+i+")").removeClass("gray");
	
	i=i+1;
}

$(function(){
	$("#baner-img").attr('src',bans[i]);
	
	// 2000 毫秒，就是2秒，执行banner 方法，其实就是切换图片
	t =setInterval(banner,2000);
});

// 鼠标移上的方法
// function  关键词 changeBanner  方法名称  num  传递的参数
function changeBanner(num){
	// 停止轮播
	clearInterval(t);
	
}
// 鼠标离开的时候调用的方法--  继续轮播
function continueBanner(){
	// 2000 毫秒，就是2秒，执行banner 方法，其实就是切换图片
	t =setInterval(banner,2000);
}

//快讯自动向上移动动画
$(function(){
    function movedown(){
		// 距离上面的外边距
        var marginTop = 0 ;
		// 是否停止滚动
        var stop =false;
        var interval = setInterval(function(){
            if(stop) return;
            $('#gongao').children('p').first().animate({
                    'margin-top':marginTop--},
                0,
                function(){
                    var $first =$(this);
                    if(!$first.is(':animated')){
                        if((-marginTop)>$first.height()){
                            $first.css({'margin-top':0}).appendTo($('#gongao'));
                            marginTop = 0;
                        }
                    }
                });
        },50);
		// 鼠标放置上去，停止 滚动
        $('#gongao').mouseover(function(){
            stop = true;
        }).mouseout(function(){
			// 鼠标离开回复滚动
            stop = false;
        });
    }
	//默认调用方法
    movedown();
});
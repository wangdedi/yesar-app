
jQuery(document).ready(function($){
	 $('#sy1').click(function(){
	  	$('html,body').animate({scrollTop: '0px'}, 800);
	 });
	 $('#gy1').click(function(){
	 	 $('html,body').animate({scrollTop:$('#gy').offset().top-90}, 800);
	 });
	 $('#lx1').click(function(){
	  	$('html,body').animate({scrollTop:$('#lx').offset().top-90}, 800);
	 });
	 $('#jr1').click(function(){
	  	$('html,body').animate({scrollTop:$('#jr').offset().top-90}, 800);
	 });
	 //鼠标点击抬起
	 var ar=$(".onmouse");
     for (var i=0; i < ar.length; i++) {
        $(ar[i]).on("mousedown",function (argument) {
           $(this).css("background-color","#eee")
        })
        $(ar[i]).on("mouseup",function (argument) {
           $(this).css("background-color","#fff")
        })
     };
});
//获取屏幕宽
		var windWidth=$("body").width();
		
		
		
		//视频显示隐藏
		function videoTog(obj){
			console.log(obj)
			if (obj=="AR") {
				$("#videoPage1").toggle();
			} else {
				$("#videoPage").toggle();
			}
			
		}
		
		//$("#cli").on("click",function () {
		//	$("#videoPage").show();
		//})
		//视频播放
		function playPause(obj,name){ 
			
			var myVideo=document.getElementById(name);
			 
			if (myVideo.paused) {
				$(obj).attr("class","ub-con zind999")
				myVideo.play(); 
			}else {
				console.log(1235)
				$(obj).attr("class","ub-con start zind999")
				myVideo.pause(); 
			}
				  
		} 

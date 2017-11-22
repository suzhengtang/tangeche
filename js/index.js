!(function () {
	//默认排序
	$('#default').click(function () {
		if(typeof($("#default").find('#img_default').attr("style"))=="undefined"){
			$('.hidden-div').css('display','block');
			$('.hidden-div').css('height','667px');
			$(this).css({color: '#ffba35'});
			$('#img_default').css({display: 'none'});
			$('#img_default_red').css({display: 'block'});
			$('#default_show').css({display: 'block'});
		}else{
			$('.hidden-div').css('display','none');
			$('.hidden-div').css('height','0');
			$(this).css({color: '#1a1a1a'});
			$('#img_default').removeAttr('style');
			$('#img_default_red').css({display: 'none'});
			$('#default_show').css({display: 'none'});
		}
	})
	$('#default_show li').click(function () {
		$(this).addClass('actived').siblings().removeClass('actived');
		$('#default').find('span').html($(this).text());
		//做相应的事情，请求后台数据
	})

	//品牌
	$('#brand').click(function () {
		alert('品牌');
	})

	//首付
	$('#first').click(function () {
		if(typeof($("#first").find('#img_first').attr("style"))=="undefined"){
			$('.hidden-div').css('display','block');
			$('.hidden-div').css('height','667px');
			$(this).css({color: '#ffba35'});
			$('#img_first').css({display: 'none'});
			$('#img_first_red').css({display: 'block'});
			$('#first_show').css({display: 'block'});
		}else{
			$('.hidden-div').css('display','none');
			$('.hidden-div').css('height','0');
			$(this).css({color: '#1a1a1a'});
			$('#img_first').removeAttr('style');
			$('#img_first_red').css({display: 'none'});
			$('#first_show').css({display: 'none'});
		}
	})
	$('#first_show a').click(function () {
		$(this).addClass('actived').siblings().removeClass('actived');
		$('#first').find('span').html($(this).text());
		//做相应的事情，请求后台数据
	})

	//全国
	// $('#city').click(function () {
	// 	alert('选着城市');
	// })

	//搜索想买的车
	$('#bay_car input').focus(function () {
		$('#bay_car .fake-placeholder').html('');
	})
	$('#bay_car input').blur(function () {
		if($('#bay_car .fake-placeholder').html('')){
			$('#bay_car .fake-placeholder').html("<img src=\"images/car/search.png\" alt=\"\">想买什么车？");
		}
	})
	$('.menu-div').click(function () {
		var inputVal = $('#bay_car input').val();
		if(inputVal == ''){
			alert('请输入你理想的爱车再搜索');
			return;
		}
		console.log(inputVal);
		//向后台发送请求，获取数据
	})

	//详情页面的逻辑及效果处理
	//tabbar切换
	$('.tabs-li li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		var indexChange = $(this).index();
		if(indexChange == 0){
			$('#tabContent3').css('display','none');
			$('#tabContent1').css('display','block');
		}else{
			$('#tabContent1').css('display','none');
			$('#tabContent3').css('display','block');
		}
	})


})()
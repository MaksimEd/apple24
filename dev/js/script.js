$(document).ready(function () {

	"use strict";



	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('header').addClass('header--scroll');
		}
		else{
			$('header').removeClass('header--scroll');
		}
		if ($(this).scrollTop() > $(this).height()){
			$('.top, .top2').addClass('active');
		}else{
			$('.top, .top2').removeClass('active');
		}	
	});

	$('.top, .top2').click(function(){
		$('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

    $('[name=phone]').mask("+375 (99) 999-99-99");
   
	$('.slider-col2').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
			dots: true
		  }
		}]
	});

	$(".menu").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-50}, 1500);
	});

	$("#new-phone a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-50}, 1500);

		$('#calculator ul#tabs').find(id).click();
	});

  $('#Modal-form, #Modal-form_vk').on('show.bs.modal', function (target1) {
      var button = target1.relatedTarget;
      var title = $(button).attr("data-title");
      var submit = $(button).attr("data-submit");
      var target = $(button).attr("data-targets");
      var send = $(button).data('title-send');
      var consul = $(button).data('consul');
      if (consul) { $(this).find('p#title').text(''); } else { $(this).find('p#title').text('Наш консультант свяжется с Вами'); }
      $(this).find('.form-group').removeClass('has-error');
      $(this).find('.modal-title').text(title);
      $(this).find('input[type=submit]').val(submit);
      $(this).find('input[name=valToSend]').val(send);
      $(this).find('input[name=target]').val(target);
  });



  var characteristic = [
  	[['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 11</strong></td></tr><tr><td>Размер экрана</td><td><strong>5.8</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>1125x2436</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A11 Bionic</strong></td></tr><tr><td>Количество ядер</td><td><strong>6 (2+4)</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (2x Monsoon + 4x Mistral)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Ёмкость аккумулятора</td><td><strong>2 716 мА·ч</strong></td></tr><tr><td>Длина</td><td><strong>143.6 мм</strong></td></tr><tr><td>Ширина</td><td><strong>70.9 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.7 мм</strong></td></tr><tr><td>Вес</td><td><strong>174 г</strong></td></tr></tbody>']],
  	[['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 11</strong></td></tr><tr><td>Размер экрана</td><td><strong>4.7"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>750x1334</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A11 Bionic</strong></td></tr><tr><td>Количество ядер</td><td><strong>6 (2+4)</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (2x Monsoon + 4x Mistral)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Длина</td><td><strong>138.4 мм</strong></td></tr><tr><td>Ширина</td><td><strong>67.3 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.3 мм</strong></td></tr><tr><td>Вес</td><td><strong>148 г</strong></td></tr></tbody>'], ['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 11</strong></td></tr><tr><td>Размер экрана</td><td><strong>5.5"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>1080x1920</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A11 Bionic</strong></td></tr><tr><td>Количество ядер</td><td><strong>6 (2+4)</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (2x Monsoon + 4x Mistral)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Длина</td><td><strong>158.4 мм</strong></td></tr><tr><td>Ширина</td><td><strong>78.1 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.5 мм</strong></td></tr><tr><td>Вес</td><td><strong>202 г</strong></td></tr></tbody>']],
  	[['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 10</strong></td></tr><tr><td>Размер экрана</td><td><strong>4.7"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>750x1334</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A10 Fusion</strong></td></tr><tr><td>Количество ядер</td><td><strong>4 (2+2)</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (Hurricane + Zephyr)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Длина</td><td><strong>138.3 мм</strong></td></tr><tr><td>Ширина</td><td><strong>67.1 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.1 мм</strong></td></tr><tr><td>Вес</td><td><strong>138 г</strong></td></tr></tbody>'], ['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 10</strong></td></tr><tr><td>Размер экрана</td><td><strong>5.5"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>1080x1920</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A10 Fusion</strong></td></tr><tr><td>Количество ядер</td><td><strong>4 (2+2)</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (Hurricane + Zephyr)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Ёмкость аккумулятора</td><td><strong>2 900 мА·ч</strong></td></tr><tr><td>Длина</td><td><strong>158.2 мм</strong></td></tr><tr><td>Ширина</td><td><strong>77.9 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.3 мм</strong></td></tr><tr><td>Вес</td><td><strong>188 г</strong></td></tr></tbody>']],
  	[['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 9</strong></td></tr><tr><td>Размер экрана</td><td><strong>4.7"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>750x1334</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A9</strong></td></tr><tr><td>Количество ядер</td><td><strong>2</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (Apple Twister)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Ёмкость аккумулятора</td><td><strong>1 715 мА·ч</strong></td></tr><tr><td>Длина</td><td><strong>138.3 мм</strong></td></tr><tr><td>Ширина</td><td><strong>67.1 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.1 мм</strong></td></tr><tr><td>Вес</td><td><strong>143 г</strong></td></tr></tbody>'], ['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 9</strong></td></tr><tr><td>Размер экрана</td><td><strong>5.5"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>1080x1920</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A9</strong></td></tr><tr><td>Количество ядер</td><td><strong>2</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (Apple Twister)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Длина</td><td><strong>158.2 мм</strong></td></tr><tr><td>Ширина</td><td><strong>77.9 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.3 мм</strong></td></tr><tr><td>Вес</td><td><strong>192 г</strong></td></tr></tbody>']],
  	[['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 9</strong></td></tr><tr><td>Размер экрана</td><td><strong>4.7"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>750x1334</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A8</strong></td></tr><tr><td>Количество ядер</td><td><strong>2</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (Apple Typhoon)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Длина</td><td><strong>138.1 мм</strong></td></tr><tr><td>Ширина</td><td><strong>67 мм</strong></td></tr><tr><td>Толщина</td><td><strong>6.9 мм</strong></td></tr><tr><td>Вес</td><td><strong>129 г</strong></td></tr></tbody>']],
  	[['<tbody><tr><td>Операционная система</td><td><strong>Apple iOS</strong></td></tr><tr><td>Версия операционной системы</td><td><strong>iOS 9</strong></td></tr><tr><td>Размер экрана</td><td><strong>4"</strong></td></tr><tr><td>Разрешение экрана</td><td><strong>640x1136</strong></td></tr><tr><td>Процессор</td><td><strong>Apple A9</strong></td></tr><tr><td>Количество ядер</td><td><strong>2</strong></td></tr><tr><td>Микроархитектура ЦПУ</td><td><strong>ARMv8-A (Apple Twister)</strong></td></tr><tr><td>Разрядность процессора</td><td><strong>64 бита</strong></td></tr><tr><td>Длина</td><td><strong>123.8 мм</strong></td></tr><tr><td>Ширина</td><td><strong>58.6 мм</strong></td></tr><tr><td>Толщина</td><td><strong>7.6 мм</strong></td></tr><tr><td>Вес</td><td><strong>113 г</strong></td></tr></tbody>']]
  ];



  calc();
  function calc(){

  	for (var i = 0; i < arrayiphone.length; i++) {
  		if (i == 0) {
  			$('#calculator #tabs').append('<li class="active"><a href="'+ arrayiphone[i].id_phone +'" id="'+ arrayiphone[i].id_phone +'" role="tab" data-toggle="tab">'+ arrayiphone[i].name_phone +'</a><span>new</span></li>');
  		} else if (i == 1){
  			$('#calculator #tabs').append('<li><a href="'+ arrayiphone[i].id_phone +'" id="'+ arrayiphone[i].id_phone +'" role="tab" data-toggle="tab">'+ arrayiphone[i].name_phone +'</a><span>new</span></li>');
  		} else{
  			$('#calculator #tabs').append('<li><a href="'+ arrayiphone[i].id_phone +'" id="'+ arrayiphone[i].id_phone +'" role="tab" data-toggle="tab">'+ arrayiphone[i].name_phone +'</a></li>');
  		}
  	}
  	$('#calculator .list #phone_model').append(phone_model(0));
  	$('#calculator .list #phone_color').append(phone_color(0));
  	phone_pic(0,0,0);// номер строки с массива, размер мал или большой,  номер цвета

  	$('#calculator .list #phone_memory').append(phone_memory(0,0,0));// номер строки с массива, размер мал или большой,  номер цвета
  	$('#calculator p#calc__price').append(phone_price(0,0,0,0));// номер строки с массива, размер мал или большой,  номер цвета, нмоер памяти

  }

	function phone_model(id){
		var result = '';
		for (var i = 0; i < arrayiphone[id].phone_model.length; i++) {
			if (i == 0) {
				result +='<li><input name="model" checked type="radio" value="'+ arrayiphone[id].phone_model[i] +'" id="radiomodel-'+ i +'"><label for="radiomodel-'+ i +'">'+ arrayiphone[id].phone_model[i] +'</label></li>';
			}else{
				result +='<li><input name="model" type="radio" value="'+ arrayiphone[id].phone_model[i] +'" id="radiomodel-'+ i +'"><label for="radiomodel-'+ i +'">'+ arrayiphone[id].phone_model[i] +'</label></li>';
			}
		}
		return result;
	}

	function phone_color(id){
		var result = '', color = '';
		for (var i = 0; i < arrayiphone[id].phone_color.length; i++) {
			switch (arrayiphone[id].phone_color[i]){
				case 'Серебристый':	color = '#e8e9ea';	break;
				case 'Красный':	color = '#7c0a15';	break;
				case 'Черный оникс':	color = '#000';	break;
				case 'Черный': if (id == 2) { color = '#3e4044'; } else color = '#000';	break;
				case 'Розовое золото':	color = '#f8d0ca';	break;
				case 'Золотистый':	color = '#f3dcc4';	break;
				case 'Серый космос':	color = '#212123';	break;
			}
			if (i == 0) {
				result += '<li style="line-height: 0;"><input name="color" checked type="radio" value="'+ arrayiphone[id].phone_color[i] +'" id="radiocolor-'+ i +'"><label for="radiocolor-'+ i +'" title="'+ arrayiphone[id].phone_color[i] +'" style="background-color: '+ color +';"></label></li>';
			} else{
				result += '<li style="line-height: 0;"><input name="color" type="radio" value="'+ arrayiphone[id].phone_color[i] +'" id="radiocolor-'+ i +'"><label for="radiocolor-'+ i +'" title="'+ arrayiphone[id].phone_color[i] +'" style="background-color: '+ color +';"></label></li>';
			}
		}
		return result;
	}

	function phone_memory(id, id2, id3){
		var result = '';
		// номер строки с массива, размер мал или большой,  номер цвета
		for (var i = 0; i < arrayiphone[id].phone_memory[id2][id3].length; i++) {

				if (i == 0) {
					result += '<li><input name="size" checked type="radio" value="'+ arrayiphone[id].phone_memory[id2][id3][i] +'" id="radiosize-'+ i +'"><label for="radiosize-'+ i +'">'+ arrayiphone[id].phone_memory[id2][id3][i] +'</label></li>';
				}else{
					result += '<li><input name="size" type="radio" value="'+ arrayiphone[id].phone_memory[id2][id3][i] +'" id="radiosize-'+ i +'"><label for="radiosize-'+ i +'">'+ arrayiphone[id].phone_memory[id2][id3][i] +'</label></li>';
				}
		}	
		return result;
	}

	// номер строки с массива, размер мал или большой,  номер цвета, память
	function phone_price(id, id2, id3, id4) { return '<span>'+ arrayiphone[id].phone_price[id2][id3][id4]+'</span>.00 руб.'; }
	
	// номер строки с массива, размер мал или большой,  номер цвета
	function phone_pic(id, id2, id3) { 
		var color = '', size = '';
		switch (arrayiphone[id].phone_color[id3]){
			case 'Серебристый':	color = 'silver';	break;
			case 'Красный':	color = 'red';	break;
			case 'Черный оникс':	color = 'black';	break;

			case 'Черный': if (id == 2) { color = 'gray'; } else color = 'black';	break;

			case 'Розовое золото':	color = 'rosegold';	break;
			case 'Золотистый':	color = 'gold';	break;
			case 'Серый космос':	color = 'gray';	break;
		}
		if (id2 == 1) { size = '-plus'; }
		var result = arrayiphone[id].id_phone + '/' + arrayiphone[id].id_phone + '-' + color + size;
		console.log(result);

		$('#calc-img-phone1').attr({'src': 'img/iphone/'+ result + '1.png', 'alt':  arrayiphone[id].id_phone + '-' + color + size });
		$('#calc-img-phone2').attr({'src': 'img/iphone/'+ result + '2.png', 'alt':  arrayiphone[id].id_phone + '-' + color + size });

	}


	function find_id(value) {
	    for (var i = 0; i < arrayiphone.length; i++) 
	        if (arrayiphone[i].id_phone == value)
	            return i;
	}


	var num_id_phone = 0;
	var num_model_phone = 0;
	var num_model_color = 0;
	var num_model_size = 0;
	
	$('#calculator a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  	var tab = e.target; // newly activated tab
	  	var model = $(tab).attr('href'); // newly activated tab
	  	console.log(find_id(model));

		num_id_phone = find_id(model);

		if (num_id_phone <= 2) {
			$('.btn.complect').attr('data-target', '#Modal-form_complect-nojeck');
		} else $('.btn.complect').attr('data-target', '#Modal-form_complect');

		num_model_phone = 0;
		num_model_color = 0;
		num_model_size = 0;

  		$('#calculator .list #phone_model').html(phone_model(num_id_phone));
  		$('#calculator .list #phone_color').html(phone_color(num_id_phone));
  		phone_pic(num_id_phone,0,0);// номер строки с массива, размер мал или большой,  номер цвета

  		$('#calculator .list #phone_memory').html(phone_memory(num_id_phone,0,0));// номер строки с массива, размер мал или большой,  номер цвета
  		$('#calculator p#calc__price').html(phone_price(num_id_phone,0,0,0));// номер строки с массива, размер мал или большой,  номер цвета, нмоер памяти

  		$('#Modal-form_characteristis').find('table.table').html(characteristic[num_id_phone][0]);
	});


	$('#calculator').on('change', 'input[name=model]', function(e){
		num_model_phone = $(this).attr('id').replace('radiomodel-','');
		num_model_color = 0;
		num_model_size = 0;
		$('#calculator .list #phone_color').html(phone_color(num_id_phone));
  		phone_pic(num_id_phone,num_model_phone,0);// номер строки с массива, размер мал или большой,  номер цвета

  		$('#calculator .list #phone_memory').html(phone_memory(num_id_phone,num_model_phone,0));// номер строки с массива, размер мал или большой,  номер цвета
  		$('#calculator p#calc__price').html(phone_price(num_id_phone,num_model_phone,0,0));// номер строки с массива, размер мал или большой,  номер цвета, нмоер памяти
    	
  		$('#Modal-form_characteristis').find('table.table').html(characteristic[num_id_phone][num_model_phone]);
    });

	$('#calculator').on('change', 'input[name=color]', function(e){
		num_model_color = $(this).attr('id').replace('radiocolor-','');
		num_model_size = 0;

  		phone_pic(num_id_phone,num_model_phone,num_model_color);// номер строки с массива, размер мал или большой,  номер цвета

  		$('#calculator .list #phone_memory').html(phone_memory(num_id_phone,num_model_phone,num_model_color));// номер строки с массива, размер мал или большой,  номер цвета
  		$('#calculator p#calc__price').html(phone_price(num_id_phone,num_model_phone,num_model_color,0));// номер строки с массива, размер мал или большой,  номер цвета, нмоер памяти
    });

	$('#calculator').on('change', 'input[name=size]', function(e){
		num_model_size = $(this).attr('id').replace('radiosize-','');
  		$('#calculator p#calc__price').html(phone_price(num_id_phone,num_model_phone,num_model_color,num_model_size));// номер строки с массива, размер мал или большой,  номер цвета, нмоер памяти
    });




////////////////////////////////////////////////////////

	$("form").submit(function() {
		var formthis = this;
		var result = true;

		$(this).find('input[type=submit]').attr('disabled', 'disabled'); 

		var phone = $(this).find('input[name=phone]').val();
		$(this).find('[requireds]').each(function(){//проверка, что бы были заполнены поля
		  if($.trim($(this).val()) == '' || phone == 'Телефон' || phone == '+375 (__) ___-__-__')
		  {
		    $(this).parent().addClass('has-error');
		    $(formthis).find('input[type=submit]').removeAttr('disabled');
		    result = false;
		  }
		});

		if(!result){
			//$(formthis).find('.btn').val('Заполните все поля!');
			return 1;
		}
		//console.log($(this).serialize());

		$.ajax({
		  type: "POST",
		  url: "submit.php",
		  data: $(this).serialize(),
		  success: function(data) {
		    switch(data) {
		      case '1': 

				var target = $(formthis).find('input[name=target]').val();
				yaCounter40171310.reachGoal('targetAll');
				yaCounter40171310.reachGoal('target' + target);
				//ga('send', 'event','button','click','target' + target);\
				fbq('track', 'Lead'); 


		      	setTimeout(function(){ $('#Modal-form-thanks').modal('show'); }, 500);  
		      	$(formthis).find('input[type=submit]').removeAttr('disabled');
		      	
				$(formthis).find('input[type="text"]').each(function(){ $(this).val(""); $(this).find('.form-group').removeClass('has-error');  });
				$(formthis).find('input[type="tel"]').each(function(){ $(this).val(""); $(this).find('.form-group').removeClass('has-error'); });
		      	$(formthis).trigger("reset"); 
		      	$('#Modal-form').modal('hide');   
		      	$('#Modal-form_vk').modal('hide');   
		      	result = true; 
		      break;
		      case '2': 
		        $(formthis).find('.btn').val('Заполните все поля!'); result = false;
		      break;
		      case '3':  
		        $(formthis).find('.btn').val('Ошибка при отправке!'); result = false;
		      break;
		      default: 
		      alert(data);
		        $(formthis).find('.btn').val('Ошибка!'); result = false;
		      break;
		    }
		  },
		  error: function() {
		    alert('Ошибка');
		  }
		});

		return result;
	});
	

});
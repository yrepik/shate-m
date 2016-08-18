$(function() {

/////////////////////////
//опросы////////////////

$('.pools-newPools_item button').click(function(){[
	$('.generalPopUp-pools').fadeIn(200)
]})
//конец опросы////


	//карусель для помощи по разделу
	$('.owl-helper').owlCarousel({
		loop: true,
		items: 1,
		nav: true,
	});



	//наценки//
	function generalPopUpFastExtraCharge(){//попАп быстрое добавление наценки
		$('.generalPopUpFastExtraCharge').fadeIn(200)
	}
	$('.addFastExtraCharge').click(generalPopUpFastExtraCharge)

	function generalPopUpProductGroup(){//наценка товарной группы
		$('.generalPopUp-productGroup').fadeIn(200);
	}
	$('.addProductGroupextraCharge').click(generalPopUpProductGroup)

	function  generalPopUpProductGroupBrand(){//ПопАд добавить наценку на бренд
		$('.generalPopUp-productGroup_brand').fadeIn();
	}
	$('.addProductGroupextraChargeBrand').click(generalPopUpProductGroupBrand)


	$('.addDiaposonExtroCharge').click(function(){//попАп диапазон наценки
			$('.generalPopUp-extraCharge').fadeIn()
		});

	function editextraCharge(){//открытие окна изменения наценки
		$('.extraCharge-edite').fadeIn(200);
		$('.extraCharge-edite').find('.close').click(function(){
			$('.extraCharge-edite .window').animate({
				'bottom': '200vh'
			}, 300)
			$('.extraCharge-edite').delay(300).fadeOut(200);
			$('.extraCharge-edite .window').delay(200).animate({
				'bottom': ''
			}, 0)
		})
	}
	$('.editextraCharge').click(editextraCharge);
;
	function extraChargeDellRow(){//удаление наценки
		$(this).parents('.extraCharge-addSettings_tableRowProduct').slideUp(200)
	}
	$('.dellRow').click(extraChargeDellRow);

	function extraCharge(){//отображение типа наценки
		if($('.noExtraCharge').prop('checked')){
			$('.markupOnProduct, .markupOnGroupProducts').slideUp(200);
			$('.extraCharge-addSettings').hide(200)
		}
		else if($('.extraChargeOnProd').prop('checked')){
			$('.markupOnProduct').slideDown(200);
			$('.markupOnGroupProducts').slideUp(200);
			$('.extraCharge-addSettings').fadeIn()

		}else {
			$('.markupOnProduct').slideUp(200);
			$('.markupOnGroupProducts').slideDown(200);
			$('.extraCharge-addSettings').fadeIn()

		}
	}
	$('.noExtraCharge, .extraChargeOnProd, .extraChargeDiapason').click(extraCharge)
	//конец наценки//

	//уцененные товары//
	$('.image_wrap').magnificPopup({//попАп на странице уцененные товары
		delegate: '.cutePrice-images_zoom', // child items selector, by clicking on it popup will open
		type: 'image'
	});
	//конецуцененные товары//


	//результаты поиска//
function slideUpAllElementstable(){//
	$('.searchResultShowAllRow_anyDeliv').addClass('slideOn');
	$('.searchResultShowAllRow').addClass('slideOn');

	var row = $('.searchResult-aimed_analogs').children();
	row.not(':nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4), .searchResultShowAllRow').slideUp(0);


	var rowAnyDeliv = $('.searchResult-aimed_anyDeliv').children();
	rowAnyDeliv.not(':nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4), .searchResultShowAllRow_anyDeliv').slideUp(0);


	$('.searchResultShowAllRow_anyDeliv').click(function(){
			$(this).toggleClass('slideOn');
		if($(this).hasClass('slideOn')){
			$(this).children('[class*=triangle]').css('transform','rotate(0deg)');
			rowAnyDeliv.not(':nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4), .searchResultShowAllRow_anyDeliv').slideUp(300);
		}else{
			$(this).children('[class*=triangle]').css('transform','rotate(180deg)');
			rowAnyDeliv.slideDown();
		}
	})


	$('.searchResultShowAllRow').click(function(){
		$(this).toggleClass('slideOn');
		if($(this).hasClass('slideOn')){
			$(this).children('[class*=triangle]').css('transform','rotate(0deg)');
			row.not(':nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4), .searchResultShowAllRow').slideUp(300);
		}else{
			$(this).children('[class*=triangle]').css('transform','rotate(180deg)');
			row.slideDown();
		}
	})

}slideUpAllElementstable();

	function searchResultCheckboxPrice() { //показать цену покупки
		if ($('.managmentFilterlabelwrap_price input').is(':checked')) {
			$('.priceBuylWithNds').show();
			$('.priceSelllWithNds').css({
				'width':'',
			})
		} else {
			$('.priceBuylWithNds').hide()
			$('.priceSelllWithNds').css({
				'width':'100%',
			})
;		}
	}
	$('.managmentFilterlabelwrap_price').click(searchResultCheckboxPrice)

	function searchResultCheckbox() { //показать аналоги
		if ($('.managmentFilterlabelwrap_analogs input').is(':checked')) {
			$('.searchResult-aimed_analogs, .searchResult-aimed_anyDeliv').slideDown(200)
		} else {
			$('.searchResult-aimed_analogs, .searchResult-aimed_anyDeliv').slideUp(200)
		}
	}
	$('.managmentFilterlabelwrap_analogs').click(searchResultCheckbox)
		//конец результаты поиска//
		//////////////////////////

	$('.dashboardSettings').click(function() { //главная страница добавить/удалить элементы управления на блоки
		var $input = $('.dashboardSettings-input');
		if ($input.prop('checked')) {
			$('.arrows, .cross_close').show();
		} else {
			$('.arrows, .cross_close').hide();
		}
	})


	function treeAddToCart() { //имитация добавления товара в корзину
		var $vol = $(this).parents('.spinner').find('input').val();
		var cartCount = $('.top-quantity').text()
		var $vol2 = +$vol;
		var cartCount2 = +cartCount;
		var summ = $vol2 + cartCount2;
		$('.top-quantity').text(summ);
		$('.totall').html('(' + summ * 1000 + 'руб.)')
	}
	$('.tree-addToCart, .addToCart').click(treeAddToCart)


	function treeAddToCartImport() { //имитация добавления товара в корзину страница импорта
		var $vol = $(this).prev('.spinner').find('input').val();
		var cartCount = $('.top-quantity').text()
		var $vol2 = +$vol;
		var cartCount2 = +cartCount;
		var summ = $vol2 + cartCount2;
		$('.top-quantity').text(summ);
		$('.totall').html('(' + summ * 1000 + 'руб.)')
	}
	$('.addcart').click(treeAddToCartImport)


	//полет товара в корзину//
	$('.tree-addToCart, .addcart').on('click', function() {
		var t = $(this).parents('.tree-tabWrap_content-table, .table_search_goods_result'),
			e = t.clone(),
			b = $('.top-quantity'),
			bo = b.offset(),
			o = t.position(),
			po = t.parent().offset();

		e.css({
			top: o.top + 'px',
			left: o.left + 'px',
			position: 'absolute'
		});
		t.parent().append(e);

		e.animate({
				top: -po.top + bo.top + (b.height() - t.height()) / 8,
				left: -po.left + bo.left + (b.width() - t.width()) / 8,
				opacity: 0,
				height: 0,
				width: 100,
			},
			1000,
			function() {
				$(this).css({
					left: 0,
					top: 0,
					position: 'static'
				})
			});
		e.hide(0)

		$('.addcart').children().css('color','inherit');
		$(this).parents('.import-repeatRow').slideUp(200);



		$(this).parents('.tree-tabWrap_content-table').slideUp(200);
	});
	//конец полет товара в корзину//



	//поиск по ВИН//
	$('.parent-wrapper').magnificPopup({//попАп на странице VIN_05 от производителя
	  delegate: '.searchToVinCarsTree-images_zoom', // child items selector, by clicking on it popup will open
	  type: 'image'
	});


	$('.searchToVin1-query a').click(function() { //подставить содержимое в инпут
		var $text = $(this).text();
		$('.searchToVin1-searchfield input').val($text)
	})

	$(".searchToVinCars-tabs_wrapper .tab").click(function() {
		$(".searchToVinCars-tabs_wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	//корзина//
	$(".refreshBtn").on('click', function() { //кнопка обнавления баланса анимация переворота стрелки
		$(this).children().addClass('finReloadd');
		$(this).children().delay(2000);
	})

	function removeAnim() {
		$(this).children().removeClass('finReloadd');
	}
	$(".refreshBtn").on('mouseup', removeAnim)


	$(".cart-beznal_table").sortable({ //сортировка рядов таблиц безнал
		placeholder: 'cartPlaceholder',
		cursor: 'move',
		revert: 'true',
		delay: '200',
		connectWith: '.connect',
		helper: function(event, element) {
			return element.clone().appendTo("body");
		},
		start: function() {
			$('.cart-tableRow').css('borderColor', '#f1f1f1')
			$('.cart-nalTable').css('backgroundColor', '#edfaff');
		},
		stop: function() {
			$('.cart-tableRow').css('borderColor', '')
			$('.cart-nalTable').css('backgroundColor', '')
		}
	})

	$(".cart-nal_table").sortable({ //сортировка рядов таблиц нал
		placeholder: 'cartPlaceholder',
		cursor: 'move',
		revert: 'true',
		delay: '200',
		connectWith: '.connect',
		helper: function(event, element) {
			return element.clone().appendTo("body");
		},
		start: function() {
			$('.cart-tableRow').css('borderColor', '#f1f1f1')
			$('.cart-beznal_lightbleu').css('backgroundColor', '#edfaff')
		},
		stop: function() {
			$('.cart-tableRow').css('borderColor', '')
			$('.cart-beznal_lightbleu').css('backgroundColor', '')
		}
	})


	function cartDellMarkNall() { //удалить выделленные в поле наличного расчета
		var $input = $('.cart-nal_table').find('.cart-beznal_brand').find('input:checked');
		$input.parents('.cart-tableRow').slideUp(200)
	}
	$('.cart-dellMarkNall').click(cartDellMarkNall)

	function cartDellAllNal() { //снять выделение с чекбоксов в поле наличного расчета
		var $input = $('.cart-nal_table').find('.cart-beznal_brand').find('input');
		$input.removeAttr('checked');
		$input.next().css('backgroundColor', '')
	}
	$('.cart-dellAllNall').click(cartDellAllNal)

	function сartMarkAllNall() { //выбрать все товары в поле наличного расчета
		var $input = $('.cart-nal_table').find('.cart-beznal_brand').find('input');
		$input.attr('checked', 'checked');
		$input.next().css('backgroundColor', '#50b74e')
	}
	$('.cart-MarkAllNall').click(сartMarkAllNall)

	function cartdellAllMarcked() { //снять выделение со всех чекбоксов в таблице безнала
		var $input = $('.cart-beznal_table').find('.cart-beznal_brand').find('input');
		$input.removeAttr('checked');
		$input.next().css('backgroundColor', '')
	}
	$('.cart-dellAll').click(cartdellAllMarcked);

	function cartMarkAll() { //выбрать все товары в поле безнала
		var $input = $('.cart-beznal_table').find('.cart-beznal_brand').find('input');
		$input.attr('checked', 'checked');
		$input.next().css('backgroundColor', '#7cc97a')
	}
	$('.cart-MarkAll').click(cartMarkAll)

	function cartdellMark() { //удалить выбраныые ряды таблицы в поле безнала
		var $input = $('.cart-beznal_table').find('input:checked');
		$input.parents('.cart-tableRow').slideUp(200)
	}
	$('.cart-dellMark').click(cartdellMark)

	function cartDellRow() { //удалить ряд таблицы
		$(this).parents('.cart-tableRow, .cart-rowTableNal').slideUp(200)
	}
	$('.cart-dellRow').click(cartDellRow)

	function cartAvailableDeliveryColored() { //окраска ряда таблицы в соответствии со складом
		var z = $('.cart-availableDeliveryRow').find('input');
		if (z.prop('checked')) {

		} else {
			z.parents('.cart-availableDeliveryRow').css('backgroundColor', '')
		}
		$(this).find('input').parents('.cart-availableDeliveryRow').css('backgroundColor', '#dbffda')
	}
	$('.cart-availableDeliveryRow').find('label').click(cartAvailableDeliveryColored)

	$("#inline-datepicker").datepicker({}); //календарь

	function cartMouseoverCheckbox() { //ховер эффект
		$(this).parents('.cartForm').find('.overlay').css('backgroundColor', '#3bc1f3')
	}
	$('.cartRowCheckbox').mouseover(cartMouseoverCheckbox);

	function cartMouseoutCheckbox() { //отмена ховер эффекта
		if ($(this).prop('checked')) {} else {
			$(this).parents('.cartForm').find('.overlay').css('backgroundColor', '')
		}
	}
	$('.cartRowCheckbox').mouseout(cartMouseoutCheckbox);

	function cartRowCheckbox() { //стилизация чекбоксов в таблице c синим цветом
		if ($(this).prop('checked')) {
			var x = $(this).parents('.cartForm').find('.inner').children().css('backgroundColor', '#50b74e')
			$(this).parents('.cartForm').find('.overlay').css('backgroundColor', '#3bc1f3')
		} else {
			$(this).parents('.cartForm').find('.inner').children().css('backgroundColor', '#fff')
			$(this).parents('.cartForm').find('.overlay').css('backgroundColor', '')
		}
	}
	$('.cartRowCheckbox').click(cartRowCheckbox);

	function counrUp() { //увеличение количества товара биндим кнопки в поле
		var $prev = $(this).parents('.wrap').find('.cart-quantity');
		$prev.val(parseInt($prev.val(), 10) + 1);
	}
	$('.counrUp').click(counrUp)

	function countDown() { //уменьшение количества товара
		var $prev = $(this).parents('.wrap').find('.cart-quantity');
		$prev.val(parseInt($prev.val(), 10) - 1);
	}
	$('.counrDown').click(countDown)


	function cartCheckBox() { //стилизация checkBox в корзине
		if ($(this).prop('checked')) {
			$(this).next().css('backgroundColor', '#50b74e')
		} else {
			$(this).next().css('backgroundColor', '#fff')
		}
	}
	$('.cart-checkbox').children('input').click(cartCheckBox)
		//конец корзина//



	//управление остатками//
	function dellRestManagment(){//удалить настроенный экспорт
		$('.dellRestManagment').removeClass('forDell')
		$(this).addClass('forDell');
		$('.generalPopUp-rest_dell').fadeIn(200)
	}
	$('.dellRestManagment').click(dellRestManagment)
	$('.dellexport').click(function(){
		$('.forDell').parents('.managment-rest_exports-table-row').slideUp(200)
	})

	function orderedRestToEmail(){
		if($(this).hasClass('nonActive')){

		}else{
			$('.generalPopUp-rest_orderred').fadeIn(200)
		}
	}
	$('.orderedRestToEmail').click(orderedRestToEmail)


	function addRestOptions(){//попАп настроить экспорт остатков
		$('.generalPopUp-rest_diapason').fadeIn(200)
	}
	$('.addRestOptions').click(addRestOptions)


	function restCheckBoxMouseOut() {
		if ($(this).prop('checked')) {} else {
			$(this).next().css('borderColor', '');
		}
	}
	$('.managment-rest_warehouse-select').find('input').mouseout(restCheckBoxMouseOut);


	function restCheckBoxHover() {
		$(this).next().css('borderColor', 'gray');
	}
	$('.managment-rest_warehouse-select').find('input').mouseover(restCheckBoxHover);

	function restCheckBox() { //rest стилизация checkbox
		if ($(this).prop('checked')) {
			$(this).next().css({
				'backgroundColor': '#50b74e',
				'borderColor': '#50b74e'
			});
		} else {
			$(this).next().css('backgroundColor', '#fff');
		}
	}
	$('.managment-rest_warehouse-select').find('input').click(restCheckBox);
	//конец управление остатками//


	///скрипты страницы c инфой о пользователе/////
	function userinfoCheckBox() { //стилизация checkbox
		$('#working1, #working2').prev().children().css('backgroundColor', '#fff')
		$(this).prev().children().css('backgroundColor', '#50b74e')

	}
	$('#working1, #working2').click(userinfoCheckBox)
		///конец страницы c инфой о пользователе/////


	//hamburger
	var hamburger = $('#hamburger-icon');
	hamburger.click(function() {
		hamburger.toggleClass('active');
		return false;
	});





	///скрипты страницы финансов/////
	var dateFormat = "mm/dd/yy",
		from = $("#from")
		.datepicker({
			defaultDate: "+1w",
			changeMonth: true,
		})
		.on("change", function() {
			to.datepicker("option", "minDate", getDate(this));
		}),
		to = $("#to").datepicker({
			defaultDate: "+1w",
			changeMonth: true,
		})
		.on("change", function() {
			from.datepicker("option", "maxDate", getDate(this));
		});

	function getDate(element) {
		var date;
		try {
			date = $.datepicker.parseDate(dateFormat, element.value);
		} catch (error) {
			date = null;
		}

		return date;
	}


	function financesRemoveAnim() {
		$(this).children('i').removeClass('finReloadd');
	}
	$('.finances').find('[class*=fa-refresh]').parent().on('mouseup', financesRemoveAnim)

	function financesRefreshBtn() {
		$(this).children('i').addClass('finReloadd').delay(2000);
		$(this).delay(2000);
	}
	$('.finances').find('[class*=fa-refresh]').parent().click(financesRefreshBtn)
		///Конец скриптов страницы финансов/////


	function balanceToolTip() { //отображение тултипа
		$(this).parents('.top-balance').find('.balance-tooltip').fadeIn()
	}

	function balanceToolTipHide() {
		$(this).parents('.top-balance').find('.balance-tooltip').fadeOut()
	}

	if ($(window).width() > 768) {
		$('.top-balance .totall').mouseover(balanceToolTip);
		$('.top-balance .totall').mouseout(balanceToolTipHide);
	}



	function checkBoxDashboard() { // chekbox на главной странице сайта
		$('.checkbox').parent().find('.over').children().css({
			'backgroundColor': '#fff'
		})
		var $over = $(this).parent().find('.over').children();
		$over.css({
			'backgroundColor': '#50b74e'
		})
	}

	$('.checkbox').click(checkBoxDashboard);


	///////////////////////////////////////////
	/////скрипты страницы поиска по дереву/////
	///////////////////////////////////////////
	$('.waitImport').click(function(){
		console.log('1212');
		$('.tree-addToWaitlist').fadeIn(300)
	})

	$('.tree-tabWrap_content-tableSpinner').find('.yellow').click(function() { //показать попАп Добавления позиции в лист ожидания
		$('.tree-addToWaitlist').fadeIn(300)
	})

	$('.tree-addToWaitlist_header-close, .treeCancell').click(function() { //закрыть попАп Добавления позиции в лист ожидания
		$('.tree-addToWaitlist-wrapper').animate({
			'top': '-100vh'
		}, 200)
		$('.tree-addToWaitlist').fadeOut(300);
		$('.tree-addToWaitlist-wrapper').delay(300).animate({
			'top': ''
		}, 0)
	})



	function treeTollLeftNav() { //изменение размера дерева каталога в зависимомти от разрешения
		if ($(window).width() > 768) {
			$('.tree-leftNav').height($('.tree-tabWrap_content').height() + 5);
		}
		if ($(window).width() < 768) {
			$('.tree-general').parent().find('ul').slideUp()
		}
	}
	$(window).on('load resize', treeTollLeftNav)


	function treeToggleClassGreenStatus() { //изменить цвет ячеек таблицы
		if ($(window).width() < 992 && $(window).width() >= 768) {
			var $price = $('.tree-tabWrap_content-table_green').find('.availability');
			$price.removeClass('tree-greenStatus');
		} else {
			var $price = $('.tree-tabWrap_content-table_green').find('.price, .availability');
			$price.addClass('tree-greenStatus');
		}

		if ($(window).width() < 768) {
			var $price = $('.tree-tabWrap_content-table_green').find('.price');
			$price.removeClass('tree-greenStatus');
		}
	}
	$(window).on('load resize', treeToggleClassGreenStatus)

	//переключение значений в chekbox таблицы импорта заказов//
	function plus() {
		var $prev = $(this).parents('.spinner').children('input');
		$prev.val(parseInt($prev.val(), 10) + 1);
	}

	function minus() {
		var $prev = $(this).parents('.spinner').children('input');
		$prev.val(parseInt($prev.val(), 10) - 1);
	}
	$('.tree-spinner .btn:first-of-type').on('click', plus);
	$('.tree-spinner .btn:last-of-type').on('click', minus);


	//	$('.tree-third, .tree-second').parent('ul').children('ul').slideUp();
	//	$('.tree-third, .tree-second').find('i').toggleClass('fa-minus').toggleClass('fa-plus')

	function treeMnuSlideup() { //свернуть все меню
		$(this).parent('ul').children('ul').slideToggle(200)
		$(this).find('i').toggleClass('fa-minus').toggleClass('fa-plus');
		$(this).toggleClass('tree-active')
	}
	$('.tree-general, .tree-second, .tree-third').click(treeMnuSlideup);



	function traeeCloseBrand() { //скрвть блок с отображением бренда
		$(this).parents('.brand').fadeOut(250)
	}
	$('.tree-filter_fildForBrand-close').click(traeeCloseBrand)

	$(".tree-wrappertabs__tabs .tab").click(function() { //табы
		$(".tree-wrappertabs__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tree-wrappertabs__tabitem").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	function closeAlertTree() { //скрытие блока служебных сообщений
		$(this).parents('.alert_zone-tree').slideUp(200)
	}
	$('.alert_zone-tree__colse').click(closeAlertTree);
	////////////////////конец//////////////////


	/////////////////////////////////////////////
	//скрипты для страницы возврата товара//////
	////////////////////////////////////////////
	$('.alert_returnes-close').click(function() { //закрыть блок информационных сообщений
		$(this).parents('.alert').slideUp(200)
	})

	function returnesAddGods() { //открыть окно поиска по артиклу
		$('.returnes-popUpgoods').fadeIn(400);
	}
	$('.returnesAddGoods').click(returnesAddGods);

	function returnesClosePopUpArticle() { //закрыть окно поиска  по артикулу
		$('.returnes-popUpgoods').fadeOut(400);
		$('.returnes-popUpgoods_wrap').animate({
			'top': '-100vh'
		}, 200);
		$('.returnes-popUpgoods_wrap').delay(400).animate({
			'top': ''
		});
	}
	$('.returnes-popUpgoods_close, .returnes-popUpgoods_cancell, .returnes-popUpgoods').click(returnesClosePopUpArticle)

	function onController() { //измение положения переключателя свернуть/развернуть все
		var x = $('.returnes-table').children('.row:visible').length;
		var z = $('.returnes-table').children('.row').length;
		var s = $('.returnes-table_single').length;
		if (x >= z - s - 4) {
			$('.wrapper_tabs-slideButton button:first-child').removeClass('active').next().addClass('active');
		} else {
			$('.wrapper_tabs-slideButton button:last-child').removeClass('active').prev().addClass('active');
		}
	}
	$('[class*=triangle]').click(onController);

	function returnesSlideDownTableRow() { //Развернуть все таблицы
		if ($(this).hasClass('active')) {

		} else {
			$(this).addClass('active').siblings().removeClass('active');
			$('.returnes-table_title-triangleR, .returnes-table_triangle').addClass('on')
			var $parent = $('.returnes-table');
			$parent.find('.row:nth-child(2), .row:nth-child(3)').slideDown(200)
			$parent.find('.returnes-table_title-triangleR').css({
				'transform': 'rotate(180deg)'
			});
			$parent.find('.returnes-table_triangle').css({
				'transform': 'rotate(180deg)'
			});

			//развернуть одиночные заказы
			$('.returnes-table_title-triangleL, .returnes-table_title-triangle').addClass('on')
			$parentSingle = $('.returnes-table_single');
			$parentSingle.animate({
				'height': '117px'
			}, 100);
			$parentSingle.children().animate({
				'height': '100px'
			}, 100);

			$parentSingle.children('.returnes-table_single-warehouse').children().filter('.returnes-table_title').children('span:last-child').show();
			$parentSingle.find('.returnes-table_content').find('.right').show();

			$parentSingle.find('.returnes-table_title-triangleL').css({
				'transform': 'rotate(180deg)'
			});
			$parentSingle.find('.returnes-table_title-triangle').css({
				'transform': 'rotate(180deg)'
			});
			$parentSingle.find('.returnes-table_content > .left > div').show()

			$parentSingle.find('.returnes-table_single-warehouse').removeClass('col-xs-6 col-sm-2 col-md-3 col-lg-6').addClass('col-xs-12 col-sm-3 col-md-3 col-lg-2');
			$parentSingle.find('.returnes-table_single-status').removeClass('col-sm-2 col-md-2 col-lg-1').addClass('col-sm-1 col-md-1 col-lg-1');
			$parentSingle.find('.returnes-table_single-summ').removeClass('col-sm-4 col-md-3 col-lg-2').addClass('col-sm-2 col-md-2 col-lg-2');


			$parentSingle.find('.plr0:nth-child(2), .plr0:nth-child(3) , .plr0:nth-child(4),  .plr0:nth-child(6)').show()
			$parentSingle.find('.plr0:nth-child(5)').removeClass('col-sm-2 col-md-2 col-lg-2').addClass('hidden-sm hidden-md col-lg-1');
			$parentSingle.find('.returnes-table_content').css({
				'height': '100px'
			}).children('i').css({
				'float': '',
				'position': '',
				'top': '',
				'right': ''
			});
			$parentSingle.find('.docs').show();
			$parentSingle.find('.returnes-table_content .left').css({
				'width': '50%'
			});
			$parentSingle.find('.returnes-table_content-summ a').css({
				'position': 'relative',
				'float': 'right',
				'top': '',
				'fontSize': ''
			})
		}
	}
	$('.wrapper_tabs-slideButton button:last-child').click(returnesSlideDownTableRow)

	function returnesSlideUpTableRow() { //свернуть все ряды таблицы
		if ($(this).hasClass('active')) {

		} else {
			$(this).addClass('active').siblings().removeClass('active');
			$('.returnes-table_title-triangleR, .returnes-table_triangle').removeClass('on');
			var $parent = $('.returnes-table');
			$parent.find('.row:nth-child(2), .row:nth-child(3)').slideUp(200)
			$parent.find('.returnes-table_title-triangleR').css({
				'transform': 'rotate(0deg)'
			});
			$parent.find('.returnes-table_triangle').css({
				'transform': 'rotate(0deg)'
			});

			//свернуть все одиночные заказы
			$('.returnes-table_title-triangleL, .returnes-table_title-triangle').removeClass('on')
			$parentSingle = $('.returnes-table_single');
			$parentSingle.animate({
				'height': '60px'
			}, 100);
			$parentSingle.children().animate({
				'height': '60px'
			}, 100);

			$parentSingle.children('.returnes-table_single-warehouse').children().filter('.returnes-table_title').children('span:last-child').hide();
			$parentSingle.find('.returnes-table_content').find('.right').hide();

			$parentSingle.find('.returnes-table_title-triangleL').css({
				'transform': 'rotate(0deg)'
			});
			$parentSingle.find('.returnes-table_title-triangle').css({
				'transform': 'rotate(0deg)'
			});
			$parentSingle.find('.returnes-table_content > .left > div').hide()

			$parentSingle.find('.returnes-table_single-warehouse').removeClass('col-xs-12 col-sm-3 col-md-3 col-lg-2').addClass('col-xs-6 col-sm-2 col-md-3 col-lg-6');
			$parentSingle.find('.returnes-table_single-status').removeClass('col-sm-1 col-md-1 col-lg-1').addClass('col-sm-2 col-md-2 col-lg-1');
			$parentSingle.find('.returnes-table_single-summ').removeClass('col-sm-2 col-md-2 col-lg-2').addClass('col-sm-4 col-md-3 col-lg-2');

			$parentSingle.find('.plr0:nth-child(2), .plr0:nth-child(3) , .plr0:nth-child(4),  .plr0:nth-child(6)').hide()
			$parentSingle.find('.plr0:nth-child(5)').removeClass('hidden-sm hidden-md col-lg-1').addClass('col-sm-2 col-md-2 col-lg-2');
			$parentSingle.find('.returnes-table_content').css({
				'height': '43px'
			}).children('i').css({
				'float': 'right',
				'position': 'absolute',
				'top': '25px',
				'right': '10px'
			});
			$parentSingle.find('.returnes-table_content .left').css({
				'width': '100%'
			});
			$parentSingle.find('.docs').hide();
			$parentSingle.find('.returnes-table_content-summ a').css({
				'position': 'absolute',
				'right': '15px',
				'top': '30%',
				'fontSize': '16px'
			})
		}

	}
	$('.wrapper_tabs-slideButton button:first-child').click(returnesSlideUpTableRow)



	function dataForReturnesTtn() {
		$('.data_for_returne_ttn').fadeIn(300)
	}
	$('.dataForReturnesTtn').click(dataForReturnesTtn)
		//закрытие popUp окна на странице возврата
	function popUpCloseInReturnesPage(e) {
		$(this).parent().animate({
			'bottom': '100vh',
		}, 200)
		$(this).parents('.data_for_returne_ttn').fadeOut(300);
		$(this).parent().animate({
			'bottom': '0vh',
		})
	}
	$('.closePopUpReturnesePage').click(popUpCloseInReturnesPage);
	$(document).mouseup(function(e) {
		var container = $(".data_for_returne_ttn");
		if (container.has(e.target).length === 0) {
			container.fadeOut(200);
		}
	});


	function orientationChange() { //изменение css свойств popUp окна на странице возврата товара при переориентации экрана
		var ww = $(window).width();
		var wh = $(window).height();
		var $form = $('.data_for_returne_ttn').children('form');
		if (ww > wh && ww < 768) {
			$form.css({
				'height': 'auto',
				'overflowY': 'scroll'
			})
		} else {
			$form.css({
				'height': '',
				'overflowY': ''
			})
		}
	}
	$(window).bind('load orientationchange resize', orientationChange);


	//удаление рядов таблицы
	function markAllRowTableReturnes() {
		$('.table_returnes input').attr('checked', 'checked');
		$('.table_returnes').find('.inner').css({
			'backgroundColor': '#50b74e'
		})
	}
	$('.markAllreturnes').on('click', markAllRowTableReturnes)


	function dellAllRowReturnes() { //удалить выбранные ряды таблицы
		$('.table_returnes').find('input:checked').parents('.table_returnes').slideUp(200);
	}
	$('.dellAllRow').on('click', dellAllRowReturnes)


	function restruct() {
		$parent = $('.returnes-table_title-triangle').parents('.returnes-table_single');
		$parent.animate({
			'height': '60px'
		}, 100);
		$parent.children().animate({
			'height': '60px'
		}, 100);

		$parent.children('.returnes-table_single-warehouse').children().filter('.returnes-table_title').children('span:last-child').hide();
		$parent.find('.returnes-table_content').find('.right').hide();

		$parent.find('.returnes-table_title-triangleL').css({
			'transform': 'rotate(0deg)'
		});
		$parent.find('.returnes-table_title-triangle').css({
			'transform': 'rotate(0deg)'
		});
		$parent.find('.returnes-table_content > .left > div').hide()

		$parent.find('.returnes-table_single-warehouse').removeClass('col-xs-12 col-sm-3 col-md-3 col-lg-2').addClass('col-xs-6 col-sm-2 col-md-3 col-lg-6');
		$parent.find('.returnes-table_single-status').removeClass('col-sm-1 col-md-1 col-lg-1').addClass('col-sm-2 col-md-2 col-lg-1');
		$parent.find('.returnes-table_single-summ').removeClass('col-sm-2 col-md-2 col-lg-2').addClass('col-sm-4 col-md-3 col-lg-2');

		$parent.find('.plr0:nth-child(2), .plr0:nth-child(3) , .plr0:nth-child(4),  .plr0:nth-child(6)').hide()
		$parent.find('.plr0:nth-child(5)').removeClass('hidden-sm hidden-md col-lg-1').addClass('col-sm-2 col-md-2 col-lg-2');
		$parent.find('.returnes-table_content').css({
			'height': '43px'
		}).children('i').css({
			'float': 'right',
			'position': 'absolute',
			'top': '25px',
			'right': '10px'
		});
		$parent.find('.returnes-table_content .left').css({
			'width': '100%'
		});
		$parent.find('.docs').hide();
		$parent.find('.returnes-table_content-summ a').css({
			'position': 'absolute',
			'right': '15px',
			'top': '30%',
			'fontSize': '16px'
		})
	};
	restruct()


	function returnesSlideUpSingleRow() { //перестроение таблицы при сворачивании (для одиночного заказа)

		$(this).toggleClass('on');
		$parent = $(this).parents('.returnes-table_single');
		$parent.animate({
			'height': '60px'
		}, 100);
		$parent.children().animate({
			'height': '60px'
		}, 100);

		$parent.children('.returnes-table_single-warehouse').children().filter('.returnes-table_title').children('span:last-child').hide();
		$parent.find('.returnes-table_content').find('.right').hide();

		$parent.find('.returnes-table_title-triangleL').css({
			'transform': 'rotate(0deg)'
		});
		$parent.find('.returnes-table_title-triangle').css({
			'transform': 'rotate(0deg)'
		});
		$parent.find('.returnes-table_content > .left > div').hide()

		$parent.find('.returnes-table_single-warehouse').removeClass('col-xs-12 col-sm-3 col-md-3 col-lg-2').addClass('col-xs-6 col-sm-2 col-md-3 col-lg-6');
		$parent.find('.returnes-table_single-status').removeClass('col-sm-1 col-md-1 col-lg-1').addClass('col-sm-2 col-md-2 col-lg-1');
		$parent.find('.returnes-table_single-summ').removeClass('col-sm-2 col-md-2 col-lg-2').addClass('col-sm-4 col-md-3 col-lg-2');

		$parent.find('.plr0:nth-child(2), .plr0:nth-child(3) , .plr0:nth-child(4),  .plr0:nth-child(6)').hide()
		$parent.find('.plr0:nth-child(5)').removeClass('hidden-sm hidden-md col-lg-1').addClass('col-sm-2 col-md-2 col-lg-2');
		$parent.find('.returnes-table_content').css({
			'height': '43px'
		}).children('i').css({
			'float': 'right',
			'position': 'absolute',
			'top': '25px',
			'right': '10px'
		});
		$parent.find('.returnes-table_content .left').css({
			'width': '100%'
		});
		$parent.find('.docs').hide();
		$parent.find('.returnes-table_content-summ a').css({
			'position': 'absolute',
			'right': '15px',
			'top': '30%',
			'fontSize': '16px'
		})
		if ($(this).hasClass('on')) {
			$parent.animate({
				'height': '117px'
			}, 100);
			$parent.children().animate({
				'height': '100px'
			}, 100);

			$parent.children('.returnes-table_single-warehouse').children().filter('.returnes-table_title').children('span:last-child').show();
			$parent.find('.returnes-table_content').find('.right').show();

			$parent.find('.returnes-table_title-triangleL').css({
				'transform': 'rotate(180deg)'
			});
			$parent.find('.returnes-table_title-triangle').css({
				'transform': 'rotate(180deg)'
			});
			$parent.find('.returnes-table_content > .left > div').show()

			$parent.find('.returnes-table_single-warehouse').removeClass('col-xs-6 col-sm-2 col-md-3 col-lg-6').addClass('col-xs-12 col-sm-3 col-md-3 col-lg-2');
			$parent.find('.returnes-table_single-status').removeClass('col-sm-2 col-md-2 col-lg-1').addClass('col-sm-1 col-md-1 col-lg-1');
			$parent.find('.returnes-table_single-summ').removeClass('col-sm-4 col-md-3 col-lg-2').addClass('col-sm-2 col-md-2 col-lg-2');


			$parent.find('.plr0:nth-child(2), .plr0:nth-child(3) , .plr0:nth-child(4),  .plr0:nth-child(6)').show()
			$parent.find('.plr0:nth-child(5)').removeClass('col-sm-2 col-md-2 col-lg-2').addClass('hidden-sm hidden-md col-lg-1');
			$parent.find('.returnes-table_content').css({
				'height': '100px'
			}).children('i').css({
				'float': '',
				'position': '',
				'top': '',
				'right': ''
			});
			$parent.find('.docs').show();
			$parent.find('.returnes-table_content .left').css({
				'width': '50%'
			});
			$parent.find('.returnes-table_content-summ a').css({
				'position': 'relative',
				'float': 'right',
				'top': '',
				'fontSize': ''
			})
		}


	}
	$('.returnes-table_single').find('[class*=returnes-table_title-triangle]').click(returnesSlideUpSingleRow);


	function returnesSlideUpRowTable() { //сворачивание таблиц с составным заказом
		var $parent = $(this).parents('.returnes-table');

		$parent.find('.row:nth-child(2), .row:nth-child(3)').slideDown(200)
		$parent.find('.returnes-table_title-triangleR').css({
			'transform': 'rotate(180deg)'
		});
		$parent.find('.returnes-table_triangle').css({
			'transform': 'rotate(180deg)'
		});

		if ($(this).hasClass('on')) {
			$parent.find('.row:nth-child(2), .row:nth-child(3)').slideUp(200)
			$parent.find('.returnes-table_title-triangleR').css({
				'transform': 'rotate(0deg)'
			});
			$parent.find('.returnes-table_triangle').css({
				'transform': 'rotate(0deg)'
			});
		}
		$parent.find('.returnes-table_triangle, .returnes-table_title-triangleR').toggleClass('on');
	}
	$('.returnes-table').find('.row:nth-child(2), .row:nth-child(3)').slideUp(200); //свернуть ряды таблицы при загрузке
	$('.returnes-table_title-triangleR, .returnes-table_triangle').click(returnesSlideUpRowTable)


	function waitListCloseAlertZone() {
		$(this).parents('.waitList-alert').slideUp(200)
	}
	$('.waitList-alert_close').click(waitListCloseAlertZone);

	function dellRowTable() { //удалить ряд таблицы листа ожидания
		$(this).parents('.table_returnes').slideUp(200);
	}
	$('button.trash').on('click', dellRowTable);

	$(".wrapper_tabs .tab").click(function() { //табы
		$(".wrapper_tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
		if ($('.wrapper_tabs .tab:last-child').hasClass('active')) {
			$('.wrapper_tabs-wrap').show();
			$('.wrapper_tabs-wrapRemote').hide()
		} else {
			$('.wrapper_tabs-wrap').hide();
			$('.wrapper_tabs-wrapRemote').show()
		}
	}).eq(0).addClass("active");

	function waitCancellAllMarck() { //снять выделение на странице листа ожидания
		$('input:checked').attr('checked', false);
		$('.checkbox').find('.inner').css({
			'backgroundColor': '#fff'
		})
	}
	$('.waitCancellAllMarck').click(waitCancellAllMarck);

	function checkBoxWaitList() { //чекбоксы
		if ($(this).prop('checked')) {
			var $ch = $(this).parent('.content').find('.inner');
			$ch.css({
				'backgroundColor': '#50b74e'
			})
		} else {
			var $ch = $(this).parent('.content').find('.inner');
			$ch.css({
				'backgroundColor': '#fff'
			})
		}
	}

	function checkBoxWaitListOver() { //hover mouseover для чекбоксов
		if ($(this).prop('checked')) {

		} else {
			var $ch = $(this).parent('.content').find('.inner');
			$ch.css({
				'border': '1px solid gray'
			})
		}
	}

	function checkBoxWaitListOut() { //hover mouseover для чекбоксов
		if ($(this).prop('checked')) {

		} else {
			var $ch = $(this).parent('.content').find('.inner');
			$ch.css({
				'border': '1px solid #fff'
			})
		}
	}
	$('.table_returnes .content input').on('click', checkBoxWaitList)
	$('.table_returnes .content input').on('mouseout', checkBoxWaitListOut)
	$('.table_returnes .content input').on('mouseover', checkBoxWaitListOver)
		//конец стилей страницы возвратов//
		///////////////////////////////////

	function dellRowWaitList() { //удалить товар на странице листа ожидания
		$(this).parents('.table_search_goods_result').find('.checkbox_brand').removeAttr('checked');
		$(this).parents('.table_search_goods_result').slideUp(200)
	}
	$('.dellRowWaitList').click(dellRowWaitList);

	//выбрать все товары на странице листа ожтдания
	function markAll() {
		var $input = $('.table_search_goods_result').find('input')
		$input.attr('checked', true);
		var $ch = $('.table_search_goods_result').find('.checkbox').children();
		$ch.css({
			'backgroundColor': '#50b74e'
		})
	}
	$('.markAll').on('click', markAll);

	//удалить выбранные товары на странице листа ожтдания
	function dellMark() {
		var $input = $('.table_search_goods_result').find('.title').find('input:checked');
		$input.parents('.table_search_goods_result').slideUp(200);
		$input.removeAttr('checked');
	}
	$('.dellMark').on('click', dellMark);


	function addToCartWaitList() { //добавить товары в корзину на странице листа ожидания
		var $count = $('.table_search_goods_result').find('.checkbox_brand:checked');
		$('.top-quantity').html($count.length);


		$count.parents('.table_search_goods_result').slideUp();
		$('.cart .totall').text('(' + $count.length * 1000 + 'Руб.)')
	}
	$('.addAllGoods').on('click', addToCartWaitList)


	function addAllImport() { //кнопка выбрать все на странице импорта товара
		var $imput = $('.checkbox_brand').attr('checked', true);
		$imput.prev().children().css({
			'backgroundColor': '#50b74e'
		})
	}
	$('.addAllImport').click(addAllImport)





	function importPopUpOpen() { //открыть попАп на странице ипорта заказов
		$('.orders-info_popUp').fadeIn(300);
	}
	$('.table_search_goods_result').find('[class*=info]').click(importPopUpOpen);



	function importREmoveMarckAll() { //кнопка снять выделения на странице импорта товара
		var $imput = $('.checkbox_brand').attr('checked', false);
		$imput.prev().children().css({
			'backgroundColor': ''
		})
	}
	$('.importREmoveMarckAll').click(importREmoveMarckAll);



	function importAbsent() { //кнопка отсутствующие товары ни странице импорта товаров
		$('.table_search_goods_result').fadeOut(100)
		$('.not_in_stock').find('.table_search_goods_result').fadeIn(10);
		$(this).addClass('importActiveBtn');
		$(this).siblings().removeClass('importActiveBtn');
	}
	$('.importAbsent').click(importAbsent)



	function importFound() { //кнопка найденные товары на странице импорта
		$('.table_search_goods_result').fadeIn(100)
		$(this).addClass('importActiveBtn')
		$(this).siblings().removeClass('importActiveBtn');
	}
	$('.importFound').click(importFound)






	$('.search_goods').find('.green_btn').on('click', function() { //добавить товар при клике по кнопке
			var $imput = $('.checkbox_brand:checked');
			$imput.parents('.table_search_goods_result').slideUp(200)
			$('.cart').find('.top-quantity').html($imput.length)
			$('.cart .totall').html('(' + $imput.length * 1000 + ' руб.)');
		})
		/////////////////////////////конец//////////////////////////////

	function addClassElemWaitList() {
		var width = $(window).width();
		if (width < 992) {
			/*---таблица на странице wait_list---*/
			$('.descr').find('.title').removeClass('light_title')
			$('.quantity_').find('.title').addClass('light_title')
		}
		if (width < 768) {
			$('.availability').find('.title').addClass('light_title');
			$('.descr').find('.title').addClass('light_title_');
		}
	}
	$(window).on('resize load', addClassElemWaitList);

	//удаление классов у таблицы	импотрта заказов при разрешении меньше 992px
	function addClassElem() {
		if ($(window).width() < 992) {
			/*---таблица на странице wait_list---*/
			$('.descr').find('.title').removeClass('light_title')
			$('.quantity_').find('.title').addClass('light_title')
				/*------------------------------------*/
			var $town = $('.town'),
				$price = $('.price'),
				$fold = $('.fold');
			$town.children('.title').addClass('light_title');
			$town.children('.content').children('.top_cell').addClass('light_top')
			$town.children('.content').children('.bottom_cell').addClass('light_bottom')

			$price.children('.title').addClass('light_title');
			$price.children('.content').children('.top_cell').addClass('light_top')
			$price.children('.content').children('.bottom_cell').addClass('light_bottom')

			$fold.children('.title').addClass('light_title');
			$fold.children('.content').children('.top_cell').addClass('light_top')
			$fold.children('.content').children('.bottom_cell').addClass('light_bottom')
		} else {
			var $town = $('.town'),
				$price = $('.price');
			$town.children('.title').removeClass('light_title');
			$town.children('.content').children('.top_cell').removeClass('light_top')
			$town.children('.content').children('.bottom_cell').removeClass('light_bottom')

			$price.children('.title').removeClass('light_title');
			$price.children('.content').children('.top_cell').removeClass('light_top')
			$price.children('.content').children('.bottom_cell').removeClass('light_bottom')

			//	$fold.children('.title').removeClass('light_title');
			//	$fold.children('.content').children('.top_cell').removeClass('light_top')
			//	$fold.children('.content').children('.bottom_cell').removeClass('light_bottom')
		}
	}
	$(window).on('resize load', addClassElem)


	////////////////////////////////////////

	$('.orders-tableLg_triangle').parents('.orders-tableLg_connected').find('.orders-tableLg_connected-regular').slideUp();

	function ordersSlideUpLgTable() {
		$(this).toggleClass('on');
		if ($(this).hasClass('on')) {
			$(this).parents('.orders-tableLg_connected').find('.orders-tableLg_connected-regular').slideDown();
			$(this).css({
				'transform': 'rotate(180deg)'
			});
		} else {
			$(this).parents('.orders-tableLg_connected').find('.orders-tableLg_connected-regular').slideUp();
			$(this).css({
				'transform': 'rotate(0deg)'
			});
		}
	}
	$('.orders-tableLg_triangle').click(ordersSlideUpLgTable)


	//свернуть/развернуть таблицы в попАп окне на странице заказов
	$('.second-lavel, .third').slideUp(); //свернуть все таблицы

	$('.second-lavel i').click(function() {
		var x = $(this).parent().children('.third');
		x.slideToggle(200);
		$(this).toggleClass('rotateThis');

		if ($(this).hasClass('rotateThis')) {
			$(this).css('transform', 'rotate(0deg)')
		} else {
			$(this).css('transform', 'rotate(20deg)')
		}
	})

	$('.first-lavel li i').click(function() {
			$(this).parent().find('.second-lavel').slideToggle();
			$(this).toggleClass('rotate');
			if ($(this).hasClass('rotate')) {
				$(this).css('transform', 'rotate(0deg)')
			} else {
				$(this).css('transform', 'rotate(-90deg)')
			}
		})
		//конец свернуть/развернуть таблицы в попАп окне на странице заказов




	function ordersCancellMarckAll() { //отменить выделение на страниуе заказа
		$('.generalCheckBox, .orders-tableLg_checkbox').removeAttr('checked');
		$('.generalCheckBox, .orders-tableLg_checkbox').prev().children().css({
			'backgroundColor': '#fff'
		});
	}
	$('.ordersCancellMarckAll ').click(ordersCancellMarckAll)


	//переключение значений в chekbox таблицы импорта заказов//
	function plus() {
		var $prev = $(this).parents('.spinner').children('input');
		$prev.val(parseInt($prev.val(), 10) + 1);
	}

	function minus() {
		var $prev = $(this).parents('.spinner').children('input');
		$prev.val(parseInt($prev.val(), 10) - 1);
	}
	$('.spinner .btn:first-of-type').on('click', plus);
	$('.spinner .btn:last-of-type').on('click', minus);
	//////////////////////////////////////////////////

	//подставляем значения в форму поиска
	function searchField() {
		var $val = $(this).val();

		$('.drop_down_search_list').css({
			'display': 'block'
		});

		$('.searchfieldA').html('<b>' + $val + '<b>')
	}
	$('.serch_field').on('keyup', searchField);


	function searchFieldT() {//форма поиска поиск по дереву
		var $val = $(this).val();
		$('.drop_down_search_listTree').css({
			'display': 'block'
		});

		$('.searchfieldT').html('<b>' + $val + '<b>')
	}
	$('.tree-filter_searchField').on('keyup', searchFieldT);

	//скрывать выпадающее меню при клике в любой области//
	$(document).mouseup(function(e) {
		var container = $(".drop_down_search_list, .drop_down_search_listTree");
		if (container.has(e.target).length === 0) {
			container.slideUp(200);
		}
	});
	//////////////////////////////////////////
	//////////////////////////////////////////////////////

	//форма для выбора файла
	$('.file-input a').on('click', function() {
		$('.input-file-btn').click();
	});

	$('.input-file-btn').on('change', function() {
		var $val = $(this).val().replace('C:\\fakepath\\', '');
		$('.file-input span').html($val);
	});


	//стилизация checkBox
	function checkboxOrders() { //стилизация checkBox таблицы заказов товара
		if ($(this).prop('checked')) {
			var $ch = $(this).parent('.title').children('.checkbox').children();
			$ch.css({
				'backgroundColor': '#50b74e'
			})
		} else {
			var $ch = $(this).parent('.title').children('.checkbox').children();
			$ch.css({
				'backgroundColor': '#fff'
			})
		}
	}

	function checkboxBrand() { //стилизация checkBox таблицы поиска товаров
		if ($(this).prop('checked')) {
			var $ch = $(this).parent('.title').children('.checkbox').children();
			$ch.css({
				'backgroundColor': '#50b74e'
			})
		} else {
			var $ch = $(this).parent('.title').children('.checkbox').children();
			$ch.css({
				'backgroundColor': '#fff'
			})
		}
	}

	function checkboxBrandHover() { //стилизация checkBox таблицы поиска товаров при ховере
		var $ch = $(this).parent('.title').children('.checkbox').children();
		$ch.css({
			'border': '1px solid #666'
		})
	}

	function checkboxBrandOut() {
		var $ch = $(this).parent('.title').children('.checkbox').children();
		$ch.css({
			'border': 'none'
		})
	}

	function checkboxResultHover() { //стилизация checkBox таблицы поиска товаров при ховере
		if ($(this).prop('checked')) {} else {
			var $ch = $(this).parent().children('.checked_box');
			$ch.css({
				'backgroundColor': '#00aeef'
			});
		}
	}

	function checkboxResultOut() {
		if ($(this).prop('checked')) {} else {
			var $ch = $(this).parent().children('.checked_box');
			$ch.css({
				'backgroundColor': ''
			});
		}
	}

	$('.checkbox_result').on('mouseover', checkboxResultHover);
	$('.checkbox_result').on('mouseout', checkboxResultOut);
	$('.checkbox_brand').on('mouseover', checkboxBrandHover);
	$('.checkbox_brand').on('mouseout', checkboxBrandOut);


	function checkboxResult() {
		if ($(this).prop('checked')) {
			var $ch = $(this).parent().children('.checked_box');
			$ch.css({
				'backgroundColor': '#00aeef'
			});
			$ch.children('.inner').children().css({
				'backgroundColor': '#50b74e'
			})
		} else {
			var $ch = $(this).parent().children('.checked_box');
			$ch.css({
				'backgroundColor': '#cfcfcf'
			});
			$ch.children('.inner').children().css({
				'backgroundColor': '#fff'
			})
		}
	}
	$('.checkbox_brand').on('click', checkboxBrand);
	$('.checkbox_result').on('click', checkboxResult);
	$('.generalCheckBox').on('click', checkboxOrders)

	//////////////////////////////////////////
	//chekbox измененик статуса продукта
	function checkBox() {
		var $img = $(this).parents('.table_stock_selection').children().children().filter('img');
		if ($(this).prop('checked')) {
			var block = '<div class="status"><span>Активно</span></div>';
			$(this).parents('.table_stock_selection').children().filter('.tr_xs').addClass('active_status')
			var $p = $(this).parents('.table_stock_selection').children().filter('.past');
			$img.attr('src', 'img/v_dot_g.png')
			$p.append(block)
		} else {
			$(this).parents('.table_stock_selection').children().filter('.tr_xs').removeClass('active_status')
			var $status = $(this).parents('.table_stock_selection').children().filter('.past').children().filter('.status');
			$status.remove()
			$img.attr('src', 'img/v_dot.png');
		}
	}
	$('.ios-switch').on('click', checkBox);
	////////////////////////////////////
	//появление зоны служебных сообщений при загрузке

	//закрытие окна с информационными сообщениями
	function alertClose() {
		var $a = $(this).parent().parent().slideUp(200);
	}
	$('.cross_alert').on('click', alertClose)

	//анимация стрелки при перетягивании блока на главной странице
	function arrMouseDown() {
		$(this).children().css({
			'color': 'gray',
			'cursor': 'move'
		})
	}

	function arrMouseUp() {
		var $i = $(this).children('.arrows').children();
		$i.css({
			'color': ''
		})
	}
	$('.arrows').on('mousedown', arrMouseDown);
	$('.wrap_item_block, .large_block, .content__item').on('mouseup', arrMouseUp);

	//закрытие popUp окна
	$('.wrap_cross').on('click', function() {
		$(this).each(function() {
			$(this).parent().parent().hide();
		});
	})

	$(document).mouseup(function(e) {
		var container = $(".addComent, .popUp");
		if (container.has(e.target).length === 0) {
			container.hide();
		}
	});
	//////////////////////////////////////////


	//добавим поп-ап к ссылкам на коментарий
	$('.comments_table, .inner_wrap a, .orders_container .comments_table_light .inner_wrap a').on('click', function() {
		$(this).each(function() {
			$('.popUp').show();
			$('.popUp').children().show();
		})
	})

	$('.add_coment_btn, .addComentReturnes').on('click', function() {
			$(this).each(function() {
				$('.addComent').show();
				$('.addComent').children().show();
			})
		})
		//////////////////////////////

	// переворот стреки
	$(".top-balance_update").on('click', function() {
		var $alertZone = $('.alert');
		$alertZone.slideDown(200);
		$alertZone.delay(3000).slideUp(200)
		$(this).children().addClass('finReloadd');
		$(this).children().delay(2000);
		$('.top-balance .totall').css({
			'color': '#48b746'
		});
		$('.balance-tooltip_triangle').css({
			'borderBottomColor': 'green'
		})
		$('.balance-tooltip').css({
			'backgroundColor': 'rgba(90,190,88,.8)',
			'borderColor': 'green'
		}).children('span:first-child').text('Баланс актуален');
	})

	function removeAnim() {
		$(this).children().removeClass('finReloadd');
	}
	$(".top-balance_update").on('mouseup', removeAnim)
		//////////////////////////////////

	//выбор даты
	$(".datepicker").datepicker($.datepicker.regional["ru"]);
	$(".datepicker2").datepicker($.datepicker.regional["ru"]);
	////////////////////////////////////

	//стилизация чекбокс
	function radioFilter() { //на главной
		$('.datapicker_checkbox_wrap').css({
			'borderColor': ''
		}).find('input').removeAttr('checked');
		$('.datapicker_checkbox_wrap').children('.over').children().css({
			'backgroundColor': '#fff',
		});

		$(this).css({
			'borderColor': '#50b74e'
		}).find('input').attr('checked', 'checkrd');
		$(this).children('.over').children().css({
			'backgroundColor': '#50b74e',
		});

	}
	$('.datapicker_checkbox_wrap').on('click', radioFilter)



	function checkboxFilter() { //стилизация checkbox на странице импорта заказа
		var $allInner = $('.datapicker_checkbox_wrap input').parent().children('.over_import').children('.inner');
		$allInner.css({
			'backgroundColor': 'transparent'
		});
		$allInner.parents('.datapicker_checkbox_wrap').css({
			'borderColor': '#b2b2b2'
		})
		if ($(this).prop('checked')) {
			var $inner = $(this).parent().children('.over_import').children('.inner');
			$inner.css({
				'backgroundColor': '#50b74e'
			})
			$(this).parents('.datapicker_checkbox_wrap').css({
				'borderColor': '#50b74e'
			})
		}
	}

	$('.datapicker_checkbox_wrap input').on('click', checkboxFilter)
		////////////////////////////////////


	function markAllInputOrderList() { //выбрать все checkBox на странице cabinet_order_list
		$('.orders_container').find('.generalCheckBox, .orders-tableLg_checkbox').attr('checked', 'checked');
		$('.orders_container').find('.checkbox').children().css({
			'backgroundColor': '#50b74e'
		})
		$('.orders_container').find('.orders-tableLg_over').children().css({
			'backgroundColor': '#50b74e'
		})
	}
	$('#markAll').click(markAllInputOrderList)

	function OrderListmarckOneChekBox() { //выбор одного чекбокса на странице заказов
		if ($(this).prop('checked')) {
			$(this).prev().children().css({
				'backgroundColor': '#50b74e'
			})
		} else {
			$(this).prev().children().css({
				'backgroundColor': '#fff'
			})
		}
	}
	$('.orders-tableLg_checkbox').click(OrderListmarckOneChekBox);

	function dashBoardCloseSmallBlock() { //закрытие блоков dashboard
		$(this).parents('.dashboard_small, .wrap_item_block-toll, .large_connect').fadeOut(200);
	}
	$('.cross_close').click(dashBoardCloseSmallBlock)
		//////////////////////////////////////




	/////////////////////////////////////////////
	////////////перитаскивание блоков////////////
	$('.sort').sortable({ //на странице импорта заказов
		placeholder: 'placeholder_import',
		cursor: 'move',
		revert: 'true',
		opacity: 0.9,
		delay: 200,
	})

	function solveHight() {
		var toolsHeight = $('.tools').height();
		var markupHeight = $('.markup').height();
		$('.tools').css({
			'minHeight': markupHeight
		});
		$('.markup').css({
			'minHeight': toolsHeight
		});
	}
	$('.arrows').mouseover(solveHight);

	$('.sortable-helper').css({
		'top': '0 !important'
	});
	$('.tools, .markup').sortable({ //на главной транице
		placeholder: 'placeholder_index',
		cursor: 'move',
		dropOnEmpty: 'true',
		connectWith: '.connect',
		revert: 'true',
		opacity: 0.8,
		helper: function(event, element) {
			return element.clone().appendTo("body");
		},
		handle: '.arrows',
		refreshPositions: true,
		cursorAt: {
			top: 0
		},
		appendTo: '#right_side',
		delay: 200,
		stop: function() {
			$(this).parent().find('.arrows').children().css({
				'color': ''
			})
		}
	})

	$('.history_request, .sell_request').sortable({ //на главной транице
		placeholder: 'placeholder_request',
		cursor: 'move',
		dropOnEmpty: 'true',
		connectWith: '.large_connect',
		revert: 'true',
		opacity: 0.8,
		helper: 'original',
		handle: '.arrows',
		cursorAt: {
			top: 0
		},
		appendTo: '#right_side',
		delay: 200,
		stop: function() {
			$(this).parent().find('.arrows').children().css({
				'color': ''
			})
		}
	})


	$(document).mouseup(function(e) { //скрывать выпадающее меню при клике в любой области//
		var container = $(".user_name");
		var user = $('.top-userCabinet');
		if (container.has(e.target).length === 0 && user.has(e.target).length === 0) {
			container.slideUp(200);
			$('.top-userCabinet').children('.triangle').addClass('triangle_rotate')
		}
	});
	//////////////////////////////////////////

	function slideDownMnu() { //выпадающее меню личного кабинета
		if ($(window).width() <= 768) {
			$('.top-userCabinet').on('click', function() {
				$('.togglemnu ul').slideToggle(200);
				$('.top-userCabinet .triangle').toggleClass('triangle_rotate')
			});
		} else {
			$('.top-userCabinet').on('click', function() {
				$('.user_name').slideToggle(200);
				$('.top-userCabinet .triangle').toggleClass('triangle_rotate');
			});
		}
	}
	$(window).on('load resize', slideDownMnu(), false);
	/////////////////////////////////////////////

	function slideUpFilterField() { //свернуть фильтры при клике на треугольник

		$('.datapicker-triangleRight, .datapicker-triangleLeft').toggleClass('slide')
		if ($(this).hasClass('slide')) {
			$('.datapicker').children().slice(3).fadeOut(200);
			$(this).parent().animate({
				'height': '0px',
				'paddingTop': '12px'
			}, 300);
			$('.datapicker_filter_wrap').hide()
			$('.datapicker-triangleRight, .datapicker-triangleLeft').css({
				'transform': 'rotate(180deg)'
			});
		} else {
			$(this).parent().animate({
				'height': '140px',
				'paddingTop': '17px'
			}, 70);

			if ($(window).width() <= 1200) {
				$(this).parent().animate({
					'height': '234px',
					'paddingTop': '17px'
				}, 70);
			}

			if ($(window).width() < 768) {
				$(this).parent().animate({
					'height': '427px',
					'paddingTop': '17px'
				}, 70);
			}


			$('.datapicker').children().slice(3).fadeIn(100);
			$('.datapicker_filter_wrap').show()
			$('.datapicker-triangleRight, .datapicker-triangleLeft').css({
				'transform': ''
			});
		}
	}
	$('.datapicker-triangleRight, .datapicker-triangleLeft').click(slideUpFilterField)

	function memoryBorderDate() { //перекрасить бордер цвет текста при выборе даты
		$(this).css({
			'borderColor': '#50b74e',
			'color': 'green'
		})
	}
	$('.datepicker, .datepicker2').change(memoryBorderDate)

	function memoryBorder() { //перекрасить бордер при выборе параметра
		$(this).css({
			'borderColor': '#50b74e',
		})
	}
	$('.hasDatepicker, .status, .orders, .type_person').change(memoryBorder)

	function resetMemory() { //вернуть значение бордер колор к стандартному
		var $arr = $('.datepicker.hasDatepicker, .datepicker2.hasDatepicker, .status, .orders, .type_person');
		$arr.css({
			'borderColor': '',
			'color': ''
		});
		$('.datapicker_checkbox_wrap').css({
			'borderColor': 'lightgray'
		});
		$('.datapicker_checkbox_wrap').find('input').attr('checked', false).next().children().css({
			'backgroundColor': '#fff'
		})
	}
	$('.btn_reset').click(resetMemory);


	$(".wrapper .tab").click(function() { //табы на странице заказов
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	function slideUpTable() { // сворачивание таблиц на странице заказов
		$('.regular_row').slideUp();
		if ($(window).width() >= 768 && $(window).width() < 1200) {
			function smSlideUp() {
				var $triangle = $('.row_for_table').find('[class*=triangle]');
				$triangle.toggleClass('on');
				if ($('[class*=triangle]').hasClass('on')) {
					$(this).parents('.number_order').find('[class*=triangle]').css({
						'transform': 'rotate(180deg)'
					})
				} else {
					$(this).parents('.number_order').find('[class*=triangle]').css({
						'transform': 'rotate(0deg)'
					})
				}
				$(this).parents('.row_for_table').find('.regular_row').slideToggle(200);
			}
			$('.row_for_table').find('[class*=triangle]').click(smSlideUp)

		} else if ($(window).width() < 768) {
			function sxSlideUp() {
				var $triangle = $('.table_for_xs').find('[class*=triangle]');
				$triangle.toggleClass('on');
				if ($('[class*=triangle]').hasClass('on')) {
					$(this).parents('.tottal_row').find('[class*=triangle]').css({
						'transform': 'rotate(180deg)'
					})
				} else {
					$(this).parents('.tottal_row').find('[class*=triangle]').css({
						'transform': 'rotate(0deg)'
					})
				}
				$(this).parents('.table_for_xs ').find('.regular_row').slideToggle(200);
			}
			$('.table_for_xs').find('[class*=triangle]').click(sxSlideUp);

		}
	};
	slideUpTable();



	function ordersPopUpClose() { //закрыть попАп окно на странице заказов
		$(this).parents('.orders-info_popUp').fadeOut(300);
		$(this).parents('.orders-info_popUp-inner').animate({
			'top': '-130vh'
		}, 200);
		$(this).parents('.orders-info_popUp-inner').delay(300).animate({
			'top': ''
		}, 0)
	}
	$('.orders-info_popUp-inner-close').click(ordersPopUpClose);

	$('.orders-tableLg_content-name').find('[class*=fa-info-circle]').click(function() { //открыть попАп окно на страние заказо
		$('.orders-info_popUp').fadeIn(300);
	})

	function ordersSlideDownAllTables() { //кнопки развернуть все таблицы на странице заказа
		$('.orders_container').find('[class*=table]').find('[class*=regular]').slideDown(200);
		$('.orders_list_changes_wrap').find('ul').children('li').removeClass('active');
		$(this).parent().addClass('active');
		$('.orders_container').find('[class*=triangle]').css({
			'transform': 'rotate(180deg)'
		});
	}

	function ordersSlideUpAllTables() { //кнопки свернуть все таблицы на странице заказа
		$('.orders_container').find('[class*=table]').find('[class*=regular]').slideUp(200);
		$('.orders_list_changes_wrap').find('ul').children('li').removeClass('active');
		$(this).parent().addClass('active');
		$('.orders_container').find('[class*=triangle]').css({
			'transform': 'rotate(0deg)'
		});
	}
	$('.all_slide').click(ordersSlideDownAllTables);
	$('.none_slide').click(ordersSlideUpAllTables);


	function checkboxChecked() { //стилизация чекбокс на странице заказа при клике
		if ($(this).attr("checked") != 'checked') {
			$(this).attr('checked', 'checked')
		} else {
			$(this).attr('checked', false)
		}
	}
	$('.generalCheckBox').on('click', checkboxChecked);

	function assembly() { //отправить на сборку на странице cabinet_order_list
		var $input = $('.generalCheckBox:checked');
		var $inp = $('.orders-tableLg_checkbox:checked');
		$inp.parents('.orders-tableLg').find('.orders-tableLg_toCreate').show();

		$input.parents('.tottal_row').find('.top_position').show();
		$input.parents('.table_for_xs, .row_for_table').find('.to-crate').show();
	}
	$('#assembly').click(assembly)
		//////////////////////////////////////////


	$(window).on('resize', function() {
		// подмена картинки при ресайзе//
		if ($('#hamburger-icon').hasClass('flag')) {
			$('.descktop').attr('src', 'img/moblogo.png').css({
				'width': 'auto'
			});
		} else {
			$('.descktop').attr('src', 'img/logo.png').css({
				'width': 'auto'
			});
		};
	})



	function mobMnu() {
		$(window).resize(function() {
			$('.hidemenuR').removeAttr('style') //сброс стилей
			if ($(window).width() < 768) { //подмена лого
				$('.mob_logo img').attr('src', 'img/logo.png');
			} else if ($(window).width() >= 768 && $(window).width() <= 1400) {
				$('.mob_logo img').attr('src', 'img/moblogo.png');
			} else {
				$('.mob_logo img').attr('src', 'img/logo.png');
			}

		})
		if ($(window).width() < 768) {
			$('.mob_logo img').attr('src', 'img/logo.png');

			$('#hamburger-icon').click(function() {
				$(this).toggleClass('flag');
				if ($(this).hasClass('flag')) {
					$('.hidemenuR').animate({
						left: '215px'
					}, 400)
				} else {
					$('.hidemenuR').animate({
						left: ''
					}, 400)
				}
			})
		} else if ($(window).width() >= 768 && $(window).width() <= 1400) {
			$('.mob_logo img').attr('src', 'img/moblogo.png');

			$('#hamburger-icon').click(function() {
				$(this).toggleClass('flag');
				if ($(this).hasClass('flag')) {
					$('.mob_logo img').attr('src', 'img/logo.png');
					$('.hidemenuR').animate({
						left: '215px'
					}, 400);
				} else {
					$('.hidemenuR').animate({
						left: '48px'
					}, 400);
					$('.mob_logo img').attr('src', 'img/moblogo.png');
				}
			})
		} else if ($(window).width() > 1400) {
			$('.mob_logo img').attr('src', 'img/logo.png')

			$('#hamburger-icon').click(function() {
				$(this).toggleClass('flag');
				if ($(this).hasClass('flag')) {
					$('.mob_logo img').attr('src', 'img/moblogo.png'),
						$('.hidemenuR').animate({
							left: '48px',
							paddingRight: '55px'
						}, 400)
				} else {
					$('.mob_logo img').attr('src', 'img/logo.png')
					$('.hidemenuR').animate({
						left: '216px',
						paddingRight: '228px'
					}, 400)
				}
			})

		}
	}
	$(window).on('load', mobMnu);









/////////////////
//общие скрипты//
$('.tooltipImport').tooltip()//тултип

	$('.mob_mnu_left').find('li').click(function() {//переход по страницам
		$(this).addClass('active');
		$('.mob_mnu_left').find('li').removeClass('active')
	})




//скрипт попАп окна//
function popUpSelected(){
	if($(this).val() == 3){
		$('.generalPopUp-window-textarea').slideDown(200);
	}else{
		$('.generalPopUp-window-textarea').slideUp(200);
	}
}
$(".generalPopUp-window-select").click(popUpSelected);

function closemainpopup(){
	$(this).parents('.generalPopUp-window').animate({
		'bottom': '220vh'
	}, 300);
	$(this).parents('.generalPopUp').fadeOut(200);
	$(this).parents('.generalPopUp-window').animate({
		'bottom': ''
	}, 0);
}
$('.generalPopUp-window_close, .gray_btn, .closePopUp').click(closemainpopup)

function generalPopUpAddField(){//добавить новое поле в попап окне на странице результатов поиска
	var clone = $(this).parents('.generalPopUp-window-cloneElement').clone();
//	clone.find('.generalPopUp-addField').remove();
	clone.find('textarea').val(' ')
	clone.appendTo('.generalPopUp-window-reportForm');
	$('.generalPopUp-addField').click(generalPopUpAddField)
}
$('.generalPopUp-addField').click(generalPopUpAddField)

$('.findBug').click(function(){
	$('.generalPopUp-searchresult').fadeIn(100);
})


$('.overlaypreloader').hide()//убрать прелоадер













});

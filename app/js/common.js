$(function() {


    function balanceToolTip(){//отображение тултипа
        $(this).parents('.balance').children('.balance-tooltip').fadeIn()
    }

    function balanceToolTipHide(){
        $(this).parents('.balance').children('.balance-tooltip').fadeOut()
    }

    if($(window).width()>768){
        $('.totall').mouseover(balanceToolTip);
        $('.totall').mouseout(balanceToolTipHide);
    }




    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: ''
    });


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
    $('.tree-tabWrap_content-tableSpinner').find('.yellow').click(function(){//показать попАп Добавления позиции в лист ожидания
        $('.tree-addToWaitlist').fadeIn(300)
    })

    $('.tree-addToWaitlist_header-close, .treeCancell').click(function(){//закрыть попАп Добавления позиции в лист ожидания
        $('.tree-addToWaitlist-wrapper').animate({'top':'-100vh'},200)
        $('.tree-addToWaitlist').fadeOut(300);
        $('.tree-addToWaitlist-wrapper').delay(300).animate({'top':''},0)
    })

    function treeTollLeftNav(){ //изменение размера дерева каталога в зависимомти от разрешения
        if($(window).width()>768){
            $('.tree-leftNav').height($('.tree-tabWrap_content').height()+5);
        }
        if($(window).width()<768){
        $('.tree-general').parent().find('ul').slideUp()
        }
    }
    $(window).on('load resize', treeTollLeftNav)


    function treeToggleClassGreenStatus(){//изменить цвет ячеек таблицы
        if($(window).width() < 992&& $(window).width()>=768){
            var $price = $('.tree-tabWrap_content-table_green').find('.availability');
            $price.removeClass('tree-greenStatus');
        }
        else{
            var $price = $('.tree-tabWrap_content-table_green').find('.price, .availability');
            $price.addClass('tree-greenStatus');
        }

        if($(window).width() < 768){
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


    $('.tree-third, .tree-second').parent('ul').children('ul').slideUp();
    $('.tree-third, .tree-second').find('i').toggleClass('fa-minus').toggleClass('fa-plus')

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
    $('.alert_returnes-close').click(function(){//закрыть блок информационных сообщений
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


    function waitListCloseAlertZone(){
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

    function waitCancellAllMarck (){//снять выделение на странице листа ожидания
        console.log('222');
        $('input:checked').attr('checked', false);
        $('.checkbox').find('.inner').css({'backgroundColor':'#fff'})
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

    function dellRowWaitList(){//удалить товар на странице листа ожидания
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
        var $input = $('.table_search_goods_result').find('input:checked');
        $input.parents('.table_search_goods_result').slideUp(200);
        $input.removeAttr('checked');
    }
    $('.dellMark').on('click', dellMark);


    function addToCartWaitList() {//добавить товары в корзину на странице листа ожидания
        var $count = $('.table_search_goods_result').find('.checkbox_brand:checked');
        $('.quantity').html($count.length);


        $count.parents('.table_search_goods_result').slideUp();
        $('.cart .totall').text('('+$count.length*1000+'Руб.)')
    }
    $('.addAllGoods').on('click', addToCartWaitList)


    function addAllImport() {//кнопка выбрать все на странице импорта товара
        var $imput = $('.checkbox_brand').attr('checked', true);
        $imput.prev().children().css({
            'backgroundColor': '#50b74e'
        })
    }
    $('.addAllImport').click(addAllImport)


    function importREmoveMarckAll() {//кнопка снять выделения на странице импорта товара
        var $imput = $('.checkbox_brand').attr('checked', false);
        $imput.prev().children().css({
            'backgroundColor': ''
        })

    }
    $('.importREmoveMarckAll').click(importREmoveMarckAll);


    function importAbsent() {//кнопка отсутствующие товары ни странице импорта товаров
        $('.table_search_goods_result').fadeOut(100)
        $('.not_in_stock').find('.table_search_goods_result').fadeIn(10);
        $(this).addClass('importActiveBtn');
        $(this).siblings().removeClass('importActiveBtn');
    }
    $('.importAbsent').click(importAbsent)


    function importFound(){//кнопка найденные товары на странице импорта
        $(this).addClass('importActiveBtn');
        $(this).siblings().removeClass('importActiveBtn');
        $('.table_search_goods_result').fadeIn(100)
    }
    $('.importFound').click(importFound)


    $('.search_goods').find('.green_btn').on('click', function() { //добавить товар при клике по кнопке
        var $imput = $('.checkbox_brand:checked');
            $imput.parents('.table_search_goods_result').slideUp(200)
            $('.cart').find('.quantity').html($imput.length)
            $('.cart .totall').html('('+$imput.length*1000+' руб.)');
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

            $fold.children('.title').removeClass('light_title');
            $fold.children('.content').children('.top_cell').removeClass('light_top')
            $fold.children('.content').children('.bottom_cell').removeClass('light_bottom')
        }
    }
    $(window).on('resize load', addClassElem)


    ////////////////////////////////////////
    $('.orders-tableLg_triangle').parents('.orders-tableLg_connected').find('.orders-tableLg_connected-regular').slideUp();
    function ordersSlideUpLgTable(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $(this).parents('.orders-tableLg_connected').find('.orders-tableLg_connected-regular').slideDown();
            $(this).css({'transform':'rotate(180deg)'});
        }else{
            $(this).parents('.orders-tableLg_connected').find('.orders-tableLg_connected-regular').slideUp();
            $(this).css({'transform':'rotate(0deg)'});
        }
    }
    $('.orders-tableLg_triangle').click(ordersSlideUpLgTable)


    //свернуть/развернуть таблицы в попАп окне на странице заказов
    $('.second-lavel, .third').slideUp();//свернуть все таблицы

    $('.second-lavel i').click(function(){
     var x =  $(this).parent().children('.third');
     x.slideToggle(200);
     $(this).toggleClass('rotateThis');

     if($(this).hasClass('rotateThis')){
        $(this).css('transform', 'rotate(0deg)')
     }else{
        $(this).css('transform', 'rotate(20deg)')
     }
    })

    $('.first-lavel li i').click(function(){
        $(this).parent().find('.second-lavel').slideToggle();
        $(this).toggleClass('rotate');
        if($(this).hasClass('rotate')){
           $(this).css('transform', 'rotate(0deg)')
        }else{
           $(this).css('transform', 'rotate(-90deg)')
        }
    })
    //конец свернуть/развернуть таблицы в попАп окне на странице заказов




    function ordersCancellMarckAll (){//отменить выделение на страниуе заказа
      $('.generalCheckBox, .orders-tableLg_checkbox').removeAttr('checked');
      $('.generalCheckBox, .orders-tableLg_checkbox').prev().children().css({'backgroundColor':'#fff'});
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
        $('.drop_down_search_list ul li a').append($val)
    }
    $('.serch_field').on('keypress', searchField);

    //скрывать выпадающее меню при клике в любой области//
    $(document).mouseup(function(e) {
        var container = $(".drop_down_search_list");
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
            console.log($ch);
            $ch.css({
                'backgroundColor': '#00aeef'
            });
            $ch.children('.inner').children().css({
                'backgroundColor': '#50b74e'
            })
            console.log('2');
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
    $('.alert').slideDown(300)//появление зоны служебных сообщений при загрузке

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
    $('.comments_table .inner_wrap a, .orders_container .comments_table_light .inner_wrap a').on('click', function() {
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
    $(".update_balance").on('click', function() {
        $(this).addClass('reloadd');
        $(this).delay(2000);
        $('.balance .totall').css({'color':'#48b746'});
        $('.balance-tooltip_triangle').css({'borderBottomColor':'green'})
        $('.balance-tooltip').css({
            'backgroundColor':'rgba(90,190,88,.8)',
            'borderColor':'green'
        }).children('span:first-child').text('Баланс актуален');
    })

    function removeAnim() {
        $(this).removeClass('reloadd');
    }
    $(".update_balance").on('mouseup', removeAnim)
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


    function markAllInputOrderList() {//выбрать все checkBox на странице cabinet_order_list
        $('.orders_container').find('.generalCheckBox, .orders-tableLg_checkbox').attr('checked', 'checked');
        $('.orders_container').find('.checkbox').children().css({
            'backgroundColor': '#50b74e'
        })
        $('.orders_container').find('.orders-tableLg_over').children().css({
            'backgroundColor': '#50b74e'
        })
    }
    $('#markAll').click(markAllInputOrderList)

    function OrderListmarckOneChekBox(){//выбор одного чекбокса на странице заказов
        if($(this).prop('checked')){
            $(this).prev().children().css({'backgroundColor':'#50b74e'})
        }else{
            $(this).prev().children().css({'backgroundColor':'#fff'})
        }
    }
    $('.orders-tableLg_checkbox').click(OrderListmarckOneChekBox);

    function dashBoardCloseSmallBlock(){//закрытие блоков dashboard
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

    function solveHight(){
        var toolsHeight = $('.tools').height();
        var markupHeight = $('.markup').height();
        $('.tools').css({'minHeight': markupHeight });
        $('.markup').css({'minHeight': toolsHeight});
        console.log('2');
    }
    $('.arrows').mouseover(solveHight);

    $('.sortable-helper').css({'top':'0 !important'});
    $('.tools, .markup').sortable({ //на главной транице
        placeholder: 'placeholder_index',
        cursor: 'move',
        dropOnEmpty: 'true',
        connectWith: '.connect',
        revert: 'true',
        opacity: 0.8,
        helper: function(event, ui){
            var $clone =  $(ui).clone();
            $clone .css({'top':'0'});
            return $clone.get(0);
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


    $(document).mouseup(function(e) {//скрывать выпадающее меню при клике в любой области//
        var container = $(".user_name");
        var user = $('.user_accaunt');
        if (container.has(e.target).length === 0 && user.has(e.target).length === 0) {
            container.slideUp(200);
            $('.user_accaunt .triangle').addClass('triangle_rotate')
        }
    });
    //////////////////////////////////////////

    function slideDownMnu() {//выпадающее меню личного кабинета
        if ($(window).width() <= 768) {
            $('.user_accaunt').on('click', function() {
                $('.togglemnu ul').slideToggle(200);
                $('.user_accaunt .triangle').toggleClass('triangle_rotate')
            });
        } else {
            $('.user_accaunt').on('click', function() {
                $('.user_name').slideToggle(200);
                $('.user_accaunt .triangle').toggleClass('triangle_rotate');
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

            if($(window).width()<=1200){
                $(this).parent().animate({
                    'height': '234px',
                    'paddingTop': '17px'
                }, 70);
            }

            if($(window).width() < 768){
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
            'color':'green'
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
            'color':''
        });
        $('.datapicker_checkbox_wrap').css({'borderColor':'lightgray'});
        $('.datapicker_checkbox_wrap').find('input').attr('checked', false).next().children().css({'backgroundColor':'#fff'})
    }
    $('.btn_reset').click(resetMemory);


    $(".wrapper .tab").click(function() {//табы на странице заказов
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

    function slideUpTable() {// сворачивание таблиц на странице заказов
        $('.regular_row').slideUp();
        if ($(window).width() >= 768 && $(window).width() < 1200) {
            function smSlideUp(){
                var $triangle = $('.row_for_table').find('[class*=triangle]');
                $triangle.toggleClass('on');
                if($('[class*=triangle]').hasClass('on')){
                    $(this).parents('.number_order').find('[class*=triangle]').css({'transform':'rotate(180deg)'})
                }else{
                    $(this).parents('.number_order').find('[class*=triangle]').css({'transform':'rotate(0deg)'})
                }
                $(this).parents('.row_for_table').find('.regular_row').slideToggle(200);
            }
            $('.row_for_table').find('[class*=triangle]').click(smSlideUp)

        } else if ($(window).width() < 768) {
            function sxSlideUp(){
                var $triangle = $('.table_for_xs').find('[class*=triangle]');
                $triangle.toggleClass('on');
                if($('[class*=triangle]').hasClass('on')){
                    $(this).parents('.tottal_row').find('[class*=triangle]').css({'transform':'rotate(180deg)'})
                }else{
                    $(this).parents('.tottal_row').find('[class*=triangle]').css({'transform':'rotate(0deg)'})
                }
                $(this).parents('.table_for_xs ').find('.regular_row').slideToggle(200);
            }
            $('.table_for_xs').find('[class*=triangle]').click(sxSlideUp);

        }
    };
    slideUpTable();

    function ordersSlideDownAllTables(){//кнопки развернуть все таблицы на странице заказа
        $('.orders_container').find('[class*=table]').find('[class*=regular]').slideDown(200);
        $('.orders_list_changes_wrap').find('ul').children('li').removeClass('active');
        $(this).parent().addClass('active');
        $('.orders_container').find('[class*=triangle]').css({'transform':'rotate(180deg)'});
    }
    function ordersSlideUpAllTables(){//кнопки свернуть все таблицы на странице заказа
        $('.orders_container').find('[class*=table]').find('[class*=regular]').slideUp(200);
        $('.orders_list_changes_wrap').find('ul').children('li').removeClass('active');
        $(this).parent().addClass('active');
        $('.orders_container').find('[class*=triangle]').css({'transform':'rotate(0deg)'});
    }
    $('.all_slide').click(ordersSlideDownAllTables);
    $('.none_slide').click(ordersSlideUpAllTables);


    function checkboxChecked() {//стилизация чекбокс на странице заказа при клике
        if($(this).attr("checked") != 'checked'){
            $(this).attr('checked', 'checked')
        }else{
            $(this).attr('checked', false)
        }
    }
    $('.generalCheckBox').on('click', checkboxChecked);

    function assembly() {//отправить на сборку на странице cabinet_order_list
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
        if ($('.cross').hasClass('flag')) {
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
        if ($(window).width() <= 768) {
            $('.mob_logo img').attr('src', 'img/logo.png');
            $('.hidemenuR').css({
                'left': '0px',
                'paddingRight': '15px'
            })

            //скрывать	меню при клике в любой области//
            $(document).mouseup(function(e) {
                var container = $(".mob_mnu_left");
                var user = $('.cross');
                if (container.has(e.target).length === 0 && user.has(e.target).length === 0) {
                    TweenLite.to($('.hidemenuR'), .4, {
                        left: '0px'
                    })
                    $('.cross').removeClass('flag')
                }
            });
            //////////////////////////////////////////

            $('.cross').click(function() {
                $(this).toggleClass('flag');
                if ($(this).hasClass('flag')) {
                    TweenLite.to($('.hidemenuR'), .4, {
                        left: '215px'
                    })
                } else {
                    TweenLite.to($('.hidemenuR'), .4, {
                        left: '0px'
                    })
                }
            })
        } else if ($(window).width() >= 768 && $(window).width() <= 1400) {
            //скрывать	меню при клике в любой области//
            $(document).mouseup(function(e) {
                var container = $(".mob_mnu_left");
                var user = $('.cross');
                if (container.has(e.target).length === 0 && user.has(e.target).length === 0) {
                    TweenLite.to($('.hidemenuR'), .4, {
                        left: '48px'
                    })
                    $('.cross').removeClass('flag');
                    $('.mob_logo img').attr('src', 'img/moblogo.png')
                }
            });
            //////////////////////////////////////////
            $('.hidemenuR').css({
                'left': '48px',
                'paddingRight': '64px'
            })
            $('.cross').click(function() {
                $(this).toggleClass('flag');
                if ($(this).hasClass('flag')) {
                    $('.mob_logo img').attr('src', 'img/logo.png');
                    TweenLite.to($('.hidemenuR'), .4, {
                        left: '215px'
                    })
                } else {

                    TweenLite.to($('.hidemenuR'), .4, {
                        left: '48px',
                        onComplete: $('.mob_logo img').attr('src', 'img/moblogo.png'),
                    })
                }
            })
        } else if ($(window).width() > 1400) {
            $('.mob_logo img').attr('src', 'img/logo.png'),
                $('.hidemenuR').css({
                    'left': '216px',
                    'paddingRight': '228px'
                })
            $('.hidemenuR').css({
                'left': '216px'
            })
            $('.cross').click(function() {
                $(this).toggleClass('flag');
                if ($(this).hasClass('flag')) {
                    $('.mob_logo img').attr('src', 'img/moblogo.png'),
                        TweenLite.to($('.hidemenuR'), .4, {
                            left: '48px',
                            paddingRight: '55px'
                        })

                } else {
                    $('.mob_logo img').attr('src', 'img/logo.png')
                    TweenLite.to($('.hidemenuR'), .4, {
                        left: '216px',
                        paddingRight: '228px'
                    })
                }
            })

        }
    }
    $(window).on('resize load', mobMnu(), false);

    $('.mob_mnu_left').find('li').click(function() {
        $(this).addClass('active');
        $('.mob_mnu_left').find('li').removeClass('active')
    })



});

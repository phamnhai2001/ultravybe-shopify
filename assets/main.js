$(document).ready(function() {
    var easing = 'easeOutCubic';
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });
    //    slick slider main top

    var sliderTimer = 5000;
    var beforeEnd = 500;
    var $imageSlider = $('.image-slider');
    var $startNum = $('.start-num');
    // var $endNum = $('.end-num');
    $imageSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $startNum.text('0' + i);
        // $endNum.text(slick.slideCount);
    });
    $imageSlider.slick({
        autoplay: true,
        autoplaySpeed: sliderTimer,
        speed: 600,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '90px',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: false,
                slidesToShow: 1
            }
        }]
    });

    function progressBar() {
        $('.slider-progress').find('span').removeAttr('style');
        $('.slider-progress').find('span').removeClass('active');
        setTimeout(function() {
            $('.slider-progress').find('span').css('transition-duration', (sliderTimer / 1000) + 's').addClass('active');
        }, 100);
    }
    progressBar();
    $imageSlider.on('beforeChange', function(e, slick) {
        progressBar();
    });
    $imageSlider.on('afterChange', function(e, slick, nextSlide) {
        titleAnim(nextSlide);
    });
    // Title Animation JS
    function titleAnim(ele) {
        $imageSlider.find('.slick-current').find('h1').addClass('show');
        setTimeout(function() {
            $imageSlider.find('.slick-current').find('h1').removeClass('show');
        }, sliderTimer - beforeEnd);
    }
    titleAnim();

    $('.container_feature').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.image-slider-store').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('#carousel,#carousel02').owlCarousel({
        loop:true,
        dots: false,
        nav:true,
        items: 5,
        smartSpeed: 700
    });
    var _boxOpened = false;
    $('.box_select_sort').on('select2:opening', function (e) {
        var _self = $(this);
        if (!_boxOpened) {
            _boxOpened = true;
            e.preventDefault();
            setTimeout(function () {
                _self.select2('open');
                _boxOpened = false;
            }, 200);
        }
    });

    $('.box_select_sort').select2({
        minimumResultsForSearch: Infinity
    });
    var sortName = localStorage.getItem ('sortName') ? localStorage.getItem("sortName") : "人気順";

    $('.box_select_sort.box_select__list').select2({
        minimumResultsForSearch: Infinity,
        placeholder: sortName,
        dropdownParent: $('#box_check_option')
    });
    $('.box_select_sort.box_select__list_search').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "人気順",
        dropdownParent: $('#box_check_option_search')
    });
    $('.box_select_sort.box_select_cart').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "1",
        dropdownParent: $('#box_check_option')
    });
    $('.box_select_sort.box_select_feature_01').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "S",
        dropdownParent: $('#box_check_option')
    });

    $('.box_select_sort.box_select_feature_02').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "白",
        dropdownParent: $('#box_check_option')
    });

    $('.set_cart_buy .box_select_sort').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "サイズを選択してください",
        allowClear: true,
        dropdownParent: $('#box_check_option')
    });

    $('.box_select_create_address').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "お住まいの地域",
        dropdownParent: $('#box_check_option')
    });

    $('.box_select_edit_address').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "お住まいの地域",
        dropdownParent: $('#box_check_option_01')
    });
    $('.box_select_contact').select2({
        minimumResultsForSearch: Infinity,
        dropdownParent: $('#box_check_option')
    });

    $('.fil_sale_status').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "指定無し",
        dropdownParent: $('#box_check_option_05')
    });
    $('.fil_status').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "指定無し",
        dropdownParent: $('#box_check_option_02')
    });
    $('.fil_country').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "指定無し",
        dropdownParent: $('#box_check_option_03')
    });
    $('.fil_specification').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "指定無し",
        dropdownParent: $('#box_check_option_04')
    });
    //list news
    function activeTab(obj) {
        $('.tabs_list ul li').removeClass('active_tab');
        $(obj).addClass('active_tab');

        var id = $(obj).find('a').attr('href');

        $('.tab_item').hide();

        $(id).show();
    }

    //user guide
    function activeTabGuide (objed) {
        $ ('.tabs_list_guide ul li').removeClass ('active_tab');
        $ (objed).addClass ('active_tab');

        var id = $ (objed).find ('a').attr ('href');

        $ ('.tab_item_guide').hide ();

        $ (id).show ();
    }
    $ ('.tab_nav_guide li').click (function () {
    activeTabGuide (this);
    return false;
    });

    var url = window.location.pathname + window.location.hash;
    if (url == '/pages/instruction-manual#shipping_cost') {
    $ ('ul.tab_nav_guide li:nth-child(5)').addClass ('active_tab');
    $ ('.tab_item_guide').hide ();
    $ ('#tab_5').show ();
    $('#tab_5_sp').addClass('active');
    $ ('#tab_5_sp').next().slideToggle();
    }
    else {
        if (url == '/pages/instruction-manual#canceling_order_01') {
            $ ('ul.tab_nav_guide li:nth-child(8)').addClass ('active_tab');
            $ ('.tab_item_guide').hide ();
            $ ('#tab_8').show ();
            $('#tab_8_sp').addClass('active');
            $ ('#tab_8_sp').next().slideToggle();
        }
    }


    $('.btn_del,.btn_del_1,.point .cancel').on("click", function() {
        $(this).parents('.list_favorite_item li').remove();
        $(this).parents('.list_cart_item li').remove();
        $(this).parents('.order-item').fadeOut();
    });

    if ($('#list_favorite_exist .list_favorite_item').length == 0) {
        $("section.section.list_favorite>.upper").css("padding", "0");
    }
        //nav SP
    if ($('#nav').length) {
        var header = $('.link');
        var adclass = 'scrolled';
        var scrollY = 100;
        $(".link .logo img").css("display", "none");
        $(window).scroll(function() {
            if ($(window).scrollTop() > scrollY) {
                header.addClass(adclass);
                $("ul.search-card li:nth-child(01), ul.search-card li:nth-child(02)").css({"transition": "all 0.3s"});
                $(".link .logo img").css("display", "block");
                $("#nav").css("z-index", "999");

            } else {
                header.removeClass(adclass);
                $(".link .logo img").css("display", "none");
                $("ul.search-card li:nth-child(01), ul.search-card li:nth-child(02)").css({"transition": "all 0.3s"});
                $("#nav").css("z-index", "99991");
            }
        });
    }

    setTimeout(function () {
        $('.c-item .c-item__body').matchHeight();
        $('.holizontal_list .c-item').matchHeight();
        // $('.c-item .item_thumbnail').matchHeight();
        }, 1000);
    //
    if ($('.list_item_ranking li').length > 6) {
        $('.list_item_ranking li:gt(5)').hide();
        $('.more').show();
    }

    $('.more').on('click', function() {
        $('.list_item_ranking li:gt(5)').slideDown("300");
        $('.more').hide();
    });

    if ($('.list_item_recomend li').length > 6) {
        $('.list_item_recomend li:gt(5)').hide();
        $('.more_01').show();
    }

    $('.more_01').on('click', function() {
        $('.list_item_recomend li:gt(5)').slideDown("300");
        $('.more_01').hide();
    });
    //

    var moreListMusic = 30;
    $('.list_item_music_more li:nth-child(n + ' + (moreListMusic + 1) + ')').addClass('is-hidden');
    $('.more_list_music').on('click', function() {
        $('.list_item_music_more li.is-hidden').slice(0, moreListMusic).removeClass('is-hidden');
        if ($('.list_item_music_more li.is-hidden').length == 0) {
            $('.more_list_music').fadeOut();
        }
    });
    //    nav SP
    if ($('#nav').length) {
        //header
        $('#btn_sp').off('click');
        $('#btn_sp').on('click', function(e) {
            e.preventDefault();
            var _window = $(window).width();
            var _head = $('#header > .inner').outerWidth();
            var _fixedwidth;
            _fixedwidth = _window - ((_window - _head) * 0.5 + $('#header > .inner > div:nth-child(2)').width());
            $('body').toggleClass('open');
            $('.content').slideUp(easing);
            return false
        });
        //close
        $('#btn_close_pc').off('click');
        $('#btn_close_pc').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('open');
            $('.content').slideUp(easing);
            return false
        });
        //toggle slide
        $('.accordion_navi.main').off('click');
        $('.accordion_navi.main').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle(easing);
            return false
        });
    }
    $('.title-manual').on('click', function() {
        $(this).toggleClass("active-manual");
    });
    $(".manual_title a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });

    $("#nav a").on('click', function(event) {
        var _self = $(this),
            currentURL = window.location.href,
            currentPage = '',
            targetPage = '';

        currentPage = currentURL.split('/').slice(-1).pop();
        currentPage = currentPage.split('#')[0];
        targetPage = _self.attr('href').split('#')[0];

        if (targetPage === currentPage) {
            if (this.hash !== "") {
                event.preventDefault();

                var offset = $(this.hash).offset().top;
                $('html, body').animate({
                    scrollTop: offset - 65,
                }, 500);
                $('body').removeClass('open');
            }
        }

    });
    //  scrollTop utils

    var url_feature_list_sp = window.location.pathname + window.location.hash;
    if (url_feature_list_sp == '/#feature_list_sp') {
        $('html, body').animate({
            scrollTop: parseInt($("#feature_list_sp").offset().top - 70)
        }, 500);
    }
    var url_container_ranking = window.location.pathname + window.location.hash;
    if (url_container_ranking == '/#container_ranking') {
        $('html, body').animate({
            scrollTop: parseInt($("#container_ranking").offset().top - 60)
        }, 500);
    }
    var url_container_recomend = window.location.pathname + window.location.hash;
    if (url_container_recomend == '/#container_recomend') {
        $('html, body').animate({
            scrollTop: parseInt($("#container_recomend").offset().top - 60)
        }, 500);
    }
    var url_new_rerease = window.location.pathname + window.location.hash;
    if (url_new_rerease == '/#new_rerease') {
        $('html, body').animate({
            scrollTop: parseInt($("#new_rerease").offset().top - 60)
        }, 500);
    }
    // fancybox delete address

    var elementTemp;
    $('.btn').click(function() {
        elementTemp = $(this).closest('.item')
    })
    $('.delete').click(function() {
        elementTemp.fadeOut();
    })

    $('.del_model_popup').on('click', function() {
        $.fancybox.open( $('#hidden-content-1'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });

    $('.icon__search_res').on('click', function() {
        $.fancybox.open( $('#advanced_search_popup'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    $('#advanced_search').on('click', function() {
        $.fancybox.open( $('#advanced_search_popup'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    $('.search_box_button_sp').on('click', function() {
        $.fancybox.open( $('#hidden-search-sp'), {
            clickSlide: false,
            clickOutside: false,
            touch: false
        });
    });
    setTimeout(function () {
        var instance = $('.xzoom').xzoom();
        $('.xzoom-gallery').each(function() {
            instance.xappend($(this));
        });
    }, 1000);

    $(".accordion_item").on('click', function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
        return false
    });

    $(".search_box").hover(function(){
        $('.search_box_input').toggleClass('show_input_search');
        $('.search_box_input').focus();
    });

    $('.search_box_input').focus(function(){
        if($('.search_box_input').val() != ""){
            $('.search_box_input').addClass('show_input_search');
        }
    });
  // Show reset password form
  $ ('#RecoverPassword').on (
    'click',
    function (evt) {
      evt.preventDefault ();
      showRecoverPasswordForm ();
      this.$RecoverHeading.attr ('tabindex', '-1').focus ();
    }.bind (this)
  );

  // Hide reset password form
  $ ('#HideRecoverPasswordLink').on (
    'click',
    function (evt) {
      evt.preventDefault ();
      hideRecoverPasswordForm ();
      this.$LoginHeading.attr ('tabindex', '-1').focus ();
    }.bind (this)
  );

  function showRecoverPasswordForm () {
    $ ('#RecoverPasswordForm').removeClass ('hide');
    $ ('#CustomerLoginForm').addClass ('hide');
  }

  function hideRecoverPasswordForm () {
    $ ('#RecoverPasswordForm').addClass ('hide');
    $ ('#CustomerLoginForm').removeClass ('hide');
  }

  $ ('#address_form_new').validate ({
    groups: {
      nameGroup: 'address[first_name] address[last_name]',
      phoneNumber: 'address[phone_number-block-1] address[phone_number-block-2] address[phone_number-block-3]',
      postNumber: 'address[post_office_number-block-1] address[post_office_number-block-2]',
    },
    rules: {
      'address[first_name]': 'required',
      'address[last_name]': 'required',
      'address[phone_number-block-1]': 'required',
      'address[phone_number-block-2]': 'required',
      'address[phone_number-block-3]': 'required',
      'address[post_office_number-block-1]': 'required',
      'address[post_office_number-block-2]': 'required',
      'address[city]': 'required',
      'address[address1]': 'required',
    },
    messages: {
      'address[first_name]': '※姓を入力をして下さい',
      'address[last_name]': '※名前を入力をして下さい',
      'address[phone_number-block-1]': '※番号を入力をして下さい',
      'address[phone_number-block-2]': '※番号を入力をして下さい',
      'address[phone_number-block-3]': '※番号を入力をして下さい',
      'address[post_office_number-block-1]': '※番号を入力をして下さい',
      'address[post_office_number-block-2]': '※番号を入力をして下さい',
      'address[city]': '※市を入力をして下さい',
      'address[address1]': '※住を入力をして下さい',
    },
    highlight: function (element, errorClass) {
      $ (element).addClass ('has-error');
    },
    unhighlight: function (element, errorClass) {
      $ (element).removeClass ('has-error');
    },
  });


});

$(document).ready(function() {
  $('.close-menu-btn').click(function() {
    $('.mobile-menu__menu').removeClass('open');
    $('.mobile-menu__menu').addClass('closed');
  });
  $('.menu__logo').click(function() {
    $('.mobile-menu__menu').removeClass('open');
    $('.mobile-menu__menu').addClass('closed');
  });
  $('.ham').click(function() {
    if ($(window).width() >= '480') {
      $('.header-menu').toggleClass('open');
    } else {
      $('.mobile-menu__menu').removeClass('closed');
      $('.mobile-menu__menu').addClass('open');
    }
  });
  
 /**
  $('.how__left__slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: $("#nav-slick-prev"),
    nextArrow: $("#nav-slick-next"),
    vertical: true,
    verticalSwiping: true,
    pauseOnDotsHover: true,
    autoplaySpeed: 2000,
    asNavFor: '.right__slider-wrap',
    focusOnSelect: true,
    slidesToShow: 1,
    responsive: [{
      breakpoint: 1152,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }]
  });

  $('.right__slider-wrap').slick({
    infinite: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.how__left__slider',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1152,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }]
  });
  $('.right__slider-wrap').hover(function() {
    $('.right__slider-wrap').slick('slickPause');
    $('.how__left__slider').slick('slickPause');
  }, function() {
    $('.right__slider-wrap').slick('slickPlay');
    $('.how__left__slider').slick('slickPlay');
  });
  $('.how__left__slider').hover(function() {
    $('.right__slider-wrap').slick('slickPause');
    $('.how__left__slider').slick('slickPause');
  }, function() {
    $('.right__slider-wrap').slick('slickPlay');
    $('.how__left__slider').slick('slickPlay');
  });
  **/
  $(".header-menu a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 80 + "px"
    }, {
      duration: 600,
      easing: "swing"
    });
    $(".header-menu a").removeClass('active');
    $(this).addClass('active');
    return false;
  });
  $(".mobile-menu__menu ul a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 80 + "px"
    }, {
      duration: 600,
      easing: "swing"
    });
    $(".mobile-menu__menu ul a").removeClass('active');
    $(this).addClass('active');
    $('.mobile-menu__menu').removeClass('open');
    $('.mobile-menu__menu').addClass('closed');
    return false;
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 220) {
      $('.soc-bar').addClass('fixed');
    } else {
      $('.soc-bar').removeClass('fixed');
    }
  });
  $(document).scroll(function() {
    s_top = $(window).scrollTop();
    yes = $("#footer").offset().top - $("#footer").outerHeight() - 160;
    if (s_top >= yes) {
      $('.soc-bar').addClass('hidden');
    } else {
      $('.soc-bar').removeClass('hidden');
    }
  });
  $('.faq-accordeon ul li').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });

  function Scroll_block() {
    var scroll_top = $(document).scrollTop();
    $('.header-menu a[rel="hash"]').each(function() {
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top - 160 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(".header-menu a.active").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
    $('.mobile-menu__menu ul a[rel="hash"]').each(function() {
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top - 160 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(".mobile-menu__menu ul a.active").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }
  $(document).on("scroll", Scroll_block);
  if ($('#roadmap').length > 0) {
    var timingProps = {
      type: 'sync',
      duration: 150,
      forceRender: false,
      start: 'manual',
      pathTimingFunction: Vivus.EASE_OUT,
      animTimingFunction: Vivus.EASE_OUT,
      file: '/img/roadmap.svg',
      onReady: function(roadmap) {}
    };
  }
  $("#mc-embedded-subscribe").click(function(e) {
    if (window.ga && ga.loaded) {
      ga("send", "event", "subscribe", "email", "", {
        "hitCallback": function() {
          return true;
        }
      });
    }
  });
  $(".footer__soc a, .soc-bar a").click(function(e) {
    if (window.ga && ga.loaded) {
      var url = $(this).attr("href");
      ga("send", "event", "social", "click", url, {
        "transport": "beacon",
        "hitCallback": function() {
          return true;
        }
      });
    }
  });
  $("a.paper-click").click(function(e) {
    if (window.ga && ga.loaded) {
      var url = $(this).attr("href");
      ga("send", "event", "whitepaper", "click", $(this).data("label"), {
        "hitCallback": function() {
          return true;
        }
      });
    }
  });
  $("#advisers a").click(function(e) {
    if (window.ga && ga.loaded) {
      var url = $(this).attr("href");
      ga("send", "event", "adviser", "linkedIn", url, {
        "hitCallback": function() {
          return true;
        }
      });
    }
  });
  $("#team a").click(function(e) {
    if (window.ga && ga.loaded) {
      var url = $(this).attr("href");
      ga("send", "event", "team", "linkedIn", url, {
        "hitCallback": function() {
          return true;
        }
      });
    }
  });
});
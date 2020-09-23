$(window).on("load", function () {
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 200);
  // $("nav.vertical-social").midnight();
  $(".navbar .dropdown").on("mouseover", function () {
    var $this = $(this).find(".dropdown-menu");
    if ($this.hasClass("show")) {
      return false;
    }
    $(".dropdown-toggle", this).dropdown("toggle");
  });
  $(".navbar .dropdown").on("mouseout", function () {
    var $this = $(this).find(".dropdown-menu");
    if ($this.hasClass("show")) {
      $(".dropdown-toggle", this).dropdown("toggle");
    }
  });
  $(".navbar .dropdown-toggle").on("click", function () {
    var $this = $(this);
    if ($this.hasClass("show")) {
      return false;
    }
  });
  if ($(".page-animated").length > 0) {
    InitWaypointAnimations();
  }
  setTimeout(function () {
    $(".cic-logo").addClass("cic-logo-animation");
    $(".svg-elements-1").addClass("svg-elements-1-animation");
    $(".svg-elements-2").addClass("svg-elements-2-animation");
  }, 3000);
});
(function (window, document, $) {
  "use strict";
  var $html = $("html"),
    $body = $("body");
  $($body).scrollspy({ target: "#navigation" });
  navbarSlideLine();
  $(window).on("activate.bs.scrollspy", function (e) {
    navbarSlideLine();
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      if ($(window).width() > 992) {
        $(".navbar").addClass("navbar-fixed navbar-shadow");
        $(".navbar #slide-line").removeClass("d-none");
        inverseNavbar(true);
      }
    } else {
      $(".navbar").removeClass("navbar-fixed navbar-shadow");
      inverseNavbar(false);
    }
  });
  navbarAbsolute();
  $(window).resize(function () {
    navbarAbsolute();
  });
  $(".main-menu .navbar-toggler").click(function (event) {
    $(".main-menu").toggleClass("open", 2000, "swing");
  });
  $('.main-menu a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not(".link")
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        $(".main-menu .navbar-toggler").click();
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            { scrollTop: target.offset().top },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
  $('.link-scroll a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not(".link")
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            { scrollTop: target.offset().top },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  $("#ico-modal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1"
    );
  });
  $("#ico-modal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    grabCursor: true,
    activeIndex: 7,
    breakpoints: {
      576: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });
  if ($(window).width() < 992) {
    swiper.slideTo(1, 1000, false);
  }
  $(window).resize(function () {
    if ($(window).width() < 992) {
      swiper.slideTo(1, 1000, false);
    }
  });
})(window, document, jQuery);
function navbarAbsolute() {
  if ($(window).width() < 992) {
    $(".main-menu").removeClass("fixed-top").addClass("navbar-absolute");
    $(
      ".main-menu .nav-item, .main-menu .dropdown, .main-menu .btn-sign-in"
    ).removeClass("animated");
  } else {
    $(".main-menu").addClass("fixed-top").removeClass("navbar-absolute");
    $(
      ".main-menu .nav-item, .main-menu .dropdown, .main-menu .btn-sign-in"
    ).addClass("animated");
  }
}
function inverseNavbar(isFixed) {
  if ($("body").hasClass("template-intro-video")) {
    if (isFixed) {
      $(".navbar-brand-logo-dark").removeClass("d-none");
      $(".navbar-brand-logo").addClass("d-none");
      $(".btn-sign-in")
        .removeClass("btn-light")
        .addClass("btn-gradient-blue btn-glow");
    } else {
      $(".navbar-brand-logo-dark").addClass("d-none");
      $(".navbar-brand-logo").removeClass("d-none");
      $(".btn-sign-in")
        .addClass("btn-light")
        .removeClass("btn-gradient-blue btn-glow");
    }
  }
}
function navbarSlideLine() {
  var $nav = $("#navigation"),
    $slideLine = $nav.find("#slide-line"),
    $currentItem = $nav.find(".active");
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.width() + 20,
      left:
        $currentItem.parent().position().left +
        ($currentItem.parent().width() - $currentItem.width()) / 2 -
        8,
    });
  }
}

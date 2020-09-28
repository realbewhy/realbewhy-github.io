fetch("https://medium.com/feed/@spexchange.spcoin")
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const items = data.querySelectorAll("item");
    items.forEach((item) => {
      const title = item.querySelector("title").textContent;
      const link = item.querySelector("guid").textContent;
      const date = new Date(item.querySelector("updated").textContent);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var img = $(
        item.getElementsByTagNameNS("*", "encoded").item(0).textContent
      ).find("img")[0].src;
      $("#swiper-wrapper").append(
        `<div class="swiper-slide"><div class="card"><img src="` +
          img +
          `"><div class="card-body"><a href="` +
          link +
          `"><p class="card-text">` +
          title +
          `</p></a></div><div class="card-footer"><small class="text-muted">` +
          monthNames[date.getMonth()] +
          " " +
          date.getDate() +
          ", " +
          date.getFullYear() +
          `</small></div></div></div>`
      );
    });
    new Swiper(".swiper-container-news", {
      slidesPerView: 3,
      spaceBetween: 10,
      // loop: true,
      // loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination-news",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
    });
  });

window.onload = function () {
  function circle($) {
    $(".second.circle")
      .circleProgress({
        value: 0.6,
        fill: {
          color: "#ff644e",
        },
        emptyFill: "#16e7cf",
        startAngle: Math.PI * 1.5,
        size: 150,
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find("strong")
          .html(Math.round(60 * progress) + "<i>%</i>");
      });
  }

  (function ($) {
    $(".full.circle")
      .circleProgress({
        value: 0,
        fill: {
          color: "#ff644e",
        },
        emptyFill: "#16e7cf",
        startAngle: Math.PI * 1.5,
        size: 150,
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find("strong")
          .html(Math.round(100) + "<i>%</i>");
      });
  })(jQuery);

  circle(jQuery);
  setInterval(() => {
    circle(jQuery);
  }, 2000);

  AOS.init();
  new Swiper(".swiper-container-roadmap", {
    slidesPerView: 4,
    grabCursor: true,
    activeIndex: 2,
    initialSlide: 5,
    breakpoints: {
      576: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });
  new Swiper(".swiper-container-videos", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination-videos",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
};

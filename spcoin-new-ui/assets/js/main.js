// window.onscroll = function () {
//   myFunction();
// };
// function myFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     document.getElementById("Menu").style.backgroundColor = "#222f3e";
//   } else {
//     document.getElementById("Menu").style.backgroundColor = "transparent";
//   }
// }

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
};

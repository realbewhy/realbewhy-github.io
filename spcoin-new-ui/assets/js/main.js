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
  new Chart(document.getElementById("chDonut1"), {
    type: "doughnut",
    data: {
      // backgroundColor: "#000",
      labels: ["Sold", "Remain"],
      datasets: [
        {
          data: [6000000, 4000000],
          backgroundColor: ["#FF644E", "#00A89D"],
          borderWidth: 2,
          weight: 1,
        },
      ],
    },
    options: {
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: "60%",
              font: {
                size: "30",
              },
              color: "#fff",
              background: "#000",
            },
          ],
        },
      },
      cutoutPercentage: 90,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
  new Chart(document.getElementById("chDonut2"), {
    type: "doughnut",
    data: {
      // backgroundColor: "#000",
      labels: ["Sold", "Remain"],
      datasets: [
        {
          data: [0, 10000000],
          backgroundColor: ["#FF644E", "#00A89D"],
          borderWidth: 2,
          weight: 1,
        },
      ],
    },
    options: {
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: "100%",
              font: {
                size: "30",
              },
              color: "#fff",
              background: "#000",
            },
          ],
        },
      },
      cutoutPercentage: 90,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
  new Chart(document.getElementById("chDonut3"), {
    type: "doughnut",
    data: {
      // backgroundColor: "#000",
      labels: ["Sold", "Remain"],
      datasets: [
        {
          data: [0, 10000000],
          backgroundColor: ["#FF644E", "#00A89D"],
          borderWidth: 2,
          weight: 1,
        },
      ],
    },
    options: {
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: "100%",
              font: {
                size: "30",
              },
              color: "#fff",
              background: "#000",
            },
          ],
        },
      },
      cutoutPercentage: 90,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
};

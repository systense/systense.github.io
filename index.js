document.addEventListener("DOMContentLoaded", function() {
  var projectSlider = document.getElementsByClassName("project-slider");
  var linkDetails = document.getElementById("link-details");
  var showMenu = document.getElementById("trigger");
  var secondNav = document.getElementById("secondary-nav");
  var body = document.documentElement;

  if (showMenu) {
    showMenu.addEventListener("click", function() {
      if (!showMenu.classList.contains("current")) showMenu.classList.add("current");
      if (secondNav.classList.contains("hidden")) secondNav.classList.remove("hidden");
    });
  }

  if (linkDetails) {
    linkDetails.addEventListener("click", function() {
      var wrapper = document.querySelector(".details .wrapper");
      if (!wrapper.classList.contains("active")) wrapper.classList.add("active");
      scrollTo(body, projectSlider.offsetHeight, 300);
    });
  }

  if (projectSlider) {
    projectSlider.forEach(function() {
      console.log(this);
    //   var current = 0;
    //   var ul = document.getElementById("project-slider-ul");
    //   var items = document.querySelectorAll("#project-slider-ul li");
    //   var arrowLeft = document.querySelector(".arrow-left");
    //   var arrowRight = document.querySelector(".arrow-right");

    //   ul.addEventListener("click", function() {
    //     if (current == items.length - 1) {
    //       items[current].classList.remove("active");
    //       items[0].classList.add("active");
    //       current = 0;
    //     } else {
    //       items[current].classList.remove("active");
    //       items[current + 1].classList.add("active");
    //       current = current + 1;
    //     }
    //   });

    //   arrowLeft.addEventListener("click", function() {
    //     if (current == 0) {
    //       items[0].classList.remove("active");
    //       items[items.length - 1].classList.add("active");
    //       current = items.length - 1;
    //     } else {
    //       items[current].classList.remove("active");
    //       items[current - 1].classList.add("active");
    //       current = current - 1;
    //     }
    //   });

    //   arrowRight.addEventListener("click", function() {
    //     if (current == items.length - 1) {
    //       items[current].classList.remove("active");
    //       items[0].classList.add("active");
    //       current = 0;
    //     } else {
    //       items[current].classList.remove("active");
    //       items[current + 1].classList.add("active");
    //       current = current + 1;
    //     }
    //   });
    });
  }
});

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}



// document.addEventListener("DOMContentLoaded", function() {
//   var projectSlider = document.getElementById("project-slider");
//   var linkDetails = document.getElementById("link-details");
//   var showMenu = document.getElementById("trigger");
//   var secondNav = document.getElementById("secondary-nav");
//   var body = document.documentElement;

//   if (showMenu) {
//     showMenu.addEventListener("click", function() {
//       if (!showMenu.classList.contains("current")) showMenu.classList.add("current");
//       if (secondNav.classList.contains("hidden")) secondNav.classList.remove("hidden");
//     });
//   }

//   if (linkDetails) {
//     linkDetails.addEventListener("click", function() {
//       var wrapper = document.querySelector(".details .wrapper");
//       if (!wrapper.classList.contains("active")) wrapper.classList.add("active");
//       scrollTo(body, projectSlider.offsetHeight, 300);
//     });
//   }

//   if (projectSlider) {
//     var current = 0;
//     var ul = document.getElementById("project-slider-ul");
//     var items = document.querySelectorAll("#project-slider-ul li");
//     var arrowLeft = document.querySelector(".arrow-left");
//     var arrowRight = document.querySelector(".arrow-right");

//     ul.addEventListener("click", function() {
//       if (current == items.length - 1) {
//         items[current].classList.remove("active");
//         items[0].classList.add("active");
//         current = 0;
//       } else {
//         items[current].classList.remove("active");
//         items[current + 1].classList.add("active");
//         current = current + 1;
//       }
//     });

//     arrowLeft.addEventListener("click", function() {
//       if (current == 0) {
//         items[0].classList.remove("active");
//         items[items.length - 1].classList.add("active");
//         current = items.length - 1;
//       } else {
//         items[current].classList.remove("active");
//         items[current - 1].classList.add("active");
//         current = current - 1;
//       }
//     });

//     arrowRight.addEventListener("click", function() {
//       if (current == items.length - 1) {
//         items[current].classList.remove("active");
//         items[0].classList.add("active");
//         current = 0;
//       } else {
//         items[current].classList.remove("active");
//         items[current + 1].classList.add("active");
//         current = current + 1;
//       }
//     });
//   }
// });

// function scrollTo(element, to, duration) {
//   if (duration <= 0) return;
//   var difference = to - element.scrollTop;
//   var perTick = difference / duration * 10;

//   setTimeout(function() {
//     element.scrollTop = element.scrollTop + perTick;
//     if (element.scrollTop === to) return;
//     scrollTo(element, to, duration - 10);
//   }, 10);
// }

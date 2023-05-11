let msg_btn = document.getElementsByClassName("msg_btn");
let form = document.getElementById("form");

$(function () {
  $(".msg_btn").click(function () {
    $("#form").slideToggle("300");
  });
});

//VENOBOX PLUGIN START
new VenoBox({
  selector: ".my-image-links",
  numeration: true,
  infinigall: true,
  share: true,
  spinner: "rotating-plane",
});
//VENOBOX PLUGIN END

//MIXIT UP PLUGIN START
var mixer = mixitup(".filter_gallery");
//MIXIT UP PLUGIN END
//STICKY NAVBAR START
let navigation_bar = document.getElementById("navigation_bar");

window.addEventListener("scroll", function () {
  let scroll_value = Math.floor(scrollY);
  if (scroll_value > 100) {
    navigation_bar.classList.add("sticky");
  } else {
    navigation_bar.classList.remove("sticky");
  }
});
//STICKY NAVBAR END
//DARK MODE START
let dark_mode = document.querySelector(".dark_mode");
let fa_sun = document.querySelector(".fa-sun");
let fa_moon = document.querySelector(".fa-moon");
let body = document.querySelector("body");
dark_mode.addEventListener("click", function () {
  body.classList.toggle("dark");
});
//DARK MODE END

//MOVE TOP START
let move_top = document.querySelector(".move_top");

window.addEventListener("scroll", function () {
  let scroll_value_2 = Math.floor(scrollY);
  if (scroll_value_2 > 150) {
    move_top.classList.add("show");
  } else {
    move_top.classList.remove("show");
  }
});
//MOVE TOP END

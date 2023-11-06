$(document).ready(function () {

  let count = 0;

  setInterval(fadeani, 3000);

  function fadeani() {
    count++;
    count = count % $(".swiper-slide").length;
    $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on");
  }
})


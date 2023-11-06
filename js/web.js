$(document).ready(function () {
  // setInterval, animate, css, appendTo
  // 프로토타입
  // setInterval(function(){}, speed);
  // $(태그).animate({"스타일": "스타일값"}, speed, function() {});
  // $(태그).css("스타일", "스타일값");
  // $(옮길태그).appendTo($(부모가 될 태그));

  const aniw = $(".swiper-slide").width(); //  $(".swiper-slide").css("width"); width값을 가져와라

  setInterval(function () {
    $(".swiper-wrapper").animate({ "marginLeft": -aniw }, 400, function () {
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"));
      $(".swiper-wrapper").css("marginLeft", "0");
    });
  }, 3000);
})





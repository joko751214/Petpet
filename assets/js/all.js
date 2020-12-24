"use strict";

/* swiper settings start */
var options = {
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  // slidesPerView: 'auto',
  // loopedSlides: 3,
  autoplay: {
    delay: 3000
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next'
  },
  // Responsive breakpoints
  breakpoints: {
    loopedSlides: 1,
    // when window width is >= 376px
    376: {
      slidesPerView: 1,
      spaceBetween: 0,
      // loop: false,
      loopedSlides: 1
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
      loopedSlides: 3
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
};
var mySwiper = new Swiper('.swiper-container', options); // swiper rwd settings

window.addEventListener('resize', checkWindowSize);

function checkWindowSize() {
  var window_width = window.screen.width;

  if (window_width < 376) {
    // 停止自動輪播
    mySwiper.autoplay.stop(); // 將前後複製的 slides 隱藏，因為刪除的方法太麻煩

    mySwiper.slides.eq(0).css('display', 'none');
    mySwiper.slides.eq(-1).css('display', 'none'); // mySwiper.removeSlide(0);
    // 取消display: flex

    $(".swiper-wrapper").css("display", "initial"); // close next-button

    $(".swiper-button-next").css("display", "none");
  } else {
    mySwiper.autoplay.start();
    $(".swiper-wrapper").css("display", "flex");
    $(".swiper-button-next").css("display", "flex");
  }
}

;
checkWindowSize();
/* swiper settings end */
"use strict";

/* datepicker */
$(function () {
  $("#fromDate").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
    startDate: "today",
    todayHighlight: true
  });
  $("#toDate").datepicker({
    format: "yyyy-mm-dd",
    autoclose: true,
    startDate: "today"
  });
  $("#fromDate").on("changeDate", function (e) {
    $('#toDate').datepicker('setStartDate', e.date);
  });
  $("#toDate").on("changeDate", function (e) {
    $('#fromDate').datepicker('setEndDate', e.date);
  });
});
//# sourceMappingURL=all.js.map
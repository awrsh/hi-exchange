const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
function randNumbers() {
  var numbers = [];

  for (var i = 0; i < 20; i += 1) {
    numbers.push(Math.random() * 50);
  }

  return numbers;
}

setInterval(function () {
  document.querySelectorAll(".sparkline").forEach(function (svg) {
    sparkline.sparkline(svg, randNumbers());
  });
}, 1000);

//  Menu Mobile
(function ($) {
  "use strict";

  /*****************************
   * Commons Variables
   *****************************/
  var $window = $(window),
    $body = $("body");

  /****************************
   * Sticky Menu
   *****************************/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  /*****************************
   * Off Canvas Function
   *****************************/
  (function () {
    var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
    $offCanvasToggle.on("click", function (e) {
      e.preventDefault();
      var $this = $(this),
        $target = $this.attr("href");
      $body.addClass("offcanvas-open");
      $($target).addClass("offcanvas-open");
      $offCanvasOverlay.fadeIn();
      if ($this.parent().hasClass("mobile-menu-toggle")) {
        $this.addClass("close");
      }
    });
    $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
      e.preventDefault();
      $body.removeClass("offcanvas-open");
      $offCanvas.removeClass("offcanvas-open");
      $offCanvasOverlay.fadeOut();
      $mobileMenuToggle.find("a").removeClass("close");
    });
  })();

  /**************************
   * Offcanvas: Menu Content
   **************************/
  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu"),
      $offCanvasNavSubMenu = $offCanvasNav.find(".mobile-sub-menu");

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu
      .parent()
      .prepend('<div class="offcanvas-menu-expand"></div>');

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, .offcanvas-menu-expand", function (e) {
      var $this = $(this);
      if (
        $this.attr("href") === "#" ||
        $this.hasClass("offcanvas-menu-expand")
      ) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this
            .closest("li")
            .siblings("li")
            .removeClass("active")
            .find("li")
            .removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }
  mobileOffCanvasMenu();
})(jQuery);

//  Menu Mobile

$(function () {
  /** This code runs when everything has been loaded on the page */
  /* Inline sparklines take their values from the contents of the tag */
  $(".inlinesparkline").sparkline();

  /* Sparklines can also take their values from the first argument 
      passed to the sparkline() function */
  var myvalues = [10, 8, 5, 7, 4, 4, 1];
  $(".dynamicsparkline").sparkline(myvalues);

  /* The second argument gives options such as chart type */
  $(".dynamicbar").sparkline(myvalues, { type: "bar", barColor: "green" });

  /* Use 'html' instead of an array of values to pass options 
      to a sparkline with data in the tag */
  $(".inlinebar").sparkline("html", { type: "bar", barColor: "blue" });
  $(".sparkline").sparkline([4,6,7,7,4,3,2,9,9,9], {
    type: 'line'});
});
const data = [0, 5, 6, 10, 9, 12, 4, 9]
const config = {
  type: 'bar',
  height: '50',
  barWidth: '10',
  resize: true,
  barSpacing: '5',
  barColor: '#7ace4c'
}
$('.sparkline').sparkline(data, config)
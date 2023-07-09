$(document).ready(function () {
    // Check scroll position on page load
    if ($(window).scrollTop() > 0 || $('body').hasClass('WhiteBGBody')) {
      $("nav.navbar").addClass("blackNav");
    }
  
    // Add scroll event listener
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0 || $('body').hasClass('WhiteBGBody')) {
        $("nav.navbar").addClass("blackNav");
      } else {
        $("nav.navbar").removeClass("blackNav");
      }
    });
  });
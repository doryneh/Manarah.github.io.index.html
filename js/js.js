


$(document).ready(function() {
  $('.accordion-button').on('click', function() {
    var $button = $(this);
    var $icon = $button.find('svg');

    if ($button.hasClass('collapsed')) {
      // Button is collapsed, change to expanded state
      $icon.removeClass('fa-minus').addClass('fa-plus');

    } else {
      // Button is expanded, change to collapsed state
      $icon.removeClass('fa-plus').addClass('fa-minus');

    }
  });


    $('.CloseBtn').click(function() {
      $(this).closest('.Subscribtion').remove();
    });

});



/**
Navbar scroll
***/



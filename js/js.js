


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
CHange Label Color when check the input 
***/

$(document).ready(function() {
  $('.CheckRow .form-check-input').change(function() {
    var $label = $(this).siblings('label');
    if ($(this).is(':checked')) {
      $label.css('color', '#00A1A3');
    } else {
      $label.css('color', 'black');
    }

    // Reset color for other labels
    $('.CheckRow .form-check-input').not(this).siblings('label').css('color', 'black');
  });

  $('.CheckOne input').change(function() {
    if ($(this).is(':checked')) {
      $('.BankDetailsOne').removeClass('d-none');
      $('.BankDetailsTwo').addClass('d-none');
      $('.BankDetailsThree').addClass('d-none');
    }
  });

  $('.CheckTwo input').change(function() {
    if ($(this).is(':checked')) {
      $('.BankDetailsOne').addClass('d-none');
      $('.BankDetailsTwo').removeClass('d-none');
      $('.BankDetailsThree').addClass('d-none');
    }
  });

  $('.CheckThree input').change(function() {
    if ($(this).is(':checked')) {
      $('.BankDetailsOne').addClass('d-none');
      $('.BankDetailsTwo').addClass('d-none');
      $('.BankDetailsThree').removeClass('d-none');
    }
  });
  



  /******
   Radio Row
   ******/
   $('.RadioRow .form-check-input').change(function() {
    var $label = $(this).siblings('label');
    $('.RadioRow .form-check-input').not(this).siblings('label').css('color', 'black');

    if ($(this).is(':checked')) {
      $label.css('color', '#00A1A3');

      setTimeout(function() {
        $('.RadioRow').hide();
        $('.FormCheckOutRow').show();
        $('.BorderBottom').text('سحب الأموال');
      }, 2000);
    } else {
      $label.css('color', 'black');
    }
  });

  $('#BackBtn').click(function() {
    $('.FormCheckOutRow').hide();
    $('.RadioRow').show();
  });


  
});


/**
 * Show Range Value
 */
const rangeInput = document.getElementById('customRange');
const rangeValue = document.getElementById('rangeValue');

// Set the initial value of #rangeValue to an empty string
rangeValue.textContent = '';
rangeValue.style.opacity = '0';

rangeInput.addEventListener('input', function() {
  rangeValue.style.opacity = '1';
  rangeValue.textContent = rangeInput.value;

  const rangeWidth = rangeInput.offsetWidth;
  const rangeValueWidth = rangeValue.offsetWidth;

  const thumbOffset = (rangeWidth - rangeValueWidth) * (rangeInput.value / rangeInput.max);

  rangeValue.style.right = `${thumbOffset}px`;

  // Check if the value is equal to the minimum value
  if (parseFloat(rangeInput.value) === parseFloat(rangeInput.min)) {
    rangeValue.style.opacity = '0';
  }
});

/***Connect Select and Range Values  */
$(document).ready(function() {
  const rangeInput = $('#customRange');
  const rangeValue = $('#rangeValue');
  const selectInput = $('section.Calculator .form-select');
  const rangeOptions = [
    { min: 100, max: 999, text: ' ' },
    { min: 1000, max: 4999, text: ' ' },
    { min: 5000, max: 9999, text: ' ' },
    { min: 10000, max: 100000, text: ' ' }
  ];

  // Set the initial range values
  rangeInput.attr('min', rangeOptions[0].min);
  rangeInput.attr('max', rangeOptions[0].max);
  rangeValue.text(rangeOptions[0].text);

  // Hide the rangeValue initially
  rangeValue.hide();

  // Handle select input change event
  selectInput.on('change', function() {
    const selectedIndex = $(this).val();
    const selectedOption = rangeOptions[selectedIndex];

    // Update the range input attributes and value display
    rangeInput.attr('min', selectedOption.min);
    rangeInput.attr('max', selectedOption.max);
    rangeValue.text(selectedOption.text);

    // Set the background color to the fixed status
    rangeInput.trigger('input');
  });

  // Add the "$" sign to the changed number
  let previousValue = rangeInput.val();

  rangeInput.on('input', function() {
    const currentValue = rangeInput.val();

    if (currentValue !== previousValue) {
      const value = parseFloat(currentValue);
      const min = parseFloat(rangeInput.attr('min'));
      const max = parseFloat(rangeInput.attr('max'));
      const percentage = ((value - min) / (max - min)) * 100;
      const text = `${value.toFixed(2)} $`;

      rangeValue.text(text);
      previousValue = currentValue;

      // Show or hide the rangeValue based on the current value
      if (value === min) {
        rangeValue.hide();
      } else {
        rangeValue.show();
      }
    }
  });

  // Update range track color on input change
  rangeInput.on('input', function() {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to left, #00A1A3 0%, #00A1A3 ${value}%, #f3f3f3 ${value}%, #f3f3f3 100%)`;

    // Check if the value is equal to the minimum value
    if (parseFloat(this.value) === parseFloat(this.min)) {
      rangeValue.hide();
    } else {
      rangeValue.show();
    }
  });

  // Set the default background color
  rangeInput.trigger('input');
});


$(document).ready(function() {
  $('.CodeDiv span').each(function() {
    var randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    $(this).text(randomNumber); // Set the generated number as the text of the current span
    
    var rotationDegree = Math.floor(Math.random() * 361); // Generate a random rotation degree between 0 and 360

    // Check if the generated number is 6 or 9
    if (randomNumber === 6 || randomNumber === 9) {
      // Restrict rotation to a maximum of 90 degrees or -90 degrees
      $(this).css('border-bottom', '1px solid #00A1A3'); // Add a small border under the number
    }

    $(this).css('transform', 'rotate(' + rotationDegree + 'deg)'); // Apply the rotation CSS to the current span
  });
});
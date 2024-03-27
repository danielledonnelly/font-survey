// Get all radio buttons
const radioButtons = document.querySelectorAll('input[name="favourite-font"]');

// Get the label element for the font rating
const ratingLabel = document.getElementById('number-label');

// Add click event listener to each radio button
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', function() {
    // Get the text content of the label associated with the selected radio button
    const fontName = document.querySelector(`label[for="${this.id}"]`).textContent;
    
    // Update the label text for the font rating
    ratingLabel.textContent = `Rate your selected font (${fontName}) on a scale of 1 to 10.`;
    
    // Log the selected font name to console
    console.log(`Selected font: ${fontName}`);
  });
});
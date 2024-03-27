


(function(window, document) {

  // code that should be taken care of right away

  window.onload = initialize;

  function initialize (){

// Get all radio buttons
const radioButtons = document.querySelectorAll('input[name="favourite-font"]');

// Get the label element for the font rating
const ratingLabel = document.querySelector('label[for="number"]');

// Add click event listener to each radio button
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', function() {
    // Get the text content of the associated label and trim whitespace
    const fontName = document.querySelector(`label[for="${this.id}"]`).textContent.trim();
    
    // Update rating label with font name wrapped in span with appropriate font class
    ratingLabel.innerHTML = `Rate <span class="${this.parentNode.className}">${fontName}</span> on a scale of 1 to 10.`;
    
    // Log selected font
    console.log(`Selected font: ${fontName}`);
  });
});


  }
})(window, document);
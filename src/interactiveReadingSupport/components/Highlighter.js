function highlighter(searchWord) {
  // Find all elements on the page
  var allElements = document.getElementsByTagName('*');

  // Loop through each element to find the ones containing the search word
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];
    var elementText = element.textContent || element.innerText;

    // Check if the search word is present in the element's text content
    if (elementText.includes(searchWord)) {
      // If found, you can do whatever you want with this element
      console.log('Element containing the search word found:', element);
      // For example, you can highlight it
      element.style.backgroundColor = 'yellow';
    }
  }
}

export default highlighter;

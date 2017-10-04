var textInput = document.querySelector('.input');
var output = document.querySelector('.output');

        // user typing
textInput.oninput = function () {
  var sentences = textInput.value.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g);
  console.log(sentences);
  output.innerHTML = ' ';
 
        // highlighting text
  for (var i = 0; i < sentences.length; i++) {
    var sentence = sentences[i];
    var length = sentence.split(' ').length;
    var highlight = document.createElement('span');
    highlight.textContent = sentence.trim();
    var x = -1;
      
    if (x != 0) {
            length--; // subtract 1
        }

        // Change the color
    if (length >= 14) {
        highlight.style.background = 'rgb(148, 201, 209)';
    } else if (length >= 5) {
        highlight.style.background = 'rgb(155, 209, 147)';
    } else if (length >= 2) {
        highlight.style.background = 'rgb(224, 92, 92)';
    } else {
        highlight.style.background = 'rgb(236, 247, 116)';
    }
        // printing text
    output.appendChild(highlight);
  }
}
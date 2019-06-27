(function() {
  ran_col();

})();

function ran_col() { //function name
  var color = '#'; // hexadecimal starting symbol
  var letters = [
    //'#fae2af', '#f6c1bc', '#c3dbf5', '#c9f9e5', '#e3e6ea'
    'fae2af', 'f6c1bc', 'c3dbf5', 'c9f9e5', 'e3e6ea'
  ]; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  document.body.style.background = color; // Setting the random color on your div element.
  document.querySelector('.hero .content').style.color = color;
  document.querySelectorAll('.hero .content .social .item .link').forEach(function(el) {
    el.style.color = color;
  })


}

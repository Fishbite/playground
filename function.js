//  Code By Webdevtrick ( https://webdevtrick.com) 
var section1 = $('#section1').offset().top;
var section2 = $('#section2').offset().top;
var section3 = $('#section3').offset().top;
var section4 = $('#section4').offset().top;

var scrollOffset = 300;

$(window).scroll(function() {  
  
  var scroll = $(window).scrollTop() + scrollOffset;  
  

  if ( scroll < 500 ) {
    $('.grid-image img').attr('src', 'https://webdevtrick.com/wp-content/uploads/b47sample3.jpg');
  }
  
  if ( scroll > section2 ) {
    $('.grid-image img').attr('src', 'https://webdevtrick.com/wp-content/uploads/image-slider4.jpg');
  }

  if ( scroll > section3 ) {
    $('.grid-image img').attr('src', 'https://webdevtrick.com/wp-content/uploads/image-slider3.jpg');
  }

  if ( scroll > section4 ) {
    $('.grid-image img').attr('src', 'https://webdevtrick.com/wp-content/uploads/image-slider1.jpg');
  }
});
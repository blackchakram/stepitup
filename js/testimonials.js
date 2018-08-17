/*
This script scrolls the testimonials when the user clicks on a circle
*/

var $testimonialcircle = $('.fa-circle');
var $testimonialwrapper = $('.testimonialwrapper');
var $testimonialradios = $('.testimonialradios i');

var $testimonialwidth = -960;

$testimonialcircle.click(function(){

  // remove pre-existing classes to prevent accidental doubling
  $testimonialcircle.removeClass('fas');
  $testimonialcircle.removeClass('far');
  $testimonialcircle.addClass('far');

  // find out what index of the parent element the user just clicked on
  var $thisindex = $testimonialradios.index(this) + 1;

  // change the radio button thing to filled for the index just clicked on
  $('.testimonialradios i:nth-child(' + $thisindex + ')').addClass('fas');

  if ($(window).width() < 1440) {
    $testimonialwidth = -440;
  }
  if ($(window).width() < 768) {
    $testimonialwidth = -300;
  }

  // scroll the testimonials window to the appropriate location for which testimonial was clicked
  $testimonialwrapper.velocity({marginLeft: $testimonialradios.index(this)*($testimonialwidth-320) + "px"},{duration: 500});
});

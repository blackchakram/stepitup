/*
This script handles the dropdown menu for the nav section
*/

var $hamburgericon = $('.hamburger').find('img');
var $thedropdown = $('.dropdownholder');
var $linkblocks = $('.linkblock');

var $wholink = $('.wholink');
var $classlink = $('.classlink');
var $testimlink = $('.testimlink');
var $contactlink = $('.contactlink, .specialcontact');

var $offset;

if ($(window).width() < 1440) {

$hamburgericon.hover(function(){
  $thedropdown.css("display", "block");
  $thedropdown.css("z-index", "10");
  $thedropdown.velocity({height: "88px"},{duration: 400})
});

$thedropdown.hover(function(){
}, function(){
  $thedropdown.css("display", "none");
  $thedropdown.css("z-index", "-10");
  $thedropdown.css("height", "15px");
});

$linkblocks.hover(function(){
  $(this).find('a').css("color", "white");
}, function(){
  $(this).find('a').css("color", "black");
});

}


$wholink.click(function(){
  $('html, body').animate({
      scrollTop: $('.whoweare').offset().top
  }, 500);
});

$classlink.click(function(){
  $('html, body').animate({
      scrollTop: $('.classes').offset().top
  }, 500);
});

$testimlink.click(function(){
  $('html, body').animate({
      scrollTop: $('.testimonials').offset().top
  }, 500);
});

$contactlink.click(function(){
  $('html, body').animate({
      scrollTop: $('.contactus').offset().top
  }, 500);
});

/*
This script handles the dropdown menu for the nav section
*/

var $hamburgericon = $('.hamburger').find('img');
var $thedropdown = $('.dropdownholder');
var $linkblocks = $('.linkblock');

$hamburgericon.hover(function(){
  $thedropdown.css("display", "block");
  $thedropdown.css("z-index", "10");
  $thedropdown.velocity({height: "230px"},{duration: 400})
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

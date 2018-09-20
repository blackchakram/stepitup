var $banner = $('.banner');
var $bannertext = $('.bannermessage');
var $loop = false;
var $messagewidth = $bannertext.width();
var $messagetext = $bannertext.html();
var $originalmessage = $bannertext.html();
/*
scrollsetter();
looper();

$(window).resize(function() {
  setstyle();
  $bannertext.html($originalmessage);
  scrollsetter();
  looper();
});
*/





function setstyle () {
  $bannertext.css("position", "absolute");
  $bannertext.css("width", "max-content");
  $bannertext.css("width", "-moz-max-content");
  $bannertext.css("left", "inherit");
  $banner.css("text-align", "inherit");
};


function scrollsetter () {

if ($messagewidth >= $(window).width() - 60) {
  setstyle();

  $messagetext = $bannertext.html();
  $bannertext.append(' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;');

  $messagewidth = $bannertext.width();

  $bannertext.append($messagetext);

  $loop = true;

} else {
  $loop = false;

  $bannertext.css("left", 0);
  $bannertext.css("position", "inherit");
  $bannertext.css("width", "inherit");
  $banner.css("text-align", "center");

}
}

function looper() {
  if ($loop == true) {
    $bannertext.velocity({left: -$messagewidth + 30}, {duration: 7000, easing: "none"});
    $bannertext.velocity({left: 30}, {delay: 1, duration: 1, easing: "none"});
}
}

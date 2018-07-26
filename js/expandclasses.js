/*
Expands or shrinks a classes category to show class offerings
*/

var $expandbutton = $('.expander');

$expandbutton.click(function(){
  console.log($(this));
  if ($(this).hasClass('opened')) {
    $(this).next().velocity({height: 0},{duration: 400});
    $(this).removeClass('opened');

    $(this).find('.exptext').html("");
    $(this).find('.exptext').append("EXPAND");
    $(this).find('.far').removeClass('fa-caret-square-down');
    $(this).find('.far').addClass('fa-caret-square-right');
  } else {
    $(this).next().css("height", "auto");
    var $divheight = $(this).next().height();
    $(this).next().css("height", 0);

    $(this).addClass('opened');
    $(this).next().velocity({height: $divheight},{duration: 400});

    $(this).find('.exptext').html("");
    $(this).find('.exptext').append("COLLAPSE");
    $(this).find('.far').removeClass('fa-caret-square-right');
    $(this).find('.far').addClass('fa-caret-square-down');
  }
});

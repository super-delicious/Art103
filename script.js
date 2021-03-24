
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      console.log("OK");
    } else {
      $('.nav').removeClass('affix');
    }
  });
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

  $(function() {
    if ($('.nav>ul>li').hasClass('selected')) {
      $('.selected').addClass('active');
      var currentleft = $('.selected').position().left + "px";
      var currentwidth = $('.selected').css('width');
      $('.lamp').css({
        "left": currentleft,
        "width": currentwidth
      });
    } else {
      $('.nav>ul>li').first().addClass('active');
      var currentleft = $('.active').position().left + "px";
      var currentwidth = $('.active').css('width');
      $('.lamp').css({
        "left": currentleft,
        "width": currentwidth
      });
    }
    $('.nav>ul>li').hover(function() {
      $('.nav ul li').removeClass('active');
      $(this).addClass('active');
      var currentleft = $('.active').position().left + "px";
      var currentwidth = $('.active').css('width');
      $('.lamp').css({
        "left": currentleft,
        "width": currentwidth
      });
    }, function() {
      if ($('.nav>ul>li').hasClass('selected')) {
        $('.selected').addClass('active');
        var currentleft = $('.selected').position().left + "px";
        var currentwidth = $('.selected').css('width');
        $('.lamp').css({
          "left": currentleft,
          "width": currentwidth
        });
      } else {
        $('.nav>ul>li').first().addClass('active');
        var currentleft = $('.active').position().left + "px";
        var currentwidth = $('.active').css('width');
        $('.lamp').css({
          "left": currentleft,
          "width": currentwidth
        });
      }
    });
  });

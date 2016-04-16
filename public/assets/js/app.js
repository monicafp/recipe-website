$(document).ready(function() {
  // Init
  $.get('home.html', function(data) {
    $('#content').html(data);
  });

  // Links
  $('#home').on('click', function() {
    $.get('home.html', function(data) {
      $('#content').html(data);
    });
  });

  $('#about').on('click', function() {
    $.get('about.html', function(data) {
      $('#content').html(data);
    });
  });

  // Events that need to be listened upon change

  $(window).scroll(function() {
    if ($(window).scrollTop() > ($(window).height() * 0.73)) {
      $('#navigation').css('background-color', '#01455e');
    } else {
      $('#navigation').css('background-color', 'transparent');
    }
  });

});

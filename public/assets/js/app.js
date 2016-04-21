$(document).ready(function() {
  // Init
  $.get('home.html', function(data) {
    $('#content').html(data);
  });

  // Links
  $('#brand').on('click', function() {
    $.get('home.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').removeClass('header-height-helper');
    });
  });

  $('#about').on('click', function() {
    $.get('about.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
    });
  });

  $('#contact').on('click', function() {
    $.get('contact.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
    });
  });

  // Events that need to be listened upon change

  $(window).scroll(function() {
    if ($(window).scrollTop() > ($(window).height() * 0.73)) {
      $('#navigation').css('background-color', '#013008');
    } else {
      $('#navigation').css('background-color', 'transparent');
    }
  });

});

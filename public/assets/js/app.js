$(document).ready(function() {
  var percent = 0.73;
  // Init
  $.get('home.html', function(data) {
    $('#content').html(data);
    $('#search-box').hide();
  });

  // Links
  $('#brand').on('click', function() {
    $.get('home.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').removeClass('header-height-helper');
      percent = 0.73;
    });
  });

  $('#about').on('click', function() {
    $.get('about.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
    });
  });

  $('#contact').on('click', function() {
    $.get('contact.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.42;
    });
  });

  // Events that need to be listened upon change

  $(window).scroll(function() {
    if ($(window).scrollTop() > ($(window).height() * percent)) {
      $('#navigation').css('background-color', '#013008');
    } else {
      $('#navigation').css('background-color', 'transparent');
    }
  });

  $('.navbar-nav li a').on('click', function() {
    $('.active').removeClass('active');
    $(this).toggleClass('active');
  });

  $('#search-button').on('click', function() {
    $('#search-box').toggle('400');
  });


});

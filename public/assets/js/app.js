$(document).ready(function() {

  var percent = 0.73;

  // Init
  $.get('home.html', function(data) {
    $('#content').html(data);
    $('#search-box').hide();
    if ($(window).width() < 768) {
      $('#navigation').css('background-color', '#013008');
    } else {
      $('#navigation').css('background-color', 'transparent');
    };
    $('#brand-image-words').hide();
  });

  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('#navigation').css('background-color', '#013008');
    } else {
      if (!($(window).scrollTop() > ($(window).height() * percent))) {
        $('#navigation').css('background-color', 'transparent');
      }
    };
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

  $('#dropdown-li').on('click', function() {
    $.get('todas.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
    });
  });

  $('#desayuno').on('click', function() {
    $.get('desayuno.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
    });
  });

  $('#almuerzo-cena').on('click', function() {
    $.get('almuerzo-cena.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
    });
  });

  $('#postre').on('click', function() {
    $.get('postre.html', function(data) {
      $('#content').html(data);
      $('#header-image-back').addClass('header-height-helper');
      percent = 0.43;
    });
  });

  $('#bebidas').on('click', function() {
    $.get('bebidas.html', function(data) {
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

  $('#contact-footer').on('click', function() {
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
      $('#brand-image-words').show();
    } else {
      if ($(window).width() > 768) {
        $('#navigation').css('background-color', 'transparent');
        $('#brand-image-words').hide();
      }
    }
  });

  $('.navbar-nav li a, #brand').on('click', function() {
    $('.active').removeClass('active');
    $(this).toggleClass('active');
  });

  $('#search-button').on('click', function() {
    $('#search-box').toggle('400');
  });

  $('#contact-footer').on('click', function() {
    $('.active').removeClass('active');
    $('#contact').toggleClass('active');
  });

  $('.navbar-nav li a').on('click', function() {
    $('.navbar-collapse').removeClass('in');
  });

  /// trials for dropdown issue on mobile view


  //  if ($(window).width() < 768) {
  //    $('.navbar-nav li a').on('click', function(){
  //       $('.navbar-collapse').addClass('in');
  //       });
  //         $('.navbar-nav li a').on('click', function(){
  //            $('.navbar-collapse').removeClass('in')
  //         });
  //    } else {
  //    };


  //    $('#dropdown-li').on('click', function(){
  //        $('#dropdown-li').attr('aria-expanded', 'true');
  //      $('li.dropdow').addClass('open');
  //      });



  /// end trials for dropdown issue on mobile view

});

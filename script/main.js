//MENU VERBERGEN
$("#exit").click(function() {
  $('.container').toggleClass('container-hidden');
  $('.menu-title').toggleClass('menu-title-vissible');
  $('.header-image').toggleClass('header-image-hidden');
  $('.container-nav').toggleClass('container-nav-hidden');
  $('.background-image-blur').toggleClass('background-image-blur-gone');
});

//MENU SHOWEN
$("#show").click(function() {
  $('.container').toggleClass('container-hidden');
  $('.menu-title').toggleClass('menu-title-vissible');
  $('.header-image').toggleClass('header-image-hidden');
  $('.container-nav').toggleClass('container-nav-hidden');
  $('.background-image-blur').toggleClass('background-image-blur-gone');
});

//MENU VERGROTEN
$("#zoom").click(function() {
  $('.container').toggleClass('container-bigger');
  $("#exit").click(function() {
    $('.container').removeClass('container-bigger').addClass('container');
  });
});

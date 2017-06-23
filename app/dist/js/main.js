$(document).ready(function(){
  var options = [
   {selector: '.card1', offset: 200, callback: function(el){
     Materialize.toast("this is scrollFire", 1500);
   }  },
   {selector: '.card2', offset: 200, callback: function() {
     customCallbackFunc();
   } },
  ];
  Materialize.scrollFire(options);

  $('.slider').slider();
  $('.parallax').parallax();
  $(".button-collapse").sideNav();

  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
      }, 1000, 'swing', function(){
        window.location.hash = target;
        });
    });


});

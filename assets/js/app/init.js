(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.scrollspy').scrollSpy({
      scrollParent: window,
       offsetTop: 0
  	});
  }); // end of document ready
})(jQuery); // end of jQuery name space

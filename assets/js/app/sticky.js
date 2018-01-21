$(document).ready(function(){

    var trigger = $('.sticky');

    if(trigger.length){

        var origOffsetY = trigger.offset().top;

        function scroll() {

            if ( $(window).scrollTop() > origOffsetY) {
                trigger.addClass('fixed');
            }
            else {
              trigger.removeClass('fixed');
            }



        }


        scroll();

        $(window).scroll(function(){
            scroll();
        });
    }



    function scrollToTop() {

      if($("#scroll-top").length){
        if ( $(window).scrollTop() > 10) {
            $("#scroll-top").fadeIn();
        }
        else{
          $("#scroll-top").fadeOut();
        }
      }
    }


    scrollToTop();

    $(window).scroll(function(){
        scrollToTop();
    });
});

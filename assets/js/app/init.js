(function($){
  $(function(){

    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });


    function searchText(){
      var text = $("#search").val();
        var div =  $("div:contains("+ text +")");
        var anchorTag = div.children('h1').eq(0);
        var anchorId = $(anchorTag).attr("id");

        console.log(anchorId);
        $(document).scrollTop(anchorTag.offset().top);
    }

    $("#search").change(function(){
      searchText();
    });

    $('#search').keypress(function(event){

    	var keycode = (event.keyCode ? event.keyCode : event.which);
    	if(keycode == '13'){
        searchText();
    	}
    	event.stopPropagation();
    });
    $('.materialboxed').materialbox();
    $('.button-collapse').sideNav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
    $('.scrollspy').scrollSpy();


    $('.wiggle').hover(function(){
      $('.wiggle').removeClass('animated bounce');
      $(this).addClass('animated bounce');
    });

    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var top_to_object = $(this).offset().top - 265;
            var distance_to_top = $(window).scrollTop();

            /* If the object is completely visible in the window, fade it it */
            if( distance_to_top > top_to_object ){

                $(this).animate({'opacity':'1'});
                $(this).addClass("animated fadeIn");
            }

        });

    });

    $('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if(!a.test(this.href)) {
           $(this).click(function(event) {
               event.preventDefault();
               event.stopPropagation();
               window.open(this.href, '_blank');
           });
       }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

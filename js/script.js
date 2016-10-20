$(document).ready(function(e) {
    // code jquery
 pos = $(".navbar").position();

 $(window).scroll(function(){
 	var posScroll = $(document).scrollTop();
 	if(parseInt(posScroll) > parseInt(pos.top)){
 		$(".navbar").addClass('fixed');
 	}else{
 		$(".navbar").removeClass('fixed');
 	}
 });
});

//


 //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
});

jQuery(function($) {
		// Typing Intro Init
		$(".typed").typewriter({
			speed: 50
		});

});

;(function($){

    // menu part js

    $('.right-btn').on('click', function(){
        $('#my-nav ul li').fadeToggle(600);
        $('.logo').toggleClass('logo-left');

    })
    $('.right-btn').on('click', function(){
        
    })

    // baner part js

    var mySlider = $('#baner').pogoSlider({
        generateButtons: false
    }).data('plugin_pogoSlider');
    $('.right-icon').on('click',function(){
        mySlider.nextSlide();
    })
    $('.left-icon').on('click',function(){
        mySlider.prevSlide();
    })

})(jQuery);
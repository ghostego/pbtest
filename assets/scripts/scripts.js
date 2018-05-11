$(document).ready(function() {
    var hero    =   $('#hero').offset(),
        size    =   window.innerWidth;
window.addEventListener('resize', function(event){
    hero    =   $('#hero').offset();
    size    =   window.innerWidth;

    if (size > 768){
        $('nav').removeClass('active');
    }
  });
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
        if ($(this).hasClass('open')){
            $('.nav-side').animate({
                right: '0'
            }, 500);
            $('#navbar').css('overflow', 'visible');
            if (size < 992){
                $('body').addClass('noScroll')
                $('#nav-icon3 span').addClass('bg-white');
            }
        } else{
            $('.nav-side').animate({
                right: '-100vw'
            }, 500);
            $('#navbar').css('overflow', 'hidden');
            if (size < 992){
                $('body').removeClass('noScroll')
                $('#nav-icon3 span').removeClass('bg-white');
            }
        }
    });

    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() >= (hero.top - 50)) {
                 $("#navbar").addClass("active");
            } else {
               $("#navbar").removeClass("active");
            }
        });
    });
    

    (function() {

        var spans = $("#above-fold h1 span span"),
        // var spans = $("#above-fold h1 span"),
            quoteIndex = -1;

        
        function showNextQuote() {
            size    =   window.innerWidth;
            ++quoteIndex;
            if( size >= 992 ){
                if ((quoteIndex % spans.length) == 0){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '95px'
                    });
                } else if ((quoteIndex % spans.length) == 1){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '88px'
                    });
                } else if ((quoteIndex % spans.length) == 2){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '123px'
                    });
                } else if ((quoteIndex % spans.length) == 3){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '78px'
                    });
                }
            } else if (size < 992){
                if ((quoteIndex % spans.length) == 0){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '85px'
                    });
                } else if ((quoteIndex % spans.length) == 1){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '80px'
                    });
                } else if ((quoteIndex % spans.length) == 2){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '110px'
                    });
                } else if ((quoteIndex % spans.length) == 3){
                    $('#above-fold h1.quote').animate({
                        'padding-left': '70px'
                    });
                }
            }
            spans.eq(quoteIndex % spans.length)
                .fadeIn(400)
                .delay(2000)
                .fadeOut(400, showNextQuote);
        }
        
        showNextQuote();
        
    })();
    $('.phone-1, .phone-2, .phone-3, .phone-4').on('click', function(){
        if (this.className == "phone-1"){
            $("#hero").animate({
                backgroundColor: "#66cc99"
            }, 500 );
            $('#pbase').removeClass().addClass('body-snb');
        } else if (this.className == "phone-2"){
            $("#hero").animate({
                backgroundColor: "#55cbe7"
            }, 500 );
            $('#pbase').removeClass().addClass('body-cne');
        } else if (this.className == "phone-3"){
            $("#hero").animate({
                backgroundColor: "#666c99"
            }, 500 );
            $('#pbase').removeClass().addClass('body-bng');
        } else if (this.className == "phone-4"){
            $("#hero").animate({
                backgroundColor: "#f1cf5a"
            }, 500 );
            $('#pbase').removeClass().addClass('body-enf');
        }
    })

    var $form   =   $('form.email-form'),
        url     = 'https://script.google.com/macros/s/AKfycbw8ZxUvbGf2vK3yWHlhfYh8IJtwyCAJGdqquFSqL9iAp56YbuA/exec',
        re      = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $('.email-input input').on('input', function(){
        $('.email-input input').removeClass('error');
        $('.error-message').fadeOut();
    })
    $('#submit-form').on('click', function(e) {
    e.preventDefault();
        var email = $('.email-input input').val();
        if(!email.match(re)) {
            $('.email-input input').addClass('error');
            $('.email-input').after('<p class="error-message"><small>Please add a valid email address</small>');
            return false;
        }
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: function(){
            
            $( "#form-sub .abs-cent" ).fadeTo( "slow" , 0, function() {
                $('#form-sub .abs-cent').html('<h3>Thank you for your interest!</h3><p>More info coming soon...</p>').fadeTo("slow", 1);
            });
        }
    });
    })
});

$(document).ready(function() {
    //Fait apparaitre le bouton
    $('body').append('<a href="" class="top_link" title="Revenir en haut de la page"> <img class="svgScrollTop" src="arrow.svg"></img> </a>');
    //Lui donne des propriétés css
    $('.top_link').css({
        'position': 'fixed',
        'right': '20px',
        'bottom': '30px',
        'display': 'none',
        'padding': '20px',
        'background': '#d7ad1a',
        'color': 'black',
        'border-radius': '50%',
        'box-shadow': '0 0 1em black',
        'opacity': '0.9',
        'z-index': '2000'
    });
    //Le fait apparaitre disparaitre
    $(window).scroll(function() {
        var posScroll = $(document).scrollTop();
        if (posScroll > 1)
            $('.top_link').fadeIn(300);
        else
            $('.top_link').fadeOut(300);
    });
    //Animation de la remonté
    $(function() {
        $('.top_link').click(function(e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        });
    });
    $(document).on('click', 'button.clean', function(event) {
        event.preventDefault();
        console.log($(this).attr('id'));
        $('[name="' + $(this).attr('id') + '"]').velocity({ boxShadowBlur: '0px' })
    });
});
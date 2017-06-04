$( () => {
    var slider = $("#carousel");

    $("#btn-next").on('click',function(e) {
        e.preventDefault();
        $('#carousel .slider__listas:first').insertAfter('#carousel .slider__listas:last');
        slider.css('margin-left', '-'+0+'px');
    });
    $("#btn-prev").on('click',function(e) {
        e.preventDefault();
        $('#carousel .slider__listas:last').insertBefore('#carousel .slider__listas:first');
        slider.css('margin-left', '-'+0+'px');
    });

    $('#botones .btn__slider').on('click', (e) => {
        e.preventDefault();
        alert("Bienvenido: "+e);

        console.log(e);
    });

})

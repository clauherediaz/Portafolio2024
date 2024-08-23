$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente")
    });
    $('body').on('dblclick', 'h2', function() {
        $(this).css("color", 'green');
    });
    $('.card-title').click(function() {
        $('.card-text').toggle();
    });
    $('.carousel').carousel({
        interval: false
    })
});
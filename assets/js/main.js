$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('#enviar').click(function() {
        alert("El correo fue enviado correctamente")
    });
    $('.carousel').carousel({
        interval: false
    })
});
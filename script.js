$(document).ready(function(){
                
    $('#cerrar').hide();
    
    $('#abrir').click(function(){
        $('#menu-cortina').animate({
            right: 0
        },300);
        $('#abrir').hide();
        $('#cerrar').show();
        event.preventDefault();
});
                       
$('#cerrar').click(function(){
        $('#menu-cortina').animate({
            right: -499
        },300);
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
});
});
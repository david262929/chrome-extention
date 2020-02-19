$(function(){
    $('#name').keyup(function(){
        $('#name_area').text($('#name').val());
    })
});
$(function() {
$('.single-project').hover(function() { 
    $(this).find('.project-info').fadeIn();
}, function(){
    $(this).find('.project-info').fadeOut();

})
});
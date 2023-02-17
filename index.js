$(".input-text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input-text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})
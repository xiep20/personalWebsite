$(function(){
    $(".clearfix.toggle-sibling").on('click',function(){
        var target = $(this).siblings('.toggle-target');
        if(target.is('.display-none')){
          target.removeClass('display-none')
        }else{
          target.addClass('display-none')
        }
    })
})
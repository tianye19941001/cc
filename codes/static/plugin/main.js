$(function(){
  $('.topBar .btn').on('click',function(){
    if($('.topBar .btn').hasClass('act')){
      $('body').removeClass('open');
      $('.topBar .btn').removeClass('act');
    }else{
      $('body').addClass('open');
      $('.topBar .btn').addClass('act');
    }
  })
});

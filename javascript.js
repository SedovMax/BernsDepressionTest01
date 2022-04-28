$(document).ready(function() {
  $('.question-1').addClass('active'); //===Первое актвное окно======

  $( ".button-1" ).click(function() {
    $('.question-1').removeClass('active');
    $('.question-2').addClass('active');
  });
  $( ".button-2" ).click(function() {
    $('.question-2').removeClass('active');
    $('.question-3').addClass('active');
  });
  $( ".button-3" ).click(function() {
    $('.question-3').removeClass('active');
    $('.question-4').addClass('active');
  });
  $( ".button-4" ).click(function() {
    $('.question-4').removeClass('active');
    $('.question-5').addClass('active');
  });
  $( ".button-5" ).click(function() {
    $('.question-5').removeClass('active');
    $('.question-6').addClass('active');
  });
  $( ".button-6" ).click(function() {
    $('.question-6').removeClass('active');
    $('.question-7').addClass('active');
  });
  $( ".button-7" ).click(function() {
    $('.question-7').removeClass('active');
    $('.question-result').addClass('active');
  });
// ====Переходы по вопросам ===========================================

// ====Логика вычесления ==============================================
  $('.button-1').click(function(){
  	let res = $('input[name="question-1"]:checked').val();
    $('.bd1').text(res);
  });
  $('.button-2').click(function(){
    let res = $('input[name="question-2"]:checked').val();
    $('.bd2').text(res);
  });
  $('.button-3').click(function(){
    let res = $('input[name="question-3"]:checked').val();
    $('.bd3').text(res);
  });
  $('.button-4').click(function(){
    let res = $('input[name="question-4"]:checked').val();
    $('.bd4').text(res);
  });
  $('.button-5').click(function(){
    let res = $('input[name="question-5"]:checked').val();
    $('.bd5').text(res);
  });
  $('.button-6').click(function(){
    let res = $('input[name="question-6"]:checked').val();
    $('.bd6').text(res);
  });
  $('.button-7').click(function(){
    let res = $('input[name="question-7"]:checked').val();
    $('.bd7').text(res);
  });

  $('.button-7').click(function(){
     let b1 = $('.bd1').text();
     let b2 = $('.bd2').text();
     let b3 = $('.bd3').text();
     let b4 = $('.bd4').text();
     let b5 = $('.bd5').text();
     let b6 = $('.bd6').text();
     let b7 = $('.bd7').text();

     let result = parseInt(b1) + parseInt(b2) + parseInt(b3) + parseInt(b4) + parseInt(b5) + parseInt(b6) + parseInt(b7);
     $('.result').text(result);
  });
});

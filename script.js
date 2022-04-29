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
    $('.question-8').addClass('active');
  });
  $( ".button-8" ).click(function() {
    $('.question-8').removeClass('active');
    $('.question-9').addClass('active');
  });
  $( ".button-9" ).click(function() {
    $('.question-9').removeClass('active');
    $('.question-10').addClass('active');
  });
  $( ".button-10" ).click(function() {
    $('.question-10').removeClass('active');
    $('.question-11').addClass('active');
  });
  $( ".button-11" ).click(function() {
    $('.question-11').removeClass('active');
    $('.question-12').addClass('active');
  });
  $( ".button-12" ).click(function() {
    $('.question-12').removeClass('active');
    $('.question-13').addClass('active');
  });
  $( ".button-13" ).click(function() {
    $('.question-13').removeClass('active');
    $('.question-14').addClass('active');
  });
  $( ".button-14" ).click(function() {
    $('.question-14').removeClass('active');
    $('.question-15').addClass('active');
  });
  $( ".button-15" ).click(function() {
    $('.question-15').removeClass('active');
    $('.question-16').addClass('active');
  });
  $( ".button-16" ).click(function() {
    $('.question-16').removeClass('active');
    $('.question-17').addClass('active');
  });
  $( ".button-17" ).click(function() {
    $('.question-17').removeClass('active');
    $('.question-18').addClass('active');
  });
  $( ".button-18" ).click(function() {
    $('.question-18').removeClass('active');
    $('.question-19').addClass('active');
  });
  $( ".button-19" ).click(function() {
    $('.question-19').removeClass('active');
    $('.question-20').addClass('active');
  });
  $( ".button-20" ).click(function() {
    $('.question-20').removeClass('active');
    $('.question-21').addClass('active');
  });
  $( ".button-21" ).click(function() {
    $('.question-21').removeClass('active');
    $('.question-22').addClass('active');
  });
  $( ".button-22" ).click(function() {
    $('.question-22').removeClass('active');
    $('.question-23').addClass('active');
  });
  $( ".button-23" ).click(function() {
    $('.question-23').removeClass('active');
    $('.question-24').addClass('active');
  });
  $( ".button-24" ).click(function() {
    $('.question-24').removeClass('active');
    $('.question-25').addClass('active');
  });
  $( ".button-25" ).click(function() {
    $('.question-25').removeClass('active');
    $('.question-result').addClass('active');
  });
// ====Переходы по вопросам ===========================================

// ====Проверка кнопок=================================================

$('[name*=question-1]').click(function() {
  $(".button-1").removeAttr("disabled");
});
$('[name*=question-2]').click(function() {
  $(".button-2").removeAttr("disabled");
});
$('[name*=question-3]').click(function() {
  $(".button-3").removeAttr("disabled");
});
$('[name*=question-4]').click(function() {
  $(".button-4").removeAttr("disabled");
});
$('[name*=question-5]').click(function() {
  $(".button-5").removeAttr("disabled");
});
$('[name*=question-6]').click(function() {
  $(".button-6").removeAttr("disabled");
});
$('[name*=question-7]').click(function() {
  $(".button-7").removeAttr("disabled");
});
$('[name*=question-8]').click(function() {
  $(".button-8").removeAttr("disabled");
});
$('[name*=question-9]').click(function() {
  $(".button-9").removeAttr("disabled");
});
$('[name*=question-10]').click(function() {
  $(".button-10").removeAttr("disabled");
});
$('[name*=question-11]').click(function() {
  $(".button-11").removeAttr("disabled");
});
$('[name*=question-12]').click(function() {
  $(".button-12").removeAttr("disabled");
});
$('[name*=question-13]').click(function() {
  $(".button-13").removeAttr("disabled");
});
$('[name*=question-14]').click(function() {
  $(".button-14").removeAttr("disabled");
});
$('[name*=question-15]').click(function() {
  $(".button-15").removeAttr("disabled");
});
$('[name*=question-16]').click(function() {
  $(".button-16").removeAttr("disabled");
});
$('[name*=question-17]').click(function() {
  $(".button-17").removeAttr("disabled");
});
$('[name*=question-18]').click(function() {
  $(".button-18").removeAttr("disabled");
});
$('[name*=question-19]').click(function() {
  $(".button-19").removeAttr("disabled");
});
$('[name*=question-20]').click(function() {
  $(".button-20").removeAttr("disabled");
});
$('[name*=question-21]').click(function() {
  $(".button-21").removeAttr("disabled");
});
$('[name*=question-22]').click(function() {
  $(".button-22").removeAttr("disabled");
});
$('[name*=question-23]').click(function() {
  $(".button-23").removeAttr("disabled");
});
$('[name*=question-24]').click(function() {
  $(".button-24").removeAttr("disabled");
});
$('[name*=question-25]').click(function() {
  $(".button-25").removeAttr("disabled");
});


// ====Логика вычесления ==============================================

  $('.button-25').click(function(){
     let b1 = $('input[name="question-1"]:checked').val();
     let b2 = $('input[name="question-2"]:checked').val();
     let b3 = $('input[name="question-3"]:checked').val();
     let b4 = $('input[name="question-4"]:checked').val();
     let b5 = $('input[name="question-5"]:checked').val();
     let b6 = $('input[name="question-6"]:checked').val();
     let b7 = $('input[name="question-7"]:checked').val();
     let b8 = $('input[name="question-8"]:checked').val();
     let b9 = $('input[name="question-9"]:checked').val();
     let b10 = $('input[name="question-10"]:checked').val();
     let b11 = $('input[name="question-11"]:checked').val();
     let b12 = $('input[name="question-12"]:checked').val();
     let b13 = $('input[name="question-13"]:checked').val();
     let b14 = $('input[name="question-14"]:checked').val();
     let b15 = $('input[name="question-15"]:checked').val();
     let b16 = $('input[name="question-16"]:checked').val();
     let b17 = $('input[name="question-17"]:checked').val();
     let b18 = $('input[name="question-18"]:checked').val();
     let b19 = $('input[name="question-19"]:checked').val();
     let b20 = $('input[name="question-20"]:checked').val();
     let b21 = $('input[name="question-21"]:checked').val();
     let b22 = $('input[name="question-22"]:checked').val();
     let b23 = $('input[name="question-23"]:checked').val();
     let b24 = $('input[name="question-24"]:checked').val();
     let b25 = $('input[name="question-25"]:checked').val();

     let result = parseInt(b1) + parseInt(b2) + parseInt(b3) + parseInt(b4) + parseInt(b5) + parseInt(b6) + parseInt(b7) + parseInt(b8) + parseInt(b9) + parseInt(b10) + parseInt(b11) + parseInt(b12) + parseInt(b13) + parseInt(b14) + parseInt(b15) + parseInt(b16) + parseInt(b17) + parseInt(b18) + parseInt(b19) + parseInt(b20) + parseInt(b21) + parseInt(b22) + parseInt(b23) + parseInt(b24) + parseInt(b25);
 //====Логика результата=========================================
     if(result <= 5){
       $('.result').text("0–5 Депрессия отсутствует. Вы набрали: "+ result +" из 100.");
     }
     if(result > 5 && result <= 10){
       $('.result').text("6–10 Нормальное, но несчастливое состояние. Вы набрали: "+ result +" из 100.");
     }
     if(result > 10 && result <= 25){
       $('.result').text("11–25 Слабо выраженная депрессия. Вы набрали: " + result +" из 100.");
     }
     if(result > 25 && result <= 50){
       $('.result').text("26–50 Умеренная депрессия. Вы набрали: " + result +" из 100.");
     }
     if(result > 50 && result <= 75){
       $('.result').text("51–75 Сильно выраженная депрессия. Вы набрали: " + result +" из 100.");
     }
     if(result > 75 && result <= 100){
       $('.result').text("76–100 Крайняя степень депрессии. Вы набрали: " + result +" из 100.");
     }
     bridge.send("VKWebAppJoinGroup", {"group_id": 212988636});
  });
});

$(document).ready(function() {                                          // Активация скрипта при загрузке страницы
  $('.question0').addClass('active');                                   // Первый активный вопрос

// ==== Переходы по вопросам ===========================================

$(document).on('click', '.button', function() {                         // нажатие на кнопку перехода
  let id = $(this).data('id');                                          // переменная id кнопки перехода
  $('[class*="question"]').removeClass('active');                       // деактивация прошлого блока
  $('.question' + id).addClass('active');                               // активация целевого блока
});

// ==== Проверка на состояние кнопок ===================================

$(document).on('click', '.quest', function() {                          // нажатие на вариант вопроса
  let id = $(this).data('id');                                          // переменная id варианта вопроса
  $(".but" + id).removeAttr("disabled");                                // активация кнопки перехода при выборе варианта вопроса
});

// ==== Логика вычесления ==============================================

$(document).on('click', '.result', function() {
  let id = 1;
  let questions = 25;
  let result = 0;

  while (id <= questions)
  {
    let number = $('input[name="question-'+ id +'"]:checked').val();
    result += parseInt(number);
    id++;
  }

 //==== Логика результата ==============================================

    if(result <= 5){
      $('.result').html("<span style='color:Green; font-family: VK-Medium;'>0–5 Депрессия отсутствует. Вы набрали: "+ result + " из 100.</span><br><br><a href='https://vk.me/public212988636' class='diagnostics' target='_blank'>Записаться на консультацию к психологу</a>");
    }
    if(result > 5 && result <= 10){
      $('.result').html("<span style='color:ForestGreen;'>6–10 Нормальное, но несчастливое состояние. Вы набрали: "+ result + " из 100.</span><br><br><a href='https://vk.me/public212988636' class='diagnostics' target='_blank'>Записаться на консультацию к психологу</a>");
    }
    if(result > 10 && result <= 25){
      $('.result').html("<span style='color:Orange; font-family: VK-Medium;'>11–25 Слабо выраженная депрессия. Вы набрали: " + result + " из 100.</span><br><br><a href='https://vk.me/public212988636' class='diagnostics' target='_blank'>Записаться на консультацию к психологу</a>");
    }
    if(result > 25 && result <= 50){
      $('.result').html("<span style='color:DarkOrange; font-family: VK-Medium;'>26–50 Умеренная депрессия. Вы набрали: " + result + " из 100.</span></span><br><br><a href='https://vk.me/public212988636' class='diagnostics' target='_blank'>Записаться на консультацию к психологу</a>");
    }
    if(result > 50 && result <= 75){
      $('.result').html("<span style='color:OrangeRed; font-family: VK-Medium;'>51–75 Сильно выраженная депрессия. Вы набрали: " + result + " из 100.</span><br><br><a href='https://vk.me/public212988636' class='diagnostics' target='_blank'>Записаться на консультацию к психологу</a>");
    }
    if(result > 75 && result <= 100){
      $('.result').html("<span style='color:Red; font-family: VK-Medium;'>76–100 Крайняя степень депрессии. Вы набрали: " + result + " из 100.</span><br><br><a href='https://vk.me/public212988636' class='diagnostics' target='_blank'>Записаться на консультацию к психологу</a>");
    }
       vkBridge.send("VKWebAppJoinGroup", {"group_id": 212988636}); // автоматическое предложение подписаться на группу, если подписан, то ничего не произойдет.
  });
});

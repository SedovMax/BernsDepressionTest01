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
  
 //====Логика результата=========================================
    if(result <= 5){
      $('.result').html("<span style='color:Green; font-family: VK-Medium;'>Вы набрали "+ result + " баллов. Сейчас можно закрыть приложение - интерпретация придет вам в следующем сообщении рассылки.</span><br><br><a onclick='closed();' class='diagnostics'>Закрыть приложение</a>");
    }
  
      function closed() {
       vkBridge.send("VKWebAppClose", {"status": "success"};
      }
  
      vkBridge.send("VKWebAppJoinGroup", {"group_id": 160359504});

      // send to Senler
      vkBridge.send('VKWebAppGetUserInfo')
      .then(data => {
        $.post( "https://sweetpad.ru/sedov/senlerHandler.php", { vk_user_id: data.id, result: result } );
      })
  });
});

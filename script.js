$(document).ready(function() {                                         
  $('.question0').addClass('active');                                  

// ==== Переходы по вопросам ===========================================

$(document).on('click', '.button', function() {                        
  let id = $(this).data('id');                                      
  $('[class*="question"]').removeClass('active');                       
  $('.question' + id).addClass('active');                              
});

// ==== Проверка на состояние кнопок ===================================

$(document).on('click', '.quest', function() {                          
  let id = $(this).data('id');                                         
  $(".but" + id).removeAttr("disabled");                                
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
  
 //===Склонение==================================================
  
  function num_word(value, words)
  {
    
	value = Math.abs(value) % 100;
    
	let num = value % 10;
    
	if(value > 10 && value < 20) return words[2]; 
	if(num > 1 && num < 5) return words[1];
	if(num == 1) return words[0];
    
	return words[2];
    
  }
  
  let ball = num_word(result, ['балл', 'балла', 'баллов']);
  
 //====Логика результата=========================================
  
	
      function close() {
      location.reload();
      vkBridge.send("VKWebAppClose", {"status": "success", "payload": 0 });
      }

      $('.result').html("<span style='color:blue; font-family: VK-Medium;'>Вы набрали "+ result + " "+ ball +".</span><br><span style='color:blue; margin-top:10px;'>Сейчас можно закрыть приложение - интерпретация придет вам в следующем сообщении рассылки.</span><br><br><button onclick='close()' class='diagnostics'>Закрыть приложение</button>");
  
//       $(document).on('click', '.diagnostics', function() {
// 	location.reload();
// 	vkBridge.send("VKWebAppClose", {"status": "success", "payload": 0 });
//       });
	
  
      vkBridge.send("VKWebAppJoinGroup", {"group_id": 160359504});

      // send to Senler
      vkBridge.send('VKWebAppGetUserInfo')
      .then(data => {
        $.post( "https://sweetpad.ru/sedov/senlerHandler.php", { vk_user_id: data.id, result: result } );
      })
  });
});

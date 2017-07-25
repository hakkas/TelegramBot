var telegram = require('telegram-bot-api');
var api = new telegram({
	token: '421511573:AAEuIpP0J9ImJCoWMgh_5vke6rxaT-Rj0ZA',
  updates: {
    enabled: true,
    get_interval: 1000
  }
});

api.on('message', function(message)
{
	var chat_id = message.chat.id;

	// It'd be good to check received message type here
	// And react accordingly
	// We consider that only text messages can be received here

  api.sendPhoto({
  	chat_id: chat_id,
  	caption: 'This is my test image',

  	// you can also send file_id here as string (as described in telegram bot api documentation)
  	photo: 'mauritskade58.jpg'
  })
  .then(function(data)
  {
  	console.log("Gelukt");
  })
  .catch(function(err)
  {
  	console.log(err);
  });
});

/*
*/

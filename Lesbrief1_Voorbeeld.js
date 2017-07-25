const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '421511573:AAEuIpP0J9ImJCoWMgh_5vke6rxaT-Rj0ZA' // Required. Telegram Bot API token.
});

bot.on('/start', (msg) => {
  return bot.sendMessage(msg.from.id, "Welkom maatje!");
});

bot.start();

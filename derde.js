const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '421511573:AAEuIpP0J9ImJCoWMgh_5vke6rxaT-Rj0ZA', // Required. Telegram Bot API token.
});

//bot.on('text', (msg) => msg.reply.text(msg.text));

bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});

bot.on('/hello', function (msg) {
  return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

bot.on('/historie', (msg) => {
  return bot.sendPhoto(msg.from.id, "mauritskade58.jpg", { replyToMessage: msg.message_id }); // sendPhoto(<chat_id>, <file_id | path | url | buffer | stream>, {caption, fileName, serverDownload, replyToMessage, replyMarkup, notification})
});

bot.start();

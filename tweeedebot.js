const TelegramBotClient = require('api-telegram-bot');
const bodyparser = require('body-parser');
const express = require('express');

const expressApp = express();
// when you create your own express app, you must to set bodyparser middleware, otherwise webhook will not work
expressApp.use(bodyparser.json());

expressApp.get('/myroute', (req, res)=>{
    res.end('hi :)');
});

const token = '421511573:AAEuIpP0J9ImJCoWMgh_5vke6rxaT-Rj0ZA';
const port = 8080; // process.env.PORT;
const path = '/';

const bot = new TelegramBotClient (token);

bot.createWebhook({ expressApp, path, port });

// callback will be called for every text message that matches with regex
bot.onRegex(/\/start/, (message, reply)=>{
    reply('hello');
});

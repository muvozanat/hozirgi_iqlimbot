require('dotenv').config();
const { Telegraf } = require('telegraf'),
    express = require('express'),
    ilova = express(),
    axios = require('axios'),
    token = process.env.TOKEN,
    port = process.env.PORT,
    bot = new Telegraf(token),
    start = require('./manba/start'),
    matn = require('./manba/xabar'),
    funksiya = require('./manba/funksiya'),
    obekt = {};

ilova.get('/', (sor, jav) => {
    jav.send("Bot ishlamoqda")
    console.log(`Bot localhost:${port} da ishlamoqda...`)
})

ilova.listen(port, () => {
    console.log(`Serverning ${port} da ishlayapti`)
})

start(bot);
matn(bot);
funksiya(bot);

bot.launch();
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

bot
    .launch({
      polling: {
        allowedUpdates: [
          'callback_query',
          'chosen_inline_result',
          'edited_message',
          'inline_query',
          'message',
          'poll',
          'poll_answer',
          'chat_member',
        ] as any,
      },
    })
    .then(() => {
      console.info('Bot on the main thread is up and running')
    })
    .catch(report)
}

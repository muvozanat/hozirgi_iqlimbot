
module.exports = (bot) => {
    bot.command('start', (ctx) => {
        let chaId = ctx.chat.id;
        ctx.telegram.sendChatAction(chaId, "typing")
            .then(ch => console.log(ch))
            .catch(xatolik => console.log(xatolik));
        ctx.telegram.sendMessage(chaId, "Assalomu alaykum manzilni tanlang:",
            {
                reply_to_message_id: ctx.message.message_id,
                reply_markup: {
                    keyboard: [
                        [
                            { text: 'Andijon' },
                            { text: 'Buxoro' },
                            { text: 'Fargʻona' }
                        ],
                        [
                            { text: 'Jizzax' },
                            { text: 'Namangan' },
                            { text: 'Navoiy' }
                        ],
                        [
                            { text: 'Nukus' },
                            { text: 'Qashqadaryo' },
                            { text: 'Samarqand' }
                        ],
                        [
                            { text: 'Sirdaryo' },
                            { text: 'Surxondaryo' },
                            { text: 'Toshkent' }
                        ],
                        [
                            { text: 'Xorazm' }
                        ]
                    ],
                    resize_keyboard: true
                }
            })
    
    
    })


}
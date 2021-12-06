const hudud = require('./hududlar.json');

module.exports = (bot, ctx) => {
    
    switch (ctx.message.text) {
        case 'Andijon':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Andijon viloyati'][0][0]}`, callback_data: `${hudud['Andijon viloyati'][0][0]}` },
                            { text: `${hudud['Andijon viloyati'][0][1]}`, callback_data: `${hudud['Andijon viloyati'][0][1]}` }
                        ],
                        [
                            { text: `${hudud['Andijon viloyati'][0][2]}`, callback_data: `${hudud['Andijon viloyati'][0][2]}` },
                            { text: `${hudud['Andijon viloyati'][0][3]}`, callback_data: `${hudud['Andijon viloyati'][0][3]}` }
                        ],
                        [
                            { text: `${hudud['Andijon viloyati'][0][4]}`, callback_data: `${hudud['Andijon viloyati'][0][4]}` },
                            { text: `${hudud['Andijon viloyati'][0][5]}`, callback_data: `${hudud['Andijon viloyati'][0][5]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Nukus':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Qoraqalpogʻiston'][0][0]}`, callback_data: `${hudud['Qoraqalpogʻiston'][0][0]}` },
                            { text: `${hudud['Qoraqalpogʻiston'][0][1]}`, callback_data: `${hudud['Qoraqalpogʻiston'][0][1]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Buxoro':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Buxoro viloyati'][0][0]}`, callback_data: `${hudud['Buxoro viloyati'][0][0]}` },
                            { text: `${hudud['Buxoro viloyati'][0][1]}`, callback_data: `${hudud['Buxoro viloyati'][0][1]}` },
                            { text: `${hudud['Buxoro viloyati'][0][2]}`, callback_data: `${hudud['Buxoro viloyati'][0][2]}` }
                        ],
                        [
                            { text: `${hudud['Buxoro viloyati'][0][3]}`, callback_data: `${hudud['Buxoro viloyati'][0][3]}` },
                            { text: `${hudud['Buxoro viloyati'][0][4]}`, callback_data: `${hudud['Buxoro viloyati'][0][4]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Jizzax':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Jizzax viloyati'][0][0]}`, callback_data: `${hudud['Jizzax viloyati'][0][0]}` },
                            { text: `${hudud['Jizzax viloyati'][0][1]}`, callback_data: `${hudud['Jizzax viloyati'][0][1]}` },
                            { text: `${hudud['Jizzax viloyati'][0][2]}`, callback_data: `${hudud['Jizzax viloyati'][0][2]}` }
                        ],
                        [
                            { text: `${hudud['Jizzax viloyati'][0][3]}`, callback_data: `${hudud['Jizzax viloyati'][0][3]}` },
                            { text: `${hudud['Jizzax viloyati'][0][4]}`, callback_data: `${hudud['Jizzax viloyati'][0][4]}` },
                            { text: `${hudud['Jizzax viloyati'][0][5]}`, callback_data: `${hudud['Jizzax viloyati'][0][5]}` },
                            { text: `${hudud['Jizzax viloyati'][0][6]}`, callback_data: `${hudud['Jizzax viloyati'][0][6]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Fargʻona':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Fargʻona viloyati'][0][0]}`, callback_data: `${hudud['Fargʻona viloyati'][0][0]}` },
                            { text: `${hudud['Fargʻona viloyati'][0][1]}`, callback_data: `${hudud['Fargʻona viloyati'][0][1]}` },
                            { text: `${hudud['Fargʻona viloyati'][0][2]}`, callback_data: `${hudud['Fargʻona viloyati'][0][2]}` }
                        ],
                        [
                            { text: `${hudud['Fargʻona viloyati'][0][3]}`, callback_data: `${hudud['Fargʻona viloyati'][0][3]}` },
                            { text: `${hudud['Fargʻona viloyati'][0][4]}`, callback_data: `${hudud['Fargʻona viloyati'][0][4]}` },
                            { text: `${hudud['Fargʻona viloyati'][0][5]}`, callback_data: `${hudud['Fargʻona viloyati'][0][5]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Namangan':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Namangan viloyati'][0][0]}`, callback_data: `${hudud['Namangan viloyati'][0][0]}` },
                            { text: `${hudud['Namangan viloyati'][0][1]}`, callback_data: `${hudud['Namangan viloyati'][0][1]}` },

                        ],
                        [
                            { text: `${hudud['Namangan viloyati'][0][2]}`, callback_data: `${hudud['Namangan viloyati'][0][2]}` },
                            { text: `${hudud['Namangan viloyati'][0][3]}`, callback_data: `${hudud['Namangan viloyati'][0][3]}` },
                            { text: `${hudud['Namangan viloyati'][0][4]}`, callback_data: `${hudud['Namangan viloyati'][0][4]}` },

                        ],
                        [
                            { text: `${hudud['Namangan viloyati'][0][5]}`, callback_data: `${hudud['Namangan viloyati'][0][5]}` },
                            { text: `${hudud['Namangan viloyati'][0][6]}`, callback_data: `${hudud['Namangan viloyati'][0][6]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Navoiy':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Navoiy viloyati'][0][0]}`, callback_data: `${hudud['Navoiy viloyati'][0][0]}` },
                            { text: `${hudud['Navoiy viloyati'][0][1]}`, callback_data: `${hudud['Navoiy viloyati'][0][1]}` },

                        ],
                        [
                            { text: `${hudud['Navoiy viloyati'][0][2]}`, callback_data: `${hudud['Navoiy viloyati'][0][2]}` },
                            { text: `${hudud['Navoiy viloyati'][0][3]}`, callback_data: `${hudud['Navoiy viloyati'][0][3]}` },
                            { text: `${hudud['Navoiy viloyati'][0][4]}`, callback_data: `${hudud['Navoiy viloyati'][0][4]}` },

                        ],
                        [
                            { text: `${hudud['Navoiy viloyati'][0][5]}`, callback_data: `${hudud['Navoiy viloyati'][0][5]}` },
                            { text: `${hudud['Navoiy viloyati'][0][6]}`, callback_data: `${hudud['Navoiy viloyati'][0][6]}` }
                        ],
                        [
                            { text: `${hudud['Navoiy viloyati'][0][7]}`, callback_data: `${hudud['Navoiy viloyati'][0][7]}` },
                            { text: `${hudud['Navoiy viloyati'][0][8]}`, callback_data: `${hudud['Navoiy viloyati'][0][8]}` },
                            { text: `${hudud['Navoiy viloyati'][0][9]}`, callback_data: `${hudud['Navoiy viloyati'][0][9]}` }
                        ],
                        [
                            { text: `${hudud['Navoiy viloyati'][0][10]}`, callback_data: `${hudud['Navoiy viloyati'][0][10]}` },
                            { text: `${hudud['Navoiy viloyati'][0][11]}`, callback_data: `${hudud['Navoiy viloyati'][0][11]}` },
                            { text: `${hudud['Navoiy viloyati'][0][12]}`, callback_data: `${hudud['Navoiy viloyati'][0][12]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Qashqadaryo':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Qashqadaryo viloyati'][0][0]}`, callback_data: `${hudud['Qashqadaryo viloyati'][0][0]}` },
                            { text: `${hudud['Qashqadaryo viloyati'][0][1]}`, callback_data: `${hudud['Qashqadaryo viloyati'][0][1]}` },
                            { text: `${hudud['Qashqadaryo viloyati'][0][2]}`, callback_data: `${hudud['Qashqadaryo viloyati'][0][2]}` }
                        ],
                        [
                            { text: `${hudud['Qashqadaryo viloyati'][0][3]}`, callback_data: `${hudud['Qashqadaryo viloyati'][0][3]}` },
                            { text: `${hudud['Qashqadaryo viloyati'][0][4]}`, callback_data: `${hudud['Qashqadaryo viloyati'][0][4]}` },
                            { text: `${hudud['Qashqadaryo viloyati'][0][5]}`, callback_data: `${hudud['Qashqadaryo viloyati'][0][5]}` }
                        ]

                    ]
                }
            }
            break;

        case 'Samarqand':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Samarqand viloyati'][0][0]}`, callback_data: `${hudud['Samarqand viloyati'][0][0]}` },
                            { text: `${hudud['Samarqand viloyati'][0][1]}`, callback_data: `${hudud['Samarqand viloyati'][0][1]}` }

                        ],
                        [{ text: `${hudud['Samarqand viloyati'][0][2]}`, callback_data: `${hudud['Samarqand viloyati'][0][2]}` },
                        { text: `${hudud['Samarqand viloyati'][0][3]}`, callback_data: `${hudud['Samarqand viloyati'][0][3]}` }
                        ]

                    ]
                }
            }
            break;

        case 'Sirdaryo':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Sirdaryo viloyati'][0][0]}`, callback_data: `${hudud['Sirdaryo viloyati'][0][0]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Surxondaryo':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Surxondaryo viloyati'][0][0]}`, callback_data: `${hudud['Surxondaryo viloyati'][0][0]}` },
                            { text: `${hudud['Surxondaryo viloyati'][0][1]}`, callback_data: `${hudud['Surxondaryo viloyati'][0][1]}` },
                            { text: `${hudud['Surxondaryo viloyati'][0][2]}`, callback_data: `${hudud['Surxondaryo viloyati'][0][2]}` }
                        ],
                        [
                            { text: `${hudud['Surxondaryo viloyati'][0][3]}`, callback_data: `${hudud['Surxondaryo viloyati'][0][3]}` },
                            { text: `${hudud['Surxondaryo viloyati'][0][4]}`, callback_data: `${hudud['Surxondaryo viloyati'][0][4]}` },
                            { text: `${hudud['Surxondaryo viloyati'][0][5]}`, callback_data: `${hudud['Surxondaryo viloyati'][0][5]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Toshkent':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Toshkent viloyati'][0][0]}`, callback_data: `${hudud['Toshkent viloyati'][0][0]}` },
                            { text: `${hudud['Toshkent viloyati'][0][1]}`, callback_data: `${hudud['Toshkent viloyati'][0][1]}` },
                            { text: `${hudud['Toshkent viloyati'][0][2]}`, callback_data: `${hudud['Toshkent viloyati'][0][2]}` }
                        ]
                    ]
                }
            }
            break;

        case 'Xorazm':
            return {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `${hudud['Xorazm viloyati'][0][0]}`, callback_data: `${hudud['Xorazm viloyati'][0][0]}` },
                            { text: `${hudud['Xorazm viloyati'][0][1]}`, callback_data: `${hudud['Xorazm viloyati'][0][1]}` },
                            { text: `${hudud['Xorazm viloyati'][0][2]}`, callback_data: `${hudud['Xorazm viloyati'][0][2]}` }
                        ],
                        [
                            { text: `${hudud['Xorazm viloyati'][0][3]}`, callback_data: `${hudud['Xorazm viloyati'][0][3]}` },
                            { text: `${hudud['Xorazm viloyati'][0][4]}`, callback_data: `${hudud['Xorazm viloyati'][0][4]}` },
                            { text: `${hudud['Xorazm viloyati'][0][5]}`, callback_data: `${hudud['Xorazm viloyati'][0][5]}` }
                        ]
                    ]
                }
            }
            break;
        
        default:
            break;
    }
}
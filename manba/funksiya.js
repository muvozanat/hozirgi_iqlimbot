const axios = require('axios');

module.exports = (bot) => {

    let xu = ["Nukus", "Nurota", "Xiva", "Urganch", "Xazоrasp",
    "Xоnqa", "Yangibоzоr", "Shоvоt", "Navoiy", "O'g'iz", "Tоmdi", "Kоnimex",
    "Qiziltepa", "Zarafshоn", "Uchquduq", "To'rtko'l", "Taxtako'pir", "Chimboy", "Mo'ynоq",
    "Shumanay", "Qo'ng'irоt", "Buxoro", "Оlоt", "Gazli", "Qоrоvulbоzоr", "Qоrako'l",
    "Samarqand", "Jomboy", "Kattaqo'rg'on", "Urgut", "Qarshi", "Dehqоnоbоd", "G'uzоr", "Kоsоn", "Tallimarjоn", "Mubоrak",
    "Denov", "Uzunquduq", "Termiz", "Qumqo'rg'оn", "Bоysun", "Sherоbоd", "Jizzax",
    "Zоmin", "Do'stlik", "Arnasоy", "O'smat", "G'allaоrоl", "Uchtepa", "Guliston", "Bekobod", "Angren", "Burchmulla", "Namangan",
    "Pop", "Chust", "Kоsоnsоy", "Chоrtоq", "Uchqo'rg'оn", "Mingbulоq", "Marg'ilon", "Qo'qon", "Farg'оna", "Oltiariq", "Rishton", "Quva",
    "Shaxrixon", "Xo'jaоbоd", "Paxtaоbоd", "Оltinko'l", "Qo'rg'оntepa", "Xоnоbоd", "Bulоqbоshi"]

bot.action(xu, async (ctx) => {
    bot.telegram.sendChatAction(ctx.chat.id, "typing");
    ctx.state.manzil = ctx.match['input']
    apiS(ctx, ctx.state.manzil)
})

function apiS(ctx, l) {
    axios.get(
        `https://namozvaqti.herokuapp.com/api/present/day`,
        {
            params: {
                region: l,
            }
        }).then(
            (res) => {
                let data = res.data
                let matn = `
📅 <b>Kun:</b> ${data.date}, ${data.weekday}
                
☪️ <b>Bomdod: </b> ${data.times.tong_saharlik}
                
☪️ <b>Peshin: </b> ${data.times.peshin}
                
☪️ <b>Asr: </b> ${data.times.asr}
                
☪️ <b>Shom: </b> ${data.times.shom_iftor}
                
☪️ <b>Xufton: </b> ${data.times.hufton}
                
                
🏠 <b>Xudud: </b> ${data.region}`

                ctx.replyWithHTML(matn)
            }

        )
}
    
}
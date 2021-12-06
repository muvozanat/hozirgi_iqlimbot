const axios = require('axios'),
    obyekt = {};
const hudud = require('./hududlar');

module.exports = (bot) => {
    bot.on('message', (ctx) => {
        let tekst = gek(ctx.message.text);
        function gek(k) {
            if (k) {
    
                k = k.toLowerCase();
                return k;
            } else {
                return k
            }
        }
        
        switch (tekst) {
            case `andijon`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 40.8154, 72.2837)
                break;
    
            case `buxoro`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 39.7681, 64.4556)
                break;
    
            case `fargʻona`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 40.3734, 71.7978)
                break;
            case `farg'ona`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 40.3734, 71.7978)
                break;
            case `fargona`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 40.3734, 71.7978)
                break;
    
            case `jizzax`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 40.1250, 67.8808)
                break;
    
            case `namangan`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 41.0058, 71.6436)
                break;
    
            case `navoiy`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 40.1039, 65.3688)
                break;
    
            case `nukus`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 42.4619, 59.6166)
                break;
    
            case `qashqadaryo`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 38.8986, 66.0464)
                break;
    
            case `samarqand`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 39.6270, 66.9750)
                break;
    
            case `sirdaryo`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 40.8373, 68.6618)
                break;
    
            case `surxondaryo`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 37.9409, 67.5709)
                break;
    
            case `toshkent`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 41.2995, 69.2401)
                break;
    
            case `xorazm`:
                ctx.telegram.sendChatAction(ctx.chat.id, "typing");
                obXavoMalumoti(ctx, 41.3565, 60.8567)
                break;
    
    
            default:
                console.log("adminga yetkazadi");
                break;
        }
    })
    

    function obXavoMalumoti(ctx, lat, lon) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=85221fffafd5b9d1b7579770a0260c53`)
            .then(async (res) => {
    
                obyekt.temp = await res.data.main.temp,
                    obyekt.namlik = await res.data.main.humidity,
                    obyekt.shamol = await res.data.wind.speed,
                    obyekt.quyoshChiqishi = await vaqtSozlash(res.data.sys.sunrise),
                    obyekt.quyoshBotishi = await vaqtSozlash(res.data.sys.sunset),
                    obyekt.soralaganVaqti = await vaqtSozlash(res.data.dt);
                    obyekt.yetibKelganVaqt = await vaqtSozlash(ctx.message.date);
                    obyekt.ikonka = res.data.weather[0].icon;
                    obyekt.nom = (ctx.message.text).charAt(0).toUpperCase() + (ctx.message.text).slice(1)
    
                switch (obyekt.ikonka) {
                    case '01d':
                        obyekt.ikonka = '☀️'
                        break;
    
                    case '01n':
                        obyekt.ikonka = '🌕'
                        break;
    
                    case '02d':
                        obyekt.ikonka = '🌤'
                        break;
    
                    case '02n':
                        obyekt.ikonka = '🌗'
                        break;
    
                    case '03d':
                        obyekt.ikonka = '🌥'
                        break;
    
                    case '03n':
                        obyekt.ikonka = '🌘'
                        break;
    
                    case '04d':
                        obyekt.ikonka = '☁️'
                        break;
    
                    case '04n':
                        obyekt.ikonka = '☁️'
                        break;
    
                    case '09d':
                        obyekt.ikonka = '🌦'
                        break;
    
                    case '09n':
                        obyekt.ikonka = '🌦'
                        break;
    
                    case '10d':
                        obyekt.ikonka = '🌧'
                        break;
    
                    case '10n':
                        obyekt.ikonka = '🌧'
                        break;
    
                    case '11d':
                        obyekt.ikonka = '⛈'
                        break;
    
                    case '11n':
                        obyekt.ikonka = '⛈'
                        break;
    
                    case '13d':
                        obyekt.ikonka = '❄️'
                        break;
    
                    case '13n':
                        obyekt.ikonka = '❄️'
                        break;
    
                    case '50d':
                        obyekt.ikonka = '〰️'
                        break;
    
                    case '50n':
                        obyekt.ikonka = '〰️'
                        break;
    
                    default:
                        obyekt.ikonka = '🌫'
                        break;
                }
                var matn = `
<b>${obyekt.ikonka} ${obyekt.nom}da xarorat : </b>  ${obyekt.temp} °C
          
<b>🌬 Shamol tezligi : </b> ${obyekt.shamol} m/s
          
<b>💧 Xavoning namligi : </b> ${obyekt.namlik}%
          
<b>🌅 Quyosh chiqish vaqti : </b> ${obyekt.quyoshChiqishi}
          
<b>🌇 Quyosh botish vaqti : </b> ${obyekt.quyoshBotishi}
          
          
          
🧿 <b>Hududingizdagi namoz vaqtini bilish uchun quyidagi tugmalardan foydalaning</b>
                `;
                bot.telegram.sendMessage(ctx.chat.id, matn, hudud(bot, ctx));
    
            })
            .catch(err => console.log(err))
    }
    
    function vaqtSozlash(z) {
        var date = new Date(z * 1000).toLocaleString('en-US', {
            hour12: false,
            timeZone: 'Asia/Ashgabat'
        });
        var xy = new Date(date)
    
        var hours = soatniTogirlash(xy.getHours()); //GMT O'zbekiston vaqtiga o'zgartirildi
        var minutes = soatniTogirlash(xy.getMinutes());
        var z = hours + ':' + minutes;
        return z;
    }
    
    function soatniTogirlash(y) {
        if (y < 10) return y = '0' + y
        else return y
    }
}
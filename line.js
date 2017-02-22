const util = require('util')
var linebot = require('linebot');
var ngrok = require('ngrok');
var bot = linebot({
    channelId: 1493019959,
    channelSecret: '13838003020965da045015e81473fc0f',
    channelAccessToken: 'SudTKWthzNzAxTkl8kNncy5NrCRnZ5MkyOKK+V729A626MADKvgb7kRh6PoCaZsC45B13GKb+inrIKOUwjdYLHqY9ZKp4kQ0Cun/nI9E7Gd0k69XAOvIDYtpxpqH/HpZPUrVz5LndEiecqdjsAyG0AdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {

console.log("-----------------------------------------------");
    console.log(util.inspect(event, {showHidden: false, depth: null}));
console.log("-----------------------------------------------");
    event.reply(event.message.text).then(function (data) {
        // success
    }).catch(function (error) {
        // error
    });
});

bot.listen('/linewebhook', 3000);
console.log("Running..");
ngrok.connect({
    proto: 'http', // http|tcp|tls
    addr: 3000, // port or network address
    subdomain: 'linex', // reserved tunnel name https://alex.ngrok.io
    authtoken: '2KSr2e5uz48r8R8gDLNDp_7fktADztDNTnaLV2afaEP', // your authtoken from ngrok.com
    region: 'ap' // one of ngrok regions (us, eu, au, ap), defaults to us
}, function (err, url) {});


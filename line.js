const util = require('util')
var linebot = require('linebot');
var ngrok = require('ngrok');
var bot = linebot({
    channelId: 1493019959,
    channelSecret: '',
    channelAccessToken: ''
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
    authtoken: '', // your authtoken from ngrok.com
    region: 'ap' // one of ngrok regions (us, eu, au, ap), defaults to us
}, function (err, url) {
    console.log(url);
});

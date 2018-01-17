const SlackBot = require('slackbots');

const BOT_NAME = 'Slacks or Shorts';
const BOT_TOKEN = 'xoxb-299813567011-eWk4aoqgDKxCnCkOlacxn9T5'; //from slack bot settings
const BOT_HANDLE = 'slacks-or-shorts';

let bot = new SlackBot({
    token: BOT_TOKEN,
    name: BOT_NAME
});

bot.on('start', () => {
    console.log("I'm in!");

    bot.on('message', data => {
        console.log(data);

        if (data.type === 'group_joined') {
            bot.postMessage(data.channel.id, "Hello I'm here to answer all your business fashion questions", { icon_emoji: ':jeans:'});
        }

        if (data.type === 'message' &&
            data.text != null &&
            data.username !== BOT_NAME) {
                switch (data.text) {
                    case 'What should i wear': 
                        say(data.channel, "Today's forecast calls for a slight chance of business casual. I recommend jeans.", { icon_emoji: ':jeans:'});    
                    break;

                    case 'What should I wear tomorrow?':
                        say(data.channel, "Just make sure they are clothes.");
                    break;
                }

                if (/wear/i.test(data.text)) {
                    say(data.channel, "Need some fashion")
                    
                }
        }
    })
}) 
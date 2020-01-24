require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();
const axios = require('axios');

const { BOT_TOKEN, channelID } = process.env;

/* bot.on('message', message => {
    if (message.content.charAt(0) === '!') {
        let pokemon = message.content.split(' ')[1].substring('!');
        console.log(pokemon);
        message.channel.send(genLink(pokemon));
    }
}); */

// When chat messages are received
bot.on('message', message => {
    if (message.content.substring(0, 1) == '!') {
        let command = message.content.substring(1);

        if (command === 'commands') {
            message.channel.send('!hey\n!date');
        } else if (command === 'hey') {
            message.channel.send('Hello!');
        } else if (command === 'date') {
            let today = new Date();
            message.channel.send(
                `${today.getFullYear()}-${today.getMonth() +
                    1}-${today.getDate()}`
            );
        } else if (command === 'poke') {
            console.log(message.content);
            let pokemon = message.content.split(' ');
            console.log(pokemon);
        }
    }
});

bot.once('ready', () => {
    console.log('Ready!');
});

bot.login(BOT_TOKEN);

const genLink = pokemon => {
    if (pokemon === undefined) {
        return;
    } else {
        return `https://bulbapedia.bulbagarden.net/wiki/${pokemon}_(Pokémon)`;
    }
};

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const { BOT_TOKEN } = process.env;

client.on('message', message => {
    // this can happen any number of times
    console.log(message.content);
});

client.once('ready', () => {
    // this only happens once - on login.
    console.log('Ready!');
});

client.login(BOT_TOKEN);

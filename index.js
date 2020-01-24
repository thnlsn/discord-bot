require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const { BOT_TOKEN } = process.env;

client.once('ready', () => {
    console.log('Ready!');
});

client.login(BOT_TOKEN);

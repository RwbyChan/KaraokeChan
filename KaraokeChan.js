/* global process */
global.Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
global.RichEmbed = RichEmbed;
global.fs = require('fs');
const cmds = fs.readdirSync('./commands/');
const functions = require('./functions.js');

// Get config file
global.config;
try {
    config = require('./config.json');
    console.log('Config file loaded!');
} catch (e) {
    console.log(`${e}\n\nError loading config, exiting...`);
    process.exit(0);
}

const client = new Discord.Client();
global.prefix = config.prefix;

// Variables
global.queue = [];
global.lastPlayed = null;

// Events
// Message Event
client.on('message', async function(msg) {

    // Fix member not cached
    if(msg.member == null) {
        await msg.guild.fetchMember(msg.author.id).then(member => {
            msg.member = member;
        });
    }

    if(!msg.content.startsWith(prefix)) return;

    let args = msg.content.slice(prefix.length).trim().split(' ').filter(Boolean);
    let cmd = args.shift().toLowerCase();

    if(msg.channel.id == config.karaokeTextChannel) {
        if(cmds.includes(`${cmd}.js`)) {
            try {
                let commandFile = require(`./commands/${cmd}.js`);
                commandFile.run(client, msg, args, functions);

                return msg.delete();
            } catch (e) {
                console.log(`${e}\n\nError loading command '${cmd}'`);
            }
        }
    }
});

// LOGIN BOT
client.login(config.token);
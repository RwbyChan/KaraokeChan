exports.run = (client, msg, args, functions) => {

    let karaokeHelp = '';
    if(config.enabled) {
        karaokeHelp += `✅ Karaoke is going!\n\n`;
    } else {
        karaokeHelp += `⚠ Karaoke is not going right now! Commands will only work if it is enabled!\n\n`;
    }

    karaokeHelp += "**My commands are:**\n";
	karaokeHelp += "`" + prefix + " join` ➜ join the queue\n";
	karaokeHelp += "`" + prefix + " leave` ➜ leaves the queue\n";
	karaokeHelp += "`" + prefix + " next` ➜ progress the queue\n";
    karaokeHelp += "`" + prefix + " queue` ➜ shows the queue\n";
    
    const embed = new RichEmbed()
    .setTitle('KaraokeChan at your service!')
    .setColor(0xdd0050)
    .setTimestamp()
    .setDescription(karaokeHelp)
    .setFooter(msg.member.displayName, msg.author.avatarURL);

    return msg.channel.send(embed);

};
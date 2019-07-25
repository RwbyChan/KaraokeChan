exports.run = (client, msg, args, functions) => {

    if(config.enabled) {
        if(msg.member.roles.has(config.botManagingRole)) {
            queue.length = 0;
            lastPlayed = null;

            const embed = new RichEmbed()
				.setAuthor(msg.member.displayName, msg.author.avatarURL)
				.setColor("#43B581")
				.setTimestamp()
				.setDescription(`You have cleared the queue!`);
				
			return msg.channel.send(embed);
        }
    } else {
        return functions.sendDisabled(msg);
    }

};
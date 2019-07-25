exports.run = (client, msg, args, functions) => {

    if(msg.member.roles.has(config.botManagingRole)) {
		if(config.enabled) {
            config.enabled = false;
            fs.writeFileSync(`./config.json`, JSON.stringify(config, null, 4));

            queue.length = 0;
			lastPlayed = null;
			const embed = new RichEmbed()
			    .setAuthor(msg.member.displayName, msg.author.avatarURL)
			    .setColor("#43B581")
			    .setTimestamp()
			    .setDescription(`You have ended the karaoke.`);
			
			return msg.channel.send(embed);
        } else {
            const embed = new RichEmbed()
				.setAuthor(msg.member.displayName, msg.author.avatarURL)
				.setColor("#e53935")
				.setTimestamp()
				.setDescription(`There is no karaoke going right now.`);
					
			return msg.channel.send(embed);
        }
    } else {
        return msg.channel.send(new RichEmbed()
			.setAuthor(msg.member.displayName, msg.author.avatarURL)
			.setColor("#e53935")
			.setTimestamp()
			.setDescription('You don\'t have the permissions to stop a karaoke.')
		);
    }

};
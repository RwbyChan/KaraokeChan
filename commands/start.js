exports.run = (client, msg, args, functions) => {

    if(msg.member.roles.has(config.botManagingRole)) {
		if(config.enabled) {
            const embed = new RichEmbed()
				.setAuthor(msg.member.displayName, msg.author.avatarURL)
				.setColor("#e53935")
				.setTimestamp()
				.setDescription(`Karaoke has already been started.`);
				
			return msg.channel.send(embed);
        } else {
            config.enabled = true;
			fs.writeFileSync(`./config.json`, JSON.stringify(config, null, 4))

			const embed = new RichEmbed()
			    .setAuthor(msg.member.displayName, msg.author.avatarURL)
				.setColor("#43B581")
				.setTimestamp()
				.setDescription(`You successfully started the karaoke.`);
					
			return msg.channel.send(embed);
        }
    } else {
        return msg.channel.send(new RichEmbed()
			.setAuthor(msg.member.displayName, msg.author.avatarURL)
			.setColor("#e53935")
			.setTimestamp()
			.setDescription('You don\'t have the permissions to start a karaoke.')
		);
    }

};
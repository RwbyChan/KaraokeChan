exports.run = (client, msg, args, functions) => {

    if(config.enabled) {
        if(msg.member.roles.has(config.botManagingRole)) {
            if(args.length > 1) {
                return msg.channel.send(
					new RichEmbed()
					.setAuthor(msg.member.displayName, msg.author.avatarURL)
					.setColor("#ffac2e")
					.setDescription(`**Usage:** ${prefix}add [@username]`)
				)
            }

            if(functions.inQueue(msg.mentions.users.first().id)) {
                const embed = new RichEmbed()
					.setAuthor(msg.member.displayName, msg.author.avatarURL)
					.setColor("#e53935")
					.setTimestamp()
					.setDescription(`${msg.mentions.users.first().toString()} is already in the queue!`);
					
				return msg.channel.send(embed);
            } else {
                queue.push(msg.mentions.users.first());

                const embed = new RichEmbed()
					.setAuthor(msg.member.displayName, msg.author.avatarURL)
					.setColor("#43B581")
					.setTimestamp()
					.setDescription(`${msg.mentions.users.first().toString()} has been added to the queue!`);
					
				return msg.channel.send(embed);
            }
        }
    } else {
        return functions.sendDisabled(msg);
    }

};
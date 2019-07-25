exports.run = (client, msg, args, functions) => {

    if(config.enabled) {
        if(functions.inQueue(msg.author.id)) {
            const embed = new RichEmbed()
                .setAuthor(msg.member.displayName, msg.author.avatarURL)
			    .setColor("#e53935")
			    .setTimestamp()
                .setDescription(`You are already in the queue!`);
            
            return msg.channel.send(embed);
        } else {
            queue.push(msg.author);

            if(queue.length == 1 && !lastPlayed) {
                const embed = new RichEmbed()
					.setAuthor(msg.member.displayName, msg.author.avatarURL)
					.setColor("#43B581")
					.setTimestamp()
                    .setDescription(`You are the first one in the queue, type \`${prefix}next\` to start!`);
                    
                return msg.channel.send(embed);
            } else {
                const embed = new RichEmbed()
					.setAuthor(msg.member.displayName, msg.author.avatarURL)
					.setColor("#43B581")
					.setTimestamp()
					.setDescription(`You joined the queue!`);
                    
                return msg.channel.send(embed);
            }
        }
    } else {
        return functions.sendDisabled(msg);
    }

};
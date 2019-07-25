exports.run = (client, msg, args, functions) => {

    if(config.enabled) {
        if(functions.inQueue(msg.member.id)) {
            let index = queue.indexOf(msg.author);
            queue.splice(index, 1);

            const embed = new RichEmbed()
                .setAuthor(msg.member.displayName, msg.author.avatarURL)
				.setColor("#43B581")
				.setTimestamp()
                .setDescription(`You have left the queue!`);
            
            return msg.channel.send(embed);
        } else {
            const embed = new RichEmbed()
				.setAuthor(msg.member.displayName, msg.author.avatarURL)
				.setColor("#e53935")
				.setTimestamp()
				.setDescription(`You aren't in the queue!`);
				
			return msg.channel.send(embed);
        }
    } else {
        return functions.sendDisabled(msg);
    }

};
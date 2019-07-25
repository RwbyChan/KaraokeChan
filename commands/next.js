exports.run = (client, msg, args, functions) => {

    if(config.enabled) {
        let queueId = (queue.length == 1 && !lastPlayed ? queue[0].id : lastPlayed.id);
        if(msg.author.id == queueId || msg.member.roles.has(config.botManagingRole)) {
            if(queue.length == 0) {
                lastPlayed = null;

                const embed = new RichEmbed()
					.setAuthor(msg.member.displayName, msg.author.avatarURL)
					.setColor("#e53935")
					.setTimestamp()
					.setTitle('No one in the queue')
					.setDescription('We need at least 1 person in the queue to start the karaoke! \nJoin the queue first by typing `' + prefix + ' join`!');
					
				return msg.channel.send(embed);
            } else {
                const embed = new RichEmbed()
					.setAuthor(queue[0].username + ' has to sing!', queue[0].avatarURL)
					.setColor("#039be5")
					.setTimestamp()
                    .setDescription('It\'s ' + queue[0].username + ' his/her turn to sing! ^•^');
                    
                msg.channel.send(queue[0].toString());
				msg.channel.send(embed);

				lastPlayed = queue[0];
                queue.shift();
                
                return;
            }
        } else {
            const embed = new RichEmbed()
				.setAuthor(msg.member.displayName, msg.author.avatarURL)
				.setColor("#e53935")
				.setTimestamp()
				.setDescription('You don\'t have the permissions to progress the queue!\nOnly the person who just sang or a moderator can progress the queue');
				
            return msg.channel.send(embed);
        }
    } else {
        return functions.sendDisabled(msg);
    }

};
exports.run = (client, msg, args, functions) => {

    if(config.enabled) {
        if(msg.member.roles.has(config.botManagingRole)) {
            if(args.length > 1) {
                return msg.channel.send(
                    new RichEmbed()
                    .setAuthor(msg.member.displayName, msg.author.avatarURL)
                    .setColor("#ffac2e")
                    .setDescription(`**Usage:** ${prefix}remove [@username]`)
                );
            }

            if(functions.inQueue(msg.mentions.users.first().id)) {
                let index = queue.indexOf(msg.mentions.users.first());
                queue.splice(index, 1);

                const embed = new RichEmbed()
                    .setAuthor(msg.member.displayName, msg.author.avatarURL)
                    .setColor("#43B581")
                    .setTimestamp()
                    .setDescription(`${msg.mentions.users.first().toString()} has been removed from the queue`);
                
                return msg.channel.send(embed); 
            } else {
                const embed = new RichEmbed()
					.setAuthor(msg.member.displayName, msg.author.avatarURL)
					.setColor("#e53935")
					.setTimestamp()
					.setDescription(`${msg.mentions.users.first().toString()} isn't in the queue!`);
					
                return msg.channel.send(embed);
            }
        }
    } else {
        return functions.sendDisabled(msg);
    }

};
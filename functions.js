module.exports = {

    inQueue: function(id) {
        for(let i = 0; i < queue.length; i++) {
            if(queue[i].id == id) {
                return true;
            }
            return false;
        }
    },

    sendDisabled: function(msg) {
        const embed = new RichEmbed()
        .setAuthor(msg.member.displayName, msg.author.avatarURL)
		.setColor("#e53935")
		.setTimestamp()
        .setDescription(`Karaoke is currently disabled, try again when it's enabled!`);
        
        msg.channel.send(embed);
    }

};
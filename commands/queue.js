exports.run = (client, msg, args, functions) => {

    if(config.enabled) {
        let queueMsg = '';
        if(lastPlayed && lastPlayed.id) {
            queueMsg += `**🎤 NOW SINGING:**\n${lastPlayed.username}\n\n`;
        }

        for(let i = 0; i < queue.length; i++) {
            if(i == 0) { queueMsg += `**QUEUE:**\n` }
            queueMsg += `**${i + 1}.** ${queue[i].username}\n`;
        }

        if(queue.length == 0) {
            queueMsg += `**QUEUE:**\n_No one in the queue. Jointhe queue by typing \`${prefix}join\`_`;
        }

        return msg.channel.send(queueMsg);
    } else {
        return functions.sendDisabled(msg);
    }

};
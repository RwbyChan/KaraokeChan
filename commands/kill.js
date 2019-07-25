exports.run = (client, msg, args, functions) => {

    if(msg.author.id == config.ownerId) {
        const embed = new RichEmbed()
            .setColor("#43B581")
            .setTimestamp()
            .setTitle(`KaraokeChan offline! Bye bye o/`);

        msg.channel.send(embed);

        setTimeout(function(){
            client.destroy();
            console.log("Disconnected!");
            process.exit(1);
        }, 1000);
    }

};
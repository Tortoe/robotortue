const Discord = require('discord.js');
const message = require('../index').client;

module.exports.run = (client, message, args ) => {
    
    if(message.author.bot)
        return;

        let VoiceChannel = message.guild.channels.find(channel => channel === "musique");
        if(VoiceChannel != null)
        {
           console.log(VoiceChannel.name + "was found and is" +VoiceChannel.type + "channel")
           VoiceChannel.join()
           .then(connection => {
               console.log("Bot joined the chnnel.");
           })
           .catch();
        }
}

module.exports.help = {
    name:"play"
}

const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("**COMMANDES**")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Informations", "🐢botinfo \n 🐢serverinfo \n 🐢stats")
    .addField("Administrateur", "🐢ban \n 🐢kicks \n 🐢delrole \n 🐢addrole \n 🐢clear \n 🐢report")
    .addField("Autres", "🐢help \n 🐢ping");

    message.channel.send(helpembed);
}

module.exports.help = {
  name:"help"
}
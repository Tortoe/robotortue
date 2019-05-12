const Discord = require("discord.js");
const red = "#b70000";
const green = "#00ff26";
const orange = "#ff6a00";

let embed = new Discord.RichEmbed()
  .setTitle("Erreur")
  .setDescription("Veuillez entrer une raison")
  .setColor(red);
;

let embed2 = new Discord.RichEmbed()
  .setTitle("Error")
  .setDescription("Veuillez entrer un utilisateur")
  .setColor(red)
;  

module.exports.run = async (client, message, args) => {
  
  message.delete();
  if(args[0] == "help"){
    message.reply("Usage: 🐢report <utilisateur> <raison>");
    return;
  }
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send(embed2);
  let rreason = args.join(" ").slice(22);
  if(!rreason) return message.channel.send(embed);

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor(orange)
    .addField("Utilisateur Reporté", `${rUser} avec ID: ${rUser.id}`)
    .addField("Reporté Par", `${message.author} avec ID: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Raison", rreason);

    message.channel.send(reportEmbed);
    
    await new Promise(resolve => setTimeout (resolve, 5000));
    message.delete.reportEmbed();

  ;
    
}

module.exports.help = {
  name: "report"
}

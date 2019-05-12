const Discord = require("discord.js");
const red = "#b70000";
const green = "#00ff26";
const orange = "#ff6a00";

let embed = new Discord.RichEmbed()
    .setTitle('Erreur')
    .addField('Veuillez entrer un utilisateur')
    .addField('Veuillez Respecter la Forme', ':turtle:giverole <@User> <Role>')
;

let embed2 = new Discord.RichEmbed()
    .setTitle('Erreur')
    .addField('Veuillez entrer un role')
    .addField('Veuillez Respecter la Forme', ':turtle:giverole <@User> <Role>')
;


module.exports.run = async (client, message, args) => {
  
    message.delete();
    if(args[0] == "help"){
    message.reply("Usage: 🐢report <utilisateur> <raison>");
    return;
    }
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send(embed2);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(" ").slice(22) || r.id === args.join(' '));
    if(!role) return message.channel.send(embed);

    let Embed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor(green)
        .addField("Role donné :", `${role}`)
        .addField("Personne ayant le rôle :", `${member}`)
    ;   

    member.addRole(role.id)
        .then(() => message.channel.send(Embed))
        .catch(console.error);
    

    
    
}

module.exports.help = {
  name: "giverole"
}
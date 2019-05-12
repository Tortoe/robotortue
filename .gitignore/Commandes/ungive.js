const Discord = require("discord.js");
const red = "#b70000";
const green = "#00ff26";
const orange = "#ff6a00";


let embed = new Discord.RichEmbed()
    .setTitle('Erreur')
    .addField('Veuillez entrer un utilisateur')
    .addField('Veuillez Respecter la Forme', ':turtle:ungive <@User> <Role>')
;

let embed2 = new Discord.RichEmbed()
    .setTitle('Erreur')
    .addField('Veuillez entrer un role')
    .addField('Veuillez Respecter la Forme', ':turtle:ungive <@User> <Role>')
;


module.exports.run = async (client, message, args) => {
  
    message.delete();
    if(args[0] == "help"){
    message.reply("Usage: 🐢report <utilisateur> <raison>");
    return;
    }
    let member2 = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member2) return message.channel.send(embed);
    let role2 = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(" ").slice(22) || r.id === args.join(' '));
    if(!role2) return message.channel.send(embed2);

    let Embed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor(green)
        .addField("Role retiré :", `${role2}`)
        .addField("Personne dépourvu du rôle:", `${member2}`)
    ;   

    member2.removeRole(role2.id)
        .then(() => message.channel.send(Embed))
        .catch(console.error);
    

    
    
}

module.exports.help = {
  name: "ungive"
}
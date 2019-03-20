const Discord = require('discord.js');
exports.run = (client, message, args) => {

 

   
  
    var embed = new Discord.RichEmbed()
    .setColor("3C2A66")
    .setTitle("Derniere mise a jour : 20/03/2019")
    .addField("Nouvelle commande :", "`h!suggestion`")
    .addField("Mise a jour :", "`h!killme` + 2 textes aléatoires.")
    .addField("Nouvaux partenaires :", "`h!parteriat`")
    
    message.channel.send(embed)

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["cl"],
      permLevel: 0
    };

    exports.help = {
      name: 'changelog',
      description: 'Montre les dernieres modification sur le bot.',
      usage: 'h!changelog',
      aliase: ['cl']
    }

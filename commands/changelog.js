const Discord = require('discord.js');
exports.run = (client, message, args) => {

 

   
  
    var embed = new Discord.RichEmbed()
    .setColor("3C2A66")
    .setTitle("Derniere mise a jour : 15/05/2019")
    .addField("Nouvelle commande :", "`h!lockdown <time>` Bloque le salon pendant un certain temps (plus personne ne peut ecrire sauf les admins).")
    .setDescription("Augmentation des gifs dans les commandes HUG et KISS")
    
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

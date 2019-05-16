 const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
 
  
message.delete()

      
      message.channel.send("Meilleur commande").then(MM => {
        setTimeout(() => { MM.delete(); }, 10000);
        
      });
 
      };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'tsuki',
      description: 'Easter Egg',
      usage: 'tsuki',
      aliase: ['Aucun aliase n\'est disponible pour cette commande.']
    };

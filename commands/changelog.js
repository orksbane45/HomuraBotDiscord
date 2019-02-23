const Discord = require('discord.js');
exports.run = (client, message, args) => {

 

   
  
    var embed = new Discord.RichEmbed()
    .setColor("3C2A66")
    .setTitle("Derniere mise a jour : 23/02/2019")
    .addField("Jeux","Il y a maintenant 3 easters eggs sur le bot a vous de vous amusez a les trouver !")
    .addField("Commandes qui arriverons prochainement", "`h!image` , `h!gif` , `h!character`")
    
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

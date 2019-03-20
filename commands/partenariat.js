const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

    .setColor("#3C2A66")
    .setTitle("Liste des Discords/BOTs partenaire :")
    .addField("Anime World" , "https://discord.gg/Ycw3sqq")
    .addField("?" , "https://discord.gg/GUa6sZj")
    .addField("• Andaria •" , "https://discord.gg/mSnF9K4")
    
    
    





    message.channel.send(msg)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pt'],
  permLevel: 0
};

exports.help = {
  name: 'partenariat',
  description: 'Affiche la liste des partenaires du bot.',
  usage: 'partenariat',
  aliase: ['pt']
};

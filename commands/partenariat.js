const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

    .setColor("#3C2A66")
    .setTitle("Liste des Discord/BOT partenaire :")
    .setDescription("https://discord.gg/Ycw3sqq")
    .setImage('https://cdn.discordapp.com/attachments/525783553682702377/535166066356125716/AnimeWorld.png')
    
    





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

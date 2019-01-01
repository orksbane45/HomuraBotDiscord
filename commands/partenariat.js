const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setTitle("Liste des Discord/BOT partenaire :")
    .setDescription("Discord Miner (lien du bot)[https://discordbots.org/bot/492969308201418756]")
    
    





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
  description: 'Affiche la liste des partenariat du bot.',
  usage: 'partenariat',
  aliase: ['pt']
};

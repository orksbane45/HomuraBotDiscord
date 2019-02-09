const Discord = require('discord.js');

exports.run = (client, message) => {
  
  var InviteEmbed = new Discord.RichEmbed()
    .setColor("1E201C")
    .addField("<:HBdiscord:543117211640922143> Lien d'invitation du bot !",'https://discordapp.com/oauth2/authorize?client_id=500699327262359574&scope=bot&permissions=-1')

  message.channel.send(InviteEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Invite le bot sur votre discord !',
  usage: 'invite',
  aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
};

const Discord = require('discord.js');

exports.run = (client, message) => {
  
  var InviteEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("<:TBtsukibot:500715036583395329> Lien d'invitation du bot !",'https://discordapp.com/oauth2/authorize?client_id=500699327262359574&scope=bot&permissions=-1')

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
  description: 'Invitez le bot sur votre discord !',
  usage: 'invite',
  aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
};

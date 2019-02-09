exports.run = (client, message) => {
  message.channel.sendMessage('Ping?')
    .then(msg => {


        
      msg.edit('<:HBinfo:543117222097453059>' + (msg.createdTimestamp - message.createdTimestamp) + ' ms');

 
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Affiche le ping du bot !',
  usage: 'ping',
  aliase: ['Aucun aliase n\'est disponible pour cette commande.']
};

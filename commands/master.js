  const settings = require('../settings.json');
  exports.run = (client, message) => {
  
  if (message.author.id === settings.ownerid) return message.reply("Tu es mon maître !")
  
    
       message.channel.send("Tu n'es pas mon maître")                       
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'master',
  description: '?',
  usage: 'master',
  aliase: ['Aucun aliase n\'est disponible pour cette commande.']
};

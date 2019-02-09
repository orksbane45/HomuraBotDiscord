const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
    message.channel.send(`${message.author.username} est mort.`).then(Message => {
        setTimeout(() => { Message.edit("Réanimation..."); }, 1000);
        setTimeout(() => { Message.edit(`Réanimation réussite re bienvenue, ${message.author.username}`); }, 1000);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'killme',
  description: 'fun',
  usage: 'killme',
  aliase: ['Aucun aliase n\'est disponible pour cette commande.']
};

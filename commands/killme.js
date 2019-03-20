const Discord = require('discord.js');
exports.run = (client, message, args) => {
   let nb = Math.floor((Math.random() * 3) + 1);
  if (nb == 1) {
   
    message.channel.send(`${message.author.username} est mort.`).then(Message => {
        setTimeout(() => { Message.edit("Réanimation..."); }, 3000);
        setTimeout(() => { Message.edit(`Réanimation réussite re bienvenue, ${message.author.username}`); }, 3000);
    }
                                                                      
   if (nb == 2) {
   
    message.channel.send(`${message.author.username} est mort.`).then(Message => {
        setTimeout(() => { Message.edit("Réanimation..."); }, 3000);
        setTimeout(() => { Message.edit(`${message.author.username}, Le médecin s'approche de votre lit et vous annonce "Le seul moyen que j'ai trouvé pour vous sauvez était de vous donner les organes de Lyze qui est malheureusement mort sur le coup."`); }, 3000);
    }
                                                                      
    if (nb == 3) {
   
    message.channel.send(`${message.author.username} est mort.`).then(Message => {
        setTimeout(() => { Message.edit("Réanimation..."); }, 3000);
        setTimeout(() => { Message.edit(`Malheureusement, ${message.author.username} la réanimation n'a pas sauver notre cher ami.`); }, 3000);
    }                                                                  
                                                                      
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

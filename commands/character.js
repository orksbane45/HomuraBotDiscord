const ch = require('../character.json');
const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, params) => {
  message.delete()
  const embed2 = new Discord.RichEmbed()
  .setColor('#3C2A66')
  .setTitle('Utilisation : `h!character <personnage>`')
  .setDescription("Personnages : Madoka , Homura , Sakura , Mami , Nagisa , Sayaka , Kyuubey , Charlotte")
  

  if (!params[0] || !ch[params[0]]) return message.channel.send(embed2);
  let character = ch[params[0]];

  msg = new Discord.RichEmbed()
        .setColor(character.color)
        .setTitle('Informations sur : ' + params[0])
        .addField('Nom : ', character.nom , true)
        .addField('Age : ', character.age , true)
        .addField('Description : ', character.description , true)
        .addField('Couleur de cheveux : ', character.cheveux ,true)
        .addField('Arme :', character.arme ,true)
        .setThumbnail(character.image)


        message.channel.send(msg);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'character',
  description: 'Vous donne toutes les informations sur les personnages de Madoka Magica.',
  usage: 'character <personnage>',
  aliase: ['Aucun aliase n\'est disponible pour cette commande.']
};

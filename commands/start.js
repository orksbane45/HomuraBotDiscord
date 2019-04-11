const Discord = require('discord.js');
exports.run = async (client, message) => {

	const startembed = new Discord.RichEmbed()

	.setColor("#1E201C")
	.setTitle(`Inscription réussite ${message.author.username}`)
	.addField("Interface de création de votre personnage :" , `<:HBgemYellow:559873176004460544> Mami Tomoe\r<:HBgemRed:559873185307426837> Sakura Kyoko\r<:HBgemPurple:559873156270129162> Homura Akemi\r<:HBgemBlue:559873145373327360> Sayaka Miki\r<:HBgemPink:559873164679839745> Madoka Kaname`)

  
  
  message.channel.send(startembed).then( Message => {
Message.react(client.emojis.find('id', '559873176004460544'));
Message.react(client.emojis.find('id', '559873185307426837'));
Message.react(client.emojis.find('id', '559873156270129162'));
Message.react(client.emojis.find('id', '559873145373327360'));
Message.react(client.emojis.find('id', '559873164679839745'));

});


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'start',
  description: 'Commence ton aventure en tant que magica girl.',
  usage: 'start',
  aliase: ['Aucun aliase n\'est disponible pour cette commande.']
};

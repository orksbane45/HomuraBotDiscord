
const Discord = require('discord.js');


exports.run = async (client, message, params) => {

	const startembed = new Discord.RichEmbed()

	.setColor("#1E201C")
	.setTitle(`Inscription réussite ${message.author.username}`)
	.addField("Interface de création de votre personnage :" , `<:HBcolorYellow:557952371821379584> Mami Tomoe\r<:HBcolorRed:557952378590986242> Sakura Kyoko\r<:HBcolorWhite:557952358022119446> Nagisa Momoe (premium)\r<:HBcolorPurple:557952350312988673> Homura Akemi\r<:HBcolorBlue:557952340137738241> Sayaka Miki\r<:HBcolorPink:557952365471465485> Madoka Kaname`)

  
  
  message.channel.send(startembed).then(Message => {
Message.react(client.emojis.find('557952371821379584'));
Message.react(client.emojis.find('557952378590986242'));
Message.react(client.emojis.find('557952358022119446'));
Message.react(client.emojis.find('557952350312988673'));
Message.react(client.emojis.find('557952340137738241'));
Message.react(client.emojis.find('557952365471465485'));
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

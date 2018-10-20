const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setTitle("Liste des Discord partenaire :")
    .addField("<:TBlemondedetsuki:500983273929965568> Le monde de Tsuki", "https://discord.gg/uNbevga")
    .addField("<:TBcatseyes:500982242068267016> Cat's Eyes","https://discord.gg/PHuFnfZ")
    .addField("<:TBlauberge:503208272606527489> L'Auberge","https://discord.gg/HWuCq8a")





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

const settings = require('../settings.json');
const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

  const msg = new Discord.RichEmbed()

  .setColor('#3C2A66')
  .setAuthor('Liste des commandes :')
  .addField('Administration/Modération',' `purge`, `mute`, `blacklist`, `kick`, `ban`,`vote`,`adminsay`')
  .addField('Fun',' `roll`, `master`, `8ball`, `say`, `killme`,`hug`')
  .addField('Information',' `stats`, `serveurinfo`, `invite`, `ping`, `help`, `profile`, `avatar`')
  .setDescription(":warning: Mise a jour du bot...\rUtilise la commande `h!help <commande>` pour plus d'informations.")
  .setTimestamp()

              message.channel.send(msg);

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
let cmdaliase = command.help.aliase;
   
      const msg2 = new Discord.RichEmbed()
      .setColor('#3C2A66')
      .setTitle(`**Commande :** ${command.help.name}`)
      .addField("Description", command.help.description)
      .addField("Utilisation", command.help.usage)
      .addField("Aliases", cmdaliase)
      
      
  message.channel.send(msg2)
    }
      
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Affiche la liste des commandes du bot !',
  usage: 'help [command]',
  aliase: ['h , halp']
};

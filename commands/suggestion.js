 const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.delete()

let reason = args.slice(1).join(' ');
 if (reason <1) return message.channel.send("Merci d'intégrer un message.");
  let suggestchan = client.channels.find('id', '557936381834297345');
      const embed = new Discord.RichEmbed()

      .setColor("#3C2A66")
      .setTitle(`‌‌${message.author.username}`)
      .setDescription(args.join(" "))
      


      suggestchan.send(embed)
      suggestchan.send("<@302837596600664065>").then(Message => {
Message.delete()
});
      message.channel.return("<:HBsupport:543117250593554462> Votre suggestion a bien était envoyé.")

      };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['suggest'],
      permLevel: 0
    };

    exports.help = {
      name: 'suggestion',
      description: 'Une idée d\'ajout pour le bot ?',
      usage: 'suggestion <message>',
      aliase: ['suggest']
    };

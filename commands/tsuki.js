 const Discord = require('discord.js');
exports.run = (client, message, args) => {
  


  let tsukichan = client.channels.find('id', '547849354346496000');
      const embed = new Discord.RichEmbed()

      .setColor(RANDOM)
      .setTitle("+20 :gem: pour:")
      .setDescription(`${message.author.username}, Merci`)
      


      tsukichan.send(embed)
      tsukichan.send("<@302837596600664065> +1").then(Message => {
Message.delete()
});
      message.channel.send(<a:HBgifneko:577149796939464725>  Merci").then(MM => {
      MM.delete()
      });

      };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'tsuki',
      description: 'Easter Egg',
      usage: 'tsuki',
      aliase: ['Aucun aliase n\'est disponible pour cette commande.']
    };

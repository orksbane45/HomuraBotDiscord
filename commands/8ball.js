exports.run = function(client, message, args) {
  let nb = Math.floor((Math.random() * 8) + 1);

    if (nb == 1) {
    message.channel.sendMessage('<:HBgame:543120810689167361> Jamais');
    }
    if (nb == 2) {
       message.channel.sendMessage('<:HBgame:543120810689167361> Surement');
    }
    if (nb == 3) {
       message.channel.sendMessage('<:HBgame:543120810689167361> Peut-être');
    }
    if (nb == 4) {
       message.channel.sendMessage('<:HBgame:543120810689167361> Oui');
    }
    if (nb == 5) {
       message.channel.sendMessage('<:HBgame:543120810689167361> Non');
    }
    if (nb == 6)  {
       message.channel.sendMessage('<:HBgame:543120810689167361> De loin');
    }
    if (nb == 7)  {
       message.channel.sendMessage('<:HBgame:543120810689167361> Pas envie de répondre !');
    }
    if (nb == 8)  {
       message.channel.sendMessage('<:HBgame:543120810689167361> Baka');
  }

  
}

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: '8ball',
      description: 'Le bot répond a votre question aléatoirement.',
      usage: '8ball <question>',
      aliase: ['Aucun aliase n\'est disponible pour cette commande.']
    }

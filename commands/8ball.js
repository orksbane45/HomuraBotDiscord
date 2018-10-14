exports.run = function(client, message, args) {
  let nb = Math.floor((Math.random() * 8) + 1);

    if (nb == 1) {
    message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : jamais');
    }
    if (nb == 2) {
       message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : surement');
    }
    if (nb == 3) {
       message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : peut-être');
    }
    if (nb == 4) {
       message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : oui');
    }
    if (nb == 5) {
       message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : non');
    }
    if (nb == 6)  {
       message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : de loin');
    }
    if (nb == 7)  {
       message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : pas envie de répondre !');
    }
    if (nb == 8)  {
       message.channel.sendMessage('<:TBgames:500713349986648094> La réponse est : Baka');
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
      description: 'Le bot répond a votre questions aléatoirement.',
      usage: '8ball <question>',
      aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
    }

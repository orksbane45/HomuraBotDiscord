const Discord = require('discord.js');

exports.run = (client, message, args) => {


  let user = message.mentions.users.first();
  
  
  if (message.mentions.users.size < 1) return message.reply("<:HBconfig:543117201817862145> Vous devez mentionner quelqu'un pour lui faire une caresse.").catch(console.error);

  let places = [ //liens des gifs
            "https://i.gifer.com/FJSi.gif",
            "https://media.discordapp.net/attachments/557320872445083673/559044400886317066/tenor.gif",
            "https://media.tenor.com/images/63257a6d6099cfb8da9f01192e0ab158/tenor.gif",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-V9nfJNBmeP-KtwdremjFeAcGbehMImcG8TC0DXcHrDn1uuw",
            "http://66.media.tumblr.com/1eb89862f1ec5158bcf0d2342b6ea45f/tumblr_n3j94qtUjd1sy8iyso1_500.gif",
            "https://images-ext-2.discordapp.net/external/MunwZzfB5twc-ahqeFjNyLPw7OMcpGIh39RmT2wkiaU/https/cdn.weeb.sh/images/H1Vc1yYwW.gif",
            "https://i.imgur.com/2lacG7l.gif",
            "https://66.media.tumblr.com/ea0a3110ef50e46336f9a996eb416ece/tumblr_p2kzogLOZU1vajq0ro4_500.gif",
            "https://media.tenor.com/images/022fa0537383fa20684cd67540b004fe/tenor.gihttpsf",
            "https://media.discordapp.net/attachments/499657455186477067/568139939422928896/L4grsJC.gif",
            "https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915",
            "https://media.tenor.com/images/7ccf285314342a829e37dac6be48adb1/tenor.gif",
            "https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758",
            "https://66.media.tumblr.com/db6537bedd76f17966e4e1b0bf9240b8/tumblr_p2kzogLOZU1vajq0ro10_500.gif"
        ];

        let picker = Math.floor(Math.random() * places.length);


        
    

    msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifpat:559039305469657089> ${user.username}, vous avez reçu une caresse de ${message.author.username}`)
    .setColor('1E201C')
    .setImage(places[picker])
    message.channel.send(msg)

    }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'pat',
    description: 'Caresse ! [14 gifs]',
    usage: 'pat <metion>',
    aliase: ['Aucun aliase n\'est disponible pour cette commande.']
  }

const Discord = require('discord.js');

exports.run = (client, message, args) => {


  let user = message.mentions.users.first();
  
  
  if (message.mentions.users.size < 1) return message.reply("<:HBconfig:543117201817862145> Vous devez mentionner quelqu'un pour lui faire une caresse.").catch(console.error);

  let places = [ //liens des gifs
            "https://i.gifer.com/FJSi.gif",
            "https://tenor.com/view/pat-head-loli-dragon-anime-gif-9920853",
            "https://tenor.com/view/kanna-dragonmaid-dragon-maid-misskobayashi-gif-8053566",
            "https://tenor.com/view/pokemon-pikachu-caterpie-there-there-comfort-gif-5709072",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-V9nfJNBmeP-KtwdremjFeAcGbehMImcG8TC0DXcHrDn1uuw",
            "http://66.media.tumblr.com/1eb89862f1ec5158bcf0d2342b6ea45f/tumblr_n3j94qtUjd1sy8iyso1_500.gif",
            "https://images-ext-2.discordapp.net/external/MunwZzfB5twc-ahqeFjNyLPw7OMcpGIh39RmT2wkiaU/https/cdn.weeb.sh/images/H1Vc1yYwW.gif",
            "https://i.imgur.com/2lacG7l.gif",
            "https://66.media.tumblr.com/ea0a3110ef50e46336f9a996eb416ece/tumblr_p2kzogLOZU1vajq0ro4_500.gif",
            "https://tenor.com/view/kaede-azusagawa-kaede-gif-head-headpat-gif-13284057",
            "https://tenor.com/view/pat-anime-gif-7453915",
            "https://tenor.com/view/charlotte-pat-blush-embarrassed-shy-gif-5081286",
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

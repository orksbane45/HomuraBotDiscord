const Discord = require('discord.js');

exports.run = (client, message, args) => {


  let user = message.mentions.users.first();
  
  
  if (message.mentions.users.size < 1) return message.reply("<:HBconfig:543117201817862145> Vous devez mentionner quelqu'un pour lui faire un bisou.").catch(console.error);

  let places = [ //liens des gifs
            "http://66.media.tumblr.com/aa980da52a100d7b1c0c25c8a0a1e19a/tumblr_n2os54fVdZ1rveihgo1_400.gif",
            "https://data.whicdn.com/images/309929295/original.gif",
            "https://media.discordapp.net/attachments/489448852882063360/543807591436779556/tenor_2.gif",
            "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
            "https://uploads.disquscdn.com/images/ddba021561a48a4680b7a743af4846670c5376fef71e67ad4cef398d3ae4db70.gif",
            "https://media.discordapp.net/attachments/489448852882063360/543808989302095872/kiss8.gif",
            "https://media.discordapp.net/attachments/489448852882063360/543809025435762691/kiss9.gif",
            "https://media.tenor.com/images/f2795e834ff4b9ed3c8ca6e1b21c3931/tenor.gif",
            "https://media.tenor.com/images/22798f3fb9495bd162881736fcc8dc19/tenor.gif",
            "https://media.tenor.com/images/48963a8342fecf77d8eabfd2ab2e75c1/tenor.gif",
            "https://media.tenor.com/images/9fb52dbfd3b7695ae50dfd00f5d241f7/tenor.gif",
            "https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif",
            "https://media.tenor.com/images/29b22bb26ecc0943c95b9a1be81d3054/tenor.gif",
            "https://media.tenor.com/images/f13592a1d689ee22009b6c940cb550a6/tenor.gif",
            "https://media.tenor.com/images/7325f639f8bbe6328b1cb54a122eaccf/tenor.gif"
            
        ];

        let picker = Math.floor(Math.random() * places.length); //Randome

        
    

    msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
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
    name: 'kiss',
    description: 'Bisou !',
    usage: 'kiss <metion>',
    aliase: ['Aucun aliase n\'est disponible pour cette commande.']
  }

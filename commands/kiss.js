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
            "https://media.discordapp.net/attachments/489448852882063360/543809025435762691/kiss9.gif"
            
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

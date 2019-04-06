const Discord = require('discord.js');
exports.run = (client, message, args) => {
  

  let places = [ //liens des gifs
            "https://thumbs.gfycat.com/FeminineRigidBlesbok-size_restricted.gif",
            "https://thumbs.gfycat.com/CraftyIdioticBirdofparadise-small.gif",
            "https://66.media.tumblr.com/51df3d06c0a5c5dd0c2fba9baa4c8f14/tumblr_nsyhwtUKLm1udv4k1o1_400.gif",
            "https://i.gifer.com/8wtS.gif",
            "https://media.giphy.com/media/LNjfpWc2xDGbm/giphy.gif",
            "https://i.pinimg.com/originals/59/f2/4f/59f24faf8710245335aebdbe0a132a8f.gif",
            "https://media.giphy.com/media/48iBNy8rxN8fm/giphy.gif",
            "https://media.discordapp.net/attachments/530571853278871552/564076422231097495/giphy.gif",
            "https://media.giphy.com/media/OimpWzqR5ND9e/giphy.gif",
            "https://media.giphy.com/media/dWbO5cuyqrhzW/giphy.gif",
            "https://orig00.deviantart.net/ddb0/f/2015/016/d/2/fairytail_wendy_by_xmissmuffin-d8e4k05.gifhttp://66.media.tumblr.com/78267cb47579804868f00e0ea1b78ad9/tumblr_mowlhnOX7Q1rc4zmso2_r2_500.gif",
            "http://66.media.tumblr.com/78267cb47579804868f00e0ea1b78ad9/tumblr_mowlhnOX7Q1rc4zmso2_r2_500.gif"
        ];

        let picker = Math.floor(Math.random() * places.length); 
  
msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifcry:564061613163020319> ${message.author.username} pleure, qui pour le/la consoler ?`)
    .setColor('1E201C')
    .setImage(places[picker])
    message.channel.send(msg);
  
  console.log(places[picker])
}
 

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'cry',
    description: '<a:HBgifcry:564061613163020319> !',
    usage: 'cry',
    aliase: ['Aucun aliase n\'est disponible pour cette commande.']
  }

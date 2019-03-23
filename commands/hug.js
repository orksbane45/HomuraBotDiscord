const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.reply("<:HBconfig:543117201817862145> Vous devez mentionner quelqu'un pour lui faire un câlin.").catch(console.error);

  let places = [ //liens des gifs
            "https://cdn.discordapp.com/attachments/442055343544074240/442055795723730944/hug1.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442055876355031070/hug7.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442055926455861269/hug9.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056046941306881/hug8.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056056995315713/hug5.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056059537063936/hug3.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056085705064468/hug11.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056087202431021/hug6.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056056995315713/hug5.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056059537063936/hug3.gif",
            "https://n.discordapp.com/attachments/442055343544074240/442056085705064468/hug11.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056087202431021/hug6.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442056087953211412/hug12.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442717849643909121/hug10.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442718011783118849/hug15.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442718105094062080/hug14.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442718357469397023/hug4.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442718531914563585/hug13.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442719490833121281/hug16.gif",
            "https://cdn.discordapp.com/attachments/442055343544074240/442719523624321024/hug17.gif",
            "https://cdn.weeb.sh/images/rkx1dJ25z.gif",
            "https://cdn.weeb.sh/images/ByPGRkFVz.gif",
            "https://cdn.weeb.sh/images/S18oOuQw-.gif",
            "https://cdn.weeb.sh/images/HkQs_dXPZ.gif",
            "https://cdn.weeb.sh/images/B1wRd_XP-.gif",
            "https://cdn.weeb.sh/images/r1R3_d7v-.gif",
            "https://cdn.weeb.sh/images/HJU2OdmwW.gif",
            "https://media.discordapp.net/attachments/489448852882063360/543793072031662093/tenor_1.gif",
            "https://media.discordapp.net/attachments/489448852882063360/543793071867822083/tenor.gif",
            "https://media.discordapp.net/attachments/489448852882063360/543793059045965834/TR2G.gif"
        ];

        let picker = Math.floor(Math.random() * places.length); 
  
msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifhug:527589131581128706> ${user.username}, vous avez reçu un câlin de ${message.author.username}`)
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
    name: 'hug',
    description: 'Câlin !',
    usage: 'hug [mention]',
    aliase: ['Aucun aliase n\'est disponible pour cette commande.']
  }

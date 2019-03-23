const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.reply("<:HBconfig:543117201817862145> Vous devez mentionner quelqu'un pour lui faire un câlin.").catch(console.error);

  let places = [ //liens des gifs
            "https://media.discordapp.net/attachments/489448852882063360/559113935882682371/hug1.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114509730447360/hug3.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114625870856202/hug7.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114627850567700/hug4.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114627875733508/hug9.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114720209272892/hug13.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114797506101251/hug14.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114838111158333/hug5.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114849955610635/hug8.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114886328877087/hug17.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114894440398848/hug16.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114896378429442/hug6.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114896608854029/hug11.gif",
            "https://media.discordapp.net/attachments/489448852882063360/559114923763040258/hug15.gif",
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
    name: 'hug',
    description: 'Câlin !',
    usage: 'hug [mention]',
    aliase: ['Aucun aliase n\'est disponible pour cette commande.']
  }

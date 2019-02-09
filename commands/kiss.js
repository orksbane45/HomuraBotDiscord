const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let nb = Math.floor((Math.random() * 7) + 1);
  if (message.mentions.users.size < 1) return message.reply("<:HBconfig:543117201817862145> Vous devez mentionner quelqu'un pour lui fait un câlin.").catch(console.error);
    if (nb == 1) {
   msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('1E201C')
    .setImage('http://66.media.tumblr.com/aa980da52a100d7b1c0c25c8a0a1e19a/tumblr_n2os54fVdZ1rveihgo1_400.gif')
    message.channel.send(msg)
  }
  if (nb == 2) {
   msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('1E201C')
    .setImage('https://data.whicdn.com/images/309929295/original.gif')
    message.channel.send(msg)
  }
  if (nb == 3) {
   msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('1E201C')
    .setImage('https://media.discordapp.net/attachments/489448852882063360/543807591436779556/tenor_2.gif')
    message.channel.send(msg)
  }
  if (nb == 4) {
   msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('1E201C')
    .setImage('https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif')
    message.channel.send(msg)
  }
  if (nb == 5) {
   msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('1E201C')
    .setImage('https://uploads.disquscdn.com/images/ddba021561a48a4680b7a743af4846670c5376fef71e67ad4cef398d3ae4db70.gif')
    message.channel.send(msg)
  }
  if (nb == 6) {
   msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('1E201C')
    .setImage('https://media.discordapp.net/attachments/489448852882063360/543808989302095872/kiss8.gif')
    message.channel.send(msg)
  }
  if (nb == 7) {
   msg = new Discord.RichEmbed()
    .setTitle(`<a:HBgifkiss:543791564128780298> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('1E201C')
    .setImage('https://media.discordapp.net/attachments/489448852882063360/543809025435762691/kiss9.gif')
    message.channel.send(msg)
  }

  

}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'kiss',
    description: 'Bissou !',
    usage: 'kiss <metion>',
    aliase: ['Aucun aliase n\'est disponible pour cette commande.']
  }

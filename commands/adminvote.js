const Discord = require('discord.js');
exports.run = (client, message) => {

 if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {

    let args = message.content.split(" ").slice(1);
    message.delete()
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`**${args.join(" ")}**\r\r✅ = oui\r❌ = non`)
    .then(msg => {
    msg.channel.send(embed);
    msg.react("✅");
    msg.react("❌");

   }else{
    message.reply("nop")
   }
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["avote"],
      permLevel: 0
    };

    exports.help = {
      name: 'adminvote',
      description: 'pifpaf',
      usage: 'adminvote <message>',
      aliase: ['avote']
    }

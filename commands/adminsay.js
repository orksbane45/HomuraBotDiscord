const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (message.author.id == 302837596600664065 || message.member.hasPermission('ADMINISTRATOR')) {
message.delete()

    message.channel.send(args.join(" "))

}else{
    message.reply("<:HBstop:543117234273386516> Tu n'as pas les bonnes permissions pour utlisez cette commande !");
}
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['asay'],
      permLevel: 0
    };

    exports.help = {
      name: 'adminsay',
      description: 'Fait parler le bot',
      usage: 'adminsay <message>',
      aliase: ['asay']
}

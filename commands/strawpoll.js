const Discord = require('discord.js');
exports.run = async (client, message) => {

 if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {

    let args = message.content.split(" ").slice(1);
    message.delete()
  
    var embed = new Discord.RichEmbed()
    .setColor(`1E201C`)
    .setDescription(`**${args.join(" ")}**\r\r<:HByes:543783599883681825> = oui\r<:HBno:543784274650726403> = non`)

    message.channel.send(embed).then( embed2 => {
     embed2.react(client.emojis.find('id', '543783599883681825'));
     embed2.react(client.emojis.find('id', '543784274650726403'));
     
    });
    

   }
 
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["st"],
      permLevel: 0
    };

    exports.help = {
      name: 'strawpoll',
      description: 'Lance un strawpoll',
      usage: ' <message>',
      aliase: ['st']
    }

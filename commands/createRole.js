const Discord = require("discord.js");
exports.run = function(client, message, args) {
  
  message.guild.createRole("name", "mute");
 
  
}

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'addrole',
      description: 'add a role to user',
      usage: 'addrole'
    }

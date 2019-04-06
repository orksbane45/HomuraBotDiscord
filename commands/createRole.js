const Discord = require("discord.js");
exports.run = function(client, message, args) {
  
  message.guild.createRole("name", "mute");
 
  
}

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["rc"],
      permLevel: 0
    };

    exports.help = {
      name: 'createrole',
      description: 'add a role to user',
      usage: 'addrole'
    }

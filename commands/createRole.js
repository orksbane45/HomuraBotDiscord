const Discord = require("discord.js");
exports.run = function(client, message, args) {
  
  message.guild.createRole({
  name: 'Muted'
})
 
  
}

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["mr"],
      permLevel: 0
    };

    exports.help = {
      name: 'muterole',
      description: 'Rajoute le role Muted pour pouvoir mute les gens.',
      usage: 'MuteRole'
    }

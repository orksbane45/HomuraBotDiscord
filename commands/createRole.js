const Discord = require("discord.js");
exports.run = function(client, message, args) {
  
  message.guild.createRole({
  name: 'Muted'
})
  message.channel.send("<:HBconfig:543117201817862145> Rôle crée ! Vous pouvez maintenant le modifier.");
 
  
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

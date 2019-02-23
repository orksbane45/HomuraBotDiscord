const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if (message.member.hasPermission('MANAGE_ROLES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.channel.send("<:HBconfig:543117201817862145> Aucun rôle \"Muted\" n'a était trouver sur le serveur merci d'en crée un pour pouvoir mute.")
  

 if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.replay("<:HBstop:543117234273386516> Je n'ai pas les bonnes permissions").catch(console.error);




 message.guild.member(user).addRole(muteRole).then(()=> {

   
            message.channel.sendMessage(`<:HByes:543783599883681825> **${user.username}** est maintenant mute !`)
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'Mute un utilisateur !',
  usage: 'mute [mention]',
  aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
};

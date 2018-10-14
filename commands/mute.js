const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.get('name', 'Muted');
  if(!muteRole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000001",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          VIEW_CHANNEL: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  };
  

 if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.replay("<:TBstop:500713271532453890> Je n'ai pas les bonnes permissions").catch(console.error);




 message.guild.member(user).addRole(muteRole).then(()=> {

   
            message.channel.sendMessage(`${user.username} est maintenant mute !`)
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

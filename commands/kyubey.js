
const Discord = require('discord.js');


exports.run = (client, message, params) => {




  
  
  message.channel.send("／人◕ ‿‿ ◕人＼")


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kyuubey'],
  permLevel: 0
};

exports.help = {
  name: 'kyubey',
  description: 'Un kyuubey sauvage vient de spawn.',
  usage: 'kyuubey',
  aliase: ['Kyuubey']
};

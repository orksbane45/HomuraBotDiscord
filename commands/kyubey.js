
const Discord = require('discord.js');


exports.run = (client, message, params) => {



message.channel.send("Do you want to make a contract? ／人◕ ‿‿ ◕人＼")


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kyuubey'],
  permLevel: 0
};

exports.help = {
  name: 'kyubey',
  description: 'Easter Egg',
  usage: 'kyuubey',
  aliase: ['Kyuubey']
};

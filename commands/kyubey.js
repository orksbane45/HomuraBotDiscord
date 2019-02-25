
const Discord = require('discord.js');


exports.run = (client, message, params) => {



message.channel.send("Do you want to make a contract? yes/no ／人◕ ‿‿ ◕人＼")
  
   if (message.content.includes('yes')) {
     message.channel.send(`${message.author} You are now a puella magica girls ! ／人◕ ‿‿ ◕人＼`)
   }
  if (message.content.includes('no')) {
     message.channel.send("Okay... ／人◕ ‿‿ ◕人＼")
   }
  if (message.content.includes('homura')) {
     message.channel.send("soon ／人◕ ‿‿ ◕人＼")
   }


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

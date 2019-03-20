
const Discord = require('discord.js');


exports.run = (client, message, params) => {




  
   if (message.content.includes('yes')) {
     message.channel.send(`${message.author} You are now a puella magica girl ! ／人◕ ‿‿ ◕人＼`)
   }
  if (message.content.includes('no')) {
     message.channel.send("Okay... Tell me if you want to make a contract. ／人◕ ‿‿ ◕人＼")
   }
  message.channel.send("Do you want to make a contract? yes/no ／人◕ ‿‿ ◕人＼")


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kyuubey'],
  permLevel: 0
};

exports.help = {
  name: 'kyubey',
  description: 'Passer un contrat avec kyuubey.',
  usage: 'kyuubey',
  aliase: ['Kyuubey']
};

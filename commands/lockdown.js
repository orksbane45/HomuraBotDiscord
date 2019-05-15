const ms = require('ms');
exports.run = (client, message, args) => {
  if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock', 'off', 'stop'];
  if (!time) return message.reply('<:HBconfig:543117201817862145> Veuillez joindre une durée à ce blocage, en heures, en minutes ou en secondes.');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Blocage suspendu.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`<:HByes:543783599883681825> Salon bloqué pour ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('<:HByes:543783599883681825> Blocage suspendu.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  };
};
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 0
};

exports.help = {
  name: 'lockdown',
  description: 'Cette commande bloque un salon écrit pour une durée donnée.',
  usage: 'lockdown <durée>',
  aliase: ['ld']
};

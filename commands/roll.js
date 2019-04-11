exports.run = function(client, message, args) {
  let nb = Math.floor((Math.random() * 10) + 1);
  
  if (nb == 1) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:one:`); }, 2000);
   });
    }
  if (nb == 2) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:two:`); }, 2000);
   });
    }
  if (nb == 3) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:three:`); }, 2000);
   });
    }
  if (nb == 4) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:four:`); }, 2000);
   });
    }
  if (nb == 5) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:five:`); }, 2000);
   });
    }
  if (nb == 6) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:six:`); }, 2000);
   });
    }
  if (nb == 7) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:seven:`); }, 2000);
   });
    }
  if (nb == 8) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:eight:`); }, 2000);
   });
    }
  if (nb == 9) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:nine:`); }, 2000);
   });
    }
  if (nb == 10) {
   
    message.channel.send(`Chargement.`).then(Message => {
        setTimeout(() => { Message.edit("Chargement.."); }, 1000);
        setTimeout(() => { Message.edit("Chargement..."); }, 1000);
        setTimeout(() => { Message.edit(`:keycap_ten:`); }, 2000);
   });
    }
  
}

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'roll',
        description: 'Vous donne un chiffre entre 1 et 10 !',
        usage: 'roll',
        aliase: ['Aucun aliase n\'est disponible pour cette commande.']
      }

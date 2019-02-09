const Discord = require('discord.js');
exports.run = (client, message, args) => {

 

   
  
    var embed = new Discord.RichEmbed()
    .setColor("3C2A66")
    .setTitle("Derniere mise a jour : 09/02/2019")
    .addField("Modification des emotes du bot","<:HBconfig:543117201817862145> <:HBsupport:543117250593554462> <:HBstop:543117234273386516> <:HBdiscord:543117211640922143> <:HBgame:543120810689167361> <:HByes:543783599883681825> <:HBno:543784274650726403> <:HBinfo:543117222097453059>")
    .addField("Nouvelle commande (ou en devellopement)","`h!changelog`, `h!kiss`")
    .addField("Modification du client","Nom : Homura Bot\rprefix : h!")
    .addField("Rajout de 3 gif pour la commande `h!hug`","https://media.discordapp.net/attachments/489448852882063360/543793059045965834/TR2G.gif\rhttps://media.discordapp.net/attachments/489448852882063360/543793071867822083/tenor.gif\rhttps://media.discordapp.net/attachments/489448852882063360/543793072031662093/tenor_1.gif")
    message.channel.send(embed)

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["cl"],
      permLevel: 0
    };

    exports.help = {
      name: 'changelog',
      description: 'Montre les dernieres modification sur le bot.',
      usage: 'h!changelog',
      aliase: ['cl']
    }

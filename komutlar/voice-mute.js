const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
  if(!message.member.roles.has("713739848548220940")) return message.channel.send("Sadece **VK Yetkilisi** Bunu Kullanabilir !")
    let kullanici = message.mentions.members.first()
    
   
    if (!kullanici) return message.channel.send("Kimi susturacağını belirtmedin.")
    kullanici.setMute(true, `Susturan yetkili: ${message.author.tag}`)
        .then(() =>
            message.channel.send(`${kullanici} ses kanallarında susturuldu.`))
        .catch(console.error);
        
    },


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sustur"],
    permLevel: 0
};

exports.help = {
    name: 'sustur',
    description: 'seslide susturur',
    usage: ""
};
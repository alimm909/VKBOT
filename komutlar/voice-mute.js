const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
  if(!message.member.roles.has("728928753215995914")) return message.channel.send("<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !")
    let kullanici = message.mentions.members.first()
    
   
    if (!kullanici) return message.channel.send("<a:hyr:728937091068854282> ・ Kimi Susturacağını Belirtmedin.")
    kullanici.setMute(true, `Susturan Yetkili: ${message.author.tag}`)
        .then(() =>
            message.channel.send(`<a:uyari:728944635401207870> ・ ${kullanici} Ses Kanallarında Susturuldu.`))
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
const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if(!message.member.roles.has("728928753215995914")) return message.channel.send('<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !')       
        
          const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .addField(`Roller - 1`
,`1. Kurt`)
          .addField(
            `▬▬▬▬▬▬`
,`2. Kurt`)
          .addField(
            `▬▬▬▬▬▬`
,`Doktor`)
          .addField(
            `▬▬▬▬▬▬`
,`Büyücü`)
          .addField(
            `▬▬▬▬▬▬`
,`Soytarı
▬▬▬▬▬▬`)
          .setTimestamp()
          message.channel.send(embed)
  message.delete()
        }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol1','rol-1','roller-1'],
  permLevel: 0
};
exports.help = {
  name: 'roller1'
};
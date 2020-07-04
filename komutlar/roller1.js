const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
if(!message.member.roles.has("728928753215995914")) return message.channel.send('<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !')


const embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.setColor('RANDOM')
.addField(`Roller - 3`
,`1. Kurt`)
          .addField(
            `▬▬▬▬▬▬`
,`2. Kurt`)
          .addField(
            `▬▬▬▬▬▬`
,`3. Kurt`)
          .addField(
            `▬▬▬▬▬▬`
,`Doktor`)
          .addField(
            `▬▬▬▬▬▬`
,`Seri Katil`)
          .addField(
            `▬▬▬▬▬▬`
,`Medyum`)
          .addField(
            `▬▬▬▬▬▬`
,`Gözcü`)
          .addField(
            `▬▬▬▬▬▬`
,`Aura Gözcüsü`)
          .addField(
            `▬▬▬▬▬▬`
,`Soytarı`)
          .addField(
            `▬▬▬▬▬▬`
,`Gardiyan`)
          .addField(
            `▬▬▬▬▬▬`
,`Şerif
▬▬▬▬▬▬`)
.setTimestamp()
message.channel.send(embed)
message.delete()
}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['rol3','rol-3','roller-3'],
permLevel: 0
};
exports.help = {
  name: 'roller3'
};
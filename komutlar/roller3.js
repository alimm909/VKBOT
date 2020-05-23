const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if(!message.member.roles.has("713780338656149535")) return message.channel.send('Sadece **VK Yetkilisi** Bunu Kullanabilir !')
  
       
  const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('gray')
          .addField(
                        `<a:kalppp:713757806695809105> Roller <a:kalppp:713757806695809105>`
,`1.Vampir `)
          .addField(
            `▬▬▬▬▬▬`
,`2.Vampir `)
          .addField(
            `▬▬▬▬▬▬`
,`3.Vampir `)
          .addField(
            `▬▬▬▬▬▬`
,`Doktor `)
          .addField(
            `▬▬▬▬▬▬`
,`Seri Katil `)
          .addField(
            `▬▬▬▬▬▬`
,`Büyücü: `)
          .addField(
            `▬▬▬▬▬▬`
,`Avcı `)
          .addField(
            `▬▬▬▬▬▬`
,`Escort `)
          .addField(
            `▬▬▬▬▬▬`
,`Soytarı `)
          .addField(
            `▬▬▬▬▬▬`
,`BodyGuard `)
          .addField(
            `▬▬▬▬▬▬`
,`Şerif
▬▬▬▬▬▬`)
          .setTimestamp()
           .setFooter(`ৡ Developed By Myrøn`)
          message.channel.send(embed)
  message.delete()
        }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol3'],
  permLevel: 0
};
exports.help = {
  name: 'roller3'
};
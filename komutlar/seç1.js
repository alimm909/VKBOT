const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if(!message.member.roles.has("vk yöneticisi rolü id")) return message.channel.send('<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !')
  
       let kanal = message.guild.channels.get(args[0]);
       
       if(!kanal) {
         message.channel.send("Rolleri Seçmek İçin Kanal İdsini Giriniz. Doğru kullanım **!seç1 <Sesli Kanal İd>**")
       } 
        if(kanal) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .addField(
            `Roller`
,`1.Vampir: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`2.Vampir: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Doktor: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Büyücü: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Soytarı: ` + kanal.members.random().user)
          .setTimestamp()
          message.channel.send(embed)
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['seç10','seç1'],
  permLevel: 0
};
exports.help = {
  name: 'seç1'
};
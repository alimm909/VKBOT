const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if(!message.member.roles.has("728928753215995914")) return message.channel.send('<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !')
  
       let kanal = message.guild.channels.get(args[0]);
       
       if(!kanal) {
         message.channel.send("Rolleri Seçmek İçin Kanal İdsini Giriniz. Doğru kullanım **!seç2 <Sesli Kanal İd>**")
       } 
        if(kanal) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .addField(
            `Roller`
,`1. Kurt: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`2. Kurt: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Doktor: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Seri Katil: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Büyücü: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Avcı: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Escort: ` + kanal.members.random().user)
          .addField(
            `▬▬▬▬▬▬`
,`Soytarı: ` + kanal.members.random().user)
          .setTimestamp()
           .setFooter(`ৡ Developed By Myrøn`)
          message.channel.send(embed)
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['seç15','seç2'],
  permLevel: 0
};
exports.help = {
  name: 'seç2'
};
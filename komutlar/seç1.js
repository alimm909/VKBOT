const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if(!message.member.roles.has("713485941452308521")) return message.channel.send('Sadece **VK Yetkilisi** Bunu Kullanabilir !')
  
       let kanal = message.guild.channels.get(args[0]);
       
       if(!kanal) {
         message.channel.send("Rolleri Seçmek İçin Kanal İdsini Giriniz. Doğru kullanım **!!seç20 <sesli kanal id>**")
       } 
        if(kanal) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('gray')
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
           .setFooter(`ৡ Developed By Myrøn`)
          message.channel.send(embed)
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['seç10','seç1','rol1','roller1'],
  permLevel: 0
};
exports.help = {
  name: 'roller1'
};
const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if(!message.member.roles.has("713485941452308521")) return message.channel.send('Sadece **VK Yetkilisi** Bunu Kullanabilir !')
  
       let kanal = message.guild.channels.get(args[0]);
       
       if(!kanal) {
         message.channel.send("Rolleri Seçmek İçin Kanal İdsini Giriniz. Doğru kullanım **!!roller20 <sesli kanal id>**")
       } 
        if(kanal) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('gray')
          .addField(
            `Roller`
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
,`Şerif `)
          .setTimestamp()
           .setFooter(`ৡ Developed By Myrøn`)
          message.channel.send(embed)
        }
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
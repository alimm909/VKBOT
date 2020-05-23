const Discord = module.require('discord.js');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
  
  if(!message.member.roles.has("713485941452308521")) return message.channel.send('Sadece **VK Yetkilisi** Bunu Kullanabilir !')
  
       let kanal = message.guild.channels.get(args[0]);
       
       if(!kanal) {
         message.channel.send('Vapmiri Seçmek İçin Kanal İdsini Giriniz. Doğru kullanım **!vampir <sesli kanal id>**')
       } 
        if(kanal) {
          const embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .setDescription("Vampir Olan Kişi: " + kanal.members.random().user ? kanal.members.random().user : "Kanalda Kimse Yok")
          .setTimestamp()
           .setFooter(`${client.user.tag}`)
          message.channel.send(embed)
        }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['vampir'],
  permLevel: 0
};
exports.help = {
  name: 'sesliçekiliş'
};
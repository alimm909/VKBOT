const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
if(!message.member.roles.has("vk yetkilisi rolü id")) return message.channel.send(`<a:mal:728931807512494080> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !`)
  let every = message.guild.roles.find(r => r.name === 'VK')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': true,
 
})
  
message.channel.send('<a:papagan:728931868874899508> ・ **Gündüz Oldu Sohbet Açık!**')
};
  

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gündüz'],
  permLevel: 0
};

exports.help = {
  name: 'gündüz',
  description: 's',
  usage: 's'
};
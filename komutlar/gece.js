const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
if(!message.member.roles.has("vk yetkilisi rolü id")) return message.channel.send(`Sadece **Vampir-Köylü Yetkilisi** Bu Komudu Kullanabilir !`)
  let every = message.guild.roles.find(r => r.name === 'VK')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': false,
 
})
  
message.channel.send('<a:bsa:713494455952605224> **Geceleri Sohbet Kapalıdır!**')
};
  

 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gece'],
  permLevel: 0
};


exports.help = {
  name: 'gece',
  description: 's',
  usage: 's'
};
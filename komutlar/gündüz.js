const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
if(!message.member.roles.has("728928753215995914")) return message.channel.send(`<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !`)
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
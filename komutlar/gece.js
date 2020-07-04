const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
if(!message.member.roles.has("728928753215995914")) return message.channel.send(`<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !`)
  let every = message.guild.roles.find(r => r.name === 'VK')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': false,
 
})
  
message.channel.send('<a:mal:728931807512494080> ・ **Gece Oldu Sohbet Kapandı**')
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
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
if(!message.member.roles.has("713485941452308521")) return message.channel.send(`Sadece **VK Yetkilisi** Bunu Kullanabilir !`)
  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': false,
 
})
  
message.channel.send('<a:bsa:713494455952605224> **Gece Oldu Chat Kapalı !** <a:bsa:713494455793090632>')
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
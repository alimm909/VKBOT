const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  
  if(message.author.id !== '709459414360260638') return message.reply('Sen kullanamazsın')
  
  let id = args[0] 
  let myron = args.slice(1).join(' ');
  
  if(id.length > 18) return message.reply('Geçerli bir id gir.')  
  if(!id) return message.reply('Kime dm atacağım sahibim.')
  if(!myron) return message.reply('Gönderilecek kullanıcının IDsini belirt dostum!')
  
  client.users.get(id).send(myron)
  
 message.channel.send(id + " ID li kullanıcıya **" + myron + "** mesajını gönderdim.") 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: 'gönder',
  description: 'IDsi girilen kullanıcıya mesaj atar.', 
  usage: 'gönder'
};
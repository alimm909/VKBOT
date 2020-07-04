const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  
  if(!message.member.roles.has("728928753215995914")) return message.channel.send(`<a:hyr:728937091068854282> ・ Sadece **Yetkili** Bu Komudu Kullanabilir !`)

  let id = args[0] 
  let myron = args.slice(1).join(' ');
  
  if(id.length > 18) return message.reply('<a:hyr:728937091068854282> ・ Geçerli Bir İd Gir!')  
  if(!id) return message.reply('<a:hyr:728937091068854282> ・ Kime Dm`den Mesaj Yollayacağım?')
  if(!myron) return message.reply('<a:hyr:728937091068854282> ・ Gönderilecek Kullanıcının İdi Nerde Hani?')
  
  client.users.get(id).send(myron)
  
 message.channel.send(id + " İd`li Kullanıcıya **" + myron + "** Mesajını Gönderdim.") 
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
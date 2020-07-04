const Discord = require('discord.js');
const talkedRecently = new Set();
exports.run = function(client, message,  args) {
let codeworkprefix = args.slice(0).join('!');
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: ・ Bu Özelliği Kullanabilmek İçin Mesajları **Yönet Yetkisine** Sahip Olmalısınız!`);
       if (talkedRecently.has(message.author.id)) {
           return message.channel.send(message.author +" ・ Bu Özelliği 120 Saniyede Bir Kullanabilirsin!");
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 120000);
    }
if(!args[0]) return message.channel.send(message.author + "Lütfen 1-99 Arası Sayı Girin!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:havali:728933960293416960> ・ ${message.member} ・ ${args[0]} **Adet Mesaj Başarıyla Temizlendi.**`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};
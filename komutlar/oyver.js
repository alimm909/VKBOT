const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  let user = message.mentions.users.first();
  if (!user) return message.reply('<a:hyr:728937091068854282> ・ Oy Vereceğin Kişiyi Etiketlemelisin !');
  
  if (user.bot === true) return message.reply('<a:hyr:728937091068854282> ・ Bir İnsanı Etiketle Bir Botu Değil !');
  let x = /(m a l|ma l|m al|amk|sg|oç|sik|amına|amın|orospu|orospo|çocuğu|orosbu|orosbo|cocugu|mal|salak|kapçuk|amcık|amcuk|sikik|amk malı|amına kodum|amınakoduğum|amına koduğum)/
  if (mesaj.match(x)) return message.reply('<a:hyr:728937091068854282> ・ Lütfen Geçerli Birine Oy Veriniz.');
  
  message.delete();
if (mesaj.length < 1) return message.reply('<a:hyr:728937091068854282> ・ Birine Oy Vermelisin.');
  message.delete();
  message.channel.send(`<a:zil:728936893919789066> ・ `+ message.author +`, ** ` + mesaj + ` **Kişisine Oy Verdi !`);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['oyver'],
permLevel: 0
};

exports.help = {
name: 'oyver',
description: 'İstediğiniz şeyi bota yazdırır.',
usage: 'yaz [yazdırmak istediğiniz şey]'
};
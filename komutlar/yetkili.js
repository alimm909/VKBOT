const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
.setColor('0x36393E')
.addField(
`Kurt - Adam Yetkili Komutları`,
`<a:diamond:728935548114436166> ・ **!gece** Gece Olur ve Chati Kapatır.
<a:diamond:728935548114436166> ・ **!gündüz** Gündüz Olur ve Chati Açar.
<a:diamond:728935548114436166> ・ **!seç <Sesli Kanal İd>** Sesli Kanaldaki Kullanıcılar Arasından Rolleri Seçer
<a:diamond:728935548114436166> ・ **!gönder @kullanıcı <mesaj>** Etiketlediğiniz Kullanıcıya Mesaj Atarsınız.
`)
        .setThumbnail(client.user.avatarURL)
      return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','moderasyon','mod'],
  permLevel: 3,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: 'yardım'
};
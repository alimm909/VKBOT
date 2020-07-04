const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setColor('0x36393E')
   
            .addField('<a:pin:728934006606790679> ・ Komutlarımız Aşağıda Yazmaktadır!', '⠀')
        .addField(
`Kurt - Adam Komutlar`,
`<a:venosa_1:697015071661883422> | **!gece** Gece Olur ve Chati Kapatır.
<a:venosa_2:697015515603927150> | **!gündüz** Gündüz Olur ve Chati Açar.
<a:venosa_3:697015515415183380> | **!seç<üyeasıyısı> <seslikanalid>** ID'sini Girmiş Olduğunuz Sesli Kanaldaki Kullanıcılar Arasından Rolleri Seçer
Örnek Kullanım: **!seç20 <seslikanalid>**
<a:venosa_4:697015515641806888> | **!gönder @kullanıcı <mesaj>** Etiketlediğiniz Kullanıcıya DM Atarsınız.
Örnek Kullanım: **!gönder @kullanıcı Senin Rolün Vampir**
<a:venosa_5:697015079220150284> | **!sustur** Etiketlediğiniz Kullanıcıyı Ses Kanalında Susturur.
`)
        .setThumbnail(client.user.avatarURL)
      return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','moderasyon','mod'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: 'yardım'
};
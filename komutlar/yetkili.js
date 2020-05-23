const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setColor('0x36393E')
   
            .addField('<a:loading:697014306268643339> Komutlarımız aşağıda yazmaktadır.', '⠀')
        .addField(
`VK Komutlar`,
`<a:venosa_1:697015071661883422> | **${ayarlar.prefix}gece** Gece Olur ve Chati Kapatır.
<a:venosa_2:697015515603927150> | **${ayarlar.prefix}gündüz** Gündüz Olur ve Chati Açar.
<a:venosa_3:697015515415183380> | **${ayarlar.prefix}seç<üyeasıyısı> <kanalID>** ID'sini Girmiş Olduğunuz Sesli Kanaldaki Kullanıcılar Arasından Rolleri Seçer
Örnek Kullanım: **${ayarlar.prefix}seç20 <seslikanalID>`)
        .setThumbnail(client.user.avatarURL)
    .addField('<a:kalpler:697013879854727169> Sizde beni sunucunuza davet etmek mi istiyorsunuz ?', '`!!davet` Yazarak Beni Sunucuna Davet Edebilirsin ^^')
        .setFooter(`Developed By 'Myrøn#6966`)
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
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setColor('0x36393E')
   
            .addField('<a:mire83:697019897581928509> Komutlarımız aşağıda yazmaktadır.', '.')
        .addField(
`Genel Komutlar`,
`<a:blobgame:707247837032743022> | **${ayarlar.prefix}yetkili** Yetkili komutlarını gösterir.
<a:mire90:697020013969932338> | **${ayarlar.prefix}oyuncu** Oyuncu komutlarını gösterir.
<a:siren:707247553053327460> | **${ayarlar.prefix}eğlence [KAPALI]** Eğlence komutlarını gösterir.`)
        .setThumbnail(client.user.avatarURL)
    .addField('<a:bell1:695713317674811412> Sizde beni sunucunuza davet etmek mi istiyorsunuz ?', '`!!davet` Yazarak Beni Sunucuna Davet Edebilirsin ^^')
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
      return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};
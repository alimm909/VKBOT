const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setColor('0x36393E')
   
            .addField('<a:loading:697014306268643339> Komutlarımız aşağıda yazmaktadır.', '⠀')
        .addField(
`VK Komutlar`,
`<a:venosa_1:697015071661883422> | **${ayarlar.prefix}oyver** Etiketlediğin Kullanıcıya Oy Verirsin.
<a:venosa_2:697015515603927150> | Loading...
`)
        .setThumbnail(client.user.avatarURL)
    .addField('<a:kalpler:697013879854727169> Sizde beni sunucunuza davet etmek mi istiyorsunuz ?', '`!!davet` Yazarak Beni Sunucuna Davet Edebilirsin ^^')
        .setFooter(`Developed By 'Myrøn#6966`)
      return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyuncu','kullanıcı','kullanici'],
  permLevel: 0,
};

exports.help = {
  name: 'oyuncu',
  description: '',
  usage: 'yardım'
};
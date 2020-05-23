const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setColor('0x36393E')
   
            .addField('<a:loading:697014306268643339> Komutlarımız aşağıda yazmaktadır.', '⠀')
        .addField(
`VK Komutlar`,
`<a:venosa_hypsquad:697014806372155413> | **${ayarlar.prefix}yetkili** Yetkili komutlarını gösterir.
<a:venosa_hypesquad:697014806372155413> | **${ayarlar.prefix}oyuncu** Oyuncu komutlarını gösterir.
<a:venosa_hypesquad:697014806372155413> | **${ayarlar.prefix}eğlence [KAPALI]** Eğlence komutlarını gösterir.`)
        .setThumbnail(client.user.avatarURL)
    .addField('<a:kalpler:697013879854727169> Sizde beni sunucunuza davet etmek mi istiyorsunuz ?', '`!!davet` Yazarak Beni Sunucuna Davet Edebilirsin ^^')
        .setFooter(`Developed By 'Myrøn#6966`)
      return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardim'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};
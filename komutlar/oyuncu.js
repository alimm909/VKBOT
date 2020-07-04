const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setColor('0x36393E')
   
            .addField('<a:pin:728934006606790679> ・ Komutlarımız Aşağıda Yazmaktadır!', '⠀')
        .addField(
`Kurt-Adam Komutlar`
`<a:dance:728935587930964098> ・ **${ayarlar.prefix}oyver** Etiketlediğin Kullanıcıya Oy Verirsin.
<a:havali:728933960293416960> ・ Yükleniyor...
`)
        .setThumbnail(client.user.avatarURL)
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
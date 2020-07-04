const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
.setColor('0x36393E')
.addField(
`Kurt - Adam Oyuncu Komutları`,
`<a:diamond:728935548114436166> ・ **!oyver** Etiketlediğiniz Kişiye Oy Verir.
<a:diamond:728935548114436166> ・ **!rol1** Rolleri Gösterir.`)
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
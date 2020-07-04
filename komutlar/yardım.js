const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
.setColor('0x36393E')
.addField(
`Kurt - Adam Komutlar`,
`<a:diamond:728935548114436166> ・ **!yetkili** Yetkili Komutlarını Gösterir!
<a:diamond:728935548114436166> ・ **!oyuncu** Oyuncu Komutlarını Gösterir!`)
.setThumbnail(client.user.avatarURL)
return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardim','yrd'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};
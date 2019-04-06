const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('RANDOM')
  .addField(`:musical_note: Müzik Komutları :musical_note:`, '!çal: İstediğin şarkıyı çalar.\n!duraklat: Müziği duraklatır.\n!!devam: Müziği devam ettirir.\n!tekraret: Müziği tekrarlatır.\n!geç: Geçerli çalınan müziği geçer\n!!ses: Belirlediğiniz değerde sesi açar.\n!!stop: Müziği kapatır.')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzik',
    description: 'yardım',
    usage: 'yardım'
  };
 
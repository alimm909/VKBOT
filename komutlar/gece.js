const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.find(r => r.name === "@everyone");
  message.channel.overwritePermissions(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("<a:mal:728931807512494080> ・ **Gece Oldu Sohbet Kapandı**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k", "skapat", "kapat"],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "gece",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};
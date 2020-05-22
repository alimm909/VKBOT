const Discord = require("discord.js")
exports.run = async function(client, message, args) {
const user = message.mentions.members.first()

if (!user) return message.reply("Kullanıcıyı etiketle")

if (!user.voiceChannel || user.voiceChannel.id === null || user.voiceChannel.id === NaN || user.voiceChannel.id === undefined) return message.reply(`**Etiketlediğin kullanıcı zaten, herhangi bir ses kanalında bulunmuyor.**`)

user.setVoiceChannel(null).then(() => {


  message.channel.send('ok')
})

}
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["bağlantı-kes","sik","çek"],
permLevel: 3
}
exports.help = {
name: 'bağlantı-kes',
description: 'Kullanıcının bağlantısını keser.',
usage: 'bağlantı-kes @Üye #Kanal'
}
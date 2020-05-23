const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji ismi belirtmediniz")
    const batu2 = ("Emoji URL:", `${emoji.url}`)
    const batu3 = ("Emoji ID:", `${emoji.id}`)
  message.channel.send(batu2)
  message.channel.send(batu3)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojibilgi'],
    permLevel: 3
}
exports.help = {
    name: 'emoji',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
} 
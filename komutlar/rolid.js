const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client,message,args) => {
var rol = message.content.split(" ").slice(1).join(" ");
let role = message.guild.roles.find("name", `${rol}`)
var hata = new Discord.RichEmbed()
.setColor("#36393F")
.setDescription("❌ Lütfen Bir Rol İsmi Yazın");
if(!role) return message.channel.send(hata);
var moment = require("moment");
var temps = moment(message.createdTimestamp).format("LLLL");
message.channel.send('' + role.id)

}
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['rolinfo', 'rolhakkında',],
permLevel: 3
};

exports.help = {
name: 'rol',
description: 'Yazılan Rolun id sini atar',
usage: 'rolinfo <rolismi>'
};
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var musti = [
        `${client.users.size} Kullanıcı + ${prefix}yardım`,
        `💎 ${prefix}help`,
  `Coded By 'Myrøn#6966`
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(musti.length-0+1)+0);

        client.user.setActivity(musti[random], { type: "WATCHING" });
        }, 2 * 2500);
      client.user.setStatus("idle");
};

//  client.user.setGame(); 
// client.user.setGame();

 
module.exports = member => {
  let guild = member.guild;
  member.send('Byeeee!');
  guild.defaultChannel.send(``);
};

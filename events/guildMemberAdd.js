module.exports = member => {
    let username = member.user.username;
    member.send('Welcome to the Server!' + username );
    member.guild.defaultChannel.send('');
};

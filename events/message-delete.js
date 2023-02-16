const secrets = require('../secrets.js');
const { defaultEmbedColor } = require('../constants.js');
const { Events } = require("discord.js");

const onMessageDelete = function (msg) {
    if (msg.author.bot) return

    const log_channel = msg.guild.channels.cache.find(channel => channel.name === secrets.logChannel);

    const embed = {
        title: "Message Deleted",
        description: `Message sent by ${msg.author} in ${msg.channel} was deleted.`,
        color: defaultEmbedColor,
        fields: [
            {
                name: "Message Content",
                value: msg.content
            }
        ],
        timestamp: new Date(),
        footer: {
            text: "Message Deleted"
        }
    }

    log_channel.send({embeds: [embed]})
}

module.exports = {
    name: Events.MessageDelete,
    func: onMessageDelete
}
const secrets = require('../secrets.js');
const { defaultEmbedColor } = require('../constants.js');
const { Events } = require("discord.js");

const onMessageEdit = function (oldMsg, newMsg) {
    if (oldMsg.author.bot) return

    const log_channel = oldMsg.guild.channels.cache.find(channel => channel.name === secrets.logChannel);

    const embed = {
        title: "Message Edited",
        description: `Message sent by ${oldMsg.author} in ${oldMsg.channel} was edited.`,
        color: defaultEmbedColor,
        fields: [
            {
                name: "Old Message Content",
                value: oldMsg.content
            },
            {
                name: "New Message Content",
                value: newMsg.content
            }
        ],
        timestamp: new Date(),
        footer: {
            text: "Message Edited"
        }
    }

    log_channel.send({embeds: [embed]})
}

module.exports = {
    name: Events.MessageUpdate,
    func: onMessageEdit
}
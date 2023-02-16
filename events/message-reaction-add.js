const secrets = require('../secrets.js');
const { emojiToRole } = require('../constants.js');
const { Events } = require('discord.js');

const onMessageReactionAdd = async (reaction, user) => {
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the message:', error);
            return;
        }
    }

    if (reaction.message.id !== secrets.rolesMessageId && reaction.message.id !== secrets.pronounRolesMessageId) return;

    const member = reaction.message.guild.members.cache.get(user.id);
    const role = reaction.message.guild.roles.cache.find(role => role.name === emojiToRole[reaction.emoji.name]);

    if (member.roles.cache.has(role.id)) return;

    member.roles.add(role);
};

module.exports = {
    name: Events.MessageReactionAdd,
    func: onMessageReactionAdd
}
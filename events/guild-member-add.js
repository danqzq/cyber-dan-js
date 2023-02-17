const { client } = require('../index.js')
const { guildId } = require('../secrets.js');
const { Events } = require("discord.js");

const onGuildMemberAdd = function (member) {
	const role = client.guilds.cache.get(guildId).roles.cache.find(role => role.name === "Members");

	member.roles.add(role);
}

module.exports = {
	name: Events.GuildMemberAdd,
	func: onGuildMemberAdd
}
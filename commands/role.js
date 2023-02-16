const { defaultEmbedColor, emojiToRole } = require('../constants.js');
const { SlashCommandBuilder } = require('discord.js');

const [a, b, c, d, e, f, g, h, i] = Object.values(emojiToRole).map((role, index) => {
    return { name: role + ' ' + Object.keys(emojiToRole)[index], value: role }
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('role')
        .setDescription('Assigns/removes a role from yourself.')
        .addStringOption(option =>
            option.setName('role-name')
                .setDescription('The name of the role to assign/remove.')
                .setRequired(true)
                .addChoices(a, b, c, d, e, f, g, h, i)),
    async execute(interaction) {
        const roleName = interaction.options.getString('role-name');

        const member = interaction.guild.members.cache.get(interaction.user.id);
        const role = interaction.guild.roles.cache.find(role => role.name === roleName);

        if (member.roles.cache.has(role.id)) {
            member.roles.remove(role);

            const embed = {
                "title": "Role Removed",
                "description": `You have removed the role ${role} from yourself`,
                "color": defaultEmbedColor,
                "footer": {
                    "text": "You can add this role back by using the /role command again."
                }
            }
            await interaction.reply({ embeds: [embed] });
            return;
        }

        member.roles.add(role);

        const embed = {
            "title": "Role Assigned",
            "description": `You have been assigned the role ${role}.`,
            "color": defaultEmbedColor,
            "footer": {
                "text": "You can remove this role by using the /role command again."
            }
        }
        await interaction.reply({ embeds: [embed] });
    },
};
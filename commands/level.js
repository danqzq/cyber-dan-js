const { db } = require('../index.js');
const { defaultEmbedColor } = require("../constants");
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('level')
        .setDescription('Displays your current level and points.'),
    async execute(interaction) {
        await db.users.find({ userId: interaction.user.id }, async function (err, docs) {
            const user = docs[0];
            let level = 1;
            let points = user.points;
            while (points >= level << 1) {
                points -= level << 1;
                level++;
            }
            const pointsToNextLevel = (level << 1) - points;

            const embed = {
                "title": "Stats of " + interaction.user.tag,
                "description": "**Level:** " + level + "\n**XP:** " +
                    points + "\n**XP to next level:** " + pointsToNextLevel,
                "color": defaultEmbedColor
            }
            await interaction.reply({ embeds: [embed] });
        });
    },
};
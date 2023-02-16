const { eightBallResponses } = require('../constants.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Gives the most truthful response to a Yes/No question.')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('A Yes/No question.')
                .setRequired(true)),
    async execute(interaction) {
        const embed = {
            "title": "Asked by " + interaction.user.username + ":",
            "description": interaction.options.getString('question') + "\n\n" +
                "**Response:**\n" + eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)],
        }
        await interaction.reply({ embeds: [embed] });
    },
};
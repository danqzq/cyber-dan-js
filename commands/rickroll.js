const { SlashCommandBuilder } = require('discord.js');

const rickRoll = "We're no strangers to love\n" +
    "You know the rules and so do I\n" +
    "A full commitment's what I'm thinking of\n" +
    "You wouldn't get this from any other guy\n" +
    "\n" +
    "I just wanna tell you how I'm feeling\n" +
    "Gotta make you understand\n" +
    "\n" +
    "Never gonna give you up\n" +
    "Never gonna let you down\n" +
    "Never gonna run around and desert you\n" +
    "Never gonna make you cry\n" +
    "Never gonna say goodbye\n" +
    "Never gonna tell a lie and hurt you\n" +
    "\n" +
    "We've known each other for so long\n" +
    "Your heart's been aching but you're too shy to say it\n" +
    "Inside we both know what's been going on\n" +
    "We know the game and we're gonna play it\n" +
    "And if you ask me how I'm feeling\n" +
    "Don't tell me you're too blind to see\n" +
    "\n" +
    "Never gonna give you up\n" +
    "Never gonna let you down\n" +
    "Never gonna run around and desert you\n" +
    "Never gonna make you cry\n" +
    "Never gonna say goodbye\n" +
    "Never gonna tell a lie and hurt you\n" +
    "\n" +
    "Never gonna give you up\n" +
    "Never gonna let you down\n" +
    "Never gonna run around and desert you\n" +
    "Never gonna make you cry\n" +
    "Never gonna say goodbye\n" +
    "Never gonna tell a lie and hurt you\n" +
    "\n" +
    "Never gonna give, never gonna give\n" +
    "(Give you up)\n" +
    "\n" +
    "We've known each other for so long\n" +
    "Your heart's been aching but you're too shy to say it\n" +
    "Inside we both know what's been going on\n" +
    "We know the game and we're gonna play it\n" +
    "\n" +
    "I just wanna tell you how I'm feeling\n" +
    "Gotta make you understand\n" +
    "\n" +
    "Never gonna give you up\n" +
    "Never gonna let you down\n" +
    "Never gonna run around and desert you\n" +
    "Never gonna make you cry\n" +
    "Never gonna say goodbye\n" +
    "Never gonna tell a lie and hurt you\n" +
    "\n" +
    "Never gonna give you up\n" +
    "Never gonna let you down\n" +
    "Never gonna run around and desert you\n" +
    "Never gonna make you cry\n" +
    "Never gonna say goodbye\n" +
    "Never gonna tell a lie and hurt you\n" +
    "\n" +
    "Never gonna give you up\n" +
    "Never gonna let you down\n" +
    "Never gonna run around and desert you\n" +
    "Never gonna make you cry\n" +
    "Never gonna say goodbye"
const rickAstleyPng = "https://styles.redditmedia.com/t5_2ldvug/styles/communityIcon_aq22b2qb50u41.png"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rickroll')
        .setDescription('Sends the lyrics of the best song ever.'),
    async execute(interaction) {
        const embed = {
            "title": "Never Gonna Give You Up",
            "description": rickRoll,
            "color": 16711680,
            "footer": {
                "icon_url": rickAstleyPng,
                "text": "Rick Astley - Never Gonna Give You Up"
            }
        }
        await interaction.reply({ embeds: [embed] });
    },
};
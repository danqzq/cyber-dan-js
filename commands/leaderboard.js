const { db, client } = require('../index.js');
const { SlashCommandBuilder } = require('discord.js');

const fetchUser = async id => client.users.fetch(id);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Displays a leaderboard of most active members.')
        .addStringOption(option =>
            option.setName('places')
                .setDescription('The number of places to display.')
                .setRequired(false)),
    async execute(interaction) {
        const places = parseInt(interaction.options.getString('places')) || 10;
        if (places > 25) {
            await interaction.reply({ content: 'You can only display up to 25 places!', ephemeral: true });
            return;
        }

        await db.users.find({ }, async function (err, docs) {
            const sortedUsers = [];
            docs.forEach(function (doc) {
                sortedUsers.push({ userId: doc.userId, points: doc.points });
            });

            sortedUsers.sort(function (a, b) {
                return b.points - a.points;
            });

            sortedUsers.length = places;

            await Promise.all(sortedUsers.map(async (user) => {
                const fetchedUser = await fetchUser(user.userId);
                user.username = fetchedUser.tag;
            }));

            const desc = sortedUsers.map(function (user, index) {
                let level = 1;
                let points = user.points;
                while (points >= level << 1) {
                    points -= level << 1;
                    level++;
                }
                let userStanding = (index + 1) + ") **" + user.username + "**: Level " + level;
                const medalEmojis = {
                    0: ':first_place:',
                    1: ':second_place:',
                    2: ':third_place:',
                };
                const emoji = !medalEmojis[index] ? ':plunger:' : medalEmojis[index] + " ";
                return emoji + userStanding;
            }).join("\n");

            const embed = {
                "title": "Leaderboard",
                "description": desc,
                "color": 0x6093d0
            }
            await interaction.reply({ embeds: [embed] });
        });
    },
};
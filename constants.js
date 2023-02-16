const defaultEmbedColor = 0x6093d0;

const emojiToRole = {
    "🎮": "Gamer",
    "⚒️": "Tinkerer",
    "🕹️": "Game Designer",
    "👨‍💻": "Programmer",
    "👨‍🎨": "Artist",
    "🎵": "Musician",
    "🙋‍♂️": "He/Him",
    "🙋‍♀️": "She/Her",
    "🙋": "They/Them",
}

const oofGifs = ["https://media1.tenor.com/images/432261184122de5c0142153dbeac3387/tenor.gif",
    "https://media1.tenor.com/images/f9ef49b7c23c0bf3173ed6ec6e250e29/tenor.gif",
    "https://img.itch.zone/aW1nLzQ0NzcwNzYuZ2lm/original/YKKKit.gif",
    "https://media.tenor.com/images/f7848864d04fb2be71cd890e9786f3f1/tenor.gif",
    "https://media.tenor.com/images/d158b92b24bae6c59fe60d2014bf01f4/tenor.gif",
    "https://media.tenor.com/images/3f487d1857dcc568a488fe40e79b0396/tenor.gif",
    "https://media.tenor.com/images/424b9f06757c1641d0f3495afd177e2e/tenor.gif",
    "https://media1.tenor.com/images/bb4ea4546c74488d8e1f2fa0a9ffdaf3/tenor.gif",
    "https://media1.tenor.com/images/66cf8ea326db942e2a5a882640676c1c/tenor.gif",
    "https://media.tenor.com/images/153e0f2d44b859b34a9877e67059bbbd/tenor.gif",
    "https://media.tenor.com/images/6bca13154e250cfe1cae7c2ba86ad39b/tenor.gif",
    "https://media1.tenor.com/images/f66dadf4c954d58dae44522284fdd8ca/tenor.gif",
    "https://media1.tenor.com/images/a1cbba015cc3601610268066628c8e80/tenor.gif",
    "https://media1.tenor.com/images/b76972d1e726e0f922534faa94a77db2/tenor.gif",
    "https://media1.tenor.com/images/593781b73bcd387855def06e71c8160f/tenor.gif"]

const eightBallResponses = ['That is a resounding no', 'It is not looking likely', 'Too hard to tell',
    'It is quite possible', 'Definitely', 'YES', 'No, never', 'Probably not', 'As I see it, yes',
    'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again',
    'Don’t count on it','It is certain', 'It is decidedly so', 'Most likely', 'My reply is no',
    'My sources say no', 'Signs point to yes', 'Very doubtful', 'Without a doubt',
    'Yes.','Yes – definitely','You may rely on it']

module.exports = {
    defaultEmbedColor,
    emojiToRole,
    oofGifs,
    eightBallResponses
}
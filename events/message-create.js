const { db } = require('../index.js');
const { defaultEmbedColor, oofGifs } = require('../constants.js');
const { Events } = require("discord.js");
const secrets = require('../secrets.js');

const onMessageCreate = function (msg) {
    if (msg.author.bot) return

    const content = msg.content.toLowerCase();

    if (msg.channel.name === secrets.eChannel && content !== 'e') {
        msg.delete(500);
        return;
    }

    if (content.includes("indeed")) {
        msg.channel.send("Indeed!");
    } else if (content.length > 20 && (content.includes("lol") || content.includes("lmao") ||
        content.includes("lmfao") || content.includes("lul") || content.includes("lel"))) {
        msg.react("🤣");
    } else if (content.includes("xd")) {
        msg.channel.send("XD");
    } else if (content.includes("yeet")) {
        msg.channel.send("Yeet!");
    } else if (content.includes("please") || content.includes("pls") || content.includes("plz")) {
        msg.channel.send("Yes please");
    } else if (content.includes("oof")) {
        const embed = {
            color: defaultEmbedColor,
            image: {
                url: oofGifs[Math.floor(Math.random() * oofGifs.length)]
            }
        }
        msg.channel.send({embeds: [embed]});
    }

    const user = msg.author.id;

    db.users.find({userId: user}, function (err, docs) {
        if (docs.length > 0) {
            db.users.update({userId: user}, {$inc: {points: 1}}, {}, function (err, _) {
                if (err) {
                    console.log(err);
                }
            });
            return;
        }
        db.users.insert({userId: user, points: 1}, function (err, newDoc) {
            if (err) {
                console.log(err);
            }
        });
    });
}

module.exports = {
    name: Events.MessageCreate,
    func: onMessageCreate
}
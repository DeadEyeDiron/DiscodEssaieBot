const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class StatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reacts',
            memberName: 'reacts',
            group: 'divers',
            description: 'Affiche les reaction dans discord.',
        });
    }

    async run(msg) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`Exemple de message avec des réactions`)
        ;

        const replyMsg = await msg.say(embed); // on conserve dans 'replyMsg' les informations sur message que nous venons d'envoyer

        // on ajoute les réactions à notre réponse :
        replyMsg.react('❤️');

        // utilisation d'un emoji externe :
        const customCatEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'cat');
        if (customCatEmoji) {
             replyMsg.react(customCatEmoji);
        }
}
};
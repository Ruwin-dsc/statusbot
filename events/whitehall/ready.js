///////////////////////////////////////////////////////////////////////
///                                                                 ///
///   https://discord.gg/xkebY6nsxk for support codded by ruwinou   ///
///                                                                 ///
///////////////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
  name: "ready",
  async execute(bot) {
    let newBots = "", msg, save = []
    console.log(`
    ///////////////////////////////////////////////////////////////////////
    ///                                                                 ///
    ///   https://discord.gg/xkebY6nsxk for support codded by ruwinou   ///
    ///                                                                 ///
    ///////////////////////////////////////////////////////////////////////
    `)
    setInterval(async () => {
bot.guilds.cache.forEach(async (guild) => {

     bot.users.cache.forEach(async (user) => {
        const member = guild.members.cache.get(user.id)
        if(!member) return
        if(config.bot.includes(member.id)) {
        if(save.includes(member.id)) return
        if(member.presence?.status === 'online' || member.presence?.status === 'idle' || member.presence?.status === 'dnd' ) {
            newBots += `${member} : 🟢\n`
            save.push(member.id)
        } else {
            newBots += `${member} : 🔴\n`
            save.push(member.id)
        } 
            
        }
    })
})
        const timerefresh = Date.now() + Number(config.temps) * 3
        const embedStatut = new Discord.EmbedBuilder()
        .setDescription(`${newBots}\nProchain refresh dans: <t:${Math.floor(timerefresh / 1000)}:R>`)
        .setFooter({ text: `©️ Powered by WhiteHall (ruwinou)` })

        const salon = bot.channels.cache.get(config.channelId)
        if(!salon) return console.log(`Salon invalide !`)
        newBots = ""
        save = []
        if(!msg) {
            msg = await salon.send({ embeds: [embedStatut] })
        } else {
            msg.edit({ embeds: [embedStatut] })
        }
}, config.temps)

  }
}

///////////////////////////////////////////////////////////////////////
///                                                                 ///
///   https://discord.gg/xkebY6nsxk for support codded by ruwinou   ///
///                                                               ///
///////////////////////////////////////////////////////////////////////

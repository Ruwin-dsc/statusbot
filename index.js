///////////////////////////////////////////////////////////////////////
///                                                                 ///
///   https://discord.gg/3rThTcUHZr for support codded by ruwinou   ///
///                                                                 ///
///////////////////////////////////////////////////////////////////////

const Discord = require('discord.js');
const config = require('./config.json')

const bot = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildPresences,
    Discord.GatewayIntentBits.GuildVoiceStates,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.GuildMessageReactions,
    Discord.GatewayIntentBits.GuildBans,
    Discord.GatewayIntentBits.GuildEmojisAndStickers,
    Discord.GatewayIntentBits.GuildInvites,
  ],
  partials: [
    Discord.Partials.Channel,
    Discord.Partials.Message,
    Discord.Partials.User,
    Discord.Partials.GuildMember,
    Discord.Partials.Reaction,
    Discord.Partials.ThreadMember,
    Discord.Partials.GuildScheduledEvent,
  ]
});

bot.commands = new Discord.Collection()

const eventdHandler = require("./handlers/event.js")(bot); 


bot.login(config.token);

///////////////////////////////////////////////////////////////////////
///                                                                 ///
///   https://discord.gg/3rThTcUHZr for support codded by ruwinou   ///
///                                                                 ///
///////////////////////////////////////////////////////////////////////

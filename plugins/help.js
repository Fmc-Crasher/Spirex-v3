const WhatsAlexa = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'ᴛʜᴀɴᴋѕ'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'ɪᴛ ᴡᴀѕ ʜᴇʟᴘғᴜʟʟ'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: '©ᴍᴀ²ᴅ'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "╭═══〘 *ᴏғғᴄɪᴀʟ ʙᴏᴛ* 〙══⊷❍\n┃☞︎︎︎╭──────────────────\n┃☞︎︎︎│   *ʜᴇͧʀᷤᴍͤɪͬ† ⚚ ᴘɪⷡᴋⷪᴀⷮᴄᷤʜᴜ*\n┃☞︎︎︎╰────────────────\n╰═══════════════════⊷ ",

          footerText: '╔════════════════════❍\n║⛀       *〚 ᴄᴏᴍᴍᴀɴᴅѕ⚚ 〛*\n║⛂╭─────────────────⊷\n║⛂├────〖 *ᴍᴇᴅɪᴀ* 〗\n║⛂│\n║⛂│➮ .ѕᴏɴɢ\n║⛂│➮ .ᴠɪᴅᴇᴏ\n║⛂│➮ .ɪɴѕᴛᴀ \n║⛂│➮ .ʏᴛ\n║⛂│\n║⛁├────〖 *ᴄᴏɴᴠᴇʀᴛ* 〗\n║⛁│\n║⛁│☛.ɢɪғ\n║⛁│☛.ᴍᴘ3\n║⛁│☛.ᴛᴛѕ\n║⛁│☛.ɪᴍɢ\n║⛁│☛.ѕᴛɪᴄᴋᴇʀ\n║⛁│☛.ᴀᴛᴛᴘ\n║⛁│☛.ᴛᴛᴘ\n║⛁│☛.ᴘʜᴏᴛᴏ\n║⛁│☛.2ɪᴍɢ\n║⛃│\n║⛃├───〖 *ᴍᴀᴋᴇʀ* 〗\n║⛃│\n║⛃│➣ .ᴍᴏʀᴇᴛxᴛ\n║⛃│➣ .𝟸ᴍᴏʀᴇᴛxᴛ\n║⛃│➣ .xᴍᴇᴅɪᴀ\n║⛃│➣ .ᴍᴍᴘᴀᴄᴋ\n║⛃│\n║⛀├───〖 *ѕᴇᴀʀᴄʜ* 〗\n║⛀│\n║⛀│➢ .ᴡɪᴋɪ\n║⛀│➢ .ʟʏʀɪᴄ\n║⛀│➢ .ѕʜᴏᴡ\n║⛀│➢ .ᴍᴏᴠɪᴇ\n║⛀│➢ .ᴡᴇᴀᴛʜᴇʀ\n║⛂│\n║⛂├───〖 *ᴛᴀɢ* 〗\n║⛂│\n║⛂│✑ .ᴛᴀɢᴀʟʟ \n║⛂│✑ .ᴛᴀɢᴀᴅᴍɪɴѕ\n║⛁│\n║⛁├───〖 *ғᴜɴ* 〗\n║⛁│\n║⛁│➫ .ᴊᴏᴋᴇ\n║⛁│➫ .ᴍᴇᴍᴇ\n║⛁│➫ .ǫʀ\n║⛁│➫ .ᴄʜᴀɴɢᴇѕᴀʏ\n║⛁│➫ .ᴛʀᴜᴍᴘѕᴀʏ\n║⛁│➫ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ\n║⛃│\n║⛃├───〖 *ᴏᴛʜᴇʀ* 〗\n║⛃│\n║⛃│➮ .ᴀɴɪᴍᴇ\n║⛃│➮ .ᴡᴀʟʟᴘᴀᴘᴇʀ\n║⛃│➮ .ѕѕ\n║⛃│➮ .ᴅɪᴄᴛ\n║⛃│➮ .ѕʜᴏʀᴛ\n║⛃│➮ .ᴛʀᴛ\n║⛃│➮ .ʀᴇᴍᴏᴠᴇʙɢ\n║⛀│\n║⛀├──〖 *ᴏᴡɴᴇʀ ᴄᴍɴᴅѕ* 〗\n║⛀│\n║⛀│☞ .ғᴜʟʟᴇᴠᴀ \n║⛀│☞ .ᴀᴜᴛᴏʙɪᴏ\n║⛀│☞ .ʙᴀɴ\n║⛀│☞ .ᴀᴅᴅ\n║⛀│☞ .ᴘʀᴏᴍᴏᴛᴇ\n║⛀│☞ .ᴅᴇᴍᴏᴛᴇ\n║⛀│☞ .ᴍᴜᴛᴇ\n║⛀│☞ .ᴜɴᴍᴜᴛᴇ\n║⛀│☞ .ɪɴᴠɪᴛᴇ\n║⛀│☞ .ѕᴇᴛᴠᴀʀ\n║   ╰───────────────⊷\n╚═══════════════════❍\n© ᴄᴏᴅᴇᴅ ʙʏ *©ᴍᴀ²ᴅ*',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

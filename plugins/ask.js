const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'ask', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*Da*');
    await message.sendMessage('*Mwonu*');
    await message.sendMessage('*Ni entha onnum mindathe*');
    await message.sendMessage('Spam Akuva 😒');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*ini *');
    await message.sendMessage('*unknown*');
    await message.sendMessage('*language*');
    await message.sendMessage('🥰 *Parayam* 🥰');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*S*');
    await message.sendMessage('*Se*');
    await message.sendMessage('*Sev*');
    await message.sendMessage('*Sevi*');
    await message.sendMessage('*Seviy*');
    await message.sendMessage('*Seviyo*');
    await message.sendMessage('*Seviyor*');
    await message.sendMessage('*Seviyoru*');
    await message.sendMessage('💞 *Seviyorum* 💗');
    
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('Seni ♥️ Seviyorum');

}));

Asena.addCommand({pattern: 'infoask', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by Ameen And Rafi*\n*Seni seviyorum demenin güzel bir hali.*\n💻Usage: *.ask*")

}));
   
Asena.addCommand({pattern: 'love', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*I*');
    await message.sendMessage('*I L*');
    await message.sendMessage('*I Lo*');
    await message.sendMessage('*I Lov*');
    await message.sendMessage('*I Love*');
    await message.sendMessage('*I Love Y*');
    await message.sendMessage('*I Love Yo*');
    await message.sendMessage('😍 *I Love You* 😍');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*S*');
    await message.sendMessage('*So*');
    await message.sendMessage('*So M*');
    await message.sendMessage('*So Mu*');
    await message.sendMessage('*So Muc*');
    await message.sendMessage('💕 *So Much* 💞');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('I 💖 You');

}));

Asena.addCommand({pattern: 'infolove', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by Ameen And Rafi*\n*To say best way ı love you.*\n💻Usage: *.love*")

}));

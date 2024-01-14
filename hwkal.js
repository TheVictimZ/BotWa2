// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/CEh242bIyfo5qIBC901Tk4'
global.ig = '@chel_hbs' // ubah aja
global.email = 'im@cheliant.shop' //serah
global.region = 'Indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Chel AI' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['62877424664779'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Chel Bot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Chel Bot' // ubah aja ini nama sticker
global.author = 'Owner: 62877424664779' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.mess = 
{
    succes: '_sᴜᴋsᴇs_',
    admin: '_ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ_',
    botadmin: '_ʙᴏᴛ ʜᴀʀᴜs ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ_',
    owner: '_ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ʀɪɪɢᴀᴍᴛᴇɴᴋ_',
    group: '_ғɪᴛᴜʀᴇ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ɢʀᴏᴜᴘ ᴄʜᴀᴛ_',
    private: '_ғɪᴛᴜʀᴇ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ_',
    bot: '_ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ᴘᴇɴɢɢᴜɴᴀ ɴᴏᴍᴏʀ ʙᴏᴛ_',
    error: '_ᴍᴜɴɢᴋɪɴ sᴇᴅᴀɴɢ ᴇʀʀᴏʀ ᴋᴀ ʜᴀʀᴀᴘ ʟᴀᴘᴏʀ ᴏᴡɴᴇʀ ᴀɢᴀʀ sᴇɢᴇʀᴀ ᴅɪ ᴘᴇʀʙᴀɪᴋɪ_ ',
    wait: '_sᴇᴅᴀɴɢ ᴅɪ ᴘʀᴏsᴇs ..._',
    premium: '_ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀ_',

}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
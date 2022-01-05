const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./mess/myfunc')
const { color } = require('./mess/color')
const welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
number = '62857759034264@s.whatsapp.net'

require('./srv/sonel.js')
nocache('./srv/sonel.js', module => console.log(`${module} Telah Di Updated... Jangan Lupa Subscribe SonelBotz`))

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const starts = async (sonel = new WAConnection()) => {
sonel.logger.level = 'warn'
sonel.version = [2, 2143, 3]
sonel.browserDescription = [ 'Sonel', 'Firefox', '3.0' ]
console.log(banner.string)
console.log(color(`[•] [ CREATED BY SONEL ] [•]`))
console.log(color('[SC ORI SONELBOTZ]'))
console.log(color('[JANGAN JUAL SC INI, JUAL = MANDUL],'))
console.log(color('[Base Ori Zero YT7],'))
console.log(color('[Mau Reupload? Izin Dulu],'))
console.log(color('[Tqtq SonelBotz, KurrXd, OfficialDittaz, Zeeone Ofc, ZeroYT7],'))
sonel.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Please... Scan Is Now Qr Code !'))
})

fs.existsSync('./session.json') && sonel.loadAuthInfo('./session.json')

sonel.on('connecting', () => {
start('2', 'Sedang Menyambungkan Mohon Tunggu...')
})
sonel.on('open', () => {
success('2', 'Bot Telah Tersambung... Jangan Lupa Subscribe sonelBotz')
})
await sonel.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(sonel.base64EncodedAuthInfo(), null, '\t'))
sonel.on('chat-update', async (message) => {
require('./srv/sonel.js')(sonel, message)
})
    
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1;
mhan = await sonel.prepareMessage(id, kma, MessageType.image);
buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
sonel.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

sonel.on('group-participants-update', async (anu) => {
try {
var mdata = await sonel.groupMetadata(anu.jid)
groupMet = await sonel.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]
console.log(anu)
try {
pp_user = await sonel.getProfilePicture(mem)
} catch (e) {
pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
try {
pp_grup = await sonel.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
if (anu.action == "add" && mem.includes(sonel.user.jid)) {
sonel.sendMessage(anu.jid, "Hay Saya SonelBotz, Saya bisa bisa membantu anda membuat sticker Dll", "conversation")
}
      
if (anu.action == 'add') {
num = anu.participants[0]
let v = sonel.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
try {
ppUr = await sonel.getProfilePicture(anu_user)
} catch {
ppUrl = 'https://telegra.ph/file/c9dfa715c26518201f478.jpg'
}
img = await getBuffer(ppUrl)
teks = `Hallo @${anu_user}\nSelamat Datang Di Group: ${mdata.subject}\n\nSemoga Betah Ya Di Group Ini`
sendButImage(anu.jid, teks, `©Created By sonel `, img,but = [{buttonId:`hallo`, 
buttonText:{displayText: 'SELAMAT DATANG!!!'},type:1}], options = {contextInfo: {mentionedJid: [num, number]},thumbnail: Buffer.alloc(0)})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppUrl = await sonel.getProfilePicture(num)
} catch {
ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
}
img = await getBuffer(ppUrl)
teks = `Bye Bye @${num.split('@')[0]}\nHore... Beban Group Berkurang Selamat Tinggal Di Group: ${mdata.subject}`
sendButImage(anu.jid, teks, `©Created By sonelbotz`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `SELAMAT TINGGAL!!!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, number]}, thumbnail: Buffer.alloc(0)})
}
if (anu.action == "promote") {
anu_user = sonel.contacts[mem]
num = anu.participants[0]
try {
ppimg = await sonel.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(ppimg)
teks = `@${num.split("@")[0]} Telah dipromote`
sonel.sendMessage(mdata.id, teks, MessageType.text)
}
if (anu.action == "demote") {
anu_user = sonel.contacts[mem]
num = anu.participants[0]
const mdata = await sonel.groupMetadata(anu.jid)
try {
ppimg = await sonel.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(
`https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
)
teks = `@${num.split("@")[0]} Telah didemote`
sonel.sendMessage(mdata.id, teks, MessageType.text)
}
} catch (e) {
console.log(e)
}
})
   
sonel.on("group-update", async (anu) => {
metdata = await sonel.groupMetadata(anu.jid);
if (anu.announce == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗢𝗽𝗲𝗻𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑩𝒖𝒌𝒂 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
sonel.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Opened ] - In ${metdata.subject}`);
} else if (anu.announce == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑻𝒖𝒕𝒖𝒑 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
sonel.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Closed ] - In ${metdata.subject}`);
} else if (!anu.desc == "") {
tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒖𝒃𝒂𝒉 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏 @${
anu.descOwner.split("@")[0]
}\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑩𝒂𝒓𝒖 : ${anu.desc}`;
sonel.sendMessage(metdata.id, teks, MessageType.text, {
contextInfo: { mentionedJid: [tag] },
});
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒃𝒖𝒌𝒂 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
sonel.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒕𝒖𝒕𝒖𝒑 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝑮𝒓𝒐𝒖𝒑 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
sonel.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝙄𝙣 ${metdata.subject}`);
}
})

antical = true
sonel.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
sonel.sendMessage(call, `*Sorry ${sonel.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => sonel.blockUser(call, "add"))
})


sonel.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Sekarang Sedang Diawasi Untuk Perubahan')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
///*****CREATED BY SONELBOTZ*****\\
//TQTQ
//ZeroYT7
//Offiicial Dittaz
//ZeeoneOfc
//KurrXd
//ALL KREATOR & ORG YNG BAIK YG UDH PAKE SC INI\\
//HAPUS TQTQ = YATIM

var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var request = require('request')
var fs = require('fs')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/sonel.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '©Created By Sonel'
blocked = []
multi =false
nopref = false
allpref = true

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.zero
var apikey6 = config.Nurutomo

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = sonel = async (sonel, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')
var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var c = args.join(" ")
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = sonel.user.jid
var Verived = "0@s.whatsapp.net"
var num = "62857759034264@s.whatsapp.net"
var ownerNumber = ["62857759034264@s.whatsapp.net",`${NomorOwner}@s.whatsapp.net`]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? sonel.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? sonel.user.jid : sonel.contacts[zer.sender]
var groupMetadata = isGroup ? await sonel.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
membr = []
var pff = groupMembers
        var go = groupMembers
        var goo = pff[Math.floor(Math.random() * pff.length)]
        var oe = go[Math.floor(Math.random() * go.length)]
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...Jangam Lupa Subscribe SonelBotz',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
sonel.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
sonel.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sonel.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : sonel.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
sonel.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}  
sonel.chatRead(from, "read")
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      
		const ofrply1 = fs.readFileSync('./logonya.jpeg')
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./logonya.jpeg')
		const sekarang = new Date().getTime();

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `Subscribe SonelBotz`, 
orderTitle: `Subscribe SonelBotz`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}
 //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${faketeks}`,"title": `Hmm`,'jpgThumbnail': fs.readFileSync('./img/thumbnail.jpg')}}}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
sonel.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
var sendButLocation = async (id, text1, desc1, loc1, but = [], options = {}) => {
kma = loc1
mhan = await sonel.prepareMessage(from, kma, location)
var buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "LOCATION"
}
sonel.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButImage = async (
id,
text1,
desc1,
gam1,
but = [],
options = {}
) => {
kma = gam1;
mhan = await sonel.prepareMessage(from, kma, image);
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
sonel.sendMessage(
id,
buttonMessages,
MessageType.buttonsMessage,
options
)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
sonel.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
sonel.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
sonel.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
sonel.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
var pushname = zer.key.fromMe ? sonel.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
var sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			sonel.sendMessage(hehe, ano, sticker, { quoted: zer})
		}
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

	//runtime berjalan
           runi = process.uptime() 
           sonel.setStatus(`Botz Aktif Selama ${kyun(runi)} `).catch((_)=>_);

           settingstatus = new Date() * 1;
           
switch (command) {                                                           
case 'menu':
teks =`𝐇𝐚𝐥𝐥𝐨... ${pushname} ${ucapanWaktu}
𝐀𝐩𝐚 𝐊𝐚𝐛𝐚𝐫...? 𝐒𝐞𝐦𝐨𝐠𝐚 𝐇𝐚𝐫𝐢𝐦𝐮 𝐌𝐞𝐧𝐲𝐞𝐧𝐚𝐧𝐠𝐤𝐚𝐧
𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚`
faketeks =`Silahkan Klick Button Di bawah Untuk Melihat Menu, Jika tidak ada button ketik ${prefix}allmenu`
sendButLocation(from, teks, faketeks, {jpegThumbnail:fakeimg,name:""}, 
[{buttonId: `allmenu`,buttonText: {displayText: `ALLMENU`,},type:1}], {contextInfo: { mentionedJid: [num]}})
break
case 'allmenu':
teks =`AllMenu By SonelBotz
╭─❲ GROUP MENU ❳
│⽞${prefix}antilink
│⽞${prefix}antivirtex
│⽞${prefix}welcome
│⽞${prefix}group
│⽞${prefix}linkgrup
│⽞${prefix}hidetag
│⽞${prefix}tagall
│⽞${prefix}setdesc
│⽞${prefix}setname
│⽞${prefix}setpp
│⽞${prefix}kick
│⽞${prefix}add
│⽞${prefix}demote
│⽞${prefix}promote
╰────────────⦁

╭─❲ STICKER MENU ❳
│⽞${prefix}sticker
│⽞${prefix}toimg
│⽞${prefix}attp
╰────────────⦁

╭─❲ STORAGE MENU ❳
│⽞${prefix}owner
│⽞${prefix}report
│⽞${prefix}runtime
│⽞${prefix}speed
╰────────────⦁

╭─❲ OWNER MENU ❳
│⽞${prefix}bc
│⽞${prefix}setbio
╰────────────⦁

╭─❲ FUN MENU ❳
│⽞${prefix}darkjokes
│⽞${prefix}memeindo
╰────────────⦁

╭─❲ NULIS MENU ❳
│⽞${prefix}foliokiri
│⽞${prefix}foliokanan
╰────────────⦁

╭─❲ MAKER MENU ❳
│⽞${prefix}qrcreator
│⽞${prefix}naruto
│⽞${prefix}hartatahta
│⽞${prefix}pubg
│⽞${prefix}neon
│⽞${prefix}greenneon
│⽞${prefix}advanceglow
│⽞${prefix}futureneon
│⽞${prefix}sandwriting
│⽞${prefix}hallowen
│⽞${prefix}sandsummer
│⽞${prefix}sandengraved
│⽞${prefix}metaldark
│⽞${prefix}neonlight
│⽞${prefix}holographic
│⽞${prefix}text1917
│⽞${prefix}minion
│⽞${prefix}deluxesilver
│⽞${prefix}newyearcard
│⽞${prefix}bloodfrosted
│⽞${prefix}jokerlogo
│⽞${prefix}fireworksparkle
│⽞${prefix}natureleaves
│⽞${prefix}bokeh
│⽞${prefix}toxic
│⽞${prefix}strawberry
│⽞${prefix}box3d
│⽞${prefix}roadwarning
│⽞${prefix}breakwall
│⽞${prefix}icecold
│⽞${prefix}luxury
│⽞${prefix}cloud
│⽞${prefix}summersand
│⽞${prefix}horrorblood
│⽞${prefix}thunder
╰────────────⦁

╭─❲ SERTI MENU ❳
│⽞${prefix}sertiff
│⽞${prefix}sertiff2
│⽞${prefix}sertiff3
╰────────────⦁

╭─❲ ANIME MENU ❳
│⽞${prefix}waifu
│⽞${prefix}neko
╰────────────⦁

╭─❲ RANDOM MENU ❳
│⽞${prefix}patrick
│⽞${prefix}amongus
╰────────────⦁

╭─❲ TQTQ ❳
│ Allah SWT
│ SonelBotz
│ Zero YT7
│ Official Dittaz
│ KurrXd
│ Zeeone Ofc
│ Dan Seluruh Kreator Bot 
╰────────────⦁`
faketeks =`SIMPLE BOT WA BY SONELZ`
sendButLocation(from, teks, faketeks, {jpegThumbnail:fakeimg,name:""}, 
[{buttonId: `donasi`,buttonText: {displayText: `DONASI`,},type:1}], {contextInfo: { mentionedJid: [num]}})
break
// BIAR GAK LUPA 
case 'welcome': 

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By SonelBotz',
buttons: punten,
headerType: 1
}
await sonel.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} SonelBotz`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=AditAnjay&text=${ini_txt}`).then((gambar) => {
                        sonel.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : SonelBotz`, quoted : ftrol})
                    })
                    break
                   
case 'antilink':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'donasi':
dona = fs.readFileSync('./donasi.jpg')
doni =`*DONATE NYA KAKA*
╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi apa cuma liat doang?*
*│*⬡ *PULSA     : 085775903426
*│*⬡ *DANA    : 085775903426
*│*⬡ *GOPAY    : SCAN DI ATAS AJA*
*└───────────────────*
Scan QR di atas bila belum premium`
sonel.sendMessage(from, dona, image, { quoted: ftrol, thumbnail: dona, caption: doni })
break
case 'setbio':
				if (!isOwner && !zer.key.fromMe) return reply(`Khusus Owner Om`)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					sonel.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
            case 'foliokanan':{
            
                if (!q) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                    '-pointsize',
'55',
                    '-interline-spacing',
'2',
                    '-annotate',
'+130+400',
                    fixHeight,
'./temp/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    sonel.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkanan.jpg'), image, {quoted: zer, caption: `Nih...`})
                })
            }
                break
                case 'nuliskanan':
                lol = await getBuffer(`https://api.dapuhy.xyz/api/maker/nuliskanan?text=DappaUhuy&apikey=9SWX9uS820`)
sonel.sendMessage(from, lol, image, {quoted: zer, caption: 'Nih Jangan Lupa Subscribe SonelBotz'})
break
            
case 'antivirtex':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'sertiff':

lol = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti1/img.php?nama=${q}`)
sonel.sendMessage(from, lol, image, {quoted: zer, caption: 'Nih Jangan Lupa Subscribe SonelBotz'})
break
case 'sertiff2':
lol = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti2/img.php?nama=${q}`)
sonel.sendMessage(from, lol, image, {quoted: zer, caption: 'Nih Jangan Lupa Subscribe SonelBotz'})
break
case 'waifu':
			random = Math.floor(Math.random() * 6) + 1
		damdu = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=AditAnjay`)
			sonel.sendMessage(from, damdu, image, {quoted: zer})
			break
			case 'neko':
			random = Math.floor(Math.random() * 6) + 1
		wkwk = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=AditAnjay`)
			sonel.sendMessage(from, wkwk, image, {quoted: zer})
			break
			case 'patrick':
			random = Math.floor(Math.random() * 6) + 1
		wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=AditAnjay`)
			sonel.sendMessage(from, wkwk, sticker, {quoted: zer})
			break
			case 'amongus':
			random = Math.floor(Math.random() * 6) + 1
		wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=AditAnjay`)
			sonel.sendMessage(from, wkwk, sticker, {quoted: zer})
			break
case 'sertiff3':

lol = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti3/img.php?nama=${q}`)
sonel.sendMessage(from, lol, image, {quoted: zer, caption: 'Nih Jangan Lupa Subscribe SonelBotz'})
break
case 'group':
case 'grup':

if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
sonel.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
sonel.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :

if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await sonel.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
sonel.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
sonel.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
sonel.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
sonel.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
sonel.groupDemoteAdmin(from, mentioned)
}
break
case 'add':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
sonel.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
sonel.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':

if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
breakl
case 'setname':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
sonel.groupUpdateSubject(from, `${body.slice(9)}`)
sonel.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝𝐢\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
sonel.groupUpdateDescription(from, `${body.slice(9)}`)
sonel.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
				
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp sonelgmz`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=AditAnjay&text=${q}`)
					sonel.sendMessage(from, atetepe, sticker, { quoted: zer })
					break             
					//MAKER
case 'qrcreator':
		
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}qrcreator sonelgmz`)
					qrcode = await getBuffer(`https://api.zeks.me/api/qrencode?apikey=${apikey4}&text=${q}`)
					sonel.sendMessage(from, qrcode, image, { quoted: zer })
					break             
					case 'naruto':
		
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}naruto sonelgmz`)
					naruto = await getBuffer(`https://api.zeks.me/api/naruto?apikey=${apikey4}&text=${q}`)
					sonel.sendMessage(from, naruto, image, { quoted: zer })
					break         
					case 'hartatahta':
		
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}hartatahta sonelgmz`)
					hartatahta = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=${apikey4}&text=${q}`)
					sonel.sendMessage(from, hartatahta, image, { quoted: zer })
					break                 
					case 'pubg':
		
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}pubg sonelgmz|ganteng`)
					qrcode = await getBuffer(`https://api.zeks.me/api/pubglogo?apikey=${apikey4}&text1=${q}&text2=${q}`)
					sonel.sendMessage(from, qrcode, image, { quoted: zer })
					break             
					case 'goldplaybutton':
		
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}goldplaybutton sonelgmz`)
					gold = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=sonelzapi&text=${q}`)
					sonel.sendMessage(from, gold, image, { quoted: zer })
					break             

case 'setpp':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await sonel.downloadAndSaveMediaMessage(zer, './storage/media_user')
await sonel.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':

if (!isOwner && !zer.key.fromMe) return reply(`Hanya Untuk @${NomorOwner.split("@")[0]}`) 
if (args.length < 1) return reply('Teksnya?')
anu = await sonel.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await sonel.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break
case 'foliokiri':{

                if (!q) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                
                reply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    sonel.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: zer, caption: `Nih...`})
                })
            }
break
   
case 'sticker':
case 'stiker':
case 's':

if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await sonel.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐙𝐞𝐫𝐨 𝐘𝐓𝟕`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await sonel.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await sonel.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
sonel.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'toimg':

if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await sonel.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe SonelBotz`)
fs.unlinkSync(ran)
})
break
case 'darkjokes':

reply(mess.wait)
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sonel.sendMessage(from, hasil, image, {quoted: ftext, caption: '*GELAP BOS :V*'})
				break
				case 'memeindo':
				
				reply(mess.wait)
          data = fs.readFileSync('./lib/game/memeindo.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
            buffer = await getBuffer(randKey.result)
           sonel.sendMessage(from, buffer, image, {quoted : zer, caption : "Nih"})
           break

case 'owner':

let inilist = []
for (let i of ownerNumber) {
let vname = sonel.contacts[i] != undefined ? sonel.contacts[i].vname || sonel.contacts[i].notify : undefined
inilist.push({
"displayName": 'SonelBotz',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await sonel.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await sonel.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':

let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
sonel.sendMessage(`62857759034264@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':

teks =
`Yt SonelBotz`
sonel.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':

teks =
`IG : SONELBOTZ`
sonel.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':

teks =
`Gd Tiktok`
sonel.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':

teks = `[ 𝗜𝗡𝗙𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧 ]
Blm Rilis Banh`
sonel.sendMessage(from, teks, text, {quoted : zer})
break
case "runtime":
case "test":

run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':

reply(`Speed: ${latensyi.toFixed(4)} Second`)
break


        
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return sonel.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.issonel") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}

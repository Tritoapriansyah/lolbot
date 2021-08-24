/*
]---------------- INFO SCRIPT ---------------[ 
  
  > AUTHOR : NAYLA
  > RECODE : ZEEONE
  > DON'T DELETE THE AUTHOR'S NAME AND MY NAME
  > FOR NEW UPDATES PLEASE VISIT MY YOUTUBE CHANNEL --> ZEEONE OFC <--
  > BUTTON / LIST MESSAGE TIDAK SUPPORT DI WA BISNIS & WA MOD
  > MASIH BANYAK YANG LAGI DI FIX 👍
  > BELI APIKEY PREMIUM KLO MAU SEMUA FITUR WORK
  
  ]-----------------THANKS TO -----------------[
  
  > NAYLA CHAN
  > RYNZ
  > ARI
  > ARA • ARA
  > REST API PROVIDER IN MY BOT  
   
  ]-------------- UPDATE BOTZ8 --------------[

  NOTE :
  > Install Dulu Baru Recode
  > Sebagian fitur butuh apikey vvip atau prem, jadi masih ada fitur yg eror
*/
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		WAMessageProto,
		ProxyAgent,
		processTicksAndRejections,
        ECONNABORTED,
		GroupSettingChange,
		waChatKey,
		apikey,
		relayWAMessage,
		mentionedJid,
		DataView,
        TypedArray,
        device,
        Browser,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const speed = require('performance-now')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const fetch = require('node-fetch');
const request = require('request')
const { recognize } = require('./lib/ocr')
const { yta , ytv } = require('./lib/ytdl')
const fs = require('fs')
const gis = require('g-i-s');
const hx = require('hxz-api')
const util = require('util')
const ms = require('parse-ms')
const axios = require("axios")
const yts = require( 'yt-search')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const imgbb = require('imgbb-uploader')  
const clc = require('chalk')
const imageToBase64 = require('image-to-base64');
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))
const _scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))


/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ VOLDER BOTZ ]==============================================================*/                    	   
const { 
	bayarLimit, 
	limitAdd
} = require('./lib/limitatm.js') 
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

var creatorList = ['Whatsapp Bot', 'Bot Wea', 'Creator Bot Indonesia']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

//set stc cmd
cmd_stc_menu = '7446' //ambil fileLength stc yg mau dijadikan stc cmd dengan cara eval 
cmd_stc_ping = '7292'
//untuk donasi
var nomor_ovo = `085888258313\nA.N TRITO` //gk usah di ubah ya klo gk punya ntr eror
var nomor_dana = `085888258313\nA.N TRITO` //gk usah di ubah ya klo gk punya ntr eror
var nomor_gopay = `085888258313\nA.N TRITO` //gk usah di ubah ya klo gk punya ntr eror
var qr_code_ovo = 'https://i.top4top.io/p_2056s7icj1.jpgg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_dana = 'https://h.top4top.io/p_20565lwzn0.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_gopay = 'hps://j.top4top.io/p_2056w32jj2.jpg' //gk usah di ubah ya klo gk punya ntr eror
//untuk sewa bot jika ada yg minat
var _minggu = 'Rp 10.000,00' //Masukkan harga sewa sesuai keinginan
var __minggu = 'Rp 15.000,00'
var ___minggu = 'Rp 20.000,00'
var _bulan = 'Rp 22.000,00'
var _permanen = 'Rp 25.000,00'

img = setting.img
baper = 'Jangan lupa donasi'
apiku = 'https://api-alphabot.herokuapp.com/'
youtube = setting.yt
instagram = setting.ig
github = setting.gt
botname2 = setting.botname2
thumbnail = setting.thumb
yt = setting.yt
grub= setting.grub
//prefix = setting.prefix
multi = true
nopref = false
prefa = '-'
limitawal = 1000
blocked = []
botname = setting.botname
apixteam = setting.apixteam
cr = setting.cr 
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz 
numberbot = '+6282193115723'
apivhtear = setting.apivhtear //ubah pke apilu sendiri biar limit nya gk cepat Abis
author = setting.author
naylachan = setting.naylachan
namebot = setting.namebot
ownerNumber = setting.ownerNumber
ownername = setting.ownername
l0lhuman = setting.l0lhuman //ubah pke apilu sendiri biar limit nya gk cepat abis
Alphakey = 'Alphabot' //apikey alphabot gk usah di ganti 
petik = '```'
titik = '...'
enter = '\n'
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const UserZeeone = JSON.parse(fs.readFileSync('./nayla/UserAlphabot.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./nayla/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./nayla/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./nayla/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))
const antivirtex = JSON.parse(fs.readFileSync('./nayla/antivirtex.json'))
const samih = JSON.parse(fs.readFileSync('./nayla/simi.json'))
const _limit = JSON.parse(fs.readFileSync('./nayla/limit.json'))
const botx = JSON.parse(fs.readFileSync('./nayla/botx.json'))
const ban = JSON.parse(fs.readFileSync('./nayla/banned.json')) 
const nayXi = JSON.parse(fs.readFileSync('./nayla/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./nayla/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./nayla/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./nayla/nayXix.json')) 

 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	 
            async function starts() {
        	const nayla = new WAConnection()
            nayla.version = [2, 2119, 6] 
	        nayla.logger.level = 'warn'
	       console.log(banner.string)
	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('SUBSCRIBE YOUTUBE ZEEONE OFC'))
	        })
	      var _0x1066=["\x2E\x2F\x73\x65\x6C\x66\x2D\x62\x6F\x74\x2E\x6A\x73\x6F\x6E","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x6C\x6F\x61\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67","\x32","\x2E","\x6F\x6E"];fs[_0x1066[1]](_0x1066[0])&& nayla[_0x1066[2]](_0x1066[0]);nayla[_0x1066[6]](_0x1066[3],()=>{start(_0x1066[4],_0x1066[5])})
          var _0xfcc8=["\x6F\x70\x65\x6E","\x32","\x43\x6F\x6E\x6E\x65\x63\x74\x65\x64","\uD83D\uDED2\x20\x53\x55\x42\x53\x43\x52\x49\x42\x45\x20\x59\x4F\x55\x54\x55\x42\x45\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x61\x71\x75\x61","\x6C\x6F\x67","\x6F\x6E","","\x6F\x77\x6E\x65\x72\x4E\x75\x6D\x62\x65\x72","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x42\x65\x72\x68\x61\x73\x69\x6C\x20\x74\x65\x72\x68\x75\x62\x75\x6E\x67\x20\x64\x65\x6E\x67\x61\x6E\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\x61\x6E\x64\x61\x2C\x20\x6A\x61\x6E\x67\x61\x6E\x20\x6C\x75\x70\x61\x20\x73\x75\x62\x73\x63\x72\x69\x62\x65\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41\x20\x75\x6E\x74\x75\x6B\x20\x75\x70\x64\x61\x74\x65\x20\x73\x65\x6C\x65\x6E\x67\x6B\x61\x70\x6E\x79\x61","\x74\x65\x78\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x6E\x65\x63\x74","\x2E\x2F\x73\x65\x6C\x66\x2D\x62\x6F\x74\x2E\x6A\x73\x6F\x6E","\x62\x61\x73\x65\x36\x34\x45\x6E\x63\x6F\x64\x65\x64\x41\x75\x74\x68\x49\x6E\x66\x6F","\x09","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x5D","\x77\x68\x69\x74\x65","\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6D\x61\x67\x65\x6E\x74\x61","\x20\x43\x4F\x4E\x4E\x45\x43\x54\x45\x44","\x67\x72\x65\x65\x6E","\x5B","\x0A","\x2B","\x72\x65\x64","\x57\x41\x20\x56\x65\x72\x73\x69\x6F\x6E","\x79\x65\x6C\x6C\x6F\x77","\x3A","\x77\x61\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x70\x68\x6F\x6E\x65","\x75\x73\x65\x72","\x4F\x53\x20\x56\x65\x72\x73\x69\x6F\x6E","\x6F\x73\x5F\x76\x65\x72\x73\x69\x6F\x6E","\x44\x65\x76\x69\x63\x65","\x64\x65\x76\x69\x63\x65\x5F\x6D\x61\x6E\x75\x66\x61\x63\x74\x75\x72\x65\x72","\x4D\x6F\x64\x65\x6C","\x64\x65\x76\x69\x63\x65\x5F\x6D\x6F\x64\x65\x6C","\x4D\x43\x43","\x6D\x63\x63","\x4D\x4E\x43","\x6D\x6E\x63","\x4F\x53\x20\x42\x75\x69\x6C\x64\x20\x4E\x75\x6D\x62\x65\x72","\x6F\x73\x5F\x62\x75\x69\x6C\x64\x5F\x6E\x75\x6D\x62\x65\x72","\x20\x41\x4C\x50\x48\x41\x42\x4F\x54\x20","\x53\x75\x62\x73\x63\x72\x69\x62\x65","\x26","\x53\x75\x70\x70\x6F\x72\x74","\x43\x68\x61\x6E\x6E\x65\x6C\x20\x53\x61\x79\x61","\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x54\x68\x61\x6E\x6B\x73\x20\x42\x75\x61\x74\x20\x4B\x61\x6C\x69\x61\x6E\x20\x59\x61\x6E\x67\x20\x53\x75\x64\x61\x68\x20\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x5E\x5F\x5E","\x20\x20\x20\x20\x20\xA9\x32\x30\x32\x31\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x2E\x20\x41\x6C\x6C\x20\x52\x69\x67\x68\x74\x20\x52\x65\x73\x65\x72\x76\x65\x64\x2E\x20"];nayla[_0xfcc8[6]](_0xfcc8[0],()=>{success(_0xfcc8[1],_0xfcc8[2]);setTimeout(()=>{console[_0xfcc8[5]](color(`${_0xfcc8[3]}`,_0xfcc8[4]))},1000)});nayla[_0xfcc8[12]](`${_0xfcc8[7]}${setting[_0xfcc8[8]]}${_0xfcc8[9]}`,`${_0xfcc8[10]}`,MessageType[_0xfcc8[11]],{contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true}); await nayla[_0xfcc8[13]]({timeoutMs:30* 1000});fs[_0xfcc8[18]](_0xfcc8[14],JSON[_0xfcc8[17]](nayla[_0xfcc8[15]](),null,_0xfcc8[16]));console[_0xfcc8[5]](color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[21],_0xfcc8[22]),color(_0xfcc8[23],_0xfcc8[24]),color(_0xfcc8[21],_0xfcc8[22]),color(_0xfcc8[25],_0xfcc8[20]));console[_0xfcc8[5]](_0xfcc8[26]);console[_0xfcc8[5]](color(_0xfcc8[25],_0xfcc8[20]),color(_0xfcc8[27],_0xfcc8[28]),color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[29],_0xfcc8[30]),color(_0xfcc8[31],_0xfcc8[4]),color(nayla[_0xfcc8[34]][_0xfcc8[33]][_0xfcc8[32]],_0xfcc8[20]));console[_0xfcc8[5]](color(_0xfcc8[25],_0xfcc8[20]),color(_0xfcc8[27],_0xfcc8[28]),color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[35],_0xfcc8[30]),color(_0xfcc8[31],_0xfcc8[4]),color(nayla[_0xfcc8[34]][_0xfcc8[33]][_0xfcc8[36]],_0xfcc8[20]));console[_0xfcc8[5]](color(_0xfcc8[25],_0xfcc8[20]),color(_0xfcc8[27],_0xfcc8[28]),color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[37],_0xfcc8[30]),color(_0xfcc8[31],_0xfcc8[4]),color(nayla[_0xfcc8[34]][_0xfcc8[33]][_0xfcc8[38]],_0xfcc8[20]));console[_0xfcc8[5]](color(_0xfcc8[25],_0xfcc8[20]),color(_0xfcc8[27],_0xfcc8[28]),color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[39],_0xfcc8[30]),color(_0xfcc8[31],_0xfcc8[4]),color(nayla[_0xfcc8[34]][_0xfcc8[33]][_0xfcc8[40]],_0xfcc8[20]));console[_0xfcc8[5]](color(_0xfcc8[25],_0xfcc8[20]),color(_0xfcc8[27],_0xfcc8[28]),color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[41],_0xfcc8[30]),color(_0xfcc8[31],_0xfcc8[4]),color(nayla[_0xfcc8[34]][_0xfcc8[33]][_0xfcc8[42]],_0xfcc8[20]));console[_0xfcc8[5]](color(_0xfcc8[25],_0xfcc8[20]),color(_0xfcc8[27],_0xfcc8[28]),color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[43],_0xfcc8[30]),color(_0xfcc8[31],_0xfcc8[4]),color(nayla[_0xfcc8[34]][_0xfcc8[33]][_0xfcc8[44]],_0xfcc8[20]));console[_0xfcc8[5]](color(_0xfcc8[25],_0xfcc8[20]),color(_0xfcc8[27],_0xfcc8[28]),color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[45],_0xfcc8[30]),color(_0xfcc8[31],_0xfcc8[4]),color(nayla[_0xfcc8[34]][_0xfcc8[33]][_0xfcc8[46]],_0xfcc8[20]));console[_0xfcc8[5]](_0xfcc8[26]);console[_0xfcc8[5]](color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[21],_0xfcc8[22]),color(_0xfcc8[47],_0xfcc8[24]),color(_0xfcc8[21],_0xfcc8[22]),color(_0xfcc8[25],_0xfcc8[20]));console[_0xfcc8[5]](_0xfcc8[26]);console[_0xfcc8[5]](color(_0xfcc8[48],_0xfcc8[28]),color(_0xfcc8[49],_0xfcc8[20]),color(_0xfcc8[50],_0xfcc8[28]),color(_0xfcc8[51],_0xfcc8[30]),color(_0xfcc8[52],_0xfcc8[20]));console[_0xfcc8[5]](color(_0xfcc8[53],_0xfcc8[4]));console[_0xfcc8[5]](_0xfcc8[26]);console[_0xfcc8[5]](color(_0xfcc8[54],_0xfcc8[20]));console[_0xfcc8[5]](_0xfcc8[26]);console[_0xfcc8[5]](color(_0xfcc8[19],_0xfcc8[20]),color(_0xfcc8[21],_0xfcc8[22]),color(_0xfcc8[52],_0xfcc8[24]),color(_0xfcc8[21],_0xfcc8[22]),color(_0xfcc8[25],_0xfcc8[20]))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})
        nayla.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			nayla.sendMessage(call, `Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!\nhttps//wa.me/${ownerNumber}`, MessageType.text)
			.then(() => nayla.blockUser(call, "add"))
			}, 100);
		})

nayla.on('group-participants-update', async(anu) => {
        try {
        	falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke","groupName": "Alphabot", 
"caption": `Made With ❣️`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)
}}}
            const mdata = await nayla.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = nayla.contacts[num]
			const ini_more1 = String.fromCharCode(8206)
			const ini_readmore1 = ini_more1.repeat(4001)
			welkam = `*Hai @${num.split('@')[0]}*\n*◪ Welcome in group:*\n*├─ ${mdata.subject}*\n*│*\n*├─ Intro dulu*\n*├─ ❏ Nama:* \n*├─ ❏ Umur:*\n*├─ ❏ Asal kota:*\n*├─ ❏ Kelas:*\n*├─ ❏ Jenis kelamin:*\n*└─ ❏ Nomor:* ${num.replace('@s.whatsapp.net', '')}\n*Semoga Betah yaa~~*\n*READ DESCRIPTION*\n${ini_readmore1}\n\n${mdata.desc}`
			const moment = require('moment-timezone')
            const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = nayla.contacts[num] != undefined ? nayla.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : nayla.contacts[num].notify || nayla.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/wel.jpg' -gravity west -fill '#FFFFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			try {
			nayla.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {thumbnail : Buffer.alloc(0), quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
			} catch {
				nayla.sendMessage(mdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
				}
			})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
		ini_user = nayla.contacts[num]
		out =`◪ Goodbye @${num.split('@')[0]}\n◪ Leave from group:\n${mdata.subject}\n│\n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nGoodBye~~`
		const moment = require('moment-timezone')
        const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = nayla.contacts[num] != undefined ? nayla.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : nayla.contacts[num].notify || nayla.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/lev.jpg' -gravity west -fill '#FFFFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+200 'Leaving from ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
					try {
			nayla.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {thumbnail : Buffer.alloc(0), quoted : falfa, caption: out, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
			} catch {
				nayla.sendMessage(mdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),quoted : falfa, caption: out, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
				}
			})
			} else if (anu.action == 'promote') {
			const mdata = await nayla.groupMetadata(anu.jid)
			num = anu.participants[0]
			const moment2 = require('moment-timezone')
        const jamny2 = moment2.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = nayla.contacts[num] != undefined ? nayla.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : nayla.contacts[num].notify || nayla.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
teks = `*PROMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Selamat jabatan kamu naik_`
			try {
				ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/promote.jpg' -gravity west -fill '#FFFFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny2} ${calender}' -pointsize 50 -annotate +460+200 'Promote in ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
					try {
			nayla.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {thumbnail : Buffer.alloc(0), quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
			} catch {
				nayla.sendMessage(mdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
				}
			})
         } else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await nayla.groupMetadata(anu.jid)
			const moment1 = require('moment-timezone')
        const jamnyy = moment1.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = nayla.contacts[num] != undefined ? nayla.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : nayla.contacts[num].notify || nayla.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
teks = `*DEMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Kasian malah kena demote_`
			try {
				ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/demote.jpg' -gravity west -fill '#FFFFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamnyy} ${calender}' -pointsize 50 -annotate +460+200 'Demote in ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
					try {
			nayla.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {thumbnail : Buffer.alloc(0), quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
			} catch {
				nayla.sendMessage(mdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
				}})}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})/*
else if (anu.action == 'promote') {
			const mdata = await nayla.groupMetadata(anu.jid)
			num = anu.participants[0]
			const moment2 = require('moment-timezone')
        const jamny2 = moment2.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = nayla.contacts[num] != undefined ? nayla.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : nayla.contacts[num].notify || nayla.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
teks = `*PROMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Selamat jabatan kamu naik_`
			try {
				ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/promote.jpg' -gravity west -fill '#FFFFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny2} ${calender}' -pointsize 50 -annotate +460+200 'Promote in ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
					try {
			nayla.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {thumbnail : Buffer.alloc(0), quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
			} catch {
				nayla.sendMessage(mdata.id, buff, MessageType.image, {quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
				}
			})
         } else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await nayla.groupMetadata(anu.jid)
			const moment1 = require('moment-timezone')
        const jamnyy = moment1.tz('Asia/Jakarta').format('HH:mm:ss')
         
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
pushnem = nayla.contacts[num] != undefined ? nayla.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : nayla.contacts[num].notify || nayla.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
teks = `*DEMOTE DETECTED*
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}
\`\`\`User :\`\`\` @${num.split('@')[0]}
\`\`\`Group :\`\`\` ${mdata.subject}

_Kasian malah kena demote_`
			try {
				ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/demote.jpg' -gravity west -fill '#FFFFFF' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamnyy} ${calender}' -pointsize 50 -annotate +460+200 'Demote in ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
					try {
			nayla.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {thumbnail : Buffer.alloc(0), quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
			} catch {
				nayla.sendMessage(mdata.id, buff, MessageType.image, {quoted : falfa, caption: teks, contextInfo: { "mentionedJid" : [num], "forwardingScore":999,"isForwarded":true},sendEphemeral: true })
				}
			})} catch (e) {
         console.log('Error : %s', color(e, 'red'))
      })*/
			
			
nayla.on('group-update', async (anu) => {
	console.log(anu)
	const wibb = moment.tz('Asia/Jakarta').format('HH:mm:ss')
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `Made With ❤️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await nayla.groupMetadata(anu.jid)
  try {
					ppimg = await nayla.getProfilePicture(anu.jid)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
    if(anu.announce == 'false'){
    teks = `- [ *Group Opened* ] - \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    nayla.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb), clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = `- [ *Group Closed* ] - \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    nayla.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),caption: teks,contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb), clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ *Group Description Change* ] - \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : \n${anu.desc}`
    nayla.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb),clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ *Group Setting Change* ] - \n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    nayla.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb),clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ *Group Setting Change* ] - \n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    nayla.sendMessage(metdata.id, buff, MessageType.image, {thumbnail : Buffer.alloc(0),caption: teks,contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
    console.log(clc.magenta(wibb), clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API DEVELOP ]==============================================================*/                  	                 
	        
	        nayla.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.ky_ttt
			global.prefix
			global.blocked
			nay.message = (Object.keys(nay.message)[0] === 'ephemeralMessage') ? nay.message.ephemeralMessage.message : nay.message
            const content = JSON.stringify(nay.message)
            const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const cmd = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const arg = budy.slice(command.length + 2, budy.length)
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	runtime = process.uptime()   
	      	const fake3 = `${creator}` 	
	      	const nay1 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': fake3, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 353, 'width': 353, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)} } }	
        	const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
            const ini_mark = `0@s.whatsapp.net`
            const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = nay.key.fromMe ? nayla.user.jid : isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isNayXi = isGroup ? nayXi.includes(from) : false			     
			const isNayXix = isGroup ? nayXix.includes(from) : false			 		 
			const isPrem = prem.includes(sender) || isOwner				
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotx = isGroup ? botx.includes(from) : false
			const conts = nay.key.fromMe ? nayla.user.jid : nayla.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = nay.key.fromMe ? nayla.user.name : conts.notify || conts.vname || conts.name || '-'
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR ${command} TIDAK TERDAFTAR DIDALAM MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
			
			const nayz = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addUserAlphabot = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        UserZeeone.push(obj)
          	fs.writeFileSync('./nayla/UserAlphabot.json', JSON.stringify(UserZeeone))
            }	
            const checkUserAlphabot = (sender) => {
	        let status = false
	        Object.keys(UserZeeone).forEach((i) => {
		    if (UserZeeone[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
            const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
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
                    nayla.sendMessage(to, media, type, { quoted: nay, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
            async function sendFileFromUrl(from, url, caption, nay, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return nayla.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: nay, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return nayla.sendMessage(from, teks, text, {quoted: nay, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        	 mess = {
				wait: '```[ ! ] Wait a minutes...```',
				done : '```[ ✓ ]``` Sukses',
				error: {
				 bug: '```An Error Occurred Try Contacting Owner To Report Error```',
				stick: '```Failed, an error occurred while converting the image to a sticker, try again```',
				Iv: '```Invalid link```'
				},
			only: {
				group: '```Sorry, this command can only be used in groups```',
				benned: '```Sorry, your number has been banned, contact the bot owner to open your ban```',
				ownerG: '```Sorry, this command can only be used by the group owner```',
				ownerB: '```Sorry, this command can only be used by the bot owner```',
				premium: '```Sorry, this feature is only for premium users```',
				userB: `Hai @${sender.split("@")[0]} You are not registered in the database, please type ${prefix}verify`,
				admin: '```Sorry, this command can only be used by group admins```',
				Badmin: '```Sorry this command can only be used when the bot is admin```',
				}
			}  
			
			const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp Bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": 'Whatsapp Bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `62887435047326@s.whatsapp.net`
		}
	}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
}
const fakegroup = (teks) => {
            nayla.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Whatsapp bot`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
//HARI & BULAN
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";  
//+++++++++++TIME+++++++++++//
            var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                case 1: waktoo = "Waktu Tengah Malam🌚"; break;
                case 2: waktoo = "Waktu Dini Hari🌒 - Tidur Kak :)"; break;
                case 3: waktoo = "Waktu Dini Hari🌓"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi kak🌝"; break;
                case 7: waktoo = "Selamat Pagi kak🌝"; break;
                case 8: waktoo = "Selamat Pagi kak🌝"; break;
                case 9: waktoo = "Selamat Pagi kak🌝 "; break;
                case 10: waktoo = "Selamat Pagi kak🌝"; break;
                case 11: waktoo = "Selamat Siang Kak🌞"; break;
                case 12: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 13: waktoo = "Selamat Siang Kak🌞"; break;
                case 14: waktoo = "Selamat Siang Kak🌞"; break;
                case 15: waktoo = "Selamat Sore Kak🌝"; break;
                case 16: waktoo = "Selamat Sore Kak🌝"; break;
                case 17: waktoo = "Selamat Sore Kak🌖\n - Menjelang Malam🌚"; break;
                case 18: waktoo = "Waktu Magrib🌘\n - Jangan Lupa Shalat Magrib"; break;
                case 19: waktoo = "Waktu Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚\n - Jangan Lupa Beristirahat"; break;
                case 23: waktoo = "Tengah Malam🌚 \n - Tidur Kak, Ga baik bergadang :)"; break;
            }
            var tampilHari = "" + waktoo;
 //+++++++++++UCAPAN+++++++++++//
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨ ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥 ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛 ${pushname}`; break;
            }
            var ucapannya = "" + waktoonyabro;
            const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = nayBulan[moment().format('MM') - 1]
			const isUserAlphabot = checkUserAlphabot(sender)
            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','??','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
            const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod"]
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = nayla.user.phone
			const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `${creator} `, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
			const fdoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "application/octet-stream", "title": `${namebot}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)}}}
			const ffoto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${ucapannya}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)} } }
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapannya}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapannya},;;;\nFN:${ucapannya},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail:fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
            var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: NOBOT\n` 
            + `ORG: NOMORBOT;\n`
            + `TEL;type=CELL;type=VOICE;waid=12138009523:+12138009523\n`
            + 'END:VCARD' 
            colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', color('[ CMD ]','aqua'), wib, color(command), 'from', color(pushname), 'args :', color(args.length))
			if (isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', color('[ GRP ]','aqua'), wib, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))			 
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', color('[ PVT ]','aqua'), wib, color(command), 'from', color(pushname), 'args :', color(args.length))
			if (isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', color('[ CMD ]','aqua'), wib, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))			 
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return nayla.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: nay})
            nayla.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : nay})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            nayla.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : nay})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            nayla.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: nay})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json',JSON.stringify(_limit))
            return false
            }
            }
            const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  
            var _0xf430=["\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const reply=(_0x4721x2)=>{nayla[_0xf430[6]](from,_0x4721x2,text,{thumbnail:fs[_0xf430[2]](`${_0xf430[0]}${thumbnail}${_0xf430[1]}`),caption:_0xf430[3],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xf430[4],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xf430[1]}${ucapannya}${_0xf430[1]}`,"\x62\x6F\x64\x79":`${_0xf430[1]}${baper}${_0xf430[1]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xf430[5],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xf430[1]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xf430[2]](`${_0xf430[0]}${thumbnail}${_0xf430[1]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xf430[1]}${apiku}${_0xf430[1]}`}},quoted:nay})}
            if (messagesC.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Detected sorry lu bakal gua kick dari group 5  seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 s")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				if (messagesC.match("๑๑๑๑๑๑๑๑","ผิดุท้่เึางืผิดุท้่เึาง","৭৭৭৭৭৭৭৭","๒๒๒๒๒๒๒๒","*999999*")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (!isOwner) return 
		        nayla.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 0)
		        }

for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./src/sticker/${zeeone}.webp`)
		nayla.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./src/audio/${zeeonee}.mp3`)
		nayla.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./src/foto/${zeeoneee}.jpg`)
		nayla.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./src/video/${zeeonew}.mp4`)
		nayla.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}    
 
//+++++++++++++ROLE++++++++++++++//
		const levelRole = getLevelingLevel(sender)
          var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 1243) {
   	         role = 'Legends 忍'
   	     }
   
			var premi = 'User 🏅'
			
			if (nay.key.fromMe) {
				premi = 'Owner ⚔️'
		    }
		
		     var lemot = `${limitawal}`
		
//++++++++++++LIMIT USER++++++++++++++//    
            if (isGroup && isUserAlphabot && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            bayarLimit(sender, 3)
            await reply(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
            }
            } catch (err) {
            console.error(err)
            }
            }
            await nayla.updatePresence(from, Presence.recording)
            await nayla.updatePresence(from, Presence.composing)
            
	var _0xdf66=["\x65\x78\x74\x65\x6E\x64\x65\x64\x54\x65\x78\x74\x4D\x65\x73\x73\x61\x67\x65","\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x6D\x65\x73\x73\x61\x67\x65","\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74","","\x73\x74\x72\x69\x6E\x67","\x70\x75\x73\x68","\x66\x69\x6C\x74\x65\x72","\x69\x64","\x70\x6C\x61\x79\x65\x72\x31","\x70\x6C\x61\x79\x65\x72\x32","\x67\x69\x6C\x69\x72","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x59","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x61\x6E\x67\x6B\x61","\x2A\uD83C\uDFB3\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x50\x6C\x61\x79\x65\x72\x31\x20\x40","\x40","\x73\x70\x6C\x69\x74","\x3D\u274E\x0D\x0A\x50\x6C\x61\x79\x65\x72\x32\x20\x40","\x3D\u2B55\x0D\x0A\x0D\x0A\x47\x69\x6C\x69\x72\x61\x6E\x20\x3D\x20\x40","\x0D\x0A\x0D\x0A\x20\x20\x20","\x0D\x0A\x20\x20\x20","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x4E","\x59\x61\x68\x68\x20\x40","\x20\x4D\x65\x6E\x6F\x6C\x61\x6B\x3A\x28","\x4D\x61\x73\x75\x6B\x61\x6E\x20\x41\x6E\x67\x6B\x61\x20\x44\x65\x6E\x67\x61\x6E\x20\x42\x65\x6E\x61\x72","\x55\x64\x61\x68\x20\x44\x69\x20\x49\x73\x69\x2C\x20\x49\x73\x69\x20\x59\x61\x6E\x67\x20\x4C\x61\x69\x6E","\x54\x75\x6E\x67\x67\x75\x20\x47\x69\x6C\x69\x72\x61\x6E\x20\x54\x6F\x64","\u274E","\x0D\x0A","\x2A\uD83C\uDFB3\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x59\x65\x79\x79\x79\x20\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x44\x69\x20\x4D\x65\x6E\x61\x6E\x67\x6B\x61\x6E\x20\x4F\x6C\x65\x68\x2A\x20\x40","\x0D\x0A\x2A\x49\x6E\x67\x69\x6E\x20\x62\x65\x72\x6D\x61\x69\x6E\x20\x6C\x61\x67\x69\x3F\x20","\x74\x69\x63\x74\x61\x63\x74\x6F\x65\x2A","\x2A\uD83C\uDFB3\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x48\x61\x73\x69\x6C\x20\x41\x6B\x68\x69\x72\x3A\x2A\x0D\x0A\x0D\x0A","\x31\uFE0F\u20E3","\x32\uFE0F\u20E3","\x33\uFE0F\u20E3","\x34\uFE0F\u20E3","\x35\uFE0F\u20E3","\x36\uFE0F\u20E3","\x37\uFE0F\u20E3","\x38\uFE0F\u20E3","\x39\uFE0F\u20E3","\x2A\uD83C\uDFB3\x20\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x5F\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x53\x65\x72\x69\x5F","\x2A\uD83C\uDFB3\x20\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x48\x61\x73\x69\x6C\x20\x41\x6B\x68\x69\x72\x3A\x2A\x0D\x0A\x0D\x0A","\x2A\uD83C\uDFB3\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x50\x6C\x61\x79\x65\x72\x32\x20\x40","\x3D\u2B55\x0D\x0A\x50\x6C\x61\x79\x65\x72\x31\x20\x40","\x3D\u274E\x0D\x0A\x0D\x0A\x47\x69\x6C\x69\x72\x61\x6E\x20\x3D\x20\x40","\x0D\x0A\x0D\x0A","\x54\x75\x6E\x67\x67\x75\x20\x47\x69\x6C\x69\x72\x61\x6E\x20\x74\x6F\x64","\u2B55","\x2A\uD83C\uDFB3\x20\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x59\x65\x79\x79\x79\x20\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x44\x69\x20\x4D\x65\x6E\x61\x6E\x67\x6B\x61\x6E\x20\x4F\x6C\x65\x68\x2A\x20\x40","\x2A\uD83C\uDFB3\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x48\x61\x73\x69\x6C\x20\x41\x6B\x68\x69\x72\x3A\x2A\x0D\x0A\x0D\x0A","\x2A\uD83C\uDFB3\x52\x65\x73\x75\x6C\x74\x20\x47\x61\x6D\x65\x20\x54\x69\x63\x74\x61\x63\x74\x6F\x65\x20\uD83C\uDFB2\x2A\x0D\x0A\x0D\x0A\x2A\x5F\x50\x65\x72\x6D\x61\x69\x6E\x61\x6E\x20\x53\x65\x72\x69\uD83D\uDDFF\uD83D\uDC4C\x2A","\x3D\u2B55\x0D\x0A\x50\x6C\x61\x79\x65\x72\x32\x20\x40","\x3D\u274E\x0D\x0A\x20\x20\x20\x0D\x0A\x47\x69\x6C\x69\x72\x61\x6E\x20\x3D\x20\x40","\x2E\x2F\x6C\x69\x62\x2F\x67\x61\x6D\x65\x47\x65\x6C\x75\x64\x2E\x6A\x73","\x2E\x2F\x6D\x65\x64\x69\x61\x2F","\x2E\x6A\x73\x6F\x6E","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x79","\x73\x74\x61\x74\x75\x73","\x47\x61\x6D\x65\x20\x74\x65\x6C\x61\x68\x20\x64\x69\x6D\x75\x6C\x61\x69\x20\x73\x65\x62\x65\x6C\x75\x6D\x6E\x79\x61\x21","\x5A","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\uD83D\uDC51\x20\x47\x65\x6C\x75\x64\x20\x47\x61\x6D\x65\x20\uD83E\uDD19\uD83C\uDFFB\x20\x0D\x0A\x0D\x0A\x44\x69\x61\x6E\x74\x61\x72\x61\x20\x40","\x20\x26\x20\x40","\x0D\x0A\u2022\x20\x50\x65\x6D\x65\x6E\x61\x6E\x67\x6E\x79\x61\x20\x61\x64\x61\x6C\x61\x68\x20\x5B\x20\x40","\x20\x5D\x20","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x6E","\uD83D\uDC51\x20\x47\x61\x6D\x65\x20\x47\x65\x6C\x75\x64\x20\x52\x65\x6A\x65\x63\x74\x65\x64\x20\uD83E\uDD19\uD83C\uDFFB\x0D\x0A\u2022\x20\x40","\x20\x4D\x65\x6E\x6F\x6C\x61\x6B\uD83E\uDD19\uD83C\uDFFB","\x2E\x2F\x6C\x69\x62\x2F\x76\x6F\x74\x69\x6E\x67\x2E\x6A\x73\x6F\x6E","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x70\x61\x72\x73\x65","\x2E\x2F\x6C\x69\x62\x2F\x76\x6F\x74\x65","\x76\x6F\x74\x65","\x2E\x2F\x6C\x69\x62\x2F","\x2E\x2F\x6C\x69\x62\x2F\x76\x6F\x74\x65\x2F","\x6D\x61\x70","\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x20\x41\x6E\x64\x61\x20\x73\x75\x64\x61\x68\x20\x76\x6F\x74\x65","\u2705","\x2A\x56\x6F\x74\x65\x2A\x20","\x76\x6F\x74\x65\x73","\x2A\x41\x6C\x61\x73\x61\x6E\x2A\x3A\x20","\x72\x65\x61\x73\x6F\x6E","\x2A\x4A\x75\x6D\x6C\x61\x68\x20\x56\x6F\x74\x65\x2A\x20\x3A\x20","\x20\x56\x6F\x74\x65","\x2A\x44\x75\x72\x61\x73\x69\x2A\x20\x3A\x20","\x64\x75\x72\x61\x73\x69","\x20\x4D\x65\x6E\x69\x74","\x2A\x56\x6F\x74\x65\x2A\x20\x3A\x20","\x76\x6F\x74\x69\x6E\x67","\x64\x65\x76\x6F\x74\x65","\u274C","\x2E\x2F\x5A\x45\x45\x4F\x4E\x45\x5F\x4F\x46\x43\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63","\x76\x65\x72\x69\x66\x79\x5F\x6B\x61\x6B","\u3005\x20\x56\x45\x52\x49\x46\x59\x20\u3005","\xA9\x20","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x50\x48\x4F\x54\x4F","\x69\x6D\x61\x67\x65\x2F","\x63\x68\x69\x6E\x61","\x75\x73\x65\x72\x42","\x6F\x6E\x6C\x79","\x5B\x20\x21\x20\x5D\x20\x4D\x65\x6E\x63\x61\x72\x69\x20\x63\x65\x63\x61\x6E","\x0A","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x62\x61\x73\x65\x36\x34","\x66\x72\x6F\x6D","\x61\x6C\x6C\x6F\x63","\x60\x60\x60\x5B\x20\u2713\x20\x5D\x60\x60\x60\x20\x53\x75\x6B\x73\x65\x73\uFF01","\x74\x68\x65\x6E","\x74\x65\x78\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x63\x68\x69\x6E\x61\x2E\x74\x78\x74","\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x69\x6E\x64\x6F\x6E\x65\x73\x69\x61\x2E\x74\x78\x74","\x6D\x61\x6C\x61\x79\x73\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6D\x61\x6C\x61\x79\x73\x69\x61\x2E\x74\x78\x74","\x74\x68\x61\x69\x6C\x61\x6E\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x74\x68\x61\x69\x6C\x61\x6E\x64\x2E\x74\x78\x74","\x6B\x6F\x72\x65\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6B\x6F\x72\x65\x61\x2E\x74\x78\x74","\x6A\x61\x70\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x6A\x61\x70\x61\x6E\x2E\x74\x78\x74","\x76\x69\x65\x74\x6E\x61\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x41\x73\x75\x70\x61\x6E\x2F\x6D\x61\x69\x6E\x2F\x63\x65\x63\x61\x6E\x2F\x76\x69\x65\x74\x6E\x61\x6D\x2E\x74\x78\x74","\x6A\x65\x6E\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x65\x6E\x6E\x69\x2E\x74\x78\x74","\x6A\x69\x73\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4A\x69\x73\x6F\x2E\x74\x78\x74","\x6C\x69\x73\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x4C\x69\x73\x61\x2E\x74\x78\x74","\x72\x6F\x73\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x65\x63\x61\x6E\x2F\x52\x6F\x73\x65\x2E\x74\x78\x74","\x62\x61\x65\x6B\x68\x79\x75\x6E\x67","\x5B\x20\x21\x20\x5D\x20\x4D\x65\x6E\x63\x61\x72\x69\x20\x63\x6F\x67\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x42\x61\x65\x6B\x48\x79\x75\x6E\x67\x2E\x74\x78\x74","\x64\x6F\x68\x6B\x79\x75\x6E\x67\x73\x6F\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x44\x6F\x68\x4B\x79\x75\x6E\x67\x53\x6F\x6F\x2E\x74\x78\x74","\x68\x75\x61\x6E\x67\x7A\x69\x74\x61\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x48\x75\x61\x6E\x67\x5A\x69\x74\x61\x6F\x2E\x74\x78\x74","\x6A\x68\x6F\x70\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4A\x5F\x68\x6F\x70\x65\x2E\x74\x78\x74","\x6A\x69\x6D\x69\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4A\x69\x6D\x69\x6E\x2E\x74\x78\x74","\x6A\x75\x6E\x67\x6B\x6F\x6F\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4A\x75\x6E\x67\x6B\x6F\x6F\x6B\x2E\x74\x78\x74","\x6B\x69\x6D\x6A\x6F\x6E\x64\x61\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4B\x69\x6D\x4A\x6F\x6E\x44\x61\x65\x2E\x74\x78\x74","\x6B\x69\x6D\x6A\x6F\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4B\x69\x6D\x4A\x6F\x6E\x67\x2E\x74\x78\x74","\x6B\x69\x6D\x6A\x75\x6E\x6D\x79\x65\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4B\x69\x6D\x4A\x75\x6E\x4D\x79\x65\x6F\x6E\x2E\x74\x78\x74","\x6B\x69\x6D\x6D\x69\x6E\x73\x65\x6F\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4B\x69\x6D\x4D\x69\x6E\x53\x65\x6F\x6B\x2E\x74\x78\x74","\x6B\x69\x6D\x6E\x61\x6E\x6A\x6F\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4B\x69\x6D\x4E\x61\x6E\x4A\x6F\x6F\x6E\x2E\x74\x78\x74","\x6B\x69\x6D\x73\x65\x6F\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4B\x69\x6D\x53\x65\x6F\x6B\x2E\x74\x78\x74","\x6B\x69\x6D\x74\x61\x65\x68\x79\x75\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4B\x69\x6D\x54\x61\x65\x68\x79\x75\x6E\x67\x2E\x74\x78\x74","\x6C\x75\x68\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4C\x75\x48\x61\x6E\x2E\x74\x78\x74","\x6F\x68\x73\x65\x68\x75\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x4F\x68\x53\x65\x68\x75\x6E\x2E\x74\x78\x74","\x70\x61\x72\x6B\x63\x68\x61\x6E\x79\x65\x6F\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x50\x61\x72\x6B\x43\x68\x61\x6E\x59\x65\x6F\x6C\x2E\x74\x78\x74","\x73\x75\x67\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x53\x75\x67\x61\x2E\x74\x78\x74","\x63\x68\x69\x6B\x61","\x77\x61\x69\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x39\x74\x63\x71\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x39\x72\x61\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x67\x72\x72\x76\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x37\x67\x70\x32\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x6D\x73\x36\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x70\x63\x6E\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x6A\x76\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x64\x72\x36\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x74\x72\x61\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x65\x30\x6F\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x73\x64\x34\x79\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x62\x79\x69\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x6C\x71\x32\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x67\x78\x67\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x75\x76\x6A\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x69\x7A\x75\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x7A\x34\x6B\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x6E\x36\x31\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x67\x63\x69\x78\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x63\x39\x31\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x74\x72\x6C\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x77\x6A\x32\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x6B\x37\x63\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x33\x6F\x71\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x7A\x71\x73\x76\x31\x2E\x6D\x70\x34","\x76\x69\x64\x65\x6F\x2F\x6D\x70\x34","\x41\x73\x75\x70\x61\x6E\x20\x6E\x69\x68\x20\x6B\x61\x6B","\x5F\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x73\x74\x61\x62\x69\x6F\x2E\x63\x63\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x5F","\x64\x65\x6C\x76\x69\x72\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x34\x38\x72\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x31\x64\x37\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x68\x6B\x65\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x35\x32\x69\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x69\x38\x63\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x35\x39\x63\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x32\x6A\x76\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x34\x75\x69\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x66\x30\x6B\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x64\x36\x72\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x38\x34\x79\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x31\x30\x30\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x6E\x32\x6A\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x70\x67\x68\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x75\x35\x38\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x32\x39\x63\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x36\x6D\x6B\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x6C\x31\x6A\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x62\x75\x34\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x6F\x6A\x6C\x36\x31\x2E\x6D\x70\x34","\x61\x79\x75","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x35\x33\x74\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x76\x65\x79\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x74\x39\x77\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x75\x75\x72\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x6D\x70\x37\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x6A\x31\x6C\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x38\x66\x37\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x67\x32\x6A\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x63\x6A\x73\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x6A\x79\x6C\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x35\x6A\x35\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x72\x61\x64\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x69\x69\x31\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6D\x66\x67\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x34\x69\x73\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x79\x6E\x63\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x72\x67\x71\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x65\x35\x64\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x37\x77\x39\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x63\x6A\x6E\x6D\x31\x2E\x6D\x70\x34","\x62\x75\x6E\x67\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x6E\x30\x68\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x74\x34\x6C\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x73\x33\x6B\x68\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x62\x32\x76\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x37\x76\x71\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x73\x68\x6D\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x38\x32\x79\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x6A\x6B\x6A\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x65\x63\x75\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x36\x77\x62\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x35\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x33\x79\x38\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x39\x68\x61\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x32\x74\x30\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x78\x34\x70\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x36\x39\x33\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x70\x62\x67\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x7A\x71\x78\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x74\x6A\x71\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x65\x38\x77\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x67\x67\x79\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x35\x6B\x6D\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x62\x72\x30\x77\x31\x2E\x6D\x70\x34","\x61\x75\x72\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x67\x30\x32\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x7A\x7A\x76\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x33\x39\x62\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x7A\x35\x79\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x64\x35\x6E\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x61\x6C\x67\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x6C\x6A\x74\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x63\x70\x32\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x74\x36\x31\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x6D\x6D\x70\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6F\x78\x32\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x7A\x68\x30\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x67\x32\x33\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x76\x75\x6D\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x65\x77\x39\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x30\x69\x68\x6F\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x79\x65\x69\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x6E\x32\x77\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x78\x35\x74\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x63\x31\x76\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x71\x78\x6D\x39\x31\x2E\x6D\x70\x34","\x6E\x69\x73\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x36\x32\x78\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x67\x31\x61\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x61\x6F\x30\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x79\x63\x70\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x36\x62\x68\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x72\x61\x31\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x37\x35\x69\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x65\x6B\x62\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x69\x72\x65\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x78\x35\x30\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x34\x69\x35\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x61\x38\x7A\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x67\x70\x36\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x61\x76\x6A\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x62\x30\x33\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x34\x69\x74\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x69\x75\x31\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x7A\x31\x69\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x33\x39\x33\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x73\x35\x6D\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x65\x38\x77\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x35\x38\x79\x6A\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x6B\x73\x6F\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x6B\x34\x73\x6C\x31\x2E\x6D\x70\x34","\x7A\x69\x76\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x30\x73\x31\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x73\x38\x79\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x7A\x71\x6D\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x77\x6F\x37\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x79\x79\x62\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x75\x64\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x66\x35\x36\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x79\x67\x62\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x63\x37\x70\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x31\x76\x6F\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x72\x68\x32\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x6C\x6F\x66\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x38\x35\x77\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x31\x6B\x6C\x74\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x6B\x38\x70\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x64\x63\x73\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x76\x6F\x7A\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x70\x33\x34\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x73\x71\x34\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x64\x70\x6A\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x35\x32\x76\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x6D\x63\x6B\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x64\x30\x7A\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x31\x74\x78\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x68\x30\x64\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x6C\x32\x69\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x68\x6E\x72\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x71\x37\x6B\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x68\x6B\x68\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x74\x6A\x63\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x77\x6C\x6A\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x75\x77\x6D\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x34\x33\x6D\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x6C\x63\x62\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x6D\x38\x32\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x65\x77\x31\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x74\x68\x61\x7A\x31\x2E\x6D\x70\x34","\x79\x61\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x35\x35\x73\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x32\x7A\x32\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x61\x36\x76\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x64\x79\x6A\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x6F\x39\x78\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x64\x7A\x32\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x62\x64\x6C\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x6B\x34\x74\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x65\x68\x6C\x36\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x7A\x68\x30\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x36\x62\x66\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x77\x78\x78\x33\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x79\x6B\x36\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x75\x68\x61\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x7A\x67\x73\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x64\x39\x78\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x67\x36\x68\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6D\x74\x73\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x39\x34\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x38\x72\x77\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x38\x30\x33\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x6A\x30\x64\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x68\x68\x34\x37\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x6B\x34\x78\x37\x31\x2E\x6D\x70\x34","\x76\x69\x6F\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x73\x31\x62\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x6D\x34\x79\x37\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x67\x72\x63\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x70\x32\x39\x70\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x74\x79\x31\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x67\x75\x79\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x34\x39\x79\x6E\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x30\x66\x74\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x73\x69\x30\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x70\x6D\x6D\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x74\x71\x75\x6F\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x36\x38\x6F\x39\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x71\x77\x38\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x72\x62\x30\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x7A\x72\x32\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x65\x33\x34\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x61\x35\x72\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x61\x69\x79\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x6A\x6A\x36\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x33\x74\x62\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x70\x64\x32\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x66\x77\x39\x74\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x30\x62\x67\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6F\x70\x67\x62\x37\x31\x2E\x6D\x70\x34","\x73\x79\x61\x6E\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x35\x77\x6E\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x76\x38\x7A\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x72\x67\x35\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x62\x66\x62\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x62\x6C\x63\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x64\x35\x73\x78\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x35\x32\x30\x75\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x62\x70\x6C\x62\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x39\x31\x39\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x72\x36\x67\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x39\x78\x73\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x6E\x61\x79\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x67\x39\x39\x32\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6D\x31\x38\x30\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x36\x62\x6D\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x73\x35\x72\x33\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x78\x6F\x69\x74\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x64\x75\x72\x33\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x63\x36\x64\x64\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x62\x62\x75\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x79\x69\x6E\x77\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x71\x73\x71\x68\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x74\x75\x31\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6A\x62\x6B\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x34\x72\x6D\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x65\x71\x66\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x69\x38\x36\x71\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x33\x78\x61\x64\x61\x31\x2E\x6D\x70\x34","\x72\x69\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x74\x30\x65\x6E\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x35\x71\x35\x6C\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x72\x64\x30\x7A\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x6D\x34\x78\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x36\x67\x75\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x76\x38\x63\x6B\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6A\x62\x77\x77\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6E\x64\x6C\x35\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x37\x76\x36\x74\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x61\x33\x67\x72\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x74\x6C\x69\x32\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x7A\x31\x75\x32\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6B\x64\x76\x32\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x38\x71\x7A\x68\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x39\x76\x71\x37\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x32\x62\x33\x61\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x75\x35\x7A\x33\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x35\x6C\x36\x6E\x72\x62\x31\x2E\x6D\x70\x34","\x73\x79\x69\x66\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x62\x79\x68\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x78\x61\x33\x6E\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x67\x67\x78\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x72\x76\x63\x74\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x64\x67\x66\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x33\x32\x78\x77\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x36\x76\x6C\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x7A\x32\x6E\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x76\x7A\x67\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x71\x75\x67\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x78\x72\x69\x73\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x39\x69\x71\x74\x35\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x36\x34\x77\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x6D\x79\x74\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x67\x34\x75\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x31\x79\x6B\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x70\x7A\x79\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x7A\x30\x78\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x71\x6A\x61\x73\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x72\x76\x6B\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x6D\x77\x35\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x65\x77\x62\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x6F\x39\x73\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x66\x71\x32\x6E\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x75\x64\x77\x76\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x66\x72\x67\x61\x31\x2E\x6D\x70\x34","\x6D\x61\x6D\x61\x5F\x67\x69\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x6F\x71\x6F\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x66\x75\x30\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x64\x34\x71\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x64\x33\x68\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x77\x33\x6F\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x75\x38\x32\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x34\x6F\x72\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6E\x6F\x38\x64\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x70\x78\x61\x67\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x32\x77\x34\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x63\x78\x70\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6E\x76\x75\x61\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x67\x30\x6F\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x32\x69\x6D\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x61\x77\x77\x78\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x74\x33\x76\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x62\x77\x32\x64\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x75\x7A\x6A\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x63\x6F\x67\x77\x36\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6A\x61\x73\x6E\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x37\x33\x65\x65\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x35\x77\x6B\x70\x70\x31\x2E\x6D\x70\x34","\x61\x6C\x63\x61\x6B\x65\x6E\x79\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x68\x74\x77\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x68\x37\x74\x70\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x33\x37\x7A\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x39\x70\x71\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6F\x62\x65\x38\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x68\x37\x75\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6F\x33\x6F\x68\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x6D\x39\x30\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x37\x6D\x6F\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x65\x72\x39\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6F\x38\x75\x39\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x32\x31\x73\x6E\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x68\x79\x64\x73\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x76\x67\x61\x31\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x70\x37\x38\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x33\x68\x38\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x6B\x33\x76\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x33\x72\x39\x61\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x67\x31\x39\x6F\x63\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x30\x74\x69\x73\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x79\x69\x6D\x6E\x72\x31\x2E\x6D\x70\x34","\x6D\x61\x6E\x67\x61\x79\x75\x74\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x6D\x31\x6B\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6B\x30\x70\x73\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x79\x33\x39\x34\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6D\x7A\x73\x74\x33\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x71\x36\x6F\x31\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x7A\x36\x31\x74\x74\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x74\x33\x64\x6E\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x33\x69\x38\x62\x61\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x30\x61\x6F\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x76\x79\x65\x62\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x35\x67\x65\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x38\x34\x65\x73\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x65\x7A\x37\x79\x39\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x71\x6B\x62\x35\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x77\x64\x66\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x66\x7A\x6D\x77\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x72\x70\x72\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x36\x39\x31\x39\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x75\x6E\x72\x70\x30\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x31\x78\x6B\x74\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x34\x74\x35\x64\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x6C\x34\x6A\x33\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x77\x62\x37\x70\x71\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x69\x35\x72\x6B\x69\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x73\x35\x38\x69\x72\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x64\x61\x79\x69\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x32\x30\x34\x34\x39\x32\x74\x38\x6E\x31\x2E\x6D\x70\x34","\x72\x69\x6B\x61\x67\x75\x73\x72\x69\x61\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x68\x78\x77\x39\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x70\x65\x7A\x68\x70\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x63\x6A\x67\x62\x78\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x76\x36\x76\x68\x67\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x75\x68\x37\x75\x64\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x63\x39\x63\x70\x62\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x38\x61\x6D\x6B\x66\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x6A\x61\x71\x36\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6E\x32\x75\x6D\x34\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x65\x31\x34\x70\x69\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x36\x6C\x77\x66\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x37\x61\x75\x74\x6C\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x36\x74\x66\x63\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x6D\x72\x37\x75\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x74\x62\x74\x65\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x65\x34\x6F\x71\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6B\x6B\x71\x79\x68\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x65\x76\x6C\x7A\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x30\x61\x70\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x72\x66\x73\x76\x32\x2E\x6D\x70\x34","\x61\x73\x75\x70\x61\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x34\x31\x36\x32\x30\x37\x5F\x36\x37\x34\x36\x36\x31\x32\x38\x39\x38\x34\x30\x39\x37\x35\x5F\x37\x32\x33\x38\x35\x33\x38\x34\x36\x30\x36\x37\x36\x36\x34\x35\x32\x34\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x34\x34\x33\x30\x31\x37\x5F\x32\x32\x35\x37\x33\x38\x38\x34\x32\x33\x30\x37\x30\x31\x30\x5F\x31\x35\x30\x37\x36\x31\x34\x30\x31\x38\x35\x33\x38\x38\x37\x31\x36\x36\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x30\x36\x37\x31\x30\x5F\x31\x32\x39\x37\x33\x30\x38\x39\x35\x35\x31\x36\x36\x35\x39\x5F\x39\x30\x39\x30\x31\x30\x32\x38\x39\x30\x32\x33\x35\x31\x31\x33\x39\x32\x32\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x31\x38\x31\x31\x35\x5F\x33\x33\x38\x32\x31\x35\x36\x39\x33\x38\x34\x39\x37\x31\x33\x31\x5F\x32\x37\x30\x32\x35\x33\x39\x31\x35\x34\x34\x33\x32\x32\x33\x31\x39\x33\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x33\x33\x34\x35\x30\x5F\x39\x38\x38\x39\x36\x30\x32\x36\x38\x32\x33\x38\x34\x38\x32\x5F\x34\x39\x30\x38\x33\x30\x30\x31\x37\x35\x39\x36\x30\x33\x39\x36\x32\x36\x35\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x35\x34\x39\x39\x33\x5F\x39\x31\x33\x35\x38\x32\x35\x33\x35\x38\x33\x35\x33\x35\x33\x5F\x37\x39\x33\x37\x31\x35\x35\x37\x33\x30\x30\x30\x31\x32\x31\x39\x39\x34\x35\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x36\x35\x37\x34\x35\x5F\x32\x35\x38\x34\x38\x33\x32\x30\x32\x30\x39\x39\x30\x32\x38\x5F\x31\x38\x33\x31\x35\x33\x34\x37\x33\x34\x31\x32\x36\x34\x30\x38\x34\x39\x37\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x30\x31\x36\x36\x5F\x32\x37\x31\x36\x32\x34\x32\x36\x30\x38\x36\x34\x34\x35\x37\x31\x5F\x35\x35\x36\x32\x34\x35\x32\x33\x33\x35\x36\x31\x31\x30\x35\x30\x34\x33\x30\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x31\x33\x35\x38\x5F\x33\x37\x34\x33\x38\x37\x39\x33\x34\x32\x33\x32\x32\x38\x36\x38\x5F\x34\x37\x33\x31\x31\x35\x32\x33\x34\x37\x30\x38\x34\x36\x31\x34\x33\x36\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x31\x39\x33\x38\x5F\x31\x39\x38\x32\x37\x35\x31\x37\x31\x38\x30\x35\x38\x32\x32\x5F\x38\x35\x30\x36\x32\x34\x31\x35\x33\x33\x39\x36\x39\x35\x30\x39\x30\x30\x34\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x33\x30\x33\x34\x5F\x31\x32\x38\x36\x35\x34\x37\x32\x31\x39\x36\x37\x33\x38\x39\x5F\x31\x38\x33\x37\x31\x34\x34\x33\x34\x30\x35\x37\x30\x30\x31\x37\x38\x33\x30\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x34\x32\x31\x37\x5F\x32\x37\x30\x37\x33\x31\x39\x37\x39\x32\x38\x36\x36\x31\x36\x35\x5F\x33\x36\x38\x32\x33\x32\x38\x33\x39\x32\x38\x34\x30\x30\x31\x30\x32\x36\x31\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x37\x35\x39\x38\x36\x5F\x31\x35\x31\x38\x31\x36\x34\x33\x33\x32\x36\x33\x30\x39\x32\x5F\x36\x36\x30\x30\x32\x36\x32\x39\x36\x36\x35\x32\x30\x33\x39\x38\x32\x37\x31\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x32\x34\x30\x30\x5F\x33\x33\x39\x39\x32\x36\x33\x34\x34\x30\x39\x31\x34\x33\x33\x5F\x32\x35\x38\x31\x32\x34\x38\x35\x38\x31\x31\x35\x36\x36\x39\x33\x36\x30\x33\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x33\x37\x33\x39\x5F\x31\x30\x36\x30\x31\x39\x30\x39\x32\x31\x30\x37\x39\x32\x31\x32\x5F\x33\x38\x39\x38\x35\x32\x30\x32\x35\x34\x36\x36\x34\x35\x30\x37\x33\x32\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x37\x34\x31\x35\x5F\x36\x33\x38\x37\x37\x36\x35\x34\x36\x39\x39\x38\x33\x30\x37\x5F\x33\x30\x39\x31\x30\x39\x33\x38\x38\x32\x32\x36\x37\x38\x31\x38\x36\x30\x37\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x35\x38\x39\x37\x37\x31\x5F\x37\x35\x32\x36\x37\x30\x38\x35\x35\x33\x32\x39\x32\x36\x36\x5F\x35\x30\x36\x34\x35\x37\x33\x36\x30\x37\x34\x36\x35\x35\x31\x39\x34\x36\x33\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x31\x33\x38\x36\x30\x5F\x33\x33\x39\x33\x31\x31\x30\x31\x37\x37\x34\x34\x34\x33\x35\x32\x5F\x34\x32\x38\x37\x31\x36\x35\x38\x33\x38\x33\x35\x39\x32\x36\x34\x31\x32\x34\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x31\x34\x38\x35\x39\x5F\x37\x36\x38\x36\x33\x32\x37\x32\x33\x37\x30\x31\x37\x37\x33\x5F\x35\x36\x36\x32\x35\x32\x31\x36\x32\x30\x37\x33\x34\x33\x31\x36\x37\x37\x34\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x31\x35\x30\x31\x39\x5F\x31\x34\x39\x33\x39\x32\x39\x37\x33\x33\x35\x37\x30\x33\x31\x5F\x36\x32\x35\x34\x39\x36\x33\x33\x33\x33\x37\x37\x39\x37\x37\x39\x37\x30\x38\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x36\x34\x34\x35\x37\x5F\x33\x33\x38\x36\x32\x39\x37\x31\x30\x35\x36\x33\x31\x31\x39\x5F\x36\x36\x31\x35\x32\x32\x36\x38\x34\x39\x32\x38\x30\x33\x36\x39\x34\x35\x33\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x37\x30\x37\x36\x32\x5F\x31\x39\x31\x30\x33\x33\x33\x32\x35\x38\x37\x34\x36\x37\x31\x5F\x38\x31\x36\x38\x32\x34\x36\x30\x39\x34\x32\x30\x30\x31\x36\x37\x36\x30\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x37\x38\x31\x31\x32\x5F\x39\x37\x31\x36\x39\x33\x32\x39\x39\x39\x37\x32\x38\x38\x33\x5F\x31\x36\x34\x38\x38\x32\x36\x32\x32\x31\x35\x30\x34\x37\x34\x32\x32\x32\x30\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x38\x32\x33\x36\x33\x5F\x31\x31\x38\x31\x38\x36\x36\x36\x38\x38\x38\x35\x34\x36\x39\x34\x5F\x34\x32\x33\x33\x34\x36\x36\x33\x35\x34\x38\x39\x32\x37\x32\x31\x35\x39\x35\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x36\x39\x38\x38\x35\x38\x5F\x31\x33\x30\x32\x34\x37\x30\x35\x36\x36\x37\x35\x31\x36\x30\x39\x5F\x33\x37\x33\x36\x39\x39\x39\x37\x37\x33\x34\x35\x32\x32\x32\x35\x37\x32\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x37\x30\x37\x30\x34\x39\x5F\x33\x33\x37\x39\x38\x31\x37\x37\x37\x33\x30\x34\x32\x33\x31\x5F\x33\x31\x35\x32\x36\x35\x30\x37\x34\x31\x31\x36\x39\x38\x35\x31\x36\x36\x39\x5F\x6E\x2E\x6D\x70\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x73\x65\x6B\x61\x69\x2E\x6D\x79\x2E\x69\x64\x2F\x70\x74\x6C\x5F\x72\x65\x70\x6F\x73\x74\x2F\x31\x32\x30\x37\x31\x34\x34\x31\x32\x5F\x36\x38\x30\x36\x38\x30\x37\x30\x32\x38\x30\x36\x39\x35\x39\x5F\x32\x31\x34\x39\x34\x39\x39\x33\x36\x36\x35\x36\x32\x37\x32\x39\x38\x31\x34\x5F\x6E\x2E\x6D\x70\x34","\x62\x6F\x63\x69\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x79\x78\x6F\x64\x67\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x36\x31\x70\x33\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x34\x67\x33\x70\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x74\x6A\x6C\x69\x6F\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x7A\x32\x6D\x63\x34\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x75\x79\x6F\x66\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x35\x68\x72\x6C\x65\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x75\x6C\x35\x61\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6F\x39\x32\x6E\x72\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x31\x72\x68\x32\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x61\x71\x70\x67\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x35\x7A\x6C\x6A\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x30\x67\x35\x61\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6F\x6A\x37\x36\x6E\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x39\x67\x6C\x33\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x35\x32\x63\x71\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x76\x67\x6A\x37\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x30\x37\x6F\x7A\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x68\x31\x66\x6F\x36\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x72\x6F\x33\x75\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6B\x78\x30\x61\x63\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x67\x39\x65\x7A\x71\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x70\x6C\x69\x6E\x31\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x61\x78\x72\x69\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x6A\x7A\x7A\x6E\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x67\x79\x63\x64\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6C\x31\x34\x6E\x6B\x38\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x72\x67\x71\x74\x39\x2E\x6D\x70\x34","\x67\x65\x61\x79\x75\x62\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x75\x66\x72\x75\x6C\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x62\x64\x70\x6B\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x6A\x39\x6E\x6D\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x6E\x73\x61\x6C\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x64\x34\x6B\x63\x37\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x62\x69\x68\x38\x71\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x78\x37\x61\x61\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x67\x33\x7A\x73\x71\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x37\x34\x77\x64\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x70\x38\x74\x66\x6D\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x6A\x38\x69\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x7A\x67\x75\x79\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6C\x37\x33\x72\x79\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x79\x68\x7A\x6E\x6A\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6B\x6D\x74\x70\x33\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x6E\x68\x64\x67\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x79\x31\x6A\x7A\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x37\x30\x6D\x6B\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x39\x6D\x76\x76\x66\x38\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x63\x6D\x7A\x64\x39\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x36\x6F\x6F\x30\x73\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x76\x76\x70\x74\x31\x2E\x6D\x70\x34","\x73\x61\x6E\x74\x75\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x65\x73\x70\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x33\x7A\x66\x69\x32\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x30\x30\x6B\x78\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6B\x78\x37\x68\x69\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x37\x67\x36\x6B\x64\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x36\x79\x6B\x34\x63\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x79\x31\x75\x37\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x6C\x73\x79\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x31\x39\x34\x38\x62\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x67\x38\x34\x36\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x31\x79\x6F\x7A\x6C\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x6A\x72\x32\x71\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x78\x31\x77\x70\x35\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x72\x31\x30\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x73\x32\x39\x68\x71\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6B\x62\x6F\x30\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x78\x65\x6B\x39\x7A\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x73\x37\x67\x62\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x30\x64\x62\x75\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x78\x75\x34\x6B\x64\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x7A\x77\x32\x6E\x62\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x65\x79\x62\x6A\x6A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x66\x6D\x78\x33\x33\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x67\x6E\x6C\x61\x6D\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x74\x77\x77\x75\x35\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x71\x6B\x65\x68\x37\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x65\x66\x6D\x32\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x69\x64\x7A\x64\x35\x31\x2E\x6D\x70\x34","\x75\x6B\x68\x74\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6E\x73\x32\x7A\x6F\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x6A\x39\x69\x38\x31\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x74\x6A\x35\x38\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x61\x32\x69\x73\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x77\x62\x67\x63\x34\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x75\x72\x62\x6A\x30\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x30\x63\x65\x69\x71\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x30\x7A\x36\x6F\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x39\x30\x62\x35\x30\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x64\x63\x69\x78\x7A\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x37\x67\x70\x6A\x70\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x63\x63\x32\x32\x77\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x78\x6E\x36\x34\x31\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x69\x6C\x78\x7A\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x61\x73\x34\x6D\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x70\x39\x6A\x35\x76\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6D\x67\x65\x75\x79\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6C\x77\x39\x33\x38\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x76\x6D\x30\x64\x6B\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x66\x69\x76\x38\x78\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x6D\x33\x64\x74\x30\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x69\x37\x79\x61\x67\x31\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x64\x72\x35\x79\x61\x32\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x37\x32\x6B\x70\x67\x33\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6A\x33\x62\x32\x32\x34\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x37\x79\x6B\x74\x32\x35\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x6F\x30\x76\x68\x31\x36\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x73\x73\x66\x62\x6E\x37\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x38\x74\x37\x34\x35\x38\x2E\x6D\x70\x34","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x6D\x5F\x31\x39\x33\x31\x76\x68\x75\x37\x35\x39\x2E\x6D\x70\x34","\x61\x68\x65\x67\x61\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x68\x65\x67\x61\x6F\x2E\x74\x78\x74","\x61\x73\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x61\x73\x73\x2E\x74\x78\x74","\x62\x64\x73\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x64\x73\x6D\x2E\x74\x78\x74","\x62\x6C\x6F\x77\x6A\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x62\x6C\x6F\x77\x6A\x6F\x62\x2E\x74\x78\x74","\x63\x75\x63\x6B\x6F\x6C\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x63\x6B\x6F\x6C\x64\x2E\x74\x78\x74","\x63\x75\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x63\x75\x6D\x2E\x74\x78\x74","\x65\x72\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x65\x72\x6F\x2E\x74\x78\x74","\x66\x65\x6D\x64\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x65\x6D\x64\x6F\x6D\x2E\x74\x78\x74","\x66\x6F\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x66\x6F\x6F\x74\x2E\x74\x78\x74","\x67\x61\x6E\x67\x62\x61\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x61\x6E\x67\x62\x61\x6E\x67\x2E\x74\x78\x74","\x67\x6C\x61\x73\x73\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x67\x6C\x61\x73\x73\x65\x73\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x65\x6E\x74\x61\x69\x2E\x74\x78\x74","\x68\x65\x6E\x74\x61\x69\x5F\x67\x69\x66\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x68\x6E\x74\x5F\x67\x69\x66\x73\x2E\x74\x78\x74","\x6A\x61\x68\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6A\x61\x68\x79\x2E\x74\x78\x74","\x6D\x61\x6E\x67\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x6E\x67\x61\x2E\x74\x78\x74","\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E\x2E\x74\x78\x74","\x6E\x65\x6B\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6E\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x6F\x72\x67\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x6F\x72\x67\x79\x2E\x74\x78\x74","\x70\x61\x6E\x74\x69\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x61\x6E\x74\x69\x65\x73\x2E\x74\x78\x74","\x70\x75\x73\x73\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x70\x75\x73\x73\x79\x2E\x74\x78\x74","\x6E\x65\x6B\x6F\x5F\x73\x66\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x73\x66\x77\x4E\x65\x6B\x6F\x2E\x74\x78\x74","\x74\x65\x6E\x74\x61\x63\x6C\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x65\x6E\x74\x61\x63\x6C\x65\x73\x2E\x74\x78\x74","\x74\x68\x69\x67\x68\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x74\x68\x69\x67\x68\x73\x2E\x74\x78\x74","\x79\x75\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x79\x75\x72\x69\x2E\x74\x78\x74","\x7A\x65\x74\x74\x61\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x6E\x73\x66\x77\x2F\x7A\x65\x74\x74\x61\x69\x52\x79\x6F\x75\x69\x6B\x69\x2E\x74\x78\x74","\x61\x6E\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x41\x6E\x6E\x61\x2E\x74\x78\x74","\x61\x73\x75\x6E\x61\x5F\x79\x75\x6B\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x41\x73\x75\x6E\x61\x5F\x79\x75\x6B\x69\x2E\x74\x78\x74","\x61\x79\x75\x7A\x61\x77\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x41\x79\x75\x7A\x61\x77\x61\x5F\x6D\x69\x73\x61\x6B\x69\x2E\x74\x78\x74","\x63\x68\x69\x74\x6F\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x43\x68\x69\x74\x6F\x67\x65\x5F\x6B\x69\x72\x69\x73\x61\x6B\x69\x2E\x74\x78\x74","\x65\x6D\x69\x6C\x69\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x45\x6D\x69\x6C\x69\x61\x2E\x74\x78\x74","\x65\x72\x7A\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x45\x72\x7A\x61\x5F\x73\x63\x61\x72\x6C\x65\x74\x2E\x74\x78\x74","\x68\x69\x6E\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x48\x69\x6E\x61\x74\x61\x2E\x74\x78\x74","\x69\x6E\x6F\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x49\x6E\x6F\x72\x69\x5F\x79\x75\x7A\x75\x72\x69\x68\x61\x2E\x74\x78\x74","\x6B\x61\x67\x61\x5F\x6B\x6F\x75\x6B\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4B\x61\x67\x61\x5F\x6B\x6F\x75\x6B\x6F\x2E\x74\x78\x74","\x6B\x61\x6F\x72\x69\x5F\x6D\x69\x79\x61\x7A\x6F\x6E\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4B\x61\x6F\x72\x69\x5F\x6D\x69\x79\x61\x7A\x6F\x6E\x6F\x2E\x74\x78\x74","\x6B\x6F\x74\x6F\x72\x69\x5F\x6D\x69\x6E\x61\x6D\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4B\x6F\x74\x6F\x72\x69\x5F\x6D\x69\x6E\x61\x6D\x69\x2E\x74\x78\x74","\x6D\x69\x6B\x61\x73\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4D\x69\x6B\x61\x73\x61\x2E\x74\x78\x74","\x6D\x69\x6F\x5F\x61\x6B\x69\x79\x61\x6D\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4D\x69\x6F\x5F\x61\x6B\x69\x79\x61\x6D\x61\x2E\x74\x78\x74","\x6D\x69\x7A\x6F\x72\x65\x5F\x73\x69\x72\x61\x79\x75\x6B\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4D\x69\x7A\x6F\x72\x65\x5F\x73\x69\x72\x61\x79\x75\x6B\x69\x2E\x74\x78\x74","\x6E\x61\x6B\x69\x72\x69\x5F\x61\x6C\x69\x63\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4E\x61\x6B\x69\x72\x69\x5F\x61\x6C\x69\x63\x65\x2E\x74\x78\x74","\x6E\x61\x72\x75\x74\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x4E\x61\x72\x75\x74\x6F\x2E\x74\x78\x74","\x72\x69\x79\x61\x73\x5F\x67\x72\x65\x6D\x6F\x72\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x52\x69\x79\x61\x73\x5F\x67\x72\x65\x6D\x6F\x72\x69\x2E\x74\x78\x74","\x73\x61\x6B\x75\x72\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x53\x61\x6B\x75\x72\x61\x2E\x74\x78\x74","\x73\x61\x73\x75\x6B\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x53\x61\x73\x75\x6B\x65\x2E\x74\x78\x74","\x73\x65\x6E\x74\x6F\x5F\x69\x73\x75\x7A\x75","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x53\x65\x6E\x74\x6F\x5F\x69\x73\x75\x7A\x75\x2E\x74\x78\x74","\x73\x68\x61\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x53\x68\x61\x6E\x61\x2E\x74\x78\x74","\x73\x68\x69\x69\x6E\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x53\x68\x69\x69\x6E\x61\x2E\x74\x78\x74","\x73\x68\x69\x6E\x6B\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x53\x68\x69\x6E\x6B\x61\x2E\x74\x78\x74","\x77\x69\x6E\x72\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x57\x69\x6E\x72\x79\x2E\x74\x78\x74","\x79\x75\x6B\x69\x6E\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x59\x75\x6B\x69\x6E\x6F\x2E\x74\x78\x74","\x79\x75\x7A\x75\x6B\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x59\x75\x7A\x75\x6B\x69\x2E\x74\x78\x74","\x61\x6B\x61\x6D\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x61\x6B\x61\x6D\x65\x2E\x74\x78\x74","\x6D\x69\x6B\x6F\x73\x69\x62\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x41\x6E\x69\x6D\x65\x2F\x6D\x69\x6B\x6F\x73\x69\x62\x61\x2E\x74\x78\x74","\x61\x77\x6F\x61\x77\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x41\x77\x6F\x61\x77\x6F\x2E\x74\x78\x74","\x62\x65\x6E\x65\x64\x69\x63\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x42\x65\x6E\x65\x64\x69\x63\x74\x2E\x74\x78\x74","\x63\x68\x61\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x43\x68\x61\x74\x2E\x74\x78\x74","\x64\x62\x66\x6C\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x42\x66\x6C\x79\x2E\x74\x78\x74","\x64\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x69\x6E\x6F\x5F\x6B\x75\x6E\x69\x6E\x67\x2E\x74\x78\x74","\x64\x6F\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x44\x6F\x67\x65\x2E\x74\x78\x74","\x67\x6F\x6A\x6F\x73\x61\x74\x6F\x72\x75","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x47\x6F\x6A\x6F\x73\x61\x74\x75\x72\x75\x2E\x74\x78\x74","\x68\x6F\x70\x65\x5F\x62\x6F\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x48\x6F\x70\x65\x42\x6F\x79\x2E\x74\x78\x74","\x6A\x69\x73\x6F\x6F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4A\x69\x69\x73\x6F\x2E\x74\x78\x74","\x6B\x72\x5F\x72\x6F\x62\x6F\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x72\x5F\x72\x6F\x62\x6F\x74\x2E\x74\x78\x74","\x6B\x75\x63\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4B\x75\x63\x69\x6E\x67\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x6C\x6F\x6E\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4C\x6F\x6E\x74\x65\x2E\x74\x78\x74","\x6D\x61\x6E\x75\x73\x69\x61\x5F\x6C\x69\x64\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x61\x6E\x75\x73\x69\x61\x4C\x69\x64\x69\x2E\x74\x78\x74","\x6D\x65\x6E\x6A\x61\x6D\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6E\x6A\x61\x6D\x65\x74\x2E\x74\x78\x74","\x6D\x65\x6F\x77","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4D\x65\x6F\x77\x2E\x74\x78\x74","\x6E\x69\x63\x68\x6F\x6C\x61\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x4E\x69\x63\x68\x6F\x6C\x61\x73\x2E\x74\x78\x74","\x70\x61\x74\x72\x69\x63\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x61\x74\x72\x69\x63\x6B\x42\x79\x5A\x65\x65\x6F\x6E\x65\x2E\x74\x78\x74","\x70\x6F\x70\x6F\x63\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x50\x6F\x70\x6F\x63\x69\x2E\x74\x78\x74","\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x6F\x6E\x6C\x79\x2E\x74\x78\x74","\x6B\x61\x77\x61\x6E\x5F\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x53\x70\x6F\x6E\x73\x62\x6F\x62\x5F\x66\x72\x69\x65\x6E\x64\x73\x2E\x74\x78\x74","\x74\x79\x6E\x69","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x54\x65\x6C\x65\x53\x74\x63\x2F\x54\x79\x6E\x69\x2E\x74\x78\x74","\x2E\x2F\x70\x72\x69\x76\x61\x74\x65\x2F\x6E\x79\x7A","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x61\x75\x64\x69\x6F\x4D\x65\x73\x73\x61\x67\x65","\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68","\x1B\x5B\x31\x3B\x33\x31\x6D\x7E\x1B\x5B\x31\x3B\x33\x37\x6D\x3E","\x5B\x1B\x5B\x31\x3B\x33\x32\x6D\x20\x43\x4D\x44\x20\x1B\x5B\x31\x3B\x33\x37\x6D\x5D","\x53\x74\x63\x20\x63\x6D\x64\x20\x6D\x65\x6E\x75","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x39\x35\x32\x33\x32\x35\x38\x36\x34\x39\x2D\x31\x36\x30\x34\x35\x39\x35\x35\x39\x38\x40\x67\x2E\x75\x73","\x31\x37\x34\x32\x33\x38\x36\x31\x34\x35\x36\x39\x34\x38\x31","\x49\x4E\x51\x55\x49\x52\x59","\x43\x41\x54\x41\x4C\x4F\x47","\u22B3\x20\x4D\x61\x64\x65\x20\x57\x69\x74\x68\x20\u2763\uFE0F\x20\u22B2","\x41\x52\x36\x78\x42\x4B\x62\x58\x5A\x6E\x30\x58\x77\x6D\x75\x37\x36\x4B\x73\x79\x64\x37\x72\x6E\x78\x49\x2B\x52\x78\x38\x37\x48\x66\x69\x6E\x56\x6C\x57\x34\x6C\x77\x58\x61\x36\x4A\x41\x3D\x3D","\u251C\u25EA\x20\x0D\x0A\u2502\u2752\x20\x5A\x45\x45\x4F\x4E\x45\x0D\x0A\u2502\u2752\x20\x4E\x41\x59\x4C\x41\x43\x48\x41\x4E\x0D\x0A\u2502\u2752\x20\x52\x59\x4E\x5A\x20\x0D\x0A\u2502\u2752\x20\x4C\x4F\x4C\x49\x20\x4B\x49\x4C\x4C\x45\x52\x53\x20\x0D\x0A\u2502\u2752\x20\x41\x52\x41\x2D\x41\x52\x41\x0D\x0A\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2508\x20\u2CF9\x0D\x0A","\u256D\u2500\u29C9\x20\x54\x48\x41\x4E\x4B\x53\x20\x54\x4F\x20\u29C9","\x53\x45\x4C\x45\x43\x54","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\x50\x69\x6C\x69\x68\x20\x73\x61\x6C\x61\x68\x20\x73\x61\x74\x75\x20\x74\x6F\x64","\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x30","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65","\x53\x74\x63\x20\x63\x6D\x64\x20\x70\x69\x6E\x67","\x6E\x65\x6F\x66\x65\x74\x63\x68\x20\x2D\x2D\x73\x74\x64\x6F\x75\x74","\x75\x74\x66\x2D\x38","\x52\x61\x6D\x3A","\x72\x65\x70\x6C\x61\x63\x65","\x2A","\x53\x70\x65\x65\x64\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x53\x65\x63\x6F\x6E\x64\x2A","\x62\x75\x74\x74\x6F\x6E\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x42\x75\x74\x74\x6F\x6E\x49\x64","\x6D\x65\x6E\x75","\x42\x75\x74\x74\x6F\x6E\x20\x6D\x65\x6E\x75","\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x70\x69\x6C\x69\x68\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74\x20\x64\x69\x62\x61\x77\x61\x68\x2E\x20\x49\x6E\x67\x61\x74\x21\x21\x21\x20\x4E\x6F\x20\x73\x70\x61\x6D","\u25C9\x20\x41\x6C\x6C\x20\x6D\x65\x6E\x75\x20\x62\x6F\x74","\x61\x6C\x6C\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x61\x6C\x6C\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\x63\x6F\x6C\x6F\x6E\x67\x20\x61\x6A\x61\x20\x6B\x61\x6B","\u25C9\x20\x53\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x6B\x6E\x6F\x77\x20\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65\x20\x74\x68\x69\x73\x20\x62\x6F\x74\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x30","\x66\x61\x73\x74\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x66\x61\x73\x74\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31","\x6D\x61\x6B\x65\x72\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x32","\x6F\x77\x6E\x65\x72\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x33","\x73\x70\x65\x73\x69\x61\x6C\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x70\x65\x73\x69\x61\x6C\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x34","\x73\x65\x72\x74\x69\x66\x69\x6B\x61\x74\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x65\x72\x74\x69\x66\x69\x6B\x61\x74\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x35","\x73\x74\x69\x63\x6B\x65\x72\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x74\x69\x63\x6B\x65\x72\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x36","\x72\x61\x6E\x64\x6F\x6D\x74\x65\x78\x74\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x72\x61\x6E\x64\x6F\x6D\x74\x65\x78\x74\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x37","\x67\x61\x6D\x65\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x67\x61\x6D\x65\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x38","\x74\x61\x67\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x74\x61\x67\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x39","\x63\x65\x6B\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x63\x65\x6B\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x30","\x6E\x65\x77\x73\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6E\x65\x77\x73\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x31","\x73\x74\x6F\x72\x61\x67\x65\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x32","\x70\x6F\x72\x6E\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x70\x6F\x72\x6E\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x33","\x73\x6F\x75\x6E\x64\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x73\x6F\x75\x6E\x64\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x34","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x35","\x70\x72\x6F\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x70\x72\x6F\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x36","\x67\x72\x75\x70\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x67\x72\x75\x70\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x37","\x61\x73\x75\x70\x61\x6E\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x61\x73\x75\x70\x61\x6E\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x38","\x67\x61\x63\x68\x61\x20\x63\x65\x63\x61\x6E","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x67\x61\x63\x68\x61\x20\x63\x65\x63\x61\x6E\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x31\x39","\x67\x61\x63\x68\x61\x20\x63\x6F\x67\x61\x6E","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x67\x61\x63\x68\x61\x20\x63\x6F\x67\x61\x6E\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x32\x30","\x61\x6E\x69\x6D\x65\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x61\x6E\x69\x6D\x65\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x32\x31","\x6E\x73\x66\x77\x20\x6D\x65\x6E\x75","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x6E\x73\x66\x77\x6D\x65\x6E\x75\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\u25C9\x20\x4D\x65\x6E\x75\x20\x6B\x65\x2D\x32\x32","\x69\x6D\x61\x67\x65\x20\x65\x66\x66\x65\x63\x74","\x0A\x0A\x5F\x63\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x75\x73\x65\x20\x74\x68\x65\x20\x69\x6D\x61\x67\x65\x20\x65\x66\x66\x65\x63\x74\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x5F","\x64\x6F\x6E\x61\x73\x69\x5F\x6B\x61\x6B","\x48\x61\x79\x20\x40","\x2C\x20\x6B\x61\x6D\x75\x20\x6D\x61\x75\x20\x64\x6F\x6E\x61\x73\x69\x20\x76\x69\x61\x20\x61\x70\x61\x20\x6E\x69\x68\x3F\x20\x4F\x56\x4F\x2C\x20\x44\x41\x4E\x41\x20\x2C\x20\x61\x74\x61\x75\x20\x47\x4F\x50\x41\x59\x2E\x20\x55\x6E\x74\x75\x6B\x20\x64\x6F\x6E\x61\x73\x69\x20\x76\x69\x61\x20\x70\x75\x6C\x73\x61\x20\x62\x69\x73\x61\x20\x68\x75\x62\x75\x6E\x67\x69\x20\x6F\x77\x6E\x65\x72\x20\x6B\x75\x20\x6C\x61\x6E\x67\x73\x75\x6E\x67\uD83D\uDE07","\x62\x61\x79\x61\x72\x5F\x6F\x76\x6F","\x4F\x56\x4F","\x62\x61\x79\x61\x72\x5F\x64\x61\x6E\x61","\x44\x41\x4E\x41","\x62\x61\x79\x61\x72\x5F\x67\x6F\x70\x61\x79","\x47\x4F\x50\x41\x59","\x2C\x20\x6B\x61\x6D\x75\x20\x6D\x61\x75\x20\x62\x61\x79\x61\x72\x20\x70\x61\x6B\x65\x20\x6E\x6F\x6D\x6F\x72\x20\x61\x6A\x61\x20\x61\x74\x61\x75\x20\x70\x61\x6B\x65\x20\x71\x72\x20\x63\x6F\x64\x65\x3F","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x6F\x76\x6F","\x4E\x4F\x4D\x4F\x52","\x71\x72\x5F\x6F\x76\x6F","\x51\x52\x20\x43\x4F\x44\x45","\x2A\x4E\x6F\x20\x50\x68\x70\x20\x59\x61\x20\u0CA0\uFE35\u0CA0\x2A\x0D\x0A\x0D\x0A\u2022\x20\x4E\x61\x6D\x61\x20\x3A\x20\x5F","\x5F\x0D\x0A\u2022\x20\x4E\x6F\x6D\x6F\x72\x20\x3A\x20\x5F\x40","\x5F\x0D\x0A\x0D\x0A\x2A\x50\x41\x59\x4D\x45\x4E\x54\x2A\x0D\x0A\x0D\x0A","\x0D\x0A\x0D\x0A\x5F\x50\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x40","\x5F","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x64\x61\x6E\x61","\x71\x72\x5F\x64\x61\x6E\x61","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x67\x6F\x70\x61\x79","\x71\x72\x5F\x67\x6F\x70\x61\x79","\x79\x6F\x75\x74\x75\x62\x65","\x42\x75\x74\x74\x6F\x6E\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x59\x6F\x75\x74\x75\x62\x65","\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x79\x61\x20\x6B\x61\x6B\x20\x59\x6F\x75\x54\x75\x62\x65\x20\x6F\x77\x6E\x65\x72\x20\x6B\x75\x20\uD83D\uDE07\x0D\x0A\x0D\x0A","\x69\x6E\x73\x74\x61\x67\x72\x61\x6D","\x42\x75\x74\x74\x6F\x6E\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x69\x6E\x73\x74\x61\x67\x72\x61\x6D","\x46\x6F\x6C\x6C\x6F\x77\x20\x79\x61\x20\x6B\x61\x6B\x20\x49\x6E\x73\x74\x61\x67\x72\x61\x6D\x20\x6F\x77\x6E\x65\x72\x20\x6B\x75\x20\uD83D\uDE07\x0D\x0A\x0D\x0A","\x67\x69\x74\x68\x75\x62","\x42\x75\x74\x74\x6F\x6E\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x69\x74\x68\x75\x62","\x46\x6F\x6C\x6C\x6F\x77\x20\x79\x61\x20\x6B\x61\x6B\x20\x47\x69\x74\x68\x75\x62\x20\x6F\x77\x6E\x65\x72\x20\x6B\x75\x20\uD83D\uDE07\x0D\x0A\x0D\x0A","\x73\x65\x77\x61\x5F\x62\x6F\x74","\x53\x65\x77\x61\x20\x31\x20\x4D\x69\x6E\x67\x67\x75","\x0A\x0A\x5F\x43\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x72\x65\x6E\x74\x20\x61\x20\x62\x6F\x74\x20\x66\x6F\x72\x20\x31\x20\x77\x65\x65\x6B\x5F","\x53\x65\x77\x61\x20\x32\x20\x4D\x69\x6E\x67\x67\x75","\x0A\x0A\x5F\x43\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x72\x65\x6E\x74\x20\x61\x20\x62\x6F\x74\x20\x66\x6F\x72\x20\x32\x20\x77\x65\x65\x6B\x73\x5F","\x53\x65\x77\x61\x20\x33\x20\x4D\x69\x6E\x67\x67\x75","\x0A\x0A\x5F\x43\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x72\x65\x6E\x74\x20\x61\x20\x62\x6F\x74\x20\x66\x6F\x72\x20\x33\x20\x77\x65\x65\x6B\x73\x5F","\x53\x65\x77\x61\x20\x31\x20\x62\x75\x6C\x61\x6E","\x0A\x0A\x5F\x43\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x72\x65\x6E\x74\x20\x61\x20\x62\x6F\x74\x20\x66\x6F\x72\x20\x31\x20\x6D\x6F\x6E\x74\x68\x5F","\x53\x65\x77\x61\x20\x50\x65\x72\x6D\x61\x6E\x65\x6E","\x0A\x0A\x5F\x43\x68\x6F\x6F\x73\x65\x20\x74\x68\x69\x73\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x74\x20\x74\x6F\x20\x72\x65\x6E\x74\x20\x61\x20\x62\x6F\x74\x20\x70\x65\x72\x6D\x61\x6E\x65\x6E\x74\x6C\x79\x5F","\x50\x69\x6C\x69\x68\x20\x73\x61\x6C\x61\x68\x20\x73\x61\x74\x75","\x53\x45\x4C\x45\x43\x54\x20\x48\x45\x52\x45","\x4C\x49\x53\x54\x20\x53\x45\x57\x41\x20\x42\x4F\x54\x20","\x48\x61\x69\x20\x40","\x20\x53\x65\x6D\x6F\x67\x61\x20\x68\x61\x72\x69\x6D\x75\x20\x6D\x65\x6E\x79\x65\x6E\x61\x6E\x67\x6B\x61\x6E\x20\uD83D\uDE07","\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x74\x69\x74\x6C\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x66\x61\x73\x74\x20\x6D\x65\x6E\x75","\x48\x61\x6C\x6F\x20\x40","\x20\x61\x70\x61\x6B\x61\x68\x20\x6B\x61\x6D\x75\x20\x79\x61\x6B\x69\x6E\x20\x69\x6E\x67\x69\x6E\x20\x73\x65\x77\x61\x6E\x20\x62\x6F\x74\x3F","\x59\x61\x20\u263A\uFE0F","\x54\x69\x64\x61\x6B\x20\uD83D\uDE13","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x41\x6C\x6C\x6D\x65\x6E\x75","\x20","\x50\x69\x6C\x69\x68\x20\x6B\x61\x6B","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6F\x30\x6C\x63\x76\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x6D\x77\x62\x32\x65\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x63\x66\x31\x33\x7A\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x78\x6C\x6A\x34\x69\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x65\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x35\x79\x70\x78\x6B\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x76\x63\x79\x63\x34\x31\x2E\x6A\x70\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x33\x32\x7A\x37\x61\x70\x62\x31\x2E\x6A\x70\x67","\x53\x6F\x75\x72\x63\x65\x20\x53\x63\x72\x69\x70\x74\x20\x42\x6F\x74\x20\x3A\x20\x62\x69\x74\x2E\x6C\x79\x2F\x79\x74\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63","\x53\x75\x62\x73\x63\x72\x69\x62\x65\x20\x79\x61\x20\x6B\x61\x77\x61\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x70","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x61\x6B\x65\x72\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x73\x66\x77\x20\x6D\x65\x6E\x75","\x4E\x53\x46\x57\x20\x4D\x45\x4E\x55","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6F\x77\x6E\x65\x72\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x70\x65\x73\x69\x61\x6C\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x65\x72\x74\x69\x66\x69\x6B\x61\x74\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x74\x69\x63\x6B\x65\x72\x20\x6D\x65\x6E\x75","\x64\x69\x6E\x6F\x20\x6B\x75\x6E\x69\x6E\x67","\x68\x6F\x70\x65\x20\x62\x6F\x79","\x6B\x72\x20\x72\x6F\x62\x6F\x74","\x6D\x61\x6E\x75\x73\x69\x61\x20\x6C\x69\x64\x69","\x6B\x61\x77\x61\x6E\x20\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x53\x54\x49\x43\x4B\x45\x52\x20\x4D\x45\x4E\x55","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x72\x61\x6E\x64\x6F\x6D\x74\x65\x78\x74\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x61\x6D\x65\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x74\x61\x67\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x63\x65\x6B\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x65\x77\x73\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x74\x6F\x72\x61\x67\x65\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x70\x6F\x72\x6E\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x6F\x75\x6E\x64\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x70\x72\x6F\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x72\x75\x70\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x61\x63\x68\x61\x20\x63\x65\x63\x61\x6E\x20\x6D\x65\x6E\x75","\x43\x45\x43\x41\x4E\x20\x4D\x45\x4E\x55","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x61\x63\x68\x61\x20\x63\x6F\x67\x61\x6E\x20\x6D\x65\x6E\x75","\x43\x4F\x47\x41\x4E\x20\x4D\x45\x4E\x55","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x73\x75\x70\x61\x6E\x20\x6D\x65\x6E\x75","\x41\x53\x55\x50\x41\x4E\x20\x4D\x45\x4E\x55","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x6E\x69\x6D\x65\x20\x6D\x65\x6E\x75","\x61\x73\x75\x6E\x61\x20\x79\x75\x6B\x69","\x6B\x61\x67\x61\x20\x6B\x6F\x75\x6B\x6F","\x6B\x61\x6F\x72\x69\x20\x6D\x69\x79\x61\x7A\x6F\x6E\x6F","\x6B\x6F\x74\x6F\x72\x69\x20\x6D\x69\x6E\x61\x6D\x69","\x6D\x69\x6F\x20\x61\x6B\x69\x79\x61\x6D\x61","\x6D\x69\x7A\x6F\x72\x65\x20\x73\x69\x72\x61\x79\x75\x6B\x69","\x6E\x61\x6B\x69\x72\x69\x20\x61\x6C\x69\x63\x65","\x72\x69\x79\x61\x73\x20\x67\x72\x65\x6D\x6F\x72\x69","\x73\x65\x6E\x74\x6F\x20\x69\x73\x75\x7A\x75","\x41\x4E\x49\x4D\x45\x20\x4D\x45\x4E\x55","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x69\x6D\x61\x67\x65\x20\x65\x66\x66\x65\x63\x74\x20\x6D\x65\x6E\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x68\x65\x67\x61\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x73\x73","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x62\x64\x73\x6D","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x62\x6C\x6F\x77\x6A\x6F\x62","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x63\x75\x63\x6B\x6C\x6F\x64","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x63\x75\x6D","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x65\x72\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x66\x65\x6E\x64\x6F\x6D","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x66\x6F\x6F\x74","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x61\x6E\x67\x62\x61\x6E\x67","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x6C\x61\x73\x73\x65\x73","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x68\x65\x6E\x74\x61\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x68\x65\x6E\x74\x61\x69\x20\x67\x69\x66\x73","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x61\x68\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x61\x6E\x67\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x61\x73\x74\x75\x72\x62\x61\x74\x69\x6F\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x65\x6B\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6F\x72\x67\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x70\x61\x6E\x74\x69\x65\x73","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x70\x75\x73\x73\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x65\x6B\x6F\x20\x73\x66\x77","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x74\x65\x6E\x74\x61\x63\x6C\x65\x73","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x74\x68\x69\x67\x68\x73","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x79\x75\x72\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x7A\x65\x74\x74\x61\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x63\x68\x69\x6B\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x64\x65\x6C\x76\x69\x72\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x79\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x62\x75\x6E\x67\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x75\x72\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x69\x73\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x7A\x69\x76\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x79\x61\x6E\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x76\x69\x6F\x6E\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x79\x61\x6E\x69\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x72\x69\x72\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x79\x69\x66\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x61\x6D\x61\x20\x67\x69\x6E\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x6C\x63\x68\x61\x6B\x65\x6E\x79\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x61\x6E\x67\x61\x79\x75\x74\x72\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x72\x69\x6B\x61\x67\x75\x73\x72\x69\x61\x6E\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x73\x75\x70\x61\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x62\x6F\x63\x69\x6C","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x65\x61\x79\x75\x62\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x61\x6E\x74\x75\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x75\x6B\x68\x74\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x63\x68\x69\x6E\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x49\x6E\x64\x6F\x6E\x65\x73\x69\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x4D\x61\x6C\x61\x79\x73\x69\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x54\x68\x61\x69\x6C\x61\x6E\x64","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x6F\x72\x65\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x61\x70\x61\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x76\x69\x65\x74\x6E\x61\x6D","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x65\x6E\x6E\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x69\x73\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6C\x69\x73\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x72\x6F\x73\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x42\x61\x65\x6B\x68\x79\x75\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x64\x6F\x68\x6B\x79\x75\x6E\x67\x73\x6F\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x68\x75\x61\x6E\x67\x7A\x69\x74\x61\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x68\x6F\x70\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x69\x6D\x69\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x75\x6E\x67\x6B\x6F\x6F\x6B","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x69\x6D\x6A\x6F\x6E\x64\x61\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x69\x6D\x6A\x6F\x6E\x67","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x69\x6D\x6A\x75\x6E\x6D\x79\x65\x6F\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x69\x6D\x6D\x69\x6E\x73\x65\x6F\x6B","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x69\x6D\x6E\x61\x6E\x6A\x6F\x6F\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x69\x6D\x73\x65\x6F\x6B","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63\x2F\x55\x6C\x74\x72\x6F\x69\x64\x2F\x6D\x61\x69\x6E\x2F\x73\x74\x72\x69\x6E\x67\x73\x2F\x63\x6F\x67\x61\x6E\x2F\x6B\x69\x6D\x73\x65\x6F\x6B\x2E\x74\x78\x74","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x69\x6D\x74\x61\x65\x68\x79\x75\x6E\x67","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6C\x75\x68\x61\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6F\x68\x73\x65\x68\x75\x6E","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x70\x61\x72\x6B\x63\x68\x61\x6E\x79\x65\x6F\x6C","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x75\x67\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x77\x6F\x61\x77\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x62\x65\x6E\x65\x64\x69\x63\x74","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x63\x68\x61\x74","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x64\x62\x66\x6C\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x64\x69\x6E\x6F\x20\x6B\x75\x6E\x69\x6E\x67","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x64\x6F\x67\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x67\x6F\x6A\x6F\x73\x61\x74\x6F\x72\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x68\x6F\x70\x65\x20\x62\x6F\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6A\x69\x73\x6F\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x72\x20\x72\x6F\x62\x6F\x74","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x75\x63\x69\x6E\x67","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6C\x6F\x6E\x74\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x61\x6E\x75\x73\x69\x61\x20\x6C\x69\x64\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x65\x6E\x6A\x61\x6D\x65\x74","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x65\x6F\x77","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x69\x63\x68\x6F\x6C\x61\x73","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x70\x61\x74\x72\x69\x63\x6B","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x70\x6F\x70\x6F\x63\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x61\x77\x61\x6E\x20\x73\x70\x6F\x6E\x73\x62\x6F\x62","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x74\x79\x6E\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x6E\x6E\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x73\x75\x6E\x61\x20\x79\x75\x6B\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x79\x75\x7A\x61\x77\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x63\x68\x69\x74\x6F\x67\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x65\x6D\x69\x6C\x69\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x65\x72\x7A\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x68\x69\x6E\x61\x74\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x69\x6E\x6F\x72\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x61\x67\x61\x20\x6B\x6F\x75\x6B\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x61\x6F\x72\x69\x20\x6D\x69\x79\x61\x7A\x6F\x6E\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6B\x6F\x74\x6F\x72\x69\x20\x6D\x69\x6E\x61\x6D\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x69\x6B\x61\x73\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x69\x79\x6F\x61\x6B\x69\x79\x61\x6D\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x69\x7A\x6F\x72\x65\x20\x73\x69\x72\x61\x79\x75\x6B\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x61\x6B\x69\x72\x69\x20\x61\x6C\x69\x63\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6E\x61\x72\x75\x74\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x72\x69\x79\x61\x73\x20\x67\x72\x65\x6D\x6F\x72\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x61\x6B\x75\x72\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x61\x73\x75\x6B\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x65\x6E\x74\x6F\x20\x69\x73\x75\x7A\x75","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x68\x61\x6E\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x68\x69\x69\x6E\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x73\x68\x69\x6E\x6B\x61","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x77\x69\x6E\x72\x79","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x79\x75\x6B\x69\x6E\x6F","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x79\x75\x7A\x75\x6B\x69","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x61\x6B\x61\x6D\x65","\x4C\x69\x73\x74\x20\x4D\x65\x73\x73\x61\x67\x65\x20\x6D\x69\x6B\x6F\x73\x69\x62\x61","\x73\x65\x77\x61\x5F\x6B\x61\x6B","\x20\x79\x61\x6B\x69\x6E\x20\x6E\x69\x68\x20\x6D\x61\x75\x20\x73\x65\x77\x61\x20\x62\x6F\x74\x3F\uD83E\uDD14\x20\x42\x6F\x6F\x6E\x67\x20\x61\x75\x74\x6F\x20\x62\x61\x6E\x6E\x65\x64\x20\x3E\x2E\x3C","\x79\x61\x5F\x6B\x61\x6B","\x59\x61","\x74\x69\x64\x61\x6B\x5F\x6B\x61\x6B","\x54\x69\x64\x61\x6B","\x48\x6D\x6D\x2C\x20\x62\x61\x6E\x6E\x65\x64\x20\x61\x6A\x61\x20\x6E\x69\x68\x20\x6F\x72\x61\x6E\x67\x20\x6E\x67\x65\x73\x65\x6C\x69\x6E\x20\u0CA0\uFE35\u0CA0","\x20\x53\x65\x6D\x6F\x67\x61\x20\x68\x61\x72\x69\x6D\x75\x20\x6D\x65\x6E\x79\x65\x6E\x61\x6E\x67\x6B\x61\x6E\x20\uD83D\uDE07\x2C\x20\x69\x6E\x69\x20\x61\x64\x61\x6C\x61\x68\x20\x6C\x69\x73\x74\x20\x73\x65\x77\x61\x20\x62\x6F\x74\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x64\x69\x70\x69\x6C\x69\x68\x21","\x20\x6E\x61\x68\x20\x73\x65\x6B\x61\x72\x61\x6E\x67\x20\x6D\x61\x73\x75\x6B\x20\x6B\x65\x20\x6D\x65\x74\x6F\x64\x65\x20\x70\x65\x6D\x62\x61\x79\x61\x72\x61\x6E\x2C\x20\x6D\x65\x74\x6F\x64\x65\x20\x79\x61\x6E\x67\x20\x74\x65\x72\x73\x65\x64\x69\x61\x20\x79\x61\x69\x74\x75\x20\x76\x69\x61\x20\x4F\x56\x4F\x2C\x20\x44\x41\x4E\x41\x20\x26\x20\x47\x4F\x50\x41\x59\x2E\x20\x55\x6E\x74\x75\x6B\x20\x6D\x65\x74\x6F\x64\x65\x20\x6C\x61\x69\x6E\x20\x73\x69\x6C\x61\x68\x6B\x61\x6E\x20\x68\x75\x62\x75\x6E\x67\x69\x20\x6F\x77\x6E\x65\x72\x62\x6F\x74\x20\u25E0\u203F\u25D5","\x62\x61\x79\x61\x72\x5F\x6F\x76\x6F\x31","\x62\x61\x79\x61\x72\x5F\x64\x61\x6E\x61\x31","\x62\x61\x79\x61\x72\x5F\x67\x6F\x70\x61\x79\x31","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x6F\x76\x6F\x31","\x71\x72\x5F\x6F\x76\x6F\x31","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x64\x61\x6E\x61\x31","\x71\x72\x5F\x64\x61\x6E\x61\x31","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x67\x6F\x70\x61\x79\x31","\x71\x72\x5F\x67\x6F\x70\x61\x79\x31","\x4A\x41\x53\x41\x20\x53\x45\x57\x41\x20\x42\x4F\x54","\x0D\x0A\x0D\x0A\u2022\x3E\x20\x4E\x61\x6D\x61\x20\x3A\x20\x5F","\x5F\x0D\x0A\u2022\x3E\x20\x4E\x6F\x6D\x6F\x72\x20\x3A\x20\x5F\x40","\x5F\x0D\x0A\u2022\x3E\x20\x53\x65\x77\x61\x20\x3A\x20\x5F\x31\x20\x4D\x69\x6E\x67\x67\x75\x5F\x20\x0D\x0A\u2022\x3E\x20\x48\x61\x72\x67\x61\x20\x3A\x20","\x50\x41\x59\x4D\x45\x4E\x54\x20\x4F\x56\x4F","\x50\x41\x59\x4D\x45\x4E\x54\x20\x44\x41\x4E\x41","\x50\x41\x59\x4D\x45\x4E\x54\x20\x47\x4F\x50\x41\x59","\x62\x61\x79\x61\x72\x5F\x6F\x76\x6F\x32","\x62\x61\x79\x61\x72\x5F\x64\x61\x6E\x61\x32","\x62\x61\x79\x61\x72\x5F\x67\x6F\x70\x61\x79\x32","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x6F\x76\x6F\x32","\x71\x72\x5F\x6F\x76\x6F\x32","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x64\x61\x6E\x61\x32","\x71\x72\x5F\x64\x61\x6E\x61\x32","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x67\x6F\x70\x61\x79\x32","\x71\x72\x5F\x67\x6F\x70\x61\x79\x32","\x5F\x0D\x0A\u2022\x3E\x20\x53\x65\x77\x61\x20\x3A\x20\x5F\x32\x20\x4D\x69\x6E\x67\x67\x75\x5F\x20\x0D\x0A\u2022\x3E\x20\x48\x61\x72\x67\x61\x20\x3A\x20\x5F","\x5F\x0D\x0A\x0D\x0A","\x62\x61\x79\x61\x72\x5F\x6F\x76\x6F\x33","\x62\x61\x79\x61\x72\x5F\x64\x61\x6E\x61\x33","\x62\x61\x79\x61\x72\x5F\x67\x6F\x70\x61\x79\x33","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x6F\x76\x6F\x33","\x71\x72\x5F\x6F\x76\x6F\x33","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x64\x61\x6E\x61\x33","\x71\x72\x5F\x64\x61\x6E\x61\x33","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x67\x6F\x70\x61\x79\x33","\x71\x72\x5F\x67\x6F\x70\x61\x79\x33","\x5F\x0D\x0A\u2022\x3E\x20\x53\x65\x77\x61\x20\x3A\x20\x5F\x33\x20\x4D\x69\x6E\x67\x67\x75\x5F\x20\x0D\x0A\u2022\x3E\x20\x48\x61\x72\x67\x61\x20\x3A\x20\x5F","\x62\x61\x79\x61\x72\x5F\x6F\x76\x6F\x34","\x62\x61\x79\x61\x72\x5F\x64\x61\x6E\x61\x34","\x62\x61\x79\x61\x72\x5F\x67\x6F\x70\x61\x79\x34","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x6F\x76\x6F\x34","\x71\x72\x5F\x6F\x76\x6F\x34","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x64\x61\x6E\x61\x34","\x71\x72\x5F\x64\x61\x6E\x61\x34","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x67\x6F\x70\x61\x79\x34","\x71\x72\x5F\x67\x6F\x70\x61\x79\x34","\x5F\x0D\x0A\u2022\x3E\x20\x53\x65\x77\x61\x20\x3A\x20\x5F\x31\x20\x42\x75\x6C\x61\x6E\x5F\x20\x0D\x0A\u2022\x3E\x20\x48\x61\x72\x67\x61\x20\x3A\x20\x5F","\x62\x61\x79\x61\x72\x5F\x6F\x76\x6F\x35","\x62\x61\x79\x61\x72\x5F\x64\x61\x6E\x61\x35","\x62\x61\x79\x61\x72\x5F\x67\x6F\x70\x61\x79\x35","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x6F\x76\x6F\x35","\x71\x72\x5F\x6F\x76\x6F\x35","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x64\x61\x6E\x61\x35","\x71\x72\x5F\x64\x61\x6E\x61\x35","\x6C\x61\x6E\x67\x73\x75\x6E\x67\x5F\x67\x6F\x70\x61\x79\x35","\x71\x72\x5F\x67\x6F\x70\x61\x79\x35","\x5F\x0D\x0A\u2022\x3E\x20\x53\x65\x77\x61\x20\x3A\x20\x5F\x70\x65\x72\x6D\x61\x6E\x65\x6E\x5F\x0D\x0A\u2022\x3E\x20\x48\x61\x72\x67\x61\x20\x3A\x20\x5F","\x67\x63\x5F\x6F\x70\x65\x6E","\x6D\x65\x73\x73\x61\x67\x65\x53\x65\x6E\x64","\x67\x72\x6F\x75\x70\x53\x65\x74\x74\x69\x6E\x67\x43\x68\x61\x6E\x67\x65","\x5B\x20\u2713\x20\x5D","\x20\x4D\x65\x6D\x62\x75\x6B\x61\x20\x47\x72\x6F\x75\x70\x2A","\x67\x63\x5F\x63\x6C\x6F\x73\x65","\x20\x4D\x65\x6E\x75\x74\x75\x70\x20\x47\x72\x6F\x75\x70","\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x5F\x31","\x61\x6E\x74\x69\x20\x6C\x69\x6E\x6B\x20\x67\x72\x6F\x75\x70\x20\x69\x73\x20\x61\x63\x74\x69\x76\x65","\x2E\x2F\x73\x72\x63\x2F\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x2E\x6A\x73\x6F\x6E","\x53\x75\x6B\x73\x65\x6B\x20\x6D\x65\x6E\x67\x61\x6B\x74\x69\x66\x6B\x61\x6E\x20\x61\x6E\x74\x69\x6C\x69\x6E\x6B","\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x5F\x30","\x41\x6E\x74\x69\x20\x6C\x69\x6E\x6B\x20\x67\x72\x6F\x75\x70\x20\x6D\x6F\x64\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x64\x69\x73\x61\x62\x6C\x65\x64","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x63\x65","\x53\x75\x6B\x73\x65\x6B\x20\x6D\x65\x6D\x61\x74\x69\x6B\x61\x6E\x20\x61\x6E\x74\x69\x6C\x69\x6E\x6B","\x73\x69\x6D\x69\x68\x5F\x31","\x5C\x60\x5C\x60\x5C\x60\x5B\x20\u2713\x20\x5D\x5C\x60\x5C\x60\x5C\x60\x20\x46\x69\x74\x75\x72\x20","\x20\x73\x75\x64\x61\x68\x20\x61\x6B\x74\x69\x66","\x2E\x2F\x6E\x61\x79\x6C\x61\x2F\x73\x69\x6D\x69\x2E\x6A\x73\x6F\x6E","\x73\x69\x6D\x69\x68\x5F\x30","\x5C\x60\x5C\x60\x5C\x60\x5B\x20\u2713\x20\x5D\x5C\x60\x5C\x60\x5C\x60\x20\x42\x65\x72\x68\x61\x73\x69\x6C\x20\x6D\x65\x6E\x6F\x6E\x61\x6B\x74\x69\x66\x6B\x61\x6E\x20\x66\x69\x74\x75\x72\x20","\x20\x70\x61\x64\x61\x20\x67\x72\x6F\x75\x70\x20\x69\x6E\x69","\x6B\x69\x63\x6B\x72\x65\x70\x6C\x79","\x67\x72\x6F\x75\x70","\x4C\x55\x20\x41\x44\x4D\x49\x4E\x3F\x3F","\x53\x61\x79\x61\x20\x62\x75\x6B\x61\x6E\x20\x61\x64\x6D\x69\x6E\x20\x6B\x61\x6B","\x52\x65\x70\x6C\x79\x20\x74\x61\x72\x67\x65\x74\x6E\x79\x61\x21","\x67\x72\x6F\x75\x70\x52\x65\x6D\x6F\x76\x65","\x53\x61\x79\x6F\x6E\x61\x72\x61","\x61\x64\x64\x72\x65\x70\x6C\x79","\x67\x72\x6F\x75\x70\x41\x64\x64","\x57\x65\x6C\x63\x6F\x6D\x65","\x62\x63","\x62\x72\x6F\x61\x64\x63\x61\x73\x74","\x62\x63\x69\x6D\x61\x67\x65","\x6F\x77\x6E\x65\x72\x42","\x54\x65\x78\x74\x20\x6E\x79\x61\x3F","\x6A\x6F\x69\x6E","\x61\x6C\x6C","\x63\x68\x61\x74\x73","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x71\x75\x6F\x74\x65\x64\x4D","\x6D","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x4D\x65\x64\x69\x61\x4D\x65\x73\x73\x61\x67\x65","\x6A\x69\x64","\u300C\x20\x20\x2A\x42\x52\x4F\x41\x44\x43\x41\x53\x54\x2A\x20\u300D\x5C\x6E\x5C\x6E","\x60\x60\x60\x53\x75\x63\x63\x65\x73\x73\x20\x42\x72\x6F\x61\x64\x63\x61\x73\x74\x60\x60\x60","\x56\x65\x72\x69\x66\x79\x20\uD83C\uDF97\uFE0F","\x53\x65\x77\x61\x20\uD83D\uDD16","\x2A\x42\x52\x4F\x41\x44\x43\x41\x53\x54\x2A\x20\x5C\x6E\x5C\x6E","\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x69\x6D\x61\x67\x65","\x62\x63\x67\x63","\x62\x63\x67\x72\x6F\x75\x70","\x62\x63\x67\x72\x75\x70","\x55\x6E\x74\x75\x6B\x20\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x20\x6B\x65\x20\x73\x65\x6D\x75\x61\x20\x67\x72\x6F\x75\x70\x20\x6B\x65\x74\x69\x6B\x3A\x5C\x6E","\x62\x63\x67\x72\x6F\x75\x70\x20\x5B\x69\x73\x69\x20\x63\x68\x61\x74\x5D","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","\x67\x2E\x75\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x42\x72\x6F\x61\x64\x63\x61\x73\x74\x20\x69\x6E\x20\x70\x72\x6F\x67\x72\x65\x73\x73\x21\x20\x54\x6F\x74\x61\x6C\x3A\x20","\x20\x67\x72\x6F\x75\x70\x73","\x62\x72\x6F\x61\x64\x63\x61\x73\x74\x67\x72\x75\x70","\x6F\x77\x6E\x65\x72","\x6F\x77\x6E\x65\x72\x4E\x75\x6D\x62\x65\x72","\x63\x6F\x6E\x74\x61\x63\x74\x73","\x76\x6E\x61\x6D\x65","\x6E\x6F\x74\x69\x66\x79","\x4F\x77\x6E\x65\x72\x20\x41\x6C\x70\x68\x61\x62\x6F\x74","\x42\x45\x47\x49\x4E\x3A\x56\x43\x41\x52\x44\x5C\x6E\x56\x45\x52\x53\x49\x4F\x4E\x3A\x33\x2E\x30\x5C\x6E\x4E\x3A\x53\x79\x3B\x42\x6F\x74\x3B\x3B\x3B\x5C\x6E\x46\x4E\x3A","\x6E\x61\x6D\x65","\x75\x73\x65\x72","\x5C\x6E\x4F\x52\x47\x3A\x20\x53\x55\x42\x53\x43\x52\x49\x42\x45\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43\x3B\x5C\x6E\x69\x74\x65\x6D\x31\x2E\x54\x45\x4C\x3B\x77\x61\x69\x64\x3D","\x3A","\x5C\x6E\x69\x74\x65\x6D\x31\x2E\x58\x2D\x41\x42\x4C\x61\x62\x65\x6C\x3A\x50\x6F\x6E\x73\x65\x6C\x5C\x6E\x45\x4E\x44\x3A\x56\x43\x41\x52\x44","\x20\x6B\x6F\x6E\x74\x61\x6B","\x63\x6F\x6E\x74\x61\x63\x74\x73\x41\x72\x72\x61\x79\x4D\x65\x73\x73\x61\x67\x65","\x20\x69\x74\x75\x20\x6F\x77\x6E\x65\x72\x20\x6B\x75\x2C\x20\x6A\x61\x6E\x67\x61\x6E\x20\x6C\x75\x70\x61\x20\x64\x6F\x6E\x61\x73\x69\x20\x6B\x61\x6B\uD83D\uDE07","\x44\x6F\x6E\x61\x73\x69\x20\u2668\uFE0F","\x5C\x6E","\x5C\x6E\x5C\x6E\xA9\x20","\x63\x72\x65\x61\x74\x6F\x72","\x47\x52\x55\x50\x20\x4F\x4E\x4C\x59","\x42\x4F\x54\x20\x42\x55\x4B\x41\x4E\x20\x41\x44\x4D\x49\x4E","\x20\x50\x69\x6C\x69\x68\x20\x6F\x70\x65\x6E\x20\x2F\x20\x63\x6C\x6F\x73\x65","\x4F\x70\x65\x6E\x20\uD83D\uDE49","\x43\x6C\x6F\x73\x65\x20\uD83D\uDE48","\x20\x50\x69\x6C\x69\x68\x20\x6F\x6E\x20\x2F\x20\x6F\x66\x66\x2C\x20\x6A\x69\x6B\x61\x20\x62\x75\x74\x74\x6F\x6E\x20\x74\x69\x64\x61\x6B\x20\x6D\x65\x72\x65\x73\x70\x6F\x6E\x20\x6B\x65\x74\x69\x6B\x20","\x61\x6E\x74\x69\x6C\x69\x6E\x6B\x32\x20\x31\x2F\x30","\x4F\x6E","\x4F\x66\x66","\x61\x6E\x74\x69\x6C\x69\x6E\x6B","\x73\x69\x6D\x69\x68\x32\x20\x31\x2F\x30","\x73\x69\x6D\x69\x68"];const mentionByTag=type== _0xdf66[0]&& nay[_0xdf66[2]][_0xdf66[0]][_0xdf66[1]]!= null?nay[_0xdf66[2]][_0xdf66[0]][_0xdf66[1]][_0xdf66[3]]:[];const mentionByreply=type== _0xdf66[0]&& nay[_0xdf66[2]][_0xdf66[0]][_0xdf66[1]]!= null?nay[_0xdf66[2]][_0xdf66[0]][_0xdf66[1]][_0xdf66[4]]|| _0xdf66[5]:_0xdf66[5];const mention= typeof (mentionByTag)== _0xdf66[6]?[mentionByTag]:mentionByTag;mention!= undefined?mention[_0xdf66[7]](mentionByreply):[];const mentionUser=mention!= undefined?mention[_0xdf66[8]]((_0xd5c7x5)=>{return _0xd5c7x5}):[];idttt= [];players1= [];players2= [];gilir= [];for(let t of ky_ttt){idttt[_0xdf66[7]](t[_0xdf66[9]]);players1[_0xdf66[7]](t[_0xdf66[10]]);players2[_0xdf66[7]](t[_0xdf66[11]]);gilir[_0xdf66[7]](t[_0xdf66[12]])};const isTTT=isGroup?idttt[_0xdf66[13]](from):false;isPlayer1= isGroup?players1[_0xdf66[13]](sender):false;isPlayer2= isGroup?players2[_0xdf66[13]](sender):false;if(isTTT&& isPlayer2){if(budy[_0xdf66[15]](_0xdf66[14])){tto= ky_ttt[_0xdf66[8]]((_0xd5c7x8)=>{return _0xd5c7x8[_0xdf66[9]][_0xdf66[13]](from)});tty= tto[0];angka= tto[0][_0xdf66[16]];ucapan= `${_0xdf66[17]}${tty[_0xdf66[10]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[20]}${tty[_0xdf66[11]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[21]}${tty[_0xdf66[10]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[22]}${angka[1]}${_0xdf66[5]}${angka[2]}${_0xdf66[5]}${angka[3]}${_0xdf66[23]}${angka[4]}${_0xdf66[5]}${angka[5]}${_0xdf66[5]}${angka[6]}${_0xdf66[23]}${angka[7]}${_0xdf66[5]}${angka[8]}${_0xdf66[5]}${angka[9]}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,ucapan,text,{quoted:nay,contextInfo:{mentionedJid:[tty[_0xdf66[10]],tty[_0xdf66[11]]]}})};if(budy[_0xdf66[15]](_0xdf66[25])){tto= ky_ttt[_0xdf66[8]]((_0xd5c7x8)=>{return _0xd5c7x8[_0xdf66[9]][_0xdf66[13]](from)});tty= tto[0];naa= ky_ttt[_0xdf66[8]]((_0xd5c7x9)=>{return !_0xd5c7x9[_0xdf66[9]][_0xdf66[13]](from)});ky_ttt= naa;nayla[_0xdf66[24]](from,`${_0xdf66[26]}${tty[_0xdf66[11]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[27]}`,text,{quoted:nay,contextInfo:{mentionedJid:[tty[_0xdf66[11]]]}})}};if(isTTT&& isPlayer1){nuber= parseInt(budy);if(isNaN(nuber)){return};if(nuber< 1|| nuber> 9){return reply(_0xdf66[28])};main= ky_ttt[_0xdf66[8]]((_0xd5c7xa)=>{return _0xd5c7xa[_0xdf66[9]][_0xdf66[13]](from)});if(!tttawal[_0xdf66[13]](main[0][_0xdf66[16]][nuber])){return reply(_0xdf66[29])};if(main[0][_0xdf66[12]][_0xdf66[13]](sender)){return reply(_0xdf66[30])};s= _0xdf66[31];main[0][_0xdf66[16]][nuber]= s;main[0][_0xdf66[12]]= main[0][_0xdf66[10]];naa= ky_ttt[_0xdf66[8]]((_0xd5c7xb)=>{return !_0xd5c7xb[_0xdf66[9]][_0xdf66[13]](from)});ky_ttt= naa;pop= main[0];ky_ttt[_0xdf66[7]](pop);tto= ky_ttt[_0xdf66[8]]((_0xd5c7xc)=>{return _0xd5c7xc[_0xdf66[9]][_0xdf66[13]](from)});tty= tto[0];angka= tto[0][_0xdf66[16]];ttt= `${_0xdf66[5]}${angka[1]}${_0xdf66[5]}${angka[2]}${_0xdf66[5]}${angka[3]}${_0xdf66[32]}${angka[4]}${_0xdf66[5]}${angka[5]}${_0xdf66[5]}${angka[6]}${_0xdf66[32]}${angka[7]}${_0xdf66[5]}${angka[8]}${_0xdf66[5]}${angka[9]}${_0xdf66[5]}`;ucapmenang= ()=>{ucapan1= `${_0xdf66[33]}${tty[_0xdf66[10]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[5]}${enter}${_0xdf66[34]}${prefix}${_0xdf66[35]}`;ucapan2= `${_0xdf66[36]}${ttt}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,ucapan1,text,{quoted:nay,contextInfo:{mentionedJid:[tty[_0xdf66[10]]]}});naa= ky_ttt[_0xdf66[8]]((_0xd5c7xb)=>{return !_0xd5c7xb[_0xdf66[9]][_0xdf66[13]](from)});return ky_ttt= naa};if(angka[1]== s&& angka[2]== s&& angka[3]== s){return ucapmenang()};if(angka[1]== s&& angka[4]== s&& angka[7]== s){return ucapmenang()};if(angka[1]== s&& angka[5]== s&& angka[9]== s){return ucapmenang()};if(angka[2]== s&& angka[5]== s&& angka[8]== s){return ucapmenang()};if(angka[4]== s&& angka[5]== s&& angka[6]== s){return ucapmenang()};if(angka[7]== s&& angka[8]== s&& angka[9]== s){return ucapmenang()};if(angka[3]== s&& angka[5]== s&& angka[7]== s){return ucapmenang()};if(angka[3]== s&& angka[6]== s&& angka[9]== s){return ucapmenang()};if(!ttt[_0xdf66[13]](_0xdf66[37])&&  !ttt[_0xdf66[13]](_0xdf66[38]) &&  !ttt[_0xdf66[13]](_0xdf66[39]) &&  !ttt[_0xdf66[13]](_0xdf66[40]) &&  !ttt[_0xdf66[13]](_0xdf66[41]) &&  !ttt[_0xdf66[13]](_0xdf66[42]) &&  !ttt[_0xdf66[13]](_0xdf66[43]) &&  !ttt[_0xdf66[13]](_0xdf66[44]) &&  !ttt[_0xdf66[13]](_0xdf66[45])){ucapan1= `${_0xdf66[46]}`;ucapan2= `${_0xdf66[47]}${ttt}${_0xdf66[5]}`;reply(ucapan1);naa= ky_ttt[_0xdf66[8]]((_0xd5c7xb)=>{return !_0xd5c7xb[_0xdf66[9]][_0xdf66[13]](from)});return ky_ttt= naa};ucapan= `${_0xdf66[48]}${tty[_0xdf66[11]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[49]}${tty[_0xdf66[10]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[50]}${tty[_0xdf66[11]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[51]}${ttt}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,ucapan,text,{quoted:nay,contextInfo:{mentionedJid:[tty[_0xdf66[10]],tty[_0xdf66[11]]]}})};if(isTTT&& isPlayer2){nuber= parseInt(budy);if(isNaN(nuber)){return};if(nuber< 1|| nuber> 9){return reply(_0xdf66[28])};main= ky_ttt[_0xdf66[8]]((_0xd5c7xa)=>{return _0xd5c7xa[_0xdf66[9]][_0xdf66[13]](from)});if(!tttawal[_0xdf66[13]](main[0][_0xdf66[16]][nuber])){return reply(_0xdf66[29])};if(main[0][_0xdf66[12]][_0xdf66[13]](sender)){return reply(_0xdf66[52])};s= _0xdf66[53];main[0][_0xdf66[16]][nuber]= s;main[0][_0xdf66[12]]= main[0][_0xdf66[11]];naa= ky_ttt[_0xdf66[8]]((_0xd5c7xb)=>{return !_0xd5c7xb[_0xdf66[9]][_0xdf66[13]](from)});ky_ttt= naa;pop= main[0];ky_ttt[_0xdf66[7]](pop);tto= ky_ttt[_0xdf66[8]]((_0xd5c7xc)=>{return _0xd5c7xc[_0xdf66[9]][_0xdf66[13]](from)});tty= tto[0];angka= tto[0][_0xdf66[16]];ttt= `${_0xdf66[5]}${angka[1]}${_0xdf66[5]}${angka[2]}${_0xdf66[5]}${angka[3]}${_0xdf66[32]}${angka[4]}${_0xdf66[5]}${angka[5]}${_0xdf66[5]}${angka[6]}${_0xdf66[32]}${angka[7]}${_0xdf66[5]}${angka[8]}${_0xdf66[5]}${angka[9]}${_0xdf66[5]}`;ucapmenang= ()=>{ucapan1= `${_0xdf66[54]}${tty[_0xdf66[11]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[5]}${enter}${_0xdf66[34]}${prefix}${_0xdf66[35]}`;ucapan2= `${_0xdf66[55]}${ttt}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,ucapan1,text,{quoted:nay,contextInfo:{mentionedJid:[tty[_0xdf66[11]]]}});naa= ky_ttt[_0xdf66[8]]((_0xd5c7xb)=>{return !_0xd5c7xb[_0xdf66[9]][_0xdf66[13]](from)});return ky_ttt= naa};if(angka[1]== s&& angka[2]== s&& angka[3]== s){return ucapmenang()};if(angka[1]== s&& angka[4]== s&& angka[7]== s){return ucapmenang()};if(angka[1]== s&& angka[5]== s&& angka[9]== s){return ucapmenang()};if(angka[2]== s&& angka[5]== s&& angka[8]== s){return ucapmenang()};if(angka[4]== s&& angka[5]== s&& angka[6]== s){return ucapmenang()};if(angka[7]== s&& angka[8]== s&& angka[9]== s){return ucapmenang()};if(angka[3]== s&& angka[5]== s&& angka[7]== s){return ucapmenang()};if(angka[3]== s&& angka[6]== s&& angka[9]== s){return ucapmenang()};if(!ttt[_0xdf66[13]](_0xdf66[37])&&  !ttt[_0xdf66[13]](_0xdf66[38]) &&  !ttt[_0xdf66[13]](_0xdf66[39]) &&  !ttt[_0xdf66[13]](_0xdf66[40]) &&  !ttt[_0xdf66[13]](_0xdf66[41]) &&  !ttt[_0xdf66[13]](_0xdf66[42]) &&  !ttt[_0xdf66[13]](_0xdf66[43]) &&  !ttt[_0xdf66[13]](_0xdf66[44]) &&  !ttt[_0xdf66[13]](_0xdf66[45])){ucapan1= `${_0xdf66[56]}`;ucapan2= `${_0xdf66[47]}${ttt}${_0xdf66[5]}`;reply(ucapan1);naa= ky_ttt[_0xdf66[8]]((_0xd5c7xb)=>{return !_0xd5c7xb[_0xdf66[9]][_0xdf66[13]](from)});return ky_ttt= naa};ucapan= `${_0xdf66[17]}${tty[_0xdf66[10]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[57]}${tty[_0xdf66[11]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[58]}${tty[_0xdf66[10]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[51]}${ttt}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,ucapan,text,{quoted:nay,contextInfo:{mentionedJid:[tty[_0xdf66[10]],tty[_0xdf66[11]]]}})}else {};const setGelud=require(_0xdf66[59]);if(fs[_0xdf66[62]](`${_0xdf66[60]}${from}${_0xdf66[61]}`)){gelutSkuy= setGelud(`${_0xdf66[5]}${from}${_0xdf66[5]}`);if(sender== `${_0xdf66[5]}${gelutSkuy[_0xdf66[14]]}${_0xdf66[63]}`&& budy[_0xdf66[64]]()== _0xdf66[65]){if(gelutSkuy[_0xdf66[66]]){return reply(`${_0xdf66[67]}`)};gelutSkuy[_0xdf66[66]]= true;rand0m= [gelutSkuy[_0xdf66[68]],gelutSkuy[_0xdf66[14]]];winR= rand0m[Math[_0xdf66[71]](Math[_0xdf66[69]]()* rand0m[_0xdf66[70]])];fs[_0xdf66[73]](`${_0xdf66[60]}${from}${_0xdf66[61]}`,JSON[_0xdf66[72]](gelutSkuy,null,2));starGame= `${_0xdf66[74]}${gelutSkuy[_0xdf66[68]]}${_0xdf66[75]}${gelutSkuy[_0xdf66[14]]}${_0xdf66[76]}${winR}${_0xdf66[77]}`;nayla[_0xdf66[24]](from,starGame,text,{quoted:nay,contextInfo:{mentionedJid:[winR+ _0xdf66[63],gelutSkuy[_0xdf66[68]]+ _0xdf66[63],gelutSkuy[_0xdf66[14]]+ _0xdf66[63]]}});fs[_0xdf66[78]](_0xdf66[60]+ from+ _0xdf66[61])}else {if(sender== `${_0xdf66[5]}${gelutSkuy[_0xdf66[14]]}${_0xdf66[63]}`&& budy[_0xdf66[64]]()== _0xdf66[79]){nayla[_0xdf66[24]](from,`${_0xdf66[80]}${gelutSkuy[_0xdf66[14]]}${_0xdf66[81]}`,text,{quoted:nay,contextInfo:{mentionedJid:[gelutSkuy[_0xdf66[14]]+ _0xdf66[63]]}});fs[_0xdf66[78]](_0xdf66[60]+ from+ _0xdf66[61])}}};const voting=JSON[_0xdf66[84]](fs[_0xdf66[83]](_0xdf66[82]));const {addVote,delVote}=require(_0xdf66[85]);const isVote=isGroup?voting[_0xdf66[13]](from):false;if(isGroup&&  !isVote){if(budy[_0xdf66[64]]()=== _0xdf66[86]){let vote=JSON[_0xdf66[84]](fs[_0xdf66[83]](`${_0xdf66[87]}${from}${_0xdf66[61]}`));let _votes=JSON[_0xdf66[84]](fs[_0xdf66[83]](`${_0xdf66[88]}${from}${_0xdf66[61]}`));let fil=vote[_0xdf66[89]]((_0xd5c7x13)=>{return _0xd5c7x13[_0xdf66[4]]});let id_vote=sender?sender:_0xdf66[90];if(fil[_0xdf66[13]](id_vote)){return mentions(_0xdf66[18]+ sender[_0xdf66[19]](_0xdf66[18])[0]+ _0xdf66[91],fil,true)}else {vote[_0xdf66[7]]({participant:id_vote,voting:_0xdf66[92]});fs[_0xdf66[73]](`${_0xdf66[87]}${from}${_0xdf66[61]}`,JSON[_0xdf66[72]](vote));let _p=[];let _vote=_0xdf66[93]+ _0xdf66[18]+ _votes[0][_0xdf66[94]][_0xdf66[19]](_0xdf66[18])[0]+ `${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[95]}${_votes[0][_0xdf66[96]]}${_0xdf66[5]}${enter}${_0xdf66[97]}${vote[_0xdf66[70]]}${_0xdf66[98]}${enter}${_0xdf66[99]}${_votes[0][_0xdf66[100]]}${_0xdf66[101]}${enter}${_0xdf66[5]}${enter}${_0xdf66[5]}`;for(let i=0;i< vote[_0xdf66[70]];i++){_vote+= `${_0xdf66[18]}${vote[i][_0xdf66[4]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[5]}${enter}${_0xdf66[102]}${vote[i][_0xdf66[103]]}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[5]}`;_p[_0xdf66[7]](vote[i][_0xdf66[4]])};_p[_0xdf66[7]](_votes[0][_0xdf66[94]]);mentions(_vote,_p,true)}}else {if(budy[_0xdf66[64]]()=== _0xdf66[104]){const vote=JSON[_0xdf66[84]](fs[_0xdf66[83]](`${_0xdf66[87]}${from}${_0xdf66[61]}`));let _votes=JSON[_0xdf66[84]](fs[_0xdf66[83]](`${_0xdf66[88]}${from}${_0xdf66[61]}`));let fil=vote[_0xdf66[89]]((_0xd5c7x13)=>{return _0xd5c7x13[_0xdf66[4]]});let id_vote=sender?sender:_0xdf66[90];if(fil[_0xdf66[13]](id_vote)){return mentions(_0xdf66[18]+ sender[_0xdf66[19]](_0xdf66[18])[0]+ _0xdf66[91],fil,true)}else {vote[_0xdf66[7]]({participant:id_vote,voting:_0xdf66[105]});fs[_0xdf66[73]](`${_0xdf66[87]}${from}${_0xdf66[61]}`,JSON[_0xdf66[72]](vote));let _p=[];let _vote=_0xdf66[93]+ _0xdf66[18]+ _votes[0][_0xdf66[94]][_0xdf66[19]](_0xdf66[18])[0]+ `${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[95]}${_votes[0][_0xdf66[96]]}${_0xdf66[5]}${enter}${_0xdf66[97]}${vote[_0xdf66[70]]}${_0xdf66[98]}${enter}${_0xdf66[99]}${_votes[0][_0xdf66[100]]}${_0xdf66[101]}${enter}${_0xdf66[5]}${enter}${_0xdf66[5]}`;for(let i=0;i< vote[_0xdf66[70]];i++){_vote+= `${_0xdf66[18]}${vote[i][_0xdf66[4]][_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[5]}${enter}${_0xdf66[102]}${vote[i][_0xdf66[103]]}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[5]}`;_p[_0xdf66[7]](vote[i][_0xdf66[4]])};_p[_0xdf66[7]](_votes[0][_0xdf66[94]]);mentions(_vote,_p,true)}}}};const Mampus_Eror_Gua_Bilang_Juga_Apa_Jgn_Di_Hapus=require(_0xdf66[106]);const replyByZeeone=(_0xd5c7x1a)=>{var buttonsz=[{buttonId:_0xdf66[107],buttonText:{displayText:_0xdf66[108]},type:1}];var buttonMessagez={contentText:_0xd5c7x1a,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttonsz,headerType:1};nayla[_0xdf66[24]](from,buttonMessagez,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender],"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${creator}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`},quoted:fkontak,sendEphemeral:true}})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[115]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[128]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[129]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[130]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[131]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[132]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[133]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[134]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[135]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[136]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[137]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[138]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[139]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[140]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[141]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[142]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[143]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[144]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[145]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[146]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[147]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[148]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[149]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[151]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[152]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[153]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[154]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[155]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[156]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[157]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[158]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[159]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[160]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[161]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[162]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[163]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[164]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[165]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[166]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[167]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[168]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[169]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[170]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[171]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[172]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[173]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[174]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[175]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[176]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[177]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[178]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[179]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[180]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[181]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[182]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[183]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[174]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[175]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[184]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ini_chika=[_0xdf66[186],_0xdf66[187],_0xdf66[188],_0xdf66[189],_0xdf66[190],_0xdf66[191],_0xdf66[192],_0xdf66[193],_0xdf66[194],_0xdf66[195],_0xdf66[196],_0xdf66[197],_0xdf66[198],_0xdf66[199],_0xdf66[200],_0xdf66[201],_0xdf66[202],_0xdf66[203],_0xdf66[204],_0xdf66[205],_0xdf66[206],_0xdf66[207],_0xdf66[208],_0xdf66[209],_0xdf66[210]];var random_chika=ini_chika[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ini_chika[_0xdf66[70]]))];let buff= await getBuffer(random_chika);nayla[_0xdf66[24]](from,buff,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[214]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var delvira=[_0xdf66[215],_0xdf66[216],_0xdf66[217],_0xdf66[218],_0xdf66[219],_0xdf66[220],_0xdf66[221],_0xdf66[222],_0xdf66[223],_0xdf66[224],_0xdf66[225],_0xdf66[226],_0xdf66[227],_0xdf66[228],_0xdf66[229],_0xdf66[230],_0xdf66[231],_0xdf66[232],_0xdf66[233],_0xdf66[234]];var random_delvira=delvira[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (delvira[_0xdf66[70]]))];let ini_delvira= await getBuffer(random_delvira);nayla[_0xdf66[24]](from,ini_delvira,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[235]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ayu=[_0xdf66[236],_0xdf66[237],_0xdf66[238],_0xdf66[239],_0xdf66[240],_0xdf66[241],_0xdf66[242],_0xdf66[243],_0xdf66[244],_0xdf66[245],_0xdf66[246],_0xdf66[247],_0xdf66[248],_0xdf66[249],_0xdf66[250],_0xdf66[251],_0xdf66[252],_0xdf66[253],_0xdf66[254],_0xdf66[255]];var random_ayu=ayu[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ayu[_0xdf66[70]]))];let ini= await getBuffer(random_ayu);nayla[_0xdf66[24]](from,ini_ayu,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[256]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var bunga=[_0xdf66[257],_0xdf66[258],_0xdf66[259],_0xdf66[260],_0xdf66[261],_0xdf66[262],_0xdf66[263],_0xdf66[264],_0xdf66[265],_0xdf66[266],_0xdf66[267],_0xdf66[268],_0xdf66[269],_0xdf66[270],_0xdf66[271],_0xdf66[272],_0xdf66[273],_0xdf66[274],_0xdf66[275],_0xdf66[276],_0xdf66[277],_0xdf66[278],_0xdf66[279]];var random_bunga=bunga[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (bunga[_0xdf66[70]]))];let ini_bunga= await getBuffer(random_bunga);nayla[_0xdf66[24]](from,ini_bunga,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[280]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var aura=[_0xdf66[281],_0xdf66[282],_0xdf66[283],_0xdf66[284],_0xdf66[285],_0xdf66[286],_0xdf66[287],_0xdf66[288],_0xdf66[289],_0xdf66[290],_0xdf66[291],_0xdf66[292],_0xdf66[293],_0xdf66[294],_0xdf66[295],_0xdf66[296],_0xdf66[297],_0xdf66[298],_0xdf66[299],_0xdf66[300],_0xdf66[301]];var random_aura=aura[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (aura[_0xdf66[70]]))];let ini_aura= await getBuffer(random_aura);nayla[_0xdf66[24]](from,ini_aura,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[302]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var nisa=[_0xdf66[303],_0xdf66[304],_0xdf66[305],_0xdf66[306],_0xdf66[307],_0xdf66[308],_0xdf66[309],_0xdf66[310],_0xdf66[311],_0xdf66[312],_0xdf66[313],_0xdf66[314],_0xdf66[315],_0xdf66[316],_0xdf66[317],_0xdf66[318],_0xdf66[319],_0xdf66[320],_0xdf66[321],_0xdf66[322],_0xdf66[323],_0xdf66[324],_0xdf66[325],_0xdf66[326]];var random_nisa=nisa[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (nisa[_0xdf66[70]]))];let ini_nisa= await getBuffer(random_nisa);nayla[_0xdf66[24]](from,ini_nisa,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[327]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ziva=[_0xdf66[328],_0xdf66[329],_0xdf66[330],_0xdf66[331],_0xdf66[332],_0xdf66[333],_0xdf66[334],_0xdf66[335],_0xdf66[336],_0xdf66[337],_0xdf66[338],_0xdf66[339],_0xdf66[340],_0xdf66[341],_0xdf66[342],_0xdf66[343],_0xdf66[344],_0xdf66[345],_0xdf66[346],_0xdf66[347],_0xdf66[348],_0xdf66[349],_0xdf66[350],_0xdf66[351],_0xdf66[352],_0xdf66[353],_0xdf66[354],_0xdf66[355],_0xdf66[356],_0xdf66[357],_0xdf66[358],_0xdf66[359],_0xdf66[360],_0xdf66[361],_0xdf66[362],_0xdf66[363],_0xdf66[364]];var random_ziva=ziva[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ziva[_0xdf66[70]]))];let ini_ziva= await getBuffer(random_ziva);nayla[_0xdf66[24]](from,ini_ziva,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[365]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var yana=[_0xdf66[366],_0xdf66[367],_0xdf66[368],_0xdf66[369],_0xdf66[370],_0xdf66[371],_0xdf66[372],_0xdf66[373],_0xdf66[374],_0xdf66[375],_0xdf66[376],_0xdf66[377],_0xdf66[378],_0xdf66[379],_0xdf66[380],_0xdf66[381],_0xdf66[382],_0xdf66[383],_0xdf66[384],_0xdf66[385],_0xdf66[386],_0xdf66[387],_0xdf66[388],_0xdf66[389]];var random_yana=yana[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (yana[_0xdf66[70]]))];let ini_yana= await getBuffer(random_yana);nayla[_0xdf66[24]](from,ini_yana,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[390]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var viona=[_0xdf66[391],_0xdf66[392],_0xdf66[393],_0xdf66[394],_0xdf66[395],_0xdf66[396],_0xdf66[397],_0xdf66[398],_0xdf66[399],_0xdf66[400],_0xdf66[401],_0xdf66[402],_0xdf66[403],_0xdf66[404],_0xdf66[405],_0xdf66[406],_0xdf66[407],_0xdf66[408],_0xdf66[409],_0xdf66[410],_0xdf66[411],_0xdf66[412],_0xdf66[413],_0xdf66[414]];var random_viona=viona[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (viona[_0xdf66[70]]))];let ini_viona= await getBuffer(random_viona);nayla[_0xdf66[24]](from,ini_viona,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[415]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var syania=[_0xdf66[416],_0xdf66[417],_0xdf66[418],_0xdf66[419],_0xdf66[420],_0xdf66[421],_0xdf66[422],_0xdf66[423],_0xdf66[424],_0xdf66[425],_0xdf66[426],_0xdf66[427],_0xdf66[428],_0xdf66[429],_0xdf66[430],_0xdf66[431],_0xdf66[432],_0xdf66[433],_0xdf66[434],_0xdf66[435],_0xdf66[436],_0xdf66[437],_0xdf66[438],_0xdf66[439],_0xdf66[440],_0xdf66[441],_0xdf66[442],_0xdf66[443]];var random_syania=syania[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (syania[_0xdf66[70]]))];let ini_syania= await getBuffer(random_syania);nayla[_0xdf66[24]](from,ini_syania,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[444]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var riri=[_0xdf66[445],_0xdf66[446],_0xdf66[447],_0xdf66[448],_0xdf66[449],_0xdf66[450],_0xdf66[451],_0xdf66[452],_0xdf66[453],_0xdf66[454],_0xdf66[455],_0xdf66[456],_0xdf66[457],_0xdf66[458],_0xdf66[459],_0xdf66[460],_0xdf66[461],_0xdf66[462]];var random_riri=riri[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (riri[_0xdf66[70]]))];let ini_riri= await getBuffer(random_riri);nayla[_0xdf66[24]](from,ini_riri,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[463]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var syifa=[_0xdf66[464],_0xdf66[465],_0xdf66[466],_0xdf66[467],_0xdf66[468],_0xdf66[469],_0xdf66[470],_0xdf66[471],_0xdf66[472],_0xdf66[473],_0xdf66[474],_0xdf66[475],_0xdf66[476],_0xdf66[477],_0xdf66[478],_0xdf66[479],_0xdf66[480],_0xdf66[481],_0xdf66[482],_0xdf66[483],_0xdf66[484],_0xdf66[485],_0xdf66[486],_0xdf66[487],_0xdf66[488],_0xdf66[489]];var random_syifa=syifa[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (syifa[_0xdf66[70]]))];let ini_syifa= await getBuffer(random_syifa);nayla[_0xdf66[24]](from,ini_syifa,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[490]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var mama_gina=[_0xdf66[491],_0xdf66[492],_0xdf66[493],_0xdf66[494],_0xdf66[495],_0xdf66[496],_0xdf66[497],_0xdf66[498],_0xdf66[499],_0xdf66[500],_0xdf66[501],_0xdf66[502],_0xdf66[503],_0xdf66[504],_0xdf66[505],_0xdf66[506],_0xdf66[507],_0xdf66[508],_0xdf66[509],_0xdf66[510],_0xdf66[511],_0xdf66[512]];var random_mama_gina=mama_gina[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (mama_gina[_0xdf66[70]]))];let ini_mama_gina= await getBuffer(random_mama_gina);nayla[_0xdf66[24]](from,ini_mama_gina,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[513]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var alcakenya=[_0xdf66[514],_0xdf66[515],_0xdf66[516],_0xdf66[517],_0xdf66[518],_0xdf66[519],_0xdf66[520],_0xdf66[521],_0xdf66[522],_0xdf66[523],_0xdf66[524],_0xdf66[525],_0xdf66[526],_0xdf66[527],_0xdf66[528],_0xdf66[529],_0xdf66[530],_0xdf66[531],_0xdf66[532],_0xdf66[533],_0xdf66[534]];var random_alcakenya=alcakenya[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (alcakenya[_0xdf66[70]]))];let ini_alcakenya= await getBuffer(random_alcakenya);nayla[_0xdf66[24]](from,ini_alcakenya,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[535]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var mangayutri=[_0xdf66[536],_0xdf66[537],_0xdf66[538],_0xdf66[539],_0xdf66[540],_0xdf66[541],_0xdf66[542],_0xdf66[543],_0xdf66[544],_0xdf66[545],_0xdf66[546],_0xdf66[547],_0xdf66[548],_0xdf66[549],_0xdf66[550],_0xdf66[551],_0xdf66[552],_0xdf66[553],_0xdf66[554],_0xdf66[555],_0xdf66[556],_0xdf66[557],_0xdf66[558],_0xdf66[559],_0xdf66[560],_0xdf66[561],_0xdf66[562]];var random_mangayutri=mangayutri[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (mangayutri[_0xdf66[70]]))];let ini_mangayutri= await getBuffer(random_mangayutri);nayla[_0xdf66[24]](from,ini_mangayutri,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[563]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var rikagusriani=[_0xdf66[564],_0xdf66[565],_0xdf66[566],_0xdf66[567],_0xdf66[568],_0xdf66[569],_0xdf66[570],_0xdf66[571],_0xdf66[572],_0xdf66[573],_0xdf66[574],_0xdf66[575],_0xdf66[576],_0xdf66[577],_0xdf66[578],_0xdf66[579],_0xdf66[580],_0xdf66[581],_0xdf66[582],_0xdf66[583]];var random_rikagusriani=rikagusriani[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (rikagusriani[_0xdf66[70]]))];let ini_rikagusriani= await getBuffer(random_rikagusriani);nayla[_0xdf66[24]](from,ini_rikagusriani,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[584]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var asupannih=[_0xdf66[585],_0xdf66[586],_0xdf66[587],_0xdf66[588],_0xdf66[589],_0xdf66[590],_0xdf66[591],_0xdf66[592],_0xdf66[593],_0xdf66[594],_0xdf66[595],_0xdf66[596],_0xdf66[597],_0xdf66[598],_0xdf66[599],_0xdf66[600],_0xdf66[601],_0xdf66[602],_0xdf66[603],_0xdf66[604],_0xdf66[605],_0xdf66[606],_0xdf66[607],_0xdf66[608],_0xdf66[609],_0xdf66[610],_0xdf66[611],_0xdf66[607],_0xdf66[608],_0xdf66[609]];var random_asupannih=asupannih[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (asupannih[_0xdf66[70]]))];let ini_asupannih= await getBuffer(random_asupannih);nayla[_0xdf66[24]](from,ini_asupannih,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[612]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var bocil=[_0xdf66[613],_0xdf66[614],_0xdf66[615],_0xdf66[616],_0xdf66[617],_0xdf66[618],_0xdf66[619],_0xdf66[620],_0xdf66[621],_0xdf66[622],_0xdf66[623],_0xdf66[624],_0xdf66[625],_0xdf66[626],_0xdf66[627],_0xdf66[628],_0xdf66[629],_0xdf66[630],_0xdf66[631],_0xdf66[632],_0xdf66[633],_0xdf66[634],_0xdf66[635],_0xdf66[636],_0xdf66[637],_0xdf66[638],_0xdf66[639],_0xdf66[640]];var random_bocil=bocil[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (bocil[_0xdf66[70]]))];let ini_bocil= await getBuffer(random_bocil);nayla[_0xdf66[24]](from,ini_bocil,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[641]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var geayubi=[_0xdf66[642],_0xdf66[643],_0xdf66[644],_0xdf66[645],_0xdf66[646],_0xdf66[647],_0xdf66[648],_0xdf66[649],_0xdf66[650],_0xdf66[651],_0xdf66[652],_0xdf66[653],_0xdf66[654],_0xdf66[655],_0xdf66[656],_0xdf66[657],_0xdf66[658],_0xdf66[659],_0xdf66[660],_0xdf66[661],_0xdf66[662],_0xdf66[663]];var random_geayubi=geayubi[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (geayubi[_0xdf66[70]]))];let ini_geayubi= await getBuffer(random_geayubi);nayla[_0xdf66[24]](from,ini_geayubi,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[664]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var santuy=[_0xdf66[665],_0xdf66[666],_0xdf66[667],_0xdf66[668],_0xdf66[669],_0xdf66[670],_0xdf66[671],_0xdf66[672],_0xdf66[673],_0xdf66[674],_0xdf66[675],_0xdf66[676],_0xdf66[677],_0xdf66[678],_0xdf66[679],_0xdf66[680],_0xdf66[681],_0xdf66[682],_0xdf66[683],_0xdf66[684],_0xdf66[685],_0xdf66[686],_0xdf66[687],_0xdf66[688],_0xdf66[689],_0xdf66[690],_0xdf66[691],_0xdf66[692]];var random_santuy=santuy[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (santuy[_0xdf66[70]]))];let ini_santuy= await getBuffer(random_santuy);nayla[_0xdf66[24]](from,ini_santuy,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[693]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ukhty=[_0xdf66[694],_0xdf66[695],_0xdf66[696],_0xdf66[697],_0xdf66[698],_0xdf66[699],_0xdf66[700],_0xdf66[701],_0xdf66[702],_0xdf66[703],_0xdf66[704],_0xdf66[705],_0xdf66[706],_0xdf66[707],_0xdf66[708],_0xdf66[709],_0xdf66[710],_0xdf66[711],_0xdf66[712],_0xdf66[713],_0xdf66[714],_0xdf66[715],_0xdf66[716],_0xdf66[717],_0xdf66[718],_0xdf66[719],_0xdf66[720],_0xdf66[721],_0xdf66[722],_0xdf66[723]];var random_ukhty=ukhty[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ukhty[_0xdf66[70]]))];let ini_ukhty= await getBuffer(random_ukhty);nayla[_0xdf66[24]](from,ini_ukhty,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[724]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[725]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[726]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[727]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[728]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[729]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[730]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[731]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[732]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[733]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[734]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[735]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[736]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[737]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[738]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[739]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[740]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[741]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[742]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[743]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[744]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[745]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[746]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[747]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[748]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[749]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[750]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[751]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[752]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[753]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[754]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[755]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[756]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[757]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[758]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[759]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[760]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[761]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[762]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[763]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[764]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[765]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[766]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[767]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[768]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[769]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[770]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[771]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[772]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[773]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[774]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[775]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[776]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[777]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[778]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[779]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[780]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[781]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[782]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[783]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[784]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[785]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[786]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[787]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[788]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[789]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[790]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[791]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[792]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[793]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[794]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[795]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[796]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[797]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[798]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[799]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[800]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[801]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[802]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[803]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[804]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[805]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[806]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[807]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[808]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[809]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[810]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[811]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[812]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[813]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[814]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[815]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[816]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[817]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[818]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[819]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[820]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[821]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[822]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[823]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[824]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[825]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[826]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[827]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[828]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[829]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[830]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[831]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[832]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[833]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[834]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[835]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[836]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[837]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[838]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[839]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[840]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[841]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[842]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[843]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[844]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[845]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[846]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[847]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[848]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[849]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[850]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[851]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[852]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[853]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[854]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[855]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[856]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[857]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[858]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[859]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[860]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[861]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[862]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[863]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[864]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[865]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[866]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[867]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[868]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[869]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[870]}`){if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[871]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};const {helpmenu,grupmenu,stickmenu,promenu,downloadmenu,soundmenu,pornmenu,storagemenu,cekmenu,tagmenu,gamemenu,randomtextmenu,fastmenu,sertifikatmenu,ownermenu,makermenu,spesialmenu,newsmenu,cecanmenu,coganmenu,asupanmenu,nsfwmenu,animemenu,image_effect,botxx,info1,info2,info3,lvlnul,levelup}=require(_0xdf66[872]);stc= nay[_0xdf66[2]][_0xdf66[873]];msc= nay[_0xdf66[2]][_0xdf66[874]];if(stc){if(stc[_0xdf66[875]]== `${_0xdf66[5]}${cmd_stc_menu}${_0xdf66[5]}`){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[878]));wow= fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`); await nayla[_0xdf66[24]](from,wow,image,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),quoted:{key:{fromMe:false,participant:`${_0xdf66[879]}`,...(from?{remoteJid:_0xdf66[880]}:{})},message:{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0xdf66[881],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":10,"\x73\x74\x61\x74\x75\x73":_0xdf66[882],"\x73\x75\x72\x66\x61\x63\x65":_0xdf66[883],"\x6D\x65\x73\x73\x61\x67\x65":`${_0xdf66[884]}`,"\x74\x6F\x6B\x65\x6E":_0xdf66[885]}}},caption:helpmenu(wit,wita,wib,tampilTanggal,UserZeeone,tampilHari,limitawal,role,premi,sender,botname,pushname,prefix,wa_version,mcc,mnc,os_version,device_manufacturer,device_model),contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}});tqto= `${_0xdf66[886]}`;let apa=nayla[_0xdf66[893]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":_0xdf66[887],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0xdf66[5]}${tqto}${_0xdf66[5]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0xdf66[888],"\x6C\x69\x73\x74\x54\x79\x70\x65":_0xdf66[889],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[890],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[891],"\x72\x6F\x77\x49\x64":_0xdf66[892]}]}]}},{});nayla[_0xdf66[894]](apa,{waitForAck:true})}};if(stc){if(stc[_0xdf66[875]]== `${_0xdf66[5]}${cmd_stc_ping}${_0xdf66[5]}`){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[895]));timestamp= speed();latensi= speed()- timestamp;exec(`${_0xdf66[896]}`,(_0xd5c7x20,_0xd5c7x63,_0xd5c7x64)=>{child= _0xd5c7x63.toString(_0xdf66[897]);teks= child[_0xdf66[899]](/Memory:/,_0xdf66[898]);pingnya= `${_0xdf66[900]}${teks}${_0xdf66[901]}${latensi[_0xdf66[902]](4)}${_0xdf66[903]}`;fakegroup(pingnya)})}};subscribezeeoneofc= (type== _0xdf66[904])?nay[_0xdf66[2]][_0xdf66[904]][_0xdf66[905]]:_0xdf66[5];if(subscribezeeoneofc== _0xdf66[906]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[907]));let piiii=nayla[_0xdf66[893]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[908],"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0xdf66[888],"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,"\x6C\x69\x73\x74\x54\x79\x70\x65":_0xdf66[889],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[909],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[910],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[911],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[913],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[891],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[914],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[915],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[916],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[917],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[918],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[919],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[920],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[921],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[922],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[923],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[924],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[925],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[926],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[927],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[928],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[929],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[930],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[931],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[932],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[933],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[934],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[935],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[936],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[937],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[938],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[939],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[940],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[941],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[942],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[943],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[944],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[945],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[946],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[947],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[948],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[949],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[950],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[951],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[952],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[953],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[954],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[955],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[956],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[957],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[958],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[959],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[960],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[961],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[962],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[963],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[964],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[965],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[966],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[967],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[968],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[969],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[970],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[971],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[972],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[973],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[974],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[975],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[976],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[977],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[978],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[979],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[980],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]},{"\x74\x69\x74\x6C\x65":_0xdf66[981],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[982],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[983],"\x72\x6F\x77\x49\x64":_0xdf66[912]}]}]}},{});nayla[_0xdf66[894]](piiii,{waitForAck:true})};if(subscribezeeoneofc== `${_0xdf66[984]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[986]}`;const buttons3=[{buttonId:_0xdf66[987],buttonText:{displayText:_0xdf66[988]},type:1},{buttonId:_0xdf66[989],buttonText:{displayText:_0xdf66[990]},type:1},{buttonId:_0xdf66[991],buttonText:{displayText:_0xdf66[992]},type:1}];const btn3={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons3,headerType:1};nayla[_0xdf66[24]](from,btn3,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:nay,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[987]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons4=[{buttonId:_0xdf66[994],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[996],buttonText:{displayText:_0xdf66[997]},type:1}];const btn4={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons4,headerType:1};nayla[_0xdf66[24]](from,btn4,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:nay,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[994]}`){optionsp1= `${_0xdf66[998]}${pushname}${_0xdf66[999]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1000]}${nomor_ovo}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[989]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons5=[{buttonId:_0xdf66[1003],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1004],buttonText:{displayText:_0xdf66[997]},type:1}];const btn5={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons5,headerType:1};nayla[_0xdf66[24]](from,btn5,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:nay,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1003]}`){optionsp2= `${_0xdf66[998]}${pushname}${_0xdf66[999]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1000]}${nomor_dana}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp2,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[991]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1005],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1006],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:nay,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1005]}`){optionsp3= `${_0xdf66[998]}${pushname}${_0xdf66[999]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1000]}${nomor_gopay}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp3,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== _0xdf66[1007]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1008]));var link_yt=`${_0xdf66[1009]}${youtube}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,link_yt,text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${creator}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:fkontak})};if(subscribezeeoneofc== _0xdf66[1010]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1011]));var link_ig=`${_0xdf66[1012]}${instagram}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,link_ig,text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${creator}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:fkontak})};if(subscribezeeoneofc== _0xdf66[1013]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1014]));var link_gt=`${_0xdf66[1015]}${github}${_0xdf66[5]}`;nayla[_0xdf66[24]](from,link_gt,text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${creator}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:fkontak})};if(subscribezeeoneofc== _0xdf66[1016]){const rows11=[{"\x74\x69\x74\x6C\x65":_0xdf66[1017],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1018],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1019],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1020],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1021],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1022],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1023],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1024],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1025],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1026],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections11=[{title:_0xdf66[1027],rows:rows1}];const listt11={buttonText:_0xdf66[1028],title:`${_0xdf66[1029]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1031]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections11,listType:1};nayla[_0xdf66[24]](from,listt11,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};sub_yt_zeeone_ofc= (type== _0xdf66[1033])?nay[_0xdf66[2]][_0xdf66[1033]][_0xdf66[1034]]:_0xdf66[5];if(sub_yt_zeeone_ofc== _0xdf66[916]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1035]));ini_info7= `${_0xdf66[1036]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1037]}`;const buttons7=[{buttonId:_0xdf66[1007],buttonText:{displayText:_0xdf66[1038]},type:1},{buttonId:_0xdf66[1013],buttonText:{displayText:_0xdf66[1039]},type:1}];const btn7={contentText:ini_info7,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons7,headerType:1};nayla[_0xdf66[24]](from,btn7,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:nay,sendEphemeral:true})};if(sub_yt_zeeone_ofc== _0xdf66[910]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1040]));wowo= fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`); await nayla[_0xdf66[24]](from,wowo,image,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:helpmenu(wit,wita,wib,tampilTanggal,UserZeeone,tampilHari,limitawal,role,premi,sender,botname,pushname,prefix,wa_version,mcc,mnc,os_version,device_manufacturer,device_model),"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:helpmenu(wit,wita,wib,tampilTanggal,UserZeeone,tampilHari,limitawal,role,premi,sender,botname,pushname,prefix,wa_version,mcc,mnc,os_version,device_manufacturer,device_model),"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${tampilHari}${_0xdf66[1041]}${pushname}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko});tqto= `${_0xdf66[886]}`;let apa=nayla[_0xdf66[893]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":_0xdf66[887],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0xdf66[5]}${tqto}${_0xdf66[5]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0xdf66[888],"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":`${_0xdf66[109]}${creator}${_0xdf66[5]}`,"\x6C\x69\x73\x74\x54\x79\x70\x65":_0xdf66[889],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[1042],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0xdf66[891],"\x72\x6F\x77\x49\x64":_0xdf66[892]}]}]}},{});nayla[_0xdf66[894]](apa,{waitForAck:true})};if(sub_yt_zeeone_ofc== _0xdf66[891]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1043]));var imgList=[_0xdf66[1044],_0xdf66[1045],_0xdf66[1046],_0xdf66[1047],_0xdf66[1048],_0xdf66[1049],_0xdf66[1050]];var imgUrl=imgList[Math[_0xdf66[71]](Math[_0xdf66[69]]()* imgList[_0xdf66[70]])];nayla[_0xdf66[24]](from,_0xdf66[1051],text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${tampilHari}${_0xdf66[1041]}${pushname}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[1052]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}${imgUrl}${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xdf66[5],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[1053]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[916]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1035]));nayla[_0xdf66[24]](from,fastmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[919]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1055]));nayla[_0xdf66[24]](from,makermenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[979]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1056])); await nayla[_0xdf66[24]](from,nsfwmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko});const rows1=[{"\x74\x69\x74\x6C\x65":_0xdf66[724],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[726],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[728],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[730],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[732],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[734],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[736],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[738],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[740],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[742],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[744],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[746],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[748],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[750],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[752],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[754],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[756],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[758],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[760],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[762],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[764],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[766],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[768],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[770],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[772],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections1=[{title:_0xdf66[1027],rows:rows1}];const listt1={buttonText:_0xdf66[1028],title:`${_0xdf66[1057]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1031]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections1,listType:1};nayla[_0xdf66[24]](from,listt1,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};if(sub_yt_zeeone_ofc== _0xdf66[922]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1058]));nayla[_0xdf66[24]](from,ownermenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[925]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1059]));nayla[_0xdf66[24]](from,spesialmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[928]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1060]));nayla[_0xdf66[24]](from,sertifikatmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[931]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1061])); await nayla[_0xdf66[24]](from,stickmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko});const rows2=[{"\x74\x69\x74\x6C\x65":_0xdf66[830],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[832],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[834],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[836],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1062],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[840],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[842],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1063],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[846],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1064],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[850],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[852],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1065],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[856],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[858],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[860],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[862],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[864],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[866],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1066],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[870],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections2=[{title:_0xdf66[1027],rows:rows2}];const listt2={buttonText:_0xdf66[1028],title:`${_0xdf66[1067]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1031]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections2,listType:1};nayla[_0xdf66[24]](from,listt2,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};if(sub_yt_zeeone_ofc== _0xdf66[934]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1068]));nayla[_0xdf66[24]](from,randomtextmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[937]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1069]));nayla[_0xdf66[24]](from,gamemenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[940]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1070]));nayla[_0xdf66[24]](from,tagmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[943]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1071]));nayla[_0xdf66[24]](from,cekmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[946]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1072]));nayla[_0xdf66[24]](from,newsmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[949]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1073]));nayla[_0xdf66[24]](from,storagemenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[952]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1074]));nayla[_0xdf66[24]](from,pornmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[955]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1075]));nayla[_0xdf66[24]](from,soundmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[958]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1076]));nayla[_0xdf66[24]](from,downloadmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[961]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1077]));nayla[_0xdf66[24]](from,promenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[964]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1078]));nayla[_0xdf66[24]](from,grupmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[970]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1079])); await nayla[_0xdf66[24]](from,cecanmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko});const rows3=[{"\x74\x69\x74\x6C\x65":_0xdf66[115],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[129],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[131],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[133],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[135],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[137],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[139],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[141],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[143],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[145],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[147],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections3=[{title:_0xdf66[1027],rows:rows3}];const listt3={buttonText:_0xdf66[1028],title:`${_0xdf66[1080]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1031]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections3,listType:1};nayla[_0xdf66[24]](from,listt3,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};if(sub_yt_zeeone_ofc== _0xdf66[973]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1081])); await nayla[_0xdf66[24]](from,coganmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko});const rows4=[{"\x74\x69\x74\x6C\x65":_0xdf66[149],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[152],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[154],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[156],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[158],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[160],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[162],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[164],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[166],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[168],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[170],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[172],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[174],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[176],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[178],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[180],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[182],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[174],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections4=[{title:_0xdf66[1027],rows:rows4}];const listt4={buttonText:_0xdf66[1028],title:`${_0xdf66[1082]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1031]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections4,listType:1};nayla[_0xdf66[24]](from,listt4,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};if(sub_yt_zeeone_ofc== _0xdf66[967]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1083])); await nayla[_0xdf66[24]](from,asupanmenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko});const rows5=[{"\x74\x69\x74\x6C\x65":_0xdf66[563],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[693],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[664],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[641],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[612],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[584],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[184],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[214],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[235],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[256],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[280],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[302],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[327],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[365],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[390],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[415],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[444],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[463],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[490],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[513],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[535],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections5=[{title:_0xdf66[1027],rows:rows5}];const listt5={buttonText:_0xdf66[1028],title:`${_0xdf66[1084]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1031]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections5,listType:1};nayla[_0xdf66[24]](from,listt5,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};if(sub_yt_zeeone_ofc== _0xdf66[976]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1085]));nayla[_0xdf66[24]](from,animemenu(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko});const rows6=[{"\x74\x69\x74\x6C\x65":_0xdf66[774],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1086],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[778],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[780],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[782],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[784],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[786],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[788],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1087],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1088],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1089],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[796],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1090],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1091],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1092],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[804],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1093],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[808],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[810],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1094],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[814],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[816],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[818],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[820],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[822],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[824],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[826],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[828],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections6=[{title:_0xdf66[1027],rows:rows5}];const listt6={buttonText:_0xdf66[1028],title:`${_0xdf66[1095]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1031]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections6,listType:1};nayla[_0xdf66[24]](from,listt6,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};if(sub_yt_zeeone_ofc== _0xdf66[982]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1096]));nayla[_0xdf66[24]](from,image_effect(prefix),text,{thumbnail:fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),caption:_0xdf66[1054],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[1054],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xdf66[5]}${ucapannya}${_0xdf66[5]}`,"\x62\x6F\x64\x79":`${_0xdf66[5]}${baper}${_0xdf66[5]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xdf66[113],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xdf66[5]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xdf66[83]](`${_0xdf66[114]}${thumbnail}${_0xdf66[5]}`),"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xdf66[5]}${apiku}${_0xdf66[5]}`}},quoted:ftoko})};if(sub_yt_zeeone_ofc== _0xdf66[724]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1097]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[725]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[726]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1098]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[727]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[728]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1099]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[729]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[730]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1100]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[731]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[732]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1101]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[733]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[734]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1102]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[735]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[736]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1103]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[737]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[738]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1104]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[739]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[740]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1105]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[741]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[742]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1106]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[743]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[744]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1107]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[745]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[746]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1108]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[747]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[748]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1109]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[749]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[750]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1110]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[751]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[752]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1111]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[753]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[754]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1112]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[755]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[756]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1113]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[757]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[758]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1114]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[759]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[760]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1115]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[761]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[762]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1116]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[763]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[764]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1117]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[765]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[766]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1118]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[767]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[768]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1119]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[769]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[770]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1120]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[771]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[772]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1121]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[773]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[184]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1122]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ini_chika=[_0xdf66[186],_0xdf66[187],_0xdf66[188],_0xdf66[189],_0xdf66[190],_0xdf66[191],_0xdf66[192],_0xdf66[193],_0xdf66[194],_0xdf66[195],_0xdf66[196],_0xdf66[197],_0xdf66[198],_0xdf66[199],_0xdf66[200],_0xdf66[201],_0xdf66[202],_0xdf66[203],_0xdf66[204],_0xdf66[205],_0xdf66[206],_0xdf66[207],_0xdf66[208],_0xdf66[209],_0xdf66[210]];var random_chika=ini_chika[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ini_chika[_0xdf66[70]]))];let buff= await getBuffer(random_chika);nayla[_0xdf66[24]](from,buff,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[214]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1123]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var delvira=[_0xdf66[215],_0xdf66[216],_0xdf66[217],_0xdf66[218],_0xdf66[219],_0xdf66[220],_0xdf66[221],_0xdf66[222],_0xdf66[223],_0xdf66[224],_0xdf66[225],_0xdf66[226],_0xdf66[227],_0xdf66[228],_0xdf66[229],_0xdf66[230],_0xdf66[231],_0xdf66[232],_0xdf66[233],_0xdf66[234]];var random_delvira=delvira[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (delvira[_0xdf66[70]]))];let ini_delvira= await getBuffer(random_delvira);nayla[_0xdf66[24]](from,ini_delvira,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[235]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1124]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ayu=[_0xdf66[236],_0xdf66[237],_0xdf66[238],_0xdf66[239],_0xdf66[240],_0xdf66[241],_0xdf66[242],_0xdf66[243],_0xdf66[244],_0xdf66[245],_0xdf66[246],_0xdf66[247],_0xdf66[248],_0xdf66[249],_0xdf66[250],_0xdf66[251],_0xdf66[252],_0xdf66[253],_0xdf66[254],_0xdf66[255]];var random_ayu=ayu[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ayu[_0xdf66[70]]))];let ini= await getBuffer(random_ayu);nayla[_0xdf66[24]](from,ini_ayu,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[256]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1125]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var bunga=[_0xdf66[257],_0xdf66[258],_0xdf66[259],_0xdf66[260],_0xdf66[261],_0xdf66[262],_0xdf66[263],_0xdf66[264],_0xdf66[265],_0xdf66[266],_0xdf66[267],_0xdf66[268],_0xdf66[269],_0xdf66[270],_0xdf66[271],_0xdf66[272],_0xdf66[273],_0xdf66[274],_0xdf66[275],_0xdf66[276],_0xdf66[277],_0xdf66[278],_0xdf66[279]];var random_bunga=bunga[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (bunga[_0xdf66[70]]))];let ini_bunga= await getBuffer(random_bunga);nayla[_0xdf66[24]](from,ini_bunga,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[280]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1126]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var aura=[_0xdf66[281],_0xdf66[282],_0xdf66[283],_0xdf66[284],_0xdf66[285],_0xdf66[286],_0xdf66[287],_0xdf66[288],_0xdf66[289],_0xdf66[290],_0xdf66[291],_0xdf66[292],_0xdf66[293],_0xdf66[294],_0xdf66[295],_0xdf66[296],_0xdf66[297],_0xdf66[298],_0xdf66[299],_0xdf66[300],_0xdf66[301]];var random_aura=aura[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (aura[_0xdf66[70]]))];let ini_aura= await getBuffer(random_aura);nayla[_0xdf66[24]](from,ini_aura,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[302]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1127]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var nisa=[_0xdf66[303],_0xdf66[304],_0xdf66[305],_0xdf66[306],_0xdf66[307],_0xdf66[308],_0xdf66[309],_0xdf66[310],_0xdf66[311],_0xdf66[312],_0xdf66[313],_0xdf66[314],_0xdf66[315],_0xdf66[316],_0xdf66[317],_0xdf66[318],_0xdf66[319],_0xdf66[320],_0xdf66[321],_0xdf66[322],_0xdf66[323],_0xdf66[324],_0xdf66[325],_0xdf66[326]];var random_nisa=nisa[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (nisa[_0xdf66[70]]))];let ini_nisa= await getBuffer(random_nisa);nayla[_0xdf66[24]](from,ini_nisa,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[327]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1128]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ziva=[_0xdf66[328],_0xdf66[329],_0xdf66[330],_0xdf66[331],_0xdf66[332],_0xdf66[333],_0xdf66[334],_0xdf66[335],_0xdf66[336],_0xdf66[337],_0xdf66[338],_0xdf66[339],_0xdf66[340],_0xdf66[341],_0xdf66[342],_0xdf66[343],_0xdf66[344],_0xdf66[345],_0xdf66[346],_0xdf66[347],_0xdf66[348],_0xdf66[349],_0xdf66[350],_0xdf66[351],_0xdf66[352],_0xdf66[353],_0xdf66[354],_0xdf66[355],_0xdf66[356],_0xdf66[357],_0xdf66[358],_0xdf66[359],_0xdf66[360],_0xdf66[361],_0xdf66[362],_0xdf66[363],_0xdf66[364]];var random_ziva=ziva[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ziva[_0xdf66[70]]))];let ini_ziva= await getBuffer(random_ziva);nayla[_0xdf66[24]](from,ini_ziva,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[365]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1129]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var yana=[_0xdf66[366],_0xdf66[367],_0xdf66[368],_0xdf66[369],_0xdf66[370],_0xdf66[371],_0xdf66[372],_0xdf66[373],_0xdf66[374],_0xdf66[375],_0xdf66[376],_0xdf66[377],_0xdf66[378],_0xdf66[379],_0xdf66[380],_0xdf66[381],_0xdf66[382],_0xdf66[383],_0xdf66[384],_0xdf66[385],_0xdf66[386],_0xdf66[387],_0xdf66[388],_0xdf66[389]];var random_yana=yana[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (yana[_0xdf66[70]]))];let ini_yana= await getBuffer(random_yana);nayla[_0xdf66[24]](from,ini_yana,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[390]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1130]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var viona=[_0xdf66[391],_0xdf66[392],_0xdf66[393],_0xdf66[394],_0xdf66[395],_0xdf66[396],_0xdf66[397],_0xdf66[398],_0xdf66[399],_0xdf66[400],_0xdf66[401],_0xdf66[402],_0xdf66[403],_0xdf66[404],_0xdf66[405],_0xdf66[406],_0xdf66[407],_0xdf66[408],_0xdf66[409],_0xdf66[410],_0xdf66[411],_0xdf66[412],_0xdf66[413],_0xdf66[414]];var random_viona=viona[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (viona[_0xdf66[70]]))];let ini_viona= await getBuffer(random_viona);nayla[_0xdf66[24]](from,ini_viona,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[415]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1131]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var syania=[_0xdf66[416],_0xdf66[417],_0xdf66[418],_0xdf66[419],_0xdf66[420],_0xdf66[421],_0xdf66[422],_0xdf66[423],_0xdf66[424],_0xdf66[425],_0xdf66[426],_0xdf66[427],_0xdf66[428],_0xdf66[429],_0xdf66[430],_0xdf66[431],_0xdf66[432],_0xdf66[433],_0xdf66[434],_0xdf66[435],_0xdf66[436],_0xdf66[437],_0xdf66[438],_0xdf66[439],_0xdf66[440],_0xdf66[441],_0xdf66[442],_0xdf66[443]];var random_syania=syania[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (syania[_0xdf66[70]]))];let ini_syania= await getBuffer(random_syania);nayla[_0xdf66[24]](from,ini_syania,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[444]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1132]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var riri=[_0xdf66[445],_0xdf66[446],_0xdf66[447],_0xdf66[448],_0xdf66[449],_0xdf66[450],_0xdf66[451],_0xdf66[452],_0xdf66[453],_0xdf66[454],_0xdf66[455],_0xdf66[456],_0xdf66[457],_0xdf66[458],_0xdf66[459],_0xdf66[460],_0xdf66[461],_0xdf66[462]];var random_riri=riri[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (riri[_0xdf66[70]]))];let ini_riri= await getBuffer(random_riri);nayla[_0xdf66[24]](from,ini_riri,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[463]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1133]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var syifa=[_0xdf66[464],_0xdf66[465],_0xdf66[466],_0xdf66[467],_0xdf66[468],_0xdf66[469],_0xdf66[470],_0xdf66[471],_0xdf66[472],_0xdf66[473],_0xdf66[474],_0xdf66[475],_0xdf66[476],_0xdf66[477],_0xdf66[478],_0xdf66[479],_0xdf66[480],_0xdf66[481],_0xdf66[482],_0xdf66[483],_0xdf66[484],_0xdf66[485],_0xdf66[486],_0xdf66[487],_0xdf66[488],_0xdf66[489]];var random_syifa=syifa[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (syifa[_0xdf66[70]]))];let ini_syifa= await getBuffer(random_syifa);nayla[_0xdf66[24]](from,ini_syifa,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[490]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1134]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var mama_gina=[_0xdf66[491],_0xdf66[492],_0xdf66[493],_0xdf66[494],_0xdf66[495],_0xdf66[496],_0xdf66[497],_0xdf66[498],_0xdf66[499],_0xdf66[500],_0xdf66[501],_0xdf66[502],_0xdf66[503],_0xdf66[504],_0xdf66[505],_0xdf66[506],_0xdf66[507],_0xdf66[508],_0xdf66[509],_0xdf66[510],_0xdf66[511],_0xdf66[512]];var random_mama_gina=mama_gina[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (mama_gina[_0xdf66[70]]))];let ini_mama_gina= await getBuffer(random_mama_gina);nayla[_0xdf66[24]](from,ini_mama_gina,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[513]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1135]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var alcakenya=[_0xdf66[514],_0xdf66[515],_0xdf66[516],_0xdf66[517],_0xdf66[518],_0xdf66[519],_0xdf66[520],_0xdf66[521],_0xdf66[522],_0xdf66[523],_0xdf66[524],_0xdf66[525],_0xdf66[526],_0xdf66[527],_0xdf66[528],_0xdf66[529],_0xdf66[530],_0xdf66[531],_0xdf66[532],_0xdf66[533],_0xdf66[534]];var random_alcakenya=alcakenya[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (alcakenya[_0xdf66[70]]))];let ini_alcakenya= await getBuffer(random_alcakenya);nayla[_0xdf66[24]](from,ini_alcakenya,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[535]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1136]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var mangayutri=[_0xdf66[536],_0xdf66[537],_0xdf66[538],_0xdf66[539],_0xdf66[540],_0xdf66[541],_0xdf66[542],_0xdf66[543],_0xdf66[544],_0xdf66[545],_0xdf66[546],_0xdf66[547],_0xdf66[548],_0xdf66[549],_0xdf66[550],_0xdf66[551],_0xdf66[552],_0xdf66[553],_0xdf66[554],_0xdf66[555],_0xdf66[556],_0xdf66[557],_0xdf66[558],_0xdf66[559],_0xdf66[560],_0xdf66[561],_0xdf66[562]];var random_mangayutri=mangayutri[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (mangayutri[_0xdf66[70]]))];let ini_mangayutri= await getBuffer(random_mangayutri);nayla[_0xdf66[24]](from,ini_mangayutri,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[563]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1137]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var rikagusriani=[_0xdf66[564],_0xdf66[565],_0xdf66[566],_0xdf66[567],_0xdf66[568],_0xdf66[569],_0xdf66[570],_0xdf66[571],_0xdf66[572],_0xdf66[573],_0xdf66[574],_0xdf66[575],_0xdf66[576],_0xdf66[577],_0xdf66[578],_0xdf66[579],_0xdf66[580],_0xdf66[581],_0xdf66[582],_0xdf66[583]];var random_rikagusriani=rikagusriani[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (rikagusriani[_0xdf66[70]]))];let ini_rikagusriani= await getBuffer(random_rikagusriani);nayla[_0xdf66[24]](from,ini_rikagusriani,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[584]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1138]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var asupannih=[_0xdf66[585],_0xdf66[586],_0xdf66[587],_0xdf66[588],_0xdf66[589],_0xdf66[590],_0xdf66[591],_0xdf66[592],_0xdf66[593],_0xdf66[594],_0xdf66[595],_0xdf66[596],_0xdf66[597],_0xdf66[598],_0xdf66[599],_0xdf66[600],_0xdf66[601],_0xdf66[602],_0xdf66[603],_0xdf66[604],_0xdf66[605],_0xdf66[606],_0xdf66[607],_0xdf66[608],_0xdf66[609],_0xdf66[610],_0xdf66[611],_0xdf66[607],_0xdf66[608],_0xdf66[609]];var random_asupannih=asupannih[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (asupannih[_0xdf66[70]]))];let ini_asupannih= await getBuffer(random_asupannih);nayla[_0xdf66[24]](from,ini_asupannih,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[612]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1139]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var bocil=[_0xdf66[613],_0xdf66[614],_0xdf66[615],_0xdf66[616],_0xdf66[617],_0xdf66[618],_0xdf66[619],_0xdf66[620],_0xdf66[621],_0xdf66[622],_0xdf66[623],_0xdf66[624],_0xdf66[625],_0xdf66[626],_0xdf66[627],_0xdf66[628],_0xdf66[629],_0xdf66[630],_0xdf66[631],_0xdf66[632],_0xdf66[633],_0xdf66[634],_0xdf66[635],_0xdf66[636],_0xdf66[637],_0xdf66[638],_0xdf66[639],_0xdf66[640]];var random_bocil=bocil[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (bocil[_0xdf66[70]]))];let ini_bocil= await getBuffer(random_bocil);nayla[_0xdf66[24]](from,ini_bocil,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[641]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1140]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var geayubi=[_0xdf66[642],_0xdf66[643],_0xdf66[644],_0xdf66[645],_0xdf66[646],_0xdf66[647],_0xdf66[648],_0xdf66[649],_0xdf66[650],_0xdf66[651],_0xdf66[652],_0xdf66[653],_0xdf66[654],_0xdf66[655],_0xdf66[656],_0xdf66[657],_0xdf66[658],_0xdf66[659],_0xdf66[660],_0xdf66[661],_0xdf66[662],_0xdf66[663]];var random_geayubi=geayubi[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (geayubi[_0xdf66[70]]))];let ini_geayubi= await getBuffer(random_geayubi);nayla[_0xdf66[24]](from,ini_geayubi,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[664]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1141]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var santuy=[_0xdf66[665],_0xdf66[666],_0xdf66[667],_0xdf66[668],_0xdf66[669],_0xdf66[670],_0xdf66[671],_0xdf66[672],_0xdf66[673],_0xdf66[674],_0xdf66[675],_0xdf66[676],_0xdf66[677],_0xdf66[678],_0xdf66[679],_0xdf66[680],_0xdf66[681],_0xdf66[682],_0xdf66[683],_0xdf66[684],_0xdf66[685],_0xdf66[686],_0xdf66[687],_0xdf66[688],_0xdf66[689],_0xdf66[690],_0xdf66[691],_0xdf66[692]];var random_santuy=santuy[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (santuy[_0xdf66[70]]))];let ini_santuy= await getBuffer(random_santuy);nayla[_0xdf66[24]](from,ini_santuy,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[693]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1142]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);var ukhty=[_0xdf66[694],_0xdf66[695],_0xdf66[696],_0xdf66[697],_0xdf66[698],_0xdf66[699],_0xdf66[700],_0xdf66[701],_0xdf66[702],_0xdf66[703],_0xdf66[704],_0xdf66[705],_0xdf66[706],_0xdf66[707],_0xdf66[708],_0xdf66[709],_0xdf66[710],_0xdf66[711],_0xdf66[712],_0xdf66[713],_0xdf66[714],_0xdf66[715],_0xdf66[716],_0xdf66[717],_0xdf66[718],_0xdf66[719],_0xdf66[720],_0xdf66[721],_0xdf66[722],_0xdf66[723]];var random_ukhty=ukhty[Math[_0xdf66[71]](Math[_0xdf66[69]]()* (ukhty[_0xdf66[70]]))];let ini_ukhty= await getBuffer(random_ukhty);nayla[_0xdf66[24]](from,ini_ukhty,video,{mimetype:_0xdf66[211],quoted:nay,caption:`${_0xdf66[212]}${enter}${_0xdf66[5]}${enter}${_0xdf66[213]}`})};if(sub_yt_zeeone_ofc== _0xdf66[115]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1143]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[128]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[129]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1144]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[130]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[131]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1145]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[132]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[133]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1146]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[134]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[135]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1147]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[136]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[137]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1148]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[138]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[139]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1149]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[140]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[141]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1150]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[142]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[143]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1151]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[144]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[145]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1152]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[146]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[147]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1153]));reply(`${_0xdf66[5]}${petik}${_0xdf66[118]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[148]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[149]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1154]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[151]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[152]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1155]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[153]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[154]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1156]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[155]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[156]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1157]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[157]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[158]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1158]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[159]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[160]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1159]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[161]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[162]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1160]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[163]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[164]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1161]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[165]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[166]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1162]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[167]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[168]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1163]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[169]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[170]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1164]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[171]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[172]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1165]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[1166]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[174]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1167]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[175]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[176]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1168]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[177]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[178]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1169]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[179]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[180]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1170]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[181]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[182]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1171]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[183]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[174]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1167]));reply(`${_0xdf66[5]}${petik}${_0xdf66[150]}${titik}${_0xdf66[5]}${petik}${_0xdf66[5]}`);fetch(`${_0xdf66[175]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[830]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1172]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[831]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[832]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1173]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[833]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[834]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1174]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[835]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[836]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1175]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[837]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1062]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1176]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[839]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[840]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1177]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[841]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[842]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1178]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[843]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1063]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1179]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[845]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[846]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1180]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[847]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1064]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1181]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[849]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[850]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1182]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[851]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[852]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1183]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[853]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1065]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1184]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[855]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[856]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1185]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[857]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[858]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1186]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[859]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[860]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1187]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[861]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[862]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1188]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[863]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[864]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1189]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[865]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[866]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1190]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[867]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1066]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1191]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[869]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[870]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1192]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[871]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,sticker,{quoted:fdoc,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[774]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1193]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[775]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1086]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1194]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[777]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[778]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1195]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[779]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[780]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1196]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[781]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[782]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1197]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[783]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[784]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1198]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[785]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[786]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1199]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[787]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[788]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1200]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[789]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1087]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1201]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[791]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1088]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1202]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[793]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1089]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1203]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[795]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[796]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1204]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[797]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1090]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1205]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[799]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1091]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1206]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[801]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1092]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1207]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[803]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[804]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1208]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[805]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1093]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1209]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[807]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[808]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1210]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[809]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[810]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1211]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[811]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[1094]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1212]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[813]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[814]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1213]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[815]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[816]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1214]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[817]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[818]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1215]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[819]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[820]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1216]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[821]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[822]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1217]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[823]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[824]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1218]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[825]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[826]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1219]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[827]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(sub_yt_zeeone_ofc== _0xdf66[828]){console[_0xdf66[120]](_0xdf66[876],_0xdf66[877],wib,color(_0xdf66[1220]));if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};reply(mess[_0xdf66[185]]);fetch(`${_0xdf66[829]}`)[_0xdf66[126]]((_0xd5c7x22)=>{return _0xd5c7x22[_0xdf66[127]]()})[_0xdf66[126]]((_0xd5c7x1d)=>{let _0xd5c7x1e=_0xd5c7x1d[_0xdf66[19]](_0xdf66[119]);let _0xd5c7x1f=_0xd5c7x1e[Math[_0xdf66[71]](Math[_0xdf66[69]]()* _0xd5c7x1e[_0xdf66[70]])];imageToBase64(_0xd5c7x1f)[_0xdf66[126]]((_0xd5c7x21)=>{media= Buffer[_0xdf66[123]](_0xd5c7x21,_0xdf66[122]);nayla[_0xdf66[24]](from,media,image,{thumbnail:Buffer[_0xdf66[124]](0),quoted:nay,caption:_0xdf66[125]})})[_0xdf66[121]]((_0xd5c7x20)=>{console[_0xdf66[120]](_0xd5c7x20)})})};if(subscribezeeoneofc== `${_0xdf66[1221]}`){var ini_gopayyy=`${_0xdf66[1036]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1222]}`;var buttonsss=[{buttonId:_0xdf66[1223],buttonText:{displayText:_0xdf66[1224]},type:1},{buttonId:_0xdf66[1225],buttonText:{displayText:_0xdf66[1226]},type:1}];buttonMessageee= {contentText:ini_gopayyy,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttonsss,headerType:1};nayla[_0xdf66[24]](from,buttonMessageee,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:nay,sendEphemeral:true})};if(subscribezeeoneofc== _0xdf66[1225]){reply(_0xdf66[1227])};if(subscribezeeoneofc== _0xdf66[1223]){const rows11=[{"\x74\x69\x74\x6C\x65":_0xdf66[1017],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1018],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1019],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1020],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1021],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1022],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1023],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1024],"\x72\x6F\x77\x49\x64":_0xdf66[892]},{"\x74\x69\x74\x6C\x65":_0xdf66[1025],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0xdf66[1026],"\x72\x6F\x77\x49\x64":_0xdf66[892]}];const sections11=[{title:_0xdf66[1027],rows:rows11}];const listt11={buttonText:_0xdf66[1028],title:`${_0xdf66[1029]}`,description:`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1228]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}`,sections:sections11,listType:1};nayla[_0xdf66[24]](from,listt11,MessageType[_0xdf66[1032]],{quoted:ftoko,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]}})};if(sub_yt_zeeone_ofc== _0xdf66[1017]){var sewa_1=`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1229]}`;const buttons4=[{buttonId:_0xdf66[1230],buttonText:{displayText:_0xdf66[988]},type:1},{buttonId:_0xdf66[1231],buttonText:{displayText:_0xdf66[990]},type:1},{buttonId:_0xdf66[1232],buttonText:{displayText:_0xdf66[992]},type:1}];const btn4={contentText:sewa_1,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons4,headerType:1};nayla[_0xdf66[24]](from,btn4,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1230]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1233],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1234],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1231]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1235],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1236],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1232]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1237],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1238],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1233]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1242]}${_minggu}${_0xdf66[51]}${petik}${_0xdf66[1243]}${petik}${_0xdf66[51]}${nomor_ovo}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1235]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1242]}${_minggu}${_0xdf66[51]}${petik}${_0xdf66[1244]}${petik}${_0xdf66[51]}${nomor_dana}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1237]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1242]}${_minggu}${_0xdf66[51]}${petik}${_0xdf66[1245]}${petik}${_0xdf66[51]}${nomor_gopay}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(sub_yt_zeeone_ofc== _0xdf66[1019]){var sewa_2=`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1229]}`;const buttons5=[{buttonId:_0xdf66[1246],buttonText:{displayText:_0xdf66[988]},type:1},{buttonId:_0xdf66[1247],buttonText:{displayText:_0xdf66[990]},type:1},{buttonId:_0xdf66[1248],buttonText:{displayText:_0xdf66[992]},type:1}];const btn5={contentText:sewa_2,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons5,headerType:1};nayla[_0xdf66[24]](from,btn5,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1246]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1249],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1250],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1247]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1251],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1252],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1248]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1253],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1254],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1249]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1255]}${__minggu}${_0xdf66[1256]}${petik}${_0xdf66[1243]}${petik}${_0xdf66[51]}${nomor_ovo}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1251]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1255]}${__minggu}${_0xdf66[1256]}${petik}${_0xdf66[1244]}${petik}${_0xdf66[51]}${nomor_dana}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1253]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1255]}${__minggu}${_0xdf66[1256]}${petik}${_0xdf66[1245]}${petik}${_0xdf66[51]}${nomor_gopay}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(sub_yt_zeeone_ofc== _0xdf66[1021]){var sewa_3=`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1229]}`;const buttons6=[{buttonId:_0xdf66[1257],buttonText:{displayText:_0xdf66[988]},type:1},{buttonId:_0xdf66[1258],buttonText:{displayText:_0xdf66[990]},type:1},{buttonId:_0xdf66[1259],buttonText:{displayText:_0xdf66[992]},type:1}];const btn6={contentText:sewa_3,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1257]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1260],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1261],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1258]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1262],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1263],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1259]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1264],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1265],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1260]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1266]}${___minggu}${_0xdf66[1256]}${petik}${_0xdf66[1243]}${petik}${_0xdf66[51]}${nomor_ovo}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1262]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1266]}${___minggu}${_0xdf66[1256]}${petik}${_0xdf66[1244]}${petik}${_0xdf66[51]}${nomor_dana}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1264]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1266]}${___minggu}${_0xdf66[1256]}${petik}${_0xdf66[1245]}${petik}${_0xdf66[51]}${nomor_gopay}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(sub_yt_zeeone_ofc== _0xdf66[1023]){var sewa_4=`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1229]}`;const buttons7=[{buttonId:_0xdf66[1267],buttonText:{displayText:_0xdf66[988]},type:1},{buttonId:_0xdf66[1268],buttonText:{displayText:_0xdf66[990]},type:1},{buttonId:_0xdf66[1269],buttonText:{displayText:_0xdf66[992]},type:1}];const btn7={contentText:sewa_4,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons7,headerType:1};nayla[_0xdf66[24]](from,btn7,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1267]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1270],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1271],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1268]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1272],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1273],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1269]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1274],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1275],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1270]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1276]}${_bulan}${_0xdf66[1256]}${petik}${_0xdf66[1243]}${petik}${_0xdf66[51]}${nomor_ovo}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1272]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1276]}${_bulan}${_0xdf66[1256]}${petik}${_0xdf66[1244]}${petik}${_0xdf66[51]}${nomor_dana}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1274]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1276]}${_bulan}${_0xdf66[1256]}${petik}${_0xdf66[1245]}${petik}${_0xdf66[51]}${nomor_gopay}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(sub_yt_zeeone_ofc== _0xdf66[1025]){var sewa_5=`${_0xdf66[1030]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1229]}`;const buttons8=[{buttonId:_0xdf66[1277],buttonText:{displayText:_0xdf66[988]},type:1},{buttonId:_0xdf66[1278],buttonText:{displayText:_0xdf66[990]},type:1},{buttonId:_0xdf66[1279],buttonText:{displayText:_0xdf66[992]},type:1}];const btn8={contentText:sewa_5,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons8,headerType:1};nayla[_0xdf66[24]](from,btn8,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1277]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1280],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1281],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1278]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1282],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1283],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1279]}`){var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[993]}`;const buttons6=[{buttonId:_0xdf66[1284],buttonText:{displayText:_0xdf66[995]},type:1},{buttonId:_0xdf66[1285],buttonText:{displayText:_0xdf66[997]},type:1}];const btn6={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttons6,headerType:1};nayla[_0xdf66[24]](from,btn6,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1280]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1286]}${_permanen}${_0xdf66[1256]}${petik}${_0xdf66[1243]}${petik}${_0xdf66[51]}${nomor_ovo}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1282]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1286]}${_permanen}${_0xdf66[1256]}${petik}${_0xdf66[1244]}${petik}${_0xdf66[51]}${nomor_dana}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1284]}`){optionsp1= `${_0xdf66[5]}${petik}${_0xdf66[1239]}${petik}${_0xdf66[1240]}${pushname}${_0xdf66[1241]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1286]}${_permanen}${_0xdf66[1256]}${petik}${_0xdf66[1245]}${petik}${_0xdf66[51]}${nomor_gopay}${_0xdf66[1001]}${ini_mark[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1002]}`;nayla[_0xdf66[24]](from,optionsp1,text,{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender,ini_mark],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})};if(subscribezeeoneofc== `${_0xdf66[1287]}`){ await nayla[_0xdf66[1289]](from,GroupSettingChange[_0xdf66[1288]],false);reply(`${_0xdf66[5]}${petik}${_0xdf66[1290]}${petik}${_0xdf66[1291]}`)};if(subscribezeeoneofc== `${_0xdf66[1292]}`){ await nayla[_0xdf66[1289]](from,GroupSettingChange[_0xdf66[1288]],true);reply(`${_0xdf66[5]}${petik}${_0xdf66[1290]}${petik}${_0xdf66[1293]}`)};if(subscribezeeoneofc== `${_0xdf66[1294]}`){if(isAntiLink){return reply(_0xdf66[1295])};antilink[_0xdf66[7]](from);fs[_0xdf66[73]](_0xdf66[1296],JSON[_0xdf66[72]](antilink));reply(_0xdf66[1297])};if(subscribezeeoneofc== `${_0xdf66[1298]}`){if(isAntiLink){return reply(_0xdf66[1299])};var ini=antilink[_0xdf66[1300]](from);antilink[_0xdf66[1301]](ini,1);fs[_0xdf66[73]](_0xdf66[1296],JSON[_0xdf66[72]](antilink));reply(_0xdf66[1302])};if(subscribezeeoneofc== `${_0xdf66[1303]}`){if(isSimi){return reply(`${_0xdf66[1304]}${command}${_0xdf66[1305]}`)};samih[_0xdf66[7]](from);fs[_0xdf66[73]](_0xdf66[1306],JSON[_0xdf66[72]](samih));reply(`${_0xdf66[1304]}${command}${_0xdf66[1305]}`)};if(subscribezeeoneofc== `${_0xdf66[1307]}`){samih[_0xdf66[1301]](from,1);fs[_0xdf66[73]](_0xdf66[1306],JSON[_0xdf66[72]](samih));reply(`${_0xdf66[1308]}${command}${_0xdf66[1309]}`)};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[1310]}`){if(!isGroup){return reply(mess[_0xdf66[117]][_0xdf66[1311]])};if(!isGroupAdmins){return reply(`${_0xdf66[1312]}`)};if(!isBotGroupAdmins){return reply(`${_0xdf66[1313]}`)};if(nay[_0xdf66[2]][_0xdf66[0]]=== undefined|| nay[_0xdf66[2]][_0xdf66[0]]=== null){return reply(_0xdf66[1314])};kicknya= nay[_0xdf66[2]][_0xdf66[0]][_0xdf66[1]][_0xdf66[4]]; await nayla[_0xdf66[1315]](from,[kicknya]);reply(_0xdf66[1316])};if(budy=== `${_0xdf66[5]}${prefix}${_0xdf66[1317]}`){if(!isGroup){return reply(mess[_0xdf66[117]][_0xdf66[1311]])};if(!isGroupAdmins){return reply(`${_0xdf66[1312]}`)};if(!isBotGroupAdmins){return reply(`${_0xdf66[1313]}`)};if(nay[_0xdf66[2]][_0xdf66[0]]=== undefined|| nay[_0xdf66[2]][_0xdf66[0]]=== null){return reply(_0xdf66[1314])};addnya= nay[_0xdf66[2]][_0xdf66[0]][_0xdf66[1]][_0xdf66[4]]; await nayla[_0xdf66[1318]](from,[addnya]);reply(_0xdf66[1319])};switch(command){case _0xdf66[1320]:;case _0xdf66[1321]:;case _0xdf66[1322]:;case _0xdf66[1338]:if(!isOwner){return reply(mess[_0xdf66[117]][_0xdf66[1323]])};if(args[_0xdf66[70]]< 1){return reply(_0xdf66[1324])};ini_bc= args[_0xdf66[1325]](_0xdf66[1041]);anu=  await nayla[_0xdf66[1327]][_0xdf66[1326]]();if(isMedia&&  !nay[_0xdf66[2]][_0xdf66[1328]]|| isQuotedImage){const encmedia=isQuotedImage?JSON[_0xdf66[84]](JSON[_0xdf66[72]](nay)[_0xdf66[899]](_0xdf66[1329],_0xdf66[1330]))[_0xdf66[2]][_0xdf66[0]][_0xdf66[1]]:nay;var buff1= await nayla[_0xdf66[1331]](encmedia);for(let _ of anu){nayla[_0xdf66[24]](_[_0xdf66[1332]],buff1,image,{quoted:fkontak,caption:`${_0xdf66[1333]}${ini_bc}${_0xdf66[5]}`})};reply(_0xdf66[1334])}else {for(let _ of anu){var buttonsz=[{buttonId:_0xdf66[107],buttonText:{displayText:_0xdf66[1335]},type:1},{buttonId:_0xdf66[1221],buttonText:{displayText:_0xdf66[1336]},type:1}];var buttonMessagez={contentText:`${_0xdf66[1337]}${ini_bc}${_0xdf66[5]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttonsz,headerType:1}; await nayla[_0xdf66[24]](_[_0xdf66[1332]],buttonMessagez,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true},quoted:fkontak,sendEphemeral:true})};reply(_0xdf66[1334])};case _0xdf66[1339]:;case _0xdf66[1340]:;case _0xdf66[1341]:;case _0xdf66[1349]:if(!isOwner){return reply(mess[_0xdf66[117]][_0xdf66[1323]])};if(args[_0xdf66[70]]< 1){return reply(`${_0xdf66[1342]}${prefix}${_0xdf66[1343]}`)};var group= await nayla[_0xdf66[1344]](from);ini_bc= args[_0xdf66[1325]](_0xdf66[1041]);var groupz= await nayla[_0xdf66[1327]][_0xdf66[1326]]()[_0xdf66[8]]((_0xd5c7x13)=>{return _0xd5c7x13[_0xdf66[1332]][_0xdf66[1346]](_0xdf66[1345])});reply(`${_0xdf66[1347]}${groupz[_0xdf66[70]]}${_0xdf66[1348]}`);let count=0;for(let _ of groupz){var buttonsz=[{buttonId:_0xdf66[107],buttonText:{displayText:_0xdf66[1335]},type:1},{buttonId:_0xdf66[1221],buttonText:{displayText:_0xdf66[1336]},type:1}];var buttonMessagez={contentText:`${_0xdf66[1337]}${ini_bc}${_0xdf66[5]}`,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttonsz,headerType:1}; await nayla[_0xdf66[24]](_[_0xdf66[1332]],buttonMessagez,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true},quoted:fkontak,sendEphemeral:true})};reply(_0xdf66[1334]);case _0xdf66[1350]:;case _0xdf66[1368]:if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};members_ids= [];for(let mem of groupMembers){members_ids[_0xdf66[7]](mem[_0xdf66[1332]])};ini_ownerNumber= [`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`,`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`,`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`,`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`,`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`,`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`,`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`,`${_0xdf66[5]}${setting[_0xdf66[1351]]}${_0xdf66[63]}`];let ini_list=[];for(let i of ini_ownerNumber){const vname_=nayla[_0xdf66[1352]][i]!= undefined?nayla[_0xdf66[1352]][i][_0xdf66[1353]]|| nayla[_0xdf66[1352]][i][_0xdf66[1354]]:undefined;ini_list[_0xdf66[7]]({"\x64\x69\x73\x70\x6C\x61\x79\x4E\x61\x6D\x65":_0xdf66[1355],"\x76\x63\x61\x72\x64":`${_0xdf66[1356]}${vname_?`${_0xdf66[5]}${vname_}${_0xdf66[5]}`:`${_0xdf66[5]}${nayla[_0xdf66[1358]][_0xdf66[1357]]}${_0xdf66[5]}`}${_0xdf66[1359]}${i[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1360]}${i[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1361]}`})};hehe=  await nayla[_0xdf66[24]](from,{"\x64\x69\x73\x70\x6C\x61\x79\x4E\x61\x6D\x65":`${_0xdf66[5]}${ini_list[_0xdf66[70]]}${_0xdf66[1362]}`,"\x63\x6F\x6E\x74\x61\x63\x74\x73":ini_list},_0xdf66[1363],{quoted:fkontak,contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":members_ids}});var ini_gopay=`${_0xdf66[1036]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1364]}`;var buttonns=[{buttonId:_0xdf66[984],buttonText:{displayText:_0xdf66[1365]},type:1},{buttonId:_0xdf66[1221],buttonText:{displayText:_0xdf66[1336]},type:1}];buttonMessage= {contentText:ini_gopay,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[1366]}${tampilWaktu}${_0xdf66[1367]}${creator}${_0xdf66[5]}`,buttons:buttonns,headerType:1};nayla[_0xdf66[24]](from,buttonMessage,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true});break;case _0xdf66[1311]:if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};if(isLimit(sender)){return}; await limitAdd(sender);if(!isGroup){return reply(`${_0xdf66[1369]}`)};if(!isGroupAdmins){return reply(`${_0xdf66[1370]}`)};if(!isBotGroupAdmins){return reply(`${_0xdf66[1313]}`)};var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1371]}`;var buttonsz=[{buttonId:_0xdf66[1287],buttonText:{displayText:_0xdf66[1372]},type:1},{buttonId:_0xdf66[1292],buttonText:{displayText:_0xdf66[1373]},type:1}];var buttonMessagez={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttonsz,headerType:1}; await nayla[_0xdf66[24]](_[_0xdf66[1332]],buttonMessagez,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true});case _0xdf66[1378]:if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};if(isLimit(sender)){return}; await limitAdd(sender);if(!isGroup){return reply(`${_0xdf66[1369]}`)};if(!isGroupAdmins){return reply(`${_0xdf66[1370]}`)};if(!isBotGroupAdmins){return reply(`${_0xdf66[1313]}`)};var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1374]}${prefix}${_0xdf66[1375]}`;var buttonsz=[{buttonId:_0xdf66[1294],buttonText:{displayText:_0xdf66[1376]},type:1},{buttonId:_0xdf66[1298],buttonText:{displayText:_0xdf66[1377]},type:1}];var buttonMessagez={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttonsz,headerType:1}; await nayla[_0xdf66[24]](_[_0xdf66[1332]],buttonMessagez,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true});case _0xdf66[1380]:if(!isUserAlphabot){return replyByZeeone(mess[_0xdf66[117]][_0xdf66[116]])};if(isLimit(sender)){return}; await limitAdd(sender);if(!isGroup){return reply(`${_0xdf66[1369]}`)};if(!isGroupAdmins){return reply(`${_0xdf66[1370]}`)};if(!isBotGroupAdmins){return reply(`${_0xdf66[1313]}`)};var ini_info=`${_0xdf66[985]}${sender[_0xdf66[19]](_0xdf66[18])[0]}${_0xdf66[1374]}${prefix}${_0xdf66[1379]}`;var buttonsz=[{buttonId:_0xdf66[1303],buttonText:{displayText:_0xdf66[1376]},type:1},{buttonId:_0xdf66[1307],buttonText:{displayText:_0xdf66[1377]},type:1}];var buttonMessagez={contentText:ini_info,footerText:`${_0xdf66[5]}${tampilTanggal}${_0xdf66[5]}${enter}${_0xdf66[5]}${tampilWaktu}${_0xdf66[5]}${enter}${_0xdf66[5]}${enter}${_0xdf66[109]}${creator}${_0xdf66[5]}`,buttons:buttonsz,headerType:1}; await nayla[_0xdf66[24]](_[_0xdf66[1332]],buttonMessagez,MessageType[_0xdf66[110]],{caption:_0xdf66[111],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xdf66[112],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[sender]},quoted:fkontak,sendEphemeral:true})}
    switch (command) {
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
/*			        
			        
			        
			        MAU NYOLOMG CASE YA OM?? 
			        SETIDAKNYA ADD NAMA GW LAH
			        DI THX TO BOT KLEAN "NAYLA"
			        GK MAU?? OKE TERIMAKASIH			       			        
			        			       			        			       			        			       			        			        
			        
			        
*/                                        
            
			        case 'join':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length < 1) return reply(`Ex. ${prefix}join https://chat.whatsapp.com/kakxjaKanallpaow`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return nayla.sendMessage(from, 'Sorry the Text is Too Long, Maximum 300 Texts', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug22 = `[ *JOIN INVITATION* ]\nFrom ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `LOLITA BOT`} } } })                    
                    reply('BOTS WILL BE COMING SOON. OWNER')                     
					break  
		case 'claim':
					if (!isGroup) return reply(mess.only.group)
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					reply(`Congratulations You Get *${nayla3}*`)
					addLevelingLevel(sender, 1)
                    bayarLimit(sender, nayla3) 
                    break
        case 'info':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        inf1 = `© *Bot Name* : ${botname}\n`
			        inf1 += `© *Owner Name* : ${ownername}\n`
			        inf1 += `© *AUTHOR* : NAYLACHAN\n`
			        inf1 += `© *Bot Number* : ${numberbot}\n`
			        inf1 += `SUBSCRIBE ${yt}`
			        reply(inf1)
			        break
		case 'verify':
		case 'daftar':
		if (isUserAlphabot) return reply(`Hai ${pushname} Anda sudah terdaftar di database`)
					const noSeri = createSerial(20)
					try {
					ppimg = await nayla.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
					}
					imglu = `${img}` 
					veri = sender
					UserZeeone.push(sender)
					fs.writeFileSync('./nayla/UserAlphabot.json', JSON.stringify(UserZeeone))
					addUserAlphabot(sender, noSeri)
					const captionnya = `╭─「 *SUCCESS VERIFICATION* 」
│\`\`\`Pendaftaran berhasil dgn\`\`\` 
│
│\`\`\`SN: ${noSeri}\`\`\`
│\`\`\`Pada : ${wib} WIB \`\`\`
│\`\`\`Name : ${pushname}\`\`\`
│\`\`\`Number : @${sender.split("@")[0]}\`\`\`
│\`\`\`To use bot Please \`\`\`
│\`\`\`Send command ${prefix}menu\`\`\`
│\`\`\`atau ${prefix}allmenu\`\`\`
│
│\`\`\`\Users total : ${UserZeeone.length} Users\`\`\`
╰─────────────────────`
					//let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${UserZeeone.length}&seri=${noSeri}&pp=${ppimg}&bg=${imglu}`)
					//tuh bang gua bikinin verify image klo mau tinggal hapus // doang. klo gua maunya simple aja
					let buff = await getBuffer(ppimg)
					var _0x13af=['kApxl','qqbSv','init','call','Subsc','tSgII','PelXy','hXxce','rn\x20th','UnMOU','zTLlM','zkksx','1535131rZdojC','NwDXw','KpveZ','table','EMXZc','LGRxX','TZEFq','ihWKK','BWRZC','zA-Z_','capti','yCphf','nTuyJ','AjoGG',']+(\x20+','GdPAG','|3|2|','info','qIbCD','DNXCg','__pro','bAQiv','wmiSs','1upWKbZ','.com/','DmlfY','yXUXt','warn','aIQjW','tcowu','s\x20+\x20\x22','UlxMG','369592ANRWZS','ructo','KcWZR','rIjDD','ctor(','KPjxm','rhasi','IRPFO','oyEEe','Eztcl','fOOte','nmYco','ribe\x20','dasVd','mcitl','ORHDd','rwTFt','VcuWg','zgEcs','vCXcB','oFrCT','WJAui','guFdP','GOjKR','2|1|4','Jmkzl','input','JnSKo','MAbTV','nyrNK','SYugB','trace','nrvoK','RwSzh','EvJOb','test','🇦🇺\x20Suc','🇮🇩\x20Ver','GmEvV','icuVm','mcEcP','VaQaA','634945FwdlUt','0-9a-','gFIPG','Fbaed','el/UC','https','zeeon','AnhkU','1145CwBoqz','dxvVw','mUwaj','CmSdp','NwbPt','WLdBk','hEnaT','NWAtk','@s.wh','rRIPg','gYhjM','uquna','IeShe','Score','iimGL','AAsfy','adMhr','UXKEj','+\x20thi','\x20(tru','quote','sPpDa','DrkfW','NJMGO','yeyaG','KAhvh','tYwDl','JvVYo','RBFOY','rawrt','HdQVF','YZDVm','EHQRX','retur','WpqgL','ttZmC','KaQuF','oJKqO','FyUOP','liLGH','MYntD','bramq','VjnVk','nGuju','LCGeA','uzZoG','EwNys','ing','GeRKw','\x5c+\x5c+\x20','flzxP','conso','atsap','to__','mEfui','HJQik','etaxf','dGJgH','log','tion','MvczE','proto','Ychhi','frPaS',')+)+[','icati','YgmHD','dufmx','FFDrZ','MGOfo','jKKsz','EVHGN','uboXZ','hgZDd','FdhFW','actio','BkVsO','pNkBh','menti','WTFWd','HYtpQ','RqCBw','RBqmt','RQupA','xCUTF','FptKZ','HdGAG','KjdzI','POShT','[^\x20]+','MDYiL','UydFQ','cyNEN','wLimC','kElFv','pKGSj','IAcGy','XVbKB','ODby7','fRnIM','chain','lGwjL','PLULe','conte','BqhLR','CjQaI','cess\x20','apply','rONsh','sendE','JDDgh','const','si\x20be','utube','LfWmT','chann','BOIpX','while','IDiwz','HCqqV','://yo','aPsEH','$]*)','dJZYr','e)\x20{}','^([^\x20','PCqDN','toStr','XWolu','KUAaO','ODehn','WLpLX','gxLCF','e\x20ofc','wvTer','NLYEU','a-zA-','YYodP','ItMHE','funct','1149467McDptt','cjsnF','oeQRn','evKQb','MRSVp','vjYMn','PNWkP','n\x20/\x22\x20','LLkNQ','AIAjV','ADLRM','PPFDt','mxnzN','bdtYx','strin','port\x20','cuRyT','owMRJ','sendM','kGJez','zUWRM','isFor','|5|0|','ulEEt','rbzbZ','excep','UyJCh','uBbzT','{}.co','iKjqY','arbNI','state','xtInf','XErbU','1439624wcVvBn','dzWwb','is\x22)(','HTjbV','EPirR','kYiha','bind','n()\x20','essag','THSqn','pheme','zeNBI','SdWRX','nctio','YiUBy','Zoxxw','5|1|0','gZLEi','UEklj','gger','Kmzrw','cHqoH','type','forwa','KCtGB','pQvyF','1412jXKXXz','pTdfg','131776rPUSAH','_MoRY','LUerC','ytXyF','ion\x20*','BdNsw','^\x20]}','KHrin','RJJQe','*(?:[','verif','DChAv','YpguI','OXieH','lengt','AeqKB','BHJij','onedJ','mWqPp','warde','count','hcWkN','XxNmm','ral','\x5c(\x20*\x5c','rKTzr','&\x20sup','ecOHo','GBupf','split','Apjky','ifika','uNRzX','ecuXV','lcwJh','WPskM','QADmT','gWOgi','dtAvv','ahBsz','PnfKo','nstru','gyDIU','\x22retu','esckr','Z_$][','KitYW','NxrSa','error','PEgLV','n\x20(fu','FPIeP','mOMmb','qpkAP','ViByN','TGtOo','p.net','rUwRv','jnVuz','rding','XesLO','rljGQ','wHsNf','DrppG','debu','Objec'];(function(_0xc41d46,_0x28a5e4){function _0x10d139(_0x4d8fc2,_0x15f035,_0x5d6cd8,_0x3b3602,_0x1fa541){return _0x5c7f(_0x15f035- -0x241,_0x5d6cd8);}function _0x3d354b(_0x53972d,_0x9d8e5c,_0x4cc368,_0x571241,_0x293092){return _0x5c7f(_0x53972d-0x98,_0x571241);}function _0x2ebd5d(_0x4f0154,_0x581c6b,_0x570cf7,_0x457fd6,_0xd89556){return _0x5c7f(_0x4f0154- -0x369,_0x570cf7);}function _0x427986(_0x280326,_0x53389d,_0x23c55f,_0x373f86,_0x55b82e){return _0x5c7f(_0x23c55f-0x13a,_0x280326);}function _0x43760a(_0x7beca8,_0x24f440,_0x389e1c,_0x163151,_0x272465){return _0x5c7f(_0x272465-0x2a7,_0x163151);}while(!![]){try{var _0x411585=-parseInt(_0x3d354b(0x27f,0x29f,0x208,0x2bf,0x1ef))*-parseInt(_0x427986(0x346,0x39b,0x3c3,0x3fa,0x39c))+parseInt(_0x10d139(-0x42,0x16,-0x8d,0x56,-0x61))+parseInt(_0x427986(0x3d0,0x445,0x3bb,0x421,0x468))*parseInt(_0x427986(0x2d3,0x313,0x388,0x33c,0x35d))+-parseInt(_0x3d354b(0x2cf,0x2e8,0x271,0x30a,0x33e))+-parseInt(_0x427986(0x3cb,0x4e6,0x471,0x504,0x42a))+parseInt(_0x427986(0x320,0x3b1,0x323,0x322,0x289))+parseInt(_0x2ebd5d(-0x54,-0x3e,-0x80,-0xce,-0xb));if(_0x411585===_0x28a5e4)break;else _0xc41d46['push'](_0xc41d46['shift']());}catch(_0x5a9198){_0xc41d46['push'](_0xc41d46['shift']());}}}(_0x13af,-0x144813+-0x192ed5+0x3b9efd));var _0x2645c9=function(){function _0x15920e(_0x4f6eea,_0x3dc77c,_0x7b8de,_0x545b9b,_0x5d6b2a){return _0x5c7f(_0x4f6eea- -0x392,_0x545b9b);}var _0x115b0a={'VjnVk':_0x3df322(0x585,0x5f5,0x56c,0x509,0x546)+_0x3df322(0x3e5,0x376,0x3c3,0x459,0x41f)+_0x44811e(0x1a8,0x9b,0x11c,0x8a,0xaf)+')','SYugB':_0x3df322(0x57f,0x47f,0x529,0x577,0x4ec)+_0x44811e(0x168,0x1b7,0x10d,0x163,0xd6)+_0x43621d(0x60f,0x6ea,0x6ad,0x686,0x65f)+_0x301023(-0x91,-0x6b,-0xa5,-0x100,-0xb4)+_0x44811e(0x207,0x1e8,0x19d,0xf6,0x15f)+_0x15920e(-0x152,-0x198,-0x14e,-0x12b,-0xdb)+_0x301023(0x5c,0x1a,0x2a,0x99,0x6f),'MGOfo':function(_0x3eceba,_0x302770){return _0x3eceba(_0x302770);},'HJQik':_0x43621d(0x51a,0x550,0x5df,0x550,0x57b),'HdQVF':function(_0x4c2b19,_0x301aea){return _0x4c2b19+_0x301aea;},'mUwaj':_0x301023(0x46,0x34,0x55,0xe3,-0x50),'AeqKB':_0x44811e(0x233,0x152,0x18c,0x23d,0x193),'uBbzT':function(_0x426153){return _0x426153();},'FdhFW':function(_0x3a3480,_0xae866e,_0xc79d25){return _0x3a3480(_0xae866e,_0xc79d25);},'VaQaA':function(_0x49c588,_0x48bfc4){return _0x49c588===_0x48bfc4;},'cuRyT':_0x301023(-0x6b,-0x9b,-0xf9,-0x2,0x3c),'MvczE':_0x15920e(-0x12c,-0x1c9,-0x1ba,-0x1da,-0xc5),'NxrSa':function(_0x35409c,_0x124e74){return _0x35409c===_0x124e74;},'CmSdp':_0x3df322(0x3e5,0x3ca,0x456,0x498,0x44e),'etaxf':_0x43621d(0x4e8,0x5b3,0x524,0x530,0x544),'BOIpX':_0x43621d(0x5ad,0x6db,0x6d8,0x6b0,0x643)};function _0x3df322(_0x8fb99e,_0x19ae1f,_0x32b620,_0x5b7877,_0x429250){return _0x5c7f(_0x429250-0x232,_0x5b7877);}function _0x301023(_0x1dce73,_0x12f2b4,_0x240519,_0x1eb681,_0x3eb6ca){return _0x5c7f(_0x1dce73- -0x2a7,_0x12f2b4);}var _0x5e5f91=!![];function _0x44811e(_0x55a351,_0x5206db,_0x25fdf8,_0x3be0ed,_0x13f5b3){return _0x5c7f(_0x25fdf8- -0xe5,_0x3be0ed);}function _0x43621d(_0x42a0d7,_0x2087a4,_0x2fcf42,_0x4b0d0a,_0x9f2fbf){return _0x5c7f(_0x9f2fbf-0x34e,_0x2fcf42);}return function(_0x335dd1,_0x3b278c){var _0x53cc16={'dJZYr':_0x115b0a[_0x171472(0x162,0xee,0x44,0xd1,0x4c)],'adMhr':_0x115b0a[_0x171472(0x12e,0xb0,0xa8,-0x2,0x137)],'aIQjW':function(_0x53b457,_0x5cb2b0){function _0x1afb39(_0x5ef0ee,_0x5e0be3,_0x49c7d5,_0x208a3e,_0x467bf2){return _0x50ab71(_0x5ef0ee-0x2ee,_0x5e0be3,_0x49c7d5-0x159,_0x208a3e-0x19a,_0x467bf2-0x19c);}return _0x115b0a[_0x1afb39(0x379,0x3ad,0x3d8,0x314,0x37d)](_0x53b457,_0x5cb2b0);},'HTjbV':_0x115b0a[_0x50ab71(0x7d,0x69,-0x18,0xf9,0x78)],'EwNys':function(_0x45e34b,_0x1fe1fa){function _0x19cba4(_0x2df025,_0x15cd02,_0x1f3f06,_0x16898b,_0xa66021){return _0x50ab71(_0x1f3f06-0x146,_0x2df025,_0x1f3f06-0x14f,_0x16898b-0x151,_0xa66021-0x55);}return _0x115b0a[_0x19cba4(0x1b9,0x1db,0x1aa,0x1ae,0x1ce)](_0x45e34b,_0x1fe1fa);},'FyUOP':_0x115b0a[_0xafb267(-0x6a,0x61,0x1e,-0x40,-0x8e)],'AAsfy':_0x115b0a[_0x5e2b86(-0x257,-0x1d9,-0x1d4,-0x205,-0x185)],'RJJQe':function(_0x53ef22){function _0x1b97dd(_0x1c2c40,_0x4942ee,_0x45320c,_0x28c600,_0x47e101){return _0x171472(_0x47e101,_0x28c600-0x458,_0x45320c-0x1d4,_0x28c600-0x150,_0x47e101-0x7a);}return _0x115b0a[_0x1b97dd(0x598,0x5cd,0x597,0x5c3,0x583)](_0x53ef22);},'evKQb':function(_0xf3abb7,_0x2325df,_0x1a3b7a){function _0xe62657(_0x3cd147,_0x4f36bf,_0x2c791f,_0x2841a8,_0x9a0b7e){return _0x2abce1(_0x3cd147-0x1bb,_0x4f36bf,_0x2841a8- -0x144,_0x2841a8-0xa3,_0x9a0b7e-0x194);}return _0x115b0a[_0xe62657(0x289,0x29e,0x1f0,0x278,0x1de)](_0xf3abb7,_0x2325df,_0x1a3b7a);},'KitYW':function(_0x1bc661,_0x4e847f){function _0x483a7e(_0x2e86c4,_0x3ea465,_0x450799,_0x1c528a,_0x55e018){return _0x171472(_0x450799,_0x3ea465-0x236,_0x450799-0x15,_0x1c528a-0x140,_0x55e018-0x15e);}return _0x115b0a[_0x483a7e(0x2b9,0x2f1,0x25a,0x368,0x39d)](_0x1bc661,_0x4e847f);},'wLimC':_0x115b0a[_0x5e2b86(-0x42,-0xa2,-0xa7,-0x12e,-0xcd)],'DrkfW':_0x115b0a[_0x2abce1(0x3db,0x3dd,0x3ae,0x37e,0x435)],'Zoxxw':function(_0x47ad43,_0x34f128){function _0x216e09(_0xa952b5,_0x1cf5b5,_0x419654,_0x4ab638,_0xfd38c6){return _0xafb267(_0xa952b5-0x19c,_0x419654,_0xa952b5- -0x16c,_0x4ab638-0xc9,_0xfd38c6-0xc1);}return _0x115b0a[_0x216e09(-0x1c1,-0x1a2,-0x1fa,-0x124,-0x11d)](_0x47ad43,_0x34f128);},'FFDrZ':_0x115b0a[_0x2abce1(0x3bb,0x3ed,0x375,0x38f,0x2c8)]};function _0x171472(_0xb3ac79,_0x7e1653,_0x1f8b75,_0x389bd9,_0x6056ed){return _0x43621d(_0xb3ac79-0x5d,_0x7e1653-0x197,_0xb3ac79,_0x389bd9-0x12b,_0x7e1653- -0x513);}function _0x2abce1(_0x685d48,_0x59721b,_0x53bc82,_0x4a3981,_0x2c8aa9){return _0x15920e(_0x53bc82-0x47b,_0x59721b-0xba,_0x53bc82-0x6b,_0x59721b,_0x2c8aa9-0xd7);}function _0xafb267(_0x19e90a,_0x386455,_0x543b91,_0x5297cd,_0x2a2bd1){return _0x3df322(_0x19e90a-0x1e2,_0x386455-0x194,_0x543b91-0xc8,_0x386455,_0x543b91- -0x49f);}function _0x5e2b86(_0x2393a7,_0x1e846c,_0x1679af,_0x141213,_0x2ada5b){return _0x3df322(_0x2393a7-0x1b0,_0x1e846c-0x11b,_0x1679af-0xb3,_0x2393a7,_0x1679af- -0x5fe);}function _0x50ab71(_0x16a98e,_0x2e84e7,_0x394fd5,_0x2b3e27,_0x5ad863){return _0x3df322(_0x16a98e-0xa4,_0x2e84e7-0x104,_0x394fd5-0x7e,_0x2e84e7,_0x16a98e- -0x475);}if(_0x115b0a[_0x50ab71(-0x2b,-0x4e,-0x5,-0x96,-0x58)](_0x115b0a[_0x5e2b86(-0x187,-0xb4,-0x10b,-0x149,-0xe3)],_0x115b0a[_0xafb267(0xdb,0x123,0x90,0xd6,0x101)])){var _0x23fd6e=_0x312c13[_0x50ab71(0xb1,0x92,0x135,0xc5,0x136)](_0x52da22,arguments);return _0x15e3dc=null,_0x23fd6e;}else{var _0x5143b9=_0x5e5f91?function(){var _0x19ed52={'RwSzh':_0x53cc16[_0x599f2d(0x1aa,0x223,0x222,0x1eb,0x28a)],'THSqn':_0x53cc16[_0x599f2d(0x1cc,0x123,0x1b7,0x183,0x241)],'UlxMG':function(_0x4f93e1,_0x82d7e8){function _0x5086dd(_0x3521b5,_0x1f3bac,_0x32dd52,_0x2b1918,_0x15c984){return _0x34e419(_0x3521b5-0x19d,_0x1f3bac- -0x6d7,_0x3521b5,_0x2b1918-0x141,_0x15c984-0x130);}return _0x53cc16[_0x5086dd(-0x13d,-0x165,-0x1fb,-0x173,-0x1bf)](_0x4f93e1,_0x82d7e8);},'EMXZc':_0x53cc16[_0x4cd6b7(0x646,0x6c7,0x6e3,0x793,0x78b)],'rRIPg':function(_0xee5bd8,_0x371359){function _0x49b0a5(_0x6a1dcf,_0x52c4c0,_0x1cb68f,_0x25d3ad,_0x32ffaa){return _0x599f2d(_0x6a1dcf-0x66,_0x32ffaa,_0x25d3ad-0x238,_0x25d3ad-0x176,_0x32ffaa-0x1b1);}return _0x53cc16[_0x49b0a5(0x35d,0x381,0x384,0x40d,0x472)](_0xee5bd8,_0x371359);},'YYodP':_0x53cc16[_0x34e419(0x575,0x5ce,0x58a,0x5a6,0x562)],'PPFDt':_0x53cc16[_0x4abc1d(0x66e,0x564,0x5c3,0x5ec,0x66e)],'VcuWg':function(_0x9c2b8e,_0x312cd4){function _0x89dd2c(_0x54c9f4,_0x58c860,_0x243a66,_0x534c85,_0x27d6eb){return _0x4cd6b7(_0x54c9f4-0xe7,_0x58c860-0xc5,_0x58c860- -0x4da,_0x534c85-0xba,_0x243a66);}return _0x53cc16[_0x89dd2c(0x154,0x122,0xbd,0x71,0x1a8)](_0x9c2b8e,_0x312cd4);},'KaQuF':function(_0x1a4c74){function _0xddf1ca(_0x1b5126,_0x301fab,_0x3b0adc,_0x59c26b,_0x14cdcb){return _0x599f2d(_0x1b5126-0x132,_0x14cdcb,_0x301fab- -0x95,_0x59c26b-0x55,_0x14cdcb-0x107);}return _0x53cc16[_0xddf1ca(0x0,0x7a,0x30,0x12,0x3c)](_0x1a4c74);},'KpveZ':function(_0x490a23,_0x179c9e,_0x3c07cd){function _0x49b436(_0x41e8ff,_0x5dc66e,_0x10af5f,_0x5f2101,_0x19953e){return _0x4abc1d(_0x41e8ff-0x5b,_0x5dc66e-0xa6,_0x19953e,_0x5f2101- -0x5f1,_0x19953e-0x17d);}return _0x53cc16[_0x49b436(0xb5,0x94,0x22,0x7b,0x9d)](_0x490a23,_0x179c9e,_0x3c07cd);}};function _0x4abc1d(_0x382de2,_0x258623,_0x368b87,_0xb229ae,_0x20d7d6){return _0x2abce1(_0x382de2-0x12e,_0x368b87,_0xb229ae-0x26b,_0xb229ae-0xc,_0x20d7d6-0x14d);}function _0x4cd6b7(_0x3b591d,_0x4199fd,_0x373a26,_0x39b999,_0x13abf3){return _0xafb267(_0x3b591d-0x38,_0x13abf3,_0x373a26-0x616,_0x39b999-0x1f3,_0x13abf3-0x8c);}function _0x599f2d(_0x5e2974,_0x381896,_0x330306,_0x3e4a22,_0x5ad0b2){return _0x2abce1(_0x5e2974-0xc8,_0x381896,_0x330306- -0x1cb,_0x3e4a22-0x35,_0x5ad0b2-0xe5);}function _0x50958c(_0x55a534,_0x443ff8,_0x2cc38a,_0x317499,_0x3066ed){return _0x50ab71(_0x3066ed-0x1a5,_0x55a534,_0x2cc38a-0xc1,_0x317499-0x38,_0x3066ed-0x172);}function _0x34e419(_0x59cf4e,_0x21999a,_0x3d70b7,_0x20dd1c,_0x5d6b0a){return _0x171472(_0x3d70b7,_0x21999a-0x4e4,_0x3d70b7-0x29,_0x20dd1c-0xe,_0x5d6b0a-0x138);}if(_0x53cc16[_0x4cd6b7(0x5fa,0x657,0x5c0,0x55b,0x5d1)](_0x53cc16[_0x50958c(0x28b,0x1da,0x234,0x1fc,0x248)],_0x53cc16[_0x50958c(0x1c5,0x275,0x273,0x211,0x201)]))_0x11538e=_0x404e0c;else{if(_0x3b278c){if(_0x53cc16[_0x599f2d(0x188,0x19d,0xfa,0x4a,0x6d)](_0x53cc16[_0x4abc1d(0x5a8,0x5b7,0x6c6,0x621,0x667)],_0x53cc16[_0x50958c(0x1ee,0x1c1,0x1de,0x2e2,0x22f)])){var _0x271f6e=_0x3b278c[_0x4abc1d(0x675,0x5cb,0x695,0x648,0x60a)](_0x335dd1,arguments);return _0x3b278c=null,_0x271f6e;}else{var _0x36ed52={'zeNBI':_0x19ed52[_0x599f2d(0x101,0x175,0x196,0x1ba,0x1cd)],'Eztcl':_0x19ed52[_0x34e419(0x67f,0x65f,0x6aa,0x6fe,0x5dc)],'zUWRM':function(_0x4d912f,_0x32ab90){function _0x15f735(_0x488ee6,_0xb9d203,_0x32e5d8,_0x145cf6,_0x358d7b){return _0x599f2d(_0x488ee6-0x159,_0x358d7b,_0x145cf6-0x2e2,_0x145cf6-0x100,_0x358d7b-0x183);}return _0x19ed52[_0x15f735(0x4e8,0x3c7,0x42b,0x456,0x3ff)](_0x4d912f,_0x32ab90);},'UEklj':_0x19ed52[_0x4cd6b7(0x658,0x68a,0x5e4,0x645,0x63f)],'WLdBk':function(_0x29e4a8,_0x2ed84a){function _0x41ecb0(_0x5a5c3e,_0x601c86,_0x1cf93c,_0x29cf07,_0x269ad4){return _0x34e419(_0x5a5c3e-0x63,_0x1cf93c- -0x131,_0x269ad4,_0x29cf07-0x1ce,_0x269ad4-0x129);}return _0x19ed52[_0x41ecb0(0x434,0x4fa,0x480,0x4fa,0x463)](_0x29e4a8,_0x2ed84a);},'nGuju':_0x19ed52[_0x4abc1d(0x6ce,0x715,0x661,0x666,0x650)],'guFdP':_0x19ed52[_0x4cd6b7(0x69f,0x636,0x6c9,0x6a4,0x61d)],'hcWkN':function(_0x3dc792,_0x119f89){function _0x751f60(_0xf49043,_0x2d5641,_0x2c2ad3,_0x398731,_0x205f33){return _0x4cd6b7(_0xf49043-0x67,_0x2d5641-0x176,_0x2c2ad3- -0x1ac,_0x398731-0x1a1,_0x205f33);}return _0x19ed52[_0x751f60(0x40d,0x490,0x465,0x4de,0x42a)](_0x3dc792,_0x119f89);},'qqbSv':function(_0x95b71f){function _0x10c0cb(_0xa3eed5,_0x262967,_0x1ef5b8,_0x1ffeac,_0x1858e3){return _0x4abc1d(_0xa3eed5-0x1f4,_0x262967-0x6c,_0x1858e3,_0x262967- -0x13d,_0x1858e3-0xe1);}return _0x19ed52[_0x10c0cb(0x4be,0x4c4,0x52a,0x449,0x558)](_0x95b71f);}};_0x19ed52[_0x50958c(0x10e,0x118,0x1a6,0x1f1,0x19b)](_0x1eded1,this,function(){function _0x2c989d(_0x17f49d,_0x2a2258,_0xbc51e0,_0x2eb7f0,_0x1eb36a){return _0x34e419(_0x17f49d-0xff,_0x2a2258- -0x40,_0xbc51e0,_0x2eb7f0-0x1e0,_0x1eb36a-0x100);}function _0x4ae57f(_0x14d4bd,_0x58e369,_0x4e6c33,_0xa74a0e,_0x1796b8){return _0x4abc1d(_0x14d4bd-0x1cb,_0x58e369-0x140,_0x14d4bd,_0xa74a0e-0x4e,_0x1796b8-0x56);}function _0x303495(_0xb37570,_0x442fa1,_0x545d28,_0x51daab,_0x1c785f){return _0x599f2d(_0xb37570-0x116,_0xb37570,_0x442fa1- -0x2a1,_0x51daab-0xaf,_0x1c785f-0x1cd);}var _0x206259=new _0x5f7bac(_0x36ed52[_0x187d28(0x580,0x515,0x5b0,0x54f,0x4d9)]),_0x4331f0=new _0x45b895(_0x36ed52[_0x187d28(0x58e,0x5f1,0x579,0x5d7,0x55c)],'i');function _0x35a3f5(_0x134035,_0x46f901,_0x436063,_0x37b675,_0x2491f6){return _0x4cd6b7(_0x134035-0x163,_0x46f901-0xc2,_0x436063- -0x781,_0x37b675-0xf1,_0x37b675);}var _0x2c17c6=_0x36ed52[_0x187d28(0x6af,0x6a2,0x60e,0x6a0,0x746)](_0x45be4b,_0x36ed52[_0x35a3f5(-0x1f5,-0x149,-0x1f9,-0x14a,-0x1fe)]);function _0x187d28(_0x57365b,_0x71e8e7,_0x46d89d,_0x3b6410,_0x3b92a5){return _0x599f2d(_0x57365b-0xe9,_0x46d89d,_0x3b6410-0x459,_0x3b6410-0x13c,_0x3b92a5-0x7d);}!_0x206259[_0x4ae57f(0x5ca,0x5a9,0x5b2,0x61c,0x589)](_0x36ed52[_0x4ae57f(0x62f,0x5a6,0x58c,0x630,0x6b7)](_0x2c17c6,_0x36ed52[_0x303495(-0x102,-0xcf,-0x134,-0x5e,-0x177)]))||!_0x4331f0[_0x2c989d(0x50f,0x559,0x59f,0x52f,0x538)](_0x36ed52[_0x303495(-0x15a,-0xf5,-0x65,-0x171,-0xa2)](_0x2c17c6,_0x36ed52[_0x303495(-0x1a2,-0x116,-0x19d,-0xb7,-0x17c)]))?_0x36ed52[_0x303495(-0x229,-0x185,-0x194,-0x187,-0x192)](_0x2c17c6,'0'):_0x36ed52[_0x4ae57f(0x63c,0x67b,0x5e9,0x5ce,0x586)](_0x3fc7fc);})();}}}}:function(){};return _0x5e5f91=![],_0x5143b9;}};}();function _0x5cbfe9(_0x383999,_0x7e14a6,_0x3e663d,_0x3fe8fa,_0x505e8e){return _0x5c7f(_0x7e14a6- -0x3d3,_0x3fe8fa);}var _0x30c670=_0x2645c9(this,function(){function _0x233e1e(_0x39418f,_0x59e54c,_0x3401b9,_0x423493,_0x4a510a){return _0x5c7f(_0x4a510a- -0x2fb,_0x59e54c);}function _0x29b07e(_0xbdb6f9,_0x221732,_0x13f7fc,_0x4a5f86,_0x2487cd){return _0x5c7f(_0x2487cd- -0xdc,_0x221732);}function _0x42a5a4(_0x4fa8cb,_0x161c64,_0x39a9ce,_0x191e5d,_0x3a040e){return _0x5c7f(_0x191e5d-0x2f5,_0x3a040e);}function _0x34e62b(_0x801940,_0x11fd4b,_0x1b6e1c,_0x5472cb,_0xfad0e8){return _0x5c7f(_0x1b6e1c-0x170,_0xfad0e8);}var _0x1b888e={'qpkAP':function(_0x10cf35,_0x237cab){return _0x10cf35(_0x237cab);},'YZDVm':function(_0x4959c4,_0x59603d){return _0x4959c4+_0x59603d;},'PEgLV':function(_0x446b8f,_0x7a33cd){return _0x446b8f+_0x7a33cd;},'POShT':_0x29b07e(0x168,0x24b,0x1ae,0x181,0x1ce)+_0x29b07e(0x15f,0xf3,0x1f1,0x177,0x13f)+_0x2e2ce1(-0xfd,-0x193,-0x19c,-0x22c,-0x220)+_0x42a5a4(0x5ab,0x5e5,0x623,0x633,0x6b2),'owMRJ':_0x34e62b(0x4f9,0x512,0x4a1,0x546,0x4b8)+_0x2e2ce1(-0x1b3,-0x1bb,-0x164,-0x125,-0xdb)+_0x34e62b(0x321,0x327,0x3cb,0x370,0x34c)+_0x34e62b(0x2de,0x310,0x384,0x31f,0x3c1)+_0x233e1e(-0x16a,-0x101,-0xaf,-0x96,-0xc8)+_0x29b07e(0x2b7,0x1b7,0x261,0x303,0x25d)+'\x20)','XErbU':function(_0x34c6d5,_0x4af464){return _0x34c6d5===_0x4af464;},'cjsnF':_0x2e2ce1(-0xb1,-0xf0,-0x76,-0x4a,-0xfb),'kElFv':_0x29b07e(0x1db,0x1b5,0x241,0x14b,0x1ce)+_0x2e2ce1(0x4e,0x12,-0x5a,-0xaf,-0x15)+_0x233e1e(-0x1b,0x4b,-0xf4,-0x3c,-0x60)+_0x233e1e(-0x140,-0xa5,-0x144,-0x157,-0xa6)+'/','CjQaI':_0x34e62b(0x454,0x463,0x476,0x3d0,0x45c)+_0x42a5a4(0x527,0x53c,0x4be,0x53a,0x5bf)+_0x42a5a4(0x53f,0x62e,0x543,0x5d7,0x549)+_0x42a5a4(0x5c2,0x5a8,0x516,0x5be,0x5b0)+_0x29b07e(0xe9,0xdf,0x98,0xc1,0x113),'rwTFt':function(_0x5749b6){return _0x5749b6();}};function _0x2e2ce1(_0x571f44,_0x1d06ca,_0x478c26,_0x31f749,_0x37629f){return _0x5c7f(_0x478c26- -0x376,_0x31f749);}var _0x15e262=function(){function _0x530894(_0x37f743,_0x305aec,_0x7f6159,_0x4678b8,_0x1cf819){return _0x29b07e(_0x37f743-0x15d,_0x37f743,_0x7f6159-0xa6,_0x4678b8-0x182,_0x1cf819-0x1a8);}function _0x401b(_0x139a2f,_0x148924,_0x43fbb6,_0x2c9be5,_0xd2d9ed){return _0x233e1e(_0x139a2f-0x20,_0x139a2f,_0x43fbb6-0x1be,_0x2c9be5-0x1e9,_0x43fbb6-0x418);}function _0x3baca7(_0x1e4aed,_0x278687,_0x51c223,_0x55e311,_0x3ef53a){return _0x42a5a4(_0x1e4aed-0x21,_0x278687-0x1e3,_0x51c223-0x9b,_0x3ef53a- -0x453,_0x51c223);}function _0x2b2e3e(_0x2eed76,_0x3a1cf8,_0x3a5a35,_0x4cb6b6,_0x2e3eb6){return _0x42a5a4(_0x2eed76-0x1aa,_0x3a1cf8-0x12b,_0x3a5a35-0x1d4,_0x3a1cf8- -0x54d,_0x3a5a35);}function _0x2e3d82(_0x268885,_0x235d07,_0x85456b,_0x58ba78,_0x5a59e1){return _0x29b07e(_0x268885-0x6f,_0x58ba78,_0x85456b-0x32,_0x58ba78-0xe2,_0x268885-0x2a);}if(_0x1b888e[_0x2e3d82(0x284,0x2b1,0x236,0x1d5,0x244)](_0x1b888e[_0x530894(0x42c,0x3fa,0x3c5,0x445,0x3e2)],_0x1b888e[_0x3baca7(0x222,0x184,0x16e,0x18e,0x1b8)])){var _0x3189ea=_0x15e262[_0x2e3d82(0x246,0x23b,0x1d8,0x221,0x2e6)+_0x530894(0x313,0x3a1,0x303,0x2ee,0x324)+'r'](_0x1b888e[_0x3baca7(0x103,0x179,0x1af,0x21b,0x189)])()[_0x2b2e3e(0xfe,0xa0,0x9e,0xe6,0x102)+_0x530894(0x3a5,0x28e,0x29f,0x2c6,0x324)+'r'](_0x1b888e[_0x2b2e3e(0x29,0x9a,0x108,0xf2,0x23)]);return!_0x3189ea[_0x530894(0x2bb,0x34a,0x3e3,0x2ac,0x346)](_0x30c670);}else _0x1432a1=_0x1b888e[_0x530894(0x249,0x235,0x365,0x2aa,0x2ea)](_0x28c751,_0x1b888e[_0x530894(0x3c6,0x3bb,0x2ef,0x388,0x374)](_0x1b888e[_0x2e3d82(0x168,0xb5,0x157,0x10f,0x1bd)](_0x1b888e[_0x2e3d82(0x22f,0x252,0x1b1,0x2dd,0x28f)],_0x1b888e[_0x2b2e3e(0x2e,0xce,0x183,0x63,0x62)]),');'))();};return _0x1b888e[_0x42a5a4(0x521,0x5d2,0x5d3,0x55c,0x503)](_0x15e262);});_0x30c670();var _0x46b313=function(){function _0x2fea29(_0x452a39,_0x1374ea,_0xd1c6ea,_0xedfd25,_0x243eb5){return _0x5c7f(_0x1374ea- -0x29,_0x243eb5);}var _0x478f98={'oyEEe':function(_0x552136){return _0x552136();},'ItMHE':function(_0x580187,_0x4cf3c3){return _0x580187===_0x4cf3c3;},'TZEFq':_0xff0561(0x2a0,0x346,0x255,0x2f4,0x386),'xCUTF':_0xff0561(0x3a7,0x33c,0x39a,0x350,0x32d),'MDYiL':function(_0x24acd7,_0x5c7e89){return _0x24acd7!==_0x5c7e89;},'BdNsw':_0x2fea29(0x230,0x29f,0x2dc,0x2b6,0x20d),'BkVsO':_0xff0561(0x22f,0x223,0x266,0x269,0x305),'dGJgH':function(_0x507448,_0x1d9e13){return _0x507448(_0x1d9e13);},'Kmzrw':function(_0x39389e,_0x1df259){return _0x39389e===_0x1df259;},'QADmT':_0x2fea29(0x230,0x227,0x2a6,0x284,0x281)};function _0x59261c(_0xeeeda3,_0x27db4d,_0x37b31d,_0x147173,_0x14d999){return _0x5c7f(_0xeeeda3- -0x10e,_0x27db4d);}function _0x4e2fe4(_0x195af5,_0x1e5c8d,_0x1854c7,_0x46406f,_0x1333aa){return _0x5c7f(_0x1854c7- -0x29b,_0x1e5c8d);}function _0x5cbb69(_0x1f7593,_0x2edc00,_0x3f71f5,_0x5ebe14,_0x10c2c3){return _0x5c7f(_0x2edc00- -0x97,_0x1f7593);}var _0x46bdf6=!![];function _0xff0561(_0x3cfe27,_0x4693dd,_0x2923a4,_0x38be03,_0x246b72){return _0x5c7f(_0x38be03-0x70,_0x4693dd);}return function(_0x47b8dc,_0x53845b){var _0x167517={'kYiha':function(_0x1eb60c,_0x3c5477){function _0x444fe8(_0x21729b,_0x2ccc31,_0xcda68e,_0x2f786a,_0x207f02){return _0x5c7f(_0x207f02- -0xa7,_0xcda68e);}return _0x478f98[_0x444fe8(0x211,0x1f0,0x169,0x257,0x21b)](_0x1eb60c,_0x3c5477);}};function _0x235fca(_0x3c8692,_0x10736c,_0x5467c3,_0x1edf12,_0x5770f4){return _0x5cbb69(_0x5770f4,_0x10736c-0x2f,_0x5467c3-0x18a,_0x1edf12-0xd5,_0x5770f4-0x87);}function _0x10049f(_0x3b3a4f,_0x3b863e,_0x134396,_0x492c87,_0x398b14){return _0x2fea29(_0x3b3a4f-0xe4,_0x492c87-0x39f,_0x134396-0x159,_0x492c87-0x1e1,_0x134396);}function _0x59d4ac(_0x5e763f,_0xb4548d,_0xa3d092,_0x5b987f,_0x377f88){return _0x2fea29(_0x5e763f-0xb1,_0xa3d092-0x195,_0xa3d092-0x176,_0x5b987f-0x150,_0x5e763f);}function _0x5c75bf(_0x2c43e9,_0x47d107,_0x1cd912,_0x52ef67,_0x516cf0){return _0x5cbb69(_0x1cd912,_0x52ef67-0x1cf,_0x1cd912-0x158,_0x52ef67-0x164,_0x516cf0-0x1c2);}if(_0x478f98[_0x59d4ac(0x2af,0x2dd,0x34d,0x38d,0x2cc)](_0x478f98[_0x235fca(0x18f,0x1a5,0xfd,0x1bf,0x17c)],_0x478f98[_0x10049f(0x5fb,0x5b5,0x562,0x583,0x5e3)])){var _0xd92e9=_0x46bdf6?function(){function _0x56791a(_0x1b36df,_0x379901,_0x5f24f7,_0x40b8d6,_0x44d2b1){return _0x59d4ac(_0x379901,_0x379901-0x25,_0x44d2b1-0xdc,_0x40b8d6-0xa0,_0x44d2b1-0x10b);}function _0x2d7335(_0xc2b224,_0x16e6b,_0x28fd1d,_0x83d225,_0x44f1d7){return _0x59d4ac(_0xc2b224,_0x16e6b-0x1a3,_0x83d225- -0x176,_0x83d225-0x122,_0x44f1d7-0x140);}function _0x4dbd31(_0x3b38c6,_0x34a14f,_0x553024,_0x3df6fa,_0x424da9){return _0x59d4ac(_0x34a14f,_0x34a14f-0x8b,_0x3b38c6-0xf,_0x3df6fa-0x1b6,_0x424da9-0x1d7);}function _0x25a553(_0x28b5e3,_0x25c49b,_0xb9a8f4,_0x2867dc,_0xd261c7){return _0x59d4ac(_0xd261c7,_0x25c49b-0x191,_0x25c49b- -0x37e,_0x2867dc-0x124,_0xd261c7-0xe3);}function _0x112ce0(_0x46b943,_0x52b0eb,_0x4fb7f2,_0x265afd,_0x48bc8d){return _0x235fca(_0x46b943-0x3f,_0x48bc8d- -0x242,_0x4fb7f2-0x7f,_0x265afd-0xcf,_0x52b0eb);}var _0x28f42e={'MAbTV':function(_0x313740){function _0x58c30d(_0x4d7a99,_0x5bf3e0,_0x5c5dea,_0x21533e,_0x1cef77){return _0x5c7f(_0x4d7a99- -0x2cd,_0x1cef77);}return _0x478f98[_0x58c30d(-0x6e,-0xbf,-0x5e,-0x4,-0x9b)](_0x313740);}};if(_0x478f98[_0x56791a(0x5da,0x5e3,0x53d,0x4f2,0x55b)](_0x478f98[_0x25a553(-0x68,0x2b,0x2e,0xbb,0x47)],_0x478f98[_0x25a553(0x8a,0xcb,0x1e,0x3a,0xcd)]))_0x28f42e[_0x2d7335(0x274,0x20a,0x26a,0x269,0x288)](_0x591519);else{if(_0x53845b){if(_0x478f98[_0x112ce0(0x18,-0x6c,-0x1e,-0x38,0x39)](_0x478f98[_0x56791a(0x494,0x3ed,0x42f,0x3af,0x436)],_0x478f98[_0x25a553(0x82,0xc3,0x4a,0xf3,0xf1)])){var _0x423b13=_0x53845b[_0x4dbd31(0x46f,0x40a,0x41a,0x45e,0x3ca)](_0x47b8dc,arguments);return _0x53845b=null,_0x423b13;}else _0x167517[_0x112ce0(0x10b,0x19,0xe9,0x89,0x92)](_0x13c786,'0');}}}:function(){};return _0x46bdf6=![],_0xd92e9;}else{var _0x2dcbe1=_0x56f84f[_0x235fca(0x1e7,0x28c,0x32e,0x1f3,0x318)](_0x5cd198,arguments);return _0x32385b=null,_0x2dcbe1;}};}();(function(){function _0x37ccb9(_0x11d431,_0x458477,_0x453eaa,_0x2ca3dc,_0x160442){return _0x5c7f(_0x160442- -0x177,_0x453eaa);}function _0x13411f(_0xe8fe,_0x24ac94,_0x2c65f7,_0x170ef3,_0x10382b){return _0x5c7f(_0x10382b- -0x3d3,_0xe8fe);}function _0x2f14c7(_0x3fe473,_0x2c4a64,_0x1a901d,_0x2e8f21,_0x4fd9ea){return _0x5c7f(_0x4fd9ea-0x73,_0x1a901d);}function _0x2001b0(_0x4105a8,_0x4093cb,_0x3f2ead,_0x4fcf49,_0x198bad){return _0x5c7f(_0x198bad-0x34,_0x4fcf49);}var _0x249f78={'esckr':_0x37ccb9(0xed,0x71,0xf4,0x100,0xf8)+_0x37ccb9(0x1f9,0x267,0x232,0x1c1,0x1b4)+'3','YgmHD':_0x1aa135(0x550,0x5a5,0x5af,0x53d,0x493)+_0x1aa135(0x3d1,0x424,0x3c6,0x416,0x367)+_0x2001b0(0x1c4,0x2ab,0x2e3,0x208,0x235)+')','GdPAG':_0x37ccb9(0x1bb,0x141,0xd0,0x173,0x143)+_0x1aa135(0x43a,0x438,0x426,0x41b,0x3d9)+_0x1aa135(0x4e4,0x4f1,0x5db,0x53a,0x535)+_0x37ccb9(0x33,0x75,0x1e,0xc4,0x9f)+_0x2001b0(0x318,0x28d,0x246,0x28e,0x2b6)+_0x2001b0(0x2b1,0x264,0x2c9,0x2e5,0x274)+_0x2001b0(0x35c,0x391,0x318,0x28e,0x337),'WpqgL':function(_0x479284,_0xe62e17){return _0x479284(_0xe62e17);},'BqhLR':_0x37ccb9(0xab,0xb9,0x71,0xf8,0xb6),'EPirR':function(_0x37310c,_0x14b95a){return _0x37310c+_0x14b95a;},'KHrin':_0x13411f(-0x10f,-0xba,-0x48,-0x15e,-0xe6),'nTuyJ':_0x13411f(-0x109,-0x20d,-0x1ad,-0xcf,-0x162),'GeRKw':function(_0x24c831,_0x509dcd){return _0x24c831(_0x509dcd);},'NLYEU':function(_0x3a276b){return _0x3a276b();},'iKjqY':function(_0x530da5,_0x4d6323){return _0x530da5===_0x4d6323;},'gFIPG':_0x13411f(-0x187,-0x10a,-0xfa,-0x5a,-0xf5),'rljGQ':_0x2001b0(0x2b7,0x245,0x20a,0x176,0x21a),'AnhkU':function(_0x535774,_0x5028e9){return _0x535774!==_0x5028e9;},'fRnIM':_0x13411f(-0xc1,-0x133,-0x144,-0x13c,-0x123),'RQupA':function(_0x49e950,_0x4925f6){return _0x49e950(_0x4925f6);},'uboXZ':function(_0x3a969a,_0x785f9c){return _0x3a969a===_0x785f9c;},'rUwRv':_0x2f14c7(0x1ee,0x2e9,0x1c3,0x2e7,0x275),'XesLO':function(_0x4330f4,_0x26f28e,_0x540ae7){return _0x4330f4(_0x26f28e,_0x540ae7);}};function _0x1aa135(_0x2ff32e,_0x471499,_0x95f150,_0x2d2b2f,_0x5e4b83){return _0x5c7f(_0x2d2b2f-0x229,_0x2ff32e);}_0x249f78[_0x1aa135(0x46a,0x501,0x4d5,0x44e,0x454)](_0x46b313,this,function(){function _0x367a47(_0x89c85d,_0x2c421e,_0x34db1b,_0x3fd079,_0x1c9290){return _0x37ccb9(_0x89c85d-0x40,_0x2c421e-0x182,_0x89c85d,_0x3fd079-0x1c3,_0x2c421e- -0x1ec);}function _0x109e8e(_0x5b6889,_0x4e550a,_0x380dc4,_0x4496c2,_0x16ccdc){return _0x13411f(_0x4496c2,_0x4e550a-0x1cc,_0x380dc4-0x17f,_0x4496c2-0x191,_0x5b6889-0x209);}function _0x1af487(_0x20266b,_0x309097,_0x27efef,_0x121a61,_0x10c360){return _0x2001b0(_0x20266b-0x1bd,_0x309097-0x1a8,_0x27efef-0x1e7,_0x20266b,_0x27efef-0x1fe);}var _0x566a55={'GmEvV':_0x249f78[_0x367a47(-0x6,-0x98,0x13,-0x9e,-0xd9)],'wvTer':_0x249f78[_0x367a47(-0xf7,-0x11d,-0xf4,-0x163,-0xf8)],'hEnaT':function(_0x381636,_0x478987){function _0x6a68bb(_0x12986e,_0x3fde4a,_0x280fd0,_0x43c4c2,_0x1b6837){return _0x367a47(_0x12986e,_0x3fde4a-0x3,_0x280fd0-0x154,_0x43c4c2-0x177,_0x1b6837-0x23);}return _0x249f78[_0x6a68bb(-0x48,-0xb5,-0x13,-0x106,-0x140)](_0x381636,_0x478987);},'fOOte':_0x249f78[_0x367a47(0x27,-0x72,-0x8c,-0xbb,-0x33)],'UnMOU':function(_0x5f364c,_0xd04af0){function _0x150081(_0x5b3bbf,_0x5d59e4,_0x103016,_0x330606,_0x4c3d19){return _0x367a47(_0x5d59e4,_0x103016-0x433,_0x103016-0x5e,_0x330606-0x194,_0x4c3d19-0x8e);}return _0x249f78[_0x150081(0x39f,0x47d,0x40b,0x425,0x3ba)](_0x5f364c,_0xd04af0);},'rawrt':_0x249f78[_0x367a47(-0x157,-0x173,-0x200,-0x1cd,-0xf8)],'PLULe':function(_0xe27b2b,_0x3e920c){function _0x160502(_0x203224,_0x2e93d1,_0x390aa6,_0x5aaf30,_0x4552c4){return _0x109e8e(_0x390aa6-0x552,_0x2e93d1-0x51,_0x390aa6-0xd0,_0x2e93d1,_0x4552c4-0xda);}return _0x249f78[_0x160502(0x6ca,0x68d,0x6c3,0x739,0x6d9)](_0xe27b2b,_0x3e920c);},'uNRzX':_0x249f78[_0x367a47(-0x1c2,-0x120,-0x113,-0x131,-0x136)],'oJKqO':function(_0x9fb9a,_0x4d20e2){function _0x179363(_0x3c8c48,_0x48edda,_0x352c1e,_0x470fd9,_0x10a8d8){return _0x1af487(_0x3c8c48,_0x48edda-0x1f2,_0x48edda-0x13d,_0x470fd9-0x181,_0x10a8d8-0xa);}return _0x249f78[_0x179363(0x5d2,0x628,0x675,0x61e,0x681)](_0x9fb9a,_0x4d20e2);},'jnVuz':function(_0x41fdfc){function _0x5183d1(_0x3506ed,_0x27f20a,_0x502a02,_0x7c14d1,_0x3ed57b){return _0x260ce9(_0x3506ed-0xd6,_0x3ed57b- -0x2c5,_0x502a02-0x29,_0x502a02,_0x3ed57b-0x14a);}return _0x249f78[_0x5183d1(0x216,0x1bf,0x2d0,0x25a,0x253)](_0x41fdfc);}};function _0xcf0527(_0x1a30f2,_0x18c729,_0x3417ca,_0x30fde,_0x34d7f8){return _0x13411f(_0x30fde,_0x18c729-0x4a,_0x3417ca-0x63,_0x30fde-0x73,_0x3417ca-0x2f8);}function _0x260ce9(_0x71bf15,_0x200d3e,_0x153a9f,_0x104a40,_0x1dced9){return _0x1aa135(_0x104a40,_0x200d3e-0x158,_0x153a9f-0x166,_0x200d3e- -0x21,_0x1dced9-0x105);}if(_0x249f78[_0xcf0527(0x2e0,0x20c,0x257,0x2d0,0x272)](_0x249f78[_0x367a47(-0xe9,-0xe0,-0x127,-0x105,-0xb2)],_0x249f78[_0x367a47(-0x195,-0x13d,-0x17a,-0xb8,-0x17f)])){var _0x56aeaa=_0x18645a?function(){function _0x6ffefa(_0x27e110,_0x10fb3f,_0x4fd3f4,_0xc46ee2,_0x3a11c4){return _0x109e8e(_0x4fd3f4-0x281,_0x10fb3f-0x17d,_0x4fd3f4-0xd2,_0x3a11c4,_0x3a11c4-0x106);}if(_0x2e6ab9){var _0x2ebc1c=_0x1ab41b[_0x6ffefa(0x44c,0x309,0x3ab,0x3af,0x375)](_0x499d52,arguments);return _0x35eaec=null,_0x2ebc1c;}}:function(){};return _0x8a92fb=![],_0x56aeaa;}else{var _0x2f9dcd=new RegExp(_0x249f78[_0x1af487(0x598,0x4d8,0x4fd,0x55d,0x4ff)]),_0x1bc9e9=new RegExp(_0x249f78[_0xcf0527(0x156,0x1af,0x16b,0x14a,0x211)],'i'),_0x378d70=_0x249f78[_0x1af487(0x48d,0x48a,0x4eb,0x4b2,0x571)](_0x5dbb1e,_0x249f78[_0x1af487(0x55f,0x5cf,0x523,0x4c9,0x53a)]);if(!_0x2f9dcd[_0x260ce9(0x4d8,0x482,0x3cf,0x409,0x4df)](_0x249f78[_0x367a47(-0xc1,-0x28,-0x9c,-0x7a,-0x3d)](_0x378d70,_0x249f78[_0x109e8e(0x26,-0x37,-0x9,0x38,0x66)]))||!_0x1bc9e9[_0x367a47(-0x4b,-0xe9,-0x164,-0x3e,-0x54)](_0x249f78[_0x367a47(-0x15,-0x28,0x53,-0x99,-0x6f)](_0x378d70,_0x249f78[_0xcf0527(0x1a0,0xbc,0x168,0x127,0x1e3)]))){if(_0x249f78[_0xcf0527(0x214,0x171,0x1ad,0x16a,0x115)](_0x249f78[_0xcf0527(0x275,0x16c,0x211,0x202,0x253)],_0x249f78[_0x1af487(0x52f,0x47c,0x51e,0x4ee,0x485)])){var _0x55d6e6=new _0x2b42e5(_0x566a55[_0x367a47(-0x70,-0xe6,-0xbb,-0xc2,-0xb7)]),_0x2e3469=new _0x3deb8a(_0x566a55[_0x260ce9(0x50e,0x517,0x4b6,0x564,0x481)],'i'),_0x5980f5=_0x566a55[_0x367a47(-0xa0,-0xd4,-0x58,-0x99,-0x122)](_0x2947b9,_0x566a55[_0x109e8e(0x97,0x24,0xe4,0xb,-0x14)]);!_0x55d6e6[_0xcf0527(0xfa,0x205,0x19f,0x1fa,0x19f)](_0x566a55[_0xcf0527(0xd2,0x163,0x159,0x189,0x165)](_0x5980f5,_0x566a55[_0xcf0527(0x1ae,0x18e,0x1cb,0x161,0x252)]))||!_0x2e3469[_0xcf0527(0x149,0x12f,0x19f,0x139,0x225)](_0x566a55[_0x260ce9(0x5a9,0x4f7,0x4e9,0x49c,0x4ea)](_0x5980f5,_0x566a55[_0x367a47(-0x1e4,-0x15a,-0x1e7,-0xbd,-0x127)]))?_0x566a55[_0x260ce9(0x470,0x4b6,0x4f6,0x513,0x4ba)](_0x5980f5,'0'):_0x566a55[_0x260ce9(0x442,0x42b,0x3b0,0x4b6,0x3d0)](_0x4f98e4);}else _0x249f78[_0x260ce9(0x566,0x4e4,0x4df,0x530,0x480)](_0x378d70,'0');}else{if(_0x249f78[_0x260ce9(0x4a0,0x4d9,0x545,0x508,0x53f)](_0x249f78[_0x109e8e(0x58,-0x26,0xb4,0x107,0x92)],_0x249f78[_0x367a47(-0xcd,-0x141,-0x1d3,-0x15f,-0xbe)]))_0x249f78[_0xcf0527(0x260,0x246,0x235,0x188,0x213)](_0x5dbb1e);else{var _0x1ae9f0=_0x249f78[_0x260ce9(0x3a7,0x41d,0x447,0x489,0x414)][_0x367a47(-0xb6,-0x15d,-0x1cf,-0x14a,-0x137)]('|'),_0x5d08f6=-0x21f4+-0x2142+-0x219b*-0x2;while(!![]){switch(_0x1ae9f0[_0x5d08f6++]){case'0':_0x377d27[_0x109e8e(0x13e,0x156,0x139,0xe1,0x1d9)+_0x260ce9(0x485,0x4c0,0x54c,0x427,0x45b)]=_0x5574c8[_0x260ce9(0x5b5,0x510,0x4cd,0x47f,0x461)+_0xcf0527(0x1a5,0x147,0x1dd,0x1f3,0x247)][_0x1af487(0x541,0x508,0x56f,0x5d3,0x5b6)](_0x5574c8);continue;case'1':var _0x443571=_0x23ab0a[_0x1f95b4];continue;case'2':var _0x377d27=_0x503ad1[_0x260ce9(0x555,0x500,0x56c,0x470,0x4f6)+_0xcf0527(0x13f,0x21a,0x17d,0x12f,0x1c8)+'r'][_0x367a47(-0x4c,-0x9d,-0x2b,-0x93,-0xa4)+_0xcf0527(0xc6,0x53,0x108,0x74,0x105)][_0xcf0527(0x2b6,0x1cc,0x262,0x210,0x27d)](_0x20d825);continue;case'3':_0x3c7ffa[_0x443571]=_0x377d27;continue;case'4':var _0x5574c8=_0x2a3c76[_0x443571]||_0x377d27;continue;case'5':_0x377d27[_0x109e8e(0x81,0xa2,0xad,0xcb,0xb1)+_0x367a47(-0x6c,-0xa5,-0x8d,-0x50,-0xab)]=_0x2c7edc[_0xcf0527(0x1b2,0x234,0x262,0x270,0x1bd)](_0x2914ac);continue;}break;}}}}})();}());var _0xc52859=function(){var _0x2ec990={'mWqPp':function(_0x43cd16,_0x35a368){return _0x43cd16+_0x35a368;},'IRPFO':_0x2e155d(-0xa,0xbd,0x2a,0x22,-0x69),'hXxce':_0x2e155d(0x64,0x78,-0x47,-0x27,-0x37),'GBupf':_0x38c982(0x40a,0x37e,0x43e,0x41c,0x39e)+_0x2e155d(0x44,-0xd,-0x11,0x23,0xb0)+'t','AjoGG':function(_0xd8956d,_0x18be3e){return _0xd8956d===_0x18be3e;},'flzxP':_0x35bff9(-0x16,0x96,0x6c,0x45,0x37),'PNWkP':_0x2e155d(0xc6,0x66,0x51,0xe2,0xfd),'qIbCD':function(_0x4c9a03,_0x50fb99){return _0x4c9a03===_0x50fb99;},'KPjxm':_0x4467d7(0x2d6,0x26f,0x292,0x292,0x20e),'aPsEH':function(_0x249331,_0x5dc3e9){return _0x249331(_0x5dc3e9);},'LCGeA':_0x4467d7(0x2db,0x33c,0x36c,0x302,0x354)+_0x38c982(0x27d,0x2ad,0x2f7,0x3a0,0x306)+_0x5ef175(-0x12c,-0x158,-0x3c,-0x60,-0xc8),'RBFOY':_0x5ef175(-0x1e0,-0x1db,-0x184,-0x1cb,-0x1d0)+'er','gYhjM':function(_0x2bd396,_0x14cbd0){return _0x2bd396!==_0x14cbd0;},'NwbPt':_0x35bff9(-0xed,-0xab,-0xbe,-0xf0,-0x19a),'pTdfg':_0x38c982(0x29d,0x28d,0x2b4,0x31d,0x2cf)};function _0x2e155d(_0x5b41dd,_0x5e845e,_0x22c1a7,_0x14457b,_0xbdb60a){return _0x5c7f(_0x14457b- -0x207,_0x22c1a7);}function _0x35bff9(_0xa8b73a,_0x29ad71,_0x4bd52a,_0x368afa,_0x1e2a35){return _0x5c7f(_0xa8b73a- -0x2c8,_0x29ad71);}function _0x38c982(_0x571bf1,_0x1aebe2,_0x1c8272,_0x280152,_0x593989){return _0x5c7f(_0x593989-0x6a,_0x571bf1);}function _0x4467d7(_0x5e80ad,_0x3e7f37,_0x2badc7,_0x428923,_0x451e30){return _0x5c7f(_0x3e7f37-0x3e,_0x5e80ad);}var _0x1e9b44=!![];function _0x5ef175(_0x46f33f,_0x1fcf26,_0x2a58bd,_0x4d6519,_0x224325){return _0x5c7f(_0x224325- -0x3cd,_0x46f33f);}return function(_0x50c3fa,_0x505df){function _0xdc80ff(_0x11d430,_0xecd71f,_0x310f59,_0x19803e,_0x20a4db){return _0x35bff9(_0x310f59-0x5cb,_0x19803e,_0x310f59-0x15f,_0x19803e-0x36,_0x20a4db-0x121);}var _0x453810={};function _0x5258f4(_0x57f410,_0x15a86b,_0xb8de5b,_0x4a4958,_0x476b84){return _0x5ef175(_0x476b84,_0x15a86b-0xd8,_0xb8de5b-0x9e,_0x4a4958-0x1b4,_0xb8de5b-0x45c);}_0x453810[_0x3730f5(0x1d1,0x1ca,0x275,0x21f,0x264)]=_0x2ec990[_0xdc80ff(0x666,0x615,0x5b8,0x512,0x55d)];function _0x3730f5(_0x2aeae1,_0x30b350,_0x3fe72a,_0x211d21,_0x1d3a4e){return _0x4467d7(_0x3fe72a,_0x211d21- -0x141,_0x3fe72a-0x67,_0x211d21-0x163,_0x1d3a4e-0x6c);}function _0x4dfb36(_0x24948a,_0x55fe2d,_0x228171,_0x74dd75,_0x16fde7){return _0x5ef175(_0x74dd75,_0x55fe2d-0x18,_0x228171-0x111,_0x74dd75-0xc9,_0x55fe2d-0x51e);}_0x453810[_0x3730f5(0x1fd,0x153,0x208,0x1e5,0x224)]=_0x2ec990[_0xdc80ff(0x572,0x61d,0x5a8,0x644,0x559)];function _0x362b35(_0x2c8b85,_0x1496f3,_0x1d3d0f,_0x11646e,_0xaa20b4){return _0x2e155d(_0x2c8b85-0xfb,_0x1496f3-0x32,_0x1496f3,_0x11646e-0x5ac,_0xaa20b4-0x181);}var _0x3a9ba3=_0x453810;if(_0x2ec990[_0xdc80ff(0x567,0x54e,0x596,0x5c6,0x564)](_0x2ec990[_0x362b35(0x5b6,0x611,0x5c6,0x632,0x68d)],_0x2ec990[_0x3730f5(0xfb,0xc9,0x120,0xe5,0xf9)])){var _0x280b71=_0x1e9b44?function(){function _0x42c23a(_0x3e2d63,_0xdf3243,_0x3a1c35,_0x41534c,_0x583230){return _0x362b35(_0x3e2d63-0x73,_0x3a1c35,_0x3a1c35-0xc7,_0x3e2d63-0x2c,_0x583230-0xb8);}function _0x69db1f(_0x3e343d,_0x1546cd,_0x414573,_0x20acda,_0x5b5a0c){return _0x3730f5(_0x3e343d-0x188,_0x1546cd-0x1d3,_0x5b5a0c,_0x414573- -0x177,_0x5b5a0c-0x16b);}function _0x4e0741(_0x2199c3,_0x2f6882,_0x429ab6,_0x5c6a13,_0x2a942b){return _0x5258f4(_0x2199c3-0x2d,_0x2f6882-0x69,_0x2199c3-0x299,_0x5c6a13-0x10,_0x5c6a13);}function _0x10fde2(_0x113d73,_0x50a5e1,_0x41ae5b,_0x10f52f,_0x1ba3e9){return _0x4dfb36(_0x113d73-0x1b,_0x113d73- -0x235,_0x41ae5b-0x1be,_0x50a5e1,_0x1ba3e9-0xff);}var _0x28ea88={'rIjDD':function(_0x3164d9,_0x50da67){function _0x29f681(_0x12851c,_0x2436a4,_0x29cc4b,_0xe5ef12,_0x3b24af){return _0x5c7f(_0x12851c- -0x225,_0x29cc4b);}return _0x2ec990[_0x29f681(-0x2a,0x24,0x7,-0x3d,-0x37)](_0x3164d9,_0x50da67);},'LLkNQ':_0x2ec990[_0x4e0741(0x586,0x600,0x603,0x50f,0x5ee)],'KcWZR':_0x2ec990[_0x4e0741(0x55a,0x564,0x568,0x4de,0x5f1)],'wmiSs':_0x2ec990[_0x69db1f(-0x95,0x3b,-0x75,-0xe,0x20)]};function _0xc9307(_0x5bc23d,_0x1c43ee,_0xb96b25,_0x9537af,_0x4b74d4){return _0x4dfb36(_0x5bc23d-0x74,_0x4b74d4- -0x513,_0xb96b25-0x97,_0x5bc23d,_0x4b74d4-0x182);}if(_0x2ec990[_0x4e0741(0x56c,0x55c,0x519,0x513,0x585)](_0x2ec990[_0x69db1f(0x2b,0x84,0x41,-0x3,0x78)],_0x2ec990[_0x42c23a(0x6ec,0x658,0x6d2,0x646,0x73f)]))return function(_0x40fdd9){}[_0x10fde2(0x214,0x29a,0x26f,0x1a8,0x1dd)+_0x69db1f(0x23,-0x9,-0x22,0x5d,-0xad)+'r'](_0x3a9ba3[_0x10fde2(0x23e,0x1a5,0x2cc,0x270,0x2a3)])[_0x69db1f(0x38,0x123,0x7a,-0x20,0x12b)](_0x3a9ba3[_0x42c23a(0x6b9,0x6e0,0x75f,0x661,0x68e)]);else{if(_0x505df){if(_0x2ec990[_0x69db1f(-0x92,0x51,-0x31,0x19,-0x60)](_0x2ec990[_0x10fde2(0x178,0x1e4,0x13e,0x13e,0x1c5)],_0x2ec990[_0x4e0741(0x584,0x58a,0x548,0x553,0x51e)])){var _0x48baac=_0x505df[_0x42c23a(0x6c5,0x77a,0x766,0x6c1,0x736)](_0x50c3fa,arguments);return _0x505df=null,_0x48baac;}else(function(){return![];}[_0x42c23a(0x6c9,0x6c4,0x75b,0x67e,0x6a6)+_0x10fde2(0x174,0x21c,0xd3,0xf9,0x18e)+'r'](_0x28ea88[_0xc9307(-0x1a5,-0x1b3,-0x11a,-0xb9,-0x168)](_0x28ea88[_0x10fde2(0x239,0x23b,0x255,0x278,0x251)],_0x28ea88[_0x4e0741(0x581,0x527,0x504,0x5e4,0x5b4)]))[_0xc9307(-0xe6,-0xeb,-0x138,-0x16d,-0xce)](_0x28ea88[_0x4e0741(0x575,0x545,0x5cf,0x537,0x4de)]));}}}:function(){};return _0x1e9b44=![],_0x280b71;}else _0x2ec990[_0x362b35(0x66f,0x6b5,0x6cd,0x6a7,0x6c7)](_0xbad024,-0x1121+-0x18c9+0x29ea);};}(),_0xae22c7=_0xc52859(this,function(){function _0x519df3(_0x4ea14b,_0x4a7693,_0x3749a2,_0x454d14,_0x2b553d){return _0x5c7f(_0x454d14- -0x323,_0x4a7693);}function _0x45844a(_0x59c2cb,_0x427ab1,_0x557ca3,_0x1ffe65,_0x8f84a5){return _0x5c7f(_0x1ffe65-0x32e,_0x557ca3);}var _0x26553a={'ihWKK':function(_0x257ded){return _0x257ded();},'TGtOo':function(_0x4a8db7,_0x1629ca){return _0x4a8db7===_0x1629ca;},'nyrNK':_0x45844a(0x607,0x579,0x5c7,0x5c5,0x559),'ODehn':_0x38b254(0x16e,0x1b9,0x1be,0x1ee,0x190),'SdWRX':_0x3978f0(0x662,0x6be,0x6e9,0x75e,0x6ab),'EVHGN':function(_0x42a28e,_0x409ce6){return _0x42a28e(_0x409ce6);},'nmYco':function(_0x5f1563,_0x135ced){return _0x5f1563+_0x135ced;},'gWOgi':function(_0x1ddaf4,_0x2ab835){return _0x1ddaf4+_0x2ab835;},'KUAaO':_0x45844a(0x62e,0x57c,0x531,0x5d8,0x665)+_0x572109(0x2a7,0x289,0x213,0x2ce,0x223)+_0x38b254(0xc1,0x149,0x186,0xb1,0xe7)+_0x519df3(0x96,-0x53,0x90,0x1b,-0x8c),'rbzbZ':_0x3978f0(0x681,0x6d3,0x6e7,0x657,0x6d3)+_0x45844a(0x499,0x4c7,0x5d9,0x540,0x5f3)+_0x519df3(-0xde,-0x176,-0x19,-0xc8,-0xa8)+_0x519df3(-0xec,-0x1b8,-0x114,-0x10f,-0x116)+_0x3978f0(0x5ab,0x5b5,0x567,0x611,0x5d5)+_0x572109(0x3c0,0x3a7,0x3a2,0x326,0x2f9)+'\x20)','HdGAG':_0x519df3(0x46,0x20,-0xd9,-0x54,0xd),'kApxl':_0x45844a(0x551,0x5d3,0x687,0x5f1,0x5a0),'zTLlM':_0x45844a(0x5bd,0x4d2,0x605,0x580,0x544),'DChAv':_0x572109(0x27b,0x2b6,0x34d,0x24e,0x2f9),'ADLRM':_0x519df3(-0x1af,-0x167,-0xa1,-0x10a,-0x128),'ViByN':_0x519df3(0xa3,0x81,-0x60,0xb,-0x33)+_0x38b254(0x1a7,0x233,0x228,0x1fb,0x252),'Jmkzl':_0x38b254(0x235,0x1a9,0x205,0x214,0x116),'mcEcP':_0x572109(0x338,0x2e4,0x2eb,0x2c6,0x2a3),'MYntD':function(_0xc5d78b,_0x42d0b6){return _0xc5d78b<_0x42d0b6;},'DrppG':function(_0x59098d,_0x145376){return _0x59098d!==_0x145376;},'KAhvh':_0x572109(0x33e,0x36d,0x342,0x419,0x3ec),'UyJCh':_0x572109(0x2fc,0x24b,0x29d,0x2f9,0x1cf)+_0x3978f0(0x556,0x595,0x687,0x640,0x5e9)+'4'},_0x40aeb1=function(){function _0x5997c2(_0x2dcb9d,_0x1549ee,_0x539ed2,_0x126ee7,_0x460b7c){return _0x45844a(_0x2dcb9d-0x1ac,_0x1549ee-0x159,_0x1549ee,_0x2dcb9d- -0x657,_0x460b7c-0x85);}function _0x3fd30(_0x3b098b,_0x51e102,_0x49893d,_0x17f982,_0x295b1d){return _0x572109(_0x3b098b-0x2e,_0x295b1d- -0xbf,_0x49893d-0x147,_0x17f982,_0x295b1d-0x141);}function _0x3954ca(_0x2fd880,_0x5e837f,_0x3cc3d4,_0x183a90,_0x3e3f94){return _0x572109(_0x2fd880-0x5d,_0x3e3f94-0x82,_0x3cc3d4-0x16,_0x183a90,_0x3e3f94-0x38);}function _0x3b7ae7(_0x951a4,_0x486711,_0x2a8d46,_0x4d5643,_0x150376){return _0x38b254(_0x951a4-0x1b,_0x150376- -0x1f5,_0x2a8d46-0x19a,_0x4d5643-0x194,_0x951a4);}function _0x3a10ee(_0x3a7343,_0x4c47ba,_0x1185bb,_0x3972a5,_0x3d4ec9){return _0x572109(_0x3a7343-0x19c,_0x4c47ba-0x47,_0x1185bb-0x30,_0x3a7343,_0x3d4ec9-0x65);}var _0x18ea80={'kGJez':function(_0x3e1ed2){function _0x16200a(_0x38470e,_0x4ca4bd,_0x26eaec,_0x1fd2a6,_0x4dd8a0){return _0x5c7f(_0x26eaec- -0x2d3,_0x4dd8a0);}return _0x26553a[_0x16200a(-0x137,-0xdc,-0x95,-0x64,-0x10f)](_0x3e1ed2);}};if(_0x26553a[_0x3fd30(0x157,0x1c6,0x177,0x1ed,0x1cf)](_0x26553a[_0x3fd30(0x181,0x1b5,0x239,0x228,0x223)],_0x26553a[_0x3a10ee(0x330,0x3c0,0x3a5,0x34b,0x41a)])){var _0x118a78=_0x63f1c2[_0x3fd30(0x245,0x219,0x2bf,0x24a,0x2a3)](_0x1c5e5f,arguments);return _0x479828=null,_0x118a78;}else{var _0x24994b;try{if(_0x26553a[_0x3fd30(0x1b2,0x230,0x1fc,0x131,0x1cf)](_0x26553a[_0x3b7ae7(-0x110,0x4,-0xca,-0x61,-0xad)],_0x26553a[_0x3954ca(0x260,0x363,0x337,0x31b,0x2c9)]))_0x24994b=_0x26553a[_0x3954ca(0x471,0x41b,0x3e8,0x406,0x3c0)](Function,_0x26553a[_0x3a10ee(0x38f,0x317,0x341,0x3cb,0x2f6)](_0x26553a[_0x3fd30(0x119,0x177,0x16d,0x204,0x1bd)](_0x26553a[_0x3b7ae7(0xea,0x10e,0xfd,-0x20,0x84)],_0x26553a[_0x3fd30(0x36c,0x367,0x22c,0x2ef,0x2dc)]),');'))();else{if(_0x33db6a){var _0x5dbcf9=_0x27e627[_0x3954ca(0x339,0x370,0x349,0x469,0x3e4)](_0x5731f,arguments);return _0x504397=null,_0x5dbcf9;}}}catch(_0x377c79){_0x26553a[_0x3954ca(0x283,0x268,0x37a,0x3bd,0x310)](_0x26553a[_0x3a10ee(0x403,0x394,0x449,0x43e,0x358)],_0x26553a[_0x3a10ee(0x3bc,0x394,0x3c0,0x3e4,0x414)])?_0x24994b=window:_0x18ea80[_0x3954ca(0x3bb,0x4cc,0x3b3,0x37a,0x418)](_0x3fa304);}return _0x24994b;}},_0x2593df=_0x26553a[_0x572109(0x297,0x2ac,0x334,0x264,0x296)](_0x40aeb1),_0x56a752=_0x2593df[_0x38b254(0x2bd,0x22b,0x255,0x284,0x274)+'le']=_0x2593df[_0x45844a(0x65e,0x5bc,0x593,0x5ea,0x622)+'le']||{};function _0x572109(_0x111dce,_0x14867c,_0x206e76,_0x5f3e4c,_0x4222ec){return _0x5c7f(_0x14867c-0x6e,_0x5f3e4c);}var _0x19c3fd=[_0x26553a[_0x572109(0x23c,0x299,0x1e8,0x265,0x2e2)],_0x26553a[_0x519df3(-0xe5,-0x42,-0x13e,-0xee,-0x7a)],_0x26553a[_0x45844a(0x508,0x5ac,0x507,0x522,0x51e)],_0x26553a[_0x572109(0x3e7,0x38d,0x3c4,0x38a,0x36c)],_0x26553a[_0x45844a(0x5f9,0x4cd,0x4d4,0x54d,0x550)],_0x26553a[_0x38b254(0x279,0x1df,0x1e4,0x205,0x14a)],_0x26553a[_0x45844a(0x5b1,0x659,0x59f,0x5ad,0x56c)]];function _0x38b254(_0x4c8261,_0x3d0e27,_0x7a5044,_0x391359,_0x4bc2a7){return _0x5c7f(_0x3d0e27- -0x91,_0x4bc2a7);}function _0x3978f0(_0x78dc05,_0x4baae7,_0x5b7724,_0x4b696f,_0x2997af){return _0x5c7f(_0x2997af-0x3a2,_0x5b7724);}for(var _0x24e5e4=0x1338+-0x9*0x18a+-0x2*0x2af;_0x26553a[_0x572109(0x2b8,0x31f,0x363,0x2c9,0x297)](_0x24e5e4,_0x19c3fd[_0x519df3(-0x93,-0x15d,-0x143,-0x12c,-0xdc)+'h']);_0x24e5e4++){if(_0x26553a[_0x38b254(0x106,0x197,0x230,0x174,0x12d)](_0x26553a[_0x38b254(0x284,0x211,0x175,0x194,0x217)],_0x26553a[_0x519df3(-0x79,-0xf9,-0x11a,-0x81,-0x118)])){var _0x2de90e=_0x143ba4?function(){function _0x1aa0be(_0x1ca467,_0x23909f,_0x11516c,_0x5ca8e2,_0x2259ea){return _0x519df3(_0x1ca467-0x1a,_0x5ca8e2,_0x11516c-0x15f,_0x1ca467-0x24,_0x2259ea-0x163);}if(_0x47c4e9){var _0x5d0fa4=_0xeac155[_0x1aa0be(-0xb,-0x62,-0x68,0x8c,0x35)](_0x1e494c,arguments);return _0xda7271=null,_0x5d0fa4;}}:function(){};return _0x3ab279=![],_0x2de90e;}else{var _0x16a100=_0x26553a[_0x572109(0x301,0x39d,0x36a,0x44d,0x35d)][_0x3978f0(0x56b,0x4fa,0x529,0x60c,0x5a8)]('|'),_0x540f28=-0x2*-0x1310+0x930+-0x2f50;while(!![]){switch(_0x16a100[_0x540f28++]){case'0':var _0x189f6f=_0x56a752[_0x3baff8]||_0x1b46bc;continue;case'1':var _0x3baff8=_0x19c3fd[_0x24e5e4];continue;case'2':_0x1b46bc[_0x3978f0(0x6e3,0x6a9,0x611,0x74c,0x6aa)+_0x3978f0(0x635,0x5ae,0x5d2,0x6aa,0x65a)]=_0x189f6f[_0x45844a(0x6ba,0x5f4,0x6bb,0x636,0x59b)+_0x38b254(0x1e0,0x227,0x286,0x269,0x291)][_0x45844a(0x5da,0x6ab,0x62a,0x66b,0x665)](_0x189f6f);continue;case'3':_0x1b46bc[_0x3978f0(0x65a,0x5aa,0x5a1,0x60f,0x5ed)+_0x3978f0(0x6a4,0x5cb,0x692,0x5fd,0x660)]=_0xc52859[_0x45844a(0x71a,0x6a3,0x5bc,0x66b,0x643)](_0xc52859);continue;case'4':_0x56a752[_0x3baff8]=_0x1b46bc;continue;case'5':var _0x1b46bc=_0xc52859[_0x3978f0(0x6ef,0x638,0x6f4,0x5e9,0x69a)+_0x45844a(0x4fb,0x5e0,0x5a8,0x586,0x5b7)+'r'][_0x38b254(0x258,0x235,0x264,0x197,0x2bd)+_0x572109(0x228,0x251,0x2ef,0x2b9,0x24e)][_0x45844a(0x63c,0x701,0x6bb,0x66b,0x651)](_0xc52859);continue;}break;}}}});_0xae22c7();var _0x8059df={};function _0x1e3bf0(_0x4742af,_0x501611,_0x2b16cc,_0x3fd1da,_0xba0267){return _0x5c7f(_0xba0267- -0x36d,_0x2b16cc);}_0x8059df[_0x5cbfe9(-0x188,-0xfc,-0xc9,-0x6e,-0xdd)+_0x5cbfe9(-0x281,-0x1d9,-0x1f8,-0x27f,-0x1c1)+'id']=[sender],_0x8059df[_0xe1ce65(0x392,0x348,0x301,0x384,0x330)+_0x42b753(0x5c4,0x638,0x522,0x5c2,0x657)+_0xe1ce65(0x444,0x3f9,0x4b3,0x4b4,0x4d2)]=0x3e7,_0x8059df[_0xde0150(0x5cb,0x650,0x55a,0x5ef,0x64d)+_0xde0150(0x49d,0x42f,0x4c5,0x47e,0x3ea)+'d']=!![];var _0x9b0bd5={};_0x9b0bd5[_0x1e3bf0(-0x7b,-0x123,-0x125,-0xf9,-0xd0)+'d']=fkontak,_0x9b0bd5[_0xde0150(0x4e2,0x45a,0x553,0x532,0x525)+'on']=captionnya,_0x9b0bd5[_0xe1ce65(0x49e,0x539,0x541,0x4eb,0x4af)+_0x1e3bf0(-0x8e,0x7b,0xe,-0xe6,-0x38)+'o']=_0x8059df;function _0xde0150(_0x41333f,_0x5cff16,_0x552303,_0x5b6cbd,_0x50a687){return _0x5c7f(_0x41333f-0x2a1,_0x50a687);}function _0x5c7f(_0x5dbb1e,_0x46b313){return _0x5c7f=function(_0x5e6edd,_0x514fcf){_0x5e6edd=_0x5e6edd-(-0x919*-0x4+0x23d2+0x1*-0x465f);var _0x30c670=_0x13af[_0x5e6edd];return _0x30c670;},_0x5c7f(_0x5dbb1e,_0x46b313);}_0x9b0bd5[_0x5cbfe9(-0xdf,-0xdd,-0x13b,-0xd7,-0x14c)+_0xe1ce65(0x385,0x370,0x30e,0x3c1,0x376)+_0xe1ce65(0x3ae,0x3ec,0x416,0x383,0x388)]=!![],await nayla[_0xe1ce65(0x4d5,0x4c1,0x4a1,0x43f,0x447)+_0xe1ce65(0x4ed,0x4d0,0x49f,0x565,0x503)+'e'](from,buff,image,_0x9b0bd5);function _0x42b753(_0x5f1d4c,_0x770e00,_0x44c0c4,_0x138d24,_0x187357){return _0x5c7f(_0x5f1d4c-0x3a0,_0x187357);}nayla[_0xe1ce65(0x4d5,0x4e3,0x52b,0x436,0x531)+_0xe1ce65(0x4ed,0x54d,0x47c,0x4a3,0x551)+'e'](sender[_0x1e3bf0(-0x10c,-0x1da,-0x15a,-0x19c,-0x167)]('@')[-0x6f*-0x3c+-0xd*-0x51+-0x1e21]+(_0x1e3bf0(-0x52,-0x155,-0xdf,-0x100,-0xdc)+_0x1e3bf0(-0xd5,-0x106,-0x6,-0x93,-0xb0)+_0x5cbfe9(-0x262,-0x1b2,-0x249,-0x16e,-0x1f4)),_0xe1ce65(0x429,0x400,0x3c8,0x404,0x484)+_0xe1ce65(0x4a1,0x48d,0x534,0x549,0x54d)+_0xe1ce65(0x3a1,0x3b3,0x413,0x445,0x2ff)+_0xde0150(0x56b,0x4d9,0x50b,0x598,0x4f2)+'on'+n+(_0x1e3bf0(-0x11e,-0x115,-0x9a,-0x151,-0x13e)+_0xe1ce65(0x411,0x4c3,0x3c9,0x433,0x4a7)+_0xde0150(0x4a4,0x422,0x53b,0x424,0x509)+_0x1e3bf0(0x2b,-0x59,-0x39,-0x6f,-0x49)+_0xe1ce65(0x435,0x3f8,0x381,0x415,0x436)+_0xe1ce65(0x4bc,0x418,0x521,0x470,0x480))+n+(_0x42b753(0x626,0x598,0x682,0x633,0x6b9)+_0xde0150(0x5a2,0x62d,0x599,0x544,0x612)+_0x1e3bf0(-0x1e,-0x118,-0x79,-0x103,-0x73)+_0x1e3bf0(-0x19c,-0x144,-0xe8,-0x113,-0x11e)+_0xe1ce65(0x4aa,0x535,0x4a2,0x4ce,0x437)+_0x5cbfe9(-0x125,-0x14e,-0xaa,-0x1f7,-0xad)+_0xde0150(0x5d9,0x5ef,0x5bf,0x5c1,0x63c)+_0x1e3bf0(-0x1c5,-0x124,-0x166,-0x1f1,-0x166)+_0x1e3bf0(-0x8a,-0xaf,0x9,-0xf5,-0x82)+_0x1e3bf0(-0x185,-0x1c0,-0x141,-0xf3,-0x183)+'lA')+n+n+(_0x1e3bf0(-0x10f,-0x137,-0x13e,-0xf6,-0xf1)+_0xde0150(0x4a9,0x406,0x548,0x55a,0x54f)+_0x5cbfe9(-0x72,-0xda,-0x5a,-0x35,-0x14e)+_0x5cbfe9(-0xd2,-0x176,-0x151,-0x17d,-0x10f)+'l')+n+(_0xde0150(0x4d0,0x498,0x4ee,0x4a3,0x51c)+_0x5cbfe9(-0x10e,-0x170,-0x118,-0x1cb,-0x19b)+_0x5cbfe9(-0x1f4,-0x1d0,-0x125,-0x1d7,-0x212)+_0x42b753(0x6c4,0x645,0x6e3,0x767,0x6d0)+_0xde0150(0x528,0x5c2,0x545,0x474,0x55d)+_0x5cbfe9(-0xa2,-0xc5,-0x53,-0x54,-0x149))+n+(_0x1e3bf0(-0x9a,-0x61,-0x11d,-0x37,-0xe7)+_0x5cbfe9(-0x46,-0xd2,-0x156,-0x10d,-0x106)+_0x5cbfe9(-0x107,-0xd9,-0xc4,-0x185,-0x12e)+_0x42b753(0x5ef,0x652,0x633,0x583,0x66b)+_0x5cbfe9(-0x93,-0xd7,-0x122,-0x9b,-0x30)+_0x5cbfe9(-0x143,-0x14e,-0x112,-0x1c0,-0x18f)+_0xde0150(0x5d9,0x591,0x5ce,0x645,0x5ec)+_0xde0150(0x4a8,0x4b2,0x556,0x418,0x46d)+_0xe1ce65(0x499,0x4a2,0x4d6,0x420,0x490)+_0x42b753(0x58a,0x617,0x618,0x56a,0x4e1)+'lA'),text,{'quoted':fkontak,'contextInfo':{'mentionedJid':[sender],'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]});function _0xe1ce65(_0x521064,_0x491974,_0x4cc6f4,_0xdf48b1,_0x1e23dc){return _0x5c7f(_0x521064-0x1ae,_0x1e23dc);}function _0x5dbb1e(_0x35eae6){function _0x306f70(_0x2fc81e,_0x368fe8,_0x5b463e,_0xcb15c3,_0x5052e1){return _0x1e3bf0(_0x2fc81e-0xfc,_0x368fe8-0x4e,_0x5052e1,_0xcb15c3-0x63,_0xcb15c3-0x4dd);}var _0x2a7420={'mxnzN':function(_0x3875c1,_0x26809e){return _0x3875c1!==_0x26809e;},'KCtGB':_0x306f70(0x4be,0x3b3,0x4c2,0x43c,0x3b1),'hgZDd':function(_0x365df3,_0x194365){return _0x365df3(_0x194365);},'Ychhi':_0xe91e15(0x553,0x5fb,0x5a7,0x4cf,0x58c)+_0x2b0966(0x258,0x2c0,0x291,0x2cb,0x28c)+_0x2b0966(0x25d,0x26a,0x2d0,0x24a,0x27b)+_0x3fcc90(-0x4d,0xb6,0xa0,0x6e,0x1a)+'/','PnfKo':_0x48cbb5(0x4fb,0x44b,0x451,0x597,0x458)+_0x2b0966(0x1f0,0x1df,0x292,0x1f4,0x289)+_0x3fcc90(0x158,0xef,0x124,0x33,0xa7)+_0xe91e15(0x572,0x592,0x4c1,0x5af,0x5ab)+_0xe91e15(0x498,0x524,0x4c4,0x531,0x3f7),'dxvVw':function(_0x3f7d83,_0x18cdb3){return _0x3f7d83+_0x18cdb3;},'ulEEt':_0x3fcc90(-0x3e,0x55,-0x2b,-0x59,-0x12),'pNkBh':_0x2b0966(0x1ae,0x181,0xe9,0x18f,0x106),'HYtpQ':_0xe91e15(0x57d,0x5dc,0x4e2,0x5f3,0x5b2)+'n','gZLEi':function(_0xd02b84,_0x4055d2){return _0xd02b84!==_0x4055d2;},'AIAjV':_0x2b0966(0x1f7,0x26a,0x2f2,0x287,0x26d),'JDDgh':_0x2b0966(0x1e7,0x141,0x28f,0x1ee,0x190),'yCphf':function(_0x4787d1,_0x401ed7){return _0x4787d1===_0x401ed7;},'NJMGO':_0x2b0966(0x1a8,0x15f,0x166,0x1d6,0x17c),'PCqDN':_0xe91e15(0x5cc,0x570,0x554,0x5fc,0x5b8)+'g','tSgII':function(_0x5ab73d,_0x7517ef){return _0x5ab73d===_0x7517ef;},'tcowu':_0xe91e15(0x543,0x4bf,0x4f8,0x536,0x5b3),'icuVm':_0xe91e15(0x5c0,0x656,0x632,0x5b1,0x5a5),'NWAtk':_0x48cbb5(0x4f3,0x52c,0x44b,0x4ba,0x54d)+_0x306f70(0x417,0x376,0x4b0,0x40c,0x4a8)+_0x2b0966(0x2bb,0x2c9,0x277,0x2b4,0x244),'NwDXw':_0x306f70(0x34d,0x3d3,0x35e,0x36d,0x3e9)+'er','oFrCT':function(_0x584752,_0x33297b){return _0x584752===_0x33297b;},'mEfui':_0x3fcc90(0xa3,0x82,0x89,0xb9,0xa0),'nrvoK':_0x3fcc90(-0xf,0x25,-0x6f,0x19,0x11),'gxLCF':function(_0xbca98,_0x100d7c){return _0xbca98!==_0x100d7c;},'mOMmb':function(_0x31c726,_0x16acba){return _0x31c726+_0x16acba;},'WLpLX':function(_0xd9171e,_0x8cee8f){return _0xd9171e/_0x8cee8f;},'lGwjL':_0xe91e15(0x4a0,0x4b3,0x40d,0x40c,0x492)+'h','WJAui':function(_0x461afa,_0x278104){return _0x461afa%_0x278104;},'sPpDa':_0x48cbb5(0x4f0,0x58c,0x4b6,0x534,0x51b),'EHQRX':_0x2b0966(0x2aa,0x34e,0x31a,0x2e2,0x2bb),'zgEcs':_0xe91e15(0x4a8,0x41a,0x4c9,0x4da,0x47a),'XVbKB':_0x3fcc90(0x104,0x40,0x95,0xa8,0x66),'ecuXV':_0x48cbb5(0x529,0x482,0x4d6,0x57b,0x484)+_0x306f70(0x3a8,0x3b6,0x34f,0x39a,0x40a)+'t','uzZoG':function(_0x5e065e,_0x75c4f1){return _0x5e065e(_0x75c4f1);},'LUerC':function(_0x468986,_0x5c6765){return _0x468986+_0x5c6765;},'ytXyF':function(_0x2bc9df,_0x437dc5){return _0x2bc9df+_0x437dc5;},'UydFQ':_0x306f70(0x3e7,0x48b,0x3c1,0x41a,0x498)+_0x48cbb5(0x410,0x3fa,0x4b6,0x49b,0x458)+_0x306f70(0x2fe,0x2d7,0x37c,0x34a,0x2b4)+_0xe91e15(0x5e7,0x5b8,0x5d2,0x5db,0x587),'lcwJh':_0x3fcc90(0x12e,0xa9,0x16d,0x18d,0xf6)+_0xe91e15(0x4bb,0x420,0x473,0x527,0x44d)+_0x48cbb5(0x450,0x4e0,0x49a,0x3ce,0x3e4)+_0x2b0966(0x1ea,0x25a,0x223,0x1c3,0x1e7)+_0xe91e15(0x4dc,0x57e,0x519,0x532,0x44e)+_0x2b0966(0x368,0x25f,0x371,0x2e8,0x301)+'\x20)','dasVd':function(_0x58bc1a){return _0x58bc1a();},'ecOHo':function(_0x420e68,_0x52275c){return _0x420e68!==_0x52275c;},'JvVYo':_0x48cbb5(0x446,0x437,0x3c2,0x4c6,0x4c8),'cHqoH':_0x306f70(0x329,0x368,0x41d,0x3de,0x40f),'IeShe':_0x48cbb5(0x4da,0x567,0x4eb,0x4e7,0x49a),'WPskM':function(_0x59af80,_0x1a951e){return _0x59af80===_0x1a951e;},'vjYMn':_0x306f70(0x422,0x3db,0x3c8,0x3da,0x417),'JnSKo':_0x306f70(0x36f,0x40f,0x2c0,0x365,0x353)};function _0x3fcc90(_0x14600b,_0x29fc9a,_0x9096bf,_0x365378,_0xf7dbb){return _0xde0150(_0xf7dbb- -0x4dc,_0x29fc9a-0x18f,_0x9096bf-0x1d7,_0x365378-0x1ce,_0x365378);}function _0x2b0966(_0x4a8a1d,_0x587d24,_0x52395e,_0x1edc10,_0x3d712e){return _0x1e3bf0(_0x4a8a1d-0xab,_0x587d24-0x10c,_0x52395e,_0x1edc10-0x38,_0x1edc10-0x31c);}function _0x54aaad(_0x56938b){function _0x58ba2f(_0x33e5b8,_0x767c9f,_0x103495,_0x5a46f6,_0x42bb24){return _0xe91e15(_0x103495- -0x664,_0x767c9f-0x1da,_0x103495-0x5b,_0x5a46f6-0xc1,_0x767c9f);}var _0x1bc7bc={'dtAvv':function(_0x4bcfe7,_0x3f84d2){function _0xd10f8f(_0x5ad646,_0x4946a6,_0x3eeae9,_0x580891,_0x1a9046){return _0x5c7f(_0x580891- -0x89,_0x3eeae9);}return _0x2a7420[_0xd10f8f(0x1ff,0x25e,0x22b,0x201,0x223)](_0x4bcfe7,_0x3f84d2);},'ahBsz':_0x2a7420[_0x2a9bfb(0x275,0x1e5,0x265,0x1ea,0x205)],'uquna':_0x2a7420[_0x36f02c(0x507,0x471,0x416,0x45a,0x49b)],'gyDIU':_0x2a7420[_0x59398d(0x31f,0x29f,0x2e2,0x2d0,0x309)],'zkksx':function(_0x25a7c6,_0x5f0bf1){function _0x1669a8(_0x2381cd,_0x4ab419,_0x251845,_0x205baa,_0x9fa8be){return _0x2a9bfb(_0x9fa8be-0x3ca,_0x4ab419-0x1af,_0x251845,_0x205baa-0x9a,_0x9fa8be-0xd2);}return _0x2a7420[_0x1669a8(0x558,0x4d2,0x595,0x4fe,0x4f1)](_0x25a7c6,_0x5f0bf1);},'ttZmC':_0x2a7420[_0x36f02c(0x578,0x51f,0x57f,0x466,0x4e3)],'MRSVp':_0x2a7420[_0x36f02c(0x498,0x45b,0x42d,0x496,0x4bc)]};function _0x2a9bfb(_0x5f2f49,_0x3fc937,_0x5155be,_0x5319b7,_0x2fa98a){return _0x2b0966(_0x5f2f49-0x180,_0x3fc937-0xd4,_0x5155be,_0x5f2f49- -0x66,_0x2fa98a-0xe);}function _0x36f02c(_0x3c3fe7,_0x5414d2,_0xd108f3,_0x12358b,_0x164951){return _0x2b0966(_0x3c3fe7-0x79,_0x5414d2-0x1de,_0x12358b,_0x164951-0x216,_0x164951-0x161);}function _0x59398d(_0x3cdc8d,_0x1a3cef,_0x1d8eba,_0x2c2a44,_0x4e5fd7){return _0x2b0966(_0x3cdc8d-0xe7,_0x1a3cef-0x12e,_0x1d8eba,_0x3cdc8d-0x97,_0x4e5fd7-0x30);}function _0x3c296d(_0x34ccbd,_0x155a71,_0x5520f4,_0x32d070,_0x41c1fe){return _0xe91e15(_0x34ccbd- -0x10f,_0x155a71-0x70,_0x5520f4-0x1d7,_0x32d070-0x15d,_0x41c1fe);}if(_0x2a7420[_0x36f02c(0x479,0x37e,0x3f5,0x499,0x407)](_0x2a7420[_0x36f02c(0x440,0x4c0,0x3eb,0x495,0x465)],_0x2a7420[_0x3c296d(0x43a,0x4ed,0x400,0x3c3,0x49b)])){if(_0x2a7420[_0x2a9bfb(0x18b,0x142,0x1c2,0x1c4,0x17c)](typeof _0x56938b,_0x2a7420[_0x59398d(0x34d,0x2e0,0x3e2,0x368,0x3d7)]))return _0x2a7420[_0x3c296d(0x3ca,0x384,0x477,0x395,0x3fc)](_0x2a7420[_0x3c296d(0x3ee,0x417,0x3ef,0x3c1,0x3b8)],_0x2a7420[_0x59398d(0x2c4,0x243,0x217,0x336,0x29c)])?![]:function(_0x37138b){}[_0x58ba2f(-0x14a,-0x9d,-0xc3,-0x71,-0x148)+_0x3c296d(0x3f2,0x404,0x48b,0x47d,0x387)+'r'](_0x2a7420[_0x3c296d(0x42a,0x3b4,0x462,0x3e1,0x3e1)])[_0x2a9bfb(0x23d,0x1f9,0x279,0x2e6,0x239)](_0x2a7420[_0x59398d(0x27e,0x291,0x2a0,0x248,0x200)]);else{if(_0x2a7420[_0x36f02c(0x43d,0x38d,0x3fc,0x3ba,0x430)](_0x2a7420[_0x59398d(0x305,0x356,0x35f,0x382,0x2d7)],_0x2a7420[_0x3c296d(0x411,0x415,0x4b4,0x3de,0x45f)]))(function(){return!![];}[_0x36f02c(0x500,0x561,0x487,0x551,0x4bd)+_0x36f02c(0x3b3,0x408,0x43e,0x4af,0x41d)+'r'](_0x1bc7bc[_0x2a9bfb(0x158,0x174,0x1b6,0xff,0x1d4)](_0x1bc7bc[_0x59398d(0x256,0x2b3,0x27d,0x232,0x1c3)],_0x1bc7bc[_0x36f02c(0x4c5,0x4f4,0x422,0x479,0x459)]))[_0x36f02c(0x480,0x47b,0x46d,0x416,0x3f3)](_0x1bc7bc[_0x36f02c(0x342,0x3ea,0x411,0x3a3,0x3d8)]));else{if(_0x2a7420[_0x36f02c(0x4f9,0x426,0x565,0x516,0x4d2)](_0x2a7420[_0x3c296d(0x3b7,0x39b,0x350,0x3e5,0x380)]('',_0x2a7420[_0x2a9bfb(0x255,0x1f3,0x238,0x20d,0x27f)](_0x56938b,_0x56938b))[_0x2a7420[_0x2a9bfb(0x237,0x28e,0x229,0x1e7,0x1e6)]],0xef7+-0x328+-0x5e7*0x2)||_0x2a7420[_0x3c296d(0x405,0x445,0x48a,0x4a6,0x3b0)](_0x2a7420[_0x36f02c(0x39b,0x471,0x411,0x401,0x431)](_0x56938b,-0x6bb+0x1330+0x1*-0xc61),0x2c3*0x5+-0x2427*-0x1+-0x31f6)){if(_0x2a7420[_0x59398d(0x353,0x393,0x39a,0x2c5,0x2de)](_0x2a7420[_0x3c296d(0x438,0x4cc,0x4bf,0x437,0x42d)],_0x2a7420[_0x36f02c(0x432,0x509,0x3d3,0x405,0x46e)]))(function(){function _0x503dda(_0x104bc1,_0x37f786,_0x1a5877,_0xd056de,_0x526bdb){return _0x58ba2f(_0x104bc1-0x32,_0x37f786,_0xd056de-0x124,_0xd056de-0x1b4,_0x526bdb-0xbc);}function _0x4fc4d6(_0x181e1c,_0x324828,_0x3b0bfe,_0x132d75,_0x59ef18){return _0x2a9bfb(_0x3b0bfe- -0x328,_0x324828-0xbe,_0x132d75,_0x132d75-0x11b,_0x59ef18-0xcc);}function _0x2d6dc0(_0x3307b2,_0x4c2183,_0x4daf8e,_0x316f57,_0x4fa87c){return _0x2a9bfb(_0x3307b2-0x264,_0x4c2183-0x166,_0x316f57,_0x316f57-0xd7,_0x4fa87c-0x75);}return _0x1bc7bc[_0x2d6dc0(0x3e3,0x411,0x48a,0x351,0x35b)](_0x1bc7bc[_0x4fc4d6(-0x14a,-0x17e,-0x133,-0x1be,-0x1b8)],_0x1bc7bc[_0x2d6dc0(0x4c6,0x4c6,0x48c,0x563,0x52e)])?!![]:_0x2a5432;}[_0x2a9bfb(0x241,0x2dd,0x229,0x21c,0x1d9)+_0x36f02c(0x42d,0x46b,0x3ea,0x468,0x41d)+'r'](_0x2a7420[_0x36f02c(0x3f6,0x45e,0x48e,0x3cd,0x3e2)](_0x2a7420[_0x2a9bfb(0x275,0x246,0x227,0x208,0x2a6)],_0x2a7420[_0x3c296d(0x470,0x45a,0x46a,0x44f,0x48e)]))[_0x2a9bfb(0x177,0x155,0x199,0xf3,0x212)](_0x2a7420[_0x59398d(0x31f,0x34f,0x339,0x355,0x370)]));else return!![];}else{if(_0x2a7420[_0x58ba2f(-0xf0,-0x3d,-0xae,-0x13c,-0xab)](_0x2a7420[_0x2a9bfb(0x1b2,0x1ca,0x23c,0x1f7,0x100)],_0x2a7420[_0x58ba2f(-0x176,-0x107,-0xd1,-0x9b,-0x28)]))(function(){function _0x117b75(_0x2cae40,_0x20d629,_0x2d42d0,_0x2f60b4,_0xd8a237){return _0x36f02c(_0x2cae40-0x100,_0x20d629-0x105,_0x2d42d0-0x116,_0x2cae40,_0x2d42d0- -0x10b);}function _0x347834(_0x1efa5b,_0x265b44,_0xf663f5,_0x35aa7e,_0x3c379){return _0x59398d(_0x1efa5b- -0x11e,_0x265b44-0x84,_0xf663f5,_0x35aa7e-0xbc,_0x3c379-0x10c);}function _0x6f7455(_0xcf9f30,_0x2fe20c,_0x6ba828,_0x3266a7,_0x2efd44){return _0x36f02c(_0xcf9f30-0x66,_0x2fe20c-0x12c,_0x6ba828-0x136,_0x6ba828,_0xcf9f30- -0x4e1);}function _0x476ad6(_0x599911,_0x161c6f,_0x2fc501,_0x508667,_0x31ad01){return _0x58ba2f(_0x599911-0x81,_0x31ad01,_0x2fc501-0x348,_0x508667-0xe2,_0x31ad01-0x6);}if(_0x2a7420[_0x476ad6(0x248,0x2bc,0x2ae,0x217,0x32f)](_0x2a7420[_0x476ad6(0xfb,0x1fd,0x172,0x114,0x1a0)],_0x2a7420[_0x476ad6(0x1d2,0x120,0x172,0x1cf,0x11e)])){if(_0x2a79e2){var _0x337c25=_0x260813[_0x6f7455(-0x28,0x70,-0x75,-0xd2,0x21)](_0x42f29f,arguments);return _0x52300b=null,_0x337c25;}}else return![];}[_0x2a9bfb(0x241,0x29a,0x210,0x2d8,0x224)+_0x3c296d(0x3f2,0x457,0x476,0x4a2,0x49c)+'r'](_0x2a7420[_0x58ba2f(-0x10a,-0x1c8,-0x19e,-0x10b,-0x14c)](_0x2a7420[_0x2a9bfb(0x275,0x1cd,0x287,0x27e,0x2f7)],_0x2a7420[_0x2a9bfb(0x21f,0x1a8,0x28a,0x1f1,0x2b9)]))[_0x58ba2f(-0xca,-0xa7,-0xc7,-0xfc,-0x108)](_0x2a7420[_0x59398d(0x250,0x2eb,0x23f,0x234,0x279)]));else{if(_0x54d05a)return _0x47902f;else _0x2a7420[_0x58ba2f(-0xc2,-0xeb,-0xe9,-0x11d,-0x84)](_0x13c67a,-0xb40*-0x1+0x4a1+-0xfe1);}}}}_0x2a7420[_0x3c296d(0x450,0x49f,0x4b6,0x478,0x4cc)](_0x54aaad,++_0x56938b);}else{var _0x2ebdde=_0x128147[_0x59398d(0x33e,0x2c0,0x3a6,0x388,0x2a6)+_0x36f02c(0x3b4,0x3a2,0x45a,0x457,0x41d)+'r'](_0x2a7420[_0x59398d(0x30d,0x305,0x2bb,0x3a5,0x30e)])()[_0x3c296d(0x492,0x408,0x506,0x3ee,0x43d)+_0x36f02c(0x387,0x414,0x45d,0x47f,0x41d)+'r'](_0x2a7420[_0x36f02c(0x3c2,0x3a7,0x410,0x47d,0x3d6)]);return!_0x2ebdde[_0x3c296d(0x414,0x371,0x3b1,0x401,0x3eb)](_0x4d08f9);}}function _0x48cbb5(_0x519218,_0x4a5742,_0xc2368,_0x204612,_0x181052){return _0x1e3bf0(_0x519218-0x128,_0x4a5742-0x49,_0xc2368,_0x204612-0x5d,_0x519218-0x562);}function _0xe91e15(_0x345c26,_0x5da417,_0x54eb35,_0x143aae,_0x28cde4){return _0x1e3bf0(_0x345c26-0xbe,_0x5da417-0xf2,_0x28cde4,_0x143aae-0x16c,_0x345c26-0x616);}try{if(_0x2a7420[_0x306f70(0x3e9,0x342,0x309,0x374,0x32c)](_0x2a7420[_0x2b0966(0x305,0x23d,0x1a2,0x253,0x224)],_0x2a7420[_0xe91e15(0x54d,0x56f,0x4a5,0x5fd,0x595)])){if(_0x5f1fb7){var _0x4bb2dd=_0x3b0feb[_0x2b0966(0x2df,0x2c8,0x21b,0x2a3,0x21c)](_0x54b041,arguments);return _0x748d0f=null,_0x4bb2dd;}}else{if(_0x35eae6){if(_0x2a7420[_0x2b0966(0x1fe,0x1f0,0x231,0x1b3,0x11c)](_0x2a7420[_0x306f70(0x395,0x3f5,0x2e1,0x352,0x2d1)],_0x2a7420[_0x3fcc90(-0x4e,0x37,-0x1f,0x6e,0x5a)]))return _0x54aaad;else{var _0x459977;try{_0x459977=_0x2a7420[_0x306f70(0x455,0x3ee,0x3fd,0x426,0x46c)](_0x2fe83b,_0x2a7420[_0x306f70(0x2cb,0x325,0x395,0x35b,0x325)](_0x2a7420[_0xe91e15(0x495,0x4ab,0x4c6,0x3fb,0x487)](_0x2a7420[_0x48cbb5(0x4d9,0x4e5,0x543,0x4f0,0x558)],_0x2a7420[_0x306f70(0x41b,0x36a,0x385,0x37b,0x2fc)]),');'))();}catch(_0x278aff){_0x459977=_0x29a76c;}return _0x459977;}}else{if(_0x2a7420[_0x306f70(0x340,0x31b,0x2d2,0x37c,0x2fc)](_0x2a7420[_0x48cbb5(0x50f,0x52b,0x575,0x4c2,0x470)],_0x2a7420[_0xe91e15(0x51b,0x504,0x4f5,0x52f,0x52d)])){var _0x2d03f3={};_0x2d03f3[_0xe91e15(0x54c,0x591,0x4b9,0x5a1,0x4cc)]=_0x2a7420[_0x3fcc90(0x10a,0x114,0x10a,-0x24,0x8c)],_0x2d03f3[_0x3fcc90(0xe,0xae,0x63,0x75,0x3e)]=_0x2a7420[_0x2b0966(0x1d6,0x271,0x110,0x1c0,0x185)];var _0x186121=_0x2d03f3,_0x48049c=function(){var _0x16fde2=_0x48049c[_0x257872(0x27e,0x1f0,0x208,0x22c,0x1d5)+_0x3a46f7(0x2ec,0x244,0x301,0x2fe,0x263)+'r'](_0x186121[_0xfee275(0x249,0x1cb,0x231,0x17a,0x183)])()[_0x3a46f7(0x38c,0x3c6,0x38f,0x3df,0x355)+_0x257872(0x1de,0x23b,0x230,0x157,0x1e2)+'r'](_0x186121[_0x48f5e5(-0xa3,-0xac,-0xb6,-0x4a,-0x5e)]);function _0xfee275(_0x295035,_0x1c7d14,_0x16c543,_0x403d76,_0x13ba2a){return _0x2b0966(_0x295035-0x1eb,_0x1c7d14-0x7d,_0x403d76,_0x1c7d14- -0x87,_0x13ba2a-0xe);}function _0x59c01b(_0x426b7c,_0x48a569,_0x108d38,_0x3ce618,_0xaa857c){return _0x3fcc90(_0x426b7c-0x161,_0x48a569-0x66,_0x108d38-0xf7,_0x48a569,_0xaa857c-0x3fe);}function _0x3a46f7(_0x4760af,_0x2b5e35,_0x52c052,_0x3200d4,_0x2dbbe2){return _0x306f70(_0x4760af-0x7b,_0x2b5e35-0x65,_0x52c052-0x168,_0x4760af- -0xdc,_0x2dbbe2);}function _0x257872(_0x176641,_0x160668,_0x22a5be,_0xe35ca0,_0x7c29f5){return _0x48cbb5(_0x176641- -0x26f,_0x160668-0xca,_0x22a5be,_0xe35ca0-0x171,_0x7c29f5-0x177);}function _0x48f5e5(_0x41419f,_0x561ef6,_0x157d5f,_0x43ef1e,_0x385623){return _0x48cbb5(_0x43ef1e- -0x4b8,_0x561ef6-0xcb,_0x385623,_0x43ef1e-0x1a0,_0x385623-0x1d7);}return!_0x16fde2[_0x48f5e5(0x6,-0x98,-0x41,-0x49,-0x86)](_0x30e17c);};return _0x2a7420[_0x306f70(0x3e3,0x46d,0x406,0x3d4,0x3e2)](_0x48049c);}else _0x2a7420[_0x48cbb5(0x4ab,0x511,0x48c,0x400,0x4a4)](_0x54aaad,0x2*-0xd64+0x65e*0x4+0x4*0x54);}}}catch(_0xbf832){}}setInterval(function(){var _0x1b2e95={'RqCBw':function(_0x1858a9){return _0x1858a9();}};function _0x1e88c9(_0x3e33c9,_0x1a7628,_0x3b1f73,_0x59f489,_0x3331ae){return _0xde0150(_0x3331ae- -0x4ab,_0x1a7628-0x166,_0x3b1f73-0x6e,_0x59f489-0xe5,_0x3b1f73);}_0x1b2e95[_0x1e88c9(0x3b,0x75,0xfe,0x1e,0xd0)](_0x5dbb1e);},-0x12a3+0x1d9c+0x4a7*0x1);
					break	
        case 'menu':       
        case 'help':       
						if (!isUserAlphabot) return replyByZeeone(mess.only.userB)
						let contentt = fs.readFileSync(`image/${thumbnail}`)
const media = await nayla.prepareMessage(from, contentt, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [
  {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
  {buttonId: `info`, buttonText: {displayText: 'INFORMATION'}, type: 1}
]

const btn1 = {
        contentText: `Halo ${ucapannya} saya adalah bot whatsApp yang siap membantu kakak dalam membuat sticker dan lainnya.`,
    footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}`,
    buttons: buttons1,
    headerType: 4,
    imageMessage: qweriio.message.imageMessage
}

nayla.sendMessage(from,  btn1, MessageType.buttonsMessage, {quoted: fkontak})
						
        break
        case 'allmenu':
        if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
        reply(helpmenu(wit,wita,wib,tampilTanggal, UserZeeone, tampilHari , limitawal, role, premi, sender, botname,pushname, prefix, wa_version, mcc, mnc, os_version, device_manufacturer, device_model ))
               break
	case 'menu2':
if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                let piii = nayla.prepareMessageFromContent(from, {
					"listMessage": {
						"title": `${ucapannya}`,
						"description": "Silahkan pilih menu bot dibawah. Ingat!!! No spam.",
						"buttonText": "SELECT",
						"footerText": `${creator}`,
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "◉ All menu bot",
								"rows": [
									{
										"title": "allmenu",
										"description": "\n\n_choose this if you want to use the allmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Source code",
								"rows": [
									{
										"title": "source code",
										"description": "\n\n_choose this if you want to know source code this bot_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-0",
								"rows": [
									{
										"title": "fast menu",
										"description": "\n\n_choose this if you want to use the fastmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-1",
								"rows": [
									{
										"title": "maker menu",
										"description": "\n\n_choose this if you want to use the makermenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-2",
								"rows": [
									{
										"title": "owner menu",
										"description": "\n\n_choose this if you want to use the ownermenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-3",
								"rows": [
									{
										"title": "spesial menu",
										"description": "\n\n_choose this if you want to use the spesialmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-4",
								"rows": [
									{
										"title": "sertifikat menu",
										"description": "\n\n_choose this if you want to use the sertifikatmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-5",
								"rows": [
									{
										"title": "sticker menu",
										"description": "\n\n_choose this if you want to use the stickermenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-6",
								"rows": [
									{
										"title": "randomtext menu",
										"description": "\n\n_choose this if you want to use the randomtextmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-7",
								"rows": [
									{
										"title": "game menu",
										"description": "\n\n_choose this if you want to use the gamemenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-8",
								"rows": [
									{
										"title": "tag menu",
										"description": "\n\n_choose this if you want to use the tagmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-9",
								"rows": [
									{
										"title": "cek menu",
										"description": "\n\n_choose this if you want to use the cekmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-10",
								"rows": [
									{
										"title": "news menu",
										"description": "\n\n_choose this if you want to use the newsmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-11",
								"rows": [
									{
										"title": "storage menu",
										"description": "\n\n_choose this if you want to use the storagemenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-12",
								"rows": [
									{
										"title": "porn menu",
										"description": "\n\n_choose this if you want to use the pornmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-13",
								"rows": [
									{
										"title": "sound menu",
										"description": "\n\n_choose this if you want to use the soundmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-14",
								"rows": [
									{
										"title": "download menu",
										"description": "\n\n_choose this if you want to use the downloadmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-15",
								"rows": [
									{
										"title": "pro menu",
										"description": "\n\n_choose this if you want to use the promenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-16",
								"rows": [
									{
										"title": "grup menu",
										"description": "\n\n_choose this if you want to use the grupmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-17",
								"rows": [
									{
										"title": "asupan menu",
										"description": "\n\n_choose this if you want to use the asupanmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-18",
								"rows": [
									{
										"title": "gacha cecan",
										"description": "\n\n_choose this if you want to use the gacha cecan command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-19",
								"rows": [
									{
										"title": "gacha cogan",
										"description": "\n\n_choose this if you want to use the gacha cogan command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-20",
								"rows": [
									{
										"title": "anime menu",
										"description": "\n\n_choose this if you want to use the animemenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-21",
								"rows": [
									{
										"title": "nsfw menu",
										"description": "\n\n_choose this if you want to use the nsfwmenu command_",
										"rowId": "colong aja kak"
									}
								]
							},
							{
								"title": "◉ Menu ke-22",
								"rows": [
									{
										"title": "image effect",
										"description": "\n\n_choose this if you want to use the image effect command_",
										"rowId": "colong aja kak"
									}
								]
							}
						]
					}
				},
			{}
		)
		nayla.relayWAMessage(piii, {waitForAck: true})
                break
        case  'trigger':
        if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'gay':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'glass':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'passed':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'jail':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'comrade':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case  'wasted':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':
         if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay 
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					owgi = await  nayla.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					nayla.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: nay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
 case 'tiktok':
 if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
	nayla.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:nay,caption:me})
		})
		})
		break 
          case 'play': 
          case 'playmp3':{
                if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    yta(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `*LAGU BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP3\`\`\`
\`\`\`Filesize : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`Link : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, nay)
                        const captionis = `*LAGU BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP3\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionis, nay)
                            sendFileFromUrl(from, dl_link, '', nay)
                            
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
                case 'ytmp4':{
                	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp4 link yt*`)
                let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    ytv(args[0])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Filesize : ${filesizeF}\`\`\`
\`\`\`Link : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, nay)
                        const captionsYtmp4 = `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionsYtmp4, nay)
                            sendFileFromUrl(from, dl_link, '', nay)
                            })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                     console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
		            case 'ytmp3':{
			if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp3 link yt*`)
                let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    yta(args[0])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}
\`\`\`Ext : MP3
\`\`\`Filesize : ${filesizeF}
\`\`\`Link : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, nay)
                        const captions = `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP3\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captions, nay)
                            sendFileFromUrl(from, dl_link, '', nay)
                            })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
             case 'yts':
            case 'ytsearch':{
            	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ytsearch* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                    
                    let txt = `*YOUTUBE SEARCH*
                    
*Data Berhasil Didapatkan!*
*Hasil Pencarian : ${q}*\n`
                    for (let i = 0; i < 10; i++){
                        txt += `\n─────────────────\n

\`\`\`Judul : ${yt[i].title}\`\`\`
\`\`\`ID : ${yt[i].videoId}\`\`\`
\`\`\`Upload : ${yt[i].ago}\`\`\`
\`\`\`Ditonton : ${yt[i].views}\`\`\`
\`\`\`Duration : ${yt[i].timestamp}\`\`\`
\`\`\`URL :\`\`\` ${yt[i].url}\n`
                    }
                    //sendFileFromUrl(from, yt[0].image, txt, nay)
                    nayla.sendMessage(from, yt[0].image, image , {quoted : nay, caption: txt})
                    })
                .catch((err) => {
                    console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case 'playmp4':{
            	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Filesize : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`Link : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, nay)
                        const captionisu = `*DATA BERHASIL DIDAPATKAN*

\`\`\`Title : ${title}\`\`\`
\`\`\`Ext : MP4\`\`\`
\`\`\`Size : ${filesizeF}\`\`\`
\`\`\`ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, nay)
                            sendFileFromUrl(from, dl_link, '', nay)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                   console.log(color('Emror', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
		 case 'play2':  
		            if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (args.length < 1) return reply(`Ex : ${prefix}play2 DJ 30 seconds`)	
					reply(mess.wait) 			 
					anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=Alphabott&q=${args[0]}`)
					anu1 = `*VIDEO DI TEMUKAN*\n`
                    anu1 += `Judul : ${anu.result.title}\n`
                    anu1 += `Size : ${anu.result.size}\n`
                    anu1 += `Source : ${anu.result.source}\n`
                    anu1 += `Url Video : ${anu.result.url_video}\n\n_Silahkan tunggu media sedang diproses_`
					anu2 = await getBuffer(anu.result.thumbnail)
					anu3 = await getBuffer(anu.result.url_video)
					await nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, video, { mimetype: 'audio/mp4', quoted: nay })
					break
		case 'kontenyt':  
		            if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (args.length < 1) return reply(`Ex : ${prefix}kontenyt https://youtu.be/UK_HS21XxOk`)	
					reply(mess.wait) 			 
					anu = await fetchJson(`http://hadi-api.herokuapp.com/api/aboutyt?url=${args[0]}`)
					anu1 = `*DATA BERHASIL DI TEMUKAN*\n`
                    anu1 += `Judul : ${anu.result.judul}\n`
                    anu1 += `Channel : ${anu.result.channel}\n`
                    anu1 += `View : ${anu.result.view}\n`
                    anu1 += `Like : ${anu.result.like}\n`
                    anu1 += `Dislike : ${anu.result.dislike}\n`
                    anu1 += `Kategori : ${anu.result.kategori}\n`
                    anu1 += `Durasi : ${anu.result.durasi}\n`
                    anu1 += `Tgl. Upload : ${anu.result.tanggalupload}\n`
                    anu1 += `Tgl. Publikasi : ${anu.result.tanggalpublikasi}\n`
                    anu1 += `Deskripsi : ${anu.result.desc}\n`
					anu2 = await getBuffer(anu.result.album)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					break
		case 'ytmp32':   
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
				    if (isLimit(sender)) return
			        await limitAdd(sender)					 
					if (args.length < 1) return reply("```Where's the link bro```")
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
					reply(mess.wait) 
					anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/yutub/audio?url=${args[0]}&apikey=Alphabot`)
					anu1 = `YTMP3 HAS BEEN FOUND\n\n`
                    anu1 += `• Judul : ${anu.result.title}\n`
                    anu1 += `• Ext : mp3\n`
                    anu1 += `• Size : ${anu.result.filesize}\n\n_Tunggu beberapa menit video akan segera di kirimkan_\n`
					anu2 = await getBuffer(anu.result.thumb)
					anu3 = await getBuffer(anu.result.result)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay})
					break
		case 'ytmp42':  
				    if (!isPrem) return reply(mess.only.premium)                    	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)				 
					if (args.length < 1) return reply("```Where's the link bro```")
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
					anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/yutub/video?url=${args[0]}&apikey=Alphabot`)
					reply(mess.wait) 
					anu1 = `YTMP4 HAS BEEN FOUND\n\n`
                    anu1 += `• Judul : ${anu.result.title}\n`
                    anu1 += `• Ext : mp4\n`
                    anu1 += `• Resolusi : ${anu.result.resolution}\n`
                    anu1 += `• Size : ${anu.result.filesize}\n\n_Tunggu beberapa menit video akan segera di kirimkan_\n`                    
					anu2 = await getBuffer(anu.result.thumb)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					anu3 = await getBuffer(anu.result.result)
					nayla.sendMessage(from, anu3, video, { mimetype: 'video/mp4', quoted: nay })
					break                    
        case 'stalktwit':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    nayla.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
        case 'stalkgithub':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} zeeoneofc`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    nayla.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
         case 'fb':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    nayla.sendMessage(from, ini_buffer, video, { quoted: nay1 })
                    break
          case "igstalk":

          // if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
          if (isLimit(sender)) return
			        await limitAdd(sender)
        if (!q) return reply("Usernamenya?");

        const tod = await fetchJson(

          `https://fdz-app.herokuapp.com/api/stalkig?username=${q}`

        );

        var nih_buff = await getBuffer(tod.picurl);

        const tt = `*INSTAGRAM STALK*

       \nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;

        nayla.sendMessage(from, nih_buff, image, { quoted: nay, caption: tt });

        break;
         case "linkwa":
         case "gcwa":
         case "groupwa":
         case "grupwa":
         // if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
         if (isLimit(sender)) return
			        await limitAdd(sender)
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 LINK WA 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
        case "igstory":
       if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
       if (isLimit(sender)) return
			        await limitAdd(sender)
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              nayla.sendMessage(from, link, video, {
                quoted: nay,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              nayla.sendMessage(from, link, image, {
                quoted: nay,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
       case "ig":
  if (!isUserAlphabot) return replyByZeeone(mess.only.userB)   
if (isLimit(sender)) return
			        await limitAdd(sender)    
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return reply("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              nayla.sendMessage(from, link, video, {
                quoted: nay,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              nayla.sendMessage(from, link, image, {
                quoted: nay,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case 'igfoto':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        nayla.sendMessage(from, ini_buffer, ini_type, { quoted: nay1 })
                    }
                    break
       case 'igvideo':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        nayla.sendMessage(from, ini_buffer, ini_type, { quoted: nay1 })
                    }
                    break                          
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API ALPHABOT ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
       case 'hilih':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Enter Text') 
                    anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/hilih?kata=${body.slice(6)}&apikey=${Alphakey}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ RANDOM CEK ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
      case 'gantengcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
      case 'cantikcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}% 😁*`
                    reply(N)
                    break
       case 'jelekcek':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)                      	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤢`
                    reply(N)
                    break 
      case 'goblokcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤣`
                    reply(N)
                    break 
      case 'begocek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😂`
                    reply(N)
                    break 
      case 'pintercek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😗`
                    reply(N)
                    break 
     case 'jagocek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 💪`
                    reply(N)
                    break 
     case 'nolepcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🧐`
                    reply(N)
                    break 
     case 'babicek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤪`
                    reply(N)
                    break 
     case 'bebancek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤬`
                    reply(N)
                    break 
      case 'baikcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😇`
                    reply(N)
                    break 
      case 'jahatcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😈`
                    reply(N)
                    break 
      case 'anjingcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    reply(N)
                    break                      
      case 'haramcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🥴`
                    reply(N)
                    break  
      case 'kontolcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🙂`
                    reply(N)
                    break 
       case 'pakboycek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break 
       case 'pakgirlcek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break             
       case 'sangecek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤤`
                    reply(N)
                    break
       case 'bapercek':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😘`
                    reply(N)
                    break                   
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
       /*case 'spamcall':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Entar Number') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break*/       
       case 'quotes':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','  kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const tes = quo[Math.floor(Math.random() * quo.length)]
					nayla.sendMessage(from, ''+tes+'\n\n_By : Trito_', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「  Bot by Trito 」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/cantik1.jpeg')} } } })
					break
       case 'fakta':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`)
                    reply(get_result.result)
                    break                                                  
       case 'gcard':                      	  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                                                                                                                                                                                                                                                        
       case 'tebakgambar':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    data = fs.readFileSync('./Alpha/family100.js');
					fami = JSON.parse(data);
					ly100 = Math.floor(Math.random() * fami.length);
					randKey = fami[ly100];
					Pertanyaan = randKey.result.soal
					setTimeout( () => {
					nayla.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					nayla.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nayla.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nayla.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					nayla.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: nay }) // ur cods
					}, 0) // 1000 = 1s,
					break                                                                                                                                            

/* ======================================================[ ALPHA-API ]==============================================================*/    
/*=====================================================[ API ALPHABOT ]==============================================================*/                  	    
/*====================================================[ CASE BY ZEEONE ]==============================================================*/                    	 
                                         
                    
       case 'quotesnime':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${l0lhuman}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                    
/* ======================================================[ ALPHA-API ]==============================================================*/    
/*=====================================================[ API ALPHABOT ]==============================================================*/                  	    
/*====================================================[ CASE BY ZEEONE ]==============================================================*/                    	 
                                         
      case 'lazimedia':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Product Name')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
      case 'covid':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${l0lhuman}`)
                    ini_txt = `Positif : ${get_result.result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.result.meninggal}`
                    reply(ini_txt)
                    break
                   break
      case 'wikiid':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query') 
                   query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${l0lhuman}&query=${query}`)
                    reply(get_result.result)  
       case 'covidid':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${l0lhuman}`)
                    ini_txt = `Positif : ${get_result.result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.result.meninggal}`
                    reply(ini_txt)
                    break
      case 'kbbi':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
      case 'infogempa':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break
      case 'randomquran':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break              
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
       
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API ALPHABOT ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
        case 'artinama':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
       case 'artimimpi':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
        case 'artijadian':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
        case 'chord':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
        case 'lirik':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API   ............... ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                
/* ==================================================[ GK TAU v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
       case 'kusonime':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
      case 'renungan':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   reply(mess.wait) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
       case 'samehadaku':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender) 	
                   reply(mess.wait)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay })
                   break
      case 'neon1':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break  
       case 'text3d':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                   
       case 'galaxy':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'gaming':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'colors':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(mess.wait)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'kling':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(mess.wait)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'infonomer':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
       case 'jadwaltv':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
       case 'tvjadwal':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
       case 'fml':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
       case 'cinta':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
      case 'twich':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                   
      case 'fake':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		            if (!isPrem) return reply(mess.only.premium)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break 
      
      case 'qrcode':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} halo sayang*`)  
                   reply(mess.wait)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'resepmasakan':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
      case 'barcode':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} halo sayang*`)  
                   reply(mess.wait)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
     case 'cersex':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
      case 'cerpen':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                   
      case 'tongue':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
      case 'jadwalsholat':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} makassar*`)  
                   reply(mess.wait)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
       case 'pantun':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
       case 'cuaca':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} makassar*`)  
                   reply(mess.wait)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
       case 'namaninja':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NAMA* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
                   
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
      case 'stalkig':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await fetchJson(`https://api.zeks.me/api/igstalk?username=${F}&apikey=Alphabott`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
      case 'quran2':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://api.zeks.me/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
      case 'estetikpic':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://api.zeks.me/api/estetikpic?apikey=Alphabott`)
                   anu1 = await getBuffer(anu.result.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'memeindo':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=Alphabott`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'darkjokes':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=Alphabott`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'nickff':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=Alphabott`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
       case 'tahta':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'neon2':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/bneon?apikey=Alphabott&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                    
       case 'wall':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=Alphabott&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break   
       case 'wolf':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=Alphabott&text1=zeeoneofc&text2=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
       case 'tfire':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/tfire?text=${F}&apikey=Alphabott`)                   
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                
       case 'ytgold':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(8)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'ytsilver':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 't3d':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=Alphabott&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'logoa':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/logoaveng?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'pornhub':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/phlogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'marvel':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/marvellogo?text1=${F1}&text2=${F2}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'leavest':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/leavest?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                    
       case 'phcoment':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/phub?apikey=Alphabott&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'nulis':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api.zeks.me/api/nulis?text=${F}&apikey=Alphabott`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
       case 'shortener':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(mess.wait)                   
                   anu = await fetchJson(`https://api.zeks.me/api/sid-shortener?apikey=Alphabott&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
       case 'urlshort':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(mess.wait)                                      
                   anu = await fetchJson(`https://api.zeks.me/api/urlshort-all?apikey=Alphabott&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
       case 'fox':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
       case 'dog':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
       case 'cat':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
       case 'panda':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
       case 'panda1':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
       case 'bird':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
      case 'koala':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
       case 'meme':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(mess.wait)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: nay1})
                   break
                   
              
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                              
   case 'indo1':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
	case 'indo2':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
	case 'indo3':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
	case 'indo4':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
	case 'indo5':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
 case 'indo6':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
 case 'indo7':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
  case 'indo8':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
  case 'indo9':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
  case 'indo10':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
  case 'indo11':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
  case 'indo12':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
   case 'indo13':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
	case 'indo14':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
   case 'indo15':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
   case 'indo16':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
	case 'indo17':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
    case 'indo18':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
	case 'indo19':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
	case 'indo20':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
	case 'indo21':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
	case 'indo22':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
	case 'indo23':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
	case 'indo24':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
	case 'indo25':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('./menu/pacarku.jpg') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
       case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
	case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    nayla.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
				break
	 case 'jadian':
				   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\nSELAMAT MENEMPUH KEHIDUPAN BARU!!`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break
	 case 'kapankah':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
	  case 'apakah':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break
	case 'slot':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)    				    				    
				   slot = `===================\n` 
				   slot += `${slot11} | ${slot22} | ${slot33}\n`
				   slot += `${slot44} | ${slot55} | ${slot66} <====\n`
				   slot += `${slot77} | ${slot88} | ${slot99}	\n`				   
				   slot += `===================\n`
				   nayla.sendMessage(from, slot, text, {quoted: nay})
				   break
	  case 'gelud':
               if (!isGroup) return reply(mess.only.group)
               if (nay.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!nay.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               nayla.sendMessage(from, starGame, text, {quoted: nay, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delttt':
case 'delttc':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = nay.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              nayla.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

@${player1.split('@')[0]} Menantang anda untuk menjadi lawan Game🔥

@${player2.split('@')[0]} Ketik Y/N untuk menerima atau menolak permainan

NOTE : Ketik ${prefix}delttt , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {quoted:nay, contextInfo: {mentionedJid: [player2, player1]}})
              break
       case 'delvote':
       if(!isGroupAdmins) return 
            if(!isGroup) return reply(mess.only.group)
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (nay.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || nay.message.extendedTextMessage.contextInfo == null) {
            let id = nay.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
                                                                                                                                                                                                                                                       
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   
       case 'ssweb':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(mess.wait)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break
      case 'smoke':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break 
       case 'rainbow':  
                   if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
        case 'toimg':  
                   // if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					reply(mess.wait)
					encmediaa = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await nayla.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa) 
					if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'OK it`s done'})
				    fs.unlinkSync(ran)
					})					
			    	break 
        case 'readmore':  
    	case 'more':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
        case 'chatlist':  
    	case 'cekchat':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `ALL CHAT BOTZ`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	    case 'addsticker':
case 'addstick':  
case 'addstik': 
case 'addstiker':  
                  //  if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = args.join(' ')
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay1})
      				break
		case 'addvn':  
                  //  if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = args.join(' ')
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
         case 'getvn':  
                  //  if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = args.join(' ')
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
        case 'getsticker':  
    	case 'gets':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = args.join(' ')
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
        case 'liststicker':  
                  //  if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
    	case 'listvn':  
 	   case 'vnlist':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		case 'addimage':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = args.join(' ')
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
    	case 'getimage':  
        case 'getimg':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = args.join(' ')
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		case 'imagelist':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
		case 'addvideo':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = args.join(' ')
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
		case 'getvideo':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = args.join(' ')
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
   	case 'listvideo':  
   	case 'videolist':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
        /*case 'setprefix':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break*/
case 'setprefix':
                if (!isOwner) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n•> multi\n•> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply( `Berhasil mengubah prefix ke ${q}`)
                }
                break 
		case 'setreply':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    namebot = body.slice(10)
                    reply(`Change reply To ${namebot} SUCCESS!`)					 
					break 
		case 'setpp':  
		case 'setprofile':  
		case 'setppbot':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner?`) 
	    	        enmediau = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await nayla.downloadAndSaveMediaMessage(enmediau)
					await nayla.updateProfilePicture(botNumber, mediau)
		            reply(mess.done)
			        break 
		case 'setthum':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./image/Alphabot.jpg', delb)
		            reply('Sukses')
			        break 
		
       case 'other':  
       case 'author':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)         	       
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fkontak})
                    nayla.sendMessage(from, 'This is my author number',MessageType.text, { quoted: nay} )				
					break    
        case 'sticker':  
	    case 'stiker':  
	    case 'stickergif':  
	    case 'stikergif':  
	    case 'sgif':  
	    case 's':  	
				    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)		 
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(mess.wait)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT ZEEONE OFC')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                    min'(320,ih)':  
                    force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(mess.wait)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT ZEEONE OFC')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                   	min'(320,ih)':  
                   	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
		
		case 'bcsticker':
        case 'bcstik':
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (!isOwner) return reply (mess.only.ownerB)
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
						bc = await nayla.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nayla.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						reply('Suksess broadcast')
					}
					break
         case 'bcvideo':
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (!isOwner) return reply (mess.only.ownerB)
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
						bc = await nayla.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nayla.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftroli,caption: `*BROADCAST*\n\n${body.slice(9)}`})
						}
						reply('Suksess broadcast')
					}
					break
	case 'bcaudio':
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (!isOwner) return reply (mess.only.ownerB)
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
						bc = await nayla.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nayla.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftroli})
						}
						reply('Suksess broadcast')
					}
					break
        case 'bcgif':
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (!isOwner) return reply (mess.only.ownerB)
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
						bc = await nayla.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nayla.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						reply('Suksess broadcast')
					}
					break
		case 'clearall':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner??`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break						 	 
        case 'linkgc':  
        case 'linkgrup':  
        case 'linkgroup':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
		case 'tagall':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
	    case 'delete':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	    case 'del':  
		case 'd':  	
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
		case 'kick':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
					nayla.groupRemove(from, mentioned)
					}					
					break 
		case 'hidetag':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(9)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					break
		case 'add':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nayla.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}  
					break 
		   case 'creategroup':
			case 'creategrup':
			if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (nay.message.extendedTextMessage != undefined){
                    mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					nayla.groupCreate(argz[0], anu)
					reply(mess.done)
                }
				break
		case 'setnamegc':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply(`Masukkan teks`)
					nayla.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(mess.done)
					break					
				case 'setdeskgc':
				case 'setdescgroup':
					if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   if (args.length < 1) return reply(`Masukkan teks`)
					nayla.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(mess.done)
					break
		case 'speed':
			case 'ping':
			if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
					const timestampi = speed();
					const latensyi = speed() - timestampi
					ini_pingnya = `_Speed: ${latensyi.toFixed(4)} Second_`
					reply(ini_pingnya)
					break
		case 'hacked':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
              try {
				ppimg = await nayla.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://d.top4top.io/p_2040n9ogt1.jpg'
			}
			let bufff = await getBuffer(ppimg)
             nayla.updateProfilePicture (from, bufff)
                   await sleep(1000)
                nayla.groupUpdateSubject(from, `Hacked By ${pushname}`)
                await sleep(1000)
                nayla.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                reply(mess.done)
					break
		case 'restart':
		if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
if (!isOwner) return reply(mess.only.ownerB)
reply('_Restarting Bot_')
exec(`node index`)
setTimeout( () => {
					reply ('_1_') 
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					reply('_2_') 
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					reply('_3_') 
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					reply('_Succses Restart Bot_') 
					},4000) // 1000 = 1s,
break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                                    
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                     
		case 'bug':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`contoh ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*ALPHABOT ZEEONE OFC*`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAH REPORT BUG*`} } } })                    
                    reply('REPORT BUG TELAH TERSAMPAIKAN. TERIMAKASIH TELAH MELAPORKAN FITUR')                     
					break   
		case 'request':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`mau request apa kak??\n${prefix}request *nama fitur*`)
                    const cet1 = body.slice(9)
                    if (cet1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ REQUEST FITUR ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    } 
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })
                    nayla.sendMessage(`62812874133914@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })                                    
                    reply(`TERIMAKASIH REQ ANDA AKAN KAMI PROSES`)
                    break
       case 'ngakak':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
        case 'nulis1':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(mess.wait)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nih kak`, quoted: nay})
                    break
       case 'nulis2':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
        case 'nulis3':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
       case 'nulis4':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break 
        case 'nulis6':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break                     
        case 'video1':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video2':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video3':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
         case 'video4':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video5':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break
        case 'video6':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(mess.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay1}) 
                    break                     
                    
  /* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
         case 'pinterest2':
            if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
            if (args.length < 1) return reply('Masukan query!')
		            const gimgg = args.join(' ');
		            reply(mess.wait)
		            gis(gimgg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            nayla.sendMessage(from,{url:images},image,{quoted:mek})
		            });
            break
        case 'pinterest':  
        if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                  if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} query*`)
                   reply(mess.wait)
                   F = body.slice(11)
                   anu = await getBuffer(`https://fdz-app.herokuapp.com/api/pinterest?q=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done\n\nPlease Subscribe ${yt}`, quoted: nay})
                   break
         case 'hadits':
         if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} bukhari|5*`)
                    get_args = args.join(" ").split("|")
                    kitab = get_args[0]
                    nomor = get_args[1]
                    fetch(`https://api-alphabot.herokuapp.com/api/hadits?kitab=${kitab}&nomor=${nomor}&apikey=Alphabot`).then(res => res.text())  
		            .then(bu =>{
		            reply(bu)
		            })
                    break
           case 'kisah_nabi':
           if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} Muhammad*`)
                    get_args = args.join(" ")
                    get_result = await fetchJson(`https://hardianto-chan.herokuapp.com/api/muslim/kisahnabi?nabi=${get_args}&apikey=hardianto`)
                    get_data = get_result.result
                    ini_txt = `*KISAH NABI*\n`
                    ini_txt += `Nama : ${get_data.name}\n`
                    ini_txt += `Kelahiran : ${get_data.kelahiran}\n`
                    ini_txt += `Wafat Usia : ${get_data.wafat_usia}\n`
                    ini_txt += `Singgah : ${get_data.singgah}\n`
                    ini_txt += `Kisah : ${get_data.kisah}`
                    reply(ini_txt)
                    break
          case 'ayatkursi':
          if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    get_result = await fetchJson(`https://hardianto-chan.herokuapp.com/api/muslim/ayatkursi?apikey=hardianto`)
                    get_data = get_result.result.data
                    ini_txt = `*AYAT KURSI*\n`
                    ini_txt += `Tafsir : ${get_result.result.data.tafsir}\n`
                    ini_txt += `Terjemahan : ${get_result.result.data.translation}\n`
                    ini_txt += `Arab : ${get_result.result.data.arabic}\n`
                    ini_txt += `Latin : ${get_result.result.data.latin}`
                    reply(ini_txt)
                    break
           case 'quran':
           if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} 1|5*`)
                    get_args = args.join(" ").split("|")
                    surah = get_args[0]
                    ayat = get_args[1]
                    fetch(`https://hardianto-chan.herokuapp.com/api/muslim/quran?surah=${surah}&ayat=${ayat}&apikey=hardianto`).then(res => res.text())  
		            .then(bu =>{
		            reply(bu)
		            })
                    break
           case 'tahlil':
           if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    fetch(`https://api-alphabot.herokuapp.com/api/muslim/tahlil?apikey=Alphabot`).then(res => res.text())  
		            .then(bu =>{
		            reply(bu)
		            })
                    break
           case 'wirid':
           if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    fetch(`https://api-alphabot.herokuapp.com/api/muslim/wirid?apikey=Alphabot`).then(res => res.text())  
		            .then(bu =>{
		            reply(bu)
		            })
                    break
          case 'doa_harian':
           if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    fetch(`https://api-alphabot.herokuapp.com/api/muslim/doaharian?apikey=Alphabot`).then(res => res.text())  
		            .then(bu =>{
		            reply(bu)
		            })
                    break
           case 'niat_shalat':
           if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    fetch(`https://api-alphabot.herokuapp.com/api/muslim/niatshalat?apikey=Alphabot`).then(res => res.text())  
		            .then(bu =>{
		            reply(bu)
		            })
                    break
           case 'bacaan_shalat':
           if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
                    fetch(`https://api-alphabot.herokuapp.com/api/muslim/bacaanshalat?apikey=Alphabot`).then(res => res.text())  
		            .then(bu =>{
		            reply(bu)
		            })
                    break
          case 'ramalnomer':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
        case 'ramalcinta':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
        case 'ramaljodoh':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
		case 'jodohbali':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			 	    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
		case 'ramalnikah':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			 	    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
        case 'taksirmimpi':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
        case 'suit':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(6)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakangka':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(12)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakbendera':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break     
        case 'kata':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ TEXT PRO XIXIXI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
case 'araara':  
const ara_ara = 'https://d.top4top.io/m_20597apuo1.mp3'
let sound = await getBuffer(ara_ara)
nayla.sendMessage(from, sound, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
        case 'sound1':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    nayla.sendMessage(from, sound2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
        case 'sound3':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    nayla.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
        case 'sound4':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound4 = 'https://b.top4top.io/m_2059nscrq1.mp3'
                    let sound44 = await getBuffer(sound4)
                    nayla.sendMessage(from, sound44, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
        case 'sound5':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    nayla.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
        case 'sound6':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    nayla.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound7':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    nayla.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound8':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    nayla.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound9':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    nayla.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound10':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    nayla.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound11':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    nayla.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
         case 'soundtes':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    nayla.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound13':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    nayla.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound14':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    nayla.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound15':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    nayla.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound16':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    nayla.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound17':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    nayla.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound18':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    nayla.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound19':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    nayla.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound20':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    nayla.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound21':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    nayla.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound22':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    nayla.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound23':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    nayla.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
        case 'sound24':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    nayla.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
        case 'sound25':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound25 = fs.readFileSync('sound/sound25.mp3')
                    nayla.sendMessage(from, sound25, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
                    break
case 'sewabot':  
case 'sewa':  
                  //  if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    var ini_gopayyyy =`Halo @${sender.split("@")[0]} yakin nih mau sewa bot?🤔 Boong auto banned >.<`
var buttonssss = [
{buttonId: 'ya_kak', buttonText:{displayText: 'Ya'}, type: 1},
{buttonId: 'tidak_kak', buttonText:{displayText: 'Tidak'}, type: 1}
]

buttonMessageeee = {
contentText: ini_gopayyyy,
footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}© ${creator}` ,
buttons: buttonssss,
headerType: 1
}
nayla.sendMessage(from,  buttonMessageeee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: nay,sendEphemeral: true 
			})
                    break                                                                                                                                                                                                                  
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                     
                      
          case 'attp':  
                     if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = args.join(' ')
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nayla.sendMessage(from, atetepe, sticker, {quoted: nay})
                     break                     
         case 'katailham':  
                     if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     const kta =['Lebih baik mengerti sedikit daripada salah mengerti.',
'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.',
'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.',
'Penderitaan adalah pelajaran.',
'Ilmu pengetahuan tanpa agama adalah pincang.',
'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.',
'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.',
'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?',
'Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.',
'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.',
'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.',
'Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.',
'Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.',
'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.',
'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.',
'Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.',
'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.',
'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.',
'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.',
'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.',
'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.',
'Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.',
'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.',
'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.',
'Anda tidak perlu harus berhasil pada kali pertama.',
'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.',
'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.',
'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.',
'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const su = kta[Math.floor(Math.random() * kta.length)]
					nayla.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: nay1 })
					break
         case 'citacita':  
                     if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			         if (isLimit(sender)) return
			         await limitAdd(sender)
			         var cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
                     var cita3 = cita[Math.floor(Math.random() * cita.length)]
                     cita2 = await getBuffer(cita3)
                     nayla.sendMessage(from, cita2, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true, duration: -838719282910})
                     break
         case 'blackpink':  
                     if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     reply(mess.wait)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                break
         case 'textfont':  
                     if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'kapital':  
                     if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                      
         case 'halah': case 'huluh': case 'heleh': case 'holoh':  
                     if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(7)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/${command}?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'boomtext':  
                     if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} zeeone&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     
                     
                                                                                                                          
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

       case 'antigay':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntigay) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[  ✓  ] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antigay.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[  ✓  ] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antibocil':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntibocil) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[  ✓  ] ACTIVATED ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[  ✓  ] DEACTIVATED ANTIBOCIL*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antiwibu':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntiwibu) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[  ✓  ] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[  ✓  ] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antikasar':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isNayXi) return reply('*SUDAH AKTIF* !!!')
					nayXi.push(from)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[  ✓  ] ACTIVATED ANTI KASAR*')
					} else if (Number(args[0]) === 0) {
					nayXi.splice(from, 1)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[  ✓  ] DEACTIVATED ANTI KASAR*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antitag':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isnayXix) return reply('*SUDAH AKTIF* !!!')
					nayXix.push(from)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[  ✓  ] ACTIVATED ANTI TAG*')
					} else if (Number(args[0]) === 0) {
					nayXix.splice(from, 1)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[  ✓  ] DEACTIVATED ANTI TAG*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antilink2':
	                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
						if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
						if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group is active')
						antilink.push(from)
						fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
						reply ('Suksek mengaktifkan antilink')
					    } else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('Anti link group mode has been disabled')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
						reply ('Suksek mematikan antilink')
					   } else {
						nayla.sendMessage(from, `1 to activate, 0 to deactivate`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐁𝐨𝐭 𝐁𝐲 𝐙𝐞𝐞𝐨𝐧𝐞🤖", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} } }})
					    }
						break
		case 'antivirtex':
				if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
				if (args.length < 1) return reply('ketik 1 untuk mengaktifkan') 
				if (Number(args[0]) === 1) {
				if (isAntiVirtex) return reply(`Fitur ${command} sudah aktif`)
				antivirtex.push(from)
				fs.writeFileSync('./nayla/antivirtex.json', JSON.stringify(antivirtex))
				reply(`\`\`\`[ ✓ ]\`\`\` Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				if (!isAntiVirtex) return reply(`[❗] Fitur ${command} sudah aktif`)
				var ini = antivirtex.indexOf(from)
				antivirtex.splice(ini, 1)
				fs.writeFileSync('./nayla/antivirtex.json', JSON.stringify(antivirtex))
				reply(`\`\`\`[ ✓ ]\`\`\` Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('```[ x ]``` Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
	case 'simih2':
			    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					if (args.length < 1) return reply('PILIH 1/0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply(`\`\`\`[ ✓ ]\`\`\` Fitur ${command} sudah aktif`)
				samih.push(from)
				fs.writeFileSync('./nayla/simi.json', JSON.stringify(samih))
				reply(`\`\`\`[ ✓ ]\`\`\` Fitur ${command} sudah aktif`)
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./nayla/simi.json', JSON.stringify(samih))
				reply(`\`\`\`[ ✓ ]\`\`\` Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('```[ x ]``` Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
		case 'antijawa':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isAntijawa) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antijawa.json', JSON.stringify(antijawa))
					reply('*[  ✓  ] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antijawa.json', JSON.stringify(antijawa))
					reply('*[  ✓  ] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE LOLTEAM ]==============================================================*/                    	 
        					
		case 'tebak':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `➻ *SOAL* : ${anu.pertanyaan}`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break 
         case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
        case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
        case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break
        case 'ttp1':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
        case 'ttp2':  
        case 'ttp3':  
        case 'ttp4':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)                     
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/${command}?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
        case 'info1':
                    reply(info1())
                    break
        case 'info2':
                    reply(info2())
                    break
        case 'info3':
                    reply(info3())
                    break
        case 'character':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `Id : ${anu.id}\n`
                    anu2 += `Name : ${anu.name.full}\n`
                    anu2 += `Native : ${anu.name.native}\n`
                    anu2 += `Favorites : ${anu.favourites}\n`
                    anu2 += `Media : \n`
                    ini_media = anu.media.nodes
                    for (var x of ini_media) {
                        anu2 += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(anu.image.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break
        case 'manga1':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `➻ Id : ${anu.id}\n`
                    anu2 += `➻ Id MAL : ${anu.idMal}\n`
                    anu2 += `➻ Title : ${anu.title.romaji}\n`
                    anu2 += `➻ English : ${anu.title.english}\n`
                    anu2 += `➻ Native : ${anu.title.native}\n`
                    anu2 += `➻ Format : ${anu.format}\n`
                    anu2 += `➻ Chapters : ${anu.chapters}\n`
                    anu2 += `➻ Volume : ${anu.volumes}\n`
                    anu2 += `➻ Status : ${anu.status}\n`
                    anu2 += `➻ Source : ${anu.source}\n`
                    anu2 += `➻ Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
                    anu2 += `➻ end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
                    anu2 += `➻ Genre : ${anu.genres.join(", ")}\n`
                    anu2 += `➻ Synonyms : ${anu.synonyms.join(", ")}\n`
                    anu2 += `➻ Score : ${anu.averageScore}%\n`
                    anu2 += `➻ Characters : \n`
                    ini_character = anu.characters.nodes
                    for (var x of ini_character) {
                        anu2 += `- ${x.name.full} (${x.name.native})\n`
                    }
                    anu2 += `\nDescription : ${anu.description}`
                    thumbnail = await getBuffer(anu.coverImage.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break                     
        case 'tiktoknowm':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
	nayla.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:nay,caption:me})
		})
		})
		break 
        case 'tiktokmusic':  
        case 'tiktokaudio':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium) 
                    if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
	nayla.sendMessage(from,{url:`${audio}`},audio,{mimetype:'audio/mp4',quoted:nay,caption:me})
		})
		})
       case 'telesticker':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
        case 'nhentai':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
        case 'semoji':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay1})
                    break                    
        case 'phkomen':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${l0lhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    nayla.sendMessage(from, buffer, image, { quoted: nay1})
                    break                     
        case 'katajago':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n*${prefix}${command} cantik`)
                    anu = await fetchJson(`https://pecundang.herokuapp.com/api/jagokata?kata=${args[0]}`)
                    anu1 = `➻ *KATA* : ${anu.result}`
                    reply(anu1)
                    break                     
        case 'test':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    reply(`oke`)
                    break
        case 'addprem':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`LU OWNER?`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return reply(`LU OWNER?`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		  
		case 'hidetag10':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VHTEAR ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    					
		case 'ffserti':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti2':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti3':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti4':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti5':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break			
		case 'mlserti':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti2':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti3':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti4':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti5':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(11)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti2':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti3':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait)					 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti4':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
					reply(mess.wait) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti5':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 										 				 
				    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
				    reply(mess.wait) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'OK it`s done', quoted: nay1})
					break
		case 'tololserti':
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 										 				 
				    if (args.length < 1) return reply(`${petik}[ x ]${petik} Example :\n${prefix}${command} whatsapp`)
				    F = body.slice(12)
				    reply(mess.wait)
				    to = await getBuffer(`https://evilblackteam.nasiwebhost.com/serti1/img.php?nama=${F}`)
				    nayla.sendMessage(from, to, image, {caption: 'OK it`s done', quoted:nay1})
				    break
					
		case 'ingfo':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text, {quoted: nay1})					 
					break
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
                    if (args.length < 1) return reply(`Example: ${prefix + command} Lolitabot`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${l0lhuman}&text=${ini_txt}`).then((gambar) => {
                        nayla.sendMessage(from, gambar, image, { quoted: nay })
                    })
                    break
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length < 1) return reply(`Example: ${prefix + command} Lolitabot`)
                    ini_txtt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${l0lhuman}&text=${ini_txtt}`).then((gambar) => {
                        nayla.sendMessage(from, gambar, image, { quoted: nay })
                    })
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
					
		case 'deteksiwajah':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	               	var imgbb = require('imgbb-uploader')
	               	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	             	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	              	reply(mess.wait)
		            owgi = await nayla.downloadAndSaveMediaMessage(ted)
		            anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	             	hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	nayla.sendMessage(from, hehe, image, {quoted:nay1})
		            } else {
		            reply(`Send Photo With Caption ${command}`)
	              	}
	                break
	     case 'removebg':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                    var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(mess.wait)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${l0lhuman}&img=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
	                reply(`Send Photo With Caption ${command}`)
                	}
	                break	 
	    case 'deteksiumur':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(mess.wait)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	                nayla.sendMessage(from, gender, text, {quoted:nay1})
                 	} else {
                  	reply(`Send Photo With Caption${command}`)
                	}
	                break
     	case 'demote':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					}					 
					break
		case 'promote':  
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return reply('BOT NOT ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Selamat 🥳 anda menjadi admin group (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	                     
         case 'oxo':                    
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break
         case 'tts': 
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return nayla.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: nay})					 
					if (args.length < 2) return nayla.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: nay})
					dtt = body.slice(8)
					const gtts = require('./lib/gtts')(args[0])
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan cayank!!!')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('ERROR')
					nayla.sendMessage(from, buffer, audio, {ptt:true, quoted:nay1})
					fs.unlinkSync(rano)
					})
					})
					break
		case 'pesan':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`${petik}[ x ]${petik} CONTOH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					reply('PESAN SUDAH TERKIRIM')
					break
		case 'tebakkimia': 
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${l0lhuman}`, {method: 'get'})
					kimia = `SOAL TEBAK KIMIA : *${anu.result.nama}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.lambang}`, text, {quoted: nay1}) 
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, kimia, text, {quoted: nay })
					}, 60000) 
					break 
	      case 'tebaklirik': 
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${l0lhuman}`, {method: 'get'})
					lirik = `SOAL TEBAK LIRIK : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, lirik, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'tebakin1': 
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${l0lhuman}`, {method: 'get'})
					te1 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te1, text, {quoted: nay1 }) 
					}, 1) 
					break 
				    case 'tebakin2': 
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${l0lhuman}`, {method: 'get'})
					te2 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 More Seconds', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 More Seconds', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 More Seconds', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 More Seconds', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 More Seconds', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te2, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'randomwibu': 
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					wibuC = ['wibu1','wibu2','wibu3','wibu4','wibu5','wibu6','wibu7','wibu8','wibu8','wibu10','wibu11','wibu12']
					wibuF = wibuC[Math.floor(Math.random() * (wibuC.length))]
					wibuz = fs.readFileSync(`wibu/${wibuF}.webp`)					
                    nayla.sendMessage(from, wibuz, sticker, {quoted: nay1})
                    break
                    case 'randompatrick':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'dadu':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/dadu?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'umongus':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/amongus?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'gawrgura':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/gawrgura?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'stickanjing':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/anjing?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'stickbucin':
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/bucinstick?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'limit':                     
                    if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
				    checkLimit(sender)
					break 
			     	case 'leveling':
                    if (!isGroup) return reply('GRUP ONLY')
                    if (!isGroupAdmins) return reply('LU ADMIN??')
                    if (args.length < 1) return reply('PILIH enable/disable')
                    if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
           	        reply('SUKSES AKTIVE LEVELING')
                    } else if (args[0] === 'disable') {
                	_leveling.splice(from, 1)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
                    reply('SUKSES NON ANTIVE LEVELING')
                    } else {
           	        reply('PILIH enable/disable')
                  	}
				    break 
				    case 'level':
                     if (!isGroup) return reply('GRUB ONLY')
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    if (userLevel === undefined && userXp === undefined) return reply(lvlnul())
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                    resul = `╭──❲ *YOUR LEVEL* ❳\n│▢ *Name* : ${pushname}\n│▢ *Number* : wa.me/${sender.split("@")[0]}\n│▢ *User XP* :  ${userXp}/${requiredXp}\n│▢ *User Level* : ${userLevel}\n╰──❲ ALPHA BOTZ ❳`
                    reply(resul)
			    	break     
			    	case 'grubwa':
			    	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	if (!isPrem) return reply(mess.only.premium)        
			    	anu = await fetchJson(`http://lolhuman.herokuapp.com/api/groupwhatsapp?apikey=${l0lhuman}&query=${body.slice(8)}`)
			    	anu2 = 'GRUB WHATSAPP :\n'
                    for (var x of anu.result) {
			    	anu2 = `➻ *NAMA* : ${x.name}\n`
			    	anu2 += `➻ *GENRE* : ${x.genre}\n`
			    	anu2 += `➻ *LINK* : ${x.link}`	
			    	}		    	 
			    	reply(anu2)
			    	break
			    	case 'brainly':
			    	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/brainly?soal=${body.slice(9)}&APIKEY=${apixteam}`)
			    	anu1 = `➻ *JAWABAN* : ${anu.jawaban}`
			    	reply(anu1)
			    	break
			    	case 'newsdetik':
			    	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/detik?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newskompas':
			    	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/kompas?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newsliputan6':
			    	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/liputan6?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newstribun':
			    	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/tribun?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
	                case 'jalantikus':
	                if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/jalantikus?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break			    	
			    	case 'tomp3':
			    	if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
				    nayla.updatePresence(from, Presence.composing)
			     	if (!isQuotedVideo) return reply('itu video bruh?:V')
				    reply(mess.wait)
			      	encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				    media = await nayla.downloadAndSaveMediaMessage(encmedia)
				    ran = getRandom('.mp4')
			 	    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: nay, caption: `NIHH KAK ${pushname}`})
					fs.unlinkSync(ran)
			     	})
					break 
					case 'spam':
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					var FG = body.slice(7)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})					
					reply('BERHASIL SPAM🔥')
					break
					case 'fitnah':
					if (!isUserAlphabot) return replyByZeeone(mess.only.userB) 
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				    var gh = body.slice(8)
			      	mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					nayla.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender) 
					break
			
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    default:            
                
                    if (budy.includes("syg")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 second")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				     
				    if (budy.includes("ayan")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("love")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Guy Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Children Detected sorry ${sender.split("@")[0]} anda akan di kick dari group 5 seconds lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("chan")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Wibu Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Wibu Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("tempek")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("matamu")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("jancok")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }
				    if (budy.includes("aing")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('Because you are an admin the bot will not remove you')
					if (!isBotGroupAdmins) return reply(`Saya bukan admin kak`)
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinmin")) return reply("```Permission Received```")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Java Detected Sorry ${sender.split("@")[0]} you will be kicked from the group in 5 seconds`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1 seconds")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2 seconds")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3 seconds")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4 seconds")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5 seconds")
					}, 0)
				    }				    
				    if (budy.includes("cekprefix")){
				    reply(`BOT PREFIX ${prefix}`)
				    }
				    if (budy.includes("gak")){
				    const F2 = fs.readFileSync('sound/F2.mp3')
                    nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if(subscribezeeoneofc == `info`){
var ini_info = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆          *INFORMATION*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

${petik}々 Nama : ${botname}${petik}
${petik}々 Owner : ${ownername}${petik}
${petik}々 V. Whatsapp : ${wa_version}${petik}
${petik}々 RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB${petik}
${petik}々 MCC : ${mcc}${petik}
${petik}々 MNC : ${mnc}${petik}
${petik}々 Versi OS : ${os_version}${petik}
${petik}々 Merk HP : ${device_manufacturer}${petik}
${petik}々 Versi HP : ${device_model}${petik}
${petik}々 Total User : ${UserZeeone.length}${petik}`
let contentt = fs.readFileSync(`image/${thumbnail}`)
var mediaa = await nayla.prepareMessage(from, contentt, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotluu = mediaa.message["ephemeralMessage"] ? mediaa.message.ephemeralMessage : mediaa

const buttons2 = [
  {buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
  {buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
  {buttonId: 'github', buttonText: {displayText: 'GITHUB'}, type: 1}
]

const btn2 = {
    contentText: ini_info,
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}© ${creator}`,
    buttons: buttons2,
    headerType: 4,
    imageMessage: bacotluu.message.imageMessage
}
nayla.sendMessage(from,  btn2, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender],
            },
			quoted: nay,sendEphemeral: true 
			})
}  
                    if (subscribezeeoneofc == `owner`) {
	members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = nayla.contacts[i] != undefined ? nayla.contacts[i].vname || nayla.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${nayla.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await nayla.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi_kak', buttonText:{displayText: 'Donasi ♨️'}, type: 1},
{buttonId: 'sewa_kak', buttonText:{displayText: 'Sewa 🔖'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
nayla.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: nay,sendEphemeral: true 
			})
}   
if (subscribezeeoneofc == `verify_kak`) {
	if (isUserAlphabot) return reply(`Hai ${pushname} Anda sudah terdaftar di database`)
					const noSerii = createSerial(20)
					try {
					ppimg = await nayla.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
					}
					imglu = `${img}` 
					veri = sender
					UserZeeone.push(sender)
					fs.writeFileSync('./nayla/UserAlphabot.json', JSON.stringify(UserZeeone))
					addUserAlphabot(sender, noSerii)
					var captionnyaa = `╭─「 *SUCCESS VERIFICATION* 」
│\`\`\`Pendaftaran berhasil dgn\`\`\` 
│
│\`\`\`SN: ${noSerii}\`\`\`
│\`\`\`Pada : ${wib} WIB \`\`\`
│\`\`\`Name : ${pushname}\`\`\`
│\`\`\`Number : @${sender.split("@")[0]}\`\`\`
│\`\`\`To use bot Please \`\`\`
│\`\`\`Send command ${prefix}menu\`\`\`
│\`\`\`atau ${prefix}allmenu\`\`\`
│
│\`\`\`\Users total : ${UserZeeone.length} Users\`\`\`
╰─────────────────────`
					let buff = await getBuffer(ppimg)
					var _0x13af=['kApxl','qqbSv','init','call','Subsc','tSgII','PelXy','hXxce','rn\x20th','UnMOU','zTLlM','zkksx','1535131rZdojC','NwDXw','KpveZ','table','EMXZc','LGRxX','TZEFq','ihWKK','BWRZC','zA-Z_','capti','yCphf','nTuyJ','AjoGG',']+(\x20+','GdPAG','|3|2|','info','qIbCD','DNXCg','__pro','bAQiv','wmiSs','1upWKbZ','.com/','DmlfY','yXUXt','warn','aIQjW','tcowu','s\x20+\x20\x22','UlxMG','369592ANRWZS','ructo','KcWZR','rIjDD','ctor(','KPjxm','rhasi','IRPFO','oyEEe','Eztcl','fOOte','nmYco','ribe\x20','dasVd','mcitl','ORHDd','rwTFt','VcuWg','zgEcs','vCXcB','oFrCT','WJAui','guFdP','GOjKR','2|1|4','Jmkzl','input','JnSKo','MAbTV','nyrNK','SYugB','trace','nrvoK','RwSzh','EvJOb','test','🇦🇺\x20Suc','🇮🇩\x20Ver','GmEvV','icuVm','mcEcP','VaQaA','634945FwdlUt','0-9a-','gFIPG','Fbaed','el/UC','https','zeeon','AnhkU','1145CwBoqz','dxvVw','mUwaj','CmSdp','NwbPt','WLdBk','hEnaT','NWAtk','@s.wh','rRIPg','gYhjM','uquna','IeShe','Score','iimGL','AAsfy','adMhr','UXKEj','+\x20thi','\x20(tru','quote','sPpDa','DrkfW','NJMGO','yeyaG','KAhvh','tYwDl','JvVYo','RBFOY','rawrt','HdQVF','YZDVm','EHQRX','retur','WpqgL','ttZmC','KaQuF','oJKqO','FyUOP','liLGH','MYntD','bramq','VjnVk','nGuju','LCGeA','uzZoG','EwNys','ing','GeRKw','\x5c+\x5c+\x20','flzxP','conso','atsap','to__','mEfui','HJQik','etaxf','dGJgH','log','tion','MvczE','proto','Ychhi','frPaS',')+)+[','icati','YgmHD','dufmx','FFDrZ','MGOfo','jKKsz','EVHGN','uboXZ','hgZDd','FdhFW','actio','BkVsO','pNkBh','menti','WTFWd','HYtpQ','RqCBw','RBqmt','RQupA','xCUTF','FptKZ','HdGAG','KjdzI','POShT','[^\x20]+','MDYiL','UydFQ','cyNEN','wLimC','kElFv','pKGSj','IAcGy','XVbKB','ODby7','fRnIM','chain','lGwjL','PLULe','conte','BqhLR','CjQaI','cess\x20','apply','rONsh','sendE','JDDgh','const','si\x20be','utube','LfWmT','chann','BOIpX','while','IDiwz','HCqqV','://yo','aPsEH','$]*)','dJZYr','e)\x20{}','^([^\x20','PCqDN','toStr','XWolu','KUAaO','ODehn','WLpLX','gxLCF','e\x20ofc','wvTer','NLYEU','a-zA-','YYodP','ItMHE','funct','1149467McDptt','cjsnF','oeQRn','evKQb','MRSVp','vjYMn','PNWkP','n\x20/\x22\x20','LLkNQ','AIAjV','ADLRM','PPFDt','mxnzN','bdtYx','strin','port\x20','cuRyT','owMRJ','sendM','kGJez','zUWRM','isFor','|5|0|','ulEEt','rbzbZ','excep','UyJCh','uBbzT','{}.co','iKjqY','arbNI','state','xtInf','XErbU','1439624wcVvBn','dzWwb','is\x22)(','HTjbV','EPirR','kYiha','bind','n()\x20','essag','THSqn','pheme','zeNBI','SdWRX','nctio','YiUBy','Zoxxw','5|1|0','gZLEi','UEklj','gger','Kmzrw','cHqoH','type','forwa','KCtGB','pQvyF','1412jXKXXz','pTdfg','131776rPUSAH','_MoRY','LUerC','ytXyF','ion\x20*','BdNsw','^\x20]}','KHrin','RJJQe','*(?:[','verif','DChAv','YpguI','OXieH','lengt','AeqKB','BHJij','onedJ','mWqPp','warde','count','hcWkN','XxNmm','ral','\x5c(\x20*\x5c','rKTzr','&\x20sup','ecOHo','GBupf','split','Apjky','ifika','uNRzX','ecuXV','lcwJh','WPskM','QADmT','gWOgi','dtAvv','ahBsz','PnfKo','nstru','gyDIU','\x22retu','esckr','Z_$][','KitYW','NxrSa','error','PEgLV','n\x20(fu','FPIeP','mOMmb','qpkAP','ViByN','TGtOo','p.net','rUwRv','jnVuz','rding','XesLO','rljGQ','wHsNf','DrppG','debu','Objec'];(function(_0xc41d46,_0x28a5e4){function _0x10d139(_0x4d8fc2,_0x15f035,_0x5d6cd8,_0x3b3602,_0x1fa541){return _0x5c7f(_0x15f035- -0x241,_0x5d6cd8);}function _0x3d354b(_0x53972d,_0x9d8e5c,_0x4cc368,_0x571241,_0x293092){return _0x5c7f(_0x53972d-0x98,_0x571241);}function _0x2ebd5d(_0x4f0154,_0x581c6b,_0x570cf7,_0x457fd6,_0xd89556){return _0x5c7f(_0x4f0154- -0x369,_0x570cf7);}function _0x427986(_0x280326,_0x53389d,_0x23c55f,_0x373f86,_0x55b82e){return _0x5c7f(_0x23c55f-0x13a,_0x280326);}function _0x43760a(_0x7beca8,_0x24f440,_0x389e1c,_0x163151,_0x272465){return _0x5c7f(_0x272465-0x2a7,_0x163151);}while(!![]){try{var _0x411585=-parseInt(_0x3d354b(0x27f,0x29f,0x208,0x2bf,0x1ef))*-parseInt(_0x427986(0x346,0x39b,0x3c3,0x3fa,0x39c))+parseInt(_0x10d139(-0x42,0x16,-0x8d,0x56,-0x61))+parseInt(_0x427986(0x3d0,0x445,0x3bb,0x421,0x468))*parseInt(_0x427986(0x2d3,0x313,0x388,0x33c,0x35d))+-parseInt(_0x3d354b(0x2cf,0x2e8,0x271,0x30a,0x33e))+-parseInt(_0x427986(0x3cb,0x4e6,0x471,0x504,0x42a))+parseInt(_0x427986(0x320,0x3b1,0x323,0x322,0x289))+parseInt(_0x2ebd5d(-0x54,-0x3e,-0x80,-0xce,-0xb));if(_0x411585===_0x28a5e4)break;else _0xc41d46['push'](_0xc41d46['shift']());}catch(_0x5a9198){_0xc41d46['push'](_0xc41d46['shift']());}}}(_0x13af,-0x144813+-0x192ed5+0x3b9efd));var _0x2645c9=function(){function _0x15920e(_0x4f6eea,_0x3dc77c,_0x7b8de,_0x545b9b,_0x5d6b2a){return _0x5c7f(_0x4f6eea- -0x392,_0x545b9b);}var _0x115b0a={'VjnVk':_0x3df322(0x585,0x5f5,0x56c,0x509,0x546)+_0x3df322(0x3e5,0x376,0x3c3,0x459,0x41f)+_0x44811e(0x1a8,0x9b,0x11c,0x8a,0xaf)+')','SYugB':_0x3df322(0x57f,0x47f,0x529,0x577,0x4ec)+_0x44811e(0x168,0x1b7,0x10d,0x163,0xd6)+_0x43621d(0x60f,0x6ea,0x6ad,0x686,0x65f)+_0x301023(-0x91,-0x6b,-0xa5,-0x100,-0xb4)+_0x44811e(0x207,0x1e8,0x19d,0xf6,0x15f)+_0x15920e(-0x152,-0x198,-0x14e,-0x12b,-0xdb)+_0x301023(0x5c,0x1a,0x2a,0x99,0x6f),'MGOfo':function(_0x3eceba,_0x302770){return _0x3eceba(_0x302770);},'HJQik':_0x43621d(0x51a,0x550,0x5df,0x550,0x57b),'HdQVF':function(_0x4c2b19,_0x301aea){return _0x4c2b19+_0x301aea;},'mUwaj':_0x301023(0x46,0x34,0x55,0xe3,-0x50),'AeqKB':_0x44811e(0x233,0x152,0x18c,0x23d,0x193),'uBbzT':function(_0x426153){return _0x426153();},'FdhFW':function(_0x3a3480,_0xae866e,_0xc79d25){return _0x3a3480(_0xae866e,_0xc79d25);},'VaQaA':function(_0x49c588,_0x48bfc4){return _0x49c588===_0x48bfc4;},'cuRyT':_0x301023(-0x6b,-0x9b,-0xf9,-0x2,0x3c),'MvczE':_0x15920e(-0x12c,-0x1c9,-0x1ba,-0x1da,-0xc5),'NxrSa':function(_0x35409c,_0x124e74){return _0x35409c===_0x124e74;},'CmSdp':_0x3df322(0x3e5,0x3ca,0x456,0x498,0x44e),'etaxf':_0x43621d(0x4e8,0x5b3,0x524,0x530,0x544),'BOIpX':_0x43621d(0x5ad,0x6db,0x6d8,0x6b0,0x643)};function _0x3df322(_0x8fb99e,_0x19ae1f,_0x32b620,_0x5b7877,_0x429250){return _0x5c7f(_0x429250-0x232,_0x5b7877);}function _0x301023(_0x1dce73,_0x12f2b4,_0x240519,_0x1eb681,_0x3eb6ca){return _0x5c7f(_0x1dce73- -0x2a7,_0x12f2b4);}var _0x5e5f91=!![];function _0x44811e(_0x55a351,_0x5206db,_0x25fdf8,_0x3be0ed,_0x13f5b3){return _0x5c7f(_0x25fdf8- -0xe5,_0x3be0ed);}function _0x43621d(_0x42a0d7,_0x2087a4,_0x2fcf42,_0x4b0d0a,_0x9f2fbf){return _0x5c7f(_0x9f2fbf-0x34e,_0x2fcf42);}return function(_0x335dd1,_0x3b278c){var _0x53cc16={'dJZYr':_0x115b0a[_0x171472(0x162,0xee,0x44,0xd1,0x4c)],'adMhr':_0x115b0a[_0x171472(0x12e,0xb0,0xa8,-0x2,0x137)],'aIQjW':function(_0x53b457,_0x5cb2b0){function _0x1afb39(_0x5ef0ee,_0x5e0be3,_0x49c7d5,_0x208a3e,_0x467bf2){return _0x50ab71(_0x5ef0ee-0x2ee,_0x5e0be3,_0x49c7d5-0x159,_0x208a3e-0x19a,_0x467bf2-0x19c);}return _0x115b0a[_0x1afb39(0x379,0x3ad,0x3d8,0x314,0x37d)](_0x53b457,_0x5cb2b0);},'HTjbV':_0x115b0a[_0x50ab71(0x7d,0x69,-0x18,0xf9,0x78)],'EwNys':function(_0x45e34b,_0x1fe1fa){function _0x19cba4(_0x2df025,_0x15cd02,_0x1f3f06,_0x16898b,_0xa66021){return _0x50ab71(_0x1f3f06-0x146,_0x2df025,_0x1f3f06-0x14f,_0x16898b-0x151,_0xa66021-0x55);}return _0x115b0a[_0x19cba4(0x1b9,0x1db,0x1aa,0x1ae,0x1ce)](_0x45e34b,_0x1fe1fa);},'FyUOP':_0x115b0a[_0xafb267(-0x6a,0x61,0x1e,-0x40,-0x8e)],'AAsfy':_0x115b0a[_0x5e2b86(-0x257,-0x1d9,-0x1d4,-0x205,-0x185)],'RJJQe':function(_0x53ef22){function _0x1b97dd(_0x1c2c40,_0x4942ee,_0x45320c,_0x28c600,_0x47e101){return _0x171472(_0x47e101,_0x28c600-0x458,_0x45320c-0x1d4,_0x28c600-0x150,_0x47e101-0x7a);}return _0x115b0a[_0x1b97dd(0x598,0x5cd,0x597,0x5c3,0x583)](_0x53ef22);},'evKQb':function(_0xf3abb7,_0x2325df,_0x1a3b7a){function _0xe62657(_0x3cd147,_0x4f36bf,_0x2c791f,_0x2841a8,_0x9a0b7e){return _0x2abce1(_0x3cd147-0x1bb,_0x4f36bf,_0x2841a8- -0x144,_0x2841a8-0xa3,_0x9a0b7e-0x194);}return _0x115b0a[_0xe62657(0x289,0x29e,0x1f0,0x278,0x1de)](_0xf3abb7,_0x2325df,_0x1a3b7a);},'KitYW':function(_0x1bc661,_0x4e847f){function _0x483a7e(_0x2e86c4,_0x3ea465,_0x450799,_0x1c528a,_0x55e018){return _0x171472(_0x450799,_0x3ea465-0x236,_0x450799-0x15,_0x1c528a-0x140,_0x55e018-0x15e);}return _0x115b0a[_0x483a7e(0x2b9,0x2f1,0x25a,0x368,0x39d)](_0x1bc661,_0x4e847f);},'wLimC':_0x115b0a[_0x5e2b86(-0x42,-0xa2,-0xa7,-0x12e,-0xcd)],'DrkfW':_0x115b0a[_0x2abce1(0x3db,0x3dd,0x3ae,0x37e,0x435)],'Zoxxw':function(_0x47ad43,_0x34f128){function _0x216e09(_0xa952b5,_0x1cf5b5,_0x419654,_0x4ab638,_0xfd38c6){return _0xafb267(_0xa952b5-0x19c,_0x419654,_0xa952b5- -0x16c,_0x4ab638-0xc9,_0xfd38c6-0xc1);}return _0x115b0a[_0x216e09(-0x1c1,-0x1a2,-0x1fa,-0x124,-0x11d)](_0x47ad43,_0x34f128);},'FFDrZ':_0x115b0a[_0x2abce1(0x3bb,0x3ed,0x375,0x38f,0x2c8)]};function _0x171472(_0xb3ac79,_0x7e1653,_0x1f8b75,_0x389bd9,_0x6056ed){return _0x43621d(_0xb3ac79-0x5d,_0x7e1653-0x197,_0xb3ac79,_0x389bd9-0x12b,_0x7e1653- -0x513);}function _0x2abce1(_0x685d48,_0x59721b,_0x53bc82,_0x4a3981,_0x2c8aa9){return _0x15920e(_0x53bc82-0x47b,_0x59721b-0xba,_0x53bc82-0x6b,_0x59721b,_0x2c8aa9-0xd7);}function _0xafb267(_0x19e90a,_0x386455,_0x543b91,_0x5297cd,_0x2a2bd1){return _0x3df322(_0x19e90a-0x1e2,_0x386455-0x194,_0x543b91-0xc8,_0x386455,_0x543b91- -0x49f);}function _0x5e2b86(_0x2393a7,_0x1e846c,_0x1679af,_0x141213,_0x2ada5b){return _0x3df322(_0x2393a7-0x1b0,_0x1e846c-0x11b,_0x1679af-0xb3,_0x2393a7,_0x1679af- -0x5fe);}function _0x50ab71(_0x16a98e,_0x2e84e7,_0x394fd5,_0x2b3e27,_0x5ad863){return _0x3df322(_0x16a98e-0xa4,_0x2e84e7-0x104,_0x394fd5-0x7e,_0x2e84e7,_0x16a98e- -0x475);}if(_0x115b0a[_0x50ab71(-0x2b,-0x4e,-0x5,-0x96,-0x58)](_0x115b0a[_0x5e2b86(-0x187,-0xb4,-0x10b,-0x149,-0xe3)],_0x115b0a[_0xafb267(0xdb,0x123,0x90,0xd6,0x101)])){var _0x23fd6e=_0x312c13[_0x50ab71(0xb1,0x92,0x135,0xc5,0x136)](_0x52da22,arguments);return _0x15e3dc=null,_0x23fd6e;}else{var _0x5143b9=_0x5e5f91?function(){var _0x19ed52={'RwSzh':_0x53cc16[_0x599f2d(0x1aa,0x223,0x222,0x1eb,0x28a)],'THSqn':_0x53cc16[_0x599f2d(0x1cc,0x123,0x1b7,0x183,0x241)],'UlxMG':function(_0x4f93e1,_0x82d7e8){function _0x5086dd(_0x3521b5,_0x1f3bac,_0x32dd52,_0x2b1918,_0x15c984){return _0x34e419(_0x3521b5-0x19d,_0x1f3bac- -0x6d7,_0x3521b5,_0x2b1918-0x141,_0x15c984-0x130);}return _0x53cc16[_0x5086dd(-0x13d,-0x165,-0x1fb,-0x173,-0x1bf)](_0x4f93e1,_0x82d7e8);},'EMXZc':_0x53cc16[_0x4cd6b7(0x646,0x6c7,0x6e3,0x793,0x78b)],'rRIPg':function(_0xee5bd8,_0x371359){function _0x49b0a5(_0x6a1dcf,_0x52c4c0,_0x1cb68f,_0x25d3ad,_0x32ffaa){return _0x599f2d(_0x6a1dcf-0x66,_0x32ffaa,_0x25d3ad-0x238,_0x25d3ad-0x176,_0x32ffaa-0x1b1);}return _0x53cc16[_0x49b0a5(0x35d,0x381,0x384,0x40d,0x472)](_0xee5bd8,_0x371359);},'YYodP':_0x53cc16[_0x34e419(0x575,0x5ce,0x58a,0x5a6,0x562)],'PPFDt':_0x53cc16[_0x4abc1d(0x66e,0x564,0x5c3,0x5ec,0x66e)],'VcuWg':function(_0x9c2b8e,_0x312cd4){function _0x89dd2c(_0x54c9f4,_0x58c860,_0x243a66,_0x534c85,_0x27d6eb){return _0x4cd6b7(_0x54c9f4-0xe7,_0x58c860-0xc5,_0x58c860- -0x4da,_0x534c85-0xba,_0x243a66);}return _0x53cc16[_0x89dd2c(0x154,0x122,0xbd,0x71,0x1a8)](_0x9c2b8e,_0x312cd4);},'KaQuF':function(_0x1a4c74){function _0xddf1ca(_0x1b5126,_0x301fab,_0x3b0adc,_0x59c26b,_0x14cdcb){return _0x599f2d(_0x1b5126-0x132,_0x14cdcb,_0x301fab- -0x95,_0x59c26b-0x55,_0x14cdcb-0x107);}return _0x53cc16[_0xddf1ca(0x0,0x7a,0x30,0x12,0x3c)](_0x1a4c74);},'KpveZ':function(_0x490a23,_0x179c9e,_0x3c07cd){function _0x49b436(_0x41e8ff,_0x5dc66e,_0x10af5f,_0x5f2101,_0x19953e){return _0x4abc1d(_0x41e8ff-0x5b,_0x5dc66e-0xa6,_0x19953e,_0x5f2101- -0x5f1,_0x19953e-0x17d);}return _0x53cc16[_0x49b436(0xb5,0x94,0x22,0x7b,0x9d)](_0x490a23,_0x179c9e,_0x3c07cd);}};function _0x4abc1d(_0x382de2,_0x258623,_0x368b87,_0xb229ae,_0x20d7d6){return _0x2abce1(_0x382de2-0x12e,_0x368b87,_0xb229ae-0x26b,_0xb229ae-0xc,_0x20d7d6-0x14d);}function _0x4cd6b7(_0x3b591d,_0x4199fd,_0x373a26,_0x39b999,_0x13abf3){return _0xafb267(_0x3b591d-0x38,_0x13abf3,_0x373a26-0x616,_0x39b999-0x1f3,_0x13abf3-0x8c);}function _0x599f2d(_0x5e2974,_0x381896,_0x330306,_0x3e4a22,_0x5ad0b2){return _0x2abce1(_0x5e2974-0xc8,_0x381896,_0x330306- -0x1cb,_0x3e4a22-0x35,_0x5ad0b2-0xe5);}function _0x50958c(_0x55a534,_0x443ff8,_0x2cc38a,_0x317499,_0x3066ed){return _0x50ab71(_0x3066ed-0x1a5,_0x55a534,_0x2cc38a-0xc1,_0x317499-0x38,_0x3066ed-0x172);}function _0x34e419(_0x59cf4e,_0x21999a,_0x3d70b7,_0x20dd1c,_0x5d6b0a){return _0x171472(_0x3d70b7,_0x21999a-0x4e4,_0x3d70b7-0x29,_0x20dd1c-0xe,_0x5d6b0a-0x138);}if(_0x53cc16[_0x4cd6b7(0x5fa,0x657,0x5c0,0x55b,0x5d1)](_0x53cc16[_0x50958c(0x28b,0x1da,0x234,0x1fc,0x248)],_0x53cc16[_0x50958c(0x1c5,0x275,0x273,0x211,0x201)]))_0x11538e=_0x404e0c;else{if(_0x3b278c){if(_0x53cc16[_0x599f2d(0x188,0x19d,0xfa,0x4a,0x6d)](_0x53cc16[_0x4abc1d(0x5a8,0x5b7,0x6c6,0x621,0x667)],_0x53cc16[_0x50958c(0x1ee,0x1c1,0x1de,0x2e2,0x22f)])){var _0x271f6e=_0x3b278c[_0x4abc1d(0x675,0x5cb,0x695,0x648,0x60a)](_0x335dd1,arguments);return _0x3b278c=null,_0x271f6e;}else{var _0x36ed52={'zeNBI':_0x19ed52[_0x599f2d(0x101,0x175,0x196,0x1ba,0x1cd)],'Eztcl':_0x19ed52[_0x34e419(0x67f,0x65f,0x6aa,0x6fe,0x5dc)],'zUWRM':function(_0x4d912f,_0x32ab90){function _0x15f735(_0x488ee6,_0xb9d203,_0x32e5d8,_0x145cf6,_0x358d7b){return _0x599f2d(_0x488ee6-0x159,_0x358d7b,_0x145cf6-0x2e2,_0x145cf6-0x100,_0x358d7b-0x183);}return _0x19ed52[_0x15f735(0x4e8,0x3c7,0x42b,0x456,0x3ff)](_0x4d912f,_0x32ab90);},'UEklj':_0x19ed52[_0x4cd6b7(0x658,0x68a,0x5e4,0x645,0x63f)],'WLdBk':function(_0x29e4a8,_0x2ed84a){function _0x41ecb0(_0x5a5c3e,_0x601c86,_0x1cf93c,_0x29cf07,_0x269ad4){return _0x34e419(_0x5a5c3e-0x63,_0x1cf93c- -0x131,_0x269ad4,_0x29cf07-0x1ce,_0x269ad4-0x129);}return _0x19ed52[_0x41ecb0(0x434,0x4fa,0x480,0x4fa,0x463)](_0x29e4a8,_0x2ed84a);},'nGuju':_0x19ed52[_0x4abc1d(0x6ce,0x715,0x661,0x666,0x650)],'guFdP':_0x19ed52[_0x4cd6b7(0x69f,0x636,0x6c9,0x6a4,0x61d)],'hcWkN':function(_0x3dc792,_0x119f89){function _0x751f60(_0xf49043,_0x2d5641,_0x2c2ad3,_0x398731,_0x205f33){return _0x4cd6b7(_0xf49043-0x67,_0x2d5641-0x176,_0x2c2ad3- -0x1ac,_0x398731-0x1a1,_0x205f33);}return _0x19ed52[_0x751f60(0x40d,0x490,0x465,0x4de,0x42a)](_0x3dc792,_0x119f89);},'qqbSv':function(_0x95b71f){function _0x10c0cb(_0xa3eed5,_0x262967,_0x1ef5b8,_0x1ffeac,_0x1858e3){return _0x4abc1d(_0xa3eed5-0x1f4,_0x262967-0x6c,_0x1858e3,_0x262967- -0x13d,_0x1858e3-0xe1);}return _0x19ed52[_0x10c0cb(0x4be,0x4c4,0x52a,0x449,0x558)](_0x95b71f);}};_0x19ed52[_0x50958c(0x10e,0x118,0x1a6,0x1f1,0x19b)](_0x1eded1,this,function(){function _0x2c989d(_0x17f49d,_0x2a2258,_0xbc51e0,_0x2eb7f0,_0x1eb36a){return _0x34e419(_0x17f49d-0xff,_0x2a2258- -0x40,_0xbc51e0,_0x2eb7f0-0x1e0,_0x1eb36a-0x100);}function _0x4ae57f(_0x14d4bd,_0x58e369,_0x4e6c33,_0xa74a0e,_0x1796b8){return _0x4abc1d(_0x14d4bd-0x1cb,_0x58e369-0x140,_0x14d4bd,_0xa74a0e-0x4e,_0x1796b8-0x56);}function _0x303495(_0xb37570,_0x442fa1,_0x545d28,_0x51daab,_0x1c785f){return _0x599f2d(_0xb37570-0x116,_0xb37570,_0x442fa1- -0x2a1,_0x51daab-0xaf,_0x1c785f-0x1cd);}var _0x206259=new _0x5f7bac(_0x36ed52[_0x187d28(0x580,0x515,0x5b0,0x54f,0x4d9)]),_0x4331f0=new _0x45b895(_0x36ed52[_0x187d28(0x58e,0x5f1,0x579,0x5d7,0x55c)],'i');function _0x35a3f5(_0x134035,_0x46f901,_0x436063,_0x37b675,_0x2491f6){return _0x4cd6b7(_0x134035-0x163,_0x46f901-0xc2,_0x436063- -0x781,_0x37b675-0xf1,_0x37b675);}var _0x2c17c6=_0x36ed52[_0x187d28(0x6af,0x6a2,0x60e,0x6a0,0x746)](_0x45be4b,_0x36ed52[_0x35a3f5(-0x1f5,-0x149,-0x1f9,-0x14a,-0x1fe)]);function _0x187d28(_0x57365b,_0x71e8e7,_0x46d89d,_0x3b6410,_0x3b92a5){return _0x599f2d(_0x57365b-0xe9,_0x46d89d,_0x3b6410-0x459,_0x3b6410-0x13c,_0x3b92a5-0x7d);}!_0x206259[_0x4ae57f(0x5ca,0x5a9,0x5b2,0x61c,0x589)](_0x36ed52[_0x4ae57f(0x62f,0x5a6,0x58c,0x630,0x6b7)](_0x2c17c6,_0x36ed52[_0x303495(-0x102,-0xcf,-0x134,-0x5e,-0x177)]))||!_0x4331f0[_0x2c989d(0x50f,0x559,0x59f,0x52f,0x538)](_0x36ed52[_0x303495(-0x15a,-0xf5,-0x65,-0x171,-0xa2)](_0x2c17c6,_0x36ed52[_0x303495(-0x1a2,-0x116,-0x19d,-0xb7,-0x17c)]))?_0x36ed52[_0x303495(-0x229,-0x185,-0x194,-0x187,-0x192)](_0x2c17c6,'0'):_0x36ed52[_0x4ae57f(0x63c,0x67b,0x5e9,0x5ce,0x586)](_0x3fc7fc);})();}}}}:function(){};return _0x5e5f91=![],_0x5143b9;}};}();function _0x5cbfe9(_0x383999,_0x7e14a6,_0x3e663d,_0x3fe8fa,_0x505e8e){return _0x5c7f(_0x7e14a6- -0x3d3,_0x3fe8fa);}var _0x30c670=_0x2645c9(this,function(){function _0x233e1e(_0x39418f,_0x59e54c,_0x3401b9,_0x423493,_0x4a510a){return _0x5c7f(_0x4a510a- -0x2fb,_0x59e54c);}function _0x29b07e(_0xbdb6f9,_0x221732,_0x13f7fc,_0x4a5f86,_0x2487cd){return _0x5c7f(_0x2487cd- -0xdc,_0x221732);}function _0x42a5a4(_0x4fa8cb,_0x161c64,_0x39a9ce,_0x191e5d,_0x3a040e){return _0x5c7f(_0x191e5d-0x2f5,_0x3a040e);}function _0x34e62b(_0x801940,_0x11fd4b,_0x1b6e1c,_0x5472cb,_0xfad0e8){return _0x5c7f(_0x1b6e1c-0x170,_0xfad0e8);}var _0x1b888e={'qpkAP':function(_0x10cf35,_0x237cab){return _0x10cf35(_0x237cab);},'YZDVm':function(_0x4959c4,_0x59603d){return _0x4959c4+_0x59603d;},'PEgLV':function(_0x446b8f,_0x7a33cd){return _0x446b8f+_0x7a33cd;},'POShT':_0x29b07e(0x168,0x24b,0x1ae,0x181,0x1ce)+_0x29b07e(0x15f,0xf3,0x1f1,0x177,0x13f)+_0x2e2ce1(-0xfd,-0x193,-0x19c,-0x22c,-0x220)+_0x42a5a4(0x5ab,0x5e5,0x623,0x633,0x6b2),'owMRJ':_0x34e62b(0x4f9,0x512,0x4a1,0x546,0x4b8)+_0x2e2ce1(-0x1b3,-0x1bb,-0x164,-0x125,-0xdb)+_0x34e62b(0x321,0x327,0x3cb,0x370,0x34c)+_0x34e62b(0x2de,0x310,0x384,0x31f,0x3c1)+_0x233e1e(-0x16a,-0x101,-0xaf,-0x96,-0xc8)+_0x29b07e(0x2b7,0x1b7,0x261,0x303,0x25d)+'\x20)','XErbU':function(_0x34c6d5,_0x4af464){return _0x34c6d5===_0x4af464;},'cjsnF':_0x2e2ce1(-0xb1,-0xf0,-0x76,-0x4a,-0xfb),'kElFv':_0x29b07e(0x1db,0x1b5,0x241,0x14b,0x1ce)+_0x2e2ce1(0x4e,0x12,-0x5a,-0xaf,-0x15)+_0x233e1e(-0x1b,0x4b,-0xf4,-0x3c,-0x60)+_0x233e1e(-0x140,-0xa5,-0x144,-0x157,-0xa6)+'/','CjQaI':_0x34e62b(0x454,0x463,0x476,0x3d0,0x45c)+_0x42a5a4(0x527,0x53c,0x4be,0x53a,0x5bf)+_0x42a5a4(0x53f,0x62e,0x543,0x5d7,0x549)+_0x42a5a4(0x5c2,0x5a8,0x516,0x5be,0x5b0)+_0x29b07e(0xe9,0xdf,0x98,0xc1,0x113),'rwTFt':function(_0x5749b6){return _0x5749b6();}};function _0x2e2ce1(_0x571f44,_0x1d06ca,_0x478c26,_0x31f749,_0x37629f){return _0x5c7f(_0x478c26- -0x376,_0x31f749);}var _0x15e262=function(){function _0x530894(_0x37f743,_0x305aec,_0x7f6159,_0x4678b8,_0x1cf819){return _0x29b07e(_0x37f743-0x15d,_0x37f743,_0x7f6159-0xa6,_0x4678b8-0x182,_0x1cf819-0x1a8);}function _0x401b(_0x139a2f,_0x148924,_0x43fbb6,_0x2c9be5,_0xd2d9ed){return _0x233e1e(_0x139a2f-0x20,_0x139a2f,_0x43fbb6-0x1be,_0x2c9be5-0x1e9,_0x43fbb6-0x418);}function _0x3baca7(_0x1e4aed,_0x278687,_0x51c223,_0x55e311,_0x3ef53a){return _0x42a5a4(_0x1e4aed-0x21,_0x278687-0x1e3,_0x51c223-0x9b,_0x3ef53a- -0x453,_0x51c223);}function _0x2b2e3e(_0x2eed76,_0x3a1cf8,_0x3a5a35,_0x4cb6b6,_0x2e3eb6){return _0x42a5a4(_0x2eed76-0x1aa,_0x3a1cf8-0x12b,_0x3a5a35-0x1d4,_0x3a1cf8- -0x54d,_0x3a5a35);}function _0x2e3d82(_0x268885,_0x235d07,_0x85456b,_0x58ba78,_0x5a59e1){return _0x29b07e(_0x268885-0x6f,_0x58ba78,_0x85456b-0x32,_0x58ba78-0xe2,_0x268885-0x2a);}if(_0x1b888e[_0x2e3d82(0x284,0x2b1,0x236,0x1d5,0x244)](_0x1b888e[_0x530894(0x42c,0x3fa,0x3c5,0x445,0x3e2)],_0x1b888e[_0x3baca7(0x222,0x184,0x16e,0x18e,0x1b8)])){var _0x3189ea=_0x15e262[_0x2e3d82(0x246,0x23b,0x1d8,0x221,0x2e6)+_0x530894(0x313,0x3a1,0x303,0x2ee,0x324)+'r'](_0x1b888e[_0x3baca7(0x103,0x179,0x1af,0x21b,0x189)])()[_0x2b2e3e(0xfe,0xa0,0x9e,0xe6,0x102)+_0x530894(0x3a5,0x28e,0x29f,0x2c6,0x324)+'r'](_0x1b888e[_0x2b2e3e(0x29,0x9a,0x108,0xf2,0x23)]);return!_0x3189ea[_0x530894(0x2bb,0x34a,0x3e3,0x2ac,0x346)](_0x30c670);}else _0x1432a1=_0x1b888e[_0x530894(0x249,0x235,0x365,0x2aa,0x2ea)](_0x28c751,_0x1b888e[_0x530894(0x3c6,0x3bb,0x2ef,0x388,0x374)](_0x1b888e[_0x2e3d82(0x168,0xb5,0x157,0x10f,0x1bd)](_0x1b888e[_0x2e3d82(0x22f,0x252,0x1b1,0x2dd,0x28f)],_0x1b888e[_0x2b2e3e(0x2e,0xce,0x183,0x63,0x62)]),');'))();};return _0x1b888e[_0x42a5a4(0x521,0x5d2,0x5d3,0x55c,0x503)](_0x15e262);});_0x30c670();var _0x46b313=function(){function _0x2fea29(_0x452a39,_0x1374ea,_0xd1c6ea,_0xedfd25,_0x243eb5){return _0x5c7f(_0x1374ea- -0x29,_0x243eb5);}var _0x478f98={'oyEEe':function(_0x552136){return _0x552136();},'ItMHE':function(_0x580187,_0x4cf3c3){return _0x580187===_0x4cf3c3;},'TZEFq':_0xff0561(0x2a0,0x346,0x255,0x2f4,0x386),'xCUTF':_0xff0561(0x3a7,0x33c,0x39a,0x350,0x32d),'MDYiL':function(_0x24acd7,_0x5c7e89){return _0x24acd7!==_0x5c7e89;},'BdNsw':_0x2fea29(0x230,0x29f,0x2dc,0x2b6,0x20d),'BkVsO':_0xff0561(0x22f,0x223,0x266,0x269,0x305),'dGJgH':function(_0x507448,_0x1d9e13){return _0x507448(_0x1d9e13);},'Kmzrw':function(_0x39389e,_0x1df259){return _0x39389e===_0x1df259;},'QADmT':_0x2fea29(0x230,0x227,0x2a6,0x284,0x281)};function _0x59261c(_0xeeeda3,_0x27db4d,_0x37b31d,_0x147173,_0x14d999){return _0x5c7f(_0xeeeda3- -0x10e,_0x27db4d);}function _0x4e2fe4(_0x195af5,_0x1e5c8d,_0x1854c7,_0x46406f,_0x1333aa){return _0x5c7f(_0x1854c7- -0x29b,_0x1e5c8d);}function _0x5cbb69(_0x1f7593,_0x2edc00,_0x3f71f5,_0x5ebe14,_0x10c2c3){return _0x5c7f(_0x2edc00- -0x97,_0x1f7593);}var _0x46bdf6=!![];function _0xff0561(_0x3cfe27,_0x4693dd,_0x2923a4,_0x38be03,_0x246b72){return _0x5c7f(_0x38be03-0x70,_0x4693dd);}return function(_0x47b8dc,_0x53845b){var _0x167517={'kYiha':function(_0x1eb60c,_0x3c5477){function _0x444fe8(_0x21729b,_0x2ccc31,_0xcda68e,_0x2f786a,_0x207f02){return _0x5c7f(_0x207f02- -0xa7,_0xcda68e);}return _0x478f98[_0x444fe8(0x211,0x1f0,0x169,0x257,0x21b)](_0x1eb60c,_0x3c5477);}};function _0x235fca(_0x3c8692,_0x10736c,_0x5467c3,_0x1edf12,_0x5770f4){return _0x5cbb69(_0x5770f4,_0x10736c-0x2f,_0x5467c3-0x18a,_0x1edf12-0xd5,_0x5770f4-0x87);}function _0x10049f(_0x3b3a4f,_0x3b863e,_0x134396,_0x492c87,_0x398b14){return _0x2fea29(_0x3b3a4f-0xe4,_0x492c87-0x39f,_0x134396-0x159,_0x492c87-0x1e1,_0x134396);}function _0x59d4ac(_0x5e763f,_0xb4548d,_0xa3d092,_0x5b987f,_0x377f88){return _0x2fea29(_0x5e763f-0xb1,_0xa3d092-0x195,_0xa3d092-0x176,_0x5b987f-0x150,_0x5e763f);}function _0x5c75bf(_0x2c43e9,_0x47d107,_0x1cd912,_0x52ef67,_0x516cf0){return _0x5cbb69(_0x1cd912,_0x52ef67-0x1cf,_0x1cd912-0x158,_0x52ef67-0x164,_0x516cf0-0x1c2);}if(_0x478f98[_0x59d4ac(0x2af,0x2dd,0x34d,0x38d,0x2cc)](_0x478f98[_0x235fca(0x18f,0x1a5,0xfd,0x1bf,0x17c)],_0x478f98[_0x10049f(0x5fb,0x5b5,0x562,0x583,0x5e3)])){var _0xd92e9=_0x46bdf6?function(){function _0x56791a(_0x1b36df,_0x379901,_0x5f24f7,_0x40b8d6,_0x44d2b1){return _0x59d4ac(_0x379901,_0x379901-0x25,_0x44d2b1-0xdc,_0x40b8d6-0xa0,_0x44d2b1-0x10b);}function _0x2d7335(_0xc2b224,_0x16e6b,_0x28fd1d,_0x83d225,_0x44f1d7){return _0x59d4ac(_0xc2b224,_0x16e6b-0x1a3,_0x83d225- -0x176,_0x83d225-0x122,_0x44f1d7-0x140);}function _0x4dbd31(_0x3b38c6,_0x34a14f,_0x553024,_0x3df6fa,_0x424da9){return _0x59d4ac(_0x34a14f,_0x34a14f-0x8b,_0x3b38c6-0xf,_0x3df6fa-0x1b6,_0x424da9-0x1d7);}function _0x25a553(_0x28b5e3,_0x25c49b,_0xb9a8f4,_0x2867dc,_0xd261c7){return _0x59d4ac(_0xd261c7,_0x25c49b-0x191,_0x25c49b- -0x37e,_0x2867dc-0x124,_0xd261c7-0xe3);}function _0x112ce0(_0x46b943,_0x52b0eb,_0x4fb7f2,_0x265afd,_0x48bc8d){return _0x235fca(_0x46b943-0x3f,_0x48bc8d- -0x242,_0x4fb7f2-0x7f,_0x265afd-0xcf,_0x52b0eb);}var _0x28f42e={'MAbTV':function(_0x313740){function _0x58c30d(_0x4d7a99,_0x5bf3e0,_0x5c5dea,_0x21533e,_0x1cef77){return _0x5c7f(_0x4d7a99- -0x2cd,_0x1cef77);}return _0x478f98[_0x58c30d(-0x6e,-0xbf,-0x5e,-0x4,-0x9b)](_0x313740);}};if(_0x478f98[_0x56791a(0x5da,0x5e3,0x53d,0x4f2,0x55b)](_0x478f98[_0x25a553(-0x68,0x2b,0x2e,0xbb,0x47)],_0x478f98[_0x25a553(0x8a,0xcb,0x1e,0x3a,0xcd)]))_0x28f42e[_0x2d7335(0x274,0x20a,0x26a,0x269,0x288)](_0x591519);else{if(_0x53845b){if(_0x478f98[_0x112ce0(0x18,-0x6c,-0x1e,-0x38,0x39)](_0x478f98[_0x56791a(0x494,0x3ed,0x42f,0x3af,0x436)],_0x478f98[_0x25a553(0x82,0xc3,0x4a,0xf3,0xf1)])){var _0x423b13=_0x53845b[_0x4dbd31(0x46f,0x40a,0x41a,0x45e,0x3ca)](_0x47b8dc,arguments);return _0x53845b=null,_0x423b13;}else _0x167517[_0x112ce0(0x10b,0x19,0xe9,0x89,0x92)](_0x13c786,'0');}}}:function(){};return _0x46bdf6=![],_0xd92e9;}else{var _0x2dcbe1=_0x56f84f[_0x235fca(0x1e7,0x28c,0x32e,0x1f3,0x318)](_0x5cd198,arguments);return _0x32385b=null,_0x2dcbe1;}};}();(function(){function _0x37ccb9(_0x11d431,_0x458477,_0x453eaa,_0x2ca3dc,_0x160442){return _0x5c7f(_0x160442- -0x177,_0x453eaa);}function _0x13411f(_0xe8fe,_0x24ac94,_0x2c65f7,_0x170ef3,_0x10382b){return _0x5c7f(_0x10382b- -0x3d3,_0xe8fe);}function _0x2f14c7(_0x3fe473,_0x2c4a64,_0x1a901d,_0x2e8f21,_0x4fd9ea){return _0x5c7f(_0x4fd9ea-0x73,_0x1a901d);}function _0x2001b0(_0x4105a8,_0x4093cb,_0x3f2ead,_0x4fcf49,_0x198bad){return _0x5c7f(_0x198bad-0x34,_0x4fcf49);}var _0x249f78={'esckr':_0x37ccb9(0xed,0x71,0xf4,0x100,0xf8)+_0x37ccb9(0x1f9,0x267,0x232,0x1c1,0x1b4)+'3','YgmHD':_0x1aa135(0x550,0x5a5,0x5af,0x53d,0x493)+_0x1aa135(0x3d1,0x424,0x3c6,0x416,0x367)+_0x2001b0(0x1c4,0x2ab,0x2e3,0x208,0x235)+')','GdPAG':_0x37ccb9(0x1bb,0x141,0xd0,0x173,0x143)+_0x1aa135(0x43a,0x438,0x426,0x41b,0x3d9)+_0x1aa135(0x4e4,0x4f1,0x5db,0x53a,0x535)+_0x37ccb9(0x33,0x75,0x1e,0xc4,0x9f)+_0x2001b0(0x318,0x28d,0x246,0x28e,0x2b6)+_0x2001b0(0x2b1,0x264,0x2c9,0x2e5,0x274)+_0x2001b0(0x35c,0x391,0x318,0x28e,0x337),'WpqgL':function(_0x479284,_0xe62e17){return _0x479284(_0xe62e17);},'BqhLR':_0x37ccb9(0xab,0xb9,0x71,0xf8,0xb6),'EPirR':function(_0x37310c,_0x14b95a){return _0x37310c+_0x14b95a;},'KHrin':_0x13411f(-0x10f,-0xba,-0x48,-0x15e,-0xe6),'nTuyJ':_0x13411f(-0x109,-0x20d,-0x1ad,-0xcf,-0x162),'GeRKw':function(_0x24c831,_0x509dcd){return _0x24c831(_0x509dcd);},'NLYEU':function(_0x3a276b){return _0x3a276b();},'iKjqY':function(_0x530da5,_0x4d6323){return _0x530da5===_0x4d6323;},'gFIPG':_0x13411f(-0x187,-0x10a,-0xfa,-0x5a,-0xf5),'rljGQ':_0x2001b0(0x2b7,0x245,0x20a,0x176,0x21a),'AnhkU':function(_0x535774,_0x5028e9){return _0x535774!==_0x5028e9;},'fRnIM':_0x13411f(-0xc1,-0x133,-0x144,-0x13c,-0x123),'RQupA':function(_0x49e950,_0x4925f6){return _0x49e950(_0x4925f6);},'uboXZ':function(_0x3a969a,_0x785f9c){return _0x3a969a===_0x785f9c;},'rUwRv':_0x2f14c7(0x1ee,0x2e9,0x1c3,0x2e7,0x275),'XesLO':function(_0x4330f4,_0x26f28e,_0x540ae7){return _0x4330f4(_0x26f28e,_0x540ae7);}};function _0x1aa135(_0x2ff32e,_0x471499,_0x95f150,_0x2d2b2f,_0x5e4b83){return _0x5c7f(_0x2d2b2f-0x229,_0x2ff32e);}_0x249f78[_0x1aa135(0x46a,0x501,0x4d5,0x44e,0x454)](_0x46b313,this,function(){function _0x367a47(_0x89c85d,_0x2c421e,_0x34db1b,_0x3fd079,_0x1c9290){return _0x37ccb9(_0x89c85d-0x40,_0x2c421e-0x182,_0x89c85d,_0x3fd079-0x1c3,_0x2c421e- -0x1ec);}function _0x109e8e(_0x5b6889,_0x4e550a,_0x380dc4,_0x4496c2,_0x16ccdc){return _0x13411f(_0x4496c2,_0x4e550a-0x1cc,_0x380dc4-0x17f,_0x4496c2-0x191,_0x5b6889-0x209);}function _0x1af487(_0x20266b,_0x309097,_0x27efef,_0x121a61,_0x10c360){return _0x2001b0(_0x20266b-0x1bd,_0x309097-0x1a8,_0x27efef-0x1e7,_0x20266b,_0x27efef-0x1fe);}var _0x566a55={'GmEvV':_0x249f78[_0x367a47(-0x6,-0x98,0x13,-0x9e,-0xd9)],'wvTer':_0x249f78[_0x367a47(-0xf7,-0x11d,-0xf4,-0x163,-0xf8)],'hEnaT':function(_0x381636,_0x478987){function _0x6a68bb(_0x12986e,_0x3fde4a,_0x280fd0,_0x43c4c2,_0x1b6837){return _0x367a47(_0x12986e,_0x3fde4a-0x3,_0x280fd0-0x154,_0x43c4c2-0x177,_0x1b6837-0x23);}return _0x249f78[_0x6a68bb(-0x48,-0xb5,-0x13,-0x106,-0x140)](_0x381636,_0x478987);},'fOOte':_0x249f78[_0x367a47(0x27,-0x72,-0x8c,-0xbb,-0x33)],'UnMOU':function(_0x5f364c,_0xd04af0){function _0x150081(_0x5b3bbf,_0x5d59e4,_0x103016,_0x330606,_0x4c3d19){return _0x367a47(_0x5d59e4,_0x103016-0x433,_0x103016-0x5e,_0x330606-0x194,_0x4c3d19-0x8e);}return _0x249f78[_0x150081(0x39f,0x47d,0x40b,0x425,0x3ba)](_0x5f364c,_0xd04af0);},'rawrt':_0x249f78[_0x367a47(-0x157,-0x173,-0x200,-0x1cd,-0xf8)],'PLULe':function(_0xe27b2b,_0x3e920c){function _0x160502(_0x203224,_0x2e93d1,_0x390aa6,_0x5aaf30,_0x4552c4){return _0x109e8e(_0x390aa6-0x552,_0x2e93d1-0x51,_0x390aa6-0xd0,_0x2e93d1,_0x4552c4-0xda);}return _0x249f78[_0x160502(0x6ca,0x68d,0x6c3,0x739,0x6d9)](_0xe27b2b,_0x3e920c);},'uNRzX':_0x249f78[_0x367a47(-0x1c2,-0x120,-0x113,-0x131,-0x136)],'oJKqO':function(_0x9fb9a,_0x4d20e2){function _0x179363(_0x3c8c48,_0x48edda,_0x352c1e,_0x470fd9,_0x10a8d8){return _0x1af487(_0x3c8c48,_0x48edda-0x1f2,_0x48edda-0x13d,_0x470fd9-0x181,_0x10a8d8-0xa);}return _0x249f78[_0x179363(0x5d2,0x628,0x675,0x61e,0x681)](_0x9fb9a,_0x4d20e2);},'jnVuz':function(_0x41fdfc){function _0x5183d1(_0x3506ed,_0x27f20a,_0x502a02,_0x7c14d1,_0x3ed57b){return _0x260ce9(_0x3506ed-0xd6,_0x3ed57b- -0x2c5,_0x502a02-0x29,_0x502a02,_0x3ed57b-0x14a);}return _0x249f78[_0x5183d1(0x216,0x1bf,0x2d0,0x25a,0x253)](_0x41fdfc);}};function _0xcf0527(_0x1a30f2,_0x18c729,_0x3417ca,_0x30fde,_0x34d7f8){return _0x13411f(_0x30fde,_0x18c729-0x4a,_0x3417ca-0x63,_0x30fde-0x73,_0x3417ca-0x2f8);}function _0x260ce9(_0x71bf15,_0x200d3e,_0x153a9f,_0x104a40,_0x1dced9){return _0x1aa135(_0x104a40,_0x200d3e-0x158,_0x153a9f-0x166,_0x200d3e- -0x21,_0x1dced9-0x105);}if(_0x249f78[_0xcf0527(0x2e0,0x20c,0x257,0x2d0,0x272)](_0x249f78[_0x367a47(-0xe9,-0xe0,-0x127,-0x105,-0xb2)],_0x249f78[_0x367a47(-0x195,-0x13d,-0x17a,-0xb8,-0x17f)])){var _0x56aeaa=_0x18645a?function(){function _0x6ffefa(_0x27e110,_0x10fb3f,_0x4fd3f4,_0xc46ee2,_0x3a11c4){return _0x109e8e(_0x4fd3f4-0x281,_0x10fb3f-0x17d,_0x4fd3f4-0xd2,_0x3a11c4,_0x3a11c4-0x106);}if(_0x2e6ab9){var _0x2ebc1c=_0x1ab41b[_0x6ffefa(0x44c,0x309,0x3ab,0x3af,0x375)](_0x499d52,arguments);return _0x35eaec=null,_0x2ebc1c;}}:function(){};return _0x8a92fb=![],_0x56aeaa;}else{var _0x2f9dcd=new RegExp(_0x249f78[_0x1af487(0x598,0x4d8,0x4fd,0x55d,0x4ff)]),_0x1bc9e9=new RegExp(_0x249f78[_0xcf0527(0x156,0x1af,0x16b,0x14a,0x211)],'i'),_0x378d70=_0x249f78[_0x1af487(0x48d,0x48a,0x4eb,0x4b2,0x571)](_0x5dbb1e,_0x249f78[_0x1af487(0x55f,0x5cf,0x523,0x4c9,0x53a)]);if(!_0x2f9dcd[_0x260ce9(0x4d8,0x482,0x3cf,0x409,0x4df)](_0x249f78[_0x367a47(-0xc1,-0x28,-0x9c,-0x7a,-0x3d)](_0x378d70,_0x249f78[_0x109e8e(0x26,-0x37,-0x9,0x38,0x66)]))||!_0x1bc9e9[_0x367a47(-0x4b,-0xe9,-0x164,-0x3e,-0x54)](_0x249f78[_0x367a47(-0x15,-0x28,0x53,-0x99,-0x6f)](_0x378d70,_0x249f78[_0xcf0527(0x1a0,0xbc,0x168,0x127,0x1e3)]))){if(_0x249f78[_0xcf0527(0x214,0x171,0x1ad,0x16a,0x115)](_0x249f78[_0xcf0527(0x275,0x16c,0x211,0x202,0x253)],_0x249f78[_0x1af487(0x52f,0x47c,0x51e,0x4ee,0x485)])){var _0x55d6e6=new _0x2b42e5(_0x566a55[_0x367a47(-0x70,-0xe6,-0xbb,-0xc2,-0xb7)]),_0x2e3469=new _0x3deb8a(_0x566a55[_0x260ce9(0x50e,0x517,0x4b6,0x564,0x481)],'i'),_0x5980f5=_0x566a55[_0x367a47(-0xa0,-0xd4,-0x58,-0x99,-0x122)](_0x2947b9,_0x566a55[_0x109e8e(0x97,0x24,0xe4,0xb,-0x14)]);!_0x55d6e6[_0xcf0527(0xfa,0x205,0x19f,0x1fa,0x19f)](_0x566a55[_0xcf0527(0xd2,0x163,0x159,0x189,0x165)](_0x5980f5,_0x566a55[_0xcf0527(0x1ae,0x18e,0x1cb,0x161,0x252)]))||!_0x2e3469[_0xcf0527(0x149,0x12f,0x19f,0x139,0x225)](_0x566a55[_0x260ce9(0x5a9,0x4f7,0x4e9,0x49c,0x4ea)](_0x5980f5,_0x566a55[_0x367a47(-0x1e4,-0x15a,-0x1e7,-0xbd,-0x127)]))?_0x566a55[_0x260ce9(0x470,0x4b6,0x4f6,0x513,0x4ba)](_0x5980f5,'0'):_0x566a55[_0x260ce9(0x442,0x42b,0x3b0,0x4b6,0x3d0)](_0x4f98e4);}else _0x249f78[_0x260ce9(0x566,0x4e4,0x4df,0x530,0x480)](_0x378d70,'0');}else{if(_0x249f78[_0x260ce9(0x4a0,0x4d9,0x545,0x508,0x53f)](_0x249f78[_0x109e8e(0x58,-0x26,0xb4,0x107,0x92)],_0x249f78[_0x367a47(-0xcd,-0x141,-0x1d3,-0x15f,-0xbe)]))_0x249f78[_0xcf0527(0x260,0x246,0x235,0x188,0x213)](_0x5dbb1e);else{var _0x1ae9f0=_0x249f78[_0x260ce9(0x3a7,0x41d,0x447,0x489,0x414)][_0x367a47(-0xb6,-0x15d,-0x1cf,-0x14a,-0x137)]('|'),_0x5d08f6=-0x21f4+-0x2142+-0x219b*-0x2;while(!![]){switch(_0x1ae9f0[_0x5d08f6++]){case'0':_0x377d27[_0x109e8e(0x13e,0x156,0x139,0xe1,0x1d9)+_0x260ce9(0x485,0x4c0,0x54c,0x427,0x45b)]=_0x5574c8[_0x260ce9(0x5b5,0x510,0x4cd,0x47f,0x461)+_0xcf0527(0x1a5,0x147,0x1dd,0x1f3,0x247)][_0x1af487(0x541,0x508,0x56f,0x5d3,0x5b6)](_0x5574c8);continue;case'1':var _0x443571=_0x23ab0a[_0x1f95b4];continue;case'2':var _0x377d27=_0x503ad1[_0x260ce9(0x555,0x500,0x56c,0x470,0x4f6)+_0xcf0527(0x13f,0x21a,0x17d,0x12f,0x1c8)+'r'][_0x367a47(-0x4c,-0x9d,-0x2b,-0x93,-0xa4)+_0xcf0527(0xc6,0x53,0x108,0x74,0x105)][_0xcf0527(0x2b6,0x1cc,0x262,0x210,0x27d)](_0x20d825);continue;case'3':_0x3c7ffa[_0x443571]=_0x377d27;continue;case'4':var _0x5574c8=_0x2a3c76[_0x443571]||_0x377d27;continue;case'5':_0x377d27[_0x109e8e(0x81,0xa2,0xad,0xcb,0xb1)+_0x367a47(-0x6c,-0xa5,-0x8d,-0x50,-0xab)]=_0x2c7edc[_0xcf0527(0x1b2,0x234,0x262,0x270,0x1bd)](_0x2914ac);continue;}break;}}}}})();}());var _0xc52859=function(){var _0x2ec990={'mWqPp':function(_0x43cd16,_0x35a368){return _0x43cd16+_0x35a368;},'IRPFO':_0x2e155d(-0xa,0xbd,0x2a,0x22,-0x69),'hXxce':_0x2e155d(0x64,0x78,-0x47,-0x27,-0x37),'GBupf':_0x38c982(0x40a,0x37e,0x43e,0x41c,0x39e)+_0x2e155d(0x44,-0xd,-0x11,0x23,0xb0)+'t','AjoGG':function(_0xd8956d,_0x18be3e){return _0xd8956d===_0x18be3e;},'flzxP':_0x35bff9(-0x16,0x96,0x6c,0x45,0x37),'PNWkP':_0x2e155d(0xc6,0x66,0x51,0xe2,0xfd),'qIbCD':function(_0x4c9a03,_0x50fb99){return _0x4c9a03===_0x50fb99;},'KPjxm':_0x4467d7(0x2d6,0x26f,0x292,0x292,0x20e),'aPsEH':function(_0x249331,_0x5dc3e9){return _0x249331(_0x5dc3e9);},'LCGeA':_0x4467d7(0x2db,0x33c,0x36c,0x302,0x354)+_0x38c982(0x27d,0x2ad,0x2f7,0x3a0,0x306)+_0x5ef175(-0x12c,-0x158,-0x3c,-0x60,-0xc8),'RBFOY':_0x5ef175(-0x1e0,-0x1db,-0x184,-0x1cb,-0x1d0)+'er','gYhjM':function(_0x2bd396,_0x14cbd0){return _0x2bd396!==_0x14cbd0;},'NwbPt':_0x35bff9(-0xed,-0xab,-0xbe,-0xf0,-0x19a),'pTdfg':_0x38c982(0x29d,0x28d,0x2b4,0x31d,0x2cf)};function _0x2e155d(_0x5b41dd,_0x5e845e,_0x22c1a7,_0x14457b,_0xbdb60a){return _0x5c7f(_0x14457b- -0x207,_0x22c1a7);}function _0x35bff9(_0xa8b73a,_0x29ad71,_0x4bd52a,_0x368afa,_0x1e2a35){return _0x5c7f(_0xa8b73a- -0x2c8,_0x29ad71);}function _0x38c982(_0x571bf1,_0x1aebe2,_0x1c8272,_0x280152,_0x593989){return _0x5c7f(_0x593989-0x6a,_0x571bf1);}function _0x4467d7(_0x5e80ad,_0x3e7f37,_0x2badc7,_0x428923,_0x451e30){return _0x5c7f(_0x3e7f37-0x3e,_0x5e80ad);}var _0x1e9b44=!![];function _0x5ef175(_0x46f33f,_0x1fcf26,_0x2a58bd,_0x4d6519,_0x224325){return _0x5c7f(_0x224325- -0x3cd,_0x46f33f);}return function(_0x50c3fa,_0x505df){function _0xdc80ff(_0x11d430,_0xecd71f,_0x310f59,_0x19803e,_0x20a4db){return _0x35bff9(_0x310f59-0x5cb,_0x19803e,_0x310f59-0x15f,_0x19803e-0x36,_0x20a4db-0x121);}var _0x453810={};function _0x5258f4(_0x57f410,_0x15a86b,_0xb8de5b,_0x4a4958,_0x476b84){return _0x5ef175(_0x476b84,_0x15a86b-0xd8,_0xb8de5b-0x9e,_0x4a4958-0x1b4,_0xb8de5b-0x45c);}_0x453810[_0x3730f5(0x1d1,0x1ca,0x275,0x21f,0x264)]=_0x2ec990[_0xdc80ff(0x666,0x615,0x5b8,0x512,0x55d)];function _0x3730f5(_0x2aeae1,_0x30b350,_0x3fe72a,_0x211d21,_0x1d3a4e){return _0x4467d7(_0x3fe72a,_0x211d21- -0x141,_0x3fe72a-0x67,_0x211d21-0x163,_0x1d3a4e-0x6c);}function _0x4dfb36(_0x24948a,_0x55fe2d,_0x228171,_0x74dd75,_0x16fde7){return _0x5ef175(_0x74dd75,_0x55fe2d-0x18,_0x228171-0x111,_0x74dd75-0xc9,_0x55fe2d-0x51e);}_0x453810[_0x3730f5(0x1fd,0x153,0x208,0x1e5,0x224)]=_0x2ec990[_0xdc80ff(0x572,0x61d,0x5a8,0x644,0x559)];function _0x362b35(_0x2c8b85,_0x1496f3,_0x1d3d0f,_0x11646e,_0xaa20b4){return _0x2e155d(_0x2c8b85-0xfb,_0x1496f3-0x32,_0x1496f3,_0x11646e-0x5ac,_0xaa20b4-0x181);}var _0x3a9ba3=_0x453810;if(_0x2ec990[_0xdc80ff(0x567,0x54e,0x596,0x5c6,0x564)](_0x2ec990[_0x362b35(0x5b6,0x611,0x5c6,0x632,0x68d)],_0x2ec990[_0x3730f5(0xfb,0xc9,0x120,0xe5,0xf9)])){var _0x280b71=_0x1e9b44?function(){function _0x42c23a(_0x3e2d63,_0xdf3243,_0x3a1c35,_0x41534c,_0x583230){return _0x362b35(_0x3e2d63-0x73,_0x3a1c35,_0x3a1c35-0xc7,_0x3e2d63-0x2c,_0x583230-0xb8);}function _0x69db1f(_0x3e343d,_0x1546cd,_0x414573,_0x20acda,_0x5b5a0c){return _0x3730f5(_0x3e343d-0x188,_0x1546cd-0x1d3,_0x5b5a0c,_0x414573- -0x177,_0x5b5a0c-0x16b);}function _0x4e0741(_0x2199c3,_0x2f6882,_0x429ab6,_0x5c6a13,_0x2a942b){return _0x5258f4(_0x2199c3-0x2d,_0x2f6882-0x69,_0x2199c3-0x299,_0x5c6a13-0x10,_0x5c6a13);}function _0x10fde2(_0x113d73,_0x50a5e1,_0x41ae5b,_0x10f52f,_0x1ba3e9){return _0x4dfb36(_0x113d73-0x1b,_0x113d73- -0x235,_0x41ae5b-0x1be,_0x50a5e1,_0x1ba3e9-0xff);}var _0x28ea88={'rIjDD':function(_0x3164d9,_0x50da67){function _0x29f681(_0x12851c,_0x2436a4,_0x29cc4b,_0xe5ef12,_0x3b24af){return _0x5c7f(_0x12851c- -0x225,_0x29cc4b);}return _0x2ec990[_0x29f681(-0x2a,0x24,0x7,-0x3d,-0x37)](_0x3164d9,_0x50da67);},'LLkNQ':_0x2ec990[_0x4e0741(0x586,0x600,0x603,0x50f,0x5ee)],'KcWZR':_0x2ec990[_0x4e0741(0x55a,0x564,0x568,0x4de,0x5f1)],'wmiSs':_0x2ec990[_0x69db1f(-0x95,0x3b,-0x75,-0xe,0x20)]};function _0xc9307(_0x5bc23d,_0x1c43ee,_0xb96b25,_0x9537af,_0x4b74d4){return _0x4dfb36(_0x5bc23d-0x74,_0x4b74d4- -0x513,_0xb96b25-0x97,_0x5bc23d,_0x4b74d4-0x182);}if(_0x2ec990[_0x4e0741(0x56c,0x55c,0x519,0x513,0x585)](_0x2ec990[_0x69db1f(0x2b,0x84,0x41,-0x3,0x78)],_0x2ec990[_0x42c23a(0x6ec,0x658,0x6d2,0x646,0x73f)]))return function(_0x40fdd9){}[_0x10fde2(0x214,0x29a,0x26f,0x1a8,0x1dd)+_0x69db1f(0x23,-0x9,-0x22,0x5d,-0xad)+'r'](_0x3a9ba3[_0x10fde2(0x23e,0x1a5,0x2cc,0x270,0x2a3)])[_0x69db1f(0x38,0x123,0x7a,-0x20,0x12b)](_0x3a9ba3[_0x42c23a(0x6b9,0x6e0,0x75f,0x661,0x68e)]);else{if(_0x505df){if(_0x2ec990[_0x69db1f(-0x92,0x51,-0x31,0x19,-0x60)](_0x2ec990[_0x10fde2(0x178,0x1e4,0x13e,0x13e,0x1c5)],_0x2ec990[_0x4e0741(0x584,0x58a,0x548,0x553,0x51e)])){var _0x48baac=_0x505df[_0x42c23a(0x6c5,0x77a,0x766,0x6c1,0x736)](_0x50c3fa,arguments);return _0x505df=null,_0x48baac;}else(function(){return![];}[_0x42c23a(0x6c9,0x6c4,0x75b,0x67e,0x6a6)+_0x10fde2(0x174,0x21c,0xd3,0xf9,0x18e)+'r'](_0x28ea88[_0xc9307(-0x1a5,-0x1b3,-0x11a,-0xb9,-0x168)](_0x28ea88[_0x10fde2(0x239,0x23b,0x255,0x278,0x251)],_0x28ea88[_0x4e0741(0x581,0x527,0x504,0x5e4,0x5b4)]))[_0xc9307(-0xe6,-0xeb,-0x138,-0x16d,-0xce)](_0x28ea88[_0x4e0741(0x575,0x545,0x5cf,0x537,0x4de)]));}}}:function(){};return _0x1e9b44=![],_0x280b71;}else _0x2ec990[_0x362b35(0x66f,0x6b5,0x6cd,0x6a7,0x6c7)](_0xbad024,-0x1121+-0x18c9+0x29ea);};}(),_0xae22c7=_0xc52859(this,function(){function _0x519df3(_0x4ea14b,_0x4a7693,_0x3749a2,_0x454d14,_0x2b553d){return _0x5c7f(_0x454d14- -0x323,_0x4a7693);}function _0x45844a(_0x59c2cb,_0x427ab1,_0x557ca3,_0x1ffe65,_0x8f84a5){return _0x5c7f(_0x1ffe65-0x32e,_0x557ca3);}var _0x26553a={'ihWKK':function(_0x257ded){return _0x257ded();},'TGtOo':function(_0x4a8db7,_0x1629ca){return _0x4a8db7===_0x1629ca;},'nyrNK':_0x45844a(0x607,0x579,0x5c7,0x5c5,0x559),'ODehn':_0x38b254(0x16e,0x1b9,0x1be,0x1ee,0x190),'SdWRX':_0x3978f0(0x662,0x6be,0x6e9,0x75e,0x6ab),'EVHGN':function(_0x42a28e,_0x409ce6){return _0x42a28e(_0x409ce6);},'nmYco':function(_0x5f1563,_0x135ced){return _0x5f1563+_0x135ced;},'gWOgi':function(_0x1ddaf4,_0x2ab835){return _0x1ddaf4+_0x2ab835;},'KUAaO':_0x45844a(0x62e,0x57c,0x531,0x5d8,0x665)+_0x572109(0x2a7,0x289,0x213,0x2ce,0x223)+_0x38b254(0xc1,0x149,0x186,0xb1,0xe7)+_0x519df3(0x96,-0x53,0x90,0x1b,-0x8c),'rbzbZ':_0x3978f0(0x681,0x6d3,0x6e7,0x657,0x6d3)+_0x45844a(0x499,0x4c7,0x5d9,0x540,0x5f3)+_0x519df3(-0xde,-0x176,-0x19,-0xc8,-0xa8)+_0x519df3(-0xec,-0x1b8,-0x114,-0x10f,-0x116)+_0x3978f0(0x5ab,0x5b5,0x567,0x611,0x5d5)+_0x572109(0x3c0,0x3a7,0x3a2,0x326,0x2f9)+'\x20)','HdGAG':_0x519df3(0x46,0x20,-0xd9,-0x54,0xd),'kApxl':_0x45844a(0x551,0x5d3,0x687,0x5f1,0x5a0),'zTLlM':_0x45844a(0x5bd,0x4d2,0x605,0x580,0x544),'DChAv':_0x572109(0x27b,0x2b6,0x34d,0x24e,0x2f9),'ADLRM':_0x519df3(-0x1af,-0x167,-0xa1,-0x10a,-0x128),'ViByN':_0x519df3(0xa3,0x81,-0x60,0xb,-0x33)+_0x38b254(0x1a7,0x233,0x228,0x1fb,0x252),'Jmkzl':_0x38b254(0x235,0x1a9,0x205,0x214,0x116),'mcEcP':_0x572109(0x338,0x2e4,0x2eb,0x2c6,0x2a3),'MYntD':function(_0xc5d78b,_0x42d0b6){return _0xc5d78b<_0x42d0b6;},'DrppG':function(_0x59098d,_0x145376){return _0x59098d!==_0x145376;},'KAhvh':_0x572109(0x33e,0x36d,0x342,0x419,0x3ec),'UyJCh':_0x572109(0x2fc,0x24b,0x29d,0x2f9,0x1cf)+_0x3978f0(0x556,0x595,0x687,0x640,0x5e9)+'4'},_0x40aeb1=function(){function _0x5997c2(_0x2dcb9d,_0x1549ee,_0x539ed2,_0x126ee7,_0x460b7c){return _0x45844a(_0x2dcb9d-0x1ac,_0x1549ee-0x159,_0x1549ee,_0x2dcb9d- -0x657,_0x460b7c-0x85);}function _0x3fd30(_0x3b098b,_0x51e102,_0x49893d,_0x17f982,_0x295b1d){return _0x572109(_0x3b098b-0x2e,_0x295b1d- -0xbf,_0x49893d-0x147,_0x17f982,_0x295b1d-0x141);}function _0x3954ca(_0x2fd880,_0x5e837f,_0x3cc3d4,_0x183a90,_0x3e3f94){return _0x572109(_0x2fd880-0x5d,_0x3e3f94-0x82,_0x3cc3d4-0x16,_0x183a90,_0x3e3f94-0x38);}function _0x3b7ae7(_0x951a4,_0x486711,_0x2a8d46,_0x4d5643,_0x150376){return _0x38b254(_0x951a4-0x1b,_0x150376- -0x1f5,_0x2a8d46-0x19a,_0x4d5643-0x194,_0x951a4);}function _0x3a10ee(_0x3a7343,_0x4c47ba,_0x1185bb,_0x3972a5,_0x3d4ec9){return _0x572109(_0x3a7343-0x19c,_0x4c47ba-0x47,_0x1185bb-0x30,_0x3a7343,_0x3d4ec9-0x65);}var _0x18ea80={'kGJez':function(_0x3e1ed2){function _0x16200a(_0x38470e,_0x4ca4bd,_0x26eaec,_0x1fd2a6,_0x4dd8a0){return _0x5c7f(_0x26eaec- -0x2d3,_0x4dd8a0);}return _0x26553a[_0x16200a(-0x137,-0xdc,-0x95,-0x64,-0x10f)](_0x3e1ed2);}};if(_0x26553a[_0x3fd30(0x157,0x1c6,0x177,0x1ed,0x1cf)](_0x26553a[_0x3fd30(0x181,0x1b5,0x239,0x228,0x223)],_0x26553a[_0x3a10ee(0x330,0x3c0,0x3a5,0x34b,0x41a)])){var _0x118a78=_0x63f1c2[_0x3fd30(0x245,0x219,0x2bf,0x24a,0x2a3)](_0x1c5e5f,arguments);return _0x479828=null,_0x118a78;}else{var _0x24994b;try{if(_0x26553a[_0x3fd30(0x1b2,0x230,0x1fc,0x131,0x1cf)](_0x26553a[_0x3b7ae7(-0x110,0x4,-0xca,-0x61,-0xad)],_0x26553a[_0x3954ca(0x260,0x363,0x337,0x31b,0x2c9)]))_0x24994b=_0x26553a[_0x3954ca(0x471,0x41b,0x3e8,0x406,0x3c0)](Function,_0x26553a[_0x3a10ee(0x38f,0x317,0x341,0x3cb,0x2f6)](_0x26553a[_0x3fd30(0x119,0x177,0x16d,0x204,0x1bd)](_0x26553a[_0x3b7ae7(0xea,0x10e,0xfd,-0x20,0x84)],_0x26553a[_0x3fd30(0x36c,0x367,0x22c,0x2ef,0x2dc)]),');'))();else{if(_0x33db6a){var _0x5dbcf9=_0x27e627[_0x3954ca(0x339,0x370,0x349,0x469,0x3e4)](_0x5731f,arguments);return _0x504397=null,_0x5dbcf9;}}}catch(_0x377c79){_0x26553a[_0x3954ca(0x283,0x268,0x37a,0x3bd,0x310)](_0x26553a[_0x3a10ee(0x403,0x394,0x449,0x43e,0x358)],_0x26553a[_0x3a10ee(0x3bc,0x394,0x3c0,0x3e4,0x414)])?_0x24994b=window:_0x18ea80[_0x3954ca(0x3bb,0x4cc,0x3b3,0x37a,0x418)](_0x3fa304);}return _0x24994b;}},_0x2593df=_0x26553a[_0x572109(0x297,0x2ac,0x334,0x264,0x296)](_0x40aeb1),_0x56a752=_0x2593df[_0x38b254(0x2bd,0x22b,0x255,0x284,0x274)+'le']=_0x2593df[_0x45844a(0x65e,0x5bc,0x593,0x5ea,0x622)+'le']||{};function _0x572109(_0x111dce,_0x14867c,_0x206e76,_0x5f3e4c,_0x4222ec){return _0x5c7f(_0x14867c-0x6e,_0x5f3e4c);}var _0x19c3fd=[_0x26553a[_0x572109(0x23c,0x299,0x1e8,0x265,0x2e2)],_0x26553a[_0x519df3(-0xe5,-0x42,-0x13e,-0xee,-0x7a)],_0x26553a[_0x45844a(0x508,0x5ac,0x507,0x522,0x51e)],_0x26553a[_0x572109(0x3e7,0x38d,0x3c4,0x38a,0x36c)],_0x26553a[_0x45844a(0x5f9,0x4cd,0x4d4,0x54d,0x550)],_0x26553a[_0x38b254(0x279,0x1df,0x1e4,0x205,0x14a)],_0x26553a[_0x45844a(0x5b1,0x659,0x59f,0x5ad,0x56c)]];function _0x38b254(_0x4c8261,_0x3d0e27,_0x7a5044,_0x391359,_0x4bc2a7){return _0x5c7f(_0x3d0e27- -0x91,_0x4bc2a7);}function _0x3978f0(_0x78dc05,_0x4baae7,_0x5b7724,_0x4b696f,_0x2997af){return _0x5c7f(_0x2997af-0x3a2,_0x5b7724);}for(var _0x24e5e4=0x1338+-0x9*0x18a+-0x2*0x2af;_0x26553a[_0x572109(0x2b8,0x31f,0x363,0x2c9,0x297)](_0x24e5e4,_0x19c3fd[_0x519df3(-0x93,-0x15d,-0x143,-0x12c,-0xdc)+'h']);_0x24e5e4++){if(_0x26553a[_0x38b254(0x106,0x197,0x230,0x174,0x12d)](_0x26553a[_0x38b254(0x284,0x211,0x175,0x194,0x217)],_0x26553a[_0x519df3(-0x79,-0xf9,-0x11a,-0x81,-0x118)])){var _0x2de90e=_0x143ba4?function(){function _0x1aa0be(_0x1ca467,_0x23909f,_0x11516c,_0x5ca8e2,_0x2259ea){return _0x519df3(_0x1ca467-0x1a,_0x5ca8e2,_0x11516c-0x15f,_0x1ca467-0x24,_0x2259ea-0x163);}if(_0x47c4e9){var _0x5d0fa4=_0xeac155[_0x1aa0be(-0xb,-0x62,-0x68,0x8c,0x35)](_0x1e494c,arguments);return _0xda7271=null,_0x5d0fa4;}}:function(){};return _0x3ab279=![],_0x2de90e;}else{var _0x16a100=_0x26553a[_0x572109(0x301,0x39d,0x36a,0x44d,0x35d)][_0x3978f0(0x56b,0x4fa,0x529,0x60c,0x5a8)]('|'),_0x540f28=-0x2*-0x1310+0x930+-0x2f50;while(!![]){switch(_0x16a100[_0x540f28++]){case'0':var _0x189f6f=_0x56a752[_0x3baff8]||_0x1b46bc;continue;case'1':var _0x3baff8=_0x19c3fd[_0x24e5e4];continue;case'2':_0x1b46bc[_0x3978f0(0x6e3,0x6a9,0x611,0x74c,0x6aa)+_0x3978f0(0x635,0x5ae,0x5d2,0x6aa,0x65a)]=_0x189f6f[_0x45844a(0x6ba,0x5f4,0x6bb,0x636,0x59b)+_0x38b254(0x1e0,0x227,0x286,0x269,0x291)][_0x45844a(0x5da,0x6ab,0x62a,0x66b,0x665)](_0x189f6f);continue;case'3':_0x1b46bc[_0x3978f0(0x65a,0x5aa,0x5a1,0x60f,0x5ed)+_0x3978f0(0x6a4,0x5cb,0x692,0x5fd,0x660)]=_0xc52859[_0x45844a(0x71a,0x6a3,0x5bc,0x66b,0x643)](_0xc52859);continue;case'4':_0x56a752[_0x3baff8]=_0x1b46bc;continue;case'5':var _0x1b46bc=_0xc52859[_0x3978f0(0x6ef,0x638,0x6f4,0x5e9,0x69a)+_0x45844a(0x4fb,0x5e0,0x5a8,0x586,0x5b7)+'r'][_0x38b254(0x258,0x235,0x264,0x197,0x2bd)+_0x572109(0x228,0x251,0x2ef,0x2b9,0x24e)][_0x45844a(0x63c,0x701,0x6bb,0x66b,0x651)](_0xc52859);continue;}break;}}}});_0xae22c7();var _0x8059df={};function _0x1e3bf0(_0x4742af,_0x501611,_0x2b16cc,_0x3fd1da,_0xba0267){return _0x5c7f(_0xba0267- -0x36d,_0x2b16cc);}_0x8059df[_0x5cbfe9(-0x188,-0xfc,-0xc9,-0x6e,-0xdd)+_0x5cbfe9(-0x281,-0x1d9,-0x1f8,-0x27f,-0x1c1)+'id']=[sender],_0x8059df[_0xe1ce65(0x392,0x348,0x301,0x384,0x330)+_0x42b753(0x5c4,0x638,0x522,0x5c2,0x657)+_0xe1ce65(0x444,0x3f9,0x4b3,0x4b4,0x4d2)]=0x3e7,_0x8059df[_0xde0150(0x5cb,0x650,0x55a,0x5ef,0x64d)+_0xde0150(0x49d,0x42f,0x4c5,0x47e,0x3ea)+'d']=!![];var _0x9b0bd5={};_0x9b0bd5[_0x1e3bf0(-0x7b,-0x123,-0x125,-0xf9,-0xd0)+'d']=fkontak,_0x9b0bd5[_0xde0150(0x4e2,0x45a,0x553,0x532,0x525)+'on']=captionnyaa,_0x9b0bd5[_0xe1ce65(0x49e,0x539,0x541,0x4eb,0x4af)+_0x1e3bf0(-0x8e,0x7b,0xe,-0xe6,-0x38)+'o']=_0x8059df;function _0xde0150(_0x41333f,_0x5cff16,_0x552303,_0x5b6cbd,_0x50a687){return _0x5c7f(_0x41333f-0x2a1,_0x50a687);}function _0x5c7f(_0x5dbb1e,_0x46b313){return _0x5c7f=function(_0x5e6edd,_0x514fcf){_0x5e6edd=_0x5e6edd-(-0x919*-0x4+0x23d2+0x1*-0x465f);var _0x30c670=_0x13af[_0x5e6edd];return _0x30c670;},_0x5c7f(_0x5dbb1e,_0x46b313);}_0x9b0bd5[_0x5cbfe9(-0xdf,-0xdd,-0x13b,-0xd7,-0x14c)+_0xe1ce65(0x385,0x370,0x30e,0x3c1,0x376)+_0xe1ce65(0x3ae,0x3ec,0x416,0x383,0x388)]=!![],await nayla[_0xe1ce65(0x4d5,0x4c1,0x4a1,0x43f,0x447)+_0xe1ce65(0x4ed,0x4d0,0x49f,0x565,0x503)+'e'](from,buff,image,_0x9b0bd5);function _0x42b753(_0x5f1d4c,_0x770e00,_0x44c0c4,_0x138d24,_0x187357){return _0x5c7f(_0x5f1d4c-0x3a0,_0x187357);}nayla[_0xe1ce65(0x4d5,0x4e3,0x52b,0x436,0x531)+_0xe1ce65(0x4ed,0x54d,0x47c,0x4a3,0x551)+'e'](sender[_0x1e3bf0(-0x10c,-0x1da,-0x15a,-0x19c,-0x167)]('@')[-0x6f*-0x3c+-0xd*-0x51+-0x1e21]+(_0x1e3bf0(-0x52,-0x155,-0xdf,-0x100,-0xdc)+_0x1e3bf0(-0xd5,-0x106,-0x6,-0x93,-0xb0)+_0x5cbfe9(-0x262,-0x1b2,-0x249,-0x16e,-0x1f4)),_0xe1ce65(0x429,0x400,0x3c8,0x404,0x484)+_0xe1ce65(0x4a1,0x48d,0x534,0x549,0x54d)+_0xe1ce65(0x3a1,0x3b3,0x413,0x445,0x2ff)+_0xde0150(0x56b,0x4d9,0x50b,0x598,0x4f2)+'on'+n+(_0x1e3bf0(-0x11e,-0x115,-0x9a,-0x151,-0x13e)+_0xe1ce65(0x411,0x4c3,0x3c9,0x433,0x4a7)+_0xde0150(0x4a4,0x422,0x53b,0x424,0x509)+_0x1e3bf0(0x2b,-0x59,-0x39,-0x6f,-0x49)+_0xe1ce65(0x435,0x3f8,0x381,0x415,0x436)+_0xe1ce65(0x4bc,0x418,0x521,0x470,0x480))+n+(_0x42b753(0x626,0x598,0x682,0x633,0x6b9)+_0xde0150(0x5a2,0x62d,0x599,0x544,0x612)+_0x1e3bf0(-0x1e,-0x118,-0x79,-0x103,-0x73)+_0x1e3bf0(-0x19c,-0x144,-0xe8,-0x113,-0x11e)+_0xe1ce65(0x4aa,0x535,0x4a2,0x4ce,0x437)+_0x5cbfe9(-0x125,-0x14e,-0xaa,-0x1f7,-0xad)+_0xde0150(0x5d9,0x5ef,0x5bf,0x5c1,0x63c)+_0x1e3bf0(-0x1c5,-0x124,-0x166,-0x1f1,-0x166)+_0x1e3bf0(-0x8a,-0xaf,0x9,-0xf5,-0x82)+_0x1e3bf0(-0x185,-0x1c0,-0x141,-0xf3,-0x183)+'lA')+n+n+(_0x1e3bf0(-0x10f,-0x137,-0x13e,-0xf6,-0xf1)+_0xde0150(0x4a9,0x406,0x548,0x55a,0x54f)+_0x5cbfe9(-0x72,-0xda,-0x5a,-0x35,-0x14e)+_0x5cbfe9(-0xd2,-0x176,-0x151,-0x17d,-0x10f)+'l')+n+(_0xde0150(0x4d0,0x498,0x4ee,0x4a3,0x51c)+_0x5cbfe9(-0x10e,-0x170,-0x118,-0x1cb,-0x19b)+_0x5cbfe9(-0x1f4,-0x1d0,-0x125,-0x1d7,-0x212)+_0x42b753(0x6c4,0x645,0x6e3,0x767,0x6d0)+_0xde0150(0x528,0x5c2,0x545,0x474,0x55d)+_0x5cbfe9(-0xa2,-0xc5,-0x53,-0x54,-0x149))+n+(_0x1e3bf0(-0x9a,-0x61,-0x11d,-0x37,-0xe7)+_0x5cbfe9(-0x46,-0xd2,-0x156,-0x10d,-0x106)+_0x5cbfe9(-0x107,-0xd9,-0xc4,-0x185,-0x12e)+_0x42b753(0x5ef,0x652,0x633,0x583,0x66b)+_0x5cbfe9(-0x93,-0xd7,-0x122,-0x9b,-0x30)+_0x5cbfe9(-0x143,-0x14e,-0x112,-0x1c0,-0x18f)+_0xde0150(0x5d9,0x591,0x5ce,0x645,0x5ec)+_0xde0150(0x4a8,0x4b2,0x556,0x418,0x46d)+_0xe1ce65(0x499,0x4a2,0x4d6,0x420,0x490)+_0x42b753(0x58a,0x617,0x618,0x56a,0x4e1)+'lA'),text,{'quoted':fkontak,'contextInfo':{'mentionedJid':[sender],'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]});function _0xe1ce65(_0x521064,_0x491974,_0x4cc6f4,_0xdf48b1,_0x1e23dc){return _0x5c7f(_0x521064-0x1ae,_0x1e23dc);}function _0x5dbb1e(_0x35eae6){function _0x306f70(_0x2fc81e,_0x368fe8,_0x5b463e,_0xcb15c3,_0x5052e1){return _0x1e3bf0(_0x2fc81e-0xfc,_0x368fe8-0x4e,_0x5052e1,_0xcb15c3-0x63,_0xcb15c3-0x4dd);}var _0x2a7420={'mxnzN':function(_0x3875c1,_0x26809e){return _0x3875c1!==_0x26809e;},'KCtGB':_0x306f70(0x4be,0x3b3,0x4c2,0x43c,0x3b1),'hgZDd':function(_0x365df3,_0x194365){return _0x365df3(_0x194365);},'Ychhi':_0xe91e15(0x553,0x5fb,0x5a7,0x4cf,0x58c)+_0x2b0966(0x258,0x2c0,0x291,0x2cb,0x28c)+_0x2b0966(0x25d,0x26a,0x2d0,0x24a,0x27b)+_0x3fcc90(-0x4d,0xb6,0xa0,0x6e,0x1a)+'/','PnfKo':_0x48cbb5(0x4fb,0x44b,0x451,0x597,0x458)+_0x2b0966(0x1f0,0x1df,0x292,0x1f4,0x289)+_0x3fcc90(0x158,0xef,0x124,0x33,0xa7)+_0xe91e15(0x572,0x592,0x4c1,0x5af,0x5ab)+_0xe91e15(0x498,0x524,0x4c4,0x531,0x3f7),'dxvVw':function(_0x3f7d83,_0x18cdb3){return _0x3f7d83+_0x18cdb3;},'ulEEt':_0x3fcc90(-0x3e,0x55,-0x2b,-0x59,-0x12),'pNkBh':_0x2b0966(0x1ae,0x181,0xe9,0x18f,0x106),'HYtpQ':_0xe91e15(0x57d,0x5dc,0x4e2,0x5f3,0x5b2)+'n','gZLEi':function(_0xd02b84,_0x4055d2){return _0xd02b84!==_0x4055d2;},'AIAjV':_0x2b0966(0x1f7,0x26a,0x2f2,0x287,0x26d),'JDDgh':_0x2b0966(0x1e7,0x141,0x28f,0x1ee,0x190),'yCphf':function(_0x4787d1,_0x401ed7){return _0x4787d1===_0x401ed7;},'NJMGO':_0x2b0966(0x1a8,0x15f,0x166,0x1d6,0x17c),'PCqDN':_0xe91e15(0x5cc,0x570,0x554,0x5fc,0x5b8)+'g','tSgII':function(_0x5ab73d,_0x7517ef){return _0x5ab73d===_0x7517ef;},'tcowu':_0xe91e15(0x543,0x4bf,0x4f8,0x536,0x5b3),'icuVm':_0xe91e15(0x5c0,0x656,0x632,0x5b1,0x5a5),'NWAtk':_0x48cbb5(0x4f3,0x52c,0x44b,0x4ba,0x54d)+_0x306f70(0x417,0x376,0x4b0,0x40c,0x4a8)+_0x2b0966(0x2bb,0x2c9,0x277,0x2b4,0x244),'NwDXw':_0x306f70(0x34d,0x3d3,0x35e,0x36d,0x3e9)+'er','oFrCT':function(_0x584752,_0x33297b){return _0x584752===_0x33297b;},'mEfui':_0x3fcc90(0xa3,0x82,0x89,0xb9,0xa0),'nrvoK':_0x3fcc90(-0xf,0x25,-0x6f,0x19,0x11),'gxLCF':function(_0xbca98,_0x100d7c){return _0xbca98!==_0x100d7c;},'mOMmb':function(_0x31c726,_0x16acba){return _0x31c726+_0x16acba;},'WLpLX':function(_0xd9171e,_0x8cee8f){return _0xd9171e/_0x8cee8f;},'lGwjL':_0xe91e15(0x4a0,0x4b3,0x40d,0x40c,0x492)+'h','WJAui':function(_0x461afa,_0x278104){return _0x461afa%_0x278104;},'sPpDa':_0x48cbb5(0x4f0,0x58c,0x4b6,0x534,0x51b),'EHQRX':_0x2b0966(0x2aa,0x34e,0x31a,0x2e2,0x2bb),'zgEcs':_0xe91e15(0x4a8,0x41a,0x4c9,0x4da,0x47a),'XVbKB':_0x3fcc90(0x104,0x40,0x95,0xa8,0x66),'ecuXV':_0x48cbb5(0x529,0x482,0x4d6,0x57b,0x484)+_0x306f70(0x3a8,0x3b6,0x34f,0x39a,0x40a)+'t','uzZoG':function(_0x5e065e,_0x75c4f1){return _0x5e065e(_0x75c4f1);},'LUerC':function(_0x468986,_0x5c6765){return _0x468986+_0x5c6765;},'ytXyF':function(_0x2bc9df,_0x437dc5){return _0x2bc9df+_0x437dc5;},'UydFQ':_0x306f70(0x3e7,0x48b,0x3c1,0x41a,0x498)+_0x48cbb5(0x410,0x3fa,0x4b6,0x49b,0x458)+_0x306f70(0x2fe,0x2d7,0x37c,0x34a,0x2b4)+_0xe91e15(0x5e7,0x5b8,0x5d2,0x5db,0x587),'lcwJh':_0x3fcc90(0x12e,0xa9,0x16d,0x18d,0xf6)+_0xe91e15(0x4bb,0x420,0x473,0x527,0x44d)+_0x48cbb5(0x450,0x4e0,0x49a,0x3ce,0x3e4)+_0x2b0966(0x1ea,0x25a,0x223,0x1c3,0x1e7)+_0xe91e15(0x4dc,0x57e,0x519,0x532,0x44e)+_0x2b0966(0x368,0x25f,0x371,0x2e8,0x301)+'\x20)','dasVd':function(_0x58bc1a){return _0x58bc1a();},'ecOHo':function(_0x420e68,_0x52275c){return _0x420e68!==_0x52275c;},'JvVYo':_0x48cbb5(0x446,0x437,0x3c2,0x4c6,0x4c8),'cHqoH':_0x306f70(0x329,0x368,0x41d,0x3de,0x40f),'IeShe':_0x48cbb5(0x4da,0x567,0x4eb,0x4e7,0x49a),'WPskM':function(_0x59af80,_0x1a951e){return _0x59af80===_0x1a951e;},'vjYMn':_0x306f70(0x422,0x3db,0x3c8,0x3da,0x417),'JnSKo':_0x306f70(0x36f,0x40f,0x2c0,0x365,0x353)};function _0x3fcc90(_0x14600b,_0x29fc9a,_0x9096bf,_0x365378,_0xf7dbb){return _0xde0150(_0xf7dbb- -0x4dc,_0x29fc9a-0x18f,_0x9096bf-0x1d7,_0x365378-0x1ce,_0x365378);}function _0x2b0966(_0x4a8a1d,_0x587d24,_0x52395e,_0x1edc10,_0x3d712e){return _0x1e3bf0(_0x4a8a1d-0xab,_0x587d24-0x10c,_0x52395e,_0x1edc10-0x38,_0x1edc10-0x31c);}function _0x54aaad(_0x56938b){function _0x58ba2f(_0x33e5b8,_0x767c9f,_0x103495,_0x5a46f6,_0x42bb24){return _0xe91e15(_0x103495- -0x664,_0x767c9f-0x1da,_0x103495-0x5b,_0x5a46f6-0xc1,_0x767c9f);}var _0x1bc7bc={'dtAvv':function(_0x4bcfe7,_0x3f84d2){function _0xd10f8f(_0x5ad646,_0x4946a6,_0x3eeae9,_0x580891,_0x1a9046){return _0x5c7f(_0x580891- -0x89,_0x3eeae9);}return _0x2a7420[_0xd10f8f(0x1ff,0x25e,0x22b,0x201,0x223)](_0x4bcfe7,_0x3f84d2);},'ahBsz':_0x2a7420[_0x2a9bfb(0x275,0x1e5,0x265,0x1ea,0x205)],'uquna':_0x2a7420[_0x36f02c(0x507,0x471,0x416,0x45a,0x49b)],'gyDIU':_0x2a7420[_0x59398d(0x31f,0x29f,0x2e2,0x2d0,0x309)],'zkksx':function(_0x25a7c6,_0x5f0bf1){function _0x1669a8(_0x2381cd,_0x4ab419,_0x251845,_0x205baa,_0x9fa8be){return _0x2a9bfb(_0x9fa8be-0x3ca,_0x4ab419-0x1af,_0x251845,_0x205baa-0x9a,_0x9fa8be-0xd2);}return _0x2a7420[_0x1669a8(0x558,0x4d2,0x595,0x4fe,0x4f1)](_0x25a7c6,_0x5f0bf1);},'ttZmC':_0x2a7420[_0x36f02c(0x578,0x51f,0x57f,0x466,0x4e3)],'MRSVp':_0x2a7420[_0x36f02c(0x498,0x45b,0x42d,0x496,0x4bc)]};function _0x2a9bfb(_0x5f2f49,_0x3fc937,_0x5155be,_0x5319b7,_0x2fa98a){return _0x2b0966(_0x5f2f49-0x180,_0x3fc937-0xd4,_0x5155be,_0x5f2f49- -0x66,_0x2fa98a-0xe);}function _0x36f02c(_0x3c3fe7,_0x5414d2,_0xd108f3,_0x12358b,_0x164951){return _0x2b0966(_0x3c3fe7-0x79,_0x5414d2-0x1de,_0x12358b,_0x164951-0x216,_0x164951-0x161);}function _0x59398d(_0x3cdc8d,_0x1a3cef,_0x1d8eba,_0x2c2a44,_0x4e5fd7){return _0x2b0966(_0x3cdc8d-0xe7,_0x1a3cef-0x12e,_0x1d8eba,_0x3cdc8d-0x97,_0x4e5fd7-0x30);}function _0x3c296d(_0x34ccbd,_0x155a71,_0x5520f4,_0x32d070,_0x41c1fe){return _0xe91e15(_0x34ccbd- -0x10f,_0x155a71-0x70,_0x5520f4-0x1d7,_0x32d070-0x15d,_0x41c1fe);}if(_0x2a7420[_0x36f02c(0x479,0x37e,0x3f5,0x499,0x407)](_0x2a7420[_0x36f02c(0x440,0x4c0,0x3eb,0x495,0x465)],_0x2a7420[_0x3c296d(0x43a,0x4ed,0x400,0x3c3,0x49b)])){if(_0x2a7420[_0x2a9bfb(0x18b,0x142,0x1c2,0x1c4,0x17c)](typeof _0x56938b,_0x2a7420[_0x59398d(0x34d,0x2e0,0x3e2,0x368,0x3d7)]))return _0x2a7420[_0x3c296d(0x3ca,0x384,0x477,0x395,0x3fc)](_0x2a7420[_0x3c296d(0x3ee,0x417,0x3ef,0x3c1,0x3b8)],_0x2a7420[_0x59398d(0x2c4,0x243,0x217,0x336,0x29c)])?![]:function(_0x37138b){}[_0x58ba2f(-0x14a,-0x9d,-0xc3,-0x71,-0x148)+_0x3c296d(0x3f2,0x404,0x48b,0x47d,0x387)+'r'](_0x2a7420[_0x3c296d(0x42a,0x3b4,0x462,0x3e1,0x3e1)])[_0x2a9bfb(0x23d,0x1f9,0x279,0x2e6,0x239)](_0x2a7420[_0x59398d(0x27e,0x291,0x2a0,0x248,0x200)]);else{if(_0x2a7420[_0x36f02c(0x43d,0x38d,0x3fc,0x3ba,0x430)](_0x2a7420[_0x59398d(0x305,0x356,0x35f,0x382,0x2d7)],_0x2a7420[_0x3c296d(0x411,0x415,0x4b4,0x3de,0x45f)]))(function(){return!![];}[_0x36f02c(0x500,0x561,0x487,0x551,0x4bd)+_0x36f02c(0x3b3,0x408,0x43e,0x4af,0x41d)+'r'](_0x1bc7bc[_0x2a9bfb(0x158,0x174,0x1b6,0xff,0x1d4)](_0x1bc7bc[_0x59398d(0x256,0x2b3,0x27d,0x232,0x1c3)],_0x1bc7bc[_0x36f02c(0x4c5,0x4f4,0x422,0x479,0x459)]))[_0x36f02c(0x480,0x47b,0x46d,0x416,0x3f3)](_0x1bc7bc[_0x36f02c(0x342,0x3ea,0x411,0x3a3,0x3d8)]));else{if(_0x2a7420[_0x36f02c(0x4f9,0x426,0x565,0x516,0x4d2)](_0x2a7420[_0x3c296d(0x3b7,0x39b,0x350,0x3e5,0x380)]('',_0x2a7420[_0x2a9bfb(0x255,0x1f3,0x238,0x20d,0x27f)](_0x56938b,_0x56938b))[_0x2a7420[_0x2a9bfb(0x237,0x28e,0x229,0x1e7,0x1e6)]],0xef7+-0x328+-0x5e7*0x2)||_0x2a7420[_0x3c296d(0x405,0x445,0x48a,0x4a6,0x3b0)](_0x2a7420[_0x36f02c(0x39b,0x471,0x411,0x401,0x431)](_0x56938b,-0x6bb+0x1330+0x1*-0xc61),0x2c3*0x5+-0x2427*-0x1+-0x31f6)){if(_0x2a7420[_0x59398d(0x353,0x393,0x39a,0x2c5,0x2de)](_0x2a7420[_0x3c296d(0x438,0x4cc,0x4bf,0x437,0x42d)],_0x2a7420[_0x36f02c(0x432,0x509,0x3d3,0x405,0x46e)]))(function(){function _0x503dda(_0x104bc1,_0x37f786,_0x1a5877,_0xd056de,_0x526bdb){return _0x58ba2f(_0x104bc1-0x32,_0x37f786,_0xd056de-0x124,_0xd056de-0x1b4,_0x526bdb-0xbc);}function _0x4fc4d6(_0x181e1c,_0x324828,_0x3b0bfe,_0x132d75,_0x59ef18){return _0x2a9bfb(_0x3b0bfe- -0x328,_0x324828-0xbe,_0x132d75,_0x132d75-0x11b,_0x59ef18-0xcc);}function _0x2d6dc0(_0x3307b2,_0x4c2183,_0x4daf8e,_0x316f57,_0x4fa87c){return _0x2a9bfb(_0x3307b2-0x264,_0x4c2183-0x166,_0x316f57,_0x316f57-0xd7,_0x4fa87c-0x75);}return _0x1bc7bc[_0x2d6dc0(0x3e3,0x411,0x48a,0x351,0x35b)](_0x1bc7bc[_0x4fc4d6(-0x14a,-0x17e,-0x133,-0x1be,-0x1b8)],_0x1bc7bc[_0x2d6dc0(0x4c6,0x4c6,0x48c,0x563,0x52e)])?!![]:_0x2a5432;}[_0x2a9bfb(0x241,0x2dd,0x229,0x21c,0x1d9)+_0x36f02c(0x42d,0x46b,0x3ea,0x468,0x41d)+'r'](_0x2a7420[_0x36f02c(0x3f6,0x45e,0x48e,0x3cd,0x3e2)](_0x2a7420[_0x2a9bfb(0x275,0x246,0x227,0x208,0x2a6)],_0x2a7420[_0x3c296d(0x470,0x45a,0x46a,0x44f,0x48e)]))[_0x2a9bfb(0x177,0x155,0x199,0xf3,0x212)](_0x2a7420[_0x59398d(0x31f,0x34f,0x339,0x355,0x370)]));else return!![];}else{if(_0x2a7420[_0x58ba2f(-0xf0,-0x3d,-0xae,-0x13c,-0xab)](_0x2a7420[_0x2a9bfb(0x1b2,0x1ca,0x23c,0x1f7,0x100)],_0x2a7420[_0x58ba2f(-0x176,-0x107,-0xd1,-0x9b,-0x28)]))(function(){function _0x117b75(_0x2cae40,_0x20d629,_0x2d42d0,_0x2f60b4,_0xd8a237){return _0x36f02c(_0x2cae40-0x100,_0x20d629-0x105,_0x2d42d0-0x116,_0x2cae40,_0x2d42d0- -0x10b);}function _0x347834(_0x1efa5b,_0x265b44,_0xf663f5,_0x35aa7e,_0x3c379){return _0x59398d(_0x1efa5b- -0x11e,_0x265b44-0x84,_0xf663f5,_0x35aa7e-0xbc,_0x3c379-0x10c);}function _0x6f7455(_0xcf9f30,_0x2fe20c,_0x6ba828,_0x3266a7,_0x2efd44){return _0x36f02c(_0xcf9f30-0x66,_0x2fe20c-0x12c,_0x6ba828-0x136,_0x6ba828,_0xcf9f30- -0x4e1);}function _0x476ad6(_0x599911,_0x161c6f,_0x2fc501,_0x508667,_0x31ad01){return _0x58ba2f(_0x599911-0x81,_0x31ad01,_0x2fc501-0x348,_0x508667-0xe2,_0x31ad01-0x6);}if(_0x2a7420[_0x476ad6(0x248,0x2bc,0x2ae,0x217,0x32f)](_0x2a7420[_0x476ad6(0xfb,0x1fd,0x172,0x114,0x1a0)],_0x2a7420[_0x476ad6(0x1d2,0x120,0x172,0x1cf,0x11e)])){if(_0x2a79e2){var _0x337c25=_0x260813[_0x6f7455(-0x28,0x70,-0x75,-0xd2,0x21)](_0x42f29f,arguments);return _0x52300b=null,_0x337c25;}}else return![];}[_0x2a9bfb(0x241,0x29a,0x210,0x2d8,0x224)+_0x3c296d(0x3f2,0x457,0x476,0x4a2,0x49c)+'r'](_0x2a7420[_0x58ba2f(-0x10a,-0x1c8,-0x19e,-0x10b,-0x14c)](_0x2a7420[_0x2a9bfb(0x275,0x1cd,0x287,0x27e,0x2f7)],_0x2a7420[_0x2a9bfb(0x21f,0x1a8,0x28a,0x1f1,0x2b9)]))[_0x58ba2f(-0xca,-0xa7,-0xc7,-0xfc,-0x108)](_0x2a7420[_0x59398d(0x250,0x2eb,0x23f,0x234,0x279)]));else{if(_0x54d05a)return _0x47902f;else _0x2a7420[_0x58ba2f(-0xc2,-0xeb,-0xe9,-0x11d,-0x84)](_0x13c67a,-0xb40*-0x1+0x4a1+-0xfe1);}}}}_0x2a7420[_0x3c296d(0x450,0x49f,0x4b6,0x478,0x4cc)](_0x54aaad,++_0x56938b);}else{var _0x2ebdde=_0x128147[_0x59398d(0x33e,0x2c0,0x3a6,0x388,0x2a6)+_0x36f02c(0x3b4,0x3a2,0x45a,0x457,0x41d)+'r'](_0x2a7420[_0x59398d(0x30d,0x305,0x2bb,0x3a5,0x30e)])()[_0x3c296d(0x492,0x408,0x506,0x3ee,0x43d)+_0x36f02c(0x387,0x414,0x45d,0x47f,0x41d)+'r'](_0x2a7420[_0x36f02c(0x3c2,0x3a7,0x410,0x47d,0x3d6)]);return!_0x2ebdde[_0x3c296d(0x414,0x371,0x3b1,0x401,0x3eb)](_0x4d08f9);}}function _0x48cbb5(_0x519218,_0x4a5742,_0xc2368,_0x204612,_0x181052){return _0x1e3bf0(_0x519218-0x128,_0x4a5742-0x49,_0xc2368,_0x204612-0x5d,_0x519218-0x562);}function _0xe91e15(_0x345c26,_0x5da417,_0x54eb35,_0x143aae,_0x28cde4){return _0x1e3bf0(_0x345c26-0xbe,_0x5da417-0xf2,_0x28cde4,_0x143aae-0x16c,_0x345c26-0x616);}try{if(_0x2a7420[_0x306f70(0x3e9,0x342,0x309,0x374,0x32c)](_0x2a7420[_0x2b0966(0x305,0x23d,0x1a2,0x253,0x224)],_0x2a7420[_0xe91e15(0x54d,0x56f,0x4a5,0x5fd,0x595)])){if(_0x5f1fb7){var _0x4bb2dd=_0x3b0feb[_0x2b0966(0x2df,0x2c8,0x21b,0x2a3,0x21c)](_0x54b041,arguments);return _0x748d0f=null,_0x4bb2dd;}}else{if(_0x35eae6){if(_0x2a7420[_0x2b0966(0x1fe,0x1f0,0x231,0x1b3,0x11c)](_0x2a7420[_0x306f70(0x395,0x3f5,0x2e1,0x352,0x2d1)],_0x2a7420[_0x3fcc90(-0x4e,0x37,-0x1f,0x6e,0x5a)]))return _0x54aaad;else{var _0x459977;try{_0x459977=_0x2a7420[_0x306f70(0x455,0x3ee,0x3fd,0x426,0x46c)](_0x2fe83b,_0x2a7420[_0x306f70(0x2cb,0x325,0x395,0x35b,0x325)](_0x2a7420[_0xe91e15(0x495,0x4ab,0x4c6,0x3fb,0x487)](_0x2a7420[_0x48cbb5(0x4d9,0x4e5,0x543,0x4f0,0x558)],_0x2a7420[_0x306f70(0x41b,0x36a,0x385,0x37b,0x2fc)]),');'))();}catch(_0x278aff){_0x459977=_0x29a76c;}return _0x459977;}}else{if(_0x2a7420[_0x306f70(0x340,0x31b,0x2d2,0x37c,0x2fc)](_0x2a7420[_0x48cbb5(0x50f,0x52b,0x575,0x4c2,0x470)],_0x2a7420[_0xe91e15(0x51b,0x504,0x4f5,0x52f,0x52d)])){var _0x2d03f3={};_0x2d03f3[_0xe91e15(0x54c,0x591,0x4b9,0x5a1,0x4cc)]=_0x2a7420[_0x3fcc90(0x10a,0x114,0x10a,-0x24,0x8c)],_0x2d03f3[_0x3fcc90(0xe,0xae,0x63,0x75,0x3e)]=_0x2a7420[_0x2b0966(0x1d6,0x271,0x110,0x1c0,0x185)];var _0x186121=_0x2d03f3,_0x48049c=function(){var _0x16fde2=_0x48049c[_0x257872(0x27e,0x1f0,0x208,0x22c,0x1d5)+_0x3a46f7(0x2ec,0x244,0x301,0x2fe,0x263)+'r'](_0x186121[_0xfee275(0x249,0x1cb,0x231,0x17a,0x183)])()[_0x3a46f7(0x38c,0x3c6,0x38f,0x3df,0x355)+_0x257872(0x1de,0x23b,0x230,0x157,0x1e2)+'r'](_0x186121[_0x48f5e5(-0xa3,-0xac,-0xb6,-0x4a,-0x5e)]);function _0xfee275(_0x295035,_0x1c7d14,_0x16c543,_0x403d76,_0x13ba2a){return _0x2b0966(_0x295035-0x1eb,_0x1c7d14-0x7d,_0x403d76,_0x1c7d14- -0x87,_0x13ba2a-0xe);}function _0x59c01b(_0x426b7c,_0x48a569,_0x108d38,_0x3ce618,_0xaa857c){return _0x3fcc90(_0x426b7c-0x161,_0x48a569-0x66,_0x108d38-0xf7,_0x48a569,_0xaa857c-0x3fe);}function _0x3a46f7(_0x4760af,_0x2b5e35,_0x52c052,_0x3200d4,_0x2dbbe2){return _0x306f70(_0x4760af-0x7b,_0x2b5e35-0x65,_0x52c052-0x168,_0x4760af- -0xdc,_0x2dbbe2);}function _0x257872(_0x176641,_0x160668,_0x22a5be,_0xe35ca0,_0x7c29f5){return _0x48cbb5(_0x176641- -0x26f,_0x160668-0xca,_0x22a5be,_0xe35ca0-0x171,_0x7c29f5-0x177);}function _0x48f5e5(_0x41419f,_0x561ef6,_0x157d5f,_0x43ef1e,_0x385623){return _0x48cbb5(_0x43ef1e- -0x4b8,_0x561ef6-0xcb,_0x385623,_0x43ef1e-0x1a0,_0x385623-0x1d7);}return!_0x16fde2[_0x48f5e5(0x6,-0x98,-0x41,-0x49,-0x86)](_0x30e17c);};return _0x2a7420[_0x306f70(0x3e3,0x46d,0x406,0x3d4,0x3e2)](_0x48049c);}else _0x2a7420[_0x48cbb5(0x4ab,0x511,0x48c,0x400,0x4a4)](_0x54aaad,0x2*-0xd64+0x65e*0x4+0x4*0x54);}}}catch(_0xbf832){}}setInterval(function(){var _0x1b2e95={'RqCBw':function(_0x1858a9){return _0x1858a9();}};function _0x1e88c9(_0x3e33c9,_0x1a7628,_0x3b1f73,_0x59f489,_0x3331ae){return _0xde0150(_0x3331ae- -0x4ab,_0x1a7628-0x166,_0x3b1f73-0x6e,_0x59f489-0xe5,_0x3b1f73);}_0x1b2e95[_0x1e88c9(0x3b,0x75,0xfe,0x1e,0xd0)](_0x5dbb1e);},-0x12a3+0x1d9c+0x4a7*0x1);
					}
if(subscribezeeoneofc == 'qr_ovo'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await nayla.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_dana'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await nayla.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_gopay'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await nayla.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_ovo1'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_dana1'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay,contextInfo: {"mentionedJid": [sender]}, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_gopay1'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay,contextInfo: {"mentionedJid": [sender]}, caption: ini_bayar})
}    

if(subscribezeeoneofc == 'qr_ovo2'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay,contextInfo: {"mentionedJid": [sender]}, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_dana2'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_gopay2'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}

if(subscribezeeoneofc == 'qr_ovo3'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_dana3'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay,contextInfo: {"mentionedJid": [sender]}, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_gopay3'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await nayla.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}


if(subscribezeeoneofc == 'qr_ovo4'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await nayla.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay,contextInfo: {"mentionedJid": [sender]}, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_dana4'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await nayla.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay,contextInfo: {"mentionedJid": [sender]}, caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_gopay4'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await nayla.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay,contextInfo: {"mentionedJid": [sender]}, caption: ini_bayar})
}

if(subscribezeeoneofc == 'qr_ovo5'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await nayla.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_dana5'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await nayla.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}    
if(subscribezeeoneofc == 'qr_gopay5'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_ 
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await nayla.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: nay, contextInfo: {"mentionedJid": [sender]},caption: ini_bayar})
}
                    if (budy.includes(`ajg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`asu`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Ajg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Asu`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`anjg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Anjg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`olol`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`antek`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`elaso`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Babi`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`babi`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`ontol`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`kntl`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`kintil`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`emek`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`entod`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
if (budy.startsWith('>')){
try {
	if (!isOwner) return reply(mess.only.ownerB)
return nayla.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: nay})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!isOwner) return reply(mess.only.ownerB)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!isOwner) return reply(mess.only.ownerB)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, color(">", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}     
if (isGroup && isSimi && budy != undefined && body.startsWith(``)){
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log('\x1b[1;31m~\x1b[1;37m>',color('[ CMD ]','aqua'), color(wib,'white'),'from',color(pushname))
					}                               
                    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    

                                          	
              }   
		} catch (e) {
			console.log('Emror : %s', color(e, 'white'))
		}
	})
}
starts() 
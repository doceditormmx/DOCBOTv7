const moment = require('moment-timezone'); 
const listmenu = (prefix) => {
	let p = 0
	return `
██████╗░░█████╗░░█████╗░
██╔══██╗██╔══██╗██╔══██╗
██║░░██║██║░░██║██║░░╚═╝
██║░░██║██║░░██║██║░░██╗
██████╔╝╚█████╔╝╚█████╔╝
╚═════╝░░╚════╝░░╚════╝░
*📚 Total commands : 137*
*🪀 Owner* : @${configs.ownerList[0].split('@')[0]}
*🖊️ Prefix* : *
*⏰ Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*GROUP ONLY*
*${p+=1}.* ${prefix}group _open|close_
*${p+=1}.* ${prefix}antilink _on|off_
*${p+=1}.* ${prefix}antitagall _on|off_
*${p+=1}.* ${prefix}antiviewonce _on|off_
*${p+=1}.* ${prefix}welcome _on|off_
*${p+=1}.* ${prefix}leave _on|off_
*${p+=1}.* ${prefix}setgroupicon _replyImage_
*${p+=1}.* ${prefix}setgroupname _text_
*${p+=1}.* ${prefix}setgroupdesc _text_
*${p+=1}.* ${prefix}hidetag _text_
*${p+=1}.* ${prefix}promote _@tag_
*${p+=1}.* ${prefix}demote _@tag_
*${p+=1}.* ${prefix}kick _@tag_
*${p+=1}.* ${prefix}add _number_
*${p+=1}.* ${prefix}getpp _@tag_
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*DOWNLOADER*
*${p+=1}.* ${prefix}play _query_
*${p+=1}.* ${prefix}playvid _query_
*${p+=1}.* ${prefix}song _query_
*${p+=1}.* ${prefix}ytmp3 _link_
*${p+=1}.* ${prefix}ytmp4 _link_
*${p+=1}.* ${prefix}igstory _username_
*${p+=1}.* ${prefix}ig _link_
*${p+=1}.* ${prefix}joox _song_
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*STICKER*
*${p+=1}.* ${prefix}stickerwm _pack|author_
*${p+=1}.* ${prefix}takestick _pack|author_
*${p+=1}.* ${prefix}toimg _replySticker_
*${p+=1}.* ${prefix}togif _replySticker_
*${p+=1}.* ${prefix}semoji _emoji_
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*ANIME*
*${p+=1}.* ${prefix}anime _query_
*${p+=1}.* ${prefix}manga _query_
*${p+=1}.* ${prefix}chara _query_
*${p+=1}.* ${prefix}waifu
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*EDUCATION*
*${p+=1}.* ${prefix}nulis _text_
*${p+=1}.* ${prefix}brainly _query_
*${p+=1}.* ${prefix}kbbi _query_
*${p+=1}.* ${prefix}wiki _query_
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*SEARCHING*
*${p+=1}.* ${prefix}playstore _apk_
*${p+=1}.* ${prefix}happymod _apk_
*${p+=1}.* ${prefix}iguser _username_
*${p+=1}.* ${prefix}igstalk _username_
*${p+=1}.* ${prefix}ytsearch _query_
*${p+=1}.* ${prefix}ytplaylist _query_
*${p+=1}.* ${prefix}ytchannel _channel_
*${p+=1}.* ${prefix}shoope _product_
*${p+=1}.* ${prefix}spotify _song_
*${p+=1}.* ${prefix}gsmarena _hp_
*${p+=1}.* ${prefix}searchmusic _replyAudio_
*${p+=1}.* ${prefix}wallpaper _query_
*${p+=1}.* ${prefix}pinterest _query_
*${p+=1}.* ${prefix}googleimage _query_
*${p+=1}.* ${prefix}jagokata _kata_
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*PRIMBON*
*${p+=1}.* ${prefix}jodoh _kamu|dia_
*${p+=1}.* ${prefix}artinama _nama_
*${p+=1}.* ${prefix}artimimpi _mimpi_
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*RANDOM*
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*TEXTMAKER*
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*IMAGEMAKER*
*${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}calender _replyImage / @tag_
*${p+=1}.* ${prefix}drawing _replyImage / @tag_
*${p+=1}.* ${prefix}sketch _replyImage / @tag_
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*OTHER*
*${p+=1}.* ${prefix}tomp3 _replyVideo_
*${p+=1}.* ${prefix}removebg _replyImage / @tag_
*${p+=1}.* ${prefix}tts _code|text_
*${p+=1}.* ${prefix}qrencode _text_
*${p+=1}.* ${prefix}barcode _text_
*${p+=1}.* ${prefix}jadwalsholat _daerah_
*${p+=1}.* ${prefix}jadwaltv _channel_
*${p+=1}.* ${prefix}tebakgambar
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*INFO*
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*OWNER*
*${p+=1}.* ${prefix}setpp _replyImage_
*${p+=1}.* ${prefix}eval _text_
*${p+=1}.* ${prefix}term _code_
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}join _link_
*${p+=1}.* ${prefix}bc _text_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@tag_
*${p+=1}.* ${prefix}premium del _@tag_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit
*${p+=1}.* ${prefix}self
*${p+=1}.* ${prefix}public`
}
const gmenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 GROUP ONLY 」 ──* 
*${p+=1}.* ${prefix}group _open|close_
*${p+=1}.* ${prefix}antilink _on|off_
*${p+=1}.* ${prefix}antitagall _on|off_
*${p+=1}.* ${prefix}antiviewonce _on|off_
*${p+=1}.* ${prefix}welcome _on|off_
*${p+=1}.* ${prefix}leave _on|off_
*${p+=1}.* ${prefix}setgroupicon _replyImage_
*${p+=1}.* ${prefix}setgroupname _text_
*${p+=1}.* ${prefix}setgroupdesc _text_
*${p+=1}.* ${prefix}hidetag _text_
*${p+=1}.* ${prefix}promote _@tag_
*${p+=1}.* ${prefix}demote _@tag_
*${p+=1}.* ${prefix}kick _@tag_
*${p+=1}.* ${prefix}add _number_
*${p+=1}.* ${prefix}getpp _@tag_
*${p+=1}.* ${prefix}tagall
*${p+=1}.* ${prefix}linkgroup
*${p+=1}.* ${prefix}revoke
*${p+=1}.* ${prefix}leave`
}

const dwmenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 DOWNLOADER 」 ──* 
*${p+=1}.* ${prefix}play _query_
*${p+=1}.* ${prefix}playvid _query_
*${p+=1}.* ${prefix}song _query_
*${p+=1}.* ${prefix}ytmp3 _link_
*${p+=1}.* ${prefix}ytmp4 _link_
*${p+=1}.* ${prefix}igstory _username_
*${p+=1}.* ${prefix}ig _link_
*${p+=1}.* ${prefix}joox _song_`	
}

const smenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 STICKER 」 ──* 
*${p+=1}.* ${prefix}stickerwm _pack|author_
*${p+=1}.* ${prefix}takestick _pack|author_
*${p+=1}.* ${prefix}toimg _replySticker_
*${p+=1}.* ${prefix}togif _replySticker_
*${p+=1}.* ${prefix}semoji _emoji_
*${p+=1}.* ${prefix}stickerfire
*${p+=1}.* ${prefix}stickernobg
*${p+=1}.* ${prefix}stickergif
*${p+=1}.* ${prefix}sticker`
}

const emenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 EDUCATION 」 ──* 
*${p+=1}.* ${prefix}nulis _text_
*${p+=1}.* ${prefix}brainly _query_
*${p+=1}.* ${prefix}kbbi _query_
*${p+=1}.* ${prefix}wiki _query_`
}	

const srcmenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 SEARCHING 」 ──* 
*${p+=1}.* ${prefix}playstore _apk_
*${p+=1}.* ${prefix}happymod _apk_
*${p+=1}.* ${prefix}iguser _username_
*${p+=1}.* ${prefix}igstalk _username_
*${p+=1}.* ${prefix}ytsearch _query_
*${p+=1}.* ${prefix}ytplaylist _query_
*${p+=1}.* ${prefix}ytchannel _channel_
*${p+=1}.* ${prefix}shoope _product_
*${p+=1}.* ${prefix}spotify _song_
*${p+=1}.* ${prefix}gsmarena _hp_
*${p+=1}.* ${prefix}searchmusic _replyAudio_
*${p+=1}.* ${prefix}wallpaper _query_
*${p+=1}.* ${prefix}pinterest _query_
*${p+=1}.* ${prefix}googleimage _query_
*${p+=1}.* ${prefix}jagokata _kata_`
}

const pmenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 PRIMBON 」 ──* 
*${p+=1}.* ${prefix}jodoh _kamu|dia_
*${p+=1}.* ${prefix}artinama _nama_
*${p+=1}.* ${prefix}artimimpi _mimpi_`
}

const rnmenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 RANDOM 」 ──* 
*${p+=1}.* ${prefix}fml
*${p+=1}.* ${prefix}randomquran
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}darkjoke
*${p+=1}.* ${prefix}pantun
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}quotes
*${p+=1}.* ${prefix}estetikpic`
}

const txmaker = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 TEXT MAKER 」 ──* 
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_`
}

const imgmaker = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 IMAGE MAKER 」 ──* 
*${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}calender _replyImage / @tag_
*${p+=1}.* ${prefix}drawing _replyImage / @tag_
*${p+=1}.* ${prefix}sketch _replyImage / @tag_`
}

const othmenu = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 OTHER 」 ──* 
*${p+=1}.* ${prefix}tomp3 _replyVideo_
*${p+=1}.* ${prefix}removebg _replyImage / @tag_
*${p+=1}.* ${prefix}tts _code|text_
*${p+=1}.* ${prefix}qrencode _text_
*${p+=1}.* ${prefix}barcode _text_
*${p+=1}.* ${prefix}jadwalsholat _daerah_
*${p+=1}.* ${prefix}jadwaltv _channel_
*${p+=1}.* ${prefix}tebakgambar`
}

const info = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 INFO 」 ──* 
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn`
}

const nimem = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 ANIME 」 ──* 
*${p+=1}.* ${prefix}anime _query_
*${p+=1}.* ${prefix}manga _query_
*${p+=1}.* ${prefix}chara _query_
*${p+=1}.* ${prefix}waifu`
}

const ownerm = (prefix) => {
	let p = 0
	return `
▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█ 
▒█░▒█ ▒█░░▒█ ▒█░░░ 
▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█
*── 「 OWNER 」 ──* 
*${p+=1}.* ${prefix}setpp _replyImage_
*${p+=1}.* ${prefix}eval _text_
*${p+=1}.* ${prefix}term _code_
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}join _link_
*${p+=1}.* ${prefix}bc _text_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@tag_
*${p+=1}.* ${prefix}premium del _@tag_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit
*${p+=1}.* ${prefix}self
*${p+=1}.* ${prefix}public`
}
const ingfo = `HEHE YA BOI
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
              wait: 'Ⲣ𝓵ⲉⲁ𝛓ⲉ Ⲱⲁⲓⲧ Ⲁ Ⲙⲓⲛ..',
			  group: '𝐓𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐢𝐬 𝐨𝐧𝐥𝐲 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩𝐬!',
			  admin: '𝕺𝖓𝖑𝖞 𝖆𝖉𝖒𝖎𝖓𝖘 𝖈𝖆𝖓 𝖚𝖘𝖊 𝖙𝖍𝖎𝖘 𝖈𝖔𝖒𝖒𝖆𝖓𝖉!',
			  botAdmin: '𝓘𝓪𝓶 𝓷𝓸𝓽 𝓪𝓭𝓶𝓲𝓷 𝓣_𝓣',
			  limit: '𝕿𝖍𝖊 𝖘𝖎𝖘𝖙𝖊𝖗 𝖚𝖘𝖆𝖌𝖊 𝖑𝖎𝖒𝖎𝖙 𝖍𝖆𝖘 𝖊𝖝𝖕𝖎𝖗𝖊𝖉\𝖓\𝖓𝕹𝖔𝖙𝖊: 𝖑𝖎𝖒𝖎𝖙 𝖜𝖎𝖑𝖑 𝖇𝖊 𝖗𝖊𝖘𝖊𝖙 𝖊𝖛𝖊𝖗𝖞 00.00',
			  ownerOnly: 'O̶n̶l̶y̶ o̶w̶n̶e̶r̶ c̶a̶n̶ u̶s̶e̶ t̶h̶i̶s̶ c̶o̶m̶m̶a̶n̶d̶!',
		      lockF: '𝕋𝕙𝕚𝕤 𝕗𝕖𝕒𝕥𝕦𝕣𝕖 𝕚𝕤 𝕝𝕠𝕔𝕜𝕖𝕕 𝕓𝕪 𝕥𝕙𝕖 𝕠𝕨𝕟𝕖𝕣'
}

module.exports = {
	listmenu,
	gmenu,
	dwmenu,
	smenu,
	emenu,
	srcmenu,
	pmenu,
	rnmenu,
	txmaker,
	imgmaker,
	othmenu,
	info,
	nimem,
	ownerm,
	ingfo,
	listCode,
	mess
}

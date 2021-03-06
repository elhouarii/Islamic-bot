let handler = async (m, { conn, text, usedPrefix,command, args }) => {
  try{var time = db.data.users[m.sender].lastjoin + 86400000
  if (new Date - db.data.users[m.sender].lastjoin < 86400000) throw `You've used the daily bot invite limit today\nwait for ${msToTime(time - new Date())} again`
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: m.chat } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, 
  vcard: `BEGIN:VCARD
  VERSION:3.0
  N:;a,;;;
  FN:${name}
  item1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}
  item1.X-ABLabel:Ponsel
  END:VCARD`}}}
  var [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `where's the link?` 
  if (!code) throw `Invalid link!`
  var anubot = owner[0]
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  if (e.length) await conn.reply(m.chat,`Successfully invited bot to ${await conn.getName(res)}`)
  
let mes = `Hello Everyone๐๐ป 
*${conn.user.name}* is a WhatsApp Multi-Device Bot built with Node.js,Invited by @${m.sender.split('@')[0]}`
  await conn.sendB(res, mes, wm, null, [[`Owner`, `.owner`], [`Menu`, `${usedPrefix}menu`]], fkonn, {
        mentions: d
         })
     
  db.data.users[m.sender].lastjoin = new Date * 1
  } catch (e) {
      conn.reply(owner[0]+'@s.whatsapp.net', e)
      throw `Sorry bots can't join the group!`
      }
    }catch(e){
      conn.reply(m.chat,`${e}`)
      conn.reply('120363022211098165@g.us',`๐จ๐ต๐ผ๐ต! ๐ฎ๐ป ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ข๐ฐ๐ฐ๐๐ฟ๐ฒ๐ฑ 
    
    ๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}
    
      ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}
      
      ๐ฃ๐ผ๐๐๐ถ๐ฏ๐น๐ฒ ๐ฅ๐ฒ๐ฎ๐๐ผ๐ป๐ :
         โข ๐๐ป๐๐ฎ๐น๐ถ๐ฑ ๐จ๐๐ฎ๐ด๐ฒ ๐ข๐ณ ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ
         โข ๐ฆ๐ฒ๐ฟ๐๐ฒ๐ฟ ๐๐ฟ๐ฟ๐ผ๐ฟ
         โข ๐ฅ๐๐ป๐๐ถ๐บ๐ฒ ๐๐ฟ๐ฟ๐ผ๐ฟ๐
         โข ๐๐ฟ๐ฟ๐ผ๐ฟ ๐ฎ๐ ๐ฑ๐ฒ๐๐ฒ๐น๐ผ๐ฝ๐ฒ๐ฟ๐ ๐๐ป๐ฑ
         โข ๐๐ฎ๐๐ฎ ๐ก๐ฒ๐๐๐ผ๐ฟ๐ธ ๐๐๐๐๐ฒ๐ `, null, {})
    }}
handler.help = ['แดแดษชษด <แดสแดแด.แดกสแดแดsแดแดแด.แดแดแด>']
handler.tags = ['main']
handler.command = /^join$/i

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + "day" + hours + " o'clock " + minutes + " minute";
    // +minutes+":"+sec;
}

function msToTime(duration) {
  var seconds = Math.floor((duration / 1000) % 60),
  minutes = Math.floor((duration / (1000 * 60)) % 60),
  hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " o'clock " + minutes + " minute"
}


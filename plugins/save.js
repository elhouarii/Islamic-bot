let handler = async(m, { text, conn, usedPrefix, command }) => {
 try{ if (/saveme|sv(me|gua|g?w|aku)$/i.test(command)) {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, `${await conn.getName(m.sender)}`, m)
    }
    let teks = text
  if (/savehe?s?|svshe|savedia|svdia$/i.test(command)) {
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, `${await conn.getName(who)}`, m)
    } catch {
      throw `@tag or reply the contact `
      }
    }
  if (/save|sv$/i.test(command)) {
     if(!text) 
          teks = conn.getName(who)
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, teks, m) 
  } catch {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, teks, m)
  }
 }
}catch(e){
   conn.reply(m.chat,`${e}`)
   conn.reply('120363022211098165@g.us',`ð¨ðµð¼ðµ! ð®ð» ð²ð¿ð¿ð¼ð¿ ð¢ð°ð°ðð¿ð²ð± 
 
   ðð¿ð¿ð¼ð¿ : ${util.format(e)}
 
   ðð¼ðºðºð®ð»ð± : ${usedPrefix+command}
   
   ð£ð¼ððð¶ð¯ð¹ð² ð¥ð²ð®ðð¼ð»ð :
      â¢ ðð»ðð®ð¹ð¶ð± ð¨ðð®ð´ð² ð¢ð³ ðð¼ðºðºð®ð»ð±
      â¢ ð¦ð²ð¿ðð²ð¿ ðð¿ð¿ð¼ð¿
      â¢ ð¥ðð»ðð¶ðºð² ðð¿ð¿ð¼ð¿ð
      â¢ ðð¿ð¿ð¼ð¿ ð®ð ð±ð²ðð²ð¹ð¼ð½ð²ð¿ð ðð»ð±
      â¢ ðð®ðð® ð¡ð²ððð¼ð¿ð¸ ððððð²ð `, null, {})
 }}
handler.help = ['sá´á´ á´ <@á´á´É¢/Êá´á´ÊÊ>']
handler.tags = ['tools']
handler.command = /^sa?ve?(me|aku|aq|gua|g?w)?(he'?s?|sh?e|dia)?$/i

module.exports = handler

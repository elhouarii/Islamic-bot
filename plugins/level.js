let handler = async (m, { conn ,usedPrefix,command,}) => {
  try{  let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    conn.reply(m.chat, `Level @${who.split(`@`)[0]} *${user.level}*`, m, {mentions: [who]})
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
handler.help = ['Êá´á´ á´Ê <@á´sá´Ê>']
handler.tags = ['xp']
handler.command = /^(level)$/i

module.exports = handler

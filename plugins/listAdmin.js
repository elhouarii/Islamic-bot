let handler = async (m, { conn, usedPrefix,command, participants }) => {
     try{   let grup = await conn.getName(m.key.remoteJid)
        let mimin = m.isGroup ? NgeriAtmin(participants) : ''
        let txt = `List Group Admin  *${grup}*\n*Total:* ${mimin.length}\n\n`
        for (let min of mimin) {
                txt += `â¢ @${min.split('@')[0]}\n`
        }
        conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
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
handler.help = ['ÊÉªsá´á´á´á´ÉªÉ´']
handler.tags = ['group']
handler.command = /^(adminlist?|list?admin)$/i

handler.group = true

module.exports = handler


const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
		b.admin === "admin" ? atminn.push(b.id) : ''
		b.admin === "superadmin" ? atminn.push(b.id) : ''
	}
	return atminn
}

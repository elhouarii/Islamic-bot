let handler = async (m, { usedPrefix, command, conn, text }) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Current database  ${totalreg} user*\n*Register registered ${rtotalreg} user*`
    await conn.sendBL(m.chat, kon, wm, fla + `${command}`, [['Menu', `${usedPrefix}menu`]], m)
}
handler.help = ['ᴜsᴇʀ']
handler.tags = ['info']
handler.command = /^(database|user)$/i

module.exports = handler

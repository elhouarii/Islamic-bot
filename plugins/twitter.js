const { twitter } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    try{if (!args[0]) throw `*This command to download twitter media with link*\n\nExample:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    if (!args[0].match(/(https:\/\/.*twitter.com)/gi)) throw `*Wrong link! This command to download twitter media with link*\n\nExample:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    twitter(args[0]).then(async res => {
    let twit = JSON.stringify(res)
    let json = JSON.parse(twit)
    let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
    conn.reply(m.chat,pesan)
    for (let { url } of json.data)
    conn.sendMedia(m.chat, url, m, {jpegThumbnail: await(await fetch(thumbx)).buffer(), caption: wm})
 })
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
handler.help = ['แดแดกษชแดแดแดส'].map(v => v + ' <แดสส>')
handler.tags = ['downloader']
handler.command = /^(twit(ter)?(dl)?(downloa?d(er)?)?)$/i



module.exports = handler

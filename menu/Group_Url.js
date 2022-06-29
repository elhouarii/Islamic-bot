import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';
import Error from './error.js';

export const Group_Url = {
    

    async exec({ from, client, body, id }) {

        
        const GroupsMenu = fs.readJsonSync('./db/GroupsMenu.json');


        if (body.length === 48 && body.includes('https://chat.whatsapp.com/') && GroupsMenu.some(e => e.url === body) === false){

            let db_groups = fs.readJsonSync(`./db/Group/${from}.json`);
            db_groups.push(body);
            fs.writeJsonSync(`./db/Group/${from}.json`,db_groups, { spaces: '\t' })

            let group_name = db_groups[0]
            let group_url = db_groups[1]
            let msg = 'تم نشر المجموعة بنجاح ✅ \n\n'
            msg += `إسم المجموعة: ${group_name} \n\n\n`
            msg += `${group_url}`
            let menu_group = '1- نشر قروبك ✉️ \n'
            menu_group += '2- قائمة القروبات ⚜️\n'
            menu_group += '3- قروب عشوائي 🔄\n\n'
            menu_group += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            GroupsMenu.unshift({name: group_name, url: group_url});
            fs.writeJsonSync('./db/GroupsMenu.json', GroupsMenu, { spaces: '\t' })
            await client.reply(from, msg, id).catch((error) => Error(error));
            fs.writeJsonSync(`./db/Group/${from}.json`, [], { spaces: '\t' })
            MenuNmber(from, 9)
            await client.reply(from, menu_group, id).catch((error) => Error(error));
        }

        else {

            if (body.length !== 48 || body.includes('https://chat.whatsapp.com/') === false) {

                let msg = 'الرابط غير صحيح تأكد من كتابة الرابط بشكل صحيح وان لايحتوي على مسافات ⚠️ \n\n\n'
                msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
                await client.reply(from, msg, id).catch((error) => Error(error));
            }

            if (GroupsMenu.some(e => e.url === body) === true) {

                let msg = 'لقد تم نشر هذه المجموعة بالفعل ⚠️\n\n\n'
                msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'
                await client.reply(from, msg, id).catch((error) => Error(error));
                fs.writeJsonSync('./lib/db_groups.json', [], { spaces: '\t' })

            }
        
        }

    }

}
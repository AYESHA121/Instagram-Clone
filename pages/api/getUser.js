// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'
import { error } from 'console'


export default async function handler(req, res) {
    let data = await fs.promises.readdir(`Users`);
    let myfile;
    let allUsers = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
       // console.log(item)

        myfile = await fs.promises.readFile(('Users/' + item), 'utf-8')
        allUsers.push(JSON.parse(myfile));
    }
    // console.log(allUsers)
    res.status(200).json(allUsers)


}
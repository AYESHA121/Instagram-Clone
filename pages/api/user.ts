// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import { error } from 'console'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  fs.readFile( `Users/${req.query.slug}.json`, 'utf-8', ( ( err, data ) => {
    if ( err ) {
      res.status( 500 ).json( { name: 'User Not found' } )
    }
    else{

      res.status( 200 ).json( JSON.parse( data ) )
    }
  } ) )
  
  // console.log(req.query)
}

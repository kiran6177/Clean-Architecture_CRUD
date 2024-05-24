import express from 'express'

import {userRoute} from '../../adapters/routes/index.js';

const createServer = ()=>{
    const app = express();
    app.use(express.urlencoded({extended:true}))
    app.use('/',userRoute)
    return app
}

export default createServer
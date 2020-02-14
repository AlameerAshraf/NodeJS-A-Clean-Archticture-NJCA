import express from 'express';
import dotenv from 'dotenv/config';

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`) })

import logger from './loaders/logger';



async function startServer(){
    const app = express();
    const port = process.env.PORT || 8888;


    await require('./loaders').default({ app });

    app.listen(port , (err)=>{
        if(err){
            process.exit(1);
        }
        logger.info(`
        ################################################
            🏁  Server listening on port: ${port} 🏁 
        ################################################`);
    });
};


startServer();



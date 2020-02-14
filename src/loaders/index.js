import expressLoader from './express';
import logger from './logger';
import mongo from './mongo';


export default async ({ app })=> {
    /**
     * MongoDB loader, creates mongoClient and connect to the db and return db connection.
    */
   new mongo();

    
    /**
     * Laods express essentials 
    */
    await expressLoader({ app });
    logger.log("info" , "Express Loader has initalized successfully! ✅");

};
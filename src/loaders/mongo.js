import mongoose from 'mongoose';
import loggers from './logger';


class mongo {
    constructor(){ 
        const url = process.env.DATA_BASE_URL || 'mongodb://localhost:27017/seqtdb';
        mongoose.Promise = global.Promise;
        mongoose.set("useNewUrlParser", true);
        mongoose.set("useFindAndModify", false);
        mongoose.set("useCreateIndex", true);
        mongoose.set("useUnifiedTopology", true);

        mongoose.connect(url)
        setTimeout( () => {
            let connectionState = mongoose.connection.readyState;
            if(connectionState == 1)
                loggers.log("info" , "Connection to database engine has successfully established ✅");
            else 
                loggers.log("error" , "Something went wrong connecting to the database!");
        }, 3000);
    };
};

export default mongo;

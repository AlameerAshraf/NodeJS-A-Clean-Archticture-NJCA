import bodyParser from 'body-parser';
import cors from 'cors';

// API routes
import * as routes from '../api';


// const app = express(); // for itelisense only.. 

export default ({ app })=> {
    var env = process.env.NODE_ENV;
    /**
     * Enable cors on all actions
     */
    app.use(cors());

    /**
     * Transform string to JSON.
     */
    app.use(bodyParser.json());

    /**
     * SERVERS 
     */
    app.use(process.env.ROUTING_PREFIX , routes.default);

    /**
     * Check API health.
     */
    app.get(`${process.env.ROUTING_PREFIX}status`, (req, res) => {
        res.status(200).send("SEQT IS UP AND RUNNING!");
    });


    /**
     * Catch 404 and forward to error handle.
     */
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /**
     * Global error catcher.
     */
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors:{
                message: err.message
            }
        });
    });

};



import winston from 'winston';


const transports = [];
if (process.env.NODE_ENV != 'dev' && process.env.NODE_ENV != 'staging') {
    transports.push(
        new winston.transports.File({
            filename: 'errors.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'warnings.log',
            level: 'warn'
        }),
        new winston.transports.File({
            filename: 'infos.log',
            level: 'info'
        }),
    )
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat()
            )
        })
    )
}

const loggerInstance =  winston.createLogger({
    level: "",
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
    ),
    transports
});

export default loggerInstance;
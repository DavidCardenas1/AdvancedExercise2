const {createLogger,format,transports}= require('winston');

module.exports= createLogger({
    format: format.combine(format.simple()),
    transports:[
        new transports.Console({
            level:'debug',
        }),
        new  transports.File({
            maxsize:5120000,
            maxFiles:5,
            filename:`${__dirname}/../logs/log-api.log`
        })
    ]
})
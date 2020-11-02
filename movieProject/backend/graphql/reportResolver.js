const {userHistory } = require("./usersResolvers")
var pdf = require("pdf-creator-node");
var fs = require('fs');
var html = fs.readFileSync("./PdfTemplate/template.html", 'utf8');
const getDate=require('../utils/getTime')
const logger= require('../utils/logger')



const createReport = async (_,args) => {


    const history = await userHistory(null, args)


    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: `<div style="text-align: center;">User:${history.name} </div>`
        },
        "footer": {
            "height": "28mm",
            "contents": {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };

    let historyData = []
    history.moviesWatched.forEach(result => {
        let obj = {}
        obj.movieName = result.movieName
        if (obj.evaluation)
            obj.evaluation = result.evaluation
        else
            obj.evaluation = "Not evaluated"
        historyData.push(obj)
    });
    var document = {
        html: html,
        data: {
            moviesWatched: historyData
        },
        path: `./${history.name}History.pdf`
    };

    logger.info(`report created user: ${args.email} date:${getDate()}`)
    return pdf.create(document, options)
        .then(path => {
            return { path:path.filename }
        })
        .catch(error => {
            console.error(error)
        });
};
module.exports=createReport;
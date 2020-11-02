function getDate() {
    var d = new Date,
     dformat = [d.getMonth() + 1,
    d.getDate(),
    d.getFullYear()].join('/') + ' ' +
        [d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        d.getMilliseconds()].join(':');
    return dformat
}
module.exports = getDate
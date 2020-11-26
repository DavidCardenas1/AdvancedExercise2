const oracledb = require('oracledb');
async function createPool() {
    try {
        let pool = await oracledb.createPool({
            user: 'admin',
            password: 'admin',
            connectString: 'localhost:1521/ORCLCDB.localdomain'
        });
        // console.log('Initializing database module');
        // let result = await conn.execute("SELECT * FROM example");
        // await conn.close();
        // console.log(result);
        return pool
    } catch (error) {
        console.log(error);
    }
}
module.exports=createPool
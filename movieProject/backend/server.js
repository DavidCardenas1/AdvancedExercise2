
const oracledb = require('oracledb');
const config = require('./dbConfig');
 
async function runTest() {
  let conn;
 
  try {
    conn = await oracledb.getConnection(config);
 
    const result = await conn.execute(
      'select current_timestamp from dual'
    );
 
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
 
runTest();
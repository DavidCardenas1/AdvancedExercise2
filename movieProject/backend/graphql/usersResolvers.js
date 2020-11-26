
const validateRegisterInputs = require('../validation/register')
const logger = require('../utils/logger')
const oracledb = require('oracledb');
const createPool = require('../connectionDB')


const login = async (_, args) => {
    const { email, password } = args;
    try {
        await createPool();
        let sql = 'BEGIN login (:email,:password); END;';
            let binds = [
                email,
                password
            ]
            const conn = await oracledb.getConnection();
            let result = await conn.execute(sql, binds);
            // console.log(result);
            await conn.close();
            if (result) {
                const [[[name]]]=result.implicitResults
                console.log(name);
                logger.info(`user ${email} logged in`);
                return {
                    email,
                    name
                }
            }

    } catch (error) {
        throw new Error(error)
    }
}
const register = async (_, args) => {
    const { name, email, password } = args;
    const error = validateRegisterInputs(args)
    if (!error) {
        try {
            await createPool()
            let sql = 'BEGIN register (:email,:password,:name); END;';
            let binds = [
                email,
                password,
                name
            ]
            const conn = await oracledb.getConnection();
            let result = await conn.execute(sql, binds);
            // console.log(result);
            await conn.close();
            if (result) {
                logger.info(`user ${email} created`);
                return {
                    email,
                    name
                }
            }

        } catch (err) {
            throw new Error(err)
        }
    } else {
        throw new Error(error)
    }
}


module.exports = {
    login,
    register

}
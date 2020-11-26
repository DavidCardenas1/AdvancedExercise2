const logger = require('../utils/logger')
const oracledb = require('oracledb');
const createPool = require('../connectionDB')



const addMovieWatched = async (_, args) => {
    try {
        const { email, movieId } = args;
        await createPool()
        let sql = 'BEGIN p_movieswatched(:email,:movieName); END;';
        let binds = [

            email,
            movieId
        ]
        const conn = await oracledb.getConnection();
        let result = await conn.execute(sql, binds);

        await conn.commit()
        await conn.close();
        if (result) {
            logger.info(`${email} watched ${movieName} `);
            return {
                movieId
            }
        }

    } catch (error) {
        throw new Error(error)
    }
}
const evaluateMovie = async (_, args) => {
    try {
        const { email, movieId, evaluation } = args;
        await createPool()
        let sql = 'BEGIN P_movie_evaluation (:email,:movieId,:evaluation); END;';
        let binds = [

            email,
            movieId,
            evaluation
        ]
        const conn = await oracledb.getConnection();
        let result = await conn.execute(sql, binds);

        await conn.commit()
        await conn.close();
        if (result) {
            logger.info(`${email} evaluate ${movieName} with ${evaluation}`);
            return {
                movieId,
                email,
                evaluation
            }
        }
    } catch (error) {
        throw new Error(error)

    }
}
const getMovieEvaluation = async (_, args) => {
    try {
        const { movieId } = args;
        await createPool()
        let sql = 'BEGIN P_get_movie_evaluation (:movieId); END;';
        let binds = [
            movieId
        ]
        const conn = await oracledb.getConnection();
        let result = await conn.execute(sql, binds);
        await conn.commit()
        await conn.close();
        if (result) {
            let [[[eval]]] = result.implicitResults

            return {
                movieId,
                evaluation: eval
            }
        }

    } catch (error) {
        throw new Error(error)
    }

}

const addToWatchList = async (_, args) => {
    try {
        const { email, movieId } = args;
        await createPool()
        let sql = 'BEGIN P_towatch (:email,:movieId); END;';
        let binds = [

            email,
            movieId
        ]
        const conn = await oracledb.getConnection();
        let result = await conn.execute(sql, binds);

        await conn.commit()
        await conn.close();
        if (result) {
            console.log(result);
            logger.info(`${email} add to watch list, movie: ${movieId} `);
            return {
                email,
                movieId
            }
        }
    } catch (error) {
        throw new Error(error)
    }
}
const removeFromToWatchList = async (_, args) => {
    const { email, movieId } = args;
    try {
        const { email, movieId } = args;
        await createPool()
        let sql = 'BEGIN P_delete_towatch (:email,:movieId); END;';
        let binds = [

            email,
            movieId
        ]
        const conn = await oracledb.getConnection();
        let result = await conn.execute(sql, binds);

        await conn.commit()
        await conn.close();
        if (result) {
            logger.info(`${email} removed to watch list, movie: ${movieId} `);
            return {
                email,
                movieId
            }
        }
    } catch (err) {
        throw new Error(error)
    }

}
const getToWatchList =async (_, args) => {
    // const { email } = args;
    try {
        const { email } = args;
        await createPool()
        let sql = 'BEGIN P_get_towatch (:email); END;';
        let binds = [
            email
        ]
        const conn = await oracledb.getConnection();
        let result = await conn.execute(sql, binds);

        await conn.commit()
        await conn.close();
        if (result) {
            let [eval] = result.implicitResults
            let res=eval.map(([data])=>{
                return{
                    movieId:data
                }
            })
            console.log(res);
            return res;
            
        }
    } catch (error) {
        throw new Error(error)
    }

}
const getMoviesWatched =async (_, args) => {
    // const { email } = args;
    try {
        const { email } = args;
        await createPool()
        let sql = 'BEGIN P_get_movieswatched(:email); END;';
        let binds = [
            email
        ]
        const conn = await oracledb.getConnection();
        let result = await conn.execute(sql, binds);

        await conn.commit()
        await conn.close();
        if (result) {
            let [eval] = result.implicitResults
            let res=eval.map(([data])=>{
                return{
                    movieId:data
                }
            })
            console.log(res);
            return res;
            
        }
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = {
    addMovieWatched,
    evaluateMovie,
    getMovieEvaluation,
    getToWatchList,
    addToWatchList,
    getMoviesWatched,
    removeFromToWatchList

}
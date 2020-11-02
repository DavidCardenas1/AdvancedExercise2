const Users = require('../dbModel/users')
const Movies = require('../dbModel/movies')
const UserMovie = require('../dbModel/userMovies')
const logger= require('../utils/logger')

const addMovie = (_, args) => {
    try {
        const { movieName, genre, productionCompany } = args;
        const startEvaluation = 5

        const movie = new Movies({ movieName, genre, productionCompany, evaluation: startEvaluation })
        return movie.save()
    } catch (err) {
        throw new Error(err)
    }
}
const movieWatched = (_, args) => {
    try {
        const { email, movieName } = args;
        let { evaluation } = args
        return Users.findOne({ email }).then(user => {

            if (user) {
                return Movies.findOne({ movieName }).then(movie => {
                    if (movie) {
                        return UserMovie.findOne({ email, movieName }).then(result => {
                            if (!result) {
                                if (!evaluation) {
                                    evaluation = null
                                }
                                const movieWatched = new UserMovie({ email, movieName, evaluation: null })
                                logger.info(`${email} watched ${movieName}`);
                                return movieWatched.save()
                            } else {
                                throw new Error("already saved")
                            }
                        })

                    } else
                        throw new Error("not movie or user")
                })
            } else
                throw new Error("not  user")
        })

    } catch (error) {
        throw new Error(error)
    }
}
const evaluateMovie = (_, args) => {
    try {
        const { email, movieName, evaluation } = args;
        return UserMovie.findOne({ email, movieName }).then(movie => {
            if (movie) {
                movie.evaluation = evaluation
                logger.info(`${email} evaluate ${movieName} with ${evaluation}`);
                return movie
            }
        })

    } catch (error) {

    }
}
const findMovie = async (_, args) => {
    const { movieName } = args;
    const allUsersMovies = await UserMovie.find({ movieName }).then(result => {
        if (result) {
            return result
        }
    })
    let count = 0
    let sum = 0
    let avg = 5
    allUsersMovies.forEach(movie => {
        if (movie.evaluation) {
            count++;
            sum = sum + movie.evaluation
        }
    });
    if (count > 0) {
        avg = sum / count
    }

    return Movies.findOne({ movieName }).then(movie => {
        if (movie) {
            movie.evaluation = avg
            movie.save();
            return movie
        }
    })

}
const allMovies = () => {
    return Movies.find().then(movie => {
        if (movie) {
            return movie
        }
    })
}
const addToWatchList=(_,args)=>{
    const{email,movieName}=args;
    logger.info(`${email} add to watch list, movie: ${movieName} `);
}
const removeToWatchList=(_,args)=>{
    const{email,movieName}=args;
    logger.info(`${email} removed to watch list, movie: ${movieName} `);
}
const seeToWatchList=(_,args)=>{
    const{email}=args;
}
module.exports = {
    addMovie,
    movieWatched,
    evaluateMovie,
    findMovie,
    allMovies

}
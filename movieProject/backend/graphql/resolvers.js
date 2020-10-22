const Users = require('../dbModel/users')
const Movies = require('../dbModel/movies')
const UserMovie = require('../dbModel/userMovies')
const validateRegisterInputs = require('../validation/register')

const allUsers = () => {
    return Users.find({}).then(users => {
        return users
    })
}
const Login = (_, args) => {
    return Users.findOne({ email: args.email }).then(user => {
        if (user) {
            return user.comparePassword(args.password).then(res => {
                if (res) {
                    return user
                } else {
                    throw new Error("credentials")
                }
            })
        } else
            throw new Error("credentials")
    })
}
const createUser = (_, args) => {
    const { name, email, password } = args;
    const error = validateRegisterInputs(args)
    if (!error) {
        try {
            const user = new Users({ name, email, password })
            return user.save()
        } catch (err) {
            throw new Error(err)
        }
    } else {
        throw new Error(error)
    }
}

const userHistory = (_, args) => {
    try {
        const { email } = args;
        const moviesWatched = UserMovie.find({ email }).then(result => {
            if (result) {
                return result
            }
        })
        const name = Users.findOne({ email }).then(result => {
            if (result) {
                return result.name
            }
        })
        return { name, email, moviesWatched }
    } catch (error) {
        throw new Error(error)
    }
}
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
            // console.log(result);
            return result
        }
    })
    let count = 0
    let sum = 0
    let avg = 5
    allUsersMovies.forEach(movie => {
        if (movie.evaluation) {
            count++;
            sum = sum+movie.evaluation
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



const resolvers = {
    Query: {
        allUsers,
        Login,
        userHistory,
        findMovie,
        allMovies
    },
    Mutation: {
        createUser,
        addMovie,
        movieWatched,
        evaluateMovie
    }
}
module.exports = resolvers;
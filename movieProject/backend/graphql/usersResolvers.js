const Users = require('../dbModel/users')
const UserMovie = require('../dbModel/userMovies')
const validateRegisterInputs = require('../validation/register')
const logger= require('../utils/logger')

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
                    logger.info(`${res.email} logged`);
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
            logger.info(`user ${email} created`);
            return user.save()
        } catch (err) {
            throw new Error(err)
        }
    } else {
        throw new Error(error)
    }
}

const userHistory =async (_, args) => {
    try {
        const { email } = args;
        const moviesWatched =await UserMovie.find({ email }).then(result => {
            if (result) {
                return result
            }
        })
        const name =await Users.findOne({ email }).then(result => {
            if (result) {
                return result.name
            }
        })
        return { name, email, moviesWatched }
    } catch (error) {
        throw new Error(error)
    }
}
module.exports={
    allUsers,
    Login,
    createUser,
    userHistory

}
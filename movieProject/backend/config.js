module.exports={
    PORT: process.env.PORT||8087,
    // db: process.env.MONGODB||'mongodb+srv://david:tekmexico123@chat-ortgs.mongodb.net/test?retryWrites=true&w=majority',
    db: process.env.MONGODB||'mongodb://localhost:27017/movies'
}
const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.MONGO_ROOT_USER)
console.log(process.env.MONGO_ROOT_PASSWORD)
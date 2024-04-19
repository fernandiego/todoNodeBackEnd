const app = require("./src/app")
const {initdb} = require("./src/db")

initdb().then(() => {
app.listen(3000)
console.log("server started at 3000")
})


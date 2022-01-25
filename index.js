
// const fs = require("fs")
//     const data = fs.readFileSync('data.json', "utf-8")

// console.log(data)

const fs = require('fs')
fs.readFile('data.json',"utf-8",(err, data) => {
    if (err) {
        throw err
    }
    console.log(data)

})
const xlsx = require("node-xlsx")

const workSheetsFromFile = xlsx.parse(`${__dirname}/origin_file.xlsx`)

// 默认是按照行读取的数据 可根据情况在excel中做行列转换
// console.log(workSheetsFromFile[0].data)
let origin_data = workSheetsFromFile[0].data
let target_data = []
let result = []
origin_data.map(i => {
    let item = { name: i[0] }
    item.child = i.slice(1)

    result.push(item)
})
console.log(result) // result即为我们需要的数组

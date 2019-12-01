const acron = require("acorn")
const escodegen = require("escodegen")
const arg = process.argv[2]

console.log(acron.parse(arg))
console.log(escodegen.generate(acron.parse(arg)))

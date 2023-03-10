const fs = require("fs")
const cheerio = require("cheerio")
var glob = require("glob")
require("dotenv").config()

function htmlUpdater() {
  let file = "./build/index.html"
  let $outer = cheerio.load(fs.readFileSync(file).toString())
  let $ = cheerio.load($outer("html").html())
  $("html").each(function (i, elem) {
    let contents = $(this).contents()
    $(this).replaceWith(contents)
  })
  $("head").each(function (i, elem) {
    $(this).replaceWith("")
  })
  $("body").each(function (i, elem) {
    let contents = $(this).contents()
    $(this).replaceWith(contents)
  })

  let finalString = $.html()
  fs.writeFileSync(file, finalString)
}

function chunkJSUpdater() {
  let PATH_TO_MAIN_JS = "./build/static/js/"
  glob(PATH_TO_MAIN_JS + "/main.*.js", false, function (er, files) {
    fs.readFile(files[0], "utf8", function (err, data) {
      if (err) throw err
      let modifiedData = data.replace(
        /=[a-zA-Z]\.[a-zA-Z]\+"static\//g,
        '="' + process.env.PUBLIC_URL + "/static/"
      )
      fs.writeFileSync(files[0], modifiedData)
    })
  })
}

for (var i = 0; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case "htmlUpdater":
      htmlUpdater()
      break
    case "chunkJSUpdater":
      chunkJSUpdater()
      break
  }
}

module.exports.htmlUpdater = htmlUpdater
module.exports.chunkJSUpdater = chunkJSUpdater

var express = require("express");
var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");
var app = express();
var dogBreeds = [];

app.use(express.static("public"));

function requestDogInfo(count) {
  if (count < 838) {
    request("http://localhost:8081/dog.html", (error, response, html) => {
      if (error) throw error;
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var data = '"' + $(`#A_${count}`).text() + '"' + ",";
        var breed = $(`#A_${count}`).text();
        if (data !== `"",`) {
          fs.appendFile("Output-r.txt", data, "utf-8", err => {
            if (err) throw err;
          });
          dogBreeds.push(breed);
        }
        requestDogInfo(++count);
      }
    });
  }
}

requestDogInfo(297);
console.log;
// app.get("/scrape", function(req, res) {
//   url = "./dog.html";

//   request(url, function(error, response, html) {
//     if (error) throw error;
//     if (!error) {
//       var $ = cheerio.load(html);

//       var json = { breed: "" };

//       $("#A_837").filter(function() {
//         var data = $(this);
//         var breed = data.text();

//         json.breed = breed;
//       });
//       // Since the rating is in a different section of the DOM, we'll have to write a new jQuery filter to extract this information.
//     }
//   });
// });

app.listen("8081");
console.log("Magic happens on port 8081");
exports = module.exports = app;

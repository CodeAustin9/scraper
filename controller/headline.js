var db = require("../models/Headline.js");
var cheerio = require("cheerio");
var axios = require("axios");

module.exports = {
    create: function(req, res) {
      
            // First, we grab the body of the html with request
            axios.get("http://www.echojs.com/").then(function(response) {
              // Then, we load that into cheerio and save it to $ for a shorthand selector
              var $ = cheerio.load(response.data);
          
              // Now, we grab every h2 within an article tag, and do the following:
              $("article h2").each(function(i, element) {
                // Save an empty result object
                var result = {};
          
                // Add the text and href of every link, and save them as properties of the result object
                result.title = $(this)
                  .children("a")
                  .text();
                result.link = $(this)
                  .children("a")
                  .attr("href");
          
       
        var dummyData = {
            headline: "e",
            summary: "sdsdfsdf",
            url: "sdfsdf"
        }

        db.create(result)
        .then(function(result){
      console.log(result, "this is my result");
    })
    },
    find: function(req, res) {
        db.find({})
        .then(function(result){
            console.log(result, "FIND RESULTS");
            res.json(result);
        })
    }

   
}
    }
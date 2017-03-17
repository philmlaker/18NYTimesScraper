/* Scraper: Server #2  (18.2.1)
 * ========================= */

// Dependencies:
var express = require("express");
var mongojs = require("mongojs");
// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// First, tell the console what server2.js is doing
console.log("\n******************************************\n" +
            "Grabbing every article headline\n" +
            "from the NYTimes Science Section:" +
            "\n******************************************\n");


// Making a request call for nytimes.com's homepage
request("https://www.nytimes.com/section/science?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Science&WT.nav=page", function(error, response, html) {

  // Load the body of the HTML into cheerio
  var $ = cheerio.load(html);

  // Empty array to save our scraped data
  var result = [];

  // With cheerio, find each h2-tag with the class "headline"
  $("a.story-link").each(function(i, element) {

    // Save the text of the h4-tag as "title"
    var title = $(this).find("h2.headline").text();
    var imgLink = $(element).find("img").attr("src");

    // Find the h4 tag's parent a-tag, and save it's href value as "link"


    // For each h4-tag, make an object with data we scraped and push it to the result array
    db.nytimesData.save({
      title: title,
      image: imgLink
     
    });

  });




  // After the program scans each h4.headline-link, log the result
  console.log(result);
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});

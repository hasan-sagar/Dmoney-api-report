const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/15732846-f885c834-10f6-4a8e-b2d9-5c4c197c9853?access_key=${process.env.api_key}`,
    //environment:require('./collection/env.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);

var express = require("express");
var router = express.Router();
const {
  fromPath
} = require("pdf2pic");
const pdf = require("Nervous_system-page-counter");
const fs = require("fs");
var app = express();
app.get("/pdfpng", function(req, res, next) {
  const {
    filename
  } = req.query;
  const options = {
    density: 100,
    saveFilename: "file",
    savePath: "./public/uploads",
    format: "png",
    width: 600,
    height: 600,
  };
  const storeAsImage = fromPath(`./public/uploads/${filename}`, options);
  let dataBuffer = fs.readFileSync(`./public/uploads/${filename}`);
  pdf(dataBuffer).then(function(data) {
    for (var pageToConvertAsImage = 1; pageToConvertAsImage <= data.numpages; pageToConvertAsImage++) {
      storeAsImage(pageToConvertAsImage).then((resolve) => {
        return resolve;
      });
    }
    res.send({
      filename: filename
    });
  });
});
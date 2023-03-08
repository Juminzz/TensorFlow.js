const axios = require("axios");
const cheerio = require("cheerio");

const steam = "https://fow.kr/ranking#1";

axios.get(steam).then((res) => {
  let $ = cheerio.load(res.data);
  let lank = [];

  $(".tipsy_live").each(function () {
    lank.push($(this).text().trim());
    console.log(lank);
  });
});

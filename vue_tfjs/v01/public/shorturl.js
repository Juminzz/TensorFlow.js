const express = require("express");
const request = require("request");
const app = express();
const client_id = "KDCNwdnGUg2ckgsKX1gc"; //개발자센터에서 발급받은 Client ID
const client_secret = "bk_W2RpT4A"; //개발자센터에서 발급받은 Client Secret
const query = encodeURI("https://developers.naver.com/docs/utils/shortenurl");
app.get("/url", function (req, res) {
  const api_url = "https://openapi.naver.com/v1/util/shorturl";
  const request = require("request");
  const options = {
    url: api_url,
    form: { url: query },
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/url app listening on port 3000!");
});

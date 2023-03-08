require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");
const token = process.env.VUE_APP_botid;

let key = process.env.VUE_APP_pkey;

const bot = new TelegramBot(token, { polling: true }); //

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const steam = "https://store.steampowered.com";

  axios.get(steam).then((res) => {
    let $ = cheerio.load(res.data);
    let lank = [];

    $("div").each(function () {
      lank.push($(this).text().trim());
    });
    // if (text == "스팀") {
    //   bot.sendMessage(chatId, "d" + lank);
    console.log(lank);
    // }
  });
});

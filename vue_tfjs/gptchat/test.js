const TelegramBot = require("node-telegram-bot-api");

// Replace with your bot's token
const token = "5862046986:AAH1Af0d0Y9tVRNvnn1XpqySCm-meZHqGKc";

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Function to add a message to the chat log
function addToChatLog(message) {
  // Save the message to a file or database
}

// Listen for messages sent to the bot
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Add the message to the chat log
  addToChatLog(`${msg.from.first_name}: ${messageText}`);

  // Send a reply to the user
  bot.sendMessage(chatId, "Hello! How can I help you today?");
});

let currentLang = "ru";

const texts = {
  ru: {
    placeholder: "Напишите сообщение...",
    bot: "Ответ бота"
  },
  ua: {
    placeholder: "Напишіть повідомлення...",
    bot: "Відповідь бота"
  },
  en: {
    placeholder: "Type a message...",
    bot: "Bot reply"
  }
};

function setLang(lang) {
  currentLang = lang;
  document.getElementById("userInput").placeholder = texts[lang].placeholder;
}

function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = `message ${cls}`;
  div.textContent = text;
  document.getElementById("messages").appendChild(div);
}

function sendMessage() {
  const input = document.getElementById("userInput");
  if (!input.value) return;

  addMessage(input.value, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(texts[currentLang].bot, "bot");
  }, 500);
}

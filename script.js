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
  document.getElementById("userInput").placeholder =
    texts[lang].placeholder;

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.style.opacity = "0.6";
  });

  event.target.style.opacity = "1";
}

function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = `message ${cls}`;
  div.textContent = text;

  const messages = document.getElementById("messages");
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(texts[currentLang].bot, "bot");
  }, 600);
}

document.getElementById("userInput").addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

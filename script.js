document.getElementById("dropBeatBtn").addEventListener("click", () => {
  const messages = [
    "💥 BOOM! The beat just dropped! 💥",
    "🔊 WUB WUB WUB 🔊",
    "🎶 This is how we party in Estonia! 🎶",
    "🚨 Sound the alarms, DJ CRAZY TIMES is LIVE! 🚨"
  ];

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("beatMessage").textContent = randomMsg;
});

// ---------- SELECTORS ----------
const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const quickButtons = document.querySelectorAll("[data-quick-message]");

// Only run if chat exists
if (chatWindow && chatInput && sendBtn) {
  addBotMessage(
    "Hey future tech queen 👑💻 Tell me how you feel about coding, school, or being a girl in tech."
  );

  sendBtn.addEventListener("click", handleSend);

  chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  });
}

if (quickButtons) {
  quickButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-quick-message");
      if (!text) return;
      sendMessage(text);
    });
  });
}

// ---------- FUNCTIONS ----------
function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;
  sendMessage(text);
  chatInput.value = "";
}

function sendMessage(text) {
  addUserMessage(text);
  const reply = generateReply(text);
  setTimeout(() => addBotMessage(reply), 250);
}

function addUserMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("chat-message", "user");

  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble");
  bubble.textContent = text;

  msg.appendChild(bubble);
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function addBotMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("chat-message", "bot");

  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble");
  bubble.textContent = text;

  msg.appendChild(bubble);
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Simple keyword-based replies
function generateReply(rawInput) {
  const text = rawInput.toLowerCase();

  if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
    return "Hiii 👋🏽 I’m glad you’re here. How are you feeling about tech today — excited, nervous, or both?";
  }

  if (text.includes("coding") || text.includes("code") || text.includes("programming")) {
    return "Coding is basically talking to a very picky computer. Confusing at first, but you get better every time you debug. Keep going 💪🏾.";
  }

  if (text.includes("math")) {
    return "Math is tough for a lot of people, but that doesn’t cancel your future in tech. Asking questions and practicing slowly is the real flex.";
  }

  if (
    text.includes("impostor") ||
    text.includes("imposter") ||
    text.includes("dont belong") ||
    text.includes("don't belong")
  ) {
    return "Impostor syndrome is loud, but it’s lying. You belong in every tech space you walk into — even while you’re still learning. 🤍";
  }

  if (text.includes("nervous") || text.includes("scared") || text.includes("anxious")) {
    return "Feeling nervous is normal, especially when you care. Take a breath, break tasks into tiny steps, and remember: you don’t have to be perfect to belong.";
  }

  if (text.includes("confident") || text.includes("confidence")) {
    return "Confidence grows when you do things scared and survive. Celebrate your small wins — finishing a lab, asking for help, or fixing one bug.";
  }

  if (text.includes("study") || text.includes("learn") || text.includes("homework")) {
    return "Try the 25–5 rule: 25 minutes focused on one topic, 5 minutes break. Repeat 2–3 times. Short focus sessions beat 3 hours of scrolling with your notes open 😅.";
  }

  if (text.includes("tired") || text.includes("overwhelmed") || text.includes("exhausted")) {
    return "You’re doing a lot. Please rest, drink water, and give your brain a moment. Rest is part of success, not a distraction from it. 🫶🏽";
  }

  return "Thank you for sharing that 💜 Your feelings are valid, and you 100% belong in tech. Tell me more, or ask me about coding, confidence, math, or impostor syndrome.";
}

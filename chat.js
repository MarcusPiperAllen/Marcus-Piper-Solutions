document.addEventListener('DOMContentLoaded', function() {
  const chatbox = document.getElementById('chatbox');
  const chatOptions = document.getElementById('chat-options');

  if (chatbox) {
    const chatButton = document.getElementById('chatbot-button');
    if (chatButton) {
      chatButton.addEventListener('click', function() {
        chatbox.style.display = chatbox.style.display === 'none' || chatbox.style.display === '' ? 'block' : 'none';
      });
    }
  }

  if (chatOptions) {
    chatOptions.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        const question = e.target.getAttribute('data-question');
        handleResponse(question);
      }
    });
  }
});

function handleResponse(question) {
  const responseEl = document.getElementById("chat-response");
  if (!responseEl) return;

  const responseMap = {
    "What's your background?": "I'm a web developer who builds clear, practical websites and tools for professionals and small businesses.",
    "Can you build my website?": "Yes! I help individuals and small teams create organized, trustworthy sites that clearly communicate who they are and what they do.",
    "What tools do you use?": "I work with HTML, CSS, JavaScript, Node.js, and use AI tools to help structure and speed up development.",
    "Where can I see your projects?": "You can check out my projects on this site — scroll down to the Projects section, or visit my GitHub (linked in the footer)."
  };

  responseEl.innerText = responseMap[question] || "Thanks for asking! Feel free to email me directly for more info.";
}

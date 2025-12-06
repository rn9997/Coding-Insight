// script.js

// Chatbot modal control
function showChatbot() {
  document.getElementById('chatbotModal').style.display = 'flex';
}
function hideChatbot() {
  document.getElementById('chatbotModal').style.display = 'none';
}

// Chatbot messages logic
const chatbotMessages = document.getElementById('chatbotMessages');
const chatInput = document.getElementById('chatInput');

document.getElementById('chatInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const msg = chatInput.value.trim();
    addMessage('User', msg);
    generateResponse(msg);
    chatInput.value = '';
  }
});

function addMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatbotMessages.appendChild(msgDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateResponse(msg) {
  // Basic AI response logic
  let reply = "Sorry, I can't understand that.";
  if (/hello|hi/i.test(msg)) reply = "Hello! How can I help you today?";
  else if (/code/i.test(msg)) reply = "You can ask me to explain code or convert languages!";
  else if (/plan|subscription/i.test(msg)) reply = "Visit the Plans page to see subscription options.";
  else if (/courses/i.test(msg)) reply = "Explore our courses on the Courses page.";
  addMessage('AI', reply);
}

// Sign-in logic (dummy)
function signin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const msgEl = document.getElementById('signinMsg');

  if (username && password) {
    msgEl.innerText = 'Signed in successfully! (dummy)';
  } else {
    msgEl.innerText = 'Please fill out all fields.';
  }
}

function signInWithFaceID() {
  alert('Face ID sign-in is not available in this demo.');
}

// Subscription
function subscribe(plan) {
  alert(`You have selected the ${plan} plan!`);
}

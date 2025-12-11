🚨 PHISHING WEBSITE DETECTION

A web-based tool that detects possible phishing URLs using pattern matching, animated scanning effects, awareness page, and auto-typing welcome message.

📁 Project Folder Structure
phishing-detection/
├── backend/
│   ├── server.js          # Express backend (optional use)
│   └── package.json       # Node.js dependencies
└── frontend/
    ├── index.html         # Home page with animated typing
    ├── awareness.html     # Awareness + safety tips
    ├── check.html         # URL scanner + risk %
    ├── about.html         # About project
    ├── style.css          # Styling + dark mode
    └── script.js          # JS (typing effect, scanner effect, risk %)

🔍 Project Overview

This project is a simple Phishing Website Detection System built using:

Frontend: HTML, CSS, JavaScript

Backend: Node.js + Express (optional, used for hosting static files)

The detector uses keyword-based phishing pattern matching to calculate:

🔥 Risk Percentage

⚠️ Phishing or Safe Classification

🚀 Animated Scanner Effect

🌙 Dark Mode Support

⌨️ Auto Typing Welcome Message

✨ Features
✅ 1. Auto-Typing Welcome Message

Home page automatically types text letter-by-letter with animation.

🌙 2. Dark Mode Toggle

User can switch between Light & Dark theme.
Theme is saved in browser using localStorage.

🔎 3. URL Phishing Detection

Checks for suspicious words like:

login, verify, update, free, bank, .ru, .tk, %, @, -

🔥 4. Risk Percentage Calculation

More patterns matched = Higher risk %.

🛰️ 5. Scanner Animation

Scanning animation before showing result.

📚 6. Awareness & Prevention Page

Shows phishing examples & safety tips.

ℹ️ 7. About Page

Details about project, purpose, and technology used.

🛠️ Technologies Used
Component	Technology
Frontend	HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Effects	CSS Animations, JS Typewriter Effect
🚀 How to Run the Project
1️⃣ Step 1 – Install Node.js

Download from: https://nodejs.org/

2️⃣ Step 2 – Open the Project Folder
cd phishing-detection/backend

3️⃣ Step 3 – Install Dependencies
npm install


This will install Express (from package.json).

4️⃣ Step 4 – Start Server
node server.js


You will see:

Server running on http://localhost:5000

5️⃣ Step 5 – Open Frontend

Open browser and go to:

http://localhost:5000

🔬 How the Detection Works

The script checks the URL against suspicious patterns:

const suspiciousPatterns = [
  "login", "verify", "update", "free", "secure",
  "account", "bank", ".ru", ".tk", "@", "%", "-"
];


Then calculates:

risk = (matchedPatterns / totalPatterns) * 100


Output:

⚠️ Phishing (High risk%)

🟢 Safe (0% risk)

🧪 Sample Test URLs
✅ Safe URLs

https://google.com

https://microsoft.com

https://amazon.in

❌ Phishing URLs

http://verify-update-login.tk

http://secure-bank.free-gifts.ru

http://paypal-account-verify.com

http://login-facebook-security-check.io

📄 Future Enhancements

☑ Machine Learning–based detector
☑ Domain age verification
☑ WHOIS lookup
☑ Real-time blacklisted URL API
☑ Browser extension version

👨‍💻 Author

Muthamil V
Phishing Detection Project Developer

📜 License

This project is free to use for learning & academic purposes.

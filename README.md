# 🎯 EntertainmentBlocker — Block Distractions, Stay Focused

**EntertainmentBlocker** is a lightweight Chrome extension designed to help you stay focused by **blocking access to popular entertainment** and OTT platforms like YouTube, Netflix, Jio Hotstar, Amazon prime etcetra .

Whether you're trying to study, work, or just take control of your screen time, EntertainmentBlocker silently runs in the background and **cancels distracting site requests** before they're even loaded.

No user interface. No trackers. Just pure productivity.

---

## ✨ Features

- 🚫 Instantly blocks requests to distracting websites.
- ⚙️ Runs silently in the background — no UI required.
- 🔌 Lightweight and efficient — no frontend, no database.
- 🧠 Ideal for students, developers, and anyone wanting fewer distractions.

---

## 🧰 Tech Stack

- **JavaScript (ES6+)**
- **Chrome Extensions API** (Manifest v3)
- **Node.js** + **Express.js**

---

## 🧠 How It Works

EntertainmentBlocker uses the `chrome.webRequest` API to intercept and cancel HTTP requests to predefined entertainment sites. The blocking happens before the browser even loads the page, keeping distractions at bay.

---

## ⚙️ Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/entertainment-blocker.git

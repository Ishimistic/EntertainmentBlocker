# 🎯 EntertainmentBlocker — Block Distractions, Stay Focused

**EntertainmentBlocker** is a no-nonsense Chrome extension that helps you reclaim your focus by **blocking access to popular OTT and entertainment platforms** like YouTube, Netflix, and Instagram — before they even load.

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

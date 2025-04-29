# 🎯 EntertainmentBlocker — Block Distractions, Stay Focused

**EntertainmentBlocker** is a lightweight Chrome extension designed to help you stay focused by **blocking access to popular entertainment** and OTT platforms like YouTube, Netflix, Jio Hotstar, Amazon prime etcetra .

Whether you're trying to study, work, or just take control of your screen time, EntertainmentBlocker silently runs in the background and **cancels distracting site requests** before they're even loaded.

No user interface. No trackers. Just pure productivity.

---

## ✨ Features

- 🚫 **Site Blocking**: Automatically blocks access to major entertainment platforms
- 📈 **Productivity Focus**: Eliminates common digital distractions
- 🛠️ **Customizable**: Option to add or remove sites from the blocklist
- 🧩 **Simple Setup**: Easy to install and works automatically in the background
- 🔐 **No Data Collection**: Your browsing data stays private
- ⚡ **Lightweight**: Minimal impact on browser performance


## 🧰 Tech Stack

- **JavaScript (ES6+)**
- **Chrome Extensions API** (Manifest v3)
- **Node.js** + **Express.js**


## 🧠 How It Works

EntertainmentBlocker uses the `chrome.webRequest` API to intercept and cancel HTTP requests to predefined entertainment sites. The blocking happens before the browser even loads the page, keeping distractions at bay.


## ⚙️ Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/entertainment-blocker.git
2. Open Chrome and go to chrome://extensions/
3. Enable Developer mode (toggle in top right).
4. Click Load unpacked and select the project folder.
5. The extension will now start blocking predefined entertainment sites.

## 📵 Blocked Websites

EntertainmentBlocker currently blocks the following entertainment platforms by default:

-  Netflix  
-  Amazon Prime Video  
-  Jio Hotstar  
-  Zee5 / Zee Cinema  
-  Crunchyroll and other anime streaming platforms  
-  Sonyliv
-  Animeland
-  Animeout
-  Animeultima

> You can customize the blocked list by editing the `blockedSites` array in `background.js`.


## 🎛 Usage

Once installed, **entertainmentBlocker** runs silently in the background and blocks requests automatically.

### Here's how to use it:

1. 🔒 Visit any of the blocked websites — the page won’t load.
2. 🧪 To test, open the browser console (in DevTools > background page) to see blocked URL logs.
3. 🔧 To disable or modify:
   - Go to `chrome://extensions/`
   - Disable or remove the extension
   - Or edit the `background.js` blocklist and reload as unpacked

> Note: There is no frontend interface — everything is handled through the background script.



## 🛠️ Customization

You can customize which websites are blocked by modifying the code directly.

### 🔧 To Add or Remove Sites:

1. Open the extension's folder.
2. Locate the `background.js` file.
3. Inside the file, you'll find an array like this:

```js
const blockedSites = [
  "*://*.netflix.com/*",
  "*://*.primevideo.com/*",
  "*://*.hotstar.com/*",
  "*://*.zee5.com/*",
  "*://*.crunchyroll.com/*",
  "*://*.animelab.com/*"
];
```
4. To block a new website, add its pattern to the array.
5. To unblock a website, simply remove its entry.
6. Save the file.
7. Reload the extension:
  - Go to chrome://extensions/
  - Click "Reload" on entertainmentBlocker




## 🔐 Privacy

Your privacy is our priority. This extension:

- ❌ Does **not** track your browsing history  
- ❌ Does **not** collect or store personal data  
- ❌ Does **not** communicate with any external servers  
- ✅ Operates entirely within your browser using Chrome's APIs  
- ✅ Only uses permissions necessary to block specific sites

> You stay in full control — no data leaves your machine.

## 🤝 Contributing
Contributions, feature requests, and suggestions are welcome!
Feel free to fork the repository and submit a pull request.

## 🙌 Support
If you found this useful, give it a ⭐ on GitHub and share it with fellow productivity geeks!


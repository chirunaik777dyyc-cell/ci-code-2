# CI Codes v3.0 Enterprise — Zero-Latency Hybrid Cloud IDE
**Founded by Chiragpala Naik MD (Founder & Managing Director)**

This repository is pre-configured to deploy out-of-the-box on **GitHub Pages**, **Render**, **Vercel**, **Netlify**, or **Google Firebase** with zero errors.

---

## What Was Upgraded in v3.0
1. **Zero-Latency In-Browser Execution (0–10ms Delay):**
   - **Python 3.11 (Pyodide WASM):** Runs CPython directly inside the user's browser with zero network lag and auto-installs packages like `numpy`.
   - **SQLite Database (SQL.js WASM):** Creates tables, inserts rows, and executes complex SQL queries in `<5ms` locally.
   - **Isolated Web Worker JavaScript/TypeScript:** Executes JS/TS in a background thread at `0ms` with a `3.5s` infinite-loop kill switch so `while(true)` never freezes the browser tab.
   - **Live HTML5/CSS3/JS Studio:** Instant DOM preview.
2. **Multi-Language Cloud + Local Hybrid Engine:**
   - Supports **C++20, Java 17, C17, Rust, Go, C#, PHP, and Ruby** via cloud cluster with an automatic offline-capable local hybrid fallback so code **never fails to run**.
3. **All Advanced Requirements Included:**
   - **Multi-File Project Explorer** (`+ New File`, switch tabs, import across files in Python).
   - **✨ AI Fix & Explain Doctor** (detects and fixes syntax issues in 1 click).
   - **🔗 Instant Shareable Code URLs** (encodes your code into a shareable `#code=...` link with zero database setup required).
   - **⏱ Contest Mode + Anti-Cheat Proctor** (countdown timer + automatic tab-switch counter).
   - **✓ Automated Test Case Judge** & Interactive Bottom REPL (`$`).

---

## How to Deploy on GitHub (2 Minutes)
1. Unzip `ci-codes-github-render-ready.zip`.
2. Create a new repository on [GitHub](https://github.com/new) named `ci-codes`.
3. Upload all files from inside the unzipped folder to your GitHub repository and commit to `main`.
4. Go to your repository **Settings -> Pages**:
   - Under **Build and deployment -> Source**, select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically deploy your site), **OR** select **Deploy from a branch** -> `main` -> `/ (root)`.
5. Your platform will be live at `https://<your-username>.github.io/ci-codes/`!

---

## How to Deploy on Render.com (2 Minutes)
Once your code is on GitHub, go to [dashboard.render.com](https://dashboard.render.com):

### Option A: Render Web Service (Uses `server.js` + `package.json`)
1. Click **New +** -> **Web Service** and connect your GitHub repository.
2. Render will automatically detect `package.json`:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. Click **Deploy Web Service**.

### Option B: Render Static Site (100% Free Forever)
1. Click **New +** -> **Static Site** and connect your GitHub repository.
2. Leave **Build Command** blank, and set **Publish Directory** to `public`.
3. Click **Create Static Site**.

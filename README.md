# Career Compass — AI Career Coach

A free, AI-powered career discovery workshop built with React and Claude AI.

## Deploy to Vercel (Free — 5 minutes)

### Step 1 — Create a GitHub account
Go to https://github.com and sign up for free if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** icon in the top right → **New repository**
2. Name it `career-compass`
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. On the new repo page, click **uploading an existing file**
2. Drag and drop ALL the files and folders from this project:
   - `index.html`
   - `package.json`
   - `vite.config.js`
   - `vercel.json`
   - `.gitignore`
   - `src/` folder (containing `App.jsx` and `main.jsx`)
   - `public/` folder (containing `compass.svg`)
3. Click **Commit changes**

### Step 4 — Deploy on Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `career-compass` repository
4. Vercel will auto-detect it as a Vite project
5. Click **Deploy**

That's it — your site will be live at a URL like `career-compass.vercel.app` in about 60 seconds.

### Custom Domain (Optional)
In your Vercel project settings → Domains → add your own domain (e.g. careercompass.io)

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Tech Stack
- React 18
- Vite
- Claude AI (claude-sonnet-4-20250514)
- Vercel (hosting)

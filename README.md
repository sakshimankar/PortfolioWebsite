# Sakshi Mankar — Portfolio Website

A modern, responsive portfolio built with **React + Vite + Tailwind CSS + Framer Motion**, ready to deploy on **Vercel for free**.

---

## 🚀 Deploy to Vercel (Free)

### Option A — Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Inside this folder, install dependencies
npm install

# 3. Deploy (follow the prompts — all defaults are fine)
vercel

# 4. For production deployment
vercel --prod
```

### Option B — GitHub + Vercel Dashboard (Recommended)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. Vercel auto-detects Vite. Click **Deploy** — done! ✅

4. Your site will be live at `https://your-project.vercel.app`

---

## 💻 Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

## 🏗️ Build

```bash
npm run build
# Output in /dist — this is what Vercel deploys
```

---

## 📄 Add Your Resume PDF

Place your resume PDF at:
```
public/Sakshi_Mankar_Resume.pdf
```

The "Download CV" button links to this file automatically.

---

## ✏️ Customization

All your personal data is in one place:

```
src/data/resume.ts
```

Edit this file to update: name, tagline, experience, skills, projects, certifications, links.

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Recharts** (skill bar chart)
- **react-simple-typewriter** (typewriter effect)
- **react-scroll** (smooth scrolling)
- **lucide-react** (icons)

## 📁 Project Structure

```
portfolio-vercel/
├── public/
│   ├── favicon.svg
│   └── Sakshi_Mankar_Resume.pdf   ← Add your PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ProjectCard.tsx
│   ├── data/
│   │   └── resume.ts              ← Edit your info here
│   ├── pages/
│   │   └── Home.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## 📬 Contact Form

The contact form opens your default email client with a pre-filled message — no backend or API key needed. This works perfectly on Vercel's free tier.

If you want a true form backend, you can add [Resend](https://resend.com) or [Formspree](https://formspree.io) — both have free tiers.
"# PortfolioWebsite" 
"# PortfolioWebsite" 
"# PortfolioWebsite" 

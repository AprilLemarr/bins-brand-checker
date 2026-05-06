# Bins Brand Checker

AI-powered brand identifier for thrift bin reselling. Instant verdicts on clothing items with price ranges and eBay comp links.

## Setup

### 1. Local Development
- No installation needed. Open `index.html` in a browser.
- The app calls Claude API directly from your browser.

### 2. Netlify Deployment

#### Step 1: Add Your API Key to Netlify
1. Go to your Netlify site settings
2. Navigate to **Build & deploy** → **Environment**
3. Click **"Edit variables"**
4. Add: `ANTHROPIC_API_KEY` = your Anthropic API key
5. Save and redeploy

#### Step 2: Connect GitHub to Netlify
1. Go to **netlify.com**
2. Click **"Add new site"** → **"Import an existing project"**
3. Select GitHub and authorize
4. Choose `AprilLemarr/bins-brand-checker`
5. Netlify auto-deploys on every GitHub push

## Features

- 📸 Photo upload (or take photo)
- 🏷️ Brand identification via AI
- 💚 Color-coded verdicts (green/blue/yellow/red)
- 💰 Price range estimates
- 🔗 eBay comp links
- 📊 Session history
- ✅ "I Bought It" tracking (Google Drive integration coming)

## Verdicts

- **GREEN (✅ GRAB IT)** — $45+ items, strong brands
- **BLUE (🔵 CHECK COMPS)** — $25-45, decide yourself
- **YELLOW (🤔 MAYBE)** — Needs more research
- **RED (❌ SKIP IT)** — Below floor, low demand, damaged

## How It Works

1. Take/upload photo of clothing item
2. AI analyzes brand, condition, style
3. Get instant verdict + price range + eBay link
4. If uncertain, AI asks ONE clarifying question
5. Mark "I Bought It" or "Save for Later"

## API Key

Get your Anthropic API key from [console.anthropic.com](https://console.anthropic.com)

Never commit `.env` with your real key. Use `.env.example` as a template.

# 🚀 Quick Deployment Reference

## One-Command Deployment

### Windows (PowerShell)
```powershell
.\deploy.ps1
```

### Mac/Linux/Git Bash
```bash
./deploy.sh
```

---

## What the Script Does

1. ✅ Checks for changes
2. ✅ Shows what files changed
3. ✅ Asks for commit message (or uses timestamp)
4. ✅ Stages all changes (`git add .`)
5. ✅ Commits changes
6. ✅ Pushes to GitHub
7. ✅ Confirms success

---

## Manual Git Commands

```bash
# Quick push
git add .
git commit -m "Your message"
git push origin main

# Check status
git status

# View history
git log --oneline -5
```

---

## Replit Sync

1. Open your Repl
2. Click **Version Control** icon (left sidebar)
3. Click **Pull**
4. Done! ✅

---

## Path Safety ✅

**All Internal Links:** Relative paths ✅
- `page2.html`, `page3.html`
- `images/filename.jpg`
- `style.css`, `toggle.js`

**All External Links:** Absolute URLs ✅
- Project URLs (Dr. Doshie Piper, Hope Heals SA, CurveLink)
- Social media (GitHub, LinkedIn)
- External resources (Google Fonts)

**Result:** Works locally and on the current Vercel deployment.

---

## Troubleshooting

**PowerShell won't run script:**
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Git push rejected:**
```bash
git pull origin main
git push origin main
```

**Replit not updating:**
- Check you're on `main` branch
- Run `git pull origin main` in Shell
- Restart Repl

---

## Live URLs

- **GitHub Pages:** https://marcuspiperallen.github.io/Marcus_Hobby/
- **GitHub Repo:** https://github.com/MarcusPiperAllen/Marcus_Hobby
- **Replit:** [Your Replit URL]

---

## Files Created

- ✅ `deploy.ps1` - Windows deployment script
- ✅ `deploy.sh` - Unix deployment script  
- ✅ `.replit` - Replit configuration
- ✅ `replit.nix` - Replit dependencies
- ✅ `README.md` - Full documentation

---

**🎯 You're all set! Deploy with one command: `.\deploy.ps1`**

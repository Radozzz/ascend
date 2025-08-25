# Ascend — MVP complet

## ✅ Ce que contient ce projet
- Next.js 14 (App Router) + TypeScript + Tailwind
- Page d'accueil **/**
- Dashboard **/dashboard** avec Skill Tree (ReactFlow)
- Endpoint **/api/ai** (fonctionne même sans clé, renvoie une démo)
- Prêt pour déploiement Vercel

## 🚀 Déploiement (Vercel)
1) Uploade **les fichiers de ce dossier à la racine de ton repo GitHub** (pas dans un sous-dossier).
2) Vercel → New Project → Import ton repo → Deploy.
3) (Optionnel) Ajoute `OPENAI_API_KEY` dans Vercel → Settings → Environment Variables, pour activer l'agent IA réel.

## 💻 Local (facultatif)
```bash
npm install
npm run dev
# http://localhost:3000
```

## 📁 Structure
- app/page.tsx → landing
- app/dashboard/page.tsx → démo + mini chat IA
- app/api/ai/route.ts → endpoint OpenAI (fallback si pas de clé)
- components/SkillTree.tsx → composant ReactFlow

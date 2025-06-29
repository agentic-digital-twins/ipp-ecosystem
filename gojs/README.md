# GoJS - Equilibrium Energy Stack

This project uses **GoJS**, **Vite**, and **Tailwind CSS** to render interactive software architecture diagrams for Equilibrium Energy.

## 📦 Stack

- Vite + React
- Tailwind CSS (with **dark mode** toggle)
- GoJS (diagramming library)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🔀 Toggle Between Diagrams

Two diagram views are available:

- **Radial Orbit View** (semantic clustering of components)
- **Layered Block View** (classic software architecture stack)

Use the UI toggle to switch between the two. A dark mode toggle is also available.

---

## 📁 Folder Structure

```
gojs/
├── public/
├── src/
│   ├── components/
│   │   ├── RadialOrbitDiagram.tsx
│   │   ├── LayeredBlockDiagram.tsx
│   │   ├── ToggleDiagramView.tsx
│   │   └── DarkModeToggle.tsx
│   ├── data/
│   │   └── equilibriumStack.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## 🧠 Equilibrium Stack Overview

- Real-time trading and forecasting UI
- AI optimization models
- Market API integrations (ERCOT, CAISO)
- FastAPI backend
- PostgreSQL and S3 data layers
- AWS EKS and CI/CD infrastructure

GoJS enables flexible node templating and relationship mapping between stack layers.

**Energy-themed icons** (⚡🔌📊💡) are used to visually differentiate stack layers and components for enhanced readability and impact.

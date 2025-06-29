# React Flow - Equilibrium Energy Stack

This project uses **React Flow**, **Vite**, and **Tailwind CSS** to display Equilibrium Energy's software stack using two visualization styles:

- **Radial Orbit Diagram** (for agentic/AI-centered architecture)
- **Layered Block Diagram** (traditional layered architecture)

## 📦 Stack

- Vite + React
- Tailwind CSS
- React Flow (interactive graph)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🔀 Toggle Between Diagrams

Use the switch at the top of the app to toggle between the Radial and Layered views.

---

## 📁 Folder Structure

```
react-flow/
├── public/
├── src/
│   ├── components/
│   │   ├── RadialOrbitDiagram.tsx
│   │   ├── LayeredBlockDiagram.tsx
│   │   └── ToggleDiagramView.tsx
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

Data visualized comes from the Equilibrium Energy power market AI stack and includes layers:

- Application
- AI/Modeling
- Orchestration
- Integration
- Backend Services
- Data
- Infrastructure

Interactivity includes node hover info, drag positioning, and dynamic layout rendering.

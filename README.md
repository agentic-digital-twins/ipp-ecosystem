# IPP Ecosystem – Software Stack Diagrams

This repository contains interactive diagramming tools to visualize software stacks and system architecture for **Equilibrium Energy** and similar Independent Power Producers (IPPs).

Built with:

- ⚡ React + Vite
- 🎨 Tailwind CSS with **dark mode**
- 🧠 React Flow & GoJS for **dual visualization engines**
- 🧩 Icons + layered/radial views for maximum clarity

---

## 📁 Projects

### `react-flow/`

- 📍 Framework: [React Flow](https://reactflow.dev/)
- 🌀 Views:
  - **Radial Orbit Diagram** – Core systems center out to UI/integration layers
  - **Layered Block Diagram** – Traditional top-down software stack
- 🌗 Dark mode & view toggles

### `gojs/`

- 📍 Framework: [GoJS](https://gojs.net/)
- 🌀 Views:
  - Same as above, built with GoJS's layout engine
- ⚡ Custom node templates with energy-themed icons

---

## 🧠 Equilibrium Energy Stack Example

All visualizations include this sample stack:

- **UI Layer**: Real-time trading dashboards (React)
- **AI Layer**: ML models (Prophet, XGBoost)
- **Orchestration**: Apache Airflow
- **Integration**: ERCOT, CAISO market APIs
- **Backend**: FastAPI services
- **Data Layer**: PostgreSQL, TimescaleDB, S3
- **Infra**: AWS EKS, Terraform, CI/CD

---

## 🚀 Quickstart

To run either subproject:

```bash
cd react-flow    # or cd gojs
npm install
npm run dev
```

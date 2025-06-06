# IPP Ecosystem - Interactive Software Stack Visualizations

https://hiring.ben.church/?utm_source=chatgpt.com

This repository includes interactive infographic visualizations of the software stack used by **Equilibrium Energy**, implemented in two technologies:

- [`react-flow/`](./react-flow) - Built with React Flow
- [`gojs/`](./gojs) - Built with GoJS

Each folder is a self-contained project that can be run independently.

---

## 🔧 Setup Instructions

Each subproject (`react-flow` and `gojs`) contains its own `README.md` and instructions to run locally using:

```bash
cd react-flow   # or gojs
npm install
npm run dev     # or npm start depending on the project
```

---

## 🧠 Use Case: Equilibrium Energy Software Stack

These diagrams represent a modern AI-driven power trading stack across layers:

### Layered Architecture
```
+------------------------------------------------------------+
|                     🎯 Application Layer                    |
|   - Real-time trading UI (React, Next.js)                 |
|   - Forecasting dashboards (Plotly, D3.js)                |
|   - Scheduling UI with drag/drop for energy assets        |
+------------------------------------------------------------+
|                  🧠 AI/Modeling Layer                      |
|   - ML Models (XGBoost, LightGBM, Prophet)                |
|   - Optimization engine (CVXPY, Pyomo, custom solvers)    |
+------------------------------------------------------------+
|                 ⚙️ Orchestration Layer                     |
|   - Apache Airflow for model pipelines                    |
|   - Dagster or Prefect (exploratory/alternative)          |
+------------------------------------------------------------+
|                  📡 Integration Layer                      |
|   - Market APIs (ERCOT, CAISO, PJM)                       |
|   - Asset telemetry ingestion (Kafka, MQTT, WebSockets)   |
+------------------------------------------------------------+
|                   📦 Backend Services                      |
|   - Python (FastAPI), gRPC, REST                          |
|   - Auth (OAuth2, JWT)                                    |
|   - EventBridge, Step Functions for orchestration         |
+------------------------------------------------------------+
|                     🗃️ Data Layer                          |
|   - PostgreSQL, TimescaleDB for time series               |
|   - S3 / Parquet for model data                           |
|   - Redis / Memcached for caching                         |
+------------------------------------------------------------+
|                     ☁️ Infrastructure                      |
|   - AWS (EKS, EC2, Fargate)                               |
|   - Terraform, Pulumi, CI/CD via GitHub Actions           |
|   - Monitoring: Prometheus, Grafana, CloudWatch           |
+------------------------------------------------------------+
```

See each implementation to explore the layers interactively.


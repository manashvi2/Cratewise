# Cratewise 📦

A modular Inventory Management System (IMS) that digitizes stock operations — replacing manual registers, Excel sheets, and scattered tracking with a centralized, real-time dashboard.

Built in 8 hours for [Hackathon Name] by Team Cratewise.

## 🚀 Live Demo
[Add your deployed link here once live]

## 🎯 Problem
Businesses manage inventory manually through registers and spreadsheets, leading to errors, lost stock visibility, and no single source of truth across warehouses. Cratewise solves this with a real-time, centralized dashboard for receipts, deliveries, transfers, and adjustments.

## ✨ Features
- **Dashboard** — live KPIs: total stock, low/out-of-stock alerts, pending receipts & deliveries, scheduled transfers
- **Product Management** — create products with SKU, category, unit of measure, initial stock
- **Receipts** — record incoming stock from suppliers, auto-updates inventory
- **Delivery Orders** — pick, pack, and validate outgoing stock
- **Internal Transfers** — move stock between warehouses/locations, fully logged
- **Stock Adjustments** — reconcile system records with physical counts
- **Multi-warehouse support** with location-based filtering
- **Move history / stock ledger** — every change logged for auditability
- **Authentication** — signup/login with OTP-based password reset

## 🛠️ Tech Stack
- **Frontend:** Next.js / React (v0-generated UI)
- **Backend:** [Node.js + Express / etc. — update this]
- **Database:** [PostgreSQL / MongoDB / etc. — update this]
- **Deployment:** [Vercel / Render / etc. — update this]

## 📸 Screenshots
[Add 2–3 screenshots of the dashboard, receipt flow, etc.]

## ⚙️ Running Locally

### Prerequisites
- Node.js installed
- [Database] running locally or a connection string

### Setup
```bash
# Clone the repo
git clone https://github.com/manashvi2/Cratewise.git
cd Cratewise

# Install dependencies
npm install
# or if using pnpm
pnpm install

# Run the development server
npm run dev
# or
pnpm dev
```

Create a `.env` file in the root with:
```
DATABASE_URL=your_connection_string
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 👥 Team
- [Name] — Frontend & UI/UX
- [Name] — Backend
- [Name] — Database & Auth
- [Name] — Integration & Deployment

## 📌 Future Improvements
- Barcode/SKU scanning
- Demand forecasting & smart reordering
- Role-based permissions (Manager vs Warehouse Staff)
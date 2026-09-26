# Cratewise 📦

A modular Inventory Management System (IMS) that digitizes stock operations — replacing manual registers, Excel sheets, and scattered tracking with a centralized, real-time dashboard.

Built in 8 hours for [ odoo X LPU ] by Team Cratewise.

🚀 Live Demo
(https://lumina-tau-six-70.vercel.app)


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
<img width="1470" height="800" alt="Screenshot 2026-09-26 at 4 44 09 PM" src="https://github.com/user-attachments/assets/2d1aef87-290c-4943-b076-95a419c63e97" /> 

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
- [Purushottam Tripathi] — Frontend & UI/UX
- [Vanshika Dhama] — Backend
- [Khushi Chawla] — Database & Auth
- [Manashvi] — Integration & Deployment

## 📌 Future Improvements
- Barcode/SKU scanning
- Demand forecasting & smart reordering
- Role-based permissions (Manager vs Warehouse Staff)

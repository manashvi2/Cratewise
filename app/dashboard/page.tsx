'use client';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-8 tracking-wider">StockSense</h2>
          <nav className="space-y-4 text-sm font-medium">
            <div className="text-blue-400 font-semibold cursor-pointer">📊 Dashboard</div>
            <div className="text-gray-300 hover:text-white cursor-pointer">📦 Products</div>
            <div className="text-gray-300 hover:text-white cursor-pointer">📥 Receipts</div>
            <div className="text-gray-300 hover:text-white cursor-pointer">📤 Delivery Orders</div>
            <div className="text-gray-300 hover:text-white cursor-pointer">🔄 Internal Transfers</div>
            <div className="text-gray-300 hover:text-white cursor-pointer">📝 Stock Adjustments</div>
            <div className="text-gray-300 hover:text-white cursor-pointer">📜 Move History</div>
          </nav>
        </div>
        <button 
          onClick={() => window.location.href = '/'}
          className="text-sm text-gray-400 hover:text-white text-left"
        >
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Inventory Dashboard</h1>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Total Products</p>
            <p className="text-2xl font-bold mt-2 text-gray-900">2</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Low Stock Items</p>
            <p className="text-2xl font-bold mt-2 text-amber-600">1</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Pending Receipts</p>
            <p className="text-2xl font-bold mt-2 text-gray-900">0</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Pending Deliveries</p>
            <p className="text-2xl font-bold mt-2 text-gray-900">0</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">Welcome to StockSense</h2>
          <p className="text-gray-600">
            Authentication is verified and working! The shell layout is ready for your team members to connect operations and product tables.
          </p>
        </div>
      </main>
    </div>
  );
}
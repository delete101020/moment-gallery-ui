import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const categories = [
  { name: "Ăn uống", emoji: "🍜", amount: 9856430 },
  { name: "Mua sắm online", emoji: "🛍️", amount: 4412380 },
  { name: "Spa, nail", emoji: "💅", amount: 4620350 },
  { name: "Cafe", emoji: "☕", amount: 1180500 },
  { name: "Grab/Be/Xanh SM", emoji: "🛵", amount: 612400 },
];

const income = [
  { name: "Lương", emoji: "💰", amount: 30000000 },
];

const months = [
  { label: "Tháng 8", active: false },
  { label: "Tháng 9", active: false },
  { label: "Tháng 10", active: false },
  { label: "Tháng 12", active: true },
  { label: "Năm mới 2026", active: false },
];

const StatsView = () => {
  return (
    <div className="px-4 py-2 animate-fade-in">
      {/* Month Selector */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {months.map((month, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              month.active
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {month.label}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="flex gap-3 mb-4">
        {/* Expenses Card */}
        <div className="flex-1 bg-card rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full border-2 border-expense flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-expense" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Tổng chi</span>
              <p className="text-lg font-bold text-expense">-20.682.060đ</p>
            </div>
          </div>
          <div className="h-px my-3" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--border)) 0, hsl(var(--border)) 4px, transparent 4px, transparent 8px)' }} />
          
          {/* Categories */}
          <div className="space-y-4">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                  {cat.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{cat.name}</p>
                  <p className="text-base font-semibold text-foreground">
                    -{cat.amount.toLocaleString('vi-VN')}đ
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Income Card */}
        <div className="flex-1 bg-card rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full border-2 border-income flex items-center justify-center">
              <ArrowDownLeft className="w-5 h-5 text-income" />
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Tổng thu</span>
              <p className="text-lg font-bold text-income">+30,000,000đ</p>
            </div>
          </div>
          <div className="h-px my-3" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--border)) 0, hsl(var(--border)) 4px, transparent 4px, transparent 8px)' }} />
          
          {/* Income Sources */}
          <div className="space-y-4">
            {income.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                  <p className="text-base font-semibold text-income">
                    +{item.amount.toLocaleString('vi-VN')}đ
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsView;

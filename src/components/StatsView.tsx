import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const categories = [
  { name: "Food & Dining", emoji: "🍜", amount: -856.43, percentage: 35 },
  { name: "Shopping", emoji: "🛍️", amount: -441.24, percentage: 18 },
  { name: "Beauty & Spa", emoji: "💅", amount: -462.04, percentage: 19 },
  { name: "Cafe & Drinks", emoji: "☕", amount: -118.05, percentage: 5 },
  { name: "Transport", emoji: "🚕", amount: -61.24, percentage: 3 },
  { name: "Entertainment", emoji: "🎮", amount: -245.00, percentage: 10 },
];

const income = [
  { name: "Salary", emoji: "💰", amount: 5000.00 },
];

const months = [
  { label: "Oct", active: false },
  { label: "Nov", active: false },
  { label: "Dec", active: true },
  { label: "2026", active: false },
];

const StatsView = () => {
  return (
    <div className="px-4 py-2 animate-fade-in">
      {/* Month Selector */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 -mx-4 px-4">
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
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full border-2 border-expense flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-expense" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Total Expense</span>
              <p className="text-lg font-bold text-expense">-$2,450.00</p>
            </div>
          </div>
          <div className="h-px bg-border/50 my-3" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--border)) 0, hsl(var(--border)) 4px, transparent 4px, transparent 8px)' }} />
          
          {/* Categories */}
          <div className="space-y-3">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-lg">
                  {cat.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">{cat.name}</p>
                  <p className="text-sm font-semibold text-expense">
                    ${Math.abs(cat.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Income Card */}
        <div className="flex-1 bg-card rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full border-2 border-income flex items-center justify-center">
              <ArrowDownLeft className="w-5 h-5 text-income" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Total Income</span>
              <p className="text-lg font-bold text-income">+$5,000.00</p>
            </div>
          </div>
          <div className="h-px bg-border/50 my-3" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--border)) 0, hsl(var(--border)) 4px, transparent 4px, transparent 8px)' }} />
          
          {/* Income Sources */}
          <div className="space-y-3">
            {income.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-lg">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">{item.name}</p>
                  <p className="text-sm font-semibold text-income">
                    +${item.amount.toFixed(2)}
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

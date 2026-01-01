import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const expenses = [
  { name: "Ăn uống", emoji: "🍜", amount: 9856430 },
  { name: "Mua sắm online", emoji: "🛍️", amount: 4412380 },
  { name: "Spa, nail", emoji: "💅", amount: 4620350 },
  { name: "Cafe", emoji: "☕", amount: 1180500 },
  { name: "Grab/Be/Xanh SM", emoji: "🛵", amount: 612400 },
];

const incomes = [{ name: "Lương", emoji: "💰", amount: 30000000 }];

const months = [
  { label: "Tháng 8", active: false },
  { label: "Tháng 9", active: false },
  { label: "Tháng 10", active: false },
  { label: "Tháng 12", active: true },
  { label: "Năm mới 2026", active: false },
];

const StatsView = () => {
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);
  const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="px-4 py-2 animate-fade-in">
      {/* Month Selector */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {months.map((month, index) => (
          <button
            key={index}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
              month.active
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {month.label}
          </button>
        ))}
      </div>

      {/* Stats Cards - Stacked vertically */}
      <div className="space-y-3">
        {/* Expenses Card */}
        <div className="bg-card rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full border border-expense flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-expense" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Tổng chi</span>
              <p className="text-base font-semibold text-expense">
                -{totalExpense.toLocaleString("vi-VN")}đ
              </p>
            </div>
          </div>

          <div
            className="h-px my-3"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(var(--border)) 0, hsl(var(--border)) 4px, transparent 4px, transparent 8px)",
            }}
          />

          <div className="space-y-3">
            {expenses.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-lg">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{item.name}</p>
                  <p className="text-sm text-foreground">
                    -{item.amount.toLocaleString("vi-VN")}đ
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Income Card */}
        <div className="bg-card rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full border border-income flex items-center justify-center">
              <ArrowDownRight className="w-4 h-4 text-income" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Tổng thu</span>
              <p className="text-base font-semibold text-income">
                +{totalIncome.toLocaleString("vi-VN")}đ
              </p>
            </div>
          </div>

          <div
            className="h-px my-3"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(var(--border)) 0, hsl(var(--border)) 4px, transparent 4px, transparent 8px)",
            }}
          />

          <div className="space-y-3">
            {incomes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-lg">
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{item.name}</p>
                  <p className="text-sm text-income">
                    +{item.amount.toLocaleString("vi-VN")}đ
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

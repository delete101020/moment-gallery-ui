import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const expenses = [
  { name: "Ăn uống", emoji: "🍲", amount: 9856430 },
  { name: "Mua sắm online", emoji: "🛍️", amount: 4412380 },
  { name: "Spa, nail", emoji: "💅", amount: 4620350 },
  { name: "Cafe", emoji: "☕", amount: 1180500 },
  { name: "Grab/Be/Xanh SM", emoji: "🛵", amount: 612400 },
];

const incomes = [{ name: "Lương", emoji: "💰", amount: 30000000 }];

const months = [
  { label: "Tháng", num: "8", active: false },
  { label: "Tháng", num: "9", active: false },
  { label: "Tháng", num: "10", active: false },
  { label: "Tháng", num: "12", active: false },
  { label: "Tháng", num: "12", active: true },
  { label: "Năm mới", num: "2026", active: false },
];

const StatsView = () => {
  return (
    <div className="px-4 py-2 animate-fade-in">
      {/* Month Selector */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto overflow-y-hidden pb-2 -mx-4 px-4 scrollbar-hide">
        {months.map((month, index) => (
          <button
            key={index}
            className={`flex flex-col items-center px-4 py-2 rounded-xl text-center whitespace-nowrap transition-all min-w-[70px] ${
              month.active
                ? "bg-[#4DD4AC] text-black"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            <span className="text-xs">{month.label}</span>
            <span className="text-lg font-semibold">{month.num}</span>
          </button>
        ))}
      </div>

      {/* Stats Cards - Side by side */}
      <div className="flex gap-3">
        {/* Expenses Card */}
        <div className="flex-1 bg-card rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full border-2 border-expense flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-expense" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Tổng chi</span>
              <p className="text-sm font-semibold text-foreground">
                -20.682.060đ
              </p>
            </div>
          </div>

          <div
            className="h-px my-3"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(var(--muted-foreground) / 0.3) 0, hsl(var(--muted-foreground) / 0.3) 4px, transparent 4px, transparent 8px)",
            }}
          />

          <div className="space-y-4">
            {expenses.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">
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
        <div className="flex-1 bg-card rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full border-2 border-income flex items-center justify-center">
              <ArrowDownRight className="w-5 h-5 text-income" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Tổng thu</span>
              <p className="text-sm font-semibold text-income">
                +30,000,000đ
              </p>
            </div>
          </div>

          <div
            className="h-px my-3"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(var(--muted-foreground) / 0.3) 0, hsl(var(--muted-foreground) / 0.3) 4px, transparent 4px, transparent 8px)",
            }}
          />

          <div className="space-y-4">
            {incomes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">
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

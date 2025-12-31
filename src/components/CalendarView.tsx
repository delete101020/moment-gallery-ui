import { Plus } from "lucide-react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

// Sample expense data with emojis representing categories
const expenseData: Record<number, { emoji: string; category: string }> = {
  1: { emoji: "🍜", category: "food" },
  2: { emoji: "☕", category: "cafe" },
  3: { emoji: "🛒", category: "shopping" },
  4: { emoji: "🍔", category: "food" },
  5: { emoji: "🎮", category: "entertainment" },
  6: { emoji: "🍕", category: "food" },
  8: { emoji: "📱", category: "shopping" },
  9: { emoji: "🍣", category: "food" },
  10: { emoji: "🚕", category: "transport" },
  11: { emoji: "🍝", category: "food" },
  12: { emoji: "💅", category: "beauty" },
  13: { emoji: "🥗", category: "food" },
  14: { emoji: "🎬", category: "entertainment" },
  15: { emoji: "☕", category: "cafe" },
  16: { emoji: "🍲", category: "food" },
  17: { emoji: "🛍️", category: "shopping" },
  18: { emoji: "🍱", category: "food" },
  19: { emoji: "📄", category: "bills" },
  20: { emoji: "🍛", category: "food" },
  21: { emoji: "🧁", category: "food" },
  22: { emoji: "🥤", category: "cafe" },
  23: { emoji: "🍜", category: "food" },
  24: { emoji: "🛒", category: "shopping" },
  25: { emoji: "🍔", category: "food" },
  26: { emoji: "☕", category: "cafe" },
  27: { emoji: "📱", category: "shopping" },
  28: { emoji: "🍕", category: "food" },
  29: { emoji: "🥗", category: "food" },
};

const CalendarView = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const currentDay = 29;
  const totalDays = 31;
  const startOffset = 2; // Month starts on Wednesday

  // Generate calendar cells
  const calendarCells = [];
  
  // Add empty cells for offset
  for (let i = 0; i < startOffset; i++) {
    calendarCells.push({ day: null, isEmpty: true });
  }
  
  // Add day cells
  for (let day = 1; day <= totalDays; day++) {
    calendarCells.push({ day, isEmpty: false });
  }

  return (
    <div className="px-4 py-2 animate-fade-in">
      {/* Month Summary Card */}
      <div className="bg-card rounded-3xl p-5 mb-4">
        <h2 className="text-center text-lg font-semibold mb-4 text-foreground">
          December 2025
        </h2>
        
        {/* Expense/Income Summary */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-background/50 rounded-2xl p-4 border border-expense/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full border-2 border-expense flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-expense" />
              </div>
              <span className="text-expense text-sm font-medium">Expense</span>
            </div>
            <p className="text-center text-xl font-bold text-foreground">
              -$2,450.00
            </p>
          </div>
          
          <div className="flex-1 bg-background/50 rounded-2xl p-4 border border-income/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full border-2 border-income flex items-center justify-center">
                <ArrowDownLeft className="w-4 h-4 text-income" />
              </div>
              <span className="text-income text-sm font-medium">Income</span>
            </div>
            <p className="text-center text-xl font-bold text-foreground">
              +$5,000.00
            </p>
          </div>
        </div>
        
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map((day, index) => (
            <div
              key={index}
              className="text-center text-xs text-muted-foreground font-medium py-1"
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarCells.map((cell, index) => {
            if (cell.isEmpty) {
              return <div key={index} className="aspect-square" />;
            }
            
            const expense = cell.day ? expenseData[cell.day] : null;
            const isToday = cell.day === currentDay;
            const isFuture = cell.day && cell.day > currentDay;
            
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-0.5"
              >
                <div
                  className={`aspect-square w-full rounded-xl flex items-center justify-center text-lg transition-all duration-200 ${
                    expense
                      ? "bg-secondary hover:bg-secondary/80 cursor-pointer"
                      : isFuture
                      ? "bg-muted/30"
                      : "bg-secondary/50 hover:bg-secondary/70 cursor-pointer"
                  }`}
                >
                  {expense ? (
                    <span className="text-xl">{expense.emoji}</span>
                  ) : !isFuture ? (
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  ) : null}
                </div>
                <span
                  className={`text-xs font-medium ${
                    isToday
                      ? "text-primary"
                      : isFuture
                      ? "text-muted-foreground/50"
                      : "text-muted-foreground"
                  }`}
                >
                  {cell.day}
                  {isToday && (
                    <span className="block w-1 h-1 rounded-full bg-primary mx-auto mt-0.5" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;

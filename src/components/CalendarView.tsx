import { Plus } from "lucide-react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

import expense1 from "@/assets/expense-1.jpg";
import expense2 from "@/assets/expense-2.jpg";
import expense3 from "@/assets/expense-3.jpg";
import expense4 from "@/assets/expense-4.jpg";
import expense5 from "@/assets/expense-5.jpg";
import expense6 from "@/assets/expense-6.jpg";
import expense7 from "@/assets/expense-7.jpg";
import expense8 from "@/assets/expense-8.jpg";
import expense9 from "@/assets/expense-9.jpg";

// Sample expense data with images
const expenseData: Record<number, { image: string; category: string }> = {
  3: { image: expense1, category: "food" },
  4: { image: expense2, category: "cafe" },
  5: { image: expense3, category: "shopping" },
  6: { image: expense4, category: "food" },
  8: { image: expense5, category: "food" },
  9: { image: expense6, category: "food" },
  10: { image: expense7, category: "beauty" },
  11: { image: expense8, category: "shopping" },
  12: { image: expense9, category: "food" },
  13: { image: expense1, category: "food" },
  14: { image: expense2, category: "cafe" },
  15: { image: expense3, category: "shopping" },
  16: { image: expense4, category: "food" },
  17: { image: expense5, category: "food" },
  18: { image: expense6, category: "food" },
  19: { image: expense8, category: "shopping" },
  20: { image: expense1, category: "food" },
  21: { image: expense7, category: "beauty" },
  22: { image: expense2, category: "cafe" },
  23: { image: expense4, category: "food" },
  24: { image: expense5, category: "food" },
  25: { image: expense9, category: "food" },
  26: { image: expense2, category: "cafe" },
  27: { image: expense8, category: "shopping" },
  28: { image: expense1, category: "food" },
  29: { image: expense6, category: "food" },
};

const CalendarView = () => {
  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const currentDay = 29;
  const totalDays = 31;
  const startOffset = 0; // Month starts on Monday

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
          Tháng 12, 2025
        </h2>
        
        {/* Expense/Income Summary - Matching sample exactly */}
        <div className="flex gap-3 mb-6">
          {/* Expense Card */}
          <div className="flex-1 bg-secondary rounded-2xl p-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ArrowUpRight className="w-4 h-4 text-expense" />
              <span className="text-expense text-sm font-medium border border-expense rounded-full px-3 py-0.5">
                Chi
              </span>
            </div>
            <p className="text-center text-xl font-bold text-foreground">
              -20.682.060đ
            </p>
          </div>
          
          {/* Income Card */}
          <div className="flex-1 bg-secondary rounded-2xl p-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ArrowDownLeft className="w-4 h-4 text-income" />
              <span className="text-income text-sm font-medium border border-income rounded-full px-3 py-0.5">
                Thu
              </span>
            </div>
            <p className="text-center text-xl font-bold text-foreground">
              +30,000,000đ
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
        <div className="grid grid-cols-7 gap-1.5">
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
                  className={`aspect-square w-full rounded-xl overflow-hidden flex items-center justify-center transition-all duration-200 ${
                    expense
                      ? "cursor-pointer hover:scale-105"
                      : isFuture
                      ? "bg-muted/30"
                      : "bg-secondary hover:bg-secondary/80 cursor-pointer"
                  }`}
                >
                  {expense ? (
                    <img 
                      src={expense.image} 
                      alt="expense" 
                      className="w-full h-full object-cover"
                    />
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

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

// Sample calendar thumbnails (matching the sample: some days have 1 photo, some have 2)
const dayPhotos: Record<number, string[]> = {
  3: [expense1],
  4: [expense2],
  5: [expense8],
  6: [expense4],
  8: [expense3],
  9: [expense5, expense6],
  10: [expense7],
  11: [expense8, expense2],
  12: [expense9],
  13: [expense1],
  14: [expense6],
  15: [expense4],
  16: [expense3],
  17: [expense5],
  18: [expense1],
  19: [expense2],
  20: [expense5],
  21: [expense7],
  22: [expense9],
  23: [expense1, expense6],
  24: [expense4],
  25: [expense5],
  26: [expense2],
  27: [expense8],
  28: [expense1],
};

const CalendarView = () => {
  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const currentDay = 29;
  const totalDays = 31;
  const startOffset = 2; // Tháng 12/2025 bắt đầu từ T4 (theo sample)
  const plusDays = new Set<number>([1, 2, 7]);

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
        <h2 className="text-center text-lg font-medium mb-4 text-foreground">
          Tháng 12, 2025
        </h2>

        {/* Expense/Income Summary (pills include arrow + label, like sample) */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-secondary rounded-2xl p-4">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-expense px-3 py-1 text-sm font-medium text-expense">
                <ArrowUpRight className="h-4 w-4" />
                Chi
              </span>
            </div>
            <p className="text-center text-xl font-semibold text-foreground">
              -20.682.060đ
            </p>
          </div>

          <div className="flex-1 bg-secondary rounded-2xl p-4">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-income px-3 py-1 text-sm font-medium text-income">
                <ArrowDownLeft className="h-4 w-4" />
                Thu
              </span>
            </div>
            <p className="text-center text-xl font-semibold text-foreground">
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
            
            const photos = cell.day ? dayPhotos[cell.day] : undefined;
            const isToday = cell.day === currentDay;
            const isFuture = cell.day && cell.day > currentDay;

            return (
              <div key={index} className="flex flex-col items-center gap-1">
                <div className="aspect-square w-full">
                  {photos?.length ? (
                    photos.length === 1 ? (
                      <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-foreground/15 bg-secondary">
                        <img
                          src={photos[0]}
                          alt={`Chi tiêu ngày ${cell.day}`}
                          className={`w-full h-full object-cover scale-[1.2] ${
                            (cell.day ?? 0) % 2 ? "rotate-[-8deg]" : "rotate-[8deg]"
                          }`}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <div className="absolute left-0 top-1 w-[78%] h-[78%] rounded-full overflow-hidden ring-2 ring-foreground/15 bg-secondary rotate-[-10deg]">
                          <img
                            src={photos[0]}
                            alt={`Chi tiêu ngày ${cell.day} (1)`}
                            className="w-full h-full object-cover scale-[1.25]"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute right-0 bottom-1 w-[78%] h-[78%] rounded-full overflow-hidden ring-2 ring-foreground/15 bg-secondary rotate-[10deg]">
                          <img
                            src={photos[1]}
                            alt={`Chi tiêu ngày ${cell.day} (2)`}
                            className="w-full h-full object-cover scale-[1.25]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )
                  ) : isFuture ? (
                    <div className="w-full h-full rounded-full bg-muted/30" />
                  ) : plusDays.has(cell.day ?? -1) ? (
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full bg-secondary/50" />
                  )}
                </div>

                <span
                  className={`text-xs font-normal ${
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

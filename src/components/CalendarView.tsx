import { Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";

import expense1 from "@/assets/expense-1.jpg";
import expense2 from "@/assets/expense-2.jpg";
import expense3 from "@/assets/expense-3.jpg";
import expense4 from "@/assets/expense-4.jpg";
import expense5 from "@/assets/expense-5.jpg";
import expense6 from "@/assets/expense-6.jpg";
import expense7 from "@/assets/expense-7.jpg";
import expense8 from "@/assets/expense-8.jpg";
import expense9 from "@/assets/expense-9.jpg";

// Sample calendar: ngày có 1 ảnh, 2 ảnh, dấu +, hoặc trống
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
  const startOffset = 2; // Tháng 12/2025 bắt đầu từ T4
  const plusDays = new Set<number>([1, 2, 7, 29, 30, 31]);

  // Generate calendar cells
  const calendarCells = [];
  
  for (let i = 0; i < startOffset; i++) {
    calendarCells.push({ day: null, isEmpty: true });
  }
  
  for (let day = 1; day <= totalDays; day++) {
    calendarCells.push({ day, isEmpty: false });
  }

  return (
    <div className="px-4 py-2 animate-fade-in">
      {/* Month Summary Card */}
      <div className="bg-card rounded-3xl p-5 mb-4">
        <h2 className="text-center text-base font-medium mb-4 text-foreground">
          Tháng 12, 2025
        </h2>

        {/* Expense/Income Summary */}
        <div className="flex gap-3 mb-5">
          <div className="flex-1 bg-secondary rounded-2xl p-4">
            <div className="flex justify-center mb-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-expense px-3 py-1 text-sm text-expense">
                <ArrowUpRight className="h-3.5 w-3.5" />
                Chi
              </span>
            </div>
            <p className="text-center text-lg font-semibold text-foreground">
              -20.682.060đ
            </p>
          </div>

          <div className="flex-1 bg-secondary rounded-2xl p-4">
          <div className="flex justify-center mb-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-income px-3 py-1 text-sm text-income">
                <ArrowDownRight className="h-3.5 w-3.5" />
                Thu
              </span>
            </div>
            <p className="text-center text-lg font-semibold text-foreground">
              +30,000,000đ
            </p>
          </div>
        </div>
        
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-1.5">
          {days.map((day, index) => (
            <div
              key={index}
              className="text-center text-xs text-muted-foreground py-1"
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-x-1 gap-y-1">
          {calendarCells.map((cell, index) => {
            if (cell.isEmpty) {
              return <div key={index} className="aspect-square" />;
            }
            
            const photos = cell.day ? dayPhotos[cell.day] : undefined;
            const isToday = cell.day === currentDay;
            const isFuture = cell.day && cell.day > currentDay;
            const showPlus = plusDays.has(cell.day ?? -1);

            return (
              <div key={index} className="flex flex-col items-center">
                <div className="aspect-square w-full mb-0.5">
                  {photos?.length ? (
                    photos.length === 1 ? (
                      // Single photo - rounded rectangle with white border (less rounded like sample)
                      <div className="w-full h-full rounded-lg overflow-hidden ring-2 ring-white bg-secondary">
                        <img
                          src={photos[0]}
                          alt=""
                          className="w-full h-full object-cover scale-[1.12]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      // Two photos - smaller tiles, rotated ±45°; centered overlap like the sample
                      <div className="relative w-full h-full isolate">
                        <div
                          className="absolute left-1/2 top-1/2 w-[62%] h-[62%] rounded-md overflow-hidden ring-2 ring-white bg-secondary z-10 origin-center transform-gpu"
                          style={{ transform: "translate(-84%, -84%) rotate(-45deg)" }}
                        >
                          <img
                            src={photos[0]}
                            alt=""
                            className="w-full h-full object-cover scale-[1.35]"
                            loading="lazy"
                          />
                        </div>
                        <div
                          className="absolute left-1/2 top-1/2 w-[62%] h-[62%] rounded-md overflow-hidden ring-2 ring-white bg-secondary origin-center transform-gpu"
                          style={{ transform: "translate(-16%, -16%) rotate(45deg)" }}
                        >
                          <img
                            src={photos[1]}
                            alt=""
                            className="w-full h-full object-cover scale-[1.35]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )
                  ) : showPlus ? (
                    // Plus icon for days without photos
                    <div className="w-full h-full rounded-lg bg-secondary/60 flex items-center justify-center">
                      <Plus className="w-3.5 h-3.5 text-muted-foreground/70" />
                    </div>
                  ) : isFuture ? (
                    // Future days - lighter
                    <div className="w-full h-full rounded-lg bg-muted/20" />
                  ) : (
                    // Past days without data
                    <div className="w-full h-full rounded-lg bg-secondary/40" />
                  )}
                </div>

                <span
                  className={`text-[11px] leading-tight ${
                    isToday
                      ? "text-primary font-medium"
                      : isFuture
                      ? "text-muted-foreground/40"
                      : "text-muted-foreground/70"
                  }`}
                >
                  {cell.day}
                </span>
                {isToday && (
                  <span className="w-1 h-1 rounded-full bg-primary mt-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;

import { Image, Calendar, BarChart3 } from "lucide-react";

interface TabNavProps {
  activeTab: "photos" | "calendar" | "stats";
  onTabChange: (tab: "photos" | "calendar" | "stats") => void;
}

const TabNav = ({ activeTab, onTabChange }: TabNavProps) => {
  const tabs = [
    { id: "photos" as const, label: "Ảnh", icon: Image },
    { id: "calendar" as const, label: "Lịch", icon: Calendar },
    { id: "stats" as const, label: "Thống kê", icon: BarChart3 },
  ];

  return (
    <div className="flex items-center justify-center px-4 py-2">
      <div className="inline-flex items-center bg-secondary/50 rounded-full p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNav;

import { Home, Wallet, Settings, Camera } from "lucide-react";

interface BottomNavProps {
  activeNav: "home" | "wallet" | "settings";
  onNavChange: (nav: "home" | "wallet" | "settings") => void;
}

const BottomNav = ({ activeNav, onNavChange }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border/30 pb-safe">
      <div className="max-w-md mx-auto px-4 py-2">
        {/* Main Action Button */}
        <button className="w-full bg-secondary hover:bg-secondary/80 rounded-full py-4 px-6 flex items-center justify-center gap-3 transition-all mb-2">
          <Camera className="w-5 h-5 text-foreground" />
          <span className="font-medium text-foreground">Home</span>
        </button>
        
        {/* Bottom Icons */}
        <div className="flex items-center justify-around py-1">
          {[
            { id: "home" as const, icon: Home, label: "Home" },
            { id: "wallet" as const, icon: Wallet, label: "Wallet" },
            { id: "settings" as const, icon: Settings, label: "Settings" },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavChange(item.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

import { ChevronDown, ArrowLeft, MoreHorizontal } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
        <ArrowLeft className="w-5 h-5 text-foreground" />
      </button>
      
      <div className="flex flex-col items-center">
        <span className="text-sm text-muted-foreground">Moments</span>
        <button className="flex items-center gap-1.5 mt-0.5">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/60 to-accent overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-teal-500" />
          </div>
          <span className="text-foreground font-medium">Yours</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      
      <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
        <MoreHorizontal className="w-5 h-5 text-foreground" />
      </button>
    </header>
  );
};

export default Header;

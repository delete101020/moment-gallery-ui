import { Camera } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 max-w-md mx-auto bg-transparent">
      <button className="w-full flex items-center justify-center gap-2.5 rounded-full py-4 bg-transparent hover:bg-transparent active:bg-transparent border border-border/50 appearance-none shadow-none focus:outline-none focus-visible:ring-0">
        <Camera className="w-[22px] h-[22px] text-foreground" />
        <span className="text-[22px] font-semibold tracking-tight text-foreground">
          Trang chủ
        </span>
      </button>
    </div>
  );
};

export default BottomBar;

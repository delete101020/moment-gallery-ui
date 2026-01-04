import { Camera } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="w-full max-w-md mx-auto px-4 pb-8 pt-3 bg-transparent">
      <button className="w-full flex items-center justify-center gap-3 rounded-full py-[18px] bg-transparent hover:bg-transparent active:bg-transparent border border-foreground/20 appearance-none shadow-none focus:outline-none focus-visible:ring-0">
        <Camera className="w-[22px] h-[22px] text-foreground" />
        <span className="text-[24px] font-semibold tracking-tight text-foreground leading-none">
          Trang chủ
        </span>
      </button>
    </div>
  );
};

export default BottomBar;


import { Camera } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 bg-background max-w-md mx-auto">
      <button className="w-full flex items-center justify-center gap-2.5 bg-[#2a2a2e] border border-[#3a3a3e] rounded-full py-3.5 text-foreground/90">
        <Camera className="w-5 h-5" />
        <span className="text-[15px] font-medium">Trang chủ</span>
      </button>
    </div>
  );
};

export default BottomBar;

import { Camera } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-background max-w-md mx-auto">
      <button className="w-full flex items-center justify-center gap-2 bg-secondary rounded-full py-4 text-foreground">
        <Camera className="w-5 h-5" />
        <span className="text-base font-medium">Trang chủ</span>
      </button>
    </div>
  );
};

export default BottomBar;

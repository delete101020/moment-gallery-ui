import { Camera } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 max-w-md mx-auto">
      <button className="w-full flex items-center justify-center gap-2.5 bg-[#1c1c1e] border border-[#38383a] rounded-full py-3.5">
        <Camera className="w-[18px] h-[18px] text-[#8e8e93]" />
        <span className="text-[15px] text-[#8e8e93]">Trang chủ</span>
      </button>
    </div>
  );
};

export default BottomBar;

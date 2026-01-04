import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import TabNav from "@/components/TabNav";
import CalendarView from "@/components/CalendarView";
import StatsView from "@/components/StatsView";
import PhotosView from "@/components/PhotosView";
import BottomBar from "@/components/BottomBar";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "calendar" | "stats">("calendar");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const MIN_SCROLL_PX = 140;

    const recompute = () => {
      const overflow = el.scrollHeight - el.clientHeight;
      const scrollable = overflow > MIN_SCROLL_PX;
      if (!scrollable) {
        setShowBottomBar(false);
        return;
      }
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
      const hasUserScrolled = el.scrollTop > 12;
      setShowBottomBar(atBottom && hasUserScrolled);
    };

    // Recompute after layout settles
    const raf = requestAnimationFrame(recompute);

    const onScroll = () => recompute();
    el.addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);
    window.addEventListener("resize", recompute);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", recompute);
    };
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Status Bar Spacer */}
      <div className="h-12" />

      {/* Header */}
      <Header />

      {/* Tab Navigation */}
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content Area (scrolls) */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {activeTab === "photos" && <PhotosView />}
        {activeTab === "calendar" && <CalendarView />}
        {activeTab === "stats" && <StatsView />}

        {showBottomBar && <BottomBar />}
      </div>
    </div>
  );
};

export default Index;


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
  const bottomSentinelRef = useRef<HTMLDivElement | null>(null);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const root = scrollRef.current;
    const target = bottomSentinelRef.current;
    if (!root || !target) return;

    // Must match scroll container padding-bottom (pb-28 = 7rem = 112px)
    const BOTTOM_INSET_PX = 112;

    const observer = new IntersectionObserver(
      ([entry]) => setShowBottomBar(entry.isIntersecting),
      {
        root,
        threshold: 0.01,
        // Treat "bottom reached" as the moment the user gets to the end of content,
        // not when they scroll into the bottom padding used to make room for the bar.
        rootMargin: `0px 0px ${BOTTOM_INSET_PX}px 0px`,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
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
      <div ref={scrollRef} className="flex-1 overflow-y-auto pb-28">
        {activeTab === "photos" && <PhotosView />}
        {activeTab === "calendar" && <CalendarView />}
        {activeTab === "stats" && <StatsView />}
        <div ref={bottomSentinelRef} className="h-px" aria-hidden="true" />
      </div>

      {showBottomBar && (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <BottomBar />
        </div>
      )}
    </div>
  );
};

export default Index;


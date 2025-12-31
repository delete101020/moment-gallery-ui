import { useState } from "react";
import Header from "@/components/Header";
import TabNav from "@/components/TabNav";
import CalendarView from "@/components/CalendarView";
import StatsView from "@/components/StatsView";
import PhotosView from "@/components/PhotosView";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "calendar" | "stats">("calendar");
  const [activeNav, setActiveNav] = useState<"home" | "wallet" | "settings">("home");

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Status Bar Spacer */}
      <div className="h-12" />
      
      {/* Header */}
      <Header />
      
      {/* Tab Navigation */}
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-40">
        {activeTab === "photos" && <PhotosView />}
        {activeTab === "calendar" && <CalendarView />}
        {activeTab === "stats" && <StatsView />}
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav activeNav={activeNav} onNavChange={setActiveNav} />
    </div>
  );
};

export default Index;

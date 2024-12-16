'use client';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, Share2 } from "lucide-react";
import StrategyGenerator from "./StrategyGenerator";
import MusicLabelDashboard from "./MusicLabelDashboard";

const defaultAudioFeatures = {
  tempo: 0,
  key: '',
  scale: '',
  mood: '',
  energy: 0,
  danceability: 0
};

export default function TabsContainer() {
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  return (
    <Tabs defaultValue="strategy" className="w-full">
      <TabsList className="grid grid-cols-2 w-full max-w-2xl mx-auto mb-8 bg-gray-800/40 backdrop-blur-sm">
        <TabsTrigger 
          value="strategy" 
          className="flex items-center gap-2 px-8 py-4 rounded-lg data-[state=active]:bg-blue-600/90 data-[state=active]:text-white transition-all duration-200"
        >
          <BarChart2 className="w-5 h-5" />
          <span>Strategy</span>
        </TabsTrigger>
        <TabsTrigger 
          value="distribution" 
          className="flex items-center gap-2 px-8 py-4 rounded-lg data-[state=active]:bg-blue-600/90 data-[state=active]:text-white transition-all duration-200"
        >
          <Share2 className="w-5 h-5" />
          <span>Distribution</span>
        </TabsTrigger>
      </TabsList>

      <AnimatePresence mode="wait">
        <TabsContent value="strategy">
          <motion.div {...motionProps} style={{
            backgroundColor: "rgba(31, 41, 55, 0.4)",
            backdropFilter: "blur(4px)",
            borderRadius: "0.75rem",
            padding: "2rem",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            border: "1px solid rgba(55, 65, 81, 0.5)"
          }}>
            <StrategyGenerator audioFeatures={defaultAudioFeatures} />
          </motion.div>
        </TabsContent>

        <TabsContent value="distribution">
          <motion.div {...motionProps} style={{
            backgroundColor: "rgba(31, 41, 55, 0.4)", 
            backdropFilter: "blur(4px)",
            borderRadius: "0.75rem",
            padding: "2rem",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            border: "1px solid rgba(55, 65, 81, 0.5)"
          }}>
            <MusicLabelDashboard />
          </motion.div>
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
}
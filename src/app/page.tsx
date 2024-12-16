import TabsContainer from "@/components/TabsContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Music Industry AI Suite
        </h1>
        <TabsContainer />
      </div>
    </main>
  );
} 
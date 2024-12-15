import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface StrategyDisplayProps {
  strategy: string;
}

const StrategyDisplay: React.FC<StrategyDisplayProps> = ({ strategy }) => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([strategy], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "distribution-strategy.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/80 backdrop-blur-sm shadow-xl rounded-[25px] p-8 sticky top-6 max-h-[calc(100vh-4rem)] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-blue-600">Distribution Strategy</h2>
        <motion.button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download
        </motion.button>
      </div>

      <div className="prose prose-blue max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          className="prose prose-blue max-w-none prose-headings:text-blue-600 prose-h1:text-3xl prose-h2:text-2xl prose-p:text-gray-600 prose-strong:text-blue-500"
          components={{
            h1: ({node, ...props}) => (
              <h1 className="text-3xl font-bold mb-6 text-blue-600 border-b pb-2" {...props} />
            ),
            h2: ({node, ...props}) => (
              <h2 className="text-2xl font-semibold mb-4 text-blue-500 mt-8" {...props} />
            ),
            ul: ({node, ...props}) => (
              <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
            ),
            li: ({node, ...props}) => (
              <li className="text-gray-600 leading-relaxed" {...props} />
            ),
            p: ({node, ...props}) => (
              <p className="mb-4 text-gray-600 leading-relaxed" {...props} />
            ),
            strong: ({node, ...props}) => (
              <strong className="font-semibold text-blue-500" {...props} />
            )
          }}
        >
          {strategy}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default StrategyDisplay; 
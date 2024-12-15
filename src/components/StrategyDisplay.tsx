import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface StrategyDisplayProps {
  strategy: string;
  isStreaming: boolean;
}

const StrategyDisplay: React.FC<StrategyDisplayProps> = ({ strategy, isStreaming }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && isStreaming) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [strategy, isStreaming]);

  const formatStrategy = (text: string): string => {
    const lines = text.split('data: ');
    const content = lines
      .map(line => {
        try {
          const parsed = JSON.parse(line);
          return parsed.content;
        } catch {
          return '';
        }
      })
      .join('');

    return content;
  };

  const handleDownload = () => {
    const formattedText = formatStrategy(strategy)
      .replace(/#{1,6} /g, '')
      .replace(/\*\*/g, '')
      .replace(/- /g, '• ')
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .join('\n\n');

    const blob = new Blob([formattedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'distribution-strategy.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm shadow-xl rounded-[25px] p-8"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Generated Strategy {isStreaming && <span className="text-blue-600 animate-pulse">•</span>}
        </h2>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={isStreaming}
        >
          <Download size={16} />
          Download
        </button>
      </div>
      <div className="prose prose-slate max-w-none" ref={contentRef}>
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({...props}) => <h1 className="text-2xl font-bold my-4 text-gray-900" {...props} />,
            h2: ({...props}) => <h2 className="text-xl font-semibold my-3 text-gray-800" {...props} />,
            h3: ({...props}) => <h3 className="text-lg font-medium my-2 text-gray-800" {...props} />,
            p: ({...props}) => <p className="my-2 text-gray-700 leading-relaxed" {...props} />,
            ul: ({...props}) => <ul className="list-disc ml-4 my-2 space-y-1" {...props} />,
            ol: ({...props}) => <ol className="list-decimal ml-4 my-2 space-y-1" {...props} />,
            li: ({...props}) => <li className="my-1 text-gray-700" {...props} />,
            strong: ({...props}) => <strong className="font-semibold text-gray-900" {...props} />,
            em: ({...props}) => <em className="italic text-gray-800" {...props} />
          }}
        >
          {formatStrategy(strategy)}
        </ReactMarkdown>
        {isStreaming && (
          <div className="h-4 w-2 bg-blue-600 animate-pulse rounded-full ml-1 inline-block" />
        )}
      </div>
    </motion.div>
  );
};

export default StrategyDisplay;

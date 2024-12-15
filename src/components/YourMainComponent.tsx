import React from 'react';
import { ChatBubble } from '@copilotkit/react-ui';
import { motion } from 'framer-motion';

export function YourMainComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ChatBubble
        messages={[
          {
            role: 'system',
            content: 'You are assisting the user as best as you can.',
          },
        ]}
        className="fixed bottom-4 right-4"
      />
    </motion.div>
  );
}

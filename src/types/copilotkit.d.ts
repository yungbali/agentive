import type { ReactNode } from 'react';

declare module '@copilotkit/react-core' {
  interface CopilotKitProps {
    children: ReactNode;
    publicApiKey: string;
  }

  interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
  }
}

declare module '@copilotkit/react-textarea' {
  interface TextareaProps {
    children: ReactNode;
    value?: string;
    onChange?: (value: string) => void;
  }
}

declare module '@copilotkit/react-ui' {
  interface ChatProps {
    messages: Message[];
    onSubmit?: (message: string) => void;
  }
}

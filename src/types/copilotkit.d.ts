declare module "@copilotkit/react-core" {
  export const CopilotKit: any;
  export const useCopilotContext: () => any;
}

declare module "@copilotkit/react-textarea" {
  export const CopilotTextarea: any;
}

declare module "@copilotkit/react-ui" {
  interface Message {
    role: "system" | "user" | "assistant";
    content: string;
  }

  interface ChatBubbleProps {
    messages: Message[];
    className?: string;
    onError?: (error: Error) => void;
  }
  
  export const ChatBubble: React.FC<ChatBubbleProps>;
} 
export {};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      params?: Record<string, any>
    ) => void;
  }
}

// src/types/error.ts
export interface ErrorDetails {
  code: number;
  title: string;
  message: string;
  actionText?: string;
  actionPath?: string;
}

export const errorTypes: Record<string, ErrorDetails> = {
  "404": {
    code: 404,
    title: "Page Not Found",
    message: "The page you are looking for does not exist.",
    actionText: "Go Back Home",
    actionPath: "/",
  },
  "500": {
    code: 500,
    title: "Server Error",
    message: "Something went wrong on our end. Please try again later.",
    actionText: "Refresh Page",
    actionPath: "#",
  },
};

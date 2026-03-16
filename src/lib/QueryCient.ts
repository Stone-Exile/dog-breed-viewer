import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount: number, error: any) => {
        // Only retry rate limit errors
        if (error?.status === 429 && failureCount < 3) {
          return true
        }

        return false
      },

      retryDelay: (attemptIndex: number, error: any) => {
        const retryAfter = error?.retryAfter

        if (retryAfter) {
          return retryAfter * 1000
        }

        // fallback exponential backoff
        return Math.min(1000 * 2 ** attemptIndex, 30000)
      },
    },
  },
})

export default queryClient

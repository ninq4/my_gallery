import { QueryClient, keepPreviousData } from '@tanstack/react-query'
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            enabled: false,
            retryDelay: 500,
            staleTime: 0,
            gcTime: 1000 * 60 * 60 * 15,
            placeholderData: keepPreviousData
        }
    }
})

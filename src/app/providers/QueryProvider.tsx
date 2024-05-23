import { queryClient } from '@/src/shared/config/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

export default function QueryProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

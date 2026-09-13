import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // How long data remains fresh in the cache
            staleTime: 1000 * 60 * 5, // 5 minutes
            // How long data remains in the cache after it is no longer used
            gcTime: 1000 * 60 * 30,
        },
    },
});

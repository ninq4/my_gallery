import { useQuery } from '@tanstack/react-query'
import { picturesApi } from '../..'

export const useGetIsFavorite = () => {
    return useQuery({
        queryKey: ['pictures', 'isFavorite'],
        queryFn: () => picturesApi.isFavorite(),
        enabled: true
    })
}

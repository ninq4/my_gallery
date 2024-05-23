import { useQuery } from '@tanstack/react-query'
import { picturesApi } from '../..'

export const useGetPicture = () => {
    return useQuery({
        queryKey: ['pictures'],
        queryFn: () => picturesApi.get(),
        enabled: true
    })
}

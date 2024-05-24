import { TMutationParameters } from '@/src/shared/lib/utils/mutations/types'
import { useMutation } from '@tanstack/react-query'
import { TCreateComment } from '../../api/types'
import { commentApi } from '../..'
import { queryClient } from '@/src/shared/config/react-query'
import { mutateCreate } from '@/src/shared/lib/utils/mutations/create'
import { TComment } from '../types'

export const useSendComment = (props: TMutationParameters<TCreateComment>) => {
    return useMutation({
        mutationFn: (data: any) => commentApi.send(data),
        onSuccess: (comment) => {
            queryClient.setQueryData(['pictures'], (prev: TComment[]) => {
                return mutateCreate(prev, comment.data)
            })

            props.onSuccess && props.onSuccess()
        },

        onError: () => {
            props.onError && props.onError()
        }
    })
}

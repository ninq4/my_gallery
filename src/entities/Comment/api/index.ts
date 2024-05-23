import { CRUD } from '@/src/shared/api'
import { TCreateComment } from './types'
export const Api = {
    send: (data: TCreateComment) => {
        return CRUD.create<TCreateComment>('api/comments', {
            body: JSON.stringify(data)
        })
    }
}

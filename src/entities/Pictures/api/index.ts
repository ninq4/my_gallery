import { CRUD } from '@/src/shared/api'
import { TPictire } from '../model/types'

export const Api = {
    get: () => {
        return CRUD.get<TPictire>('api/pictures?populate=*')
    },
    create: (data: any) => {
        return CRUD.create('api/pictures', {
            body: JSON.stringify(data)
        })
    }
}

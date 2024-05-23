import { AuthModel } from '@/src/entities/Auth'
import { CommentModel } from '@/src/entities/Comment'
import { TCreateComment } from '@/src/entities/Comment/api/types'
import { PicturesModel } from '@/src/entities/Pictures'

export const useSend = () => {
    const hook = CommentModel.Hooks.useSendComment({})
    const send = (content: string, id: number, username: string) => {
        hook
    }

    return { send }
}

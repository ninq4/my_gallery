export type TPictire = {
    id?: number
    attributes: {
        title: string
        descr?: string
        createdAt?: string
        image?: {
            data: { attributes: { url?: string; name?: string } }
        }
        comments?: {
            data: { attributes: { name?: string; content?: string } }[]
        }
    }
}

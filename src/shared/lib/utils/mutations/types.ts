export type TBaseEntity = {
    id: string
}
export type TMutationParameters<T> = {
    onSuccess?: (data?: T) => void
    onError?: () => void
}

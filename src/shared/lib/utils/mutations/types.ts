export type TBaseEntity = {
    guid: string
}
export type TMutationParameters<T> = {
    onSuccess?: (data?: T) => void
    onError?: () => void
}

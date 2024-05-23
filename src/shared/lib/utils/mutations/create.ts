import { TBaseEntity } from './types'

export const mutateCreate = <T extends TBaseEntity>(
    old: T[] | undefined,
    newEntity: T
) => {
    if (old) {
        return [newEntity, ...old]
    }
    return [newEntity]
}

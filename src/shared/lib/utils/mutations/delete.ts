import { TBaseEntity } from './types'

export const mutateDelete = <T extends TBaseEntity>(
    old: T[] | undefined,
    deletedId: string
) => {
    if (old) {
        return old.filter((item) => item.guid !== deletedId)
    }
    return []
}

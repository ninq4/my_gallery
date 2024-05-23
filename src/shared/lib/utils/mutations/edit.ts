import { TBaseEntity } from './types'

export const mutateEdit = <T extends TBaseEntity>(
    old: T[] | undefined,
    replace: T
) => {
    if (old) {
        return old.map((item) => (item.guid === replace.guid ? replace : item))
    }
    return [replace]
}
export const mutateEditDifferentField = <T extends TBaseEntity>(
    old: T[] | undefined,
    replace: T,
    oldField: keyof T,
    replaceField: keyof T
) => {
    if (old) {
        return old.map((item) =>
            item[oldField] === replace[replaceField] ? replace : item
        )
    }
    return [replace]
}

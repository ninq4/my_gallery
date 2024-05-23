import { Config } from '@/src/shared/config'

export function formatImage(src: string): string {
    return Config.API_URL + src
}

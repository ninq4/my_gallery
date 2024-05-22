// const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
// const SHOWCASE_ID = process.env.NEXT_PUBLIC_SHOWCASE_ID || ''

const API_URL = import.meta.env.VITE_PUBLIC_URL || ''

const Config = { API_URL }
export { Config }

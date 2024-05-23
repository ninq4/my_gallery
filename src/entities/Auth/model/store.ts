import { makeAutoObservable } from 'mobx'
class AuthStore {
    private _token: string
    private _userId: string
    constructor() {
        makeAutoObservable(this)
        this._token = localStorage.getItem('token') || ''
        this._userId = ''
    }
    clear() {
        localStorage.removeItem('token')
        this._token = ''
        this._userId = ''
    }
    get token() {
        return this._token
    }
    private setLocalStorage(value: string) {
        localStorage.setItem('token', value)
    }
    set token(value: string) {
        this._token = value
        this.setLocalStorage(value)
    }
}
export default new AuthStore()

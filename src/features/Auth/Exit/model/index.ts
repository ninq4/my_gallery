import { AuthStore } from '@/src/entities/Auth/model'
import { useNavigate } from 'react-router-dom'

const useExit = () => {
    const store = AuthStore
    const navigate = useNavigate()

    const exit = () => {
        store.clear()
        navigate('/auth/login')
    }
    return exit
}

export default useExit

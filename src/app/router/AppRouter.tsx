import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Pictires = lazy(() => import('@/src/pages/page'))
const Register = lazy(() => import('@/src/pages/Auth/Register/page'))
const Login = lazy(() => import('@/src/pages/Auth/Login/page'))
const Favorite = lazy(() => import('@/src/pages/Favorite/page'))

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <Suspense>
                        <Pictires />
                    </Suspense>
                }
            />
            <Route
                path='/auth/login'
                element={
                    <Suspense>
                        <Login />
                    </Suspense>
                }
            />
            <Route
                path='/auth/register'
                element={
                    <Suspense>
                        <Register />
                    </Suspense>
                }
            />
            <Route
                path='/favorite'
                element={
                    <Suspense>
                        <Favorite />
                    </Suspense>
                }
            />
        </Routes>
    )
}

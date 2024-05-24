import { AuthModel } from '@/src/entities/Auth'
import store from '@/src/entities/Auth/model/store'
import { PicturesModel } from '@/src/entities/Pictures'
import PictureList from '@/src/features/Pictures/PictureList/ui/PictureList'
import Container from '@/src/shared/ui/Container/Container'
import Footer from '@/src/widgets/Footer/Footer'
import Header from '@/src/widgets/Header/Header'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Favorite = observer(() => {
    const store = AuthModel.AuthStore
    const navigate = useNavigate()
    useEffect(() => {
        if (
            store.token === '' ||
            (store.token === undefined && store.userName === '') ||
            store.userName === undefined
        ) {
            navigate('/auth/login')
        }
    }, [store.token, store.userName])

    const { data } = PicturesModel.Hooks.useGetIsFavorite()
    return (
        <>
            <Container>
                <Header />
                <PictureList list={data} />
            </Container>
            <Footer />
        </>
    )
})

export default Favorite

import { useEffect } from 'react'
import { authApi, AuthModel } from '../entities/Auth'
import Container from '../shared/ui/Container/Container'
import Footer from '../widgets/Footer/Footer'
import Header from '../widgets/Header/Header'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { picturesApi } from '../entities/Pictures'
import PictureList from '../features/Pictures/PictureList/ui/PictureList'
import Modal from '../shared/ui/Modal/Modal'

const Home = observer(() => {
    // authApi.login({ identifier: 'test', password: 'testtest' })
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Header />
                <PictureList />
            </Container>
            <Footer />
            {/* <Modal /> */}
        </>
    )
})
export default Home

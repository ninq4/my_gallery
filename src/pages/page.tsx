import Container from '../shared/ui/Container/Container'
import Footer from '../widgets/Footer/Footer'
import Header from '../widgets/Header/Header'
import { observer } from 'mobx-react-lite'
import PictureList from '../features/Pictures/PictureList/ui/PictureList'
import { PicturesModel } from '../entities/Pictures'
import Favorite from '../features/Pictures/Favorite/ui/Favorite'

const Home = observer(() => {
    const { data } = PicturesModel.Hooks.useGetPicture()
    return (
        <>
            <Container>
                <Header />
                <PictureList list={data} />
                <Favorite />
            </Container>
            <Footer />
            {/* <Modal /> */}
        </>
    )
})
export default Home

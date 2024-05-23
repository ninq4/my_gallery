import { PicturesModel } from '@/src/entities/Pictures'
import styles from './PictureList.module.scss'
import Card from '@/src/shared/ui/Card/Card'
import { TPictire } from '@/src/entities/Pictures/model/types'
import { formatImage } from '@/src/shared/lib/utils/image/image'
const PictureList = () => {
    const { data } = PicturesModel.Hooks.useGetPicture()
    return (
        <div className={styles.root}>
            {data?.data &&
                data?.data.map((item: TPictire, index: number) => (
                    <Card
                        key={index}
                        title={item.attributes.title}
                        data={item.attributes.createdAt || ''}
                        image={formatImage(
                            item?.attributes?.image?.data?.attributes?.url || ''
                        )}
                        description={item.attributes.descr}
                        comment={item.attributes.comments}
                    />
                ))}
        </div>
    )
}

export default PictureList

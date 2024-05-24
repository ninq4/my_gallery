import styles from './PictureList.module.scss'
import Card from '@/src/shared/ui/Card/Card'
import { TPictire } from '@/src/entities/Pictures/model/types'
import { formatImage } from '@/src/shared/lib/utils/image/image'
import { Props } from './types'
const PictureList = ({ list }: Props) => {
    return (
        <div className={styles.root}>
            {list?.data &&
                list?.data.map((item: TPictire, index: number) => (
                    <Card
                        key={index}
                        title={item.attributes.title}
                        data={item.attributes.createdAt || ''}
                        image={formatImage(
                            item?.attributes?.image?.data?.attributes?.url || ''
                        )}
                        description={item.attributes.descr}
                        comment={item.attributes.comments}
                        id={item.id as number}
                    />
                ))}
        </div>
    )
}

export default PictureList

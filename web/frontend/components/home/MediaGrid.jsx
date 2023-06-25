import { Image, Link } from '@shopify/polaris';
import { MediaGridStyles as Styles } from '../../assets';

export default function MediaGrid({ allMedia }) {
    return (
        <div className={Styles.mediaContainer}>
            {allMedia?.data?.map((media) => (
                <Link key={media?.id} url={media?.permalink}>
                    <Image
                        source={media?.thumbnail_url || media?.media_url}
                        alt="Instagram Image"
                        className={Styles.mediaItem}
                    />
                </Link>
            ))}
        </div>
    );
}

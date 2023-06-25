import { AlphaCard, Text } from '@shopify/polaris';
import { useAuthenticatedFetch } from '../../hooks';
import { useGetAllMediaQuery } from '../../redux/features/instaMedia/instaMediaApi.js';
import { Error, CustomeLoading, MediaGrid } from '../index.js';

export default function FeedPreview() {
    const appQuery = useAuthenticatedFetch();
    const { data: allMedia, isLoading, isError, error } = useGetAllMediaQuery({ appQuery });
    console.log(!isLoading && allMedia);

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <CustomeLoading />;
    } else if (isError) {
        content = <Error error={error} />;
    } else {
        content = <MediaGrid allMedia={allMedia} />;
    }

    return (
        <AlphaCard padding="8">
            <Text variant="headingMd" as="h6">
                Feed Preview
            </Text>
            <hr />
            {content}
        </AlphaCard>
    );
}

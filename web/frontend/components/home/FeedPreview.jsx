import { AlphaCard, Frame, HorizontalGrid, Image, Link, Loading, Text } from '@shopify/polaris';
import { useAuthenticatedFetch } from '../../hooks';
import { useGetAllMediaQuery } from '../../redux/features/instaMedia/instaMediaApi';

export default function FeedPreview() {
    const appQuery = useAuthenticatedFetch();
    const { data: allMedia, isLoading, isError, error } = useGetAllMediaQuery({ appQuery });
    console.log(!isLoading && allMedia);
    // decide what to render
    let content = null;
    if (isLoading) {
        content = (
            <Frame>
                <Loading />
            </Frame>
        );
    } else if (isError) {
        content = (
            <Text as="p" color="critical" variant="bodyMd">
                {error.message || 'Something went wrong!'}
            </Text>
        );
    } else {
        content = (
            <HorizontalGrid gap="4" columns={3}>
                {allMedia?.data?.map((media) => (
                    <Link key={media?.id} url={media?.permalink}>
                        <Image source={media?.media_url} alt="Instagram Image" width="100%" />
                    </Link>
                ))}
            </HorizontalGrid>
        );
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

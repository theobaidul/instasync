import { Frame, HorizontalStack, Layout, Loading, Page } from '@shopify/polaris';
import { FeedPreview, OptionsCard } from '../index';
import { useAuthenticatedFetch } from '@/hooks';
import { useGetOptionsQuery } from '../../redux/features/feedOption/feedOptionApi.js';

export default function FeedLayout() {
    const appQuery = useAuthenticatedFetch();
    const { data: initialOption, isLoading, isError } = useGetOptionsQuery({ appQuery });

    // decide what to render
    let content = null;
    if (isLoading) {
        content = (
            <Frame>
                <Loading />
            </Frame>
        );
    } else if (isError) {
        content = <div>something went wrong</div>;
    } else {
        content = (
            <Layout>
                <Layout.Section>
                    <HorizontalStack gap="5">
                        <OptionsCard initialOption={initialOption} />
                        <FeedPreview />
                    </HorizontalStack>
                </Layout.Section>
            </Layout>
        );
    }

    return <Page fullWidth>{content}</Page>;
}

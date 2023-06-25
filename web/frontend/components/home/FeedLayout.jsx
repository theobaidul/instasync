import { HorizontalGrid, HorizontalStack, Layout, Page, Text } from '@shopify/polaris';
import { FeedPreview, OptionsCard, CustomeLoading, Error } from '../index.js';
import { useAuthenticatedFetch } from '@/hooks';
import { useGetOptionsQuery } from '../../redux/features/feedOption/feedOptionApi.js';
import { FeedLayoutStyles as Styles } from '../../assets';

export default function FeedLayout() {
    const appQuery = useAuthenticatedFetch();
    const { data: initialOption, isLoading, isError, error } = useGetOptionsQuery({ appQuery });

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <CustomeLoading />;
    } else if (isError) {
        content = <Error error={error} />;
    } else {
        content = (
            <Layout>
                <Layout.Section>
                    <div className={Styles.horizontalStack}>
                        <div className={Styles.optionsCard}>
                            <OptionsCard initialOption={initialOption} />
                        </div>
                        <div className={Styles.feedPreview}>
                            <FeedPreview />
                        </div>
                    </div>
                </Layout.Section>
            </Layout>
        );
    }

    return <Page fullWidth>{content}</Page>;
}

import { AlphaCard, Text } from '@shopify/polaris';

export default function FeedPreview() {
    return (
        <AlphaCard padding="8">
            <Text variant="headingMd" as="h6">
                Feed Preview
            </Text>
            <hr />
        </AlphaCard>
    );
}

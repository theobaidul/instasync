import { Text } from '@shopify/polaris';

export default function Error({ error }) {
    return (
        <Text as="p" color="critical" variant="bodyMd">
            {error?.message || 'Something went wrong!'}
        </Text>
    );
}

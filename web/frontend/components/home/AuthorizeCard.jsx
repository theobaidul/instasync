import { AlphaCard, Page, Button } from '@shopify/polaris';

export default function AuthorizeCard() {
    const location = window?.location;
    const queryString = location?.search;
    const parameters = new URLSearchParams(queryString);
    const origin = location?.origin;
    const shop = parameters.get('shop');
    const host = parameters.get('host');

    return (
        <>
            <Page narrowWidth>
                <AlphaCard padding="4">
                    <Button
                        primary
                        url={`http://localhost:8080/token?shop=${shop}&host=${host}&origin=${origin}`}
                    >
                        Authorize
                    </Button>
                </AlphaCard>
            </Page>
        </>
    );
}

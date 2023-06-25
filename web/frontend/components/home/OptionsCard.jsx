import { AlphaCard, FormLayout, Text, TextField, Select, Button, Form } from '@shopify/polaris';
import options from './options.json';
import { useState } from 'react';
import { useAuthenticatedFetch } from '@/hooks';
import { useUpdateOptionsMutation } from '../../redux/features/feedOption/feedOptionApi.js';

const {
    configurationOptions,
    layoutOptions,
    postOnClickOptions,
    postSizingOptions,
    postSpacingOptions,
} = options;

export default function OptionsCard({ initialOption }) {
    const appQuery = useAuthenticatedFetch();
    const [updateOption, { isLoading }] = useUpdateOptionsMutation();
    const [title, setTitle] = useState(initialOption?.title || '');
    const [layout, setLayout] = useState(initialOption?.layout || 'Grid');
    const [postSizing, setPostSizing] = useState(initialOption?.postSizing || 'Square');
    const [postSpacing, setPostSpacing] = useState(initialOption?.postSpacing || 'No Spacing');
    const [postOnClick, setPostOnClick] = useState(initialOption?.postOnClick || 'Open Popup');
    const [configuration, setConfiguration] = useState(initialOption?.configuration || 'Auto');
    const [rows, setRows] = useState(initialOption?.rows || '');
    const [columns, setColumns] = useState(initialOption?.columns || '');

    const submitHandler = () => {
        const data = {
            title,
            layout,
            postSizing,
            postSpacing,
            postOnClick,
            configuration,
            rows,
            columns,
        };
        // update feed option api
        updateOption({ body: data, appQuery });
    };

    return (
        <AlphaCard padding="8">
            <Text variant="headingMd" as="h6">
                Instagram Feed Settings
            </Text>
            <hr />
            <Form onSubmit={submitHandler}>
                <FormLayout>
                    <TextField
                        label="Feed Title"
                        value={title}
                        onChange={(value) => setTitle(value)}
                        autoComplete="off"
                    />
                    <FormLayout.Group condensed>
                        <Select
                            label="Layout"
                            value={layout}
                            onChange={(value) => setLayout(value)}
                            options={layoutOptions}
                        />
                        <Select
                            label="Post Sizing"
                            value={postSizing}
                            onChange={(value) => setPostSizing(value)}
                            options={postSizingOptions}
                        />
                    </FormLayout.Group>
                    <FormLayout.Group condensed>
                        <Select
                            label="Post Spacing"
                            value={postSpacing}
                            onChange={(value) => setPostSpacing(value)}
                            options={postSpacingOptions}
                        />
                        <Select
                            label="On Post Click"
                            value={postOnClick}
                            onChange={(value) => setPostOnClick(value)}
                            options={postOnClickOptions}
                        />
                    </FormLayout.Group>
                    <Select
                        label="Configurations"
                        value={configuration}
                        onChange={(value) => setConfiguration(value)}
                        options={configurationOptions}
                    />
                    <FormLayout.Group condensed>
                        <TextField
                            label="Number of Rows"
                            type="number"
                            value={rows}
                            onChange={(value) => setRows(value)}
                            autoComplete="off"
                        />
                        <TextField
                            max={12}
                            label="Number of Columns"
                            type="number"
                            value={columns}
                            onChange={(value) => setColumns(value)}
                            autoComplete="off"
                        />
                    </FormLayout.Group>
                    <Button fullWidth primary submit loading={isLoading}>
                        Save Settings
                    </Button>
                </FormLayout>
            </Form>
        </AlphaCard>
    );
}

// src/pages/Test.tsx
import {
    Surface,
    Button,
    Typography,
    Stack,
    RadioGroup,
    Radio,
    useTheme,
    Panel
} from '@archway/zeroui';

import { useState } from 'react';

export default function TestPage() {
    const { theme } = useTheme();
    const [method, setMethod] = useState('standard');

    return (
        <Surface style={{ backgroundColor: theme.colors.background }}>
            <Stack direction="row" spacing="sm">
                <Button>
                    <Typography>
                        Really Long Button
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Short
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Really Long Button 2
                    </Typography>
                </Button>
                <Button>
                    <Typography>
                        Really Long Button 2
                    </Typography>
                </Button>
            </Stack>

            <br />

            <Panel style={{ padding: theme.spacing.sm, margin: theme.spacing.sm, borderRadius: theme.spacing.sm }}>
                <RadioGroup
                    name="shipping"
                    value={method}
                    onChange={setMethod}
                    row
                    size="lg"
                >
                    <Stack direction="column" spacing="sm">
                        <Radio value="standard" label="Standard (3–5 days)" />
                        <Radio value="express" label="Express (1–2 days)" />
                        <Radio value="overnight" label="Overnight" disabled />
                    </Stack>
                </RadioGroup>
            </Panel>

        </Surface>
    );
}

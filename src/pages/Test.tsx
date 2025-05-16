// src/pages/Test.tsx
import {
    Surface,
    Button,
    Typography,
    Stack,
    useTheme
} from '@archway/zeroui';

export default function TestPage() {
    const { theme } = useTheme();

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
        </Surface>
    );
}

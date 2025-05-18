// src/pages/PresetDemoPage.tsx
import { useNavigate } from 'react-router-dom';
import {
    Surface,
    Box,
    Typography,
    Button,
    useTheme,
    definePreset,
} from '@archway/zeroui';

definePreset('fancyBox', t => `
  background: ${t.colors.primary};
  border-radius: 20px;
  box-shadow: 0 6px 16px ${t.colors.text}22;
  padding: ${t.spacing.lg};
  margin: ${t.spacing.lg};
`);

export default function BoxDemo() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        <Surface style={{ backgroundColor: theme.colors.background }}>
            <Box>
                <Typography>
                    Default Box with default Typography
                </Typography>
            </Box>
            <Box style={{ backgroundColor: theme.colors.primary }}>
                <Typography>
                    {`backgroundColor: theme.colors.primary`}
                </Typography>
            </Box>
            <Box
                style={{
                    backgroundColor: theme.colors.secondary,
                    padding: theme.spacing.md,
                    margin: theme.spacing.md
                }}
            >
                <Typography>
                    {`backgroundColor: theme.colors.secondary`}
                    <br />
                    {`padding: theme.spacing.md`}
                    <br />
                    {`margin: theme.spacing.md`}
                </Typography>
            </Box>
            <Box preset="fancyBox">
                <Typography>
                    Box via Preset
                </Typography>
            </Box>
            <Button
                size="lg"
                onClick={() => navigate(-1)}
                style={{margin: theme.spacing.md}}
            >
                Back
            </Button>
        </Surface>
    );
}

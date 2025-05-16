// src/pages/MainPage.tsx
import { useNavigate } from 'react-router-dom';
import { Surface, Box, Button, Typography, Stack, useTheme } from '@archway/zeroui';

export default function MainPage() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <Surface style={{ backgroundColor: theme.colors.background }}>
      <Box style={{ padding: theme.spacing.lg }}>
        <Typography variant="h1"><b>zeroui</b> Demo Home</Typography>

        <Box style={{ padding: theme.spacing.lg }}>
          <Stack direction="row" spacing="lg">
            <Button
              variant="alt"
              onClick={() => navigate('/typography')}
            >
              Typography Demo Page
            </Button>
            <Button
              variant="alt"
              onClick={() => navigate('/not-real')}
            >
              Some Other Page
            </Button>
          </Stack>
        </Box>
      </Box>
    </Surface>
  );
}

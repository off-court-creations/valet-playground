// src/pages/MainPage.tsx
import { useNavigate } from 'react-router-dom';
import { Surface, Box, Button, Typography, Stack, useTheme } from '@archway/zeroui';

export default function MainPage() {
  const navigate = useNavigate();
  const { theme, mode, toggleMode } = useTheme();

  return (
    <Surface style={{ backgroundColor: theme.colors.background }}>
      <Box style={{ padding: theme.spacing.lg }}>
        <Typography variant="h1"><b>zeroui</b> Demo</Typography>

        <Stack direction="row" spacing="lg" style={{marginTop: theme.spacing.lg}}>
          <Button
            size="lg"
            onClick={() => navigate('/typography')}
          >
            Typography
          </Button>

          <Button
            size="lg"
            onClick={() => navigate('/presets')}
          >
            Presets
          </Button>

          <Button
            size="lg"
            onClick={() => navigate('/form')}
          >
            Form
          </Button>

          <Button
            size="lg"
            onClick={() => navigate('/parallax')}
          >
            Parallax
          </Button>

          <Button
            size="lg"
            onClick={() => navigate('/test')}
          >
            Test
          </Button>

          <Button
            size="lg"
            variant='alt'
            onClick={toggleMode}
          >
            Switch to {mode === 'light' ? 'dark' : 'light'} mode
          </Button>
        </Stack>
      </Box>
    </Surface>
  );
}

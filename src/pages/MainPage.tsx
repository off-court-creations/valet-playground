// src/pages/MainPage.tsx
import { useNavigate } from 'react-router-dom';
import { Surface, Box, Button, Typography, Stack, useTheme } from '@archway/zeroui';

export default function MainPage() {
  const navigate = useNavigate();
  const { theme, mode, toggleMode } = useTheme();

  return (
    <Surface style={{ backgroundColor: theme.colors.background }}>
      <Typography variant="h1"><b>zeroui</b> Demo</Typography>

      <Typography variant="h2">Components</Typography>

      <Stack direction="row" spacing="lg" style={{ marginTop: theme.spacing.lg }}>
        <Button
          size="lg"
          onClick={() => navigate('/box-demo')}
        >
          Box
        </Button>
      </Stack>

      <Typography variant="h2">Demos</Typography>

      <Stack direction="row" spacing="lg" style={{ marginTop: theme.spacing.lg }}>
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
      </Stack>

      <br/>

      <Button
        size="lg"
        variant='alt'
        onClick={toggleMode}
      >
        Switch to {mode === 'light' ? 'dark' : 'light'} mode
      </Button>

    </Surface>
  );
}

// src/pages/MainPage.tsx
import { useNavigate } from 'react-router-dom';
import { Surface, Button, Typography, Stack, useTheme, Box, Panel } from '@archway/zeroui';

export default function MainPage() {
  const navigate = useNavigate();
  const { theme, mode, toggleMode } = useTheme();

  return (
    <Surface>
      <Box style={{ margin: theme.spacing.md }}>
        <Typography variant="h1"><b>zeroui</b> Demo</Typography>
      </Box>

      <Stack>
        <Panel style={{ margin: theme.spacing.md, padding: theme.spacing.md }} variant="alt">
          <Typography variant="h2">Components</Typography>

          <Stack direction="row" spacing="lg" style={{ marginTop: theme.spacing.lg }}>
            <Button
              size="lg"
              onClick={() => navigate('/box-demo')}
            >
              <Typography>
                Box
              </Typography>
            </Button>

            <Button
              size="lg"
              onClick={() => navigate('/typography')}
            >
              <Typography>
                Typography
              </Typography>
            </Button>
          </Stack>
        </Panel>

        <Panel style={{ margin: theme.spacing.md, padding: theme.spacing.md }}>
          <Typography variant="h2">Demos</Typography>

          <Stack direction="row" spacing="lg" style={{ marginTop: theme.spacing.lg }}>
            <Button
              size="lg"
              onClick={() => navigate('/presets')}
            >
              <Typography>
                Presets
              </Typography>
            </Button>

            <Button
              size="lg"
              onClick={() => navigate('/form')}
            >
              <Typography>
                Form
              </Typography>
            </Button>

            <Button
              size="lg"
              onClick={() => navigate('/parallax')}
            >
              <Typography>
                Parallax
              </Typography>
            </Button>

            <Button
              size="lg"
              onClick={() => navigate('/test')}
            >
              <Typography>
                Really long button text as a test
              </Typography>
            </Button>
          </Stack>
        </Panel>

        <Button
          size="lg"
          variant='alt'
          onClick={toggleMode}
          style={{ margin: theme.spacing.md }}
        >
          <Typography>
            Switch to {mode === 'light' ? 'dark' : 'light'} mode
          </Typography>
        </Button>
      </Stack>

    </Surface>
  );
}

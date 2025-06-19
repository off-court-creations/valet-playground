// src/pages/AppBarDemo.tsx
import { Surface, Stack, Typography, Button, AppBar, Box, useTheme } from '@archway/valet';
import { useNavigate } from 'react-router-dom';

export default function AppBarDemoPage() {
  const { theme, toggleMode } = useTheme();
  const navigate = useNavigate();

  return (
    <Surface>
      <Stack
        spacing="lg"
        style={{ padding: theme.spacing['lg'], maxWidth: 980, margin: '0 auto' }}
      >
        <Typography variant="h2" bold>
          AppBar Showcase
        </Typography>
        <Typography variant="subtitle">
          Basic usage and positioning
        </Typography>

        <Typography variant="h3">1. Static bar</Typography>
        <AppBar>
          <Typography variant="h4">Static</Typography>
        </AppBar>

        <Typography variant="h3">2. Fixed bar</Typography>
        <AppBar position="fixed" background={theme.colors['secondary'] as string} textColor={theme.colors['secondaryText'] as string}>
          <Typography variant="h4">Fixed</Typography>
        </AppBar>
        <Box style={{ height: 100 }}></Box>

        <Typography variant="h3">3. Sticky bar</Typography>
        <Box style={{ height: 200 }}>
          <AppBar position="sticky" style={{ top: theme.spacing['md'] }}>
            <Typography variant="h4">Sticky</Typography>
          </AppBar>
          <Box style={{ height: 300 }}></Box>
        </Box>

        <Stack direction="row" spacing="lg">
          <Button variant="outlined" onClick={toggleMode}>
            Toggle light / dark
          </Button>
          <Button onClick={() => navigate(-1)}>← Back</Button>
        </Stack>
      </Stack>
    </Surface>
  );
}

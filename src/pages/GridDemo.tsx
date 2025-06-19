// src/pages/GridDemo.tsx
import { Surface, Stack, Typography, Button, Grid, Box, useTheme } from '@archway/valet';
import { useNavigate } from 'react-router-dom';

export default function GridDemoPage() {
  const { theme, toggleMode } = useTheme();
  const navigate = useNavigate();

  return (
    <Surface>
      <Stack
        spacing="lg"
        style={{ padding: theme.spacing['lg'], maxWidth: 980, margin: '0 auto' }}
      >
        <Typography variant="h2" bold>Grid Showcase</Typography>
        <Typography variant="subtitle">Responsive column layout</Typography>

        <Typography variant="h3">1. Two columns</Typography>
        <Grid columns={2} gap="md">
          <Box style={{ background: theme.colors['primary'] as string, color: theme.colors['primaryText'] as string, padding: theme.spacing['md'] }}>A</Box>
          <Box style={{ background: theme.colors['secondary'] as string, color: theme.colors['secondaryText'] as string, padding: theme.spacing['md'] }}>B</Box>
        </Grid>

        <Typography variant="h3">2. Four columns</Typography>
        <Grid columns={4} gap="sm">
          {['1','2','3','4'].map(n => (
            <Box key={n} style={{ background: theme.colors['primary'] as string, color: theme.colors['primaryText'] as string, padding: theme.spacing['sm'], textAlign: 'center' }}>{n}</Box>
          ))}
        </Grid>

        <Stack direction="row" spacing="lg">
          <Button variant="outlined" onClick={toggleMode}>Toggle light / dark</Button>
          <Button onClick={() => navigate(-1)}>← Back</Button>
        </Stack>
      </Stack>
    </Surface>
  );
}

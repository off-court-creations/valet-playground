// src/pages/BreadcrumbsDemo.tsx
import { Surface, Stack, Typography, Button, Breadcrumbs, useTheme } from '@archway/valet';
import { useNavigate } from 'react-router-dom';

export default function BreadcrumbsDemoPage() {
  const { theme, toggleMode } = useTheme();
  const navigate = useNavigate();

  const items = [
    { label: 'Home', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Data' },
  ];

  return (
    <Surface>
      <Stack
        spacing="lg"
        style={{ padding: theme.spacing['lg'], maxWidth: 980, margin: '0 auto' }}
      >
        <Typography variant="h2" bold>Breadcrumbs Showcase</Typography>
        <Typography variant="subtitle">Navigation trail examples</Typography>

        <Typography variant="h3">1. Default separator</Typography>
        <Breadcrumbs items={items} />

        <Typography variant="h3">2. Custom separator</Typography>
        <Breadcrumbs items={items} separator="›" />

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

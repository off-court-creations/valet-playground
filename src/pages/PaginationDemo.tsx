// src/pages/PaginationDemo.tsx
import { useState } from 'react';
import { Surface, Stack, Typography, Button, Pagination, useTheme } from '@archway/valet';
import { useNavigate } from 'react-router-dom';

export default function PaginationDemoPage() {
  const { theme, toggleMode } = useTheme();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  return (
    <Surface>
      <Stack
        spacing="lg"
        style={{ padding: theme.spacing['lg'], maxWidth: 980, margin: '0 auto' }}
      >
        <Typography variant="h2" bold>Pagination Showcase</Typography>
        <Typography variant="subtitle">Controlled page selection</Typography>

        <Pagination count={5} page={page} onChange={setPage} />
        <Typography variant="body">Current page: {page}</Typography>

        <Stack direction="row" spacing="lg">
          <Button variant="outlined" onClick={toggleMode}>Toggle light / dark</Button>
          <Button onClick={() => navigate(-1)}>← Back</Button>
        </Stack>
      </Stack>
    </Surface>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// src/pages/ButtonDemoPage.tsx
// A comprehensive live demo of every Button capability in ZeroUI
// ─────────────────────────────────────────────────────────────────────────────
import {
  Surface,
  Stack,
  Box,
  Typography,
  Button,
  useTheme,
} from '@archway/valet';
import { useNavigate } from 'react-router-dom';


/*─────────────────────────────────────────────────────────────────────────────*/
/* Demo page                                                                  */
export default function ButtonDemoPage() {
  const { theme, toggleMode } = useTheme();
  const navigate               = useNavigate();

  return (
    <Surface>
      <Stack
        spacing="lg"
        style={{
          padding   : theme.spacing.lg,
          maxWidth  : 980,
          margin    : '0 auto',
        }}
      >
        {/* Page header ----------------------------------------------------- */}
        <Typography variant="h2" bold>
          Button Showcase
        </Typography>
        <Typography variant="subtitle">
          Every variant, size, and trick in one place
        </Typography>

        {/* 1. Variants ----------------------------------------------------- */}
        <Typography variant="h3">1. Variants</Typography>
        <Stack direction="row" spacing="md">
          <Button>contained</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>

        {/* 2. Sizes -------------------------------------------------------- */}
        <Typography variant="h3">2. Sizes</Typography>
        <Stack direction="row" spacing="md">
          <Button size="sm">sm</Button>
          <Button>md (default)</Button>
          <Button size="lg">lg</Button>
        </Stack>

        {/* 3. Full-width --------------------------------------------------- */}
        <Typography variant="h3">3. fullWidth</Typography>
        <Box style={{ maxWidth: 360 }}>
          <Button fullWidth>Stretch to parent</Button>
        </Box>

        {/* 4. Disabled state ---------------------------------------------- */}
        <Typography variant="h3">4. Disabled</Typography>
        <Stack direction="row" spacing="md">
          <Button disabled>contained</Button>
          <Button variant="outlined" disabled>
            outlined
          </Button>
        </Stack>

        {/* 6. Theme validation (hover, dark mode) ------------------------- */}
        <Typography variant="h3">5. Theme coupling</Typography>
        <Button variant="outlined" onClick={toggleMode}>
          Toggle light / dark mode
        </Button>

        {/* Back nav -------------------------------------------------------- */}
        <Button
          size="lg"
          onClick={() => navigate(-1)}
          style={{ marginTop: theme.spacing.lg }}
        >
          ← Back
        </Button>
      </Stack>
    </Surface>
  );
}

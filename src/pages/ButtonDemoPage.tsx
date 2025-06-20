// ─────────────────────────────────────────────────────────────────────────────
// src/pages/ButtonDemoPage.tsx | valet
// Comprehensive Button showcase (no redundancy, toggle last)
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
export default function ButtonDemoPage() {
  const { theme, toggleMode } = useTheme();
  const navigate               = useNavigate();

  return (
    <Surface>
      <Stack
        spacing="lg"
        style={{
          padding : theme.spacing['lg'],
          maxWidth: 980,
          margin  : '0 auto',
        }}
      >
        {/* Header --------------------------------------------------------- */}
        <Typography variant="h2" bold>
          Button Showcase
        </Typography>
        <Typography variant="subtitle">
          Variants, sizes, palettes &amp; more
        </Typography>

        {/* 1 ▸ Variants ---------------------------------------------------- */}
        <Typography variant="h3">1. Variants</Typography>
        <Stack direction="row" spacing="md">
          <Button>contained (default)</Button>
          <Button variant="outlined">outlined</Button>
        </Stack>

        {/* 2 ▸ Sizes ------------------------------------------------------- */}
        <Typography variant="h3">2. Sizes</Typography>
        <Stack direction="row" spacing="md">
          <Button size="sm">sm</Button>
          <Button>md (default)</Button>
          <Button size="lg">lg</Button>
        </Stack>

        {/* 3 ▸ Full-width -------------------------------------------------- */}
        <Typography variant="h3">3. fullWidth</Typography>
        <Box style={{ maxWidth: 360 }}>
          <Button fullWidth>Stretch to parent</Button>
        </Box>

        {/* 4 ▸ Palette tokens (contained & outlined) ---------------------- */}
        <Typography variant="h3">4. Palette tokens</Typography>
        <Stack direction="row" spacing="md">
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="tertiary">tertiary</Button>
        </Stack>

        {/* 5 ▸ Custom backgrounds / text ---------------------------------- */}
        <Typography variant="h3">5. Custom backgrounds</Typography>
        <Stack direction="row" spacing="md">
          <Button color="#9C27B0">#9C27B0</Button>
          <Button color="#00BFA5">#00BFA5</Button>
        </Stack>

        {/* 6 ▸ Outlined colour overrides ---------------------------------- */}
        <Typography variant="h3">6. Outlined colour override</Typography>
        <Stack direction="row" spacing="md">
          {/* default (neutral) */}
          <Button variant="outlined">default outline</Button>

          {/* token supplied – outline & hover adapt */}
          <Button variant="outlined" color="secondary">
            secondary outline
          </Button>

          {/* custom hex outline w/ contrasting label */}
          <Button variant="outlined" color="#e91e63" textColor="#fff">
            #e91e63 outline
          </Button>

          {/* separate outline + label */}
          <Button
            variant="outlined"
            color="#ff6d00"
            textColor="#fff"
          >
            outline • custom txt
          </Button>
        </Stack>

        {/* 7 ▸ Disabled ---------------------------------------------------- */}
        <Typography variant="h3">7. Disabled</Typography>
        <Stack direction="row" spacing="md">
          <Button disabled>contained</Button>
          <Button variant="outlined" disabled>
            outlined
          </Button>
          <Button color="secondary" disabled>
            palette
          </Button>
        </Stack>

        {/* Back navigation (utility, not part of demo numbering) ---------- */}
        <Button
          size="lg"
          onClick={() => navigate(-1)}
          style={{ marginTop: theme.spacing['lg'] }}
        >
          ← Back
        </Button>

        {/* 8 ▸ Theme toggle (LAST) ---------------------------------------- */}
        <Typography variant="h3">8. Theme toggle</Typography>
        <Button variant="outlined" onClick={toggleMode}>
          Toggle light / dark mode
        </Button>
      </Stack>
    </Surface>
  );
}

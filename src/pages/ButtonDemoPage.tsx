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
  definePreset
} from '@archway/valet';
import { useNavigate } from 'react-router-dom';

definePreset('showCaseStack', (t) => `
    max-width: 85%;
    margin: 0 auto;
    padding: ${t.spacing['lg']}
`);

/*─────────────────────────────────────────────────────────────────────────────*/
export default function ButtonDemoPage() {
  const { theme, toggleMode } = useTheme();
  const navigate = useNavigate();

  return (
    <Surface>
      <Stack
        spacing="lg"
        preset="showCaseStack"
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

          <Button variant="outlined" color="tertiary">
            tertiary outline
          </Button>

          {/* custom hex outline w/ contrasting label */}
          <Button variant="outlined" color="#e91e63">
            <Typography>
              #e91e63 outline
            </Typography>
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

        {/* 8 ▸ Custom label variants with Typography ---------------------- */}
        <Typography variant="h3">8. Custom label variants</Typography>
        <Stack direction="row" spacing="md">
          <Button>
            <Typography variant="h4">h4 in button</Typography>
          </Button>
          <Button>
            <Typography variant="subtitle">subtitle text</Typography>
          </Button>
          <Button variant="outlined">
            <Typography variant="h5">h5 outlined</Typography>
          </Button>
        </Stack>

        {/* 9 ▸ Theme toggle (LAST) ---------------------------------------- */}
        <Typography variant="h3">9. Theme toggle</Typography>
        <Button variant="outlined" onClick={toggleMode}>
          Toggle light / dark mode
        </Button>

        <Button
          size="lg"
          onClick={() => navigate(-1)}
          style={{ marginTop: theme.spacing['lg'] }}
        >
          ← Back
        </Button>
      </Stack>
    </Surface>
  );
}

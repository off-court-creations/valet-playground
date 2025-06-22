// ─────────────────────────────────────────────────────────────────────────────
// src/pages/SwitchDemoPage.tsx | valet
// Comprehensive live demo for <Switch /> – showcases uncontrolled,
// controlled, form-bound, sizes, disabled, and live theme coupling.
// Now zero reference to ReactNode → no duplicate-type clash.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import {
  Surface,
  Stack,
  Typography,
  Button,
  Switch,
  FormControl,
  createFormStore,
  useTheme,
} from '@archway/valet';
import { useNavigate } from 'react-router-dom';

/*─────────────────────────────────────────────────────────────────────────────*/
/* Local form store for demo                                                  */
const usePrefsForm = createFormStore({
  darkMode  : true,
  newsletter: false,
});

/*─────────────────────────────────────────────────────────────────────────────*/
/* Helper row – explicit `control` prop (JSX only, no ReactNode)              */
interface RowProps {
  label  : string;
  control: JSX.Element | null;
}

const Row = ({ label, control }: RowProps) => (
  <Stack
    direction="row"
    spacing="md"
    style={{ maxWidth: 360 }}
  >
    {control}
    <Typography style={{ flex: 1 }}>{label}</Typography>
  </Stack>
);

/*─────────────────────────────────────────────────────────────────────────────*/
/* Demo page                                                                  */
export default function SwitchDemoPage() {
  const { theme, toggleMode } = useTheme();           // live theme switch
  const navigate              = useNavigate();

  /* Controlled example state --------------------------------------------- */
  const [wifi, setWifi] = useState(false);

  /* Form submit handler --------------------------------------------------- */
  const handleSubmit = (values: { darkMode: boolean; newsletter: boolean }) =>
    // eslint-disable-next-line no-alert – demo only
    alert(JSON.stringify(values, null, 2));

  return (
    <Surface>
      <Stack
        spacing="lg"
        preset="showCaseStack"
      >
        {/* Page header ----------------------------------------------------- */}
        <Typography variant="h2" bold>
          Switch Showcase
        </Typography>
        <Typography variant="subtitle">
          Every prop, every trick, all in one place
        </Typography>

        {/* 1. Uncontrolled -------------------------------------------------- */}
        <Typography variant="h3">1. Uncontrolled</Typography>
        <Stack spacing="md">
          <Row
            label="Default unchecked"
            control={<Switch name="uc1" />}
          />
          <Row
            label="Default checked (defaultChecked)"
            control={<Switch name="uc2" defaultChecked />}
          />
        </Stack>

        {/* 2. Controlled ---------------------------------------------------- */}
        <Typography variant="h3">2. Controlled</Typography>
        <Row
          label={`Wi-Fi – ${wifi ? 'on' : 'off'}`}
          control={
            <Switch
              name="wifi"
              checked={wifi}
              onChange={setWifi}
            />
          }
        />

        {/* 3. Sizes --------------------------------------------------------- */}
        <Typography variant="h3">3. Sizes</Typography>
        <Stack spacing="md">
          <Row
            label="size='sm'"
            control={<Switch name="sm" size="sm" defaultChecked />}
          />
          <Row
            label="size='md'"
            control={<Switch name="md" size="md" defaultChecked />}
          />
          <Row
            label="size='lg'"
            control={<Switch name="lg" size="lg" defaultChecked />}
          />
        </Stack>

        {/* 4. Disabled ------------------------------------------------------ */}
        <Typography variant="h3">4. Disabled</Typography>
        <Stack spacing="md">
          <Row
            label="disabled & checked"
            control={<Switch name="d1" defaultChecked disabled />}
          />
          <Row
            label="disabled & unchecked"
            control={<Switch name="d2" disabled />}
          />
        </Stack>

        {/* 5. FormControl integration -------------------------------------- */}
        <Typography variant="h3">5. FormControl Binding</Typography>
        <FormControl
          useStore={usePrefsForm}
          onSubmitValues={handleSubmit}
          style={{
            display      : 'flex',
            flexDirection: 'column',
            gap          : theme.spacing['md'],
          }}
        >
          <Row
            label="Dark mode"
            control={<Switch name="darkMode" />}
          />
          <Row
            label="Join newsletter"
            control={<Switch name="newsletter" />}
          />
          <Button type="submit" variant="contained" size="lg">
            Save preferences
          </Button>
        </FormControl>

        {/* 6. Live theme validation ---------------------------------------- */}
        <Typography variant="h3">6. Theme coupling</Typography>
        <Button variant="outlined" onClick={toggleMode}>
          Toggle light / dark mode
        </Button>

        {/* Back nav -------------------------------------------------------- */}
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

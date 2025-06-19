// src/pages/MainPage.tsx
import { useNavigate } from 'react-router-dom';
import { Surface, Button, Typography, Stack, useTheme, Box, Panel } from '@archway/valet';

export default function MainPage() {
  const navigate = useNavigate();
  const { theme, mode, toggleMode } = useTheme();

  return (
    <Surface>
      <Box style={{ margin: theme.spacing['md'] }} centered>
        <Typography fontFamily="Poppins" variant="h1"><b>zeroui</b> Demo</Typography>
      </Box>

      <Box style={{ margin: theme.spacing['md'] }} centered>
        <Stack>
          <Panel style={{ margin: theme.spacing['md'], padding: theme.spacing['md'] }} variant="alt">
            <Box centered>
              <Typography variant="h2">Components</Typography>
            </Box>

            <Stack direction="row" spacing="lg" style={{ marginTop: theme.spacing['lg'] }}>
              <Button
                size="lg"
                onClick={() => navigate('/accordion-demo')}
              >
                <Typography>
                  Accordion
                </Typography>
              </Button>

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
                onClick={() => navigate('/button-demo')}
              >
                <Typography>
                  Button
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/checkbox-demo')}
              >
                <Typography>
                  Checkbox
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/text-form-demo')}
              >
                <Typography>
                  FormControl + Textfield
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/icon-demo')}
              >
                <Typography>
                  Icon
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/icon-button-demo')}
              >
                <Typography>
                  Icon Button
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/list-demo')}
              >
                <Typography>
                  List
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/modal-demo')}
              >
                <Typography>
                  Modal
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/drawer-demo')}
              >
                <Typography>
                  Drawer
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/panel-demo')}
              >
                <Typography>
                  Panel
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/progress-demo')}
              >
                <Typography>
                  Progress
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/slider-demo')}
              >
                <Typography>
                  Slider
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/select-demo')}
              >
                <Typography>
                  Select
                </Typography>
              </Button>
              
              <Button
                size="lg"
                onClick={() => navigate('/switch-demo')}
              >
                <Typography>
                  Switch
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/table-demo')}
              >
                <Typography>
                  Table
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/tabs-demo')}
              >
                <Typography>
                  Tabs
                </Typography>
              </Button>

              <Button
                size="lg"
                onClick={() => navigate('/tooltip-demo')}
              >
                <Typography>
                  Tooltip
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

          <Panel style={{ margin: theme.spacing['md'], padding: theme.spacing['md'] }}>
            <Typography variant="h2">Demos</Typography>

            <Stack direction="row" spacing="lg" style={{ marginTop: theme.spacing['lg'] }}>
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
                  Radio Button
                </Typography>
              </Button>
            </Stack>
          </Panel>

          <Button
            size="lg"
            variant='outlined'
            onClick={toggleMode}
            style={{ margin: theme.spacing['md'] }}
          >
            <Typography>
              Switch to {mode === 'light' ? 'dark' : 'light'} mode
            </Typography>
          </Button>
        </Stack>
      </Box>

    </Surface>
  );
}

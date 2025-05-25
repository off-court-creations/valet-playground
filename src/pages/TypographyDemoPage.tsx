// src/pages/TypographyDemoPage.tsx
import { useNavigate } from 'react-router-dom';
import {
  Surface,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  Panel
} from '@archway/valet';

export default function TypographyDemoPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <Surface>
      <Stack spacing={theme.spacing.md} style={{margin: theme.spacing.md}}>
        <Panel style={{ padding: theme.spacing.md }}>
          <Typography variant="h1">
            zeroui h1
          </Typography>

          <Typography variant="h2">
            zeroui h2
          </Typography>

          <Typography variant="h3">
            zeroui h3
          </Typography>

          <Typography variant="h4">
            zeroui h4
          </Typography>

          <Typography variant="h5">
            zeroui h5
          </Typography>

          <Typography variant="h6">
            zeroui h6
          </Typography>
        </Panel>

        <Panel style={{ padding: theme.spacing.md }}>
          <Typography
            variant="body"
            style={{ margin: `${theme.spacing.md} 0` }
            }>
            This is a body copy example.
          </Typography>

          <Typography
            variant="subtitle"
          >
            This is a subtitle copy example.
          </Typography>

          <Typography
            variant="body"
            bold
            style={{ margin: `${theme.spacing.md} 0` }
            }>
            This is a bold body copy example.
          </Typography>

          <Typography
            variant="subtitle"
            bold
          >
            This is a bold subtitle copy example.
          </Typography>

          <Typography
            variant="body"
            italic
            style={{ margin: `${theme.spacing.md} 0` }
            }>
            This is an italic body copy example.
          </Typography>

          <Typography
            variant="subtitle"
            italic
          >
            This is an italic subtitle copy example.
          </Typography>

          <Typography
            variant="body"
            italic
            bold
            style={{ margin: `${theme.spacing.md} 0` }
            }>
            This is a bold italic body copy example.
          </Typography>

          <Typography
            variant="subtitle"
            italic
            bold
          >
            This is a bold italic subtitle copy example.
          </Typography>
        </Panel>

        <Panel style={{ padding: theme.spacing.md }}>
          <Typography>
            Default Typography
          </Typography>

          <Typography>
            Default Typography with <b>inline bold</b>
          </Typography>

          <Typography>
            Default Typography with <i>inline italics</i>
          </Typography>

          <Typography>
            Default Typography with <i><b>inline bold italics</b></i>
          </Typography>
        </Panel>
      </Stack>

      <Stack direction='row' spacing="md" style={{ padding: theme.spacing.md }}>
        <Button size="lg" variant="outlined" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Stack>
    </Surface>
  );
}

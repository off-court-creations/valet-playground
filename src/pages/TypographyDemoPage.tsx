// src/pages/TypographyDemoPage.tsx
import { useNavigate } from 'react-router-dom';
import {
  Surface,
  Box,
  Button,
  Stack,
  Typography,
  useTheme
} from '@archway/zeroui';

export default function TypographyDemoPage() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const toggle = () => {
    setTheme({
      ...theme,
      colors: {
        primary: theme.colors.primary === '#000' ? '#0055AA' : '#000',
        background: '#fff',
      },
    });
  };

  return (
    <Surface style={{ backgroundColor: theme.colors.background }}>
      <Box style={{ padding: theme.spacing.lg, backgroundColor: "gray" }}>
          <Typography variant="h1">
            Hello, ZeroUI!
          </Typography>
  
          <Typography variant="h2">
            Hello, ZeroUI!
          </Typography>
  
          <Typography variant="h3">
            Hello, ZeroUI!
          </Typography>
  
          <Typography variant="h4">
            Hello, ZeroUI!
          </Typography>
  
          <Typography variant="h5">
            Hello, ZeroUI!
          </Typography>
  
          <Typography variant="h6">
            Hello, ZeroUI!
          </Typography>
          
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
  
          <Box 
            style={{ 
              margin: theme.spacing.lg,
              padding: theme.spacing.lg,
              backgroundColor: "blue" 
            }}
          >
            <Typography 
              variant="body" 
              style={{ margin: `${theme.spacing.md} 0` }
            }>
              This is a body copy example inside another box.
            </Typography>
          </Box>
  
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
  
          <Box style={{backgroundColor: "pink"}}>
            <Stack direction='row' spacing={"lg"}>
              <Typography>Stack direction:</Typography>
              <Typography>row | lg</Typography>
            </Stack>
          </Box>
          <Box style={{backgroundColor: "yellow"}}>
            <Stack direction='column' spacing={"sm"}>
              <Typography>Stack direction:</Typography>
              <Typography>column | sm</Typography>
            </Stack>
          </Box>
  
          <Box style={{ margin: theme.spacing.lg, padding: theme.spacing.lg, backgroundColor: "black" }}>
            <Stack direction='row' spacing={"lg"}>
              <Typography style={{color: "white"}}>White Text: Stack row with Stacks inside</Typography>
              <Box style={{backgroundColor: "pink"}}>
                <Stack direction='row' spacing={"lg"}>
                  <Typography>Stack direction:</Typography>
                  <Typography>row | lg</Typography>
                </Stack>
              </Box>
              <Box style={{backgroundColor: "yellow"}}>
                <Stack direction='column' spacing={"sm"}>
                  <Typography>Stack direction:</Typography>
                  <Typography>column | sm</Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
      </Box>

      <Box style={{ margin: theme.spacing.lg, padding: theme.spacing.lg, backgroundColor: 'blue' }}>
        <Button
          variant="main"
          onClick={toggle}
          style={{ marginRight: theme.spacing.sm }}
        >
          Toggle Color
        </Button>

        <Button variant="alt" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Box>
    </Surface>
  );
}

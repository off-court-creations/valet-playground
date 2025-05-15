import { Box, Typography, Button, Surface, useTheme } from '@zeroui/core';

export function App() {
  const { theme, setTheme } = useTheme();

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
    <Surface style={{ backgroundColor: "green" }}>
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

        <br/>
        
        <Button 
          variant="main" 
          onClick={toggle} 
          style={{ marginRight: theme.spacing.sm }
        }>
          Toggle Color
        </Button>
        
        <Button variant="alt">
          Alt Button
        </Button>
      </Box>
    </Surface>
  );
}

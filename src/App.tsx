import { Box, Typography, Button, useTheme } from '@zeroui/core';

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
    <Box style={{ padding: theme.spacing.lg }}>
      <Typography variant="h1" bold>
        Hello, ZeroUI!
      </Typography>
      <Typography 
        variant="body" 
        italic 
        style={{ margin: `${theme.spacing.md} 0` }
      }>
        This is a body copy example.
      </Typography>
      
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
  );
}

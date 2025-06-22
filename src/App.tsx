// src/App.tsx
import { useRoutes, type RouteObject } from 'react-router-dom';
import { useInitialTheme } from '@archway/valet';

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: async () => ({ Component: (await import('./pages/MainPage')).default }),
  },
  {
    path: '/typography',
    lazy: async () => ({ Component: (await import('./pages/TypographyDemoPage')).default }),
  },
  {
    path: '/presets',
    lazy: async () => ({ Component: (await import('./pages/PresetDemoPage')).default }),
  },
  {
    path: '/form',
    lazy: async () => ({ Component: (await import('./pages/FormDemoPage')).default }),
  },
  {
    path: '/parallax',
    lazy: async () => ({ Component: (await import('./pages/ParallaxDemo')).default }),
  },
  {
    path: '/test',
    lazy: async () => ({ Component: (await import('./pages/Test')).default }),
  },
  {
    path: '/box-demo',
    lazy: async () => ({ Component: (await import('./pages/BoxDemo')).default }),
  },
  {
    path: '/button-demo',
    lazy: async () => ({ Component: (await import('./pages/ButtonDemoPage')).default }),
  },
  {
    path: '/text-form-demo',
    lazy: async () => ({ Component: (await import('./pages/TextFormDemo')).default }),
  },
  {
    path: '/icon-demo',
    lazy: async () => ({ Component: (await import('./pages/IconDemoPage')).default }),
  },
  {
    path: '/icon-button-demo',
    lazy: async () => ({ Component: (await import('./pages/IconButtonDemoPage')).default }),
  },
  {
    path: '/panel-demo',
    lazy: async () => ({ Component: (await import('./pages/PanelDemo')).default }),
  },
  {
    path: '/checkbox-demo',
    lazy: async () => ({ Component: (await import('./pages/CheckBoxDemo')).default }),
  },
  {
    path: '/tooltip-demo',
    lazy: async () => ({ Component: (await import('./pages/TooltipDemo')).default }),
  },
  {
    path: '/modal-demo',
    lazy: async () => ({ Component: (await import('./pages/ModalDemo')).default }),
  },
  {
    path: '/switch-demo',
    lazy: async () => ({ Component: (await import('./pages/SwitchDemo')).default }),
  },
  {
    path: '/accordion-demo',
    lazy: async () => ({ Component: (await import('./pages/AccordionDemo')).default }),
  },
  {
    path: '/tabs-demo',
    lazy: async () => ({ Component: (await import('./pages/TabsDemo')).default }),
  },
  {
    path: '/slider-demo',
    lazy: async () => ({ Component: (await import('./pages/SliderDemo')).default }),
  },
  {
    path: '/progress-demo',
    lazy: async () => ({ Component: (await import('./pages/ProgressDemo')).default }),
  },
  {
    path: '/select-demo',
    lazy: async () => ({ Component: (await import('./pages/SelectDemo')).default }),
  },
  {
    path: '/table-demo',
    lazy: async () => ({ Component: (await import('./pages/TableDemo')).default }),
  },
  {
    path: '/list-demo',
    lazy: async () => ({ Component: (await import('./pages/ListDemoPage')).default }),
  },
  {
    path: '/drawer-demo',
    lazy: async () => ({ Component: (await import('./pages/DrawerDemo')).default }),
  },
  {
    path: '/appbar-demo',
    lazy: async () => ({ Component: (await import('./pages/AppBarDemo')).default }),
  },
  {
    path: '/grid-demo',
    lazy: async () => ({ Component: (await import('./pages/GridDemo')).default }),
  },
  {
    path: '/pagination-demo',
    lazy: async () => ({ Component: (await import('./pages/PaginationDemo')).default }),
  },
  {
    path: '/speeddial-demo',
    lazy: async () => ({ Component: (await import('./pages/SpeedDialDemo')).default }),
  },
  {
    path: '/stepper-demo',
    lazy: async () => ({ Component: (await import('./pages/StepperDemo')).default }),
  },
  {
    path: '/radio-demo',
    lazy: async () => ({ Component: (await import('./pages/RadioGroupDemo')).default }),
  },
];

export function App() {
  useInitialTheme(
    {
      fonts: {
        heading: 'Fira Sans',
        body: 'Ubuntu',
        mono: 'Ubuntu Mono',
      }
    },
    ['Fira Sans', 'Ubuntu', 'Ubuntu Mono', 'Poppins']
  );

  return useRoutes(routes);
}

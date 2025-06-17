// src/App.tsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme, useGoogleFonts } from '@archway/valet';
import MainPage from './pages/MainPage';
import TypographyDemoPage from './pages/TypographyDemoPage';
import PresetDemoPage from './pages/PresetDemoPage';
import FormDemoPage from './pages/FormDemoPage';
import ParallaxDemo from './pages/ParallaxDemo';
import TestPage from './pages/Test';
import BoxDemo from './pages/BoxDemo';
import ButtonDemoPage from './pages/ButtonDemoPage';
import TextFieldDemoPage from './pages/TextFormDemo';
import IconDemoPage from './pages/IconDemoPage';
import IconButtonDemoPage from './pages/IconButtonDemoPage';
import PanelDemoPage from './pages/PanelDemo';
import CheckboxDemoPage from './pages/CheckBoxDemo';
import TooltipDemoPage from './pages/TooltipDemo';
import ModalDemoPage from './pages/ModalDemo';
import SwitchDemoPage from './pages/SwitchDemo';
import AccordionDemoPage from './pages/AccordionDemo';
import TabsDemoPage from './pages/TabsDemo';
import SliderDemoPage from './pages/SliderDemo';
import ProgressDemoPage from './pages/ProgressDemo';

export function App() {
  const { setTheme, theme } = useTheme();

  // preload fonts immediately on first render
  useGoogleFonts([theme.fonts.heading, theme.fonts.body, theme.fonts.mono, "Poppins"]);

  useEffect(() => {
    setTheme({
      fonts: {
        heading: 'Fira Sans',
        body: 'Ubuntu',
        mono: 'Ubuntu Mono',
      },
    });
  }, [setTheme]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/typography" element={<TypographyDemoPage />} />
      <Route path="/presets" element={<PresetDemoPage />} />
      <Route path="/form" element={<FormDemoPage />} />
      <Route path="/parallax" element={<ParallaxDemo />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/box-demo" element={<BoxDemo />} />
      <Route path="/button-demo" element={<ButtonDemoPage />} />
      <Route path="/text-form-demo" element={<TextFieldDemoPage />} />
      <Route path="/icon-demo" element={<IconDemoPage />} />
      <Route path="/icon-button-demo" element={<IconButtonDemoPage />} />
      <Route path="/panel-demo" element={<PanelDemoPage />} />
      <Route path="/checkbox-demo" element={<CheckboxDemoPage />} />
      <Route path="/tooltip-demo" element={<TooltipDemoPage />} />
      <Route path="/modal-demo" element={<ModalDemoPage />} />
      <Route path="/switch-demo" element={<SwitchDemoPage />} />
      <Route path="/accordion-demo" element={<AccordionDemoPage />} />
      <Route path="/tabs-demo" element={<TabsDemoPage />} />
      <Route path="/slider-demo" element={<SliderDemoPage />} />
      <Route path="/progress-demo" element={<ProgressDemoPage />} />
    </Routes>
  );
}

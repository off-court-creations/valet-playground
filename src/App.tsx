// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TypographyDemoPage from './pages/TypographyDemoPage';
import PresetDemoPage from './pages/PresetDemoPage';
import FormDemoPage from './pages/FormDemoPage';
import ParallaxDemo from './pages/ParallaxDemo';
import TestPage from './pages/Test';
import BoxDemo from './pages/BoxDemo';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/typography" element={<TypographyDemoPage />} />
      <Route path="/presets" element={<PresetDemoPage />} />
      <Route path="/form" element={<FormDemoPage />} />
      <Route path="/parallax" element={<ParallaxDemo />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/box-demo" element={<BoxDemo />} />
    </Routes>
  );
}

// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TypographyDemoPage from './pages/TypographyDemoPage';
import PresetDemoPage from './pages/PresetDemoPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/typography" element={<TypographyDemoPage />} />
      <Route path="/presets" element={<PresetDemoPage />} />
    </Routes>
  );
}

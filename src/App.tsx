// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TypographyDemoPage from './pages/TypographyDemoPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/typography" element={<TypographyDemoPage />} />
      {/* add more <Route>s here as you expand */}
    </Routes>
  );
}

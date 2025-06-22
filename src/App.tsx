// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { useInitialTheme } from '@archway/valet';
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
import SelectDemoPage from './pages/SelectDemo';
import TablePlaygroundPage from './pages/TableDemo';
import ListDemoPage from './pages/ListDemoPage';
import DrawerDemoPage from './pages/DrawerDemo';
import AppBarDemoPage from './pages/AppBarDemo';
import GridDemoPage from './pages/GridDemo';
import PaginationDemoPage from './pages/PaginationDemo';
import SpeedDialDemoPage from './pages/SpeedDialDemo';
import StepperDemoPage from './pages/StepperDemo';
import RadioGroupDemoPage from './pages/RadioGroupDemo';

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
      <Route path="/select-demo" element={<SelectDemoPage />} />
      <Route path="/table-demo" element={<TablePlaygroundPage />} />
      <Route path="/list-demo" element={<ListDemoPage />} />
      <Route path="/drawer-demo" element={<DrawerDemoPage />} />
      <Route path="/appbar-demo" element={<AppBarDemoPage />} />
      <Route path="/grid-demo" element={<GridDemoPage />} />
      <Route path="/pagination-demo" element={<PaginationDemoPage />} />
      <Route path="/speeddial-demo" element={<SpeedDialDemoPage />} />
      <Route path="/stepper-demo" element={<StepperDemoPage />} />
      <Route path="/radio-demo" element={<RadioGroupDemoPage />} />
    </Routes>
  );
}

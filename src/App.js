// INDEX.JS ----> APP.JS

// CSS
import './App.css';
// ROUTER
import { HashRouter, Route, Routes } from 'react-router-dom';
// LAYOUTS
import MainLayout from './layouts/mainLayout';
// PAGES
import  Home from './pages/HomePage';
import Weather from './pages/WeatherPage';
import NotFound from './pages/404';

// CONFIG DES ROUTES 
const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Weather" element={<Weather />} />
    </Routes>
  </MainLayout>
)

// EXPORT FUNCTION APP
export default function App() {
  return (
     <HashRouter>
       <Routes>
         <Route path="/*" element={<AppRoutes />}/>
         <Route path="*/*" element={ NotFound } />
       </Routes>
     </HashRouter>
   
  );
}


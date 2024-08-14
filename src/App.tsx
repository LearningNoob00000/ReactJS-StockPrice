import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider"
import LandingPage from "./pages/LandingPage"
import PageFooter from './shared/PageFooter';
import PageHeader from './shared/PageHeader';
import Dashboard from './pages/dashboard';
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="app-container">
         <PageHeader/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
         <PageFooter/>
        </div>
      </Router>
    </ThemeProvider>
  )
}
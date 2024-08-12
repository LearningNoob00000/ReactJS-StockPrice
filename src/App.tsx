
import { ModeToggle } from "./components/mode-toggle"
import { ThemeProvider } from "./components/theme-provider"
import Dashboard from "./pages/dashboard"
import PageHeader from "./shared/PageHeader"
export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <PageHeader/>
      <Dashboard/>
    </ThemeProvider>
  )
}

import { Navbar } from "./Components/Navbar/Navbar"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlayNav } from "./Components/PlayNav/PlayNav"
import { AutoNav } from "./Components/AutoNav/AutoNav"
import { AgentsNav } from "./Components/AgentsNav/AgentsNav"
import { Report } from "./Components/Report/Report"
import { ReportNav } from "./Components/ReportNav/ReportNav"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dashboard" element={<Navbar />} />
        <Route path="/automobile" element={<AutoNav />} />
        <Route path="/healthcare" element={<AutoNav />} />
        <Route path="/technology" element={<AutoNav />} />
        <Route path="/finance" element={<AutoNav />} />
        <Route path="/report-builder" element={<ReportNav />} />
        <Route path="/ai-analyst" element={<AgentsNav />} />
        <Route path="/virtual-analyst" element={<PlayNav />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { Navbar } from "./Components/Navbar/Navbar"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlayNav } from "./Components/PlayNav/PlayNav"
import { AutoNav } from "./Components/AutoNav/AutoNav"
import { AgentsNav } from "./Components/AgentsNav/AgentsNav"
import { ReportNav } from "./Components/ReportNav/ReportNav"
import { CourseNav } from "./Components/CourseNav/CourseNav"
import { GeneratedNav } from "./Components/GeneratedNav/GeneratedNav"
import { LibraryNav } from "./Components/LibraryNav/LibraryNav"
import { Coal } from "./Components/Coal/Coal"
import { Cdashnav } from "./Components/Cdashnav/Cdashnav"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Navbar />} />
        <Route path="/automobile" element={<AutoNav />} />
        <Route path="/healthcare" element={<AutoNav />} />
        <Route path="/technology" element={<AutoNav />} />
        <Route path="/Coal" element={<Coal />} />
        <Route path="/claritydashboard" element={<Cdashnav />} />
        <Route path="/data-library" element={<LibraryNav />} />
        <Route path="/report-builder" element={<ReportNav />} />
        <Route path="/generate-course" element={<CourseNav />} />
        <Route path="/generated" element={<GeneratedNav />} />
        <Route path="/ai-analyst" element={<AgentsNav />} />
        <Route path="/virtual-analyst" element={<PlayNav />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
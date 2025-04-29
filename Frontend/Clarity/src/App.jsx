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
import { NewsNav } from "./Components/Newsnav/Newsnav"
import { CompanyNav } from "./Components/Companynav/Companynav"
import { EvalNav } from "./Components/Evalnav/Evalnav"
import { Automeganav } from "./Components/Automeganav/Automeganav"
import { Top50nav } from "./Components/Top50nav/Top50nav"
import { Subcatnav } from "./Components/Subcatnav/Subcatnav"
import { UserOnboarding } from "./Components/Onboard/Onboard"
import { Supiqnav } from "./Components/Supiq/Supiqnav"
import { Stdashnav } from "./Components/Stdashboard/Stdashnav"
import { Kaccnav } from "./Components/Kaccounts/Kaccnav"
import { Supdashnav } from "./Components/Supdash/Supdashnav"
import { Cananav } from "./Components/Canalysis/Cananav"
import { Vendornav } from "./Components/Vendorrisk/Vendornav"
import { Brandnav } from "./Components/Brandiq/Brandnav"
import { Heatnav } from "./Components/Heatmap/Heatnav"
import { Acciqnav } from "./Components/Acciq/Acciqnav"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onboard" element={<UserOnboarding />} />
        <Route path="/stdashboard" element={<Stdashnav />} />
        <Route path="/kaccounts" element={<Kaccnav />} />
        <Route path="/canalysis" element={<Cananav />} />
        <Route path="/vendorrisk" element={<Vendornav />} />
        <Route path="/brandiq" element={<Brandnav />} />
        <Route path="/mtheatmap" element={<Heatnav />} />
        <Route path="/dashboard" element={<Stdashnav />} />
        {/* <Route path="/dashboard" element={<Navbar />} /> */}
        <Route path="/automobile" element={<Automeganav />} />
        <Route path="/healthcare" element={<AutoNav />} />
        <Route path="/technology" element={<AutoNav />} />
        <Route path="/Coal" element={<Coal />} />
        <Route path="/claritydashboard" element={<Automeganav />} />
        <Route path="/top50" element={<Top50nav />} />
        <Route path="/autodash" element={<AutoNav />} />
        <Route path="/subcat" element={<Subcatnav />} />
        <Route path="/data-library" element={<LibraryNav />} />
        <Route path="/report-builder" element={<ReportNav />} />
        <Route path="/generate-course" element={<CourseNav />} />
        <Route path="/generated" element={<GeneratedNav />} />
        <Route path="/ai-analyst" element={<AgentsNav />} />
        <Route path="/brandnews" element={<NewsNav />} />
        <Route path="/ci" element={<CompanyNav />} />
        <Route path="/eval" element={<EvalNav />} />
        <Route path="/virtual-analyst" element={<PlayNav />} />

        <Route path="/supiq" element={<Supiqnav />} />
        <Route path="/supdash" element={<Supdashnav />} />

        <Route path="/acciq" element={<Acciqnav />} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
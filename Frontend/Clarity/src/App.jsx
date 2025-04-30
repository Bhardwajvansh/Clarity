import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import { AutoNav } from "./Components/AutoNav/AutoNav"
import { Coal } from "./Components/Coal/Coal"
import { UserOnboarding } from "./Components/Onboard/Onboard"
import { AutomotiveDashboard } from './Components/Stdashboard/Supdash1'
import { KeyAccountsMatrix } from './Components/Kaccounts/Kaccounts'
import CompetitorAnalysisDashboard from './Components/Canalysis/Canalysis'
import VendorRiskAnalysisDashboard from './Components/Vendorrisk/Vendorrisk'
import { BrandSentimentDashboard } from './Components/Brandiq/Brandiq'
import { RetailMegaTrendsHeatmap } from './Components/Heatmap/Heatmap'
import Automega from './Components/Automega/Automega'
import { Top50 } from './Components/Top50/Top50'
import { Subcat } from './Components/Subcat/Subcat'
import { Library } from './Components/Library/Library'
import { Report } from './Components/Report/Report'
import { Course } from './Components/Course/Course'
import { Generated } from './Components/Generated/Generated'
import Agents from './Components/Agents/Agents'
import News from './Components/News/News'
import { Company } from './Components/Company/Company'
import Eval from './Components/Eval/Eval'
import Playground from './Components/Playground/Playground'
import SupplierIQDashboard from './Components/Supiq/Supiq'
import { Supdash } from './Components/Supdash/Supdash'
import { Acciq } from './Components/Acciq/Acciq'
import { Catiq } from './Components/Catiq/Catiq'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboard" element={<UserOnboarding />} />

        <Route element={<Layout />}>
          <Route path="/stdashboard" element={<AutomotiveDashboard />} />
          <Route path="/kaccounts" element={<KeyAccountsMatrix />} />
          <Route path="/canalysis" element={<CompetitorAnalysisDashboard />} />
          <Route path="/vendorrisk" element={<VendorRiskAnalysisDashboard />} />
          <Route path="/brandiq" element={<BrandSentimentDashboard />} />
          <Route path="/mtheatmap" element={<RetailMegaTrendsHeatmap />} />
          <Route path="/dashboard" element={<AutomotiveDashboard />} />
          <Route path="/automobile" element={<Automega />} />
          <Route path="/healthcare" element={<AutoNav />} />
          <Route path="/technology" element={<AutoNav />} />
          <Route path="/Coal" element={<Coal />} />
          <Route path="/claritydashboard" element={<Automega />} />
          <Route path="/top50" element={<Top50 />} />
          <Route path="/autodash" element={<AutoNav />} />
          <Route path="/subcat" element={<Subcat />} />
          <Route path="/data-library" element={<Library />} />
          <Route path="/report-builder" element={<Report />} />
          <Route path="/generate-course" element={<Course />} />
          <Route path="/generated" element={<Generated />} />
          <Route path="/ai-analyst" element={<Agents />} />
          <Route path="/brandnews" element={<News />} />
          <Route path="/ci" element={<Company />} />
          <Route path="/eval" element={<Eval />} />
          <Route path="/virtual-analyst" element={<Playground />} />
          <Route path="/supiq" element={<SupplierIQDashboard />} />
          <Route path="/supdash" element={<Supdash />} />
          <Route path="/acciq" element={<Acciq />} />
          <Route path="/catiq" element={<Catiq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
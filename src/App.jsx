import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import BasicSWEducation from './pages/BasicSWEducation'
import AdvancedPhysicalEdu from './pages/AdvancedPhysicalEdu'
import HighCreativeEdu from './pages/HighCreativeEdu'
import InstructorTraining from './pages/InstructorTraining'
import InstitutionEdu from './pages/InstitutionEdu'
import SpecialEdu from './pages/SpecialEdu'
import HackathonEvent from './pages/HackathonEvent'
import AboutUs from './pages/AboutUs'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edu/basic" element={<BasicSWEducation />} />
          <Route path="/edu/advanced-physical" element={<AdvancedPhysicalEdu />} />
          <Route path="/edu/high-creative" element={<HighCreativeEdu />} />
          <Route path="/pro/instructor" element={<InstructorTraining />} />
          <Route path="/pro/institution" element={<InstitutionEdu />} />
          <Route path="/special" element={<SpecialEdu />} />
          <Route path="/event/hackathon" element={<HackathonEvent />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

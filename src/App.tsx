import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { CallForPapers } from './pages/CallForPapers'
import { ImportantDates } from './pages/ImportantDates'
import { PaperSubmission } from './pages/PaperSubmission'
import { PaperReview } from './pages/PaperReview'
import { PaperRegistration } from './pages/PaperRegistration'
import { KeynoteSpeakers } from './pages/KeynoteSpeakers'
import { Committees } from './pages/Committees'
import { Archive } from './pages/Archive'
import { Contact } from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/paper-review" element={<PaperReview />} />
          <Route path="/paper-registration" element={<PaperRegistration />} />
          <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/archive/:edition" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

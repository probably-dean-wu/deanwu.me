import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Page from './components/Page';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Elevator from './pages/Elevator';
import Experience from './pages/Experience';
import Awards from './pages/Awards';
import Resume from './pages/Resume';
import Notes from './pages/notes/Notes';
import IntroToProof from './pages/notes/IntroToProof';
import SetsAndPropositions from './pages/notes/SetsAndPropositions';
import Logic from './pages/notes/Logic';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/elevator" element={<Elevator />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/intro-to-proof" element={<IntroToProof />} />
        <Route path="/sets-and-propositions" element={<SetsAndPropositions />} />
        <Route path="/logic" element={<Logic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <Page title="Page not found">
      <h1>Page not found</h1>
      <p className="lead">This page doesn't exist or has moved.</p>
      <Link to="/">Go to the home page →</Link>
    </Page>
  );
}

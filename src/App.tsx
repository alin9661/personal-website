import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './shared/components/ErrorBoundary';
import { LayoutProvider } from './contexts/LayoutContext';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { ROUTES } from './shared/constants';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <LayoutProvider>
          <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.PROJECTS} element={<Projects />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
              {/* Placeholder routes */}
              <Route 
                path={ROUTES.EXPERIENCE} 
                element={
                  <div className="terminal-window p-6">
                    <h1 className="text-terminal-green">Experience - Coming Soon</h1>
                  </div>
                } 
              />
              <Route 
                path={ROUTES.BLOG} 
                element={
                  <div className="terminal-window p-6">
                    <h1 className="text-terminal-green">Blog - Coming Soon</h1>
                  </div>
                } 
              />
              <Route 
                path={ROUTES.RESUME} 
                element={
                  <div className="terminal-window p-6">
                    <h1 className="text-terminal-green">Resume - Coming Soon</h1>
                  </div>
                } 
              />
            </Routes>
          </ErrorBoundary>
          </Layout>
        </LayoutProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
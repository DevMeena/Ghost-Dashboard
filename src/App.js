import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './pages/Links';
import Sidebar from './components/Sidebar';
import Posts from './pages/Posts';
import Dashboard from './pages/Dashboard';
// require('dotenv').config();

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Sidebar />
                <Dashboard />
              </>
            }
          ></Route>
          <Route
            path='/links'
            element={
              <>
                <Sidebar />
                <Links />
              </>
            }
          ></Route>
          <Route
            path='/posts'
            element={
              <>
                <Sidebar />
                <Posts />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

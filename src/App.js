import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
   <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
   </>
  );
}

export default App;

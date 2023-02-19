import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './try/Home';
import UploadFiles from './try/UploadFiles';
import UseLocation from './try/UseLocation';
import UseNavigate from './try/UseNavigate';
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/uploadFiles' element={<UploadFiles/>}/>
      <Route path='/useLocation' element={<UseLocation/>}/>
      <Route path='/useNavigate' element={<UseNavigate/>}/>
      </Routes>
    </div>
  );
}

export default App;

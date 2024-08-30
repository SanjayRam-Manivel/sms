
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import DashBoard from './pages/DashBoard';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import LoginForm from './Component/LoginForm/LoginForm';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <div className='main d-flex '>
      <div className='sidebarWrapper '>
        <Sidebar/>
        
      </div>
      <div className='content'>
      <Routes>
          <Route path = "/" exact element={<LoginForm/>}/>
          <Route path = "/dashboard" exact element={<DashBoard/>}/>
        </Routes>
      </div>
    </div>
    <DashBoard/>
      </BrowserRouter>
  );
}

export default App;

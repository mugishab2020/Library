import AdminLogin from './AdminLogin';
import AdminReport from './AdminReport';
import './App.css';
import Login from './Login';
import Success from './Success';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/success' element={<Success />}/>
      <Route path='/admin-login' element={<AdminLogin />}/>
      <Route path='/admin-report' element={<AdminReport />}/>
      
    </Routes>
  </Router>
  );
}
export default App;

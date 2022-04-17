import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import HomeTarget from './Page/Home/Home/HomeTarget';
import Login from './Page/Login/LOgin/Login';
import Register from './Page/Login/Register/Register';
import ServiceDetails from './Page/ServiceDetails/ServiceDetails';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import NotFound from './Page/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomeTarget></HomeTarget>}></Route>
        <Route path='/home' element={<HomeTarget></HomeTarget>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import HomeTarget from './Page/Home/Home/HomeTarget';
import ServiceDetails from './Page/ServiceDetails/ServiceDetails';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomeTarget></HomeTarget>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

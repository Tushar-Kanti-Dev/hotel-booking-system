
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Rooms from './Pages/Home/Rooms/Rooms';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

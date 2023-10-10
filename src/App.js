
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import LatestRecepies from './components/LatestRecepies';
import Home from './components/Home';
import Recipies from './components/Recipies';
import SingleRecepie from './components/SingleRecepie';
import Myadmin from './components/Myadmin';

import { Route, Routes } from 'react-router-dom'
import DataState from './components/Context/DataState';
import Addrecepies from './components/Addrecepies';
import { Navigate } from 'react-router-dom';
import Protected from './components/Protected';
import Protectedsecond from './components/Protectedsecond';
import Footer from './components/Footer';
// import Footercatagory from './components/Footercatagory';






function App() {
  return (
    <div >
      <DataState>
        <Header />
        {/* <Slider/>
      <LatestRecepies/> */}
        <Routes>


          <Route path="/addrecepie" element={<Protected Component={Addrecepies} />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/recepies" element={<Recipies />} />
          <Route path="/SingleRecepie/:id" element={<SingleRecepie />} />
          {/* <Route path="/myadmin" element={<Myadmin />} /> */}
          <Route path="/myadmin" element={<Protectedsecond Component={Myadmin} />} />
          {/* <Route path="/myadmin" element={<Myadmin />} /> */}
          {/* <Route path="/footercatagory/:cat" element={<Footercatagory />} /> */}


          <Route path="*" element={<Navigate to="/" />} />



        </Routes>
        <Footer   />
      </DataState>

    </div>
  );
}

export default App;

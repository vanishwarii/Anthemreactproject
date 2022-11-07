import {
    BrowserRouter as Router, 
    Routes, 
    Route
  } from 'react-router-dom';
  import Drug from './Components/Main/DrugFinder/drugpage';
  import MainContent from '../src/Components/Main/maincontent';
import Pharmacy from './Components/Main/PharmacyFinder/Pharmacy';
import PharmacyDetail from './Components/Main/PharmacyFinder/PharmacyDetail';

  const Routing=()=>{
    return(
        <Router>
        <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/drug' element={<Drug />} />
        <Route path='/pharmacy' element={<Pharmacy/>}/>
       
        </Routes>
        </Router>
   
    )
  }
  export default Routing;
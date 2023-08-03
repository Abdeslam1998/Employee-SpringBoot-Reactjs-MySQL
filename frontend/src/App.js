import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployees from './components/ListEmployees';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';
//import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' exact element={<ListEmployees />} />
            <Route path='/employees' element={<ListEmployees />} />
            {/*step1*/}
            <Route path='/add-employee/:id' element={<CreateEmployee />} />
            {/*<Route path='/update-employee/:id' element={<UpdateEmployee />} />*/}
            <Route path='/view-employee/:id' element={<ViewEmployee />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;

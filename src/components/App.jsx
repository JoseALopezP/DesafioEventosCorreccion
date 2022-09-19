import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import Product from './Product';

function App() {
      return (
        <>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}></Route>
              <Route path='/product/:id' element={<Product/>}></Route>
              <Route path='/cart'></Route>
            </Routes>
          </BrowserRouter>
        </>
      ); 
    };

export default App;

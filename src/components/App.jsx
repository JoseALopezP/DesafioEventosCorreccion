import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ProductDetail from './ProductDetail';

function App() {
      return (
        <>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}></Route>
              <Route path='/product/:id' element={<ProductDetail/>}></Route>
              <Route path='/cart'></Route>
            </Routes>
          </BrowserRouter>
        </>
      ); 
    };

export default App;

import './App.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar.js";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={ItemListContainer}/>
    </Routes>
        <NavBar />
        {/* <ItemListContainer greeting={"Próximamente Polène Store"}/> */}
        <ItemCount />
    </BrowserRouter>
    </>
  );
}

export default App;

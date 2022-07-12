import './App.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar.js";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Próximamente Polène Store"}/>
      <ItemCount />
    </>
    
  );
}

export default App;

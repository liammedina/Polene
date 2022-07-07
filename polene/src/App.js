import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar.js";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Próximamente Polène Store"}/>
    </>
    
  );
}

export default App;

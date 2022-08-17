import React, {useState} from 'react';
import './App.css';
import InsertProduct from './components/InsertProduct';
import ShowProducts from './components/ShowProducts';

function App() {
  
  const [screenProd, setScreen] = useState(true);
  
  const handleClick = () => {
    setScreen(!screenProd);
  }

  return (
    <>
      <button onClick={handleClick}>Mostrar produtos</button>
      <button onClick={handleClick}>Cadastrar novo produto</button>
      <br />
      <div id='expo'>
        {screenProd ? <InsertProduct />:<ShowProducts />}
      </div>
    </>
  );
}

export default App;

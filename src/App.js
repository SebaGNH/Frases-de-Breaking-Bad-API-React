import React, {useState, useEffect} from 'react';
import {DivContenedor,Button} from './Styles/App';
import Frase from './components/Frase';



function App() {
  const [frase, setFrase] = useState({});

  const llamarApi = async (e) => {
    const API_key = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase =  await API_key.json();
    //console.log(frase[0])
    setFrase(frase[0]);
  }

  //Cargar una frase
  useEffect( () => {
    llamarApi();
  },[]);


  return (
    <DivContenedor>
        <Frase
          frase={frase}
        />

      <Button 
        onClick={llamarApi}
      >Obtener Frase</Button>
    </DivContenedor>
  );
}
export default App;

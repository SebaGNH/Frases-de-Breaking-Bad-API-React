import React, {useState} from 'react';
import {DivContenedor,Button} from './Styles/App';
import Frase from './components/Frase';



function App() {
  const [frase, setFrase] = useState({});

  const onclickHandler = async (e) => {
    const API_key = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase =  await API_key.json();
    //console.log(frase[0])
    setFrase(frase[0]);
  }



  return (
    <DivContenedor>
      <Button 
        onClick={onclickHandler}
      >Obtener Frase</Button>

      <Frase
        frase={frase}
      />

    </DivContenedor>
  );
}
export default App;

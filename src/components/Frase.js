import React from 'react';
import PropTypes from 'prop-types';
import {DivContenedorFrase} from '../Styles/Frase';


const Frase = ({frase}) => {

  if(Object.keys(frase).length === 0){
    return;
  }

  const {author,quote} = frase;
  //console.log(Object.keys(frase).length); // 0 / 2

  return (
    <DivContenedorFrase>     
        <h1>{quote}</h1>
        <p>{author}</p>
    </DivContenedorFrase>
  );
}

Frase.propTypes = {
  frase: PropTypes.object.isRequired
}

export default Frase;
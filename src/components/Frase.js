import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Frase = ({frase}) => {
  const {author,quote} = frase;
  return (
    <Fragment>     
        <h1>{author}</h1>
        <p>{quote}</p>
    </Fragment>
  );
}

Frase.propTypes = {
  frase: PropTypes.object.isRequired
}

export default Frase;
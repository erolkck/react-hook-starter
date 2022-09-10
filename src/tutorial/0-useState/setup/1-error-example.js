import React from 'react';

const ErrorExample = () => {
  
  let title ="rastgele Baslik"
  const handleClick =()=> {
   title =" selam Millet"
   console.log(title)
  }
  
  return ( <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>Basligi Degistir
    </button>
  </React.Fragment>
  )
};

export default ErrorExample;

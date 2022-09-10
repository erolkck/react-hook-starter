import React, { useState } from 'react';

const UseStateBasics = () => {
// console.log(useState('hello world'))
// const deger = useState(1)[0]
// const handler = useState(1)[1]
// console.log(deger,handler)
const [text,setText] = useState("rastgele baslik")
const handleClick=() =>{
  if (text === 'rastgele baslik') {

    setText('Selam Millet')
  }else {
    setText('rastgele baslik')
  }
}
  return( <React.Fragment>
    <h1>{text}</h1>
    <button className='btn'onClick={handleClick}>Basligi Degistir</button>
  </React.Fragment>
  )
};

export default UseStateBasics;
